#!/usr/bin/env python3
"""Render the animation explaining the idea behind the proof of the
divergence theorem.

The video argues the theorem, it does not compute it.  Deliberately absent:
the description of the solid as u_1 <= z <= u_2, the graph formula for
n dsigma, and every line of the algebra in the written proof.  What is
present is the chain of ideas that algebra exists to support:

  1.  the statement: flux out through the boundary, against the integral of
      the divergence over the inside;
  2.  divergence is flux per unit volume -- what one tiny box says;
  3.  chop the solid into such boxes;
  4.  add the flux out of every box;
  5.  every interior face is shared by two boxes, and carries opposite
      outward normals, so the interior cancels in pairs;
  6.  only the outer faces survive: the sum of the box fluxes IS the flux
      through S, while the sum of (div F) dV is the triple integral;
  7.  the same bookkeeping as Green's and Stokes' theorems.

The field is F = <M,N,P> throughout, matching the notation of the text, and
the solid is D with boundary S, as in the theorem.

Styling follows the other videos in the book (the palette and typography of
scripts/make_stokes_proof_idea_video.py): black background, Computer Modern
text in white, blue solid, orange highlight, purple normals, red field.

Manim itself cannot be built in this container (manimpango needs Pango
headers), so the frames are drawn with matplotlib and piped to ffmpeg, as in
scripts/make_wire_partition_video.py.

Output: assets/videos/divergence_proof_idea_1080p.mp4 (1920x1080, 30 fps).

Run with:  python3 scripts/make_divergence_proof_idea_video.py
"""

import subprocess
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import imageio_ffmpeg
from mpl_toolkits.mplot3d.art3d import Line3DCollection, Poly3DCollection

FPS = 30
W, H = 1920, 1080
OUT = Path(__file__).resolve().parents[1] / "assets" / "videos" / \
    "divergence_proof_idea_1080p.mp4"

# the palette of the other videos in the book
BG = "#000000"
INK = "#ffffff"
SOLID = "#2e9aff"          # the solid D and its boundary S
SOLID_DIM = "#1d5e8c"
HILITE = "#ff862f"         # the box under discussion, the cancelling face
NORMAL = "#c77dff"         # outward normals
FIELD = "#fc6255"          # the field F
AXES = "#9a9a9a"
DIM = "#5a5a5a"

plt.rcParams.update({
    "mathtext.fontset": "cm",
    "font.family": "serif",
    "text.color": INK,
})

# --------------------------------------------------------------- the solid
# A ball of radius R: round enough that no one mistakes the argument for one
# about boxes, simple enough that the chopping stays readable.
R = 1.25
NGRID = 3                  # boxes per side across the ball
STEP = 2.0 * R / NGRID


def field(p):
    """A field with visibly positive divergence, drawn, never differentiated."""
    x, y, z = p
    return np.array([0.55 * x + 0.12, 0.55 * y, 0.55 * z + 0.10])


def box_centres():
    """Centres of the little boxes that meet the ball."""
    out = []
    for i in range(NGRID):
        for j in range(NGRID):
            for k in range(NGRID):
                c = np.array([-R + (i + 0.5) * STEP,
                              -R + (j + 0.5) * STEP,
                              -R + (k + 0.5) * STEP])
                if np.linalg.norm(c) <= R:
                    out.append(c)
    return out


CENTRES = box_centres()


def box_edges(c, s=STEP, shrink=1.0):
    """The twelve edges of the box centred at c."""
    h = shrink * s / 2
    xs, ys, zs = [c[0] - h, c[0] + h], [c[1] - h, c[1] + h], [c[2] - h, c[2] + h]
    pts = [np.array([x, y, z]) for x in xs for y in ys for z in zs]
    segs = []
    for a in range(8):
        for b in range(a + 1, 8):
            if np.count_nonzero(np.abs(pts[a] - pts[b]) > 1e-9) == 1:
                segs.append((pts[a], pts[b]))
    return segs


def face_square(c, axis, sign, s=STEP, shrink=1.0):
    """One face of a box, as a polygon."""
    h = shrink * s / 2
    o = np.zeros(3)
    o[axis] = sign * h
    u, v = [(a, b) for a, b in [(0, 1), (0, 2), (1, 2)]
            if axis not in (a, b)][0]
    corners = []
    for su, sv in ((-1, -1), (1, -1), (1, 1), (-1, 1)):
        p = np.array(c, dtype=float) + o
        p[u] += su * h
        p[v] += sv * h
        corners.append(p)
    return corners


# --------------------------------------------------------------- the canvas
fig = plt.figure(figsize=(W / 100, H / 100), dpi=100)
fig.patch.set_facecolor(BG)
ax = fig.add_axes([0.40, 0.02, 0.58, 0.86], projection="3d")
ax.set_facecolor(BG)

TITLE = fig.text(0.055, 0.90, "", fontsize=46, ha="left", va="center")
LINES = [fig.text(0.055, 0.78 - 0.072 * i, "", fontsize=31, ha="left",
                  va="center", color="#d7d7d7") for i in range(4)]
