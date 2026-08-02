#!/usr/bin/env python3
"""Render the animation explaining the ideas behind the proof of Stokes'
theorem.

The video argues the theorem, it does not compute it.  Deliberately absent:
the parametrization z = f(x,y), the chain rule, and every line of algebra
that turns the surface integral into a double integral over the shadow of S.
What is present is the chain of ideas the algebra is there to support:

  1.  the statement, with the orientation of C fixed by the right-hand rule;
  2.  curl F . n is circulation per unit area -- Green's theorem, read in the
      tangent plane of a single tiny patch;
  3.  chop S into such patches, each one nearly flat;
  4.  add the circulations of all the patches;
  5.  every interior edge is travelled twice, in opposite directions, so the
      interior cancels and only the outer boundary C survives;
  6.  refine the partition: the sum of the patch circulations is the boundary
      integral, the sum of (curl F . n) dS is the surface integral;
  7.  a flat S is Green's theorem, with n = k and curl F . k = N_x - M_y.

The field is F = <M,N,P> throughout, matching the notation of the text.

Styling follows the other videos in the book: black background, Computer
Modern text in white, blue boundary curve, orange highlight, purple normal
vector, thin grey axes.

Output: assets/videos/stokes_proof_idea_1080p.mp4 (1920x1080, 30 fps, silent).

Run with:  python3 scripts/make_stokes_proof_idea_video.py
"""

import shutil
import tempfile
from pathlib import Path

import numpy as np
from manim import *

OUT_FILE = Path(__file__).resolve().parents[1] / "assets" / "videos" / \
    "stokes_proof_idea_1080p.mp4"

# the palette of the other videos in the book
INK = "#ffffff"
CURVE = "#2e9aff"          # the boundary curve C
SURF = "#1d5e8c"           # the surface S
HILITE = "#ff862f"         # the patch under discussion, cancelling edges
NORMAL = "#c77dff"         # the normal vector n
FIELD = "#fc6255"          # the field F
GRIDC = "#7fb8e6"          # the patch grid drawn on S
AXESC = "#9a9a9a"
DIM = "#5a5a5a"

# Computer Modern, as in the LaTeX-set text of the other videos
TPL = TexTemplate(preamble=r"\usepackage{amsmath}" "\n" r"\usepackage{amssymb}")

# ------------------------------------------------------------------ surface
# A curved graph over the square [-2,2]^2: curved enough that nobody mistakes
# it for a plane, flat enough that the patch grid stays readable.
A, B, TILT = 1.0, 0.75, 0.10
UMIN, UMAX = -2.0, 2.0
NPATCH = 6                 # patches per side in the chopped picture


def height(u, v):
    return A * np.cos(B * u) * np.cos(B * v) + TILT * u


def surf_pt(u, v):
    return np.array([u, v, height(u, v)])


def unit_normal(u, v):
    """Upward unit normal of the graph z = height(u,v)."""
    h = 1e-4
    fu = (height(u + h, v) - height(u - h, v)) / (2 * h)
    fv = (height(u, v + h) - height(u, v - h)) / (2 * h)
    n = np.array([-fu, -fv, 1.0])
    return n / np.linalg.norm(n)


def lift(points_uv):
    return [surf_pt(u, v) for u, v in points_uv]


def square_boundary_uv(u0, u1, v0, v1, per_side=14):
    """Corners of the rectangle [u0,u1]x[v0,v1], counterclockwise seen from
    above, sampled per_side points along each side."""
    t = np.linspace(0, 1, per_side, endpoint=False)
    pts = []
    pts += [(u0 + (u1 - u0) * s, v0) for s in t]
    pts += [(u1, v0 + (v1 - v0) * s) for s in t]
    pts += [(u1 - (u1 - u0) * s, v1) for s in t]
    pts += [(u0, v1 - (v1 - v0) * s) for s in t]
    pts.append((u0, v0))
    return pts


