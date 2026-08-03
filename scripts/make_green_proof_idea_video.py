#!/usr/bin/env python3
"""Render the animation explaining the idea behind the proof of Green's
theorem.

The video argues the theorem, it does not compute it.  Deliberately absent:
the description of R as f_2(x) <= y <= f_1(x), the two one-variable
integrals, and every line of the algebra in the written proof.  What is
present is the chain of ideas that algebra exists to support:

  1.  the statement: circulation around C, against the integral of the
      k-component of the curl over the inside;
  2.  that curl is circulation per unit area -- what one tiny rectangle says;
  3.  chop R into such rectangles;
  4.  add the circulation around every rectangle;
  5.  every interior edge is travelled twice, once in each direction, so the
      interior cancels in pairs;
  6.  only the outer edges survive: the sum of the little circulations IS
      the boundary integral, and the sum of (curl F . k) dA is the double
      integral;
  7.  the same bookkeeping the divergence theorem keeps, one dimension up.

The field is F = <M,N> throughout, matching the notation of the text.

Styling follows the other videos in the book (the palette and typography of
scripts/make_stokes_proof_idea_video.py): black background, Computer Modern
text in white, blue boundary, orange highlight, purple circulation arrows,
red field.

Manim itself cannot be built in this container (manimpango needs Pango
headers), so the frames are drawn with matplotlib and piped to ffmpeg, as in
scripts/make_wire_partition_video.py.

Output: assets/videos/green_proof_idea_1080p.mp4 (1920x1080, 30 fps).

Run with:  python3 scripts/make_green_proof_idea_video.py
"""

import subprocess
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import imageio_ffmpeg
from matplotlib.patches import FancyArrowPatch, Polygon, Rectangle

FPS = 30
W, H = 1920, 1080
OUT = Path(__file__).resolve().parents[1] / "assets" / "videos" / \
    "green_proof_idea_1080p.mp4"

# the palette of the other videos in the book
BG = "#000000"
INK = "#ffffff"
CURVE = "#2e9aff"          # the boundary curve C
REGION = "#1d5e8c"         # the region R
HILITE = "#ff862f"         # the two cells under discussion
CIRC = "#c77dff"           # circulation arrows around a cell
FIELD = "#fc6255"          # the field F
GRIDC = "#7fb8e6"          # the grid of cells
DIM = "#5a5a5a"

plt.rcParams.update({
    "mathtext.fontset": "cm",
    "font.family": "serif",
    "text.color": INK,
})

# --------------------------------------------------------------- the region
# A blob, round enough that nobody mistakes the argument for one about
# rectangles, simple enough that the grid stays readable.
NGRID = 6                  # cells across the blob
CELL = 2.6 / NGRID


def boundary(t):
    r = 1.15 + 0.16 * np.cos(3 * t) + 0.09 * np.sin(2 * t)
    return np.stack([r * np.cos(t), r * np.sin(t)], axis=-1)


def inside(p):
    """Is the point inside the blob?"""
    x, y = p
    t = np.arctan2(y, x)
    r = 1.15 + 0.16 * np.cos(3 * t) + 0.09 * np.sin(2 * t)
    return np.hypot(x, y) <= r


def cells():
    out = []
    for i in range(NGRID + 2):
        for j in range(NGRID + 2):
            c = np.array([-1.3 - CELL / 2 + i * CELL,
                          -1.3 - CELL / 2 + j * CELL])
            if inside(c):
                out.append(c)
    return out


CELLS = cells()


def field(p):
    """A field with visibly positive curl; drawn, never differentiated."""
    x, y = p
    return np.array([-0.55 * y + 0.10, 0.55 * x])


# --------------------------------------------------------------- the canvas
fig = plt.figure(figsize=(W / 100, H / 100), dpi=100)
fig.patch.set_facecolor(BG)
ax = fig.add_axes([0.44, 0.05, 0.52, 0.90])
ax.set_facecolor(BG)

TITLE = fig.text(0.055, 0.90, "", fontsize=46, ha="left", va="center")
LINES = [fig.text(0.055, 0.78 - 0.072 * i, "", fontsize=31, ha="left",
                  va="center", color="#d7d7d7") for i in range(4)]
FORMULA = fig.text(0.055, 0.21, "", fontsize=40, ha="left", va="center")
FORMULA2 = fig.text(0.055, 0.12, "", fontsize=40, ha="left", va="center")

THEOREM = (r"$\oint_C \mathbf{F}\cdot\mathbf{T}\,ds"
           r"\;=\;\iint_R\left(\frac{\partial N}{\partial x}"
           r"-\frac{\partial M}{\partial y}\right)dA$")