FORMULA = fig.text(0.055, 0.20, "", fontsize=40, ha="left", va="center")
FORMULA2 = fig.text(0.055, 0.11, "", fontsize=40, ha="left", va="center")


def setup_axes(elev=20, azim=-58):
    ax.clear()
    ax.set_axis_off()
    ax.set_xlim(-1.7, 1.7)
    ax.set_ylim(-1.7, 1.7)
    ax.set_zlim(-1.7, 1.7)
    ax.set_box_aspect((1, 1, 1), zoom=1.35)
    ax.view_init(elev=elev, azim=azim)


def draw_ball(alpha=0.16, wire=True):
    u = np.linspace(0, 2 * np.pi, 44)
    v = np.linspace(0, np.pi, 24)
    x = R * np.outer(np.cos(u), np.sin(v))
    y = R * np.outer(np.sin(u), np.sin(v))
    z = R * np.outer(np.ones_like(u), np.cos(v))
    ax.plot_surface(x, y, z, color=SOLID_DIM, alpha=alpha, linewidth=0,
                    shade=False, zorder=1)
    if wire:
        ax.plot_wireframe(x, y, z, rstride=6, cstride=4, color=SOLID,
                          linewidth=0.5, alpha=0.45, zorder=2)


def outward_arrows(n=14, length=0.55, color=FIELD, lw=2.6, alpha=1.0):
    """The field, sampled on the boundary sphere and drawn crossing it."""
    idx = np.arange(n) + 0.5
    phi = np.arccos(1 - 2 * idx / n)
    theta = np.pi * (1 + 5 ** 0.5) * idx
    p = R * np.stack([np.cos(theta) * np.sin(phi),
                      np.sin(theta) * np.sin(phi),
                      np.cos(phi)], axis=1)
    for q in p:
        f = field(q)
        f = length * f / np.linalg.norm(f)
        ax.quiver(*q, *f, color=color, linewidth=lw, alpha=alpha,
                  arrow_length_ratio=0.35, zorder=6)


def draw_boxes(centres, color=SOLID, lw=1.0, alpha=0.75, shrink=1.0):
    segs = []
    for c in centres:
        segs.extend(box_edges(c, shrink=shrink))
    ax.add_collection3d(Line3DCollection(segs, colors=color, linewidths=lw,
                                         alpha=alpha, zorder=4))


def box_flux_arrows(centres, length=0.26, color=NORMAL, lw=1.8, alpha=0.9):
    """One short outward arrow on each of the six faces of each box."""
    for c in centres:
        for axis in range(3):
            for sign in (-1, 1):
                o = np.zeros(3)
                o[axis] = sign * STEP / 2
                base = np.array(c) + o
                d = np.zeros(3)
                d[axis] = sign * length
                ax.quiver(*base, *d, color=color, linewidth=lw, alpha=alpha,
                          arrow_length_ratio=0.4, zorder=7)


def fill_face(corners, color, alpha=0.45, zorder=5):
    poly = Poly3DCollection([corners], facecolors=color, edgecolors=color,
                            alpha=alpha, linewidths=1.2)
    poly.set_zorder(zorder)
    ax.add_collection3d(poly)


def text(title="", lines=(), f1="", f2=""):
    TITLE.set_text(title)
    for i, t in enumerate(LINES):
        t.set_text(lines[i] if i < len(lines) else "")
    FORMULA.set_text(f1)
    FORMULA2.set_text(f2)


# ------------------------------------------------------------------- beats
THEOREM = (r"$\iint_S \mathbf{F}\cdot\hat{\mathbf{n}}\,d\sigma"
           r"\;=\;\iiint_D \nabla\cdot\mathbf{F}\,dV$")


def beat_statement():
    """1. What the theorem claims: boundary against inside."""
    for i in range(150):
        setup_axes(azim=-58 + 0.11 * i)
        draw_ball()
        if i > 26:
            outward_arrows(alpha=min(1.0, (i - 26) / 30))
        text("The Divergence Theorem",
             ("A solid $D$, its boundary surface $S$,",
              "and a field $\\mathbf{F}$ crossing it."),
             THEOREM if i > 74 else "")
        yield


def beat_flux_density():
    """2. What one tiny box says: divergence is flux per unit volume."""
    c = np.array([0.0, 0.0, 0.0])
    for i in range(160):
        setup_axes(azim=-42 + 0.05 * i)
        draw_ball(alpha=0.07, wire=False)
        draw_boxes([c], color=HILITE, lw=2.2, shrink=0.8)
        if i > 24:
            box_flux_arrows([c], length=0.30 * min(1.0, (i - 24) / 34))
        text("Step 1: what one small box says",
             ("Add up what leaves its six faces.",
              "Per unit volume, that is the divergence."),
             r"$\mathrm{flux\ out\ of\ one\ box}\;\approx\;"
             r"\left(\nabla\cdot\mathbf{F}\right)\Delta V$" if i > 66 else "")
        yield


