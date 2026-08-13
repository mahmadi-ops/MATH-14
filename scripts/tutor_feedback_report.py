#!/usr/bin/env python3
"""Summarize the Socratic tutor's student feedback.

Reads the CSV exported from the feedback spreadsheet (File -> Download ->
Comma-separated values; see ai-tutor/README.md) and writes a report: what
students think overall, which assignments and problems the complaints cluster
on, and every open-ended comment grouped so the negative ones are read first.

    python3 scripts/tutor_feedback_report.py feedback.csv
    python3 scripts/tutor_feedback_report.py feedback.csv --html report.html
    python3 scripts/tutor_feedback_report.py feedback.csv --since 2026-09-01
    python3 scripts/tutor_feedback_report.py feedback.csv --assignment 3
"""

import argparse
import csv
import html
import re
import sys
from collections import Counter, defaultdict
from datetime import datetime

# Best to worst, which is also the order ratings are reported in.
RATINGS = ["helped a lot", "helped a little", "did not help", "made things worse"]
POSITIVE = set(RATINGS[:2])
NEGATIVE = set(RATINGS[2:])


def parse_date(value):
    """Accept the several shapes Sheets and the widget produce; else None."""
    text = (value or "").strip()
    if not text:
        return None
    text = text.replace("Z", "+00:00")
    try:
        return datetime.fromisoformat(text).replace(tzinfo=None)
    except ValueError:
        pass
    for fmt in ("%m/%d/%Y %H:%M:%S", "%Y-%m-%d %H:%M:%S", "%m/%d/%Y", "%Y-%m-%d"):
        try:
            return datetime.strptime(text, fmt)
        except ValueError:
            continue
    return None


def dedupe(rows):
    """Collapse one submission that reached the sheet more than once.

    Early versions of the widget sent each note twice — a plain POST that the
    browser reported as failed even though the row was written, then a no-cors
    retry — so the sheet holds pairs a second or two apart. `sentAt` is stamped
    once by the browser, to the millisecond, so a repeated (session, sentAt) is
    the same submission rather than a student who wrote twice in one instant.
    Rows without a sentAt are always kept: there is nothing to match them on.
    """
    seen = set()
    out = []
    for row in rows:
        stamp = row.get("sentat", "")
        key = (row.get("session", ""), stamp)
        if stamp and key in seen:
            continue
        if stamp:
            seen.add(key)
        out.append(row)
    return out


def load(path, since=None, assignment=None):
    with open(path, newline="", encoding="utf-8-sig") as handle:
        rows = list(csv.DictReader(handle))

    # Tolerate a renamed or reordered header row: match on lowercased names.
    cleaned = []
    for row in rows:
        item = {(k or "").strip().lower(): (v or "").strip() for k, v in row.items()}
        item["when"] = parse_date(item.get("sentat")) or parse_date(item.get("received"))
        item["hintsused"] = int(item["hintsused"]) if item.get("hintsused", "").isdigit() else 0
        cleaned.append(item)

    cleaned = dedupe(cleaned)

    if since:
        cutoff = parse_date(since)
        if not cutoff:
            sys.exit(f"--since: could not read the date {since!r}")
        cleaned = [r for r in cleaned if r["when"] and r["when"] >= cutoff]
    if assignment:
        want = str(assignment).strip().lower().replace("assignment", "").strip()
        def match(row):
            section = row.get("section", "").lower()
            page = row.get("page", "").lower()
            return (f"assignment {want}" == section.strip()
                    or re.search(rf"\bhw{want}\b", page) is not None)
        cleaned = [r for r in cleaned if match(r)]
    return cleaned


def bar(count, total, width=28):
    if not total:
        return ""
    filled = round(width * count / total)
    return "█" * filled + "·" * (width - filled)


def rating_counts(rows):
    counts = Counter(r.get("rating", "") for r in rows)
    return [(name, counts.get(name, 0)) for name in RATINGS], counts.get("", 0)