def setup_axes():
    ax.clear()
    ax.set_facecolor(BG)
    ax.set_xlim(-1.75, 1.75)
    ax.set_ylim(-1.62, 1.62)
    ax.set_aspect("equal")
    ax.axis("off")
    # thin axes through the origin, as in the other videos
    ax.plot([-1.65, 1.65], [0, 0], color=DIM, lw=1.0, zorder=1)
    ax.plot([0, 0], [-1.5, 1.5], color=DIM, lw=1.0, zorder=1)


def draw_region(alpha=0.30, edge=True, lw=3.0):
    t = np.linspace(0, 2 * np.pi, 400)
    p = boundary(t)
    ax.add_patch(Polygon(p, closed=True, facecolor=REGION, alpha=alpha,
                         edgecolor="none", zorder=2))
    if edge:
        ax.plot(p[:, 0], p[:, 1], color=CURVE, lw=lw, zorder=6)


def boundary_arrows(n=3, color=CURVE, size=22, alpha=1.0):
    """Arrowheads showing C travelled counterclockwise."""
    for k in range(n):
        t = 0.6 + k * 2 * np.pi / n
        p0, p1 = boundary(t - 0.05), boundary(t + 0.05)
        ax.add_patch(FancyArrowPatch(p0, p1, arrowstyle="-|>",
                                     mutation_scale=size, color=color,
                                     lw=3.0, alpha=alpha, zorder=7))


def field_arrows(step=2, color=FIELD, alpha=1.0, scale=0.30):
    for c in CELLS[::step]:
        f = field(c)
        n = np.linalg.norm(f)
        if n < 1e-9:
            continue
        d = scale * f / max(n, 0.6)
        ax.add_patch(FancyArrowPatch(c - d / 2, c + d / 2, arrowstyle="-|>",
                                     mutation_scale=13, color=color,
                                     lw=1.8, alpha=alpha, zorder=5))


def draw_cells(cs, color=GRIDC, lw=1.1, alpha=0.75, shrink=1.0):
    for c in cs:
        s = shrink * CELL
        ax.add_patch(Rectangle(c - s / 2, s, s, fill=False, edgecolor=color,
                               lw=lw, alpha=alpha, zorder=4))


def loop_arrows(c, color=CIRC, lw=2.0, size=12, alpha=0.95, inset=0.22,
                shrink=1.0):
    """Counterclockwise circulation around one cell."""
    s = shrink * CELL * (1 - inset)
    corners = [c + np.array([-s / 2, -s / 2]), c + np.array([s / 2, -s / 2]),
               c + np.array([s / 2, s / 2]), c + np.array([-s / 2, s / 2])]
    for k in range(4):
        a, b = corners[k], corners[(k + 1) % 4]
        ax.add_patch(FancyArrowPatch(a, b, arrowstyle="-|>",
                                     mutation_scale=size, color=color,
                                     lw=lw, alpha=alpha, zorder=8))


def text(title="", lines=(), f1="", f2=""):
    TITLE.set_text(title)
    for i, t in enumerate(LINES):
        t.set_text(lines[i] if i < len(lines) else "")
    FORMULA.set_text(f1)
    FORMULA2.set_text(f2)


# ------------------------------------------------------------------- beats
def beat_statement():
    for i in range(150):
        setup_axes()
        draw_region()
        if i > 20:
            field_arrows(alpha=min(1.0, (i - 20) / 25))
        if i > 45:
            boundary_arrows(alpha=min(1.0, (i - 45) / 20))
        text("Green's Theorem",
             ("A region $R$ in the plane, its boundary",
              "curve $C$, and a field $\\mathbf{F}$ flowing past."),
             THEOREM if i > 80 else "")
        yield


def beat_curl_density():
    c = np.array([0.0, 0.0])
    for i in range(160):
        setup_axes()
        draw_region(alpha=0.12, edge=False)
        draw_cells([c], color=HILITE, lw=2.6)
        if i > 24:
            loop_arrows(c, alpha=min(1.0, (i - 24) / 26))
        text("Step 1: what one small cell says",
             ("Go once around it and add up",
              "$\\mathbf{F}\\cdot\\mathbf{T}$. Per unit area,",
              "that is the $\\mathbf{k}$-component of the curl."),
             r"$\mathrm{circulation\ round\ one\ cell}\;\approx\;$"
             r"$\left(\mathrm{curl}\,\mathbf{F}\cdot\mathbf{k}\right)"
             r"\Delta A$" if i > 66 else "")
        yield


def beat_chop():
    for i in range(170):
        setup_axes()
        draw_region(alpha=0.12, edge=False)
        shown = CELLS[:max(1, int(len(CELLS) * min(1.0, i / 90)))]
        draw_cells(shown, shrink=0.96)
        text("Step 2: chop $R$ into cells",
             ("Every cell is a small copy of Step 1.",),
             r"$\mathrm{total}\;\approx\;\sum_{\mathrm{cells}}"
             r"\left(\mathrm{curl}\,\mathbf{F}\cdot\mathbf{k}\right)"
             r"\Delta A$" if i > 96 else "")
        yield