def oriented_boundary(color=CURVE, width=6, flat=False, per_side=40):
    """The boundary curve C, carrying an arrowhead at the middle of each of
    its four sides so that the direction of travel is unmistakable.

    Each side is drawn as two pieces -- corner to midpoint, tipped, then
    midpoint to the next corner -- which is what puts the arrowhead in the
    middle of the side instead of at a corner."""
    corners = [(UMIN, UMIN), (UMAX, UMIN), (UMAX, UMAX), (UMIN, UMAX),
               (UMIN, UMIN)]
    sides = VGroup()
    for k in range(4):
        (u0, v0), (u1, v1) = corners[k], corners[k + 1]

        def point(s):
            u, v = u0 + (u1 - u0) * s, v0 + (v1 - v0) * s
            return np.array([u, v, 0.0]) if flat else surf_pt(u, v)

        for lo, hi, tipped in ((0.0, 0.5, True), (0.5, 1.0, False)):
            piece = TipableVMobject(stroke_color=color, stroke_width=width)
            piece.set_points_as_corners(
                [point(s) for s in np.linspace(lo, hi, per_side)])
            if tipped:
                piece.add_tip(tip_length=0.24, tip_width=0.2)
                piece.get_tip().set_color(color)
            sides.add(piece)
    return sides


def loop_on_surface(u0, u1, v0, v1, inset=0.0, color=GRIDC, width=2.0,
                    tip=True):
    """A closed oriented curve on S over the rectangle [u0,u1]x[v0,v1].

    inset shrinks the rectangle toward its centre so that the loops of two
    neighbouring patches can be seen as two separate curves."""
    cu, cv = (u0 + u1) / 2, (v0 + v1) / 2
    s = 1.0 - inset
    u0, u1 = cu + (u0 - cu) * s, cu + (u1 - cu) * s
    v0, v1 = cv + (v0 - cv) * s, cv + (v1 - cv) * s
    # TipableVMobject, not VMobject: the loops carry an arrowhead so that
    # the direction of travel is visible
    curve = TipableVMobject(stroke_color=color, stroke_width=width)
    curve.set_points_as_corners(lift(square_boundary_uv(u0, u1, v0, v1)))
    if tip:
        curve.add_tip(tip_length=0.13, tip_width=0.11)
        curve.get_tip().set_color(color)
    return curve