def group_scores(rows, key):
    """Per group: total, positives, negatives — sorted worst-first."""
    groups = defaultdict(lambda: {"n": 0, "pos": 0, "neg": 0, "hints": []})
    for row in rows:
        name = row.get(key, "") or "(not recorded)"
        bucket = groups[name]
        bucket["n"] += 1
        if row.get("rating") in POSITIVE:
            bucket["pos"] += 1
        elif row.get("rating") in NEGATIVE:
            bucket["neg"] += 1
        bucket["hints"].append(row["hintsused"])
    ordered = sorted(
        groups.items(),
        key=lambda kv: (-kv[1]["neg"], -kv[1]["n"], kv[0]),
    )
    return ordered


def comments(rows):
    """Open-ended answers, hardest first — those are the ones to act on.

    Order: made things worse, didn't help, unrated (often the most detailed),
    then the praise; newest first within each group.
    """
    severity = {"made things worse": 0, "did not help": 1, "": 2,
                "helped a little": 3, "helped a lot": 4}

    def order(row):
        rank = severity.get(row.get("rating", ""), 2)
        when = row.get("when") or datetime.min
        return (rank, -when.timestamp())

    return sorted((r for r in rows if r.get("comment")), key=order)


def hints_phrase(n):
    return "1 hint used" if n == 1 else f"{n} hints used"


def text_report(rows, show_transcripts=False):
    out = []
    add = out.append
    total = len(rows)
    add("=" * 66)
    add("  MATH 14 Socratic tutor — student feedback")
    add("=" * 66)
    if not total:
        add("\nNo submissions in this selection.\n")
        return "\n".join(out)

    dated = [r["when"] for r in rows if r["when"]]
    if dated:
        add(f"\n{total} submissions, {min(dated):%b %-d} to {max(dated):%b %-d, %Y}"
            f" — from {len({r.get('session') for r in rows})} different browsers")
    else:
        add(f"\n{total} submissions")

    counted, unrated = rating_counts(rows)
    rated_total = sum(n for _, n in counted)
    add("\nHOW IT LANDED")
    for name, n in counted:
        share = f"{100 * n / rated_total:5.1f}%" if rated_total else "    —"
        add(f"  {name:<18} {n:>4}  {share}  {bar(n, rated_total)}")
    if rated_total:
        helped = sum(n for name, n in counted if name in POSITIVE)
        add(f"\n  {100 * helped / rated_total:.0f}% said it helped"
            f" ({helped} of {rated_total} rated submissions).")
    if unrated:
        add(f"  {unrated} submission(s) had a written comment but no rating.")

    models = group_scores(rows, "model")
    if len(models) > 1 or (models and models[0][0] != "(not recorded)"):
        add("\nBY MODEL" + " " * 13 + "total   helped   didn't   % helped")
        for name, g in sorted(models, key=lambda kv: kv[0]):
            rated = g["pos"] + g["neg"]
            pct = f"{100 * g['pos'] / rated:.0f}%" if rated else "—"
            add(f"  {name[:20]:<20} {g['n']:>5} {g['pos']:>8} {g['neg']:>8} {pct:>10}")
        add("  (a model's share of 'helped' is the number to compare, not its raw count)")

    add("\nBY ASSIGNMENT" + " " * 8 + "total   helped   didn't   avg hints used")
    for name, g in group_scores(rows, "section"):
        avg = sum(g["hints"]) / len(g["hints"]) if g["hints"] else 0
        add(f"  {name[:20]:<20} {g['n']:>5} {g['pos']:>8} {g['neg']:>8}   {avg:>10.1f}")

    problems = [(n, g) for n, g in group_scores(rows, "problem") if g["neg"]]
    if problems:
        add("\nPROBLEMS DRAWING THE MOST 'didn't help' / 'made things worse'")
        for name, g in problems[:8]:
            add(f"  {g['neg']:>3} of {g['n']:<3}  {name[:56]}")

    devices = Counter(r.get("device", "").split(" ")[0] for r in rows if r.get("device"))
    if devices:
        parts = ", ".join(f"{k or 'unknown'}: {v}" for k, v in devices.most_common())
        add(f"\nSCREENS  {parts}")
        small_neg = sum(1 for r in rows
                        if r.get("device", "").startswith("small") and r.get("rating") in NEGATIVE)
        small_all = sum(1 for r in rows if r.get("device", "").startswith("small"))
        if small_all:
            add(f"         phones: {small_neg} of {small_all} negative")

    written = comments(rows)
    add(f"\nWHAT STUDENTS WROTE  ({len(written)} comments, hardest first)")
    add("-" * 66)
    for row in written:
        where = " / ".join(x for x in (row.get("section"), row.get("problem")) if x)
        stamp = f"{row['when']:%b %-d}" if row["when"] else "—"
        add(f"\n[{row.get('rating') or 'no rating'}] {where or 'no problem selected'}"
            f"  ({hints_phrase(row['hintsused'])}, {stamp})")
        for line in row["comment"].splitlines():
            add(f"    {line}")
        if show_transcripts and row.get("transcript"):
            add("    --- conversation ---")
            for line in row["transcript"].splitlines():
                add(f"    | {line}")
    add("")
    return "\n".join(out)