def beat_chop():
    """3. Chop the solid into boxes."""
    for i in range(170):
        setup_axes(azim=-42 + 0.08 * i)
        draw_ball(alpha=0.07, wire=False)
        shown = CENTRES[:max(1, int(len(CENTRES) * min(1.0, i / 90)))]
        draw_boxes(shown, shrink=0.94)
        text("Step 2: chop $D$ into boxes",
             ("Every box is a small copy of Step 1.",),
             r"$\mathrm{total}\;\approx\;\sum_{\mathrm{boxes}}"
             r"\left(\nabla\cdot\mathbf{F}\right)\Delta V$" if i > 96 else "")
        yield


def beat_add_them_up():
    """4. Add the flux out of every box."""
    for i in range(150):
        setup_axes(azim=-29 + 0.04 * i)
        draw_ball(alpha=0.06, wire=False)
        draw_boxes(CENTRES, shrink=0.94)
        box_flux_arrows(CENTRES, length=0.20, alpha=0.85)
        text("Step 3: add the flux out of every box",
             ("Six arrows on every box.",
              "Most of them are inside the solid."),
             r"$\sum_{\mathrm{boxes}}\;\mathrm{flux\ out\ of\ the\ box}$")
        yield


def beat_cancellation():
    """5. The heart: interior faces cancel in pairs."""
    a = np.array([-STEP / 2, 0.0, 0.0])
    b = np.array([+STEP / 2, 0.0, 0.0])
    shared = face_square(a, 0, +1, shrink=0.94)
    for i in range(300):
        # looking along y, so the two normals on the shared face are seen
        # across the screen instead of end-on
        setup_axes(azim=-84, elev=14)
        draw_ball(alpha=0.05, wire=False)
        draw_boxes([c for c in CENTRES], color=DIM, lw=0.8, alpha=0.5,
                   shrink=0.94)
        draw_boxes([a, b], color=HILITE, lw=2.4, shrink=0.94)
        fill_face(shared, HILITE, alpha=0.30 if i < 215 else 0.10)
        if 30 < i < 230:
            ax.quiver(*(a + np.array([-0.05, 0, 0.16])), 0.46, 0, 0,
                      color=NORMAL, linewidth=3.4, arrow_length_ratio=0.32,
                      zorder=9)
            ax.quiver(*(b + np.array([0.05, 0, -0.16])), -0.46, 0, 0,
                      color=NORMAL, linewidth=3.4, arrow_length_ratio=0.32,
                      zorder=9)
        lines = ["Two neighbours share this face."]
        if i > 60:
            lines.append("Out of the left box is into the right one:")
        if i > 108:
            lines.append("equal and opposite contributions.")
        if i > 215:
            lines.append("They cancel. Every interior face does.")
        text("Step 4: the interior cancels", tuple(lines),
             r"$+\,\mathbf{F}\cdot\hat{\mathbf{n}}\;\;"
             r"-\,\mathbf{F}\cdot\hat{\mathbf{n}}\;=\;0$" if i > 125 else "")
        yield


def beat_only_boundary():
    """6. Only the outer faces survive."""
    for i in range(230):
        setup_axes(azim=-20 + 0.10 * i, elev=16 + 0.02 * i)
        fade = max(0.0, 1.0 - i / 60)
        if fade > 0:
            draw_boxes(CENTRES, color=DIM, lw=0.8, alpha=0.5 * fade,
                       shrink=0.94)
        draw_ball(alpha=0.16, wire=True)
        if i > 45:
            outward_arrows(length=0.55, alpha=min(1.0, (i - 45) / 40))
        lines = ["What is left is the outer surface,",
                 "with its outward normal."]
        text("Step 5: only the boundary survives", tuple(lines),
             r"$\sum_{\mathrm{boxes}}\mathrm{flux}"
             r"\;=\;\iint_S \mathbf{F}\cdot\hat{\mathbf{n}}\,d\sigma$"
             if i > 80 else "",
             r"$\sum_{\mathrm{boxes}}\left(\nabla\cdot\mathbf{F}\right)\Delta V"
             r"\;\longrightarrow\;\iiint_D \nabla\cdot\mathbf{F}\,dV$"
             if i > 140 else "")
        yield


def beat_coda():
    """7. The same bookkeeping as the other big theorems."""
    for i in range(240):
        setup_axes(azim=2 + 0.09 * i, elev=18)
        draw_ball(alpha=0.16, wire=True)
        outward_arrows(length=0.55)
        text("The whole theorem, in one line",
             ("Boxes shrink, the sums become integrals,",
              "and the interior has cancelled itself away.",
              "Green's and Stokes' theorems keep the same books,",
              "one and two dimensions down."),
             THEOREM)
        yield


def frames():
    for beat in (beat_statement, beat_flux_density, beat_chop,
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