class StokesProofIdea(ThreeDScene):
    # -------------------------------------------------------------- helpers
    def caption(self, *lines, edge=UP, buff=0.45, size=40):
        """A block of LaTeX prose, fixed to the frame."""
        block = VGroup(*[
            Tex(line, tex_template=TPL, font_size=size, color=INK)
            for line in lines
        ]).arrange(DOWN, buff=0.22).to_edge(edge, buff=buff)
        self.add_fixed_in_frame_mobjects(block)
        return block

    def formula(self, tex, edge=DOWN, buff=0.6, size=46, color=INK):
        f = MathTex(tex, tex_template=TPL, font_size=size, color=color)
        f.to_edge(edge, buff=buff)
        self.add_fixed_in_frame_mobjects(f)
        return f

    def clear_fixed(self, *mobs, run_time=0.6):
        self.play(*[FadeOut(m) for m in mobs if m is not None],
                  run_time=run_time)

    # ------------------------------------------------------------ the video
    def construct(self):
        self.camera.background_color = "#000000"
        self.beat_statement()
        self.beat_curl_is_circulation_density()
        self.beat_chop()
        self.beat_add_them_up()
        self.beat_cancellation()
        self.beat_only_C_survives()
        self.beat_green_is_the_flat_case()

    # 1 ---------------------------------------------------------------------
    def beat_statement(self):
        self.set_camera_orientation(phi=62 * DEGREES, theta=-52 * DEGREES,
                                    zoom=0.95)

        axes = ThreeDAxes(
            x_range=[-3, 3, 1], y_range=[-3, 3, 1], z_range=[-1.5, 1.5, 1],
            x_length=6, y_length=6, z_length=3,
            axis_config={"stroke_color": AXESC, "stroke_width": 1.6,
                         "include_ticks": False, "include_tip": False},
        )
        self.surface = Surface(
            lambda u, v: surf_pt(u, v),
            u_range=[UMIN, UMAX], v_range=[UMIN, UMAX], resolution=(28, 28),
            checkerboard_colors=False, fill_color=SURF, fill_opacity=0.55,
            stroke_color=SURF, stroke_width=0.4,
        )
        self.boundary = oriented_boundary()

        title = self.caption(r"Stokes' Theorem", size=52)
        self.play(Create(axes, run_time=1.2), FadeIn(title))
        self.play(Create(self.surface), run_time=1.8)
        self.play(Create(self.boundary), run_time=1.6)

        s_lab = MathTex(r"S", tex_template=TPL, color=INK, font_size=52)
        s_lab.move_to(surf_pt(-1.75, -0.2) + np.array([0, 0, 0.5]))
        c_lab = MathTex(r"C=\partial S", tex_template=TPL, color=CURVE,
                        font_size=42)
        c_lab.move_to(surf_pt(0.2, -2.0) + np.array([0, -0.9, 0.05]))
        for lab in (s_lab, c_lab):
            lab.rotate(90 * DEGREES, axis=RIGHT)
        self.play(FadeIn(s_lab), FadeIn(c_lab))

        # the normal, and the right-hand rule that ties it to the direction
        # in which C is traversed
        base = surf_pt(0.0, 0.0)
        n_vec = Arrow3D(start=base, end=base + 1.15 * unit_normal(0, 0),
                        color=NORMAL, thickness=0.015, base_radius=0.055)
        n_lab = MathTex(r"\mathbf{n}", tex_template=TPL, color=NORMAL,
                        font_size=46)
        n_lab.move_to(base + 1.5 * unit_normal(0, 0))
        n_lab.rotate(90 * DEGREES, axis=RIGHT)
        self.play(GrowFromPoint(n_vec, base), FadeIn(n_lab))

        rule = self.caption(
            r"Orient $C$ by the right-hand rule:",
            r"thumb along $\mathbf{n}$, fingers along $C$.",
            edge=DOWN, size=38,
        )
        self.play(FadeIn(rule))
        self.wait(1.6)
        self.clear_fixed(rule, title)

        eq = self.formula(
            r"\oint_C \mathbf{F}\cdot d\mathbf{r}"
            r"\;=\;\iint_S (\operatorname{curl}\mathbf{F})\cdot\mathbf{n}\,dS,"
            r"\qquad \mathbf{F}=\langle M,N,P\rangle",
            edge=UP, size=42,
        )
        self.play(Write(eq), run_time=1.8)
        ask = self.caption(r"A loop integral equals a surface integral.",
                           r"Why should that be true?", edge=DOWN, size=40)
        self.play(FadeIn(ask))
        self.wait(2.0)
        self.clear_fixed(ask, s_lab, c_lab, n_lab)
        self.play(FadeOut(n_vec), FadeOut(axes), run_time=0.6)
        self.statement_eq = eq

    # 2 ---------------------------------------------------------------------
    def beat_curl_is_circulation_density(self):
        """The one local fact the whole proof rests on."""
        self.clear_fixed(self.statement_eq, run_time=0.5)
        head = self.caption(r"Idea 1: what curl measures", size=46)
        self.play(FadeIn(head))

        # single patch, lit up on the surface
        u0, u1, v0, v1 = 0.0, 0.667, 0.0, 0.667
        patch = Surface(
            lambda u, v: surf_pt(u, v),
            u_range=[u0, u1], v_range=[v0, v1], resolution=(8, 8),
            checkerboard_colors=False, fill_color=HILITE, fill_opacity=0.9,
            stroke_width=0,
        )
        patch_loop = loop_on_surface(u0, u1, v0, v1, color=HILITE, width=4)
        self.play(FadeIn(patch), Create(patch_loop), run_time=1.2)
        self.wait(0.4)

        # the local picture, as a card in screen space
        card = self.circulation_card()
        card.to_edge(RIGHT, buff=0.9).shift(UP * 0.85)
        self.add_fixed_in_frame_mobjects(card)
        self.play(FadeIn(card), run_time=1.0)

        local = self.formula(
            r"\oint_{\partial(\text{patch})}\mathbf{F}\cdot d\mathbf{r}"
            r"\;\approx\;\bigl[(\operatorname{curl}\mathbf{F})\cdot\mathbf{n}"
            r"\bigr]\,\Delta S",
            edge=DOWN, buff=0.55, size=40,
        )
        self.play(Write(local), run_time=1.6)
        note = self.caption(
            r"$(\operatorname{curl}\mathbf{F})\cdot\mathbf{n}$ is circulation"
            r" per unit area,",
            r"measured in the tangent plane of the patch.",
            edge=DOWN, buff=2.15, size=38,
        )
        self.play(FadeIn(note))
        self.wait(3.0)
        self.clear_fixed(note, local, card, head)
        self.play(FadeOut(patch), FadeOut(patch_loop), run_time=0.6)

    def circulation_card(self):
        """A flat close-up: the field around a tiny loop, and its swirl."""
        box = RoundedRectangle(width=4.6, height=4.0, corner_radius=0.15,
                               stroke_color=DIM, stroke_width=2,
                               fill_color="#000000", fill_opacity=0.9)
        loop = Circle(radius=0.85, stroke_color=HILITE, stroke_width=4)
        swirl = VGroup(*[
            CurvedArrow(
                loop.point_at_angle(a * DEGREES),
                loop.point_at_angle((a + 95) * DEGREES),
                angle=95 * DEGREES, color=HILITE, stroke_width=3,
                tip_length=0.16,
            ) for a in (10, 130, 250)
        ])
        # field arrows: longer on the way round than on the way back, which
        # is exactly what a non-zero curl looks like
        arrows = VGroup()
        for a in range(0, 360, 45):
            th = a * DEGREES
            base = 1.35 * np.array([np.cos(th), np.sin(th), 0])
            tangential = np.array([-np.sin(th), np.cos(th), 0])
            radial = np.array([np.cos(th), np.sin(th), 0])
            v = 0.75 * tangential + 0.28 * np.sin(2 * th) * radial
            arrows.add(Arrow(base, base + v, buff=0, color=FIELD,
                             stroke_width=4, max_tip_length_to_length_ratio=0.3))
        f_lab = MathTex(r"\mathbf{F}", tex_template=TPL, color=FIELD,
                        font_size=40).move_to([1.55, 1.5, 0])
        inner = VGroup(loop, swirl, arrows, f_lab).scale(0.78)
        return VGroup(box, inner)

    # 3 ---------------------------------------------------------------------
    def beat_chop(self):
        head = self.caption(r"Idea 2: chop $S$ into tiny patches", size=46)
        self.play(FadeIn(head))

        cuts = np.linspace(UMIN, UMAX, NPATCH + 1)
        grid = VGroup()
        for u in cuts[1:-1]:
            c = VMobject(stroke_color=GRIDC, stroke_width=2)
            c.set_points_as_corners(
                lift([(u, v) for v in np.linspace(UMIN, UMAX, 60)]))
            grid.add(c)
        for v in cuts[1:-1]:
            c = VMobject(stroke_color=GRIDC, stroke_width=2)
            c.set_points_as_corners(
                lift([(u, v) for u in np.linspace(UMIN, UMAX, 60)]))
            grid.add(c)
        self.play(Create(grid), run_time=2.0)
        self.grid = grid

        note = self.caption(
            r"Each patch is so small that it is nearly flat,",
            r"so Idea 1 applies to every one of them.",
            edge=DOWN, size=38,
        )
        self.play(FadeIn(note))
        self.wait(2.0)
        self.clear_fixed(note, head)

    # 4 ---------------------------------------------------------------------
    def beat_add_them_up(self):
        head = self.caption(r"Idea 3: add up all the patches", size=46)
        self.play(FadeIn(head))

        cuts = np.linspace(UMIN, UMAX, NPATCH + 1)
        loops = VGroup()
        for i in range(NPATCH):
            for j in range(NPATCH):
                loops.add(loop_on_surface(cuts[i], cuts[i + 1],
                                          cuts[j], cuts[j + 1],
                                          inset=0.30, color=HILITE,
                                          width=2.4))
        self.play(LaggedStart(*[Create(l) for l in loops],
                              lag_ratio=0.02, run_time=2.6))
        self.loops = loops

        summ = self.formula(
            r"\sum_k \oint_{\partial S_k}\mathbf{F}\cdot d\mathbf{r}"
            r"\;\approx\;\sum_k \bigl[(\operatorname{curl}\mathbf{F})"
            r"\cdot\mathbf{n}\bigr]\,\Delta S_k",
            edge=DOWN, size=44,
        )
        self.play(Write(summ), run_time=1.6)
        self.wait(1.6)
        self.clear_fixed(summ, head)

    # 5 ---------------------------------------------------------------------
    def beat_cancellation(self):
        """The step that makes the theorem work."""
        head = self.caption(r"Idea 4: the inside cancels", size=46)
        self.play(FadeIn(head))
        self.move_camera(phi=20 * DEGREES, theta=-90 * DEGREES, zoom=0.95,
                         run_time=2.0)

        # -- two neighbours, seen head on
        pair = self.two_patch_card()
        self.add_fixed_in_frame_mobjects(pair["card"])
        self.play(FadeIn(pair["card"]), run_time=0.9)
        note = self.caption(
            r"Two patches share an edge,",
            r"and each one travels it the opposite way.",
            edge=DOWN, size=38,
        )
        self.play(FadeIn(note))
        self.wait(1.4)
        self.play(Indicate(pair["shared"], color=INK, scale_factor=1.15),
                  run_time=1.2)
        self.clear_fixed(note, run_time=0.5)
        self.play(FadeOut(pair["shared"], scale=0.4), run_time=1.2)
        gone = self.caption(r"They cancel.", edge=DOWN, size=44)
        self.play(FadeIn(gone))
        self.wait(1.4)
        self.clear_fixed(gone, pair["card"])

        # -- the same thing, everywhere at once
        whole = self.whole_grid_card()
        self.add_fixed_in_frame_mobjects(whole["card"])
        self.play(FadeIn(whole["card"]), run_time=0.9)
        note2 = self.caption(
            r"Every interior edge is shared by two patches,",
            r"so every interior edge cancels.",
            edge=DOWN, size=38,
        )
        self.play(FadeIn(note2))
        self.wait(2.0)
        self.play(FadeOut(whole["interior"]), run_time=1.6)
        self.play(whole["outer"].animate.set_stroke(color=CURVE, width=8),
                  run_time=1.0)
        self.clear_fixed(note2, run_time=0.5)
        note3 = self.caption(r"Only the outer boundary survives.",
                             edge=DOWN, size=44)
        self.play(FadeIn(note3))
        self.wait(2.2)
        self.clear_fixed(note3, whole["card"], head)

    def two_patch_card(self):
        box = RoundedRectangle(width=8.0, height=4.2, corner_radius=0.15,
                               stroke_color=DIM, stroke_width=2,
                               fill_color="#000000", fill_opacity=0.92)
        s = 1.5

        def cell(centre, drop_right=False, drop_left=False):
            c = np.array(centre)
            corners = {
                "bl": c + np.array([-s / 2, -s / 2, 0]),
                "br": c + np.array([s / 2, -s / 2, 0]),
                "tr": c + np.array([s / 2, s / 2, 0]),
                "tl": c + np.array([-s / 2, s / 2, 0]),
            }
            edges = [("bl", "br"), ("br", "tr"), ("tr", "tl"), ("tl", "bl")]
            group, shared = VGroup(), None
            for a, b in edges:
                arr = Arrow(corners[a], corners[b], buff=0.06, color=HILITE,
                            stroke_width=5, max_tip_length_to_length_ratio=0.16)
                if (drop_right and (a, b) == ("br", "tr")) or \
                   (drop_left and (a, b) == ("tl", "bl")):
                    shared = arr
                else:
                    group.add(arr)
            return group, shared

        left, shared_l = cell([-0.95, 0, 0], drop_right=True)
        right, shared_r = cell([0.95, 0, 0], drop_left=True)
        # the two shared-edge arrows, drawn side by side so both are visible
        shared_l.shift(LEFT * 0.07)
        shared_r.shift(RIGHT * 0.07)
        shared = VGroup(shared_l, shared_r)
        labs = VGroup(
            MathTex(r"S_1", tex_template=TPL, color=INK, font_size=40)
            .move_to([-0.95, 0, 0]),
            MathTex(r"S_2", tex_template=TPL, color=INK, font_size=40)
            .move_to([0.95, 0, 0]),
        )
        inner = VGroup(left, right, shared, labs)
        card = VGroup(box, inner)
        return {"card": card, "shared": shared}

    def whole_grid_card(self):
        box = RoundedRectangle(width=8.0, height=4.6, corner_radius=0.15,
                               stroke_color=DIM, stroke_width=2,
                               fill_color="#000000", fill_opacity=0.92)
        n, s = 4, 0.78
        interior, outer = VGroup(), VGroup()
        x0 = -n * s / 2
        y0 = -n * s / 2
        for i in range(n + 1):          # vertical lines
            x = x0 + i * s
            line = Line([x, y0, 0], [x, y0 + n * s, 0],
                        stroke_width=4,
                        color=CURVE if i in (0, n) else HILITE)
            (outer if i in (0, n) else interior).add(line)
        for j in range(n + 1):          # horizontal lines
            y = y0 + j * s
            line = Line([x0, y, 0], [x0 + n * s, y, 0],
                        stroke_width=4,
                        color=CURVE if j in (0, n) else HILITE)
            (outer if j in (0, n) else interior).add(line)
        inner = VGroup(interior, outer).scale(1.05)
        return {"card": VGroup(box, inner), "interior": interior,
                "outer": outer}

    # 6 ---------------------------------------------------------------------
    def beat_only_C_survives(self):
        self.move_camera(phi=62 * DEGREES, theta=-52 * DEGREES, zoom=0.95,
                         run_time=1.8)
        head = self.caption(r"So the patch sum \emph{is} the loop integral",
                            size=44)
        self.play(FadeIn(head))
        self.play(FadeOut(self.loops), run_time=1.4)
        self.play(self.boundary.animate.set_stroke(width=9), run_time=0.8)

        chain = self.formula(
            r"\sum_k\oint_{\partial S_k}\mathbf{F}\cdot d\mathbf{r}"
            r"\;=\;\oint_C \mathbf{F}\cdot d\mathbf{r}",
            edge=DOWN, size=46,
        )
        self.play(Write(chain), run_time=1.4)
        self.wait(2.2)
        self.clear_fixed(chain, head, run_time=0.5)

        note = self.caption(
            r"Now let the patches shrink: the right-hand sum",
            r"becomes the surface integral, and Stokes' theorem falls out.",
            edge=DOWN, size=38,
        )
        self.play(FadeIn(note))
        self.play(FadeOut(self.grid), run_time=1.2)
        self.wait(2.0)
        self.clear_fixed(note)

        final = self.formula(
            r"\oint_C \mathbf{F}\cdot d\mathbf{r}"
            r"\;=\;\iint_S (\operatorname{curl}\mathbf{F})\cdot\mathbf{n}\,dS",
            edge=UP, size=52,
        )
        self.play(Write(final), run_time=1.8)
        self.wait(2.0)
        self.final_eq = final

    # 7 ---------------------------------------------------------------------
    def beat_green_is_the_flat_case(self):
        head = self.caption(r"And if $S$ is flat?", edge=DOWN, size=44)
        self.play(FadeIn(head))

        flat = Surface(
            lambda u, v: np.array([u, v, 0.0]),
            u_range=[UMIN, UMAX], v_range=[UMIN, UMAX], resolution=(28, 28),
            checkerboard_colors=False, fill_color=SURF, fill_opacity=0.55,
            stroke_color=SURF, stroke_width=0.4,
        )
        flat_boundary = oriented_boundary(width=9, flat=True)
        self.move_camera(
            phi=48 * DEGREES, theta=-90 * DEGREES, run_time=2.2,
            added_anims=[Transform(self.surface, flat),
                         Transform(self.boundary, flat_boundary)],
        )

        base = np.array([0.0, 0.0, 0.0])
        k_vec = Arrow3D(start=base, end=base + 1.2 * OUT, color=NORMAL,
                        thickness=0.015, base_radius=0.055)
        self.play(GrowFromPoint(k_vec, base), run_time=0.8)
        self.clear_fixed(self.final_eq, head, run_time=0.6)

        green = self.formula(
            r"\mathbf{n}=\mathbf{k}:\quad"
            r"(\operatorname{curl}\mathbf{F})\cdot\mathbf{k}"
            r"=\frac{\partial N}{\partial x}-\frac{\partial M}{\partial y}",
            edge=UP, size=46,
        )
        self.play(Write(green), run_time=1.6)
        greens = self.formula(
            r"\oint_C M\,dx+N\,dy"
            r"\;=\;\iint_R\left(\frac{\partial N}{\partial x}"
            r"-\frac{\partial M}{\partial y}\right)dA",
            edge=DOWN, buff=1.5, size=46,
        )
        self.play(Write(greens), run_time=1.8)
        last = self.caption(r"Green's theorem: Stokes' theorem, lying flat.",
                            edge=DOWN, buff=0.55, size=40)
        self.play(FadeIn(last))
        self.wait(2.6)
        self.play(*[FadeOut(m) for m in (green, greens, last, k_vec,
                                         self.surface, self.boundary)],
                  run_time=1.4)
        self.wait(0.4)


def main():
    tmp = Path(tempfile.mkdtemp(prefix="stokes-manim-"))
    config.media_dir = str(tmp)
    config.pixel_width, config.pixel_height = 1920, 1080
    config.frame_rate = 30
    config.background_color = "#000000"
    config.output_file = "stokes_proof_idea_1080p"
    config.disable_caching = True

    StokesProofIdea().render()

    produced = next(tmp.rglob("stokes_proof_idea_1080p.mp4"))
    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    shutil.move(str(produced), str(OUT_FILE))
    shutil.rmtree(tmp, ignore_errors=True)
    print(f"wrote {OUT_FILE}")


if __name__ == "__main__":
    main()
