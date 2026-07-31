#!/usr/bin/env python3
"""Render the animation for fig-wire-partition-video (Line Integrals).

The animation follows the derivation that precedes it in the text, and
nothing else: the wire C of the preceding figure -- one turn of a helix in
space -- is cut into n portions, the kth portion has length delta s_k and
carries a sample point, its mass is approximately rho times delta s_k, the
portions are summed, and then n grows -- slowly -- until the sum becomes the
line integral.  Deliberately absent: numerical values and any particular
density function.

Styling follows the other videos in the book (Manim defaults): black
background, Computer Modern text in white, blue wire, orange highlight, red
endpoint labels, thin grey axes through the origin.

Output: assets/videos/wire_partition_refine_1080p.mp4 (1920x1080, 30 fps).

Run with:  python3 scripts/make_wire_partition_video.py
"""

import subprocess
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import imageio_ffmpeg
from mpl_toolkits.mplot3d.art3d import Line3DCollection

FPS = 30
W, H = 1920, 1080
OUT = Path(__file__).resolve().parents[1] / "assets" / "videos" / \
    "wire_partition_refine_1080p.mp4"

# the palette of the other videos in the book
BG = "#000000"
INK = "#ffffff"
WIRE = "#2e9aff"           # the wire C
WIRE_DIM = "#a5d4ff"       # alternate portions, so the cuts read clearly
HILITE = "#ff862f"         # the kth portion
ENDS = "#fc6255"           # t = a and t = b
SAMPLE = "#c77dff"         # the sample point on the kth portion
AXES = "#9a9a9a"
CUT = "#ffffff"            # the partition points

# Computer Modern, as in the LaTeX-set text of the other videos
plt.rcParams.update({
    "mathtext.fontset": "cm",
    "font.family": "serif",
    "text.color": INK,
})

# --------------------------------------------------------------- the wire
# One turn of the helix drawn in the static figure: r(t) = (cos t, sin t, .3t)
T0, T1 = 0.0, 2 * np.pi
PITCH = 0.3


def wire(t):
    t = np.asarray(t, dtype=float)
    return np.cos(t), np.sin(t), PITCH * t


def wire_pts(t):
    x, y, z = wire(t)
    return np.column_stack([x, y, z])


# --------------------------------------------------------------- the canvas
fig = plt.figure(figsize=(W / 100, H / 100), dpi=100)
fig.patch.set_facecolor(BG)
ax = fig.add_axes([0.28, 0.00, 0.62, 0.82], projection="3d")
ax.set_facecolor(BG)

FORMULA = fig.text(0.045, 0.90, "", fontsize=40, ha="left", va="center")
NOTE = fig.text(0.045, 0.12, "", fontsize=36, ha="left", va="center",
                color="#b9b9b9")


def setup_axes():
    ax.clear()
    ax.set_axis_off()
    ax.set_xlim(-1.5, 1.5)
    ax.set_ylim(-1.5, 1.5)
    ax.set_zlim(0.0, 2.1)
    ax.set_box_aspect((1, 1, 1.15), zoom=1.32)
    ax.view_init(elev=20, azim=-56)
    # thin axes through the origin, drawn by hand as in the other videos
    ax.plot([-1.55, 1.75], [0, 0], [0, 0], color=AXES, lw=1.2, zorder=1)
    ax.plot([0, 0], [-1.55, 1.75], [0, 0], color=AXES, lw=1.2, zorder=1)
    ax.plot([0, 0], [0, 0], [0, 2.05], color=AXES, lw=1.2, zorder=1)
    ax.text(1.95, 0, -0.02, r"$x$", color=INK, fontsize=26, zorder=1)
    ax.text(0, 1.95, -0.02, r"$y$", color=INK, fontsize=26, zorder=1)
    ax.text(0, 0.09, 2.13, r"$z$", color=INK, fontsize=26, zorder=1)