def html_report(rows, show_transcripts=False):
    esc = html.escape
    counted, unrated = rating_counts(rows)
    rated_total = sum(n for _, n in counted)
    dated = [r["when"] for r in rows if r["when"]]
    span = (f"{min(dated):%B %-d} – {max(dated):%B %-d, %Y}" if dated else "")
    helped = sum(n for name, n in counted if name in POSITIVE)

    parts = ["""<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tutor feedback</title><style>
:root { --bg:#fff; --fg:#1a1a1a; --muted:#666; --line:#e2e2e2; --accent:#205f80;
        --good:#3d7d4f; --bad:#b3372e; --card:#f7f8f9; }
@media (prefers-color-scheme: dark) { :root {
  --bg:#191b1d; --fg:#e8e8e8; --muted:#a2a2a2; --line:#33383c; --accent:#7db8d8;
  --good:#6fb383; --bad:#e0776c; --card:#212528; } }
* { box-sizing:border-box; } body { margin:0; padding:32px 20px; background:var(--bg);
  color:var(--fg); font:16px/1.55 -apple-system,"Segoe UI",system-ui,sans-serif; }
.wrap { max-width:820px; margin:0 auto; }
h1 { font-size:26px; margin:0 0 4px; } h2 { font-size:17px; margin:34px 0 12px;
  text-transform:uppercase; letter-spacing:.07em; color:var(--muted); }
.sub { color:var(--muted); margin:0 0 8px; }
.big { font-size:40px; font-weight:700; color:var(--accent); line-height:1.1; }
table { width:100%; border-collapse:collapse; } td,th { padding:7px 8px;
  border-bottom:1px solid var(--line); text-align:left; vertical-align:top; }
th { font-size:13px; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); }
td.n, th.n { text-align:right; white-space:nowrap; }
.meter { height:9px; border-radius:5px; background:var(--line); overflow:hidden; min-width:120px; }
.meter i { display:block; height:100%; background:var(--accent); }
.c { background:var(--card); border-left:3px solid var(--line); border-radius:0 8px 8px 0;
  padding:12px 14px; margin:0 0 12px; }
.c.neg { border-left-color:var(--bad); } .c.pos { border-left-color:var(--good); }
.c .meta { font-size:12.5px; color:var(--muted); margin-bottom:6px; }
.c p { margin:0 0 6px; white-space:pre-wrap; }
details { margin-top:8px; font-size:14px; } pre { white-space:pre-wrap; margin:8px 0 0;
  font:13px/1.5 ui-monospace,Menlo,Consolas,monospace; color:var(--muted); }
</style></head><body><div class="wrap">"""]
    add = parts.append
    add(f"<h1>Tutor feedback</h1><p class='sub'>{esc(span)}</p>")

    if not rows:
        add("<p>No submissions in this selection.</p></div></body></html>")
        return "".join(parts)

    add(f"<p class='big'>{100 * helped // rated_total if rated_total else 0}%</p>"
        f"<p class='sub'>said the tutor helped &mdash; {len(rows)} submissions from "
        f"{len({r.get('session') for r in rows})} browsers</p>")

    add("<h2>How it landed</h2><table>")
    for name, n in counted:
        pct = 100 * n / rated_total if rated_total else 0
        add(f"<tr><td>{esc(name)}</td><td class='n'>{n}</td>"
            f"<td style='width:45%'><div class='meter'><i style='width:{pct:.0f}%'></i></div></td>"
            f"<td class='n'>{pct:.0f}%</td></tr>")
    add("</table>")
    if unrated:
        add(f"<p class='sub'>{unrated} wrote a comment without choosing a rating.</p>")

    models = group_scores(rows, "model")
    if len(models) > 1 or (models and models[0][0] != "(not recorded)"):
        add("<h2>By model</h2><table><tr><th>Model</th><th class='n'>Total</th>"
            "<th class='n'>Helped</th><th class='n'>Didn't</th><th class='n'>% helped</th></tr>")
        for name, g in sorted(models, key=lambda kv: kv[0]):
            rated = g["pos"] + g["neg"]
            pct = f"{100 * g['pos'] / rated:.0f}%" if rated else "&mdash;"
            add(f"<tr><td>{esc(name)}</td><td class='n'>{g['n']}</td><td class='n'>{g['pos']}</td>"
                f"<td class='n'>{g['neg']}</td><td class='n'>{pct}</td></tr>")
        add("</table>")

    add("<h2>By assignment</h2><table><tr><th>Assignment</th><th class='n'>Total</th>"
        "<th class='n'>Helped</th><th class='n'>Didn't</th><th class='n'>Avg hints</th></tr>")
    for name, g in group_scores(rows, "section"):
        avg = sum(g["hints"]) / len(g["hints"]) if g["hints"] else 0
        add(f"<tr><td>{esc(name)}</td><td class='n'>{g['n']}</td><td class='n'>{g['pos']}</td>"
            f"<td class='n'>{g['neg']}</td><td class='n'>{avg:.1f}</td></tr>")
    add("</table>")

    problems = [(n, g) for n, g in group_scores(rows, "problem") if g["neg"]]
    if problems:
        add("<h2>Problems drawing the most negative notes</h2><table>")
        for name, g in problems[:10]:
            add(f"<tr><td>{esc(name)}</td><td class='n'>{g['neg']} of {g['n']}</td></tr>")
        add("</table>")

    written = comments(rows)
    add(f"<h2>What students wrote ({len(written)})</h2>")
    for row in written:
        rating = row.get("rating", "")
        cls = "neg" if rating in NEGATIVE else ("pos" if rating in POSITIVE else "")
        where = " / ".join(x for x in (row.get("section"), row.get("problem")) if x)
        stamp = f"{row['when']:%b %-d}" if row["when"] else ""
        add(f"<div class='c {cls}'><div class='meta'>{esc(rating or 'no rating')} &middot; "
            f"{esc(where or 'no problem selected')} &middot; {hints_phrase(row['hintsused'])} "
            f"&middot; {esc(stamp)}</div><p>{esc(row['comment'])}</p>")
        if show_transcripts and row.get("transcript"):
            add(f"<details><summary>conversation</summary><pre>{esc(row['transcript'])}</pre></details>")
        add("</div>")
    add("</div></body></html>")
    return "".join(parts)


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("csv", help="CSV exported from the feedback spreadsheet")
    ap.add_argument("--html", metavar="FILE", help="also write a self-contained HTML report")
    ap.add_argument("--since", metavar="DATE", help="only submissions on or after this date")
    ap.add_argument("--assignment", metavar="N", help="only one assignment, e.g. 3")
    ap.add_argument("--transcripts", action="store_true",
                    help="include attached conversations in full")
    args = ap.parse_args()

    rows = load(args.csv, since=args.since, assignment=args.assignment)
    print(text_report(rows, show_transcripts=args.transcripts))
    if args.html:
        with open(args.html, "w", encoding="utf-8") as handle:
            handle.write(html_report(rows, show_transcripts=args.transcripts))
        print(f"HTML report written to {args.html}")


if __name__ == "__main__":
    main()