def beat_add_them_up():
    for i in range(150):
        setup_axes()
        draw_region(alpha=0.10, edge=False)
        draw_cells(CELLS, shrink=0.96)
        for c in CELLS:
            loop_arrows(c, lw=1.3, size=8, alpha=0.85, inset=0.30)
        text("Step 3: add the circulation of every cell",
             ("Four arrows around every cell.",
              "Most of those edges are interior."),
             r"$\sum_{\mathrm{cells}}\;"
             r"\mathrm{circulation\ round\ the\ cell}$")
        yield


def beat_cancellation():
    a = np.array([-CELL / 2, CELL / 2])
    b = a + np.array([CELL, 0.0])
    for i in range(300):
        setup_axes()
        draw_region(alpha=0.08, edge=False)
        draw_cells(CELLS, color=DIM, lw=0.9, alpha=0.55, shrink=0.96)
        draw_cells([a, b], color=HILITE, lw=2.6, shrink=0.96)
        if 30 < i < 230:
            loop_arrows(a, lw=2.2, size=13, inset=0.16)
            loop_arrows(b, lw=2.2, size=13, inset=0.16)
        # the shared edge, travelled up by the left cell and down by the right
        mid = (a + b) / 2
        ax.plot([mid[0], mid[0]], [mid[1] - CELL / 2, mid[1] + CELL / 2],
                color=HILITE, lw=4.0,
                alpha=0.95 if i < 215 else 0.25, zorder=9)
        lines = ["Two neighbours share this edge."]
        if i > 60:
            lines.append("The left cell travels it upwards,")
        if i > 108:
            lines.append("the right cell downwards.")
        if i > 215:
            lines.append("They cancel. Every interior edge does.")
        text("Step 4: the interior cancels", tuple(lines),
             r"$+\,\mathbf{F}\cdot\mathbf{T}\;\;"
             r"-\,\mathbf{F}\cdot\mathbf{T}\;=\;0$" if i > 125 else "")
        yield


def beat_only_boundary():
    for i in range(230):
        setup_axes()
        fade = max(0.0, 1.0 - i / 60)
        if fade > 0:
            draw_cells(CELLS, color=DIM, lw=0.9, alpha=0.55 * fade,
                       shrink=0.96)
        draw_region(alpha=0.30, edge=True)
        if i > 45:
            boundary_arrows(alpha=min(1.0, (i - 45) / 40))
        text("Step 5: only the boundary survives",
             ("What is left is the outer curve,",
              "travelled counterclockwise."),
             r"$\sum_{\mathrm{cells}}\mathrm{circulation}"
             r"\;=\;\oint_C \mathbf{F}\cdot\mathbf{T}\,ds$"
             if i > 80 else "",
             r"$\sum_{\mathrm{cells}}\left(\mathrm{curl}\,\mathbf{F}\cdot"
             r"\mathbf{k}\right)\Delta A\;\longrightarrow\;"
             r"\iint_R\left(\mathrm{curl}\,\mathbf{F}\cdot\mathbf{k}\right)dA$"
             if i > 140 else "")
        yield


def beat_coda():
    for i in range(240):
        setup_axes()
        draw_region(alpha=0.30, edge=True)
        boundary_arrows()
        field_arrows(alpha=0.85)
        text("The whole theorem, in one line",
             ("Cells shrink, the sums become integrals,",
              "and the interior has cancelled itself away.",
              "The divergence theorem keeps the same",
              "books, one dimension up."),
             THEOREM)
        yield


def frames():
    for beat in (beat_statement, beat_curl_density, beat_chop,
                 beat_add_them_up, beat_cancellation, beat_only_boundary,
                 beat_coda):
        for _ in beat():
            yield


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    exe = imageio_ffmpeg.get_ffmpeg_exe()
    proc = subprocess.Popen(
        [exe, "-y", "-loglevel", "error",
         "-f", "rawvideo", "-pix_fmt", "rgba", "-s", f"{W}x{H}",
         "-r", str(FPS), "-i", "-",
         "-an", "-vcodec", "libx264", "-pix_fmt", "yuv420p",
         "-profile:v", "high", "-crf", "20", "-movflags", "+faststart",
         str(OUT)],
        stdin=subprocess.PIPE)
    count = 0
    for _ in frames():
        fig.canvas.draw()
        proc.stdin.write(fig.canvas.buffer_rgba())
        count += 1
    proc.stdin.close()
    proc.wait()
    print(f"{count} frames ({count / FPS:.1f} s) -> {OUT}")


if __name__ == "__main__":
    main()
