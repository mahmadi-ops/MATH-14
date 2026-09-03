# Claude workflow — MATH 14 course notes (PreTeXt book)

This repo is the MATH 14 (Calculus IV, SCU) completed lecture-notes book,
published to https://mahmadi-ops.github.io/MATH-14/ by
`.github/workflows/pretext-deploy.yml` on every push to `main` (web target
only; this book has no PDF button). Page filenames on the site come from
the `xml:id` of each section (e.g. `sec-parametrization.html`).

Do **not** reorganize the book: no renaming files, no moving sections, no
changing `publication/`, `project.ptx`, or the chapter order in
`source/main.ptx` beyond what the desk workflow below requires.

Companion repos: `mahmadi-ops/MATH14-Skeletal` (the skeletal notes, the
ten assignments, the four review sets, and solution release are posted
from there, not here) and `mahmadi-ops/MATH14-Syllabus-Fall2026` (the
syllabus; posting never touches it).

## The Posting Desk (MATH 14)

The instructor's control panel:
https://claude.ai/code/artifact/a3e93642-a2cb-47f4-9654-f5eb959ea9cb

It works exactly like the MATH 13 desk, whose rulebook is
`mahmadi-ops/M13-Mehdi/CLAUDE.md`: the request kinds, the instructor
saying "check the MATH 14 posting desk" in chat, the standing
authorization to commit panel-initiated changes straight to `main` (still
validated first), never inventing content, and updating the panel on top
of its current version afterwards. Facts specific to this book:

- `scripts/desk_action.py post-notes|unpost-notes <xml:id> [<xml:id> ...]`
  toggles a section's `<xi:include>` with the UNPOSTED wrapper. The
  chapters are inline in `source/main.ptx`, so a chapter with no live
  section is wrapped whole in `<!-- HIDDEN-CHAPTER-BEGIN ...
  HIDDEN-CHAPTER-END -->` (its includes bare inside, since a comment cannot
  nest one), and `ch-coming-soon.ptx` stands in while no real chapter is
  visible. Never hand-edit those wrappers; run the script. Several ids in
  one call are one change checked as a whole, which is how sets that cite
  each other go up or down together, and how a clean slate is done.
- A section that cites an earlier one cannot go up alone: the script bails
  on a dangling cross-reference and restores every file. Post the cited
  section with it, in the same call.
- `frontmatter.ptx` and `introduction.ptx` are always live and must never
  `<xref>` toggleable content (the introduction now names the AI-tutor
  guide in plain text for that reason).
- `.github/workflows/desk-requests.yml` applies `desk-requests/*.json`
  committed by the panel's instant path and redeploys.
- The assignments here are the same auto-graded sets as the skeletal
  book's, with solutions hidden by `<version include="none"/>` in
  `publication/publication.ptx`. The desk releases solutions on the
  skeletal site; if a set is ever posted here too, the same switch applies.

## Validating a change

Before any push: `xmllint --noout source/<file>.ptx` on every touched
file, `python3 scripts/desk_action.py` reports dangling cross-references
itself, and a `workflow_dispatch` of `pretext-deploy.yml` on the branch is
the build check (the PreTeXt CLI does not install in the Claude session).
Never mark anything posted on the desk before the corresponding push to
`main` has been made.