def draw(reveal=1.0, n=None, hilite_t=None, show_sample=False,
         formula="", note="", partition_alpha=1.0, labels=True):
    """Draw one frame.  `reveal` grows the wire in; `n` is the partition."""
    setup_axes()

    tt = np.linspace(T0, T0 + (T1 - T0) * reveal, 600)
    if n is None:
        x, y, z = wire(tt)
        ax.plot(x, y, z, color=WIRE, lw=6, solid_capstyle="round", zorder=3)
    else:
        edges = np.linspace(T0, T1, n + 1)
        segs, cols = [], []
        for k in range(n):
            pts = wire_pts(np.linspace(edges[k], edges[k + 1], 40))
            segs.extend(list(zip(pts[:-1], pts[1:])))
            cols.extend([WIRE if k % 2 == 0 else WIRE_DIM] * (len(pts) - 1))
        ax.add_collection3d(Line3DCollection(segs, colors=cols, linewidths=6,
                                             capstyle="round", zorder=3))
        # a radial tick straight through the wire at every cut: on a coil
        # this direction is never edge-on, so the cuts stay legible
        ex, ey, ez = wire(edges)
        r = max(0.12, 0.26 * (4 / n) ** 0.3)
        ticks = [[(x * (1 - r), y * (1 - r), z), (x * (1 + r), y * (1 + r), z)]
                 for x, y, z in zip(ex, ey, ez)]
        ax.add_collection3d(Line3DCollection(ticks, colors=CUT, linewidths=2.2,
                                             alpha=partition_alpha, zorder=5))
        ax.scatter(ex, ey, ez, s=max(45, 110 - 1.5 * n), color=CUT,
                   edgecolors=BG, linewidths=1.2, depthshade=False,
                   alpha=partition_alpha, zorder=6)

        if hilite_t is not None:
            k = min(int((hilite_t - T0) / (T1 - T0) * n), n - 1)
            hx, hy, hz = wire(np.linspace(edges[k], edges[k + 1], 40))
            ax.plot(hx, hy, hz, color=HILITE, lw=11, solid_capstyle="round",
                    zorder=7)
            tm = 0.5 * (edges[k] + edges[k + 1])
            mx, my, mz = wire(tm)
            if labels:
                ax.text(float(mx) * 1.85, float(my) * 1.85, float(mz) + 0.16,
                        r"$\Delta s_k$", color=HILITE, fontsize=30, zorder=8)
            if show_sample:
                ax.scatter([mx], [my], [mz], s=170, color=SAMPLE,
                           depthshade=False, zorder=9)
                ax.text(float(mx) * 2.05, float(my) * 2.05, float(mz) - 0.42,
                        r"$(x_k,y_k,z_k)$", color=SAMPLE, fontsize=26,
                        zorder=9)

    if labels and reveal > 0.5:
        lx, ly, lz = wire(5.6)
        ax.text(float(lx) * 1.55, float(ly) * 1.55, float(lz) + 0.06, r"$C$",
                color=WIRE, fontsize=34, zorder=8)
    if labels and reveal >= 1.0:
        ax0, ay0, az0 = wire(T0)
        ax1, ay1, az1 = wire(T1)
        ax.scatter([ax0, ax1], [ay0, ay1], [az0, az1], s=90, color=ENDS,
                   depthshade=False, zorder=8)
        ax.text(float(ax0) + 0.12, float(ay0) - 0.30, float(az0) - 0.14,
                r"$t=a$", color=ENDS, fontsize=28, zorder=8)
        ax.text(float(ax1) + 0.26, float(ay1) - 0.34, float(az1) + 0.04,
                r"$t=b$", color=ENDS, fontsize=28, zorder=8)

    FORMULA.set_text(formula)
    NOTE.set_text(note)


F_PORTION = (r"$\mathrm{mass\ of\ the\ }k\mathrm{th\ portion}\ \approx\ "
             r"\rho(x_k,y_k,z_k)\,\Delta s_k$")
F_SUM = (r"$\mathrm{mass\ of\ the\ wire}\ \approx\ "
         r"\sum_{k=1}^{n}\rho(x_k,y_k,z_k)\,\Delta s_k$")
F_INT = r"$\mathrm{mass\ of\ the\ wire}\ =\ \int_C \rho\,ds$"

HILITE_T = 2.9           # keep watching the same place on the wire


def frames():
    """Yield the keyword arguments for every frame, in order."""
    # 1. the wire draws itself in
    for i in range(40):
        yield dict(reveal=(i + 1) / 40)
    for _ in range(25):
        yield dict(reveal=1.0)
    # 2. a first, coarse partition
    for _ in range(45):
        yield dict(n=4)
    # 3. one portion, its length, its sample point
    for _ in range(30):
        yield dict(n=4, hilite_t=HILITE_T)
    for _ in range(75):
        yield dict(n=4, hilite_t=HILITE_T, show_sample=True,
                   formula=F_PORTION)
    # 4. add them all up
    for k in range(4):                      # sweep once through the portions
        for _ in range(11):
            yield dict(n=4, formula=F_SUM,
                       hilite_t=T0 + (T1 - T0) * (k + 0.5) / 4)
    for _ in range(26):
        yield dict(n=4, formula=F_SUM)
    # 5. refine, slowly: each n is held for about a second
    for n in (5, 6, 7, 8, 10, 12, 14, 17, 20, 24, 28, 34, 40):
        for _ in range(32):
            yield dict(n=n, formula=F_SUM, hilite_t=HILITE_T,
                       note=(r"$n \to \infty$" if n >= 17 else ""))
    # 6. the partition dissolves into the curve and the sum becomes an integral
    for i in range(30):
        yield dict(n=40, formula=F_SUM, note=r"$n \to \infty$",
                   partition_alpha=1 - (i + 1) / 30)
    for _ in range(120):
        yield dict(formula=F_INT)


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
    for kw in frames():
        draw(**kw)
        fig.canvas.draw()
        proc.stdin.write(fig.canvas.buffer_rgba())
        count += 1
    proc.stdin.close()
    proc.wait()
    print(f"{count} frames ({count / FPS:.1f} s) -> {OUT}")


if __name__ == "__main__":
    main()
