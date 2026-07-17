var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Mehdi Ahmadi        This document is a template for my future notes.   "
},
{
  "id": "intro",
  "level": "1",
  "url": "intro.html",
  "type": "Section",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction  The main purpose of these notes is to create a template for my future notes. You will find that I have not spent time on the actual content, rather on the structure and formatting. I am new to PreText and I would like to point out that it offers a plathora of accessiblity features that I have not yet explored. I will update these notes as I learn more about PreText and its capabilities.  "
},
{
  "id": "sec-arc-length",
  "level": "1",
  "url": "sec-arc-length.html",
  "type": "Section",
  "number": "2",
  "title": "Arc Length of a Curve",
  "body": " Arc Length of a Curve   When an object moves along a curve, we often want to know the total distance it travels. In this section we build the arc-length integral, first in the plane and then in space, and we apply it to two motions: a point sweeping out a quarter circle and a paraglider spiralling to the ground. The key idea throughout is simple: distance travelled is speed accumulated over time .     Arc Length in 2D  Imagine that at time an object starts moving from an initial point and at time it reaches the final point . During this period the object traces out a smooth curve in the plane, as shown in . How can we calculate the distance the object has travelled?   A smooth curve traced by a moving object, from the starting point at time to the ending point at time .   A curve labelled C rises from a red point marked t equals a at the lower right to a red point marked t equals b at the upper left, with an arrow indicating the direction of increasing time.    C(t)=(3*cos(t), 3*sin(t))  A=C(0.42)  B=C(1.52)      C       t=a       t=b                The idea is to measure the curve one tiny piece at a time. Over a very short time interval the object moves a small amount horizontally and vertically, so by the Pythagorean theorem it covers a tiny arc of length Adding up all these tiny lengths from to that is, integrating gives the total length of the curve:   To turn this into a formula we can compute, suppose the curve is parametrized as for , or equivalently in vector form . Factoring out of the square root converts the integral into an ordinary integral over time:   where in the last step we recognized the velocity vector   whose length is the object's speed:   In words: arc length is the integral of speed over time . This is the natural generalization of the familiar rule distance equals speed times time to motion whose speed and direction change from moment to moment.       Length of a quarter circle   Using the arc-length formula in 2D, calculate the length of a quarter circle of radius one. (We already know the answer: a full unit circle has circumference , so a quarter of it has length . The point of this example is to see the formula reproduce it.)    We can parametrize the quarter circle as Differentiating, the velocity vector and its length are   The speed is constant and equal to , so the arc length is simply the elapsed time:   as expected. Notice a useful by-product: because the speed is , the arc length swept out up to time is exactly. The motion is shown in , the position and velocity vectors in , and a snapshot of the partially swept arc in .   The point sweeps out the quarter circle as increases from to ; the accumulated arc length reaches .     The quarter circle with the position vector (orange) and the unit velocity vector (green), which is tangent to the curve.   A quarter of the unit circle from the point one comma zero to the point zero comma one on a coordinate grid, with an orange position vector from the origin to a point on the arc and a green unit velocity vector tangent to the arc at that point.    r(t)=(cos(t), sin(t))  t0=0.9  P=r(t0)  vel=(-sin(t0), cos(t0))       \\mathbf{r}(t)       (1,0)     (0,1)           \\mathbf{v}(t)                    Snapshot at : the arc already swept out (blue) has length , the part not yet traced is gray, and the unit velocity vector is tangent to the circle at the moving point.   A point partway along the unit quarter circle, with its position vector, unit velocity vector, and the arc swept so far.   The first quadrant with a light coordinate grid. A quarter circle of radius one runs from the point (1,0) up to the point (0,1). The portion already travelled, from (1,0) counterclockwise to the moving point at t equals 0.9, is a thick blue arc ending in an arrowhead; the portion not yet travelled is gray. An orange position vector labelled r of t reaches from the origin to the moving point, drawn in red. A green vector labelled v of t, of length one, starts at the moving point, tangent to the circle and pointing in the direction of motion. A blue label reads s of t equals t, the arc length swept so far.          Arc Length in 3D  The formulas above generalize to motion in space with no new ideas: the tiny arc simply picks up a third term, . For a space curve we therefore have   As in the plane, arc length is still the integral of speed over time.      Distance travelled by a paraglider   The position of a paraglider at time is Assuming that the paraglider begins at time :    How long does it take to reach the ground, that is, ?    Calculate the velocity vector at time , and also calculate its length.    Calculate the distance travelled by the paraglider.       Part A. The paraglider reaches the ground when the -coordinate vanishes: So it takes units of time to land.   Part B. We differentiate each component. The first two require the product rule, and for the third, . Hence   Its length simplifies neatly: the cross terms cancel, the squared sines and cosines combine, and the last component contributes :   where the last equality uses . So the paraglider's speed grows linearly: it starts at and reaches at touchdown.   Part C. The distance travelled is the arc length of the path, that is, speed integrated over the units of flight time:   The descending spiral, together with its endpoints and , is animated in and shown in .   The paraglider spirals down from to . Because the speed is , the total distance travelled is .     The paraglider's path from down to . The dashed gray curve is the path's shadow on the ground .   The paraglider's descending spiral path in three dimensions, from its starting point down to the ground.   A three-dimensional coordinate box with x and y running from minus 10 to 10 and z from 0 to 27. A thick blue spiral starts at a red point labelled start, at coordinates (0, 0, 9 root 8), about 25.5 units above the origin. The spiral winds outward and downward, its radius growing as it descends, making roughly one and a half turns before landing at a red point labelled ground, at coordinates (9 cosine 9, 9 sine 9, 0). A dashed gray spiral on the floor of the box shows the path's shadow on the ground.        "
},
{
  "id": "fig-arc-length-curve",
  "level": "2",
  "url": "sec-arc-length.html#fig-arc-length-curve",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " A smooth curve traced by a moving object, from the starting point at time to the ending point at time .   A curve labelled C rises from a red point marked t equals a at the lower right to a red point marked t equals b at the upper left, with an arrow indicating the direction of increasing time.    C(t)=(3*cos(t), 3*sin(t))  A=C(0.42)  B=C(1.52)      C       t=a       t=b               "
},
{
  "id": "ex-quarter-circle",
  "level": "2",
  "url": "sec-arc-length.html#ex-quarter-circle",
  "type": "Example",
  "number": "2.2",
  "title": "Length of a quarter circle.",
  "body": " Length of a quarter circle   Using the arc-length formula in 2D, calculate the length of a quarter circle of radius one. (We already know the answer: a full unit circle has circumference , so a quarter of it has length . The point of this example is to see the formula reproduce it.)    We can parametrize the quarter circle as Differentiating, the velocity vector and its length are   The speed is constant and equal to , so the arc length is simply the elapsed time:   as expected. Notice a useful by-product: because the speed is , the arc length swept out up to time is exactly. The motion is shown in , the position and velocity vectors in , and a snapshot of the partially swept arc in .   The point sweeps out the quarter circle as increases from to ; the accumulated arc length reaches .     The quarter circle with the position vector (orange) and the unit velocity vector (green), which is tangent to the curve.   A quarter of the unit circle from the point one comma zero to the point zero comma one on a coordinate grid, with an orange position vector from the origin to a point on the arc and a green unit velocity vector tangent to the arc at that point.    r(t)=(cos(t), sin(t))  t0=0.9  P=r(t0)  vel=(-sin(t0), cos(t0))       \\mathbf{r}(t)       (1,0)     (0,1)           \\mathbf{v}(t)                    Snapshot at : the arc already swept out (blue) has length , the part not yet traced is gray, and the unit velocity vector is tangent to the circle at the moving point.   A point partway along the unit quarter circle, with its position vector, unit velocity vector, and the arc swept so far.   The first quadrant with a light coordinate grid. A quarter circle of radius one runs from the point (1,0) up to the point (0,1). The portion already travelled, from (1,0) counterclockwise to the moving point at t equals 0.9, is a thick blue arc ending in an arrowhead; the portion not yet travelled is gray. An orange position vector labelled r of t reaches from the origin to the moving point, drawn in red. A green vector labelled v of t, of length one, starts at the moving point, tangent to the circle and pointing in the direction of motion. A blue label reads s of t equals t, the arc length swept so far.       "
},
{
  "id": "ex-paraglider",
  "level": "2",
  "url": "sec-arc-length.html#ex-paraglider",
  "type": "Example",
  "number": "2.6",
  "title": "Distance travelled by a paraglider.",
  "body": " Distance travelled by a paraglider   The position of a paraglider at time is Assuming that the paraglider begins at time :    How long does it take to reach the ground, that is, ?    Calculate the velocity vector at time , and also calculate its length.    Calculate the distance travelled by the paraglider.       Part A. The paraglider reaches the ground when the -coordinate vanishes: So it takes units of time to land.   Part B. We differentiate each component. The first two require the product rule, and for the third, . Hence   Its length simplifies neatly: the cross terms cancel, the squared sines and cosines combine, and the last component contributes :   where the last equality uses . So the paraglider's speed grows linearly: it starts at and reaches at touchdown.   Part C. The distance travelled is the arc length of the path, that is, speed integrated over the units of flight time:   The descending spiral, together with its endpoints and , is animated in and shown in .   The paraglider spirals down from to . Because the speed is , the total distance travelled is .     The paraglider's path from down to . The dashed gray curve is the path's shadow on the ground .   The paraglider's descending spiral path in three dimensions, from its starting point down to the ground.   A three-dimensional coordinate box with x and y running from minus 10 to 10 and z from 0 to 27. A thick blue spiral starts at a red point labelled start, at coordinates (0, 0, 9 root 8), about 25.5 units above the origin. The spiral winds outward and downward, its radius growing as it descends, making roughly one and a half turns before landing at a red point labelled ground, at coordinates (9 cosine 9, 9 sine 9, 0). A dashed gray spiral on the floor of the box shows the path's shadow on the ground.       "
},
{
  "id": "sec-line-integrals",
  "level": "1",
  "url": "sec-line-integrals.html",
  "type": "Section",
  "number": "3",
  "title": "Line Integrals",
  "body": " Line Integrals   In this section we study line integrals of scalar functions. We develop the idea through a concrete problem: finding the mass of a curved wire when we know its density its mass per unit length at every point. The strategy is the one behind every integral: chop the wire into tiny pieces, multiply the density of each piece by its length, and add up the results .     Line Integrals of Scalar Functions  Suppose we would like to compute the mass of a wire that does not have a trivial shape (such as a straight line). If the wire were straight and its density constant, the mass would simply be density times length. For a curved wire whose density varies from point to point, neither shortcut is available but we can recover the same simple rule on small pieces.  Assume the wire is represented by a curve in space, parametrized by , as in . Divide the wire into small portions, and denote the length of the th portion by . Pick a sample point on this portion. If the portion is short, the density is nearly constant along it, so   and summing over all portions,    A wire represented by a curve in space, parametrized by . The th portion (red) has length and contains the sample point , located by the position vector .   A curve in three-dimensional space with one small portion highlighted and a position vector pointing to it from the origin.   A three-dimensional coordinate box with x and y running from minus 1.3 to 1.3 and z from 0 to 1.7. A thick blue curve labelled C rises through the box from a red point labelled t equals a, at coordinates (1, 0, 0), to a red point labelled t equals b near the top of the box. Partway along the curve a short piece is drawn in thick red and labelled Delta s sub k; a red point on this piece is labelled (x sub k, y sub k, z sub k). A dotted red arrow labelled r of t sub k reaches from the origin to that point.      This is only an approximation, because the density is not actually constant over each portion. How can we make the calculation exact? We take the limit in which every portion becomes infinitely small, that is, , or equivalently :   This limit is denoted by the integral   read the integral of over the curve . The process is animated in : as the partition refines, the sums settle down to the value of the integral.   As the number of portions grows, the sum converges to the line integral .    Our final task is to write the line element in terms of , so the integral becomes an ordinary integral we can evaluate. Exactly as in , the line element is the length of an infinitesimal displacement in , and factoring out gives   The square root is exactly the length of the velocity vector   so the formula takes the tidy form   There is nothing special about density here. In general, a scalar line integral has the form   where is a scalar-valued function and the curve specifies the region of integration. Once the curve is parametrized in terms of , the region of integration translates to . In words: to compute a line integral, trade the geometric element for the parameter element . Two sanity checks connect this to what we already know. Taking recovers the arc length of total length is the mass of a wire of density one. And is the speed from that section, so the factor converts time spent into distance covered.      Mass and length of a helical wire   Consider a wire of length and mass . The wire is helix-shaped, with its bottom end located at and parametric equation Its density (mass per unit length) is kg\/m. Assuming that kg, calculate the length of the wire.    The wire occupies the part of the helix with , where the upper limit is unknown: it marks where the wire ends. Our plan has two steps. First we use the known mass in the formula to find ; then the length is the arc length .  First we find and its length:   Next we write the density along the curve in terms of , using the double-angle identity :   Substituting into and using the half-angle identity ,   Setting this equal to the given mass and multiplying both sides by ,   since . (This solution is the only one: the left-hand side has derivative , so it is increasing and crosses the value exactly once.)  The length of the wire is then the arc length from to . Because the speed is the constant ,   The wire a quarter turn of the helix from up to is shown in , and the accumulation of its mass is animated in .   The helical wire for , from its bottom end to its top end . The dashed gray curve is its shadow on the plane .   A quarter turn of a helix rising from the point (1,0,0) to the point (0,1,pi over 2), with its shadow on the floor.   A three-dimensional coordinate box with x and y running from minus 1.2 to 1.2 and z from 0 to 1.8. A thick blue curve, one quarter turn of a helix, starts at a red point on the floor labelled (1, 0, 0), t equals 0, and climbs steadily as it curves, ending at a red point labelled (0, 1, pi over 2), t equals pi over 2, about 1.57 units above the floor. A dashed gray quarter circle on the floor of the box shows the curve's shadow.       A point traverses the helical wire while the accumulated mass grows to kg over the length m.      "
},
{
  "id": "fig-wire-partition",
  "level": "2",
  "url": "sec-line-integrals.html#fig-wire-partition",
  "type": "Figure",
  "number": "3.1",
  "title": "",
  "body": " A wire represented by a curve in space, parametrized by . The th portion (red) has length and contains the sample point , located by the position vector .   A curve in three-dimensional space with one small portion highlighted and a position vector pointing to it from the origin.   A three-dimensional coordinate box with x and y running from minus 1.3 to 1.3 and z from 0 to 1.7. A thick blue curve labelled C rises through the box from a red point labelled t equals a, at coordinates (1, 0, 0), to a red point labelled t equals b near the top of the box. Partway along the curve a short piece is drawn in thick red and labelled Delta s sub k; a red point on this piece is labelled (x sub k, y sub k, z sub k). A dotted red arrow labelled r of t sub k reaches from the origin to that point.     "
},
{
  "id": "fig-wire-partition-video",
  "level": "2",
  "url": "sec-line-integrals.html#fig-wire-partition-video",
  "type": "Figure",
  "number": "3.2",
  "title": "",
  "body": " As the number of portions grows, the sum converges to the line integral .   "
},
{
  "id": "subsec-scalar-line-integrals-20",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-scalar-line-integrals-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar line integral "
},
{
  "id": "ex-helix-wire",
  "level": "2",
  "url": "sec-line-integrals.html#ex-helix-wire",
  "type": "Example",
  "number": "3.3",
  "title": "Mass and length of a helical wire.",
  "body": " Mass and length of a helical wire   Consider a wire of length and mass . The wire is helix-shaped, with its bottom end located at and parametric equation Its density (mass per unit length) is kg\/m. Assuming that kg, calculate the length of the wire.    The wire occupies the part of the helix with , where the upper limit is unknown: it marks where the wire ends. Our plan has two steps. First we use the known mass in the formula to find ; then the length is the arc length .  First we find and its length:   Next we write the density along the curve in terms of , using the double-angle identity :   Substituting into and using the half-angle identity ,   Setting this equal to the given mass and multiplying both sides by ,   since . (This solution is the only one: the left-hand side has derivative , so it is increasing and crosses the value exactly once.)  The length of the wire is then the arc length from to . Because the speed is the constant ,   The wire a quarter turn of the helix from up to is shown in , and the accumulation of its mass is animated in .   The helical wire for , from its bottom end to its top end . The dashed gray curve is its shadow on the plane .   A quarter turn of a helix rising from the point (1,0,0) to the point (0,1,pi over 2), with its shadow on the floor.   A three-dimensional coordinate box with x and y running from minus 1.2 to 1.2 and z from 0 to 1.8. A thick blue curve, one quarter turn of a helix, starts at a red point on the floor labelled (1, 0, 0), t equals 0, and climbs steadily as it curves, ending at a red point labelled (0, 1, pi over 2), t equals pi over 2, about 1.57 units above the floor. A dashed gray quarter circle on the floor of the box shows the curve's shadow.       A point traverses the helical wire while the accumulated mass grows to kg over the length m.     "
},
{
  "id": "sec-vector-fields",
  "level": "1",
  "url": "sec-vector-fields.html",
  "type": "Section",
  "number": "4",
  "title": "Vector Fields and Line Integrals",
  "body": " Vector Fields and Line Integrals   In this section we meet two ideas. A vector field attaches a vector a magnitude and a direction to every point of the plane or of space; think of the velocity of the air at each point of a room, or the gravitational pull at each point around a planet. The line integral of a vector field then answers a natural question: as an object moves along a curve through the field, how much does the field push it along its way? The physical name for this accumulated push is work .     Vector Fields  What is a vector field? We will study the definition through an example. Assume that we have a function on : the function takes two real numbers as its input and outputs a vector in . As an example, consider the following vector field: To visualize this vector field, imagine that at each point there is a vector attached. Physically, this vector could correspond to the velocity of an atom located at the point . See .   The vector field . Every arrow points directly away from the origin, and the arrows get longer as the distance from the origin grows.   A grid of arrows all pointing away from the origin, growing longer farther from the origin.   The plane with x and y from minus 5 to 5. At each point of a regular grid a blue arrow points radially outward, directly away from the origin. Arrows near the origin are short; arrows near the edge of the picture are long. A red dot marks the origin, where the field is the zero vector.      Note that the length of the vector is , the distance from the origin. This is why the blue arrows in grow in length as we move away from the origin along a straight line. Can we modify the vector field so that the length of the vectors is one at every point? The answer is yes: dividing the vector by its own length produces a unit vector, and hence the vector field when visualized, looks like : the directions are unchanged, but now all arrows have the same length.   The normalized field : same directions as , but every arrow has length one.   A grid of arrows all pointing away from the origin, all of the same length.   The plane with x and y from minus 5 to 5. At each point of a regular grid a blue arrow points radially outward, directly away from the origin, and every arrow has exactly the same length. A red dot marks the origin, where the field is undefined.      Our next example is a vector field which is a function on . Consider the following vector field: This can, for instance, represent the gravitational field of a massive body located at the origin: every arrow points toward the origin, and since , the pull weakens with the square of the distance the inverse-square law. See . We will meet this field again in .   The gravitational field . All arrows point toward the origin and shrink with the square of the distance.   A three-dimensional grid of arrows all pointing toward the origin, longer near the origin.   A three-dimensional box with x, y, and z from minus 0.7 to 0.7. At each point of a coarse three-dimensional grid a blue arrow points directly toward the center of the box, where a red dot marks the origin. Arrows close to the origin are long; arrows at the corners of the box are short.         Work (Reminder)  Our goal is to study the line integral of a vector field over a curve , and we will do so using an example from physics: calculating the amount of work done by a force , which in general can be a function of , , and . Before we present the example, let us remind ourselves of the definition of work. Consider a box being pulled by a constant force , as shown in .   A box pulled through a displacement by a constant force applied at an angle . Only the component along the motion does work.   A box on a horizontal line pulled by a tilted force arrow, with the horizontal component of the force and the displacement marked.   A horizontal line represents the ground, with a small box sitting on it at the left. A red arrow labelled F points up and to the right from the top of the box, making an angle alpha with the horizontal; a small arc marks the angle. A shorter blue horizontal arrow labelled the magnitude of F times cosine alpha, times i, shows the horizontal component of the force. A dotted line labelled delta x runs to the right, ending at a faint second box marking the final position.      The amount of work done by the force is equal to the magnitude of the force in the direction of motion, , multiplied by the amount of displacement : The last equality holds because the motion is in the -direction, which lets us rewrite as the dot product . This dot-product form is the one that generalizes: work is the dot product of the force with the displacement .     Work of a Force Field  Let us now consider the situation where a force is acting on an object and causing it to move along a curved trajectory from an initial point to a final point. Neither the force nor the direction of motion is constant anymore, so we cannot apply the formula above directly. Instead, we reuse the strategy of : calculate the work on small subarcs of the trajectory, where force and direction are nearly constant, and then sum up. shows one such subarc.   On the th subarc, of length , the direction of motion is the unit tangent vector (green) and the force is approximately (red). Only the tangential component of the force does work.   A curved trajectory with one short subarc highlighted, showing the force vector and the unit tangent vector at a point.   A blue curve rises from a red point near the origin, bending upward to a red endpoint at the upper right. A short piece of the curve, labelled Delta s sub k, is drawn thicker in dark red. At a black point on this piece, a red arrow labelled F of (x sub k, y sub k) points steeply up and to the right, and a shorter green arrow labelled T sub k points along the curve in the direction of motion.      On the th subarc the displacement has length and direction , the unit tangent vector, so by the dot-product formula for work, the work done along the th subarc is . Therefore the work done over the whole curve can be approximated as Finally, to find the exact amount of work we take the limit as the number of subarcs approaches infinity: where is the unit tangent vector of the curve. Since the combination is simply , and we arrive at the compact form   In practice, once the curve is parametrized by for , the recipe is evaluate the field along the curve, dot it with the velocity, and integrate over time. Work was our motivation, but any vector field can be integrated over a curve in this fashion. shows the accumulation of along a trajectory.   As the object moves through the field along the trajectory, the work accumulates moment by moment from the tangential component of the force.    There is a third, frequently used way to write the same integral. Assume the vector field has components . Since , expanding the dot product gives the differential form of the line integral: All three notations , , and mean exactly the same thing.      Work along a twisted cubic   Calculate the work done by the force over the curve : from to .    The curve, shown in , runs from to , so the parameter interval is . We begin by writing the force in terms of the parameter , substituting , , :   where the -component vanishes identically along this particular curve. The velocity vector is Finally, the amount of work is    The twisted cubic , , from the origin to . The dashed gray curve is its shadow on the plane .   A curve in space rising from the origin to the point (1,1,1), with its shadow on the floor.   A three-dimensional box with x, y, and z from 0 to 1.1. A thick blue curve starts at a red point at the origin, labelled (0,0,0), hugs the floor at first, then sweeps upward ever more steeply to a red point labelled (1,1,1) at the far upper corner. A dashed gray parabola on the floor shows the curve's shadow.            Work done by the gravitational field along a helix   Calculate the line integral over the curve from to .    This integral is in the differential form with , and we recognize the field: the gravitational field of . The curve is a helix that climbs one full turn, from at to at ; see .  We write the field along the curve in terms of . On the helix, so The velocity vector is , and the dot product collapses nicely:   Therefore, using the substitution , ,   The work is negative, and the picture explains why: the gravitational field always points toward the origin, while the helix climbs steadily away from it, so the tangential component of the force opposes the motion at every instant. The accumulation of this negative work is animated in .   The helix , , climbing through the gravitational field (orange arrows, direction only).   One full turn of a helix rising from (1,0,0) to (1,0,2 pi), with arrows along it pointing toward the origin.   A three-dimensional box with x and y from minus 1.4 to 1.4 and z from 0 to 7. A thick blue helix makes one full counterclockwise turn of radius one, starting at a red point labelled (1,0,0), t equals 0, on the floor and ending at a red point labelled (1,0,2 pi), t equals 2 pi, directly above it. A dashed gray unit circle on the floor is the helix's shadow. Three orange arrows attached to points of the helix, labelled F, point inward and downward, toward the origin.       A particle climbs the helix through the gravitational field while the work accumulates, reaching at the top: the field opposes the motion the whole way.      "
},
{
  "id": "fig-radial-field",
  "level": "2",
  "url": "sec-vector-fields.html#fig-radial-field",
  "type": "Figure",
  "number": "4.1",
  "title": "",
  "body": " The vector field . Every arrow points directly away from the origin, and the arrows get longer as the distance from the origin grows.   A grid of arrows all pointing away from the origin, growing longer farther from the origin.   The plane with x and y from minus 5 to 5. At each point of a regular grid a blue arrow points radially outward, directly away from the origin. Arrows near the origin are short; arrows near the edge of the picture are long. A red dot marks the origin, where the field is the zero vector.     "
},
{
  "id": "fig-unit-radial-field",
  "level": "2",
  "url": "sec-vector-fields.html#fig-unit-radial-field",
  "type": "Figure",
  "number": "4.2",
  "title": "",
  "body": " The normalized field : same directions as , but every arrow has length one.   A grid of arrows all pointing away from the origin, all of the same length.   The plane with x and y from minus 5 to 5. At each point of a regular grid a blue arrow points radially outward, directly away from the origin, and every arrow has exactly the same length. A red dot marks the origin, where the field is undefined.     "
},
{
  "id": "fig-gravity-field",
  "level": "2",
  "url": "sec-vector-fields.html#fig-gravity-field",
  "type": "Figure",
  "number": "4.3",
  "title": "",
  "body": " The gravitational field . All arrows point toward the origin and shrink with the square of the distance.   A three-dimensional grid of arrows all pointing toward the origin, longer near the origin.   A three-dimensional box with x, y, and z from minus 0.7 to 0.7. At each point of a coarse three-dimensional grid a blue arrow points directly toward the center of the box, where a red dot marks the origin. Arrows close to the origin are long; arrows at the corners of the box are short.     "
},
{
  "id": "fig-work-reminder",
  "level": "2",
  "url": "sec-vector-fields.html#fig-work-reminder",
  "type": "Figure",
  "number": "4.4",
  "title": "",
  "body": " A box pulled through a displacement by a constant force applied at an angle . Only the component along the motion does work.   A box on a horizontal line pulled by a tilted force arrow, with the horizontal component of the force and the displacement marked.   A horizontal line represents the ground, with a small box sitting on it at the left. A red arrow labelled F points up and to the right from the top of the box, making an angle alpha with the horizontal; a small arc marks the angle. A shorter blue horizontal arrow labelled the magnitude of F times cosine alpha, times i, shows the horizontal component of the force. A dotted line labelled delta x runs to the right, ending at a faint second box marking the final position.     "
},
{
  "id": "fig-work-subarc",
  "level": "2",
  "url": "sec-vector-fields.html#fig-work-subarc",
  "type": "Figure",
  "number": "4.5",
  "title": "",
  "body": " On the th subarc, of length , the direction of motion is the unit tangent vector (green) and the force is approximately (red). Only the tangential component of the force does work.   A curved trajectory with one short subarc highlighted, showing the force vector and the unit tangent vector at a point.   A blue curve rises from a red point near the origin, bending upward to a red endpoint at the upper right. A short piece of the curve, labelled Delta s sub k, is drawn thicker in dark red. At a black point on this piece, a red arrow labelled F of (x sub k, y sub k) points steeply up and to the right, and a shorter green arrow labelled T sub k points along the curve in the direction of motion.     "
},
{
  "id": "fig-work-video",
  "level": "2",
  "url": "sec-vector-fields.html#fig-work-video",
  "type": "Figure",
  "number": "4.6",
  "title": "",
  "body": " As the object moves through the field along the trajectory, the work accumulates moment by moment from the tangential component of the force.   "
},
{
  "id": "subsec-work-force-field-7",
  "level": "2",
  "url": "sec-vector-fields.html#subsec-work-force-field-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential form "
},
{
  "id": "ex-twisted-cubic-work",
  "level": "2",
  "url": "sec-vector-fields.html#ex-twisted-cubic-work",
  "type": "Example",
  "number": "4.7",
  "title": "Work along a twisted cubic.",
  "body": " Work along a twisted cubic   Calculate the work done by the force over the curve : from to .    The curve, shown in , runs from to , so the parameter interval is . We begin by writing the force in terms of the parameter , substituting , , :   where the -component vanishes identically along this particular curve. The velocity vector is Finally, the amount of work is    The twisted cubic , , from the origin to . The dashed gray curve is its shadow on the plane .   A curve in space rising from the origin to the point (1,1,1), with its shadow on the floor.   A three-dimensional box with x, y, and z from 0 to 1.1. A thick blue curve starts at a red point at the origin, labelled (0,0,0), hugs the floor at first, then sweeps upward ever more steeply to a red point labelled (1,1,1) at the far upper corner. A dashed gray parabola on the floor shows the curve's shadow.       "
},
{
  "id": "ex-helix-gravity",
  "level": "2",
  "url": "sec-vector-fields.html#ex-helix-gravity",
  "type": "Example",
  "number": "4.9",
  "title": "Work done by the gravitational field along a helix.",
  "body": " Work done by the gravitational field along a helix   Calculate the line integral over the curve from to .    This integral is in the differential form with , and we recognize the field: the gravitational field of . The curve is a helix that climbs one full turn, from at to at ; see .  We write the field along the curve in terms of . On the helix, so The velocity vector is , and the dot product collapses nicely:   Therefore, using the substitution , ,   The work is negative, and the picture explains why: the gravitational field always points toward the origin, while the helix climbs steadily away from it, so the tangential component of the force opposes the motion at every instant. The accumulation of this negative work is animated in .   The helix , , climbing through the gravitational field (orange arrows, direction only).   One full turn of a helix rising from (1,0,0) to (1,0,2 pi), with arrows along it pointing toward the origin.   A three-dimensional box with x and y from minus 1.4 to 1.4 and z from 0 to 7. A thick blue helix makes one full counterclockwise turn of radius one, starting at a red point labelled (1,0,0), t equals 0, on the floor and ending at a red point labelled (1,0,2 pi), t equals 2 pi, directly above it. A dashed gray unit circle on the floor is the helix's shadow. Three orange arrows attached to points of the helix, labelled F, point inward and downward, toward the origin.       A particle climbs the helix through the gravitational field while the work accumulates, reaching at the top: the field opposes the motion the whole way.     "
},
{
  "id": "section-conservative-fields",
  "level": "1",
  "url": "section-conservative-fields.html",
  "type": "Section",
  "number": "5",
  "title": "Path Independence, Conservative Fields, and Potential Functions",
  "body": " Path Independence, Conservative Fields, and Potential Functions  Before we begin discussing the actual topic of today's lecture, we will need to study a particular type of a vector field known as a gradient field .    Gradient Fields   Gradient Field   The gradient field of a differentiable function is the field of gradient vectors     At each point , the gradient field gives a vector pointing in the direction of greatest increase of . Let us emphasize that even though the function is a scalar-valued function, its gradient is a vector-valued one by definition. As an example, see .   The surface together with its gradient field , drawn in the -plane. The gradient vectors point radially away from the origin, the direction of steepest ascent, and grow longer as we move away from the origin.   An upward-opening paraboloid, the graph of z equals x squared plus y squared, drawn as a translucent blue surface. In the x y plane below it, blue arrows of the gradient field point radially outward from the origin, growing longer at points farther from the origin.     In , you see the scalar-valued function , which is a function on , and according to the above definition, its gradient is   The gradient field is visualized in the -plane and the value of the function at each point is plotted on the -axis. Intuitively, the gradient of a function at a point is a vector pointing in the direction of the steepest slope.     Path Independence and Some Basic Definitions  In previous lectures, we saw that the line integral of a vector field depends on the path in general. Then, the natural question to ask is:    What are the conditions under which the line integral of a vector field from point to point is independent of the curve taken to go from to ?    To answer this question, we will need some concepts and therefore we begin by explaining them.   Reminder  A smooth curve has no sharp corners or cusps; when the tangent vector turns, it does so continuously.    Open, Connected, and Simply Connected Regions; Conservative Fields      A region is open if for every point in there is a disk with center that lies entirely in , which means that doesn't contain any of its boundary points.    Consider an open region in space and a vector field . If the result of the line integral from to is the same for all possible paths inside , then the line integral is said to be path-independent inside and the field is said to be conservative on .    If a vector field can be written as , where is a scalar-valued function, then is a potential function .     Piecewise smooth curves are curves that are made up of finitely many smooth pieces.    An open region is said to be connected if any two points in can be joined by a smooth curve that lies in the region.     is simply connected , which means that every loop in can be contracted to a point in without ever leaving . (See .)        On the left, a simply connected region: every loop can be contracted to a point without leaving the region. On the right, a region that is not simply connected: the loop encircles a hole and cannot be contracted to a point while staying inside the region.      blob(t) = ((1.5 + 0.55*sin(2*t) + 0.3*cos(3*t))*cos(t) + 0.2, (1.2 + 0.45*cos(2*t) + 0.25*sin(3*t))*sin(t) + 0.4)     Simply connected              blob(t) = ((1.9 + 0.4*sin(2*t))*cos(t), (1.25 + 0.3*cos(3*t))*sin(t) + 0.3)         C_1  Not simply connected                   Line Integrals in Conservative Fields  Next, we will study the line integrals of conservative fields. As you will recognize, if you think of the gradient of a vector field as its derivative, then the fundamental theorem of line integrals makes a similar statement for vector-valued functions as the one made for definite integrals of scalar-valued functions, i.e., the one that you learned in MATH 12 and you know as FTC II.   Fundamental Theorem of Line Integrals   Let be a smooth curve joining the point to the point in the plane or in space and parametrized by . Let be a differentiable function with a continuous gradient vector on a domain containing . Then     Assuming that the curve is parametrised as , we have and we can rewrite the line integral as     In , the boundary of the region is marked as dotted and the curve is in red. According to the fundamental theorem, the line integral of a conservative vector field can be easily calculated by calculating the values of its corresponding potential function at the beginning (point ) and end (point ) of the curve .   A smooth curve joining to inside an open region in space, whose boundary is drawn dotted. For a conservative field , the line integral along equals , no matter how winds from to .   Three coordinate axes in space with a dotted oval marking the boundary of a region D. Inside the region, a red curve C winds from the point A with coordinates x 1 comma y 1 comma z 1 to the point B with coordinates x 2 comma y 2 comma z 2.     The central idea of the theorem that only the endpoints matter is animated in .   Animation of the fundamental theorem of line integrals for the field with . Two different curves join to : the helix and the straight segment . The accumulated value of each line integral is tracked as the paths are traced, and both integrals arrive at the same value .    In the next example, we will see how we can use the above theorem.   Example I   Consider the scalar-valued function .     Calculate the gradient vector field .    Evaluate the line integral of the vector field over the curve parametrized as from to .    What is the result of from to where is the line connecting the two points?         A. We compute the three partial derivatives of :    B. Of course, one way would be to calculate the line integral using the vector field calculated in part A (as we used to do); however, provides us with a much more efficient way of calculating the line integral as follows:    C. The result is the same as part B, since the vector field is a conservative field, which means that the result of the line integral is independent of the chosen path. Note that the line integral is calculated from to in both cases. The two curves and are shown in .    The two paths of joining to : the helix , parametrized by , and the straight segment . Since is conservative, both line integrals equal .   Three coordinate axes in space showing a blue helix that winds once around the z axis, climbing from the point one comma zero comma zero up to the point one comma zero comma two pi, and a vertical vermillion segment joining the same two points directly. Both endpoints are marked and labeled.        Finding a Potential Function   Example II   Consider the vector field .     Find a function such that .    Use the solution of part (A) to calculate the line integral from to .         A. Writing , we match the components one at a time; the three steps are summarized in .   Step I. Since , we integrate with respect to (here is the variable and and are constants), so   where the constant of integration is allowed to depend on and .   Step II. Since , we differentiate with respect to :   so does not depend on , and we can write ; that is,    Step III. Since , we differentiate with respect to :   Putting the three steps together, we conclude    B. By , with and ,     The three-step cascade for building the potential function of . Each component of pins down one more piece of , shrinking the unknown constant of integration from to to the true constant .        \\dfrac{\\partial f}{\\partial x} = yz    integrate in x    xyz + g(y,z)     \\dfrac{\\partial f}{\\partial y} = xz    \\partial g\/\\partial y = 0    xyz + h(z)     \\dfrac{\\partial f}{\\partial z} = xy + 2z    h'(z) = 2z    xyz + z^2 + C                     Conservative Fields are Gradient Fields   Conservative Fields are Gradient Fields   Let be a vector field whose components are continuous throughout an open connected region in space. Then is conservative if and only if is a gradient field for a differentiable function .    The content of , combined with and the definition of path independence, can be organized into the following square of equivalent statements:   Path independence means that all of the paths in give the same value of the line integral: if is conservative, then    Three different paths , , and joining to . For a conservative field, all three line integrals have the same value .     c1(t) = (4*t - 1.6*t*(1-t), 3*t - 3.4*t*(1-t))  c2(t) = (4*t, 3*t)  c3(t) = (4*t - 3.4*t*(1-t), 3*t + 3.2*t*(1-t))       A    B   C_1  C_2  C_3                   The Loop Property of Conservative Fields   Loop Property of Conservative Fields   The following statements are equivalent.      around every loop (that is, closed curve ) in .    The field is conservative on .       We prove that (2) implies (1); the reverse direction runs the same computation backwards. We assume that is conservative. Then, as shown in , we can think about any loop as , where goes from to and returns from to . Reversing the orientation of produces the curve , and and both connect to . Since is conservative, path independence gives , and therefore   Hence for any loop .     On the left, a loop is split into two pieces: from to and from back to , so . On the right, the orientation of is reversed to produce ; now and both connect to , and path independence forces the two integrals to agree.      top(t) = (2*cos(t), 1.35*sin(t) + 0.12*sin(2*t))  bot(t) = (2*cos(t), 1.35*sin(t) - 0.1*sin(2*t))      A    B   C_1  C_2   C = C_1 \\cup C_2                top(t) = (2*cos(t), 1.35*sin(t) + 0.12*sin(2*t))  botrev(t) = (2*cos(-t), 1.35*sin(-t) + 0.1*sin(2*t))      A    B   C_1  -C_2   \\int_{C_1}\\mathbf F\\cdot d\\mathbf r = \\int_{-C_2}\\mathbf F\\cdot d\\mathbf r                "
},
{
  "id": "def-gradient-field",
  "level": "2",
  "url": "section-conservative-fields.html#def-gradient-field",
  "type": "Definition",
  "number": "5.1",
  "title": "Gradient Field.",
  "body": " Gradient Field   The gradient field of a differentiable function is the field of gradient vectors    "
},
{
  "id": "fig-gradient-field-tikz",
  "level": "2",
  "url": "section-conservative-fields.html#fig-gradient-field-tikz",
  "type": "Figure",
  "number": "5.2",
  "title": "",
  "body": " The surface together with its gradient field , drawn in the -plane. The gradient vectors point radially away from the origin, the direction of steepest ascent, and grow longer as we move away from the origin.   An upward-opening paraboloid, the graph of z equals x squared plus y squared, drawn as a translucent blue surface. In the x y plane below it, blue arrows of the gradient field point radially outward from the origin, growing longer at points farther from the origin.    "
},
{
  "id": "remark-smooth-curve",
  "level": "2",
  "url": "section-conservative-fields.html#remark-smooth-curve",
  "type": "Remark",
  "number": "5.3",
  "title": "Reminder.",
  "body": " Reminder  A smooth curve has no sharp corners or cusps; when the tangent vector turns, it does so continuously.  "
},
{
  "id": "def-conservative-concepts",
  "level": "2",
  "url": "section-conservative-fields.html#def-conservative-concepts",
  "type": "Definition",
  "number": "5.4",
  "title": "Open, Connected, and Simply Connected Regions; Conservative Fields.",
  "body": " Open, Connected, and Simply Connected Regions; Conservative Fields      A region is open if for every point in there is a disk with center that lies entirely in , which means that doesn't contain any of its boundary points.    Consider an open region in space and a vector field . If the result of the line integral from to is the same for all possible paths inside , then the line integral is said to be path-independent inside and the field is said to be conservative on .    If a vector field can be written as , where is a scalar-valued function, then is a potential function .     Piecewise smooth curves are curves that are made up of finitely many smooth pieces.    An open region is said to be connected if any two points in can be joined by a smooth curve that lies in the region.     is simply connected , which means that every loop in can be contracted to a point in without ever leaving . (See .)      "
},
{
  "id": "fig-simply-connected-prefigure",
  "level": "2",
  "url": "section-conservative-fields.html#fig-simply-connected-prefigure",
  "type": "Figure",
  "number": "5.5",
  "title": "",
  "body": " On the left, a simply connected region: every loop can be contracted to a point without leaving the region. On the right, a region that is not simply connected: the loop encircles a hole and cannot be contracted to a point while staying inside the region.      blob(t) = ((1.5 + 0.55*sin(2*t) + 0.3*cos(3*t))*cos(t) + 0.2, (1.2 + 0.45*cos(2*t) + 0.25*sin(3*t))*sin(t) + 0.4)     Simply connected              blob(t) = ((1.9 + 0.4*sin(2*t))*cos(t), (1.25 + 0.3*cos(3*t))*sin(t) + 0.3)         C_1  Not simply connected               "
},
{
  "id": "thm-ftli",
  "level": "2",
  "url": "section-conservative-fields.html#thm-ftli",
  "type": "Theorem",
  "number": "5.6",
  "title": "Fundamental Theorem of Line Integrals.",
  "body": " Fundamental Theorem of Line Integrals   Let be a smooth curve joining the point to the point in the plane or in space and parametrized by . Let be a differentiable function with a continuous gradient vector on a domain containing . Then     Assuming that the curve is parametrised as , we have and we can rewrite the line integral as    "
},
{
  "id": "fig-ftli-region-tikz",
  "level": "2",
  "url": "section-conservative-fields.html#fig-ftli-region-tikz",
  "type": "Figure",
  "number": "5.7",
  "title": "",
  "body": " A smooth curve joining to inside an open region in space, whose boundary is drawn dotted. For a conservative field , the line integral along equals , no matter how winds from to .   Three coordinate axes in space with a dotted oval marking the boundary of a region D. Inside the region, a red curve C winds from the point A with coordinates x 1 comma y 1 comma z 1 to the point B with coordinates x 2 comma y 2 comma z 2.    "
},
{
  "id": "fig-ftli-video",
  "level": "2",
  "url": "section-conservative-fields.html#fig-ftli-video",
  "type": "Figure",
  "number": "5.8",
  "title": "",
  "body": " Animation of the fundamental theorem of line integrals for the field with . Two different curves join to : the helix and the straight segment . The accumulated value of each line integral is tracked as the paths are traced, and both integrals arrive at the same value .   "
},
{
  "id": "example-ftli-helix",
  "level": "2",
  "url": "section-conservative-fields.html#example-ftli-helix",
  "type": "Example",
  "number": "5.9",
  "title": "Example I.",
  "body": " Example I   Consider the scalar-valued function .     Calculate the gradient vector field .    Evaluate the line integral of the vector field over the curve parametrized as from to .    What is the result of from to where is the line connecting the two points?      "
},
{
  "id": "fig-helix-segment-tikz",
  "level": "2",
  "url": "section-conservative-fields.html#fig-helix-segment-tikz",
  "type": "Figure",
  "number": "5.10",
  "title": "",
  "body": " The two paths of joining to : the helix , parametrized by , and the straight segment . Since is conservative, both line integrals equal .   Three coordinate axes in space showing a blue helix that winds once around the z axis, climbing from the point one comma zero comma zero up to the point one comma zero comma two pi, and a vertical vermillion segment joining the same two points directly. Both endpoints are marked and labeled.    "
},
{
  "id": "example-potential-function",
  "level": "2",
  "url": "section-conservative-fields.html#example-potential-function",
  "type": "Example",
  "number": "5.11",
  "title": "Example II.",
  "body": " Example II   Consider the vector field .     Find a function such that .    Use the solution of part (A) to calculate the line integral from to .      "
},
{
  "id": "fig-potential-steps-prefigure",
  "level": "2",
  "url": "section-conservative-fields.html#fig-potential-steps-prefigure",
  "type": "Figure",
  "number": "5.12",
  "title": "",
  "body": " The three-step cascade for building the potential function of . Each component of pins down one more piece of , shrinking the unknown constant of integration from to to the true constant .        \\dfrac{\\partial f}{\\partial x} = yz    integrate in x    xyz + g(y,z)     \\dfrac{\\partial f}{\\partial y} = xz    \\partial g\/\\partial y = 0    xyz + h(z)     \\dfrac{\\partial f}{\\partial z} = xy + 2z    h'(z) = 2z    xyz + z^2 + C                 "
},
{
  "id": "thm-conservative-gradient",
  "level": "2",
  "url": "section-conservative-fields.html#thm-conservative-gradient",
  "type": "Theorem",
  "number": "5.13",
  "title": "Conservative Fields are Gradient Fields.",
  "body": " Conservative Fields are Gradient Fields   Let be a vector field whose components are continuous throughout an open connected region in space. Then is conservative if and only if is a gradient field for a differentiable function .   "
},
{
  "id": "fig-path-independence-prefigure",
  "level": "2",
  "url": "section-conservative-fields.html#fig-path-independence-prefigure",
  "type": "Figure",
  "number": "5.14",
  "title": "",
  "body": " Three different paths , , and joining to . For a conservative field, all three line integrals have the same value .     c1(t) = (4*t - 1.6*t*(1-t), 3*t - 3.4*t*(1-t))  c2(t) = (4*t, 3*t)  c3(t) = (4*t - 3.4*t*(1-t), 3*t + 3.2*t*(1-t))       A    B   C_1  C_2  C_3               "
},
{
  "id": "thm-loop-property",
  "level": "2",
  "url": "section-conservative-fields.html#thm-loop-property",
  "type": "Theorem",
  "number": "5.15",
  "title": "Loop Property of Conservative Fields.",
  "body": " Loop Property of Conservative Fields   The following statements are equivalent.      around every loop (that is, closed curve ) in .    The field is conservative on .       We prove that (2) implies (1); the reverse direction runs the same computation backwards. We assume that is conservative. Then, as shown in , we can think about any loop as , where goes from to and returns from to . Reversing the orientation of produces the curve , and and both connect to . Since is conservative, path independence gives , and therefore   Hence for any loop .   "
},
{
  "id": "fig-loop-split-prefigure",
  "level": "2",
  "url": "section-conservative-fields.html#fig-loop-split-prefigure",
  "type": "Figure",
  "number": "5.16",
  "title": "",
  "body": " On the left, a loop is split into two pieces: from to and from back to , so . On the right, the orientation of is reversed to produce ; now and both connect to , and path independence forces the two integrals to agree.      top(t) = (2*cos(t), 1.35*sin(t) + 0.12*sin(2*t))  bot(t) = (2*cos(t), 1.35*sin(t) - 0.1*sin(2*t))      A    B   C_1  C_2   C = C_1 \\cup C_2                top(t) = (2*cos(t), 1.35*sin(t) + 0.12*sin(2*t))  botrev(t) = (2*cos(-t), 1.35*sin(-t) + 0.1*sin(2*t))      A    B   C_1  -C_2   \\int_{C_1}\\mathbf F\\cdot d\\mathbf r = \\int_{-C_2}\\mathbf F\\cdot d\\mathbf r              "
},
{
  "id": "section-double-integrals-rectangles",
  "level": "1",
  "url": "section-double-integrals-rectangles.html",
  "type": "Section",
  "number": "6",
  "title": "Double and Iterated Integrals Over Rectangles",
  "body": " Double and Iterated Integrals Over Rectangles  Before we begin discussing the actual topic of today's lecture, we will briefly remind ourselves of the concept of area under a function and its relation with definite integrals.    Reminder: Area Under from to  As shown in , to calculate the area under from to , we divide the interval into subintervals and then let the number of subintervals (which is the same as the number of rectangles) approach infinity:   We also learned that the definite integral of from to is equal to this area:    The area under from to , approximated by rectangles of width . The height of the -th rectangle is , where is a sample point in the -th subinterval. As , the total area of the rectangles approaches the area under the curve.     f(t) = (t, 0.15*(t-1)*(t-3)*(t-5) + 2.5)              a    b    \\Delta x       x_i^*       \\text{height} = f(x_i^*)   y = f(x)                    Double Integrals Over Rectangles  As we will see, double integrals can be interpreted geometrically as the volume under a surface . As an example, consider the surface , which is shown in . To estimate the volume under this surface and over the region   we can use the point in the middle to find the height of the blue cuboid and come up with a very bad estimate of the desired volume.   A first, very rough estimate of the volume under over the square : a single cuboid whose height is sampled at the center of the square, giving the estimate .   Three coordinate axes in space with the surface z equals x squared plus y plus 5 drawn as a translucent blue mesh above the square with corners zero zero and two two in the x y plane. A single translucent blue cuboid of height seven rises from the square, and its flat top crosses the curved surface.     We can improve the estimate by splitting the region into more squares. For instance, we can split the region into four squares to achieve a better approximation for the desired volume, as shown in . Similar to finding the area under , if we let the number of splittings go to infinity, our estimation becomes exact, i.e., we find the exact desired volume. The refinement process is animated in .   Splitting into four squares improves the estimate. Each cuboid uses the value of at the center of its square: , , , and , giving .   The same surface z equals x squared plus y plus 5 above the unit square, now with four cuboids of different heights and colors, one over each quarter of the square. The tops of the cuboids hug the surface more closely than the single cuboid did.     In the Riemann sum notation, the approximation of the volume using small rectangles is   and the exact volume is   The result of the above limit is defined as the double integral over a rectangular region and is denoted as   For instance, in the example above, we have   Next, we will study how to calculate such integrals.   Animation of the Riemann-sum definition of the double integral. The region is split into , then , then , then squares, and a cuboid is built over each square with height sampled at its center. The displayed estimate approaches the exact volume .       Calculating Double Integrals as Iterated Integrals   Example I   Calculate the double integral .     To calculate the double integral   we first use FTC II to integrate with respect to :   which gives us a function of , and then we integrate it with respect to :    In calculating double integrals, the following theorem can be very useful.   Fubini's Theorem (First Form)   If is continuous throughout the rectangular region , then     Therefore, if the integrand satisfies the conditions mentioned in the above theorem, we can change the order of integration. For the previous example, we can first integrate over :   Then, we integrate this function of :   which gives us the same result, i.e., .     An Iterated Integral Requiring Substitution and Integration by Parts   Example II   Calculate the double integral .     Using Fubini's theorem , we first integrate over , which means that is considered to be a constant. As our substitution , we choose and :    Next, we integrate with respect to using the method of integration by parts  . We make the following choices for the integration by parts:   Therefore,   and hence   The surface whose volume over we just computed is shown in .    The surface over the rectangle , . The double integral of is the volume between this surface and the shaded base rectangle, and equals .   Three coordinate axes in space with a curved surface over the rectangle zero to one in x and zero to two in y. The surface rises from height zero along the y z plane to height one at the corner x equals one, y equals zero, and slopes downward as y increases. The base rectangle in the x y plane is shaded.      "
},
{
  "id": "fig-riemann-1d-prefigure",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-riemann-1d-prefigure",
  "type": "Figure",
  "number": "6.1",
  "title": "",
  "body": " The area under from to , approximated by rectangles of width . The height of the -th rectangle is , where is a sample point in the -th subinterval. As , the total area of the rectangles approaches the area under the curve.     f(t) = (t, 0.15*(t-1)*(t-3)*(t-5) + 2.5)              a    b    \\Delta x       x_i^*       \\text{height} = f(x_i^*)   y = f(x)                "
},
{
  "id": "fig-volume-one-box-tikz",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-volume-one-box-tikz",
  "type": "Figure",
  "number": "6.2",
  "title": "",
  "body": " A first, very rough estimate of the volume under over the square : a single cuboid whose height is sampled at the center of the square, giving the estimate .   Three coordinate axes in space with the surface z equals x squared plus y plus 5 drawn as a translucent blue mesh above the square with corners zero zero and two two in the x y plane. A single translucent blue cuboid of height seven rises from the square, and its flat top crosses the curved surface.    "
},
{
  "id": "fig-volume-four-boxes-tikz",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-volume-four-boxes-tikz",
  "type": "Figure",
  "number": "6.3",
  "title": "",
  "body": " Splitting into four squares improves the estimate. Each cuboid uses the value of at the center of its square: , , , and , giving .   The same surface z equals x squared plus y plus 5 above the unit square, now with four cuboids of different heights and colors, one over each quarter of the square. The tops of the cuboids hug the surface more closely than the single cuboid did.    "
},
{
  "id": "sec-double-integrals-rectangles-12",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#sec-double-integrals-rectangles-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "the double integral over a rectangular region "
},
{
  "id": "fig-riemann-boxes-video",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-riemann-boxes-video",
  "type": "Figure",
  "number": "6.4",
  "title": "",
  "body": " Animation of the Riemann-sum definition of the double integral. The region is split into , then , then , then squares, and a cuboid is built over each square with height sampled at its center. The displayed estimate approaches the exact volume .   "
},
{
  "id": "example-iterated-rectangle",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#example-iterated-rectangle",
  "type": "Example",
  "number": "6.5",
  "title": "Example I.",
  "body": " Example I   Calculate the double integral .   "
},
{
  "id": "thm-fubini",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#thm-fubini",
  "type": "Theorem",
  "number": "6.6",
  "title": "Fubini’s Theorem (First Form).",
  "body": " Fubini's Theorem (First Form)   If is continuous throughout the rectangular region , then    "
},
{
  "id": "example-iterated-substitution",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#example-iterated-substitution",
  "type": "Example",
  "number": "6.7",
  "title": "Example II.",
  "body": " Example II   Calculate the double integral .   "
},
{
  "id": "sec-iterated-integral-substitution-3-1",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#sec-iterated-integral-substitution-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fubini's theorem substitution "
},
{
  "id": "sec-iterated-integral-substitution-3-4",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#sec-iterated-integral-substitution-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integration by parts "
},
{
  "id": "fig-substitution-surface-tikz",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-substitution-surface-tikz",
  "type": "Figure",
  "number": "6.8",
  "title": "",
  "body": " The surface over the rectangle , . The double integral of is the volume between this surface and the shaded base rectangle, and equals .   Three coordinate axes in space with a curved surface over the rectangle zero to one in x and zero to two in y. The surface rises from height zero along the y z plane to height one at the corner x equals one, y equals zero, and slopes downward as y increases. The base rectangle in the x y plane is shaded.    "
},
{
  "id": "section-double-integrals-general-regions",
  "level": "1",
  "url": "section-double-integrals-general-regions.html",
  "type": "Section",
  "number": "7",
  "title": "Double Integrals Over General Regions and Area by Double Integration",
  "body": " Double Integrals Over General Regions and Area by Double Integration  Here we will generalize our last session's discussion about double integrals and how they can be used to evaluate volumes. Last session we restricted ourselves to shapes with rectangular base. Today we will look at more general shapes for the base.    Case I: Regions of the Form   Example I   Calculate the following double integral,   where .     The region is shown in . Since for each fixed the variable runs from the lower curve to the upper curve , we integrate along the green vertical strips first. We can re-write the integral as     The region of , bounded above by and below by for . For each fixed , the inner integral runs along a vertical strip from the lower curve to the upper curve.     f1(t) = (t, t^3 + 1)  f2(t) = (t, -2*t^2 + 2*t)  f1sc(t) = t^3 + 1  f2sc(t) = -2*t^2 + 2*t            f_1(x) = x^3 + 1  f_2(x) = -2x^2 + 2x   0    1                   Case II: Regions of the Form   Example II   Calculate the following double integral,   where .     The region is shown in . This time, for each fixed , the variable runs along a horizontal strip from to , so we integrate with respect to first:     The region of , bounded on the left by and on the right by for . For each fixed , the inner integral runs along a horizontal strip from the left curve to the right curve.     g1(t) = (t^2, t)  g2(t) = (t^(1\/3), t)            g_1(y) = y^2  g_2(y) = y^{1\/3}   y = 0.5    y = 0.1                The idea behind both cases sweeping a strip across the region while the inner integral measures the length of the strip is animated in .   Animation of iterated integration over a general region. For the region of , a vertical strip at position has height ; as the strip sweeps from to , the outer integral accumulates the strip contributions, arriving at .       Volume of a Tetrahedron   Example III   Find the volume of the tetrahedron bounded by the planes , , and .      shows the tetrahedron bounded by the planes , , and . To find the volume of the tetrahedron , we first need to figure out the region of integration. shows the region of integration, i.e., the base of the tetrahedron. Therefore, our region of integration is   For the volume of the tetrahedron, we integrate the height of the top plane over :     The tetrahedron bounded by the planes (slanted face), (vertical face through the -axis), (the -plane) and (the base). Its vertices are , , and .   Three coordinate axes in space with a tetrahedron drawn in translucent blue. One vertex is at the origin, one at height two on the z axis, one at zero one zero on the y axis, and one at the point one comma one half comma zero. The slanted face x plus two y plus z equals two and the vertical face x equals two y are labeled with arrows.      The region of integration for : the base of the tetrahedron in the -plane, bounded below by and above by (or ) for . A typical vertical strip is drawn in blue.     top(t) = (t, 1 - t\/2)  bot(t) = (t, t\/2)  topsc(t) = 1 - t\/2  botsc(t) = t\/2            \\left(1,\\tfrac12\\right)    1    x + 2y = 2    y = x\/2    0     upper bound for y   lower bound for y                 Why not integrate in the reverse order?  We could also try to integrate with respect to first, using horizontal strips. However, as the figure below shows, the right end of a horizontal strip depends on where the strip is: for the strip ends on the line , while for it ends on the line (that is, ). We would therefore have to split the region into two pieces and evaluate two double integrals, so integrating with respect to first is the more efficient choice here.      top(t) = (t, 1 - t\/2)  bot(t) = (t, t\/2)  topsc(t) = 1 - t\/2  botsc(t) = t\/2              \\left(1,\\tfrac12\\right)    y = \\tfrac12   x = 2 - 2y  x = 2y   0                   Area by Double Integration  In the previous session, we talked about finding the double integral of the form and how it corresponds to the volume of an object with base and height . This session, we will look at a special case of this double integral, which corresponds to the area of region :    Example IV   Calculate the area of the region shown in , bounded on the right by , on the left by , and by the parabola .     Method 1  We split the region into two regions and as follows:   Note that on , the left boundary is the parabola , solved for as . Then     Method 2 (using symmetry)  The curve is odd : rotating it by about the origin maps it onto itself. As shown in , this rotation carries the piece that the curve cuts out of the unit square exactly onto the piece that the curve adds to the right of the -axis for . These two pieces therefore have the same area, and swapping one for the other turns the region into the unit square (of area ) together with the strip between the parabola and the -axis. Hence     Method 2: since is odd, the piece removed from the unit square (below the -axis) is congruent to the piece added to the right of the -axis (above it). The area is therefore the area of the square, , plus the area of the green strip between the parabola and the -axis.     right(t) = (t - t^3, t)  leftR2(t) = (sqrt(t) - 1, t)             \\text{area } 1    A    A    \\tfrac13   x = y - y^3  y = (x+1)^2                The region of , split into (below the -axis) and (above it). Both subregions share the right boundary ; the left boundary is the vertical line for and the parabola for .     right(t) = (t - t^3, t)  leftR1(t) = (-1, t)  leftR2(t) = (sqrt(t) - 1, t)          x = y - y^3  y = (x+1)^2   R_1    R_2    -1    -1                  "
},
{
  "id": "example-case1-vertical",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#example-case1-vertical",
  "type": "Example",
  "number": "7.1",
  "title": "Example I.",
  "body": " Example I   Calculate the following double integral,   where .   "
},
{
  "id": "fig-case1-region-prefigure",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-case1-region-prefigure",
  "type": "Figure",
  "number": "7.2",
  "title": "",
  "body": " The region of , bounded above by and below by for . For each fixed , the inner integral runs along a vertical strip from the lower curve to the upper curve.     f1(t) = (t, t^3 + 1)  f2(t) = (t, -2*t^2 + 2*t)  f1sc(t) = t^3 + 1  f2sc(t) = -2*t^2 + 2*t            f_1(x) = x^3 + 1  f_2(x) = -2x^2 + 2x   0    1               "
},
{
  "id": "example-case2-horizontal",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#example-case2-horizontal",
  "type": "Example",
  "number": "7.3",
  "title": "Example II.",
  "body": " Example II   Calculate the following double integral,   where .   "
},
{
  "id": "fig-case2-region-prefigure",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-case2-region-prefigure",
  "type": "Figure",
  "number": "7.4",
  "title": "",
  "body": " The region of , bounded on the left by and on the right by for . For each fixed , the inner integral runs along a horizontal strip from the left curve to the right curve.     g1(t) = (t^2, t)  g2(t) = (t^(1\/3), t)            g_1(y) = y^2  g_2(y) = y^{1\/3}   y = 0.5    y = 0.1               "
},
{
  "id": "fig-strip-sweep-video",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-strip-sweep-video",
  "type": "Figure",
  "number": "7.5",
  "title": "",
  "body": " Animation of iterated integration over a general region. For the region of , a vertical strip at position has height ; as the strip sweeps from to , the outer integral accumulates the strip contributions, arriving at .   "
},
{
  "id": "example-tetrahedron",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#example-tetrahedron",
  "type": "Example",
  "number": "7.6",
  "title": "Example III.",
  "body": " Example III   Find the volume of the tetrahedron bounded by the planes , , and .   "
},
{
  "id": "fig-tetrahedron-tikz",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-tetrahedron-tikz",
  "type": "Figure",
  "number": "7.7",
  "title": "",
  "body": " The tetrahedron bounded by the planes (slanted face), (vertical face through the -axis), (the -plane) and (the base). Its vertices are , , and .   Three coordinate axes in space with a tetrahedron drawn in translucent blue. One vertex is at the origin, one at height two on the z axis, one at zero one zero on the y axis, and one at the point one comma one half comma zero. The slanted face x plus two y plus z equals two and the vertical face x equals two y are labeled with arrows.    "
},
{
  "id": "fig-tetrahedron-base-prefigure",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-tetrahedron-base-prefigure",
  "type": "Figure",
  "number": "7.8",
  "title": "",
  "body": " The region of integration for : the base of the tetrahedron in the -plane, bounded below by and above by (or ) for . A typical vertical strip is drawn in blue.     top(t) = (t, 1 - t\/2)  bot(t) = (t, t\/2)  topsc(t) = 1 - t\/2  botsc(t) = t\/2            \\left(1,\\tfrac12\\right)    1    x + 2y = 2    y = x\/2    0     upper bound for y   lower bound for y               "
},
{
  "id": "remark-reverse-order",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#remark-reverse-order",
  "type": "Remark",
  "number": "7.9",
  "title": "Why not integrate in the reverse order?",
  "body": " Why not integrate in the reverse order?  We could also try to integrate with respect to first, using horizontal strips. However, as the figure below shows, the right end of a horizontal strip depends on where the strip is: for the strip ends on the line , while for it ends on the line (that is, ). We would therefore have to split the region into two pieces and evaluate two double integrals, so integrating with respect to first is the more efficient choice here.      top(t) = (t, 1 - t\/2)  bot(t) = (t, t\/2)  topsc(t) = 1 - t\/2  botsc(t) = t\/2              \\left(1,\\tfrac12\\right)    y = \\tfrac12   x = 2 - 2y  x = 2y   0               "
},
{
  "id": "example-area-double-integration",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#example-area-double-integration",
  "type": "Example",
  "number": "7.10",
  "title": "Example IV.",
  "body": " Example IV   Calculate the area of the region shown in , bounded on the right by , on the left by , and by the parabola .   "
},
{
  "id": "fig-area-symmetry-prefigure",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-area-symmetry-prefigure",
  "type": "Figure",
  "number": "7.11",
  "title": "",
  "body": " Method 2: since is odd, the piece removed from the unit square (below the -axis) is congruent to the piece added to the right of the -axis (above it). The area is therefore the area of the square, , plus the area of the green strip between the parabola and the -axis.     right(t) = (t - t^3, t)  leftR2(t) = (sqrt(t) - 1, t)             \\text{area } 1    A    A    \\tfrac13   x = y - y^3  y = (x+1)^2              "
},
{
  "id": "fig-area-region-prefigure",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-area-region-prefigure",
  "type": "Figure",
  "number": "7.12",
  "title": "",
  "body": " The region of , split into (below the -axis) and (above it). Both subregions share the right boundary ; the left boundary is the vertical line for and the parabola for .     right(t) = (t - t^3, t)  leftR1(t) = (-1, t)  leftR2(t) = (sqrt(t) - 1, t)          x = y - y^3  y = (x+1)^2   R_1    R_2    -1    -1                "
},
{
  "id": "section-polar-coordinates",
  "level": "1",
  "url": "section-polar-coordinates.html",
  "type": "Section",
  "number": "8",
  "title": "Polar Coordinates and Graphing Polar Equations",
  "body": " Polar Coordinates and Graphing Polar Equations  Usually we use Cartesian coordinates, which are directed distances from two perpendicular axes. Here we will study a new coordinate system, called the polar coordinate system , which is more convenient for many purposes such as finding the volume of some objects.    The Polar Coordinate System  Similar to the Cartesian coordinate system, we need two real numbers to specify the location of a point in the -plane. The first one is the directed distance from the origin and it is shown by in . The second one is the directed angle , and an angle is positive if measured in the counterclockwise direction from the positive -axis and negative in the clockwise direction. The ordered pair represents the location of a point in the polar coordinate system.   The same point in both coordinate systems: in Cartesian coordinates it is , and in polar coordinates it is , where is the directed distance from the origin and is the directed angle measured counterclockwise from the positive -axis. The two are related by and .     arc(t) = (0.55*cos(t), 0.55*sin(t))        O    P(x,y) = P(r,\\theta)    x = r\\cos\\theta   y = r\\sin\\theta   r   \\theta                 demonstrates the meaning of negative . Note that the polar pair is the same as .   The meaning of negative : the point lies on the ray opposite to the ray of angle , so is the same point as .     arc1(t) = (0.5*cos(t), 0.5*sin(t))  arc2(t) = (0.72*cos(t), 0.72*sin(t))          O    (r,\\theta)    (-r,\\theta)   \\theta  \\theta+\\pi                Relation Between Polar and Cartesian Coordinates   The common origin and initial ray of the polar and Cartesian systems. For a point , the right triangle with legs and and hypotenuse relates the two coordinate systems.     arc(t) = (0.5*cos(t), 0.5*sin(t))  unitcircle(t) = (1.7*cos(t), 1.7*sin(t))          P(x,y) = P(r,\\theta)   r  x  y  \\theta               From , you can see that for a given , we uniquely have . If we are given a pair , there are two options for the directed distance : a positive and a negative value. However, for a given , there is a unique that satisfies the first and second equations below.   Equations Relating Polar and Cartesian Coordinates         Non-Uniqueness of Polar Coordinates  Unlike Cartesian coordinates, polar coordinates are not unique: a point has many representations. For example, in you can see two different representations, and , of the same point; the pairs and locate it as well. In general, a point denoted by can also be represented by or , where is any integer, and all the representations of a point can be generated this way from any one of them.   Two of the many polar representations of the same point. On the left, : the angle wraps around once before landing on the third-quadrant ray. On the right, : the negative places the point on the ray opposite to the angle . The pairs and give the same point too.      arc(t) = ((0.38 + 0.045*t)*cos(t), (0.38 + 0.045*t)*sin(t))        O    \\left(1,\\tfrac{13\\pi}{4}\\right)   \\tfrac{13\\pi}{4}               arc(t) = (0.5*cos(t), 0.5*sin(t))         O    \\left(-1,\\tfrac{\\pi}{4}\\right)   \\tfrac{\\pi}{4}                 Replacing Polar Equations by Cartesian Equations   Example I   Replace the following polar equations by equivalent Cartesian equations.             The four curves are shown in .     This is the circle .    This is the line .    We re-write as , which then gives us .    Using and :        The four curves of . From left to right: the circle , i.e., ; the line , i.e., ; the hyperbola , i.e., ; and the conic , i.e., .      c(t) = (cos(t), sin(t))      x^2+y^2=1                   y = x               b1(t) = (t, 4\/t)  b2(t) = (-t, -4\/t)       xy = 4                br1(t) = (cos(t)\/(1-2*cos(t)), sin(t)\/(1-2*cos(t)))       y^2-3x^2-4x-1=0               Next, we would like to learn about graphing polar equations. We will begin by analyzing symmetries of polar equations.     Symmetries   Symmetry about the -axis  Note that a graph is symmetric about the -axis if for every point on the graph, there exists a point with the coordinates on the graph as well. As an example, consider the equation . Assuming that is a point on the graph of this equation, so is , simply because . Let us plot its graph by computing some of the points as shown in ; the graph, with these points marked, is shown in , and the process of sweeping to trace the graph is animated in .   Some points on the graph of                      The cardioid . The marked points correspond to the values in . Since , the graph is symmetric about the -axis.     card(t) = ((1+cos(t))*cos(t), (1+cos(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))  ring3(t) = (1.5*cos(t), 1.5*sin(t))  ring4(t) = (2*cos(t), 2*sin(t))                r = 1+\\cos(\\theta)   \\tfrac12    1    2                 Animation of graphing the polar equation . A ray at angle rotates counterclockwise while the distance along the ray is recomputed; the traced point sweeps out the cardioid, hitting the values of along the way.      Symmetry about the -axis  For every point on the graph, there exists a point with the coordinates or on the graph. As an example, consider , which is shown in : since , the graph is symmetric about the -axis. The symmetry is animated in .   The cardioid , symmetric about the -axis.     card(t) = ((1-sin(t))*cos(t), (1-sin(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))  ring3(t) = (1.5*cos(t), 1.5*sin(t))  ring4(t) = (2*cos(t), 2*sin(t))           r = 1-\\sin(\\theta)   \\tfrac12    1    2              Animation of graphing . As the traced point (in blue) sweeps out the cardioid, its mirror image across the -axis (in green) lands on the same curve, showing the symmetry about the -axis.      Symmetry about the origin  If the point is on the graph, then the point or lies on the graph as well. As an example, , shown in , is symmetric about the origin: its graph consists of the two branches and , and replacing by leaves the equation unchanged. The two branches are traced simultaneously in .   The graph of , made of the branch (in blue) and the branch (in vermillion). Since replacing by does not change the equation, the graph is symmetric about the origin.     pos(t) = (sqrt(sin(t))*cos(t), sqrt(sin(t))*sin(t))  neg(t) = (-sqrt(sin(t))*cos(t), -sqrt(sin(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))          r = \\sqrt{\\sin\\theta}  r = -\\sqrt{\\sin\\theta}              Animation of graphing . For each , both with (in blue) and (in vermillion) satisfy the equation, so the two branches are traced simultaneously and the graph is symmetric about the origin.      "
},
{
  "id": "section-polar-coordinates-2",
  "level": "2",
  "url": "section-polar-coordinates.html#section-polar-coordinates-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polar coordinate system "
},
{
  "id": "fig-polar-point-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-polar-point-prefigure",
  "type": "Figure",
  "number": "8.1",
  "title": "",
  "body": " The same point in both coordinate systems: in Cartesian coordinates it is , and in polar coordinates it is , where is the directed distance from the origin and is the directed angle measured counterclockwise from the positive -axis. The two are related by and .     arc(t) = (0.55*cos(t), 0.55*sin(t))        O    P(x,y) = P(r,\\theta)    x = r\\cos\\theta   y = r\\sin\\theta   r   \\theta               "
},
{
  "id": "fig-polar-negative-r-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-polar-negative-r-prefigure",
  "type": "Figure",
  "number": "8.2",
  "title": "",
  "body": " The meaning of negative : the point lies on the ray opposite to the ray of angle , so is the same point as .     arc1(t) = (0.5*cos(t), 0.5*sin(t))  arc2(t) = (0.72*cos(t), 0.72*sin(t))          O    (r,\\theta)    (-r,\\theta)   \\theta  \\theta+\\pi            "
},
{
  "id": "fig-polar-cartesian-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-polar-cartesian-prefigure",
  "type": "Figure",
  "number": "8.3",
  "title": "",
  "body": " The common origin and initial ray of the polar and Cartesian systems. For a point , the right triangle with legs and and hypotenuse relates the two coordinate systems.     arc(t) = (0.5*cos(t), 0.5*sin(t))  unitcircle(t) = (1.7*cos(t), 1.7*sin(t))          P(x,y) = P(r,\\theta)   r  x  y  \\theta              "
},
{
  "id": "fig-polar-representations-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-polar-representations-prefigure",
  "type": "Figure",
  "number": "8.4",
  "title": "",
  "body": " Two of the many polar representations of the same point. On the left, : the angle wraps around once before landing on the third-quadrant ray. On the right, : the negative places the point on the ray opposite to the angle . The pairs and give the same point too.      arc(t) = ((0.38 + 0.045*t)*cos(t), (0.38 + 0.045*t)*sin(t))        O    \\left(1,\\tfrac{13\\pi}{4}\\right)   \\tfrac{13\\pi}{4}               arc(t) = (0.5*cos(t), 0.5*sin(t))         O    \\left(-1,\\tfrac{\\pi}{4}\\right)   \\tfrac{\\pi}{4}             "
},
{
  "id": "example-polar-to-cartesian",
  "level": "2",
  "url": "section-polar-coordinates.html#example-polar-to-cartesian",
  "type": "Example",
  "number": "8.5",
  "title": "Example I.",
  "body": " Example I   Replace the following polar equations by equivalent Cartesian equations.           "
},
{
  "id": "fig-polar-to-cartesian-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-polar-to-cartesian-prefigure",
  "type": "Figure",
  "number": "8.6",
  "title": "",
  "body": " The four curves of . From left to right: the circle , i.e., ; the line , i.e., ; the hyperbola , i.e., ; and the conic , i.e., .      c(t) = (cos(t), sin(t))      x^2+y^2=1                   y = x               b1(t) = (t, 4\/t)  b2(t) = (-t, -4\/t)       xy = 4                br1(t) = (cos(t)\/(1-2*cos(t)), sin(t)\/(1-2*cos(t)))       y^2-3x^2-4x-1=0              "
},
{
  "id": "table-cardioid-points",
  "level": "2",
  "url": "section-polar-coordinates.html#table-cardioid-points",
  "type": "Table",
  "number": "8.7",
  "title": "Some points on the graph of <span class=\"process-math\">\\(r = 1 + \\cos\\theta\\)<\/span>",
  "body": " Some points on the graph of                    "
},
{
  "id": "fig-cardioid-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-cardioid-prefigure",
  "type": "Figure",
  "number": "8.8",
  "title": "",
  "body": " The cardioid . The marked points correspond to the values in . Since , the graph is symmetric about the -axis.     card(t) = ((1+cos(t))*cos(t), (1+cos(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))  ring3(t) = (1.5*cos(t), 1.5*sin(t))  ring4(t) = (2*cos(t), 2*sin(t))                r = 1+\\cos(\\theta)   \\tfrac12    1    2               "
},
{
  "id": "fig-cardioid-video",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-cardioid-video",
  "type": "Figure",
  "number": "8.9",
  "title": "",
  "body": " Animation of graphing the polar equation . A ray at angle rotates counterclockwise while the distance along the ray is recomputed; the traced point sweeps out the cardioid, hitting the values of along the way.   "
},
{
  "id": "fig-cardioid-y-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-cardioid-y-prefigure",
  "type": "Figure",
  "number": "8.10",
  "title": "",
  "body": " The cardioid , symmetric about the -axis.     card(t) = ((1-sin(t))*cos(t), (1-sin(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))  ring3(t) = (1.5*cos(t), 1.5*sin(t))  ring4(t) = (2*cos(t), 2*sin(t))           r = 1-\\sin(\\theta)   \\tfrac12    1    2            "
},
{
  "id": "fig-cardioid-y-video",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-cardioid-y-video",
  "type": "Figure",
  "number": "8.11",
  "title": "",
  "body": " Animation of graphing . As the traced point (in blue) sweeps out the cardioid, its mirror image across the -axis (in green) lands on the same curve, showing the symmetry about the -axis.   "
},
{
  "id": "fig-origin-symmetry-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-origin-symmetry-prefigure",
  "type": "Figure",
  "number": "8.12",
  "title": "",
  "body": " The graph of , made of the branch (in blue) and the branch (in vermillion). Since replacing by does not change the equation, the graph is symmetric about the origin.     pos(t) = (sqrt(sin(t))*cos(t), sqrt(sin(t))*sin(t))  neg(t) = (-sqrt(sin(t))*cos(t), -sqrt(sin(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))          r = \\sqrt{\\sin\\theta}  r = -\\sqrt{\\sin\\theta}            "
},
{
  "id": "fig-origin-symmetry-video",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-origin-symmetry-video",
  "type": "Figure",
  "number": "8.13",
  "title": "",
  "body": " Animation of graphing . For each , both with (in blue) and (in vermillion) satisfy the equation, so the two branches are traced simultaneously and the graph is symmetric about the origin.   "
},
{
  "id": "section-double-integrals-polar-form",
  "level": "1",
  "url": "section-double-integrals-polar-form.html",
  "type": "Section",
  "number": "9",
  "title": "Double Integrals in Polar Form",
  "body": " Double Integrals in Polar Form  In the previous session, we talked about a new coordinate system known as polar coordinates. Today, we will use polar coordinates to calculate double integrals. As you will see, this set of coordinates can sometimes simplify our calculations. In Cartesian coordinates, double integrals are of the form     How Does a Double Integral Look in Polar Coordinates?  To answer this question, assume that our region of integration is   which is shown on the left in . We divide this region into polar rectangles as shown on the right. Then, we calculate the area of a typical polar rectangle   which, using the fact that the area of a sector of a circle with radius and central angle is , gives us   where , , and . Here is the average radius of the polar rectangle. Therefore,    On the left, the region . On the right, divided into polar rectangles; the highlighted polar rectangle has area , where is its center.      outer(t) = (2.4*cos(t), 2.4*sin(t))  inner(t) = (1.1*cos(t), 1.1*sin(t))            R   r = b  r = a   \\theta = \\beta    \\theta = \\alpha    O                 a1(t) = (1.1*cos(t), 1.1*sin(t))  a2(t) = (1.425*cos(t), 1.425*sin(t))  a3(t) = (1.75*cos(t), 1.75*sin(t))  a4(t) = (2.075*cos(t), 2.075*sin(t))  a5(t) = (2.4*cos(t), 2.4*sin(t))                  R_{ij}   (r_i^*, \\theta_j^*)    O               The subdivision of into polar rectangles, and how the area of a polar rectangle behaves as the grid is refined, is animated in .   Animation of the polar area element. The region is divided into finer and finer polar rectangles; a highlighted cell has area exactly , and the sum equals the area of at every stage.       Integrating Over a Half Annulus   Example I   Evaluate , where is the region in the upper half plane bounded by the circles and .     The region   is shown in , and in polar coordinates we have   Therefore, using and , we can write:     The region of : the upper half of the annulus between the circles and . In polar coordinates it is simply , .     outer(t) = (2*cos(t), 2*sin(t))  inner(t) = (cos(t), sin(t))        R   x^2+y^2 = 4  x^2+y^2 = 1   1    2                  Area Enclosed by One Loop of a Rose   Example II   Use a double integral to find the area enclosed by one loop of the four-leaved rose , graphed in .     We notice that the region (the colored loop in ) can be described as   and hence we can evaluate its area as follows:     The four-leaved rose . The shaded loop is swept out as runs from to ; the dashed rays are , where .     rose(t) = (cos(2*t)*cos(t), cos(2*t)*sin(t))  loop(t) = (cos(2*t)*cos(t), cos(2*t)*sin(t))          D    \\theta = \\tfrac{\\pi}{4}    \\theta = -\\tfrac{\\pi}{4}                   A Volume Computed in Polar Coordinates   Example III   Find the volume of the solid that lies under the paraboloid , above the -plane, and inside the cylinder .     We notice that the cylinder can be re-written as , which is shown in ; the solid itself is shown in . In polar coordinates, becomes , that is, , so the base disk is   Therefore,     The base of the solid in : the disk , whose boundary is the polar curve .     circ(t) = (1 + cos(t), sin(t))       1    2    D    (x-1)^2 + y^2 = 1 \\text{ (or } r = 2\\cos\\theta)    0               The solid of : the region under the paraboloid , above the -plane, and inside the cylinder . Its volume is .   Three coordinate axes in space with a vertical circular cylinder of radius one centered on the line x equals one, y equals zero. Inside the cylinder, the paraboloid z equals x squared plus y squared rises from the origin; the solid between the x y plane and the paraboloid, inside the cylinder, is the region whose volume is computed. Dashed lines mark the base circle.        An Integral That Needs Polar Coordinates   Example IV   Calculate the double integral , where is the unit disk centered at the origin.   Hint: Notice that you cannot solve this integral using Cartesian coordinates.     In polar coordinates the unit disk is , , and . The extra factor of in is exactly what makes the integral computable, via the substitution :     "
},
{
  "id": "fig-polar-rectangles-prefigure",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-polar-rectangles-prefigure",
  "type": "Figure",
  "number": "9.1",
  "title": "",
  "body": " On the left, the region . On the right, divided into polar rectangles; the highlighted polar rectangle has area , where is its center.      outer(t) = (2.4*cos(t), 2.4*sin(t))  inner(t) = (1.1*cos(t), 1.1*sin(t))            R   r = b  r = a   \\theta = \\beta    \\theta = \\alpha    O                 a1(t) = (1.1*cos(t), 1.1*sin(t))  a2(t) = (1.425*cos(t), 1.425*sin(t))  a3(t) = (1.75*cos(t), 1.75*sin(t))  a4(t) = (2.075*cos(t), 2.075*sin(t))  a5(t) = (2.4*cos(t), 2.4*sin(t))                  R_{ij}   (r_i^*, \\theta_j^*)    O              "
},
{
  "id": "fig-polar-element-video",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-polar-element-video",
  "type": "Figure",
  "number": "9.2",
  "title": "",
  "body": " Animation of the polar area element. The region is divided into finer and finer polar rectangles; a highlighted cell has area exactly , and the sum equals the area of at every stage.   "
},
{
  "id": "example-polar-annulus",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#example-polar-annulus",
  "type": "Example",
  "number": "9.3",
  "title": "Example I.",
  "body": " Example I   Evaluate , where is the region in the upper half plane bounded by the circles and .   "
},
{
  "id": "fig-half-annulus-prefigure",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-half-annulus-prefigure",
  "type": "Figure",
  "number": "9.4",
  "title": "",
  "body": " The region of : the upper half of the annulus between the circles and . In polar coordinates it is simply , .     outer(t) = (2*cos(t), 2*sin(t))  inner(t) = (cos(t), sin(t))        R   x^2+y^2 = 4  x^2+y^2 = 1   1    2              "
},
{
  "id": "example-polar-rose",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#example-polar-rose",
  "type": "Example",
  "number": "9.5",
  "title": "Example II.",
  "body": " Example II   Use a double integral to find the area enclosed by one loop of the four-leaved rose , graphed in .   "
},
{
  "id": "fig-rose-prefigure",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-rose-prefigure",
  "type": "Figure",
  "number": "9.6",
  "title": "",
  "body": " The four-leaved rose . The shaded loop is swept out as runs from to ; the dashed rays are , where .     rose(t) = (cos(2*t)*cos(t), cos(2*t)*sin(t))  loop(t) = (cos(2*t)*cos(t), cos(2*t)*sin(t))          D    \\theta = \\tfrac{\\pi}{4}    \\theta = -\\tfrac{\\pi}{4}               "
},
{
  "id": "example-polar-volume",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#example-polar-volume",
  "type": "Example",
  "number": "9.7",
  "title": "Example III.",
  "body": " Example III   Find the volume of the solid that lies under the paraboloid , above the -plane, and inside the cylinder .   "
},
{
  "id": "fig-shifted-disk-prefigure",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-shifted-disk-prefigure",
  "type": "Figure",
  "number": "9.8",
  "title": "",
  "body": " The base of the solid in : the disk , whose boundary is the polar curve .     circ(t) = (1 + cos(t), sin(t))       1    2    D    (x-1)^2 + y^2 = 1 \\text{ (or } r = 2\\cos\\theta)    0             "
},
{
  "id": "fig-polar-volume-tikz",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-polar-volume-tikz",
  "type": "Figure",
  "number": "9.9",
  "title": "",
  "body": " The solid of : the region under the paraboloid , above the -plane, and inside the cylinder . Its volume is .   Three coordinate axes in space with a vertical circular cylinder of radius one centered on the line x equals one, y equals zero. Inside the cylinder, the paraboloid z equals x squared plus y squared rises from the origin; the solid between the x y plane and the paraboloid, inside the cylinder, is the region whose volume is computed. Dashed lines mark the base circle.    "
},
{
  "id": "example-polar-gaussian",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#example-polar-gaussian",
  "type": "Example",
  "number": "9.10",
  "title": "Example IV.",
  "body": " Example IV   Calculate the double integral , where is the unit disk centered at the origin.   Hint: Notice that you cannot solve this integral using Cartesian coordinates.   "
},
{
  "id": "section-triple-integrals-rectangular",
  "level": "1",
  "url": "section-triple-integrals-rectangular.html",
  "type": "Section",
  "number": "10",
  "title": "Triple Integrals in Rectangular Coordinates",
  "body": " Triple Integrals in Rectangular Coordinates  Previously, we learned how to calculate double integrals and how to use them to calculate volumes. Today, we will learn triple integrals in Cartesian coordinates, which can also be used to evaluate volumes of solids, along with other applications that we will learn.    What Does a Triple Integral Mean?  An important application comes first: the mass of a block with variable density (mass per unit volume) is   More generally, a triple integral has the form , defined by chopping the solid into tiny blocks of volume , sampling in each block, and passing to the limit. A natural question is: what does mean? We can think of it as summing the volumes of the tiny blocks , hence      Case I:  The first case that we will study is the case where the region of integration is of the form   so lies between the surfaces and over a projection in the -plane, and    Example I   Calculate the triple integral , where is the tetrahedron shown in , bounded by the coordinate planes and the plane .     Let us begin by describing the projection (shown in ) and the region :   We then calculate the triple integral as follows:     The tetrahedron of , bounded by the three coordinate planes and the plane . Its projection into the -plane is the triangle .   Three coordinate axes in space with a tetrahedron whose vertices are the origin and the three points one zero zero, zero one zero, and zero zero one. The slanted face is the plane z equals one minus x minus y. The base triangle D in the x y plane is shaded.      The projection of the tetrahedron into the -plane: the triangle , . A vertical arrow at a fixed in corresponds to the inner -integration from up to .            1    1    D   y = 1 - x   0              The role of the projection and of the inner -integration a column rising from through the solid is animated in .   Animation of iterated triple integration for . The solid is projected onto the triangle in the -plane; at each point of a column runs from up to the surface (the inner integral), and the column then sweeps across (the two outer integrals).       Case II:  The second case is entirely similar, but the projection is described with horizontal strips:   and the corresponding iterated integral is . In fact, by projecting into the - or -plane instead, a triple integral can be set up in six different orders of integration; the next example illustrates three of them.   Example II   Set up the triple integrals below whose value gives the volume of the region of , bounded by the cylinder , the plane , and the coordinate planes. Then, evaluate two out of the three integrals.          Question: How many more triple integrals can you think of for computing such a volume? (Three more; six in total.)     Part A  For the order , we project into the -plane (the triangle on the left in ): , , and the 3D figure gives . Hence     Part B  For the order , we project into the -plane (the middle region in ): , , and the 3D figure gives the limits of the last variable: . Hence     Part C  For the order , we project into the -plane (the region on the right in ). This time the projection must be split by the curve into   with on (the plane is reached first) and on (the cylinder is reached first). Hence     The solid of , bounded by the parabolic cylinder , the vertical plane , and the coordinate planes.   Three coordinate axes in space with a solid bounded above by the parabolic cylinder z equals one minus x squared, on the side by the vertical plane y equals one minus x, and by the coordinate planes. The curved top descends from height one at the z axis to zero at x equals one.      The three projections of the solid . Left: into the -plane (order ). Middle: into the -plane (order ). Right: into the -plane (order ), which the curve splits into and .          y = 1-x   1    1               par(t) = (t, 1 - t^2)      z = 1-x^2   1    1               cur(t) = (t, 1 - (1-t)^2)       R_1    R_2   z = 1-(1-y)^2   1    1                  Mass With Variable Density   Example III   Assume that the density (mass per unit volume) is given by . Evaluate the mass of the solid of .     Using with the same limits as in Part A of :     "
},
{
  "id": "sec-triple-integral-meaning-4",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#sec-triple-integral-meaning-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "triple integral "
},
{
  "id": "example-triple-tetrahedron",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#example-triple-tetrahedron",
  "type": "Example",
  "number": "10.1",
  "title": "Example I.",
  "body": " Example I   Calculate the triple integral , where is the tetrahedron shown in , bounded by the coordinate planes and the plane .   "
},
{
  "id": "fig-triple-tetra-tikz",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-tetra-tikz",
  "type": "Figure",
  "number": "10.2",
  "title": "",
  "body": " The tetrahedron of , bounded by the three coordinate planes and the plane . Its projection into the -plane is the triangle .   Three coordinate axes in space with a tetrahedron whose vertices are the origin and the three points one zero zero, zero one zero, and zero zero one. The slanted face is the plane z equals one minus x minus y. The base triangle D in the x y plane is shaded.    "
},
{
  "id": "fig-triple-tetra-base-prefigure",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-tetra-base-prefigure",
  "type": "Figure",
  "number": "10.3",
  "title": "",
  "body": " The projection of the tetrahedron into the -plane: the triangle , . A vertical arrow at a fixed in corresponds to the inner -integration from up to .            1    1    D   y = 1 - x   0             "
},
{
  "id": "fig-triple-column-video",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-column-video",
  "type": "Figure",
  "number": "10.4",
  "title": "",
  "body": " Animation of iterated triple integration for . The solid is projected onto the triangle in the -plane; at each point of a column runs from up to the surface (the inner integral), and the column then sweeps across (the two outer integrals).   "
},
{
  "id": "example-triple-order",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#example-triple-order",
  "type": "Example",
  "number": "10.5",
  "title": "Example II.",
  "body": " Example II   Set up the triple integrals below whose value gives the volume of the region of , bounded by the cylinder , the plane , and the coordinate planes. Then, evaluate two out of the three integrals.          Question: How many more triple integrals can you think of for computing such a volume? (Three more; six in total.)   "
},
{
  "id": "fig-triple-wedge-tikz",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-wedge-tikz",
  "type": "Figure",
  "number": "10.6",
  "title": "",
  "body": " The solid of , bounded by the parabolic cylinder , the vertical plane , and the coordinate planes.   Three coordinate axes in space with a solid bounded above by the parabolic cylinder z equals one minus x squared, on the side by the vertical plane y equals one minus x, and by the coordinate planes. The curved top descends from height one at the z axis to zero at x equals one.    "
},
{
  "id": "fig-triple-projections-prefigure",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-projections-prefigure",
  "type": "Figure",
  "number": "10.7",
  "title": "",
  "body": " The three projections of the solid . Left: into the -plane (order ). Middle: into the -plane (order ). Right: into the -plane (order ), which the curve splits into and .          y = 1-x   1    1               par(t) = (t, 1 - t^2)      z = 1-x^2   1    1               cur(t) = (t, 1 - (1-t)^2)       R_1    R_2   z = 1-(1-y)^2   1    1              "
},
{
  "id": "example-triple-mass",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#example-triple-mass",
  "type": "Example",
  "number": "10.8",
  "title": "Example III.",
  "body": " Example III   Assume that the density (mass per unit volume) is given by . Evaluate the mass of the solid of .   "
},
{
  "id": "section-triple-integrals-cylindrical",
  "level": "1",
  "url": "section-triple-integrals-cylindrical.html",
  "type": "Section",
  "number": "11",
  "title": "Triple Integrals in Cylindrical Coordinates",
  "body": " Triple Integrals in Cylindrical Coordinates  Previously, we learned how to calculate triple integrals in rectangular coordinates. Today, we will learn triple integrals in cylindrical coordinates, which can be used to evaluate volumes of solids or to integrate a function over a region in space. We will see that when there is symmetry about an axis, it is more convenient to use cylindrical coordinates to calculate a triple integral.    Cylindrical Coordinates  Cylindrical coordinates are the combination of polar coordinates in the -plane and the -coordinate of Cartesian coordinates; see . Thus the relations between Cartesian and cylindrical coordinates are     A point in cylindrical coordinates: are the polar coordinates of its projection into the -plane, and is its usual height.   Three coordinate axes in space. A point P is shown above the x y plane. A segment of length r runs from the origin to the projection of P in the x y plane, making an angle theta with the positive x axis, and a vertical segment of length z connects the projection to P.     Before calculating triple integrals in cylindrical coordinates, we need to figure out the volume element in this new set of coordinates. Remember that the area element in polar coordinates is ; stacking it through a height gives the cylindrical volume element   which can be seen in .   The cylindrical volume element: a polar rectangle of area (with sides and ) extruded through a height , so .   A small curved block sitting at distance r from the z axis. Its base is a polar rectangle with radial side d r and arc side r d theta, and its height is d z. Dashed lines connect it to the z axis.     Now suppose our goal is to integrate over a region described as   where the region is known in polar coordinates:   Then the integral can be converted to cylindrical coordinates:      The Mass of a Solid With Axial Symmetry   Example I   A solid lies within the cylinder , below the plane , and above the paraboloid . Given that the density of the solid at any point is proportional to its distance from the axis of the cylinder, find the mass of the solid.     Let us begin by plotting the region of integration ( ). Note that the equation of the cylinder in cylindrical coordinates is , and the equation of the paraboloid is   Therefore, the limits of integration can be written as   since the projection into the -plane is a circle of radius and the height of the solid is bounded between the paraboloid and . Since we know that the density of the solid is proportional to the distance from the axis of the cylinder, we have   and since , in cylindrical coordinates . Thus, we can compute the mass of the solid as follows:     The solid of : inside the cylinder , above the paraboloid , and below the plane . Its mass, with density , is .   Three coordinate axes in space with a vertical circular cylinder of radius one about the z axis, capped by the plane z equals four on top. Inside the bottom of the cylinder, the paraboloid z equals one minus r squared forms a dome shaped floor that touches the point zero zero one on the z axis and meets the cylinder wall at the x y plane.     The way a column of the solid runs from the paraboloid floor up to the plane , and how it sweeps around the axis, is animated in .   Animation of the cylindrical setup for . The solid is assembled from the cylinder , the plane , and the paraboloid floor ; a column at runs from up to , and sweeps through the solid as goes around the axis, illustrating .     "
},
{
  "id": "fig-cylindrical-point-tikz",
  "level": "2",
  "url": "section-triple-integrals-cylindrical.html#fig-cylindrical-point-tikz",
  "type": "Figure",
  "number": "11.1",
  "title": "",
  "body": " A point in cylindrical coordinates: are the polar coordinates of its projection into the -plane, and is its usual height.   Three coordinate axes in space. A point P is shown above the x y plane. A segment of length r runs from the origin to the projection of P in the x y plane, making an angle theta with the positive x axis, and a vertical segment of length z connects the projection to P.    "
},
{
  "id": "fig-cylindrical-element-tikz",
  "level": "2",
  "url": "section-triple-integrals-cylindrical.html#fig-cylindrical-element-tikz",
  "type": "Figure",
  "number": "11.2",
  "title": "",
  "body": " The cylindrical volume element: a polar rectangle of area (with sides and ) extruded through a height , so .   A small curved block sitting at distance r from the z axis. Its base is a polar rectangle with radial side d r and arc side r d theta, and its height is d z. Dashed lines connect it to the z axis.    "
},
{
  "id": "example-cylindrical-mass",
  "level": "2",
  "url": "section-triple-integrals-cylindrical.html#example-cylindrical-mass",
  "type": "Example",
  "number": "11.3",
  "title": "Example I.",
  "body": " Example I   A solid lies within the cylinder , below the plane , and above the paraboloid . Given that the density of the solid at any point is proportional to its distance from the axis of the cylinder, find the mass of the solid.   "
},
{
  "id": "fig-cylindrical-solid-tikz",
  "level": "2",
  "url": "section-triple-integrals-cylindrical.html#fig-cylindrical-solid-tikz",
  "type": "Figure",
  "number": "11.4",
  "title": "",
  "body": " The solid of : inside the cylinder , above the paraboloid , and below the plane . Its mass, with density , is .   Three coordinate axes in space with a vertical circular cylinder of radius one about the z axis, capped by the plane z equals four on top. Inside the bottom of the cylinder, the paraboloid z equals one minus r squared forms a dome shaped floor that touches the point zero zero one on the z axis and meets the cylinder wall at the x y plane.    "
},
{
  "id": "fig-cylindrical-video",
  "level": "2",
  "url": "section-triple-integrals-cylindrical.html#fig-cylindrical-video",
  "type": "Figure",
  "number": "11.5",
  "title": "",
  "body": " Animation of the cylindrical setup for . The solid is assembled from the cylinder , the plane , and the paraboloid floor ; a column at runs from up to , and sweeps through the solid as goes around the axis, illustrating .   "
},
{
  "id": "section-triple-integrals-spherical",
  "level": "1",
  "url": "section-triple-integrals-spherical.html",
  "type": "Section",
  "number": "12",
  "title": "Triple Integrals in Spherical Coordinates",
  "body": " Triple Integrals in Spherical Coordinates  Today, we will study yet another useful coordinate system in three dimensions, which is known as the spherical coordinate system . It simplifies the evaluation of triple integrals over regions bounded by spheres or cones.    Spherical Coordinates  The spherical coordinates can be best explained in a figure. Consider the point with spherical coordinates shown in .      is the distance of the point from the origin ( ).     is the angle the projection of makes with the positive -axis. This is the same as what we had in cylindrical coordinates ( ).     is the angle between and the positive -axis ( ).      A point in spherical coordinates: is the distance from the origin, is the usual polar angle of the projection into the -plane, and is the angle between and the positive -axis.   Three coordinate axes in space. A segment of length rho runs from the origin to a point P above the x y plane. The angle phi is marked between the positive z axis and the segment, and the angle theta is marked in the x y plane between the positive x axis and the dashed projection of the segment. A dashed vertical line connects P to its projection.      Equations Relating Spherical Coordinates to Cartesian and Cylindrical Coordinates        Spheres and cones have particularly simple equations in spherical coordinates. For a sphere centered at the origin with radius , we have    Example I   Find the equation of the sphere in spherical coordinates.     Substituting the spherical expressions for , , and :     Example II   What are the equations of the two cones and in spherical coordinates?     The upper cone makes a angle with the positive -axis, so every point on it has ; likewise the lower cone is . (Algebraically: forces .)    Coordinate Conversion Formulas   The corresponding formulas for in triple integrals:       Integration in Spherical Coordinates  The volume element in spherical coordinates is illustrated in : a spherical wedge with radial side , one arc side , and the other arc side , so    The spherical volume element (spherical wedge). Its three mutually perpendicular sides have lengths , , and , so .   Three coordinate axes in space with a small curved block at distance rho from the origin, in the direction given by the angles phi and theta. Its edges are labeled d rho, rho d phi, and rho sine phi d theta, and dashed lines connect it to the origin and the z axis.     Then, the triple integral over a region described in spherical coordinates by , , and can be converted into spherical coordinates as follows:      The Ice Cream Cone   Example III   Find the volume of the ice cream cone  cut from the solid sphere by the cone .     We begin by plotting the ice cream cone ( ). Next, we identify the region of integration, which will provide us with the integration limits:   Thus the volume of the ice cream cone can be evaluated as follows:     The ice cream cone of : the region inside the sphere and above the cone . Its volume is .   Three coordinate axes in space with an ice cream cone shaped solid: a cone with vertex at the origin opening upward at sixty degrees from the z axis, capped by a dome which is part of the unit sphere. The circle where the cone meets the sphere is drawn.     How the spherical description of the ice cream cone works the angle sweeping from the -axis down to the cone while reaches out to the sphere is animated in .   Animation of spherical coordinates and the ice cream cone. A ray from the origin at angles carries the point ; sweeping spins the ray around the -axis, sweeping tilts it away from the axis, and restricting , fills out the ice cream cone of .       Converting a Triple Integral to Spherical Coordinates   Example IV   Calculate the triple integral below by converting it to spherical coordinates:      We begin by converting the integration limits and the integrand to spherical coordinates. The limits describe the solid sphere of radius centered at , shown in :   Note that is the upper hemisphere and is the lower hemisphere. In spherical coordinates the solid is , , , and the integrand is . Thus:     The sphere of , which in spherical coordinates is . It sits on the -plane, touching the origin.   Three coordinate axes in space with a sphere of radius two centered on the z axis at height two, so it touches the origin from above. A dashed vertical diameter runs from the origin to the north pole at height four.        Re-Writing an Integral in Spherical and Cylindrical Coordinates   Example V   Re-write (do not evaluate) the following integral in spherical and cylindrical coordinates:      The -projection is the lower half disk , (shown in ), so and . In , the solid runs from the cone (that is, ) up to the plane ; the solid is shown in . Since , the cylindrical form is   For the spherical form, the cone is , and the plane becomes , that is, . With , we get     The -projection of the solid in : the lower half of the unit disk, described by , .     arc(t) = (cos(t), sin(t))       y = -\\sqrt{1-x^2}   1    -1               The solid of : over the lower half disk, between the cone (spherical ) and the plane (spherical ).   Three coordinate axes in space with a half cone opening upward from the origin at forty five degrees, over the half of the plane with y negative, capped above by the flat half disk in the plane z equals one. The straight edge of the cap lies over the x axis.       Calculate the volume of the region inside and below .     .     "
},
{
  "id": "fig-spherical-point-tikz",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-spherical-point-tikz",
  "type": "Figure",
  "number": "12.1",
  "title": "",
  "body": " A point in spherical coordinates: is the distance from the origin, is the usual polar angle of the projection into the -plane, and is the angle between and the positive -axis.   Three coordinate axes in space. A segment of length rho runs from the origin to a point P above the x y plane. The angle phi is marked between the positive z axis and the segment, and the angle theta is marked in the x y plane between the positive x axis and the dashed projection of the segment. A dashed vertical line connects P to its projection.    "
},
{
  "id": "example-spherical-shifted-sphere",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#example-spherical-shifted-sphere",
  "type": "Example",
  "number": "12.2",
  "title": "Example I.",
  "body": " Example I   Find the equation of the sphere in spherical coordinates.   "
},
{
  "id": "example-spherical-cones",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#example-spherical-cones",
  "type": "Example",
  "number": "12.3",
  "title": "Example II.",
  "body": " Example II   What are the equations of the two cones and in spherical coordinates?   "
},
{
  "id": "fig-spherical-element-tikz",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-spherical-element-tikz",
  "type": "Figure",
  "number": "12.4",
  "title": "",
  "body": " The spherical volume element (spherical wedge). Its three mutually perpendicular sides have lengths , , and , so .   Three coordinate axes in space with a small curved block at distance rho from the origin, in the direction given by the angles phi and theta. Its edges are labeled d rho, rho d phi, and rho sine phi d theta, and dashed lines connect it to the origin and the z axis.    "
},
{
  "id": "example-spherical-icecream",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#example-spherical-icecream",
  "type": "Example",
  "number": "12.5",
  "title": "Example III.",
  "body": " Example III   Find the volume of the ice cream cone  cut from the solid sphere by the cone .   "
},
{
  "id": "fig-icecream-tikz",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-icecream-tikz",
  "type": "Figure",
  "number": "12.6",
  "title": "",
  "body": " The ice cream cone of : the region inside the sphere and above the cone . Its volume is .   Three coordinate axes in space with an ice cream cone shaped solid: a cone with vertex at the origin opening upward at sixty degrees from the z axis, capped by a dome which is part of the unit sphere. The circle where the cone meets the sphere is drawn.    "
},
{
  "id": "fig-spherical-video",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-spherical-video",
  "type": "Figure",
  "number": "12.7",
  "title": "",
  "body": " Animation of spherical coordinates and the ice cream cone. A ray from the origin at angles carries the point ; sweeping spins the ray around the -axis, sweeping tilts it away from the axis, and restricting , fills out the ice cream cone of .   "
},
{
  "id": "example-spherical-convert",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#example-spherical-convert",
  "type": "Example",
  "number": "12.8",
  "title": "Example IV.",
  "body": " Example IV   Calculate the triple integral below by converting it to spherical coordinates:    "
},
{
  "id": "fig-shifted-sphere-tikz",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-shifted-sphere-tikz",
  "type": "Figure",
  "number": "12.9",
  "title": "",
  "body": " The sphere of , which in spherical coordinates is . It sits on the -plane, touching the origin.   Three coordinate axes in space with a sphere of radius two centered on the z axis at height two, so it touches the origin from above. A dashed vertical diameter runs from the origin to the north pole at height four.    "
},
{
  "id": "example-spherical-rewrite",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#example-spherical-rewrite",
  "type": "Example",
  "number": "12.10",
  "title": "Example V.",
  "body": " Example V   Re-write (do not evaluate) the following integral in spherical and cylindrical coordinates:    "
},
{
  "id": "fig-halfdisk-prefigure",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-halfdisk-prefigure",
  "type": "Figure",
  "number": "12.11",
  "title": "",
  "body": " The -projection of the solid in : the lower half of the unit disk, described by , .     arc(t) = (cos(t), sin(t))       y = -\\sqrt{1-x^2}   1    -1             "
},
{
  "id": "fig-cone-plane-tikz",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-cone-plane-tikz",
  "type": "Figure",
  "number": "12.12",
  "title": "",
  "body": " The solid of : over the lower half disk, between the cone (spherical ) and the plane (spherical ).   Three coordinate axes in space with a half cone opening upward from the origin at forty five degrees, over the half of the plane with y negative, capped above by the flat half disk in the plane z equals one. The straight edge of the cap lies over the x axis.    "
},
{
  "id": "exercise-spherical-volume",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#exercise-spherical-volume",
  "type": "Checkpoint",
  "number": "12.13",
  "title": "",
  "body": "  Calculate the volume of the region inside and below .     .   "
},
{
  "id": "section-mass-center-of-mass",
  "level": "1",
  "url": "section-mass-center-of-mass.html",
  "type": "Section",
  "number": "13",
  "title": "Applications: Mass and Center of Mass",
  "body": " Applications: Mass and Center of Mass   Multiple integrals let us compute physical quantities of solid objects and flat plates whose density varies from point to point. In this section we use double and triple integrals to compute the total mass of an object and to locate its center of mass the point at which the object would balance perfectly.     Finding the Center of Mass of a 3D Object  Suppose a solid object occupies a region in space and its density (mass per unit volume) at each point is given by a continuous function . To measure the total mass, we partition into small boxes. If the -th box contains the point and has volume , then the density is nearly constant on this small box, so its mass is approximately   as illustrated in . Summing over all the boxes gives a Riemann sum for the total mass, and letting the size of the boxes shrink to zero turns the sum into a triple integral:   Watch the construction unfold in .   Partitioning a solid into small boxes: each box carries the mass , and the Riemann sum of these masses converges to the triple integral of the density.     A solid region with a small box around the point . The box has volume and mass .   A potato-shaped solid in space with a small highlighted box inside it.   A translucent potato-shaped solid labeled floats above the -plane in a three-dimensional coordinate system. A small purple box inside the solid marks the point , and a leader line labels its mass .      The same idea locates the balance point of the object. Each small box contributes a moment about each coordinate plane its mass times its (signed) distance from that plane. Adding these contributions and passing to the limit gives the first moments    The center of mass  is the point whose coordinates are the moments divided by the total mass:    Center of Mass of a Solid Bounded by a Paraboloid   Find the center of mass of a solid of constant density , which is bounded by the disk (in the plane ) and the paraboloid .     The solid is shown in . Both the region and the density are symmetric about the -axis, so the center of mass lies on that axis: . It remains to find from .  Because of the circular symmetry, we work in cylindrical coordinates, where the region is described by , , and . The mass is   Using , the first moment about the -plane is   Therefore   and the center of mass is . Notice that the answer does not depend on : for an object of constant density, the location of the balance point is determined by the shape alone. Watch the computation come together in .    The solid bounded above by and below by the disk . By symmetry the center of mass lies on the -axis, at height .     The solid of constant density bounded by the paraboloid and the disk : in the plane . The center of mass sits on the axis of symmetry at .   A dome-shaped solid over a disk with its center of mass marked on the vertical axis.   The paraboloid forms a translucent green dome over the disk in the -plane, labeled . The dashed -axis passes through the apex at height 4, and a magenta dot on the axis at height marks the center of mass.         Centroids    When the density of a solid object (as in the previous example) or plate (as in the next example) is constant, the center of mass is called the centroid of the object.    As we saw in , a constant density cancels in the quotients of , so the centroid depends only on the shape of the object. For a flat plate occupying a region in the plane with density (mass per unit area), the same reasoning as before with double integrals in place of triple integrals gives the mass and first moments   where is the moment about the -axis and the moment about the -axis, and the center of mass is    Centroid of the Region Between Two Curves   Find the centroid of the region between and .     The two curves intersect where , that is, at and , so the region lies over the interval with , as shown in . Since we are finding the centroid, we may take the constant density to be , in which case the mass is simply the area:   The moment about the -axis is   and the moment about the -axis is   By ,   so the centroid is . It is no accident that : the region is symmetric about the line , so its centroid must lie on that line. See for an animated walkthrough.    The region between and is symmetric about the line , and its centroid lies on that line.     The region between (blue) and (red) over , with its centroid at .     f(x) = sqrt(x)  g(x) = x^2         (1,1)    \\left(\\frac{9}{20},\\frac{9}{20}\\right)    y=\\sqrt{x}    y=x^2                  Centroid of a Cardioid   Find the centroid of the object that has the shape and density .     The cardioid is shown in . The density is constant, so we are indeed finding a centroid, and the answer will not depend on the value . The region is symmetric about the -axis (replacing by does not change ), so and we only need .  Working in polar coordinates with , the mass is   Since , the moment about the -axis is   where the odd powers of cosine integrate to zero over a full period, , and . By ,   so the centroid is . As promised, the constant density canceled out. The animation in shows how symmetry and the polar integrals combine to locate this point.    The cardioid with constant density: symmetry places the centroid on the -axis, and the polar moment integrals put it at .     The cardioid . The region is symmetric about the -axis and its centroid is marked in maroon.     c(t) = ((1 + cos(t))*cos(t), (1 + cos(t))*sin(t))      \\left(\\frac{5}{6},0\\right)    r=1+\\cos(\\theta)               "
},
{
  "id": "section-mass-center-of-mass-2-1",
  "level": "2",
  "url": "section-mass-center-of-mass.html#section-mass-center-of-mass-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "density center of mass "
},
{
  "id": "fig-mass-element-video",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-mass-element-video",
  "type": "Figure",
  "number": "13.1",
  "title": "",
  "body": " Partitioning a solid into small boxes: each box carries the mass , and the Riemann sum of these masses converges to the triple integral of the density.   "
},
{
  "id": "fig-mass-element-tikz",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-mass-element-tikz",
  "type": "Figure",
  "number": "13.2",
  "title": "",
  "body": " A solid region with a small box around the point . The box has volume and mass .   A potato-shaped solid in space with a small highlighted box inside it.   A translucent potato-shaped solid labeled floats above the -plane in a three-dimensional coordinate system. A small purple box inside the solid marks the point , and a leader line labels its mass .     "
},
{
  "id": "sec-mass-3d-object-9",
  "level": "2",
  "url": "section-mass-center-of-mass.html#sec-mass-3d-object-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moment first moments "
},
{
  "id": "sec-mass-3d-object-11",
  "level": "2",
  "url": "section-mass-center-of-mass.html#sec-mass-3d-object-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "center of mass "
},
{
  "id": "example-paraboloid-com",
  "level": "2",
  "url": "section-mass-center-of-mass.html#example-paraboloid-com",
  "type": "Example",
  "number": "13.3",
  "title": "Center of Mass of a Solid Bounded by a Paraboloid.",
  "body": " Center of Mass of a Solid Bounded by a Paraboloid   Find the center of mass of a solid of constant density , which is bounded by the disk (in the plane ) and the paraboloid .   "
},
{
  "id": "fig-paraboloid-com-video",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-paraboloid-com-video",
  "type": "Figure",
  "number": "13.4",
  "title": "",
  "body": " The solid bounded above by and below by the disk . By symmetry the center of mass lies on the -axis, at height .   "
},
{
  "id": "fig-paraboloid-com-tikz",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-paraboloid-com-tikz",
  "type": "Figure",
  "number": "13.5",
  "title": "",
  "body": " The solid of constant density bounded by the paraboloid and the disk : in the plane . The center of mass sits on the axis of symmetry at .   A dome-shaped solid over a disk with its center of mass marked on the vertical axis.   The paraboloid forms a translucent green dome over the disk in the -plane, labeled . The dashed -axis passes through the apex at height 4, and a magenta dot on the axis at height marks the center of mass.     "
},
{
  "id": "def-centroid",
  "level": "2",
  "url": "section-mass-center-of-mass.html#def-centroid",
  "type": "Definition",
  "number": "13.6",
  "title": "",
  "body": "  When the density of a solid object (as in the previous example) or plate (as in the next example) is constant, the center of mass is called the centroid of the object.   "
},
{
  "id": "example-centroid-between-curves",
  "level": "2",
  "url": "section-mass-center-of-mass.html#example-centroid-between-curves",
  "type": "Example",
  "number": "13.7",
  "title": "Centroid of the Region Between Two Curves.",
  "body": " Centroid of the Region Between Two Curves   Find the centroid of the region between and .   "
},
{
  "id": "fig-centroid-between-curves-video",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-centroid-between-curves-video",
  "type": "Figure",
  "number": "13.8",
  "title": "",
  "body": " The region between and is symmetric about the line , and its centroid lies on that line.   "
},
{
  "id": "fig-centroid-between-curves",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-centroid-between-curves",
  "type": "Figure",
  "number": "13.9",
  "title": "",
  "body": " The region between (blue) and (red) over , with its centroid at .     f(x) = sqrt(x)  g(x) = x^2         (1,1)    \\left(\\frac{9}{20},\\frac{9}{20}\\right)    y=\\sqrt{x}    y=x^2                "
},
{
  "id": "example-cardioid-centroid",
  "level": "2",
  "url": "section-mass-center-of-mass.html#example-cardioid-centroid",
  "type": "Example",
  "number": "13.10",
  "title": "Centroid of a Cardioid.",
  "body": " Centroid of a Cardioid   Find the centroid of the object that has the shape and density .   "
},
{
  "id": "fig-cardioid-centroid-video",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-cardioid-centroid-video",
  "type": "Figure",
  "number": "13.11",
  "title": "",
  "body": " The cardioid with constant density: symmetry places the centroid on the -axis, and the polar moment integrals put it at .   "
},
{
  "id": "fig-cardioid-centroid",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-cardioid-centroid",
  "type": "Figure",
  "number": "13.12",
  "title": "",
  "body": " The cardioid . The region is symmetric about the -axis and its centroid is marked in maroon.     c(t) = ((1 + cos(t))*cos(t), (1 + cos(t))*sin(t))      \\left(\\frac{5}{6},0\\right)    r=1+\\cos(\\theta)             "
},
{
  "id": "section-jacobian-substitution",
  "level": "1",
  "url": "section-jacobian-substitution.html",
  "type": "Section",
  "number": "14",
  "title": "Substitution in Multiple Integrals and the Jacobian Determinant",
  "body": " Substitution in Multiple Integrals and the Jacobian Determinant   In single-variable calculus, substitution converts a difficult integral into an easier one at the cost of a correction factor . In this section we develop the analogous tool for double and triple integrals. The correction factor is now a determinant the Jacobian determinant which measures how a change of variables stretches or shrinks area and volume.     The Jacobian Determinant  Assume that there exists a transformation that relates two coordinate systems, and coordinates. In other words, there exist two functions and such that and . As illustrated in , the region in the -plane is transformed to the region in the -plane, and the inverse transformation carries back to .   The transformation carries the region in the -plane onto the region in the -plane; the inverse carries back onto . The point is sent to the point .      blobS(t) = (1.55 + (1 + 0.22*sin(2*t))*cos(t), 1.7 + (0.78 + 0.1*cos(3*t))*sin(t))      (u_1,v_1)    S                blobR(t) = (1.75 + (1.05 + 0.18*cos(2*t))*cos(t), 1.6 + (0.72 + 0.14*sin(3*t))*sin(t))      (x_1,y_1)    R                 The Jacobian determinant of the transformation , is defined as   In 3D, this definition is generalized to     Then the multiple integrals can be converted from one coordinate system to another as follows:   and in three dimensions, with , , carrying a region in -space onto a region in -space,   The above integrals should be compared to the single-variable substitution :   Note that in the past we used to use the substitution of the form and write:   The derivative factor records how much the substitution stretches lengths. In two variables, the Jacobian determinant plays the same role for areas: is the local ratio of area in the -plane to area in the -plane. The next example makes this ratio concrete.   A First Substitution: Scaling a Rectangle   Use the transformation , to evaluate   and verify that the Jacobian determinant equals the ratio of the areas of the two regions of integration.     The transformation is , which carries the rectangle in the -plane onto the unit square in the -plane, as shown in . By , the Jacobian determinant is   which is exactly the ratio of the areas, : the map shrinks areas by the factor , uniformly. Substituting , , and ,   which agrees with computing the integral directly: . The animation in shows how the Jacobian acts as an area conversion factor.    The transformation maps the rectangle onto the unit square . The Jacobian is the ratio of the areas.     The rectangle in the -plane (right) and its image, the unit square , in the -plane (left) under . The area ratio equals the Jacobian determinant.          R                   S                 Choosing a Transformation  In practice we usually run the process in the other direction: the region of integration is awkward in -coordinates, and we look for a substitution under which it corresponds to a simple region ideally a rectangle with constant limits of integration. The boundary curves of usually tell us what and should be.   A Parallelogram Region   Use the transformation to compute   where is the parallelogram bounded by the lines , , , and , shown in .     The transformation gives and , so by ,   Inverting the transformation, and . Therefore the boundary lines and become the vertical lines and , while and become and : the parallelogram corresponds to the rectangle   The integrand becomes , so by ,   Watch the region unfold into a rectangle in .    The substitution , straightens the parallelogram into the rectangle ; the Jacobian equals , so areas are preserved.     The parallelogram between the lines , , , and (left), and the corresponding rectangle in the -plane (right).      l1(x) = (6 - x)\/2  l2(x) = (10 - x)\/2          x+2y=10    x+2y=6    D                     R               A Curved Region Mapped to a Rectangle   Let be the region in the first quadrant bounded by the hyperbolas , , , and , shown in .     Find a transformation that relates to a rectangle .    Compute the integral .         Part A. The boundary curves suggest the substitution   since then the four boundary curves become the four lines , , , and . Under this substitution the curved region corresponds to the rectangle    Part B. Here the substitution is given in the direction , , so it is easier to first compute the Jacobian of with respect to :   According to the inverse function theorem, the Jacobian we need is the reciprocal of this one:   Now apply . The factor in the integrand cancels against the Jacobian, and :   Without the substitution, even describing with explicit -limits would be painful; with it, the integral collapses in two lines. See for the animation.    The substitution , maps the region between the four hyperbolas onto the rectangle , and the Jacobian cancels the factor in the integrand.     The region bounded by the hyperbolas and , (left) corresponds to the rectangle under , (right).      hyp(x,y) = x^2 - y^2  prod(x,y) = x*y          x^2-y^2=-3    x^2-y^2=3    xy=4    xy=1    D                       R                 Substitution in Triple Integrals   Volume of a Parallelepiped by Substitution   Find the volume of the parallelepiped shown in by writing the equations of all faces of the parallelepiped and describing it by three inequalities. Use a suitable change of variables such that all the integral limits are constants (as opposed to functions).     We can easily write the equations of of the faces, two of which are parallel to the -plane and the other two are parallel to the -plane:   To write the equations of the remaining two slanted faces, we find the normal to the plane, and together with a point on each plane, we compute their equations. Each slanted face contains the direction (an edge parallel to the -axis) and the edge direction , so   Using the points and on the two faces,   Thus we can describe the parallelepiped as the region between the six faces in other words, by the three inequalities   We can now transform the region into a box using the transformation , , and :   Note that according to the inverse function theorem, the matrix inverse of the Jacobian matrix of an invertible function is the Jacobian matrix of the inverse function. Using in the easy direction,   For the volume of the parallelepiped, gives   The animation in shows the shear that straightens the parallelepiped into a box.    Finally, we would like to mention that there is a much easier way of calculating the volume of a parallelepiped (using the so-called box product); however, the method above is a rich example in calculus and definitely worth learning. For example, you may need to integrate a function over the parallelepiped, which cannot be done using the box product.    The change of variables , , shears the parallelepiped into the box ; since , the volume is .     The parallelepiped bounded by the planes , , , , , and .   A long slanted box in space bounded by six planes.   A parallelepiped drawn with crimson edges in a three-dimensional coordinate system. Its base is the unit square in the plane , sheared in the -direction: the bottom face lies between the planes and , and the top face, at height , is shifted one unit in .       Volume of an Ellipsoid   Use the method of substitution in multiple integrals to show that the volume of the ellipsoid   is equal to .     The ellipsoid is a stretched sphere, so we use the transformation   which carries the unit ball , bounded by , onto the solid ellipsoid , as illustrated in . By , the Jacobian is   Therefore, by ,   since the last integral is the volume of a sphere of radius one, . The animation in shows the unit sphere stretching by the factors , , along the three axes, scaling its volume by .    Stretching the unit sphere by factors , , and along the coordinate axes produces the ellipsoid; the Jacobian scales the volume from to .     The transformation carries the unit ball onto the solid ellipsoid with semi-axes , , .   A unit sphere on the left is mapped by an arrow labeled T to an ellipsoid on the right.   On the left, the unit sphere , labeled , drawn as a translucent gray-blue ball. An arrow labeled points to the right, where the ellipsoid , labeled , is drawn as a translucent green surface, wider than it is tall, with its three semi-axes , , and drawn in vermillion, blue, and green.       "
},
{
  "id": "section-jacobian-substitution-2-1",
  "level": "2",
  "url": "section-jacobian-substitution.html#section-jacobian-substitution-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Jacobian determinant "
},
{
  "id": "fig-transformation-blobs",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-transformation-blobs",
  "type": "Figure",
  "number": "14.1",
  "title": "",
  "body": " The transformation carries the region in the -plane onto the region in the -plane; the inverse carries back onto . The point is sent to the point .      blobS(t) = (1.55 + (1 + 0.22*sin(2*t))*cos(t), 1.7 + (0.78 + 0.1*cos(3*t))*sin(t))      (u_1,v_1)    S                blobR(t) = (1.75 + (1.05 + 0.18*cos(2*t))*cos(t), 1.6 + (0.72 + 0.14*sin(3*t))*sin(t))      (x_1,y_1)    R              "
},
{
  "id": "def-jacobian",
  "level": "2",
  "url": "section-jacobian-substitution.html#def-jacobian",
  "type": "Definition",
  "number": "14.2",
  "title": "",
  "body": "  The Jacobian determinant of the transformation , is defined as   In 3D, this definition is generalized to    "
},
{
  "id": "example-jacobian-rectangle",
  "level": "2",
  "url": "section-jacobian-substitution.html#example-jacobian-rectangle",
  "type": "Example",
  "number": "14.3",
  "title": "A First Substitution: Scaling a Rectangle.",
  "body": " A First Substitution: Scaling a Rectangle   Use the transformation , to evaluate   and verify that the Jacobian determinant equals the ratio of the areas of the two regions of integration.   "
},
{
  "id": "fig-jacobian-rectangle-video",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-jacobian-rectangle-video",
  "type": "Figure",
  "number": "14.4",
  "title": "",
  "body": " The transformation maps the rectangle onto the unit square . The Jacobian is the ratio of the areas.   "
},
{
  "id": "fig-jacobian-rectangle",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-jacobian-rectangle",
  "type": "Figure",
  "number": "14.5",
  "title": "",
  "body": " The rectangle in the -plane (right) and its image, the unit square , in the -plane (left) under . The area ratio equals the Jacobian determinant.          R                   S             "
},
{
  "id": "example-parallelogram-substitution",
  "level": "2",
  "url": "section-jacobian-substitution.html#example-parallelogram-substitution",
  "type": "Example",
  "number": "14.6",
  "title": "A Parallelogram Region.",
  "body": " A Parallelogram Region   Use the transformation to compute   where is the parallelogram bounded by the lines , , , and , shown in .   "
},
{
  "id": "fig-parallelogram-sub-video",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-parallelogram-sub-video",
  "type": "Figure",
  "number": "14.7",
  "title": "",
  "body": " The substitution , straightens the parallelogram into the rectangle ; the Jacobian equals , so areas are preserved.   "
},
{
  "id": "fig-parallelogram-sub",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-parallelogram-sub",
  "type": "Figure",
  "number": "14.8",
  "title": "",
  "body": " The parallelogram between the lines , , , and (left), and the corresponding rectangle in the -plane (right).      l1(x) = (6 - x)\/2  l2(x) = (10 - x)\/2          x+2y=10    x+2y=6    D                     R             "
},
{
  "id": "example-curved-to-rectangle",
  "level": "2",
  "url": "section-jacobian-substitution.html#example-curved-to-rectangle",
  "type": "Example",
  "number": "14.9",
  "title": "A Curved Region Mapped to a Rectangle.",
  "body": " A Curved Region Mapped to a Rectangle   Let be the region in the first quadrant bounded by the hyperbolas , , , and , shown in .     Find a transformation that relates to a rectangle .    Compute the integral .      "
},
{
  "id": "fig-curved-region-video",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-curved-region-video",
  "type": "Figure",
  "number": "14.10",
  "title": "",
  "body": " The substitution , maps the region between the four hyperbolas onto the rectangle , and the Jacobian cancels the factor in the integrand.   "
},
{
  "id": "fig-curved-region",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-curved-region",
  "type": "Figure",
  "number": "14.11",
  "title": "",
  "body": " The region bounded by the hyperbolas and , (left) corresponds to the rectangle under , (right).      hyp(x,y) = x^2 - y^2  prod(x,y) = x*y          x^2-y^2=-3    x^2-y^2=3    xy=4    xy=1    D                       R             "
},
{
  "id": "example-parallelepiped-volume",
  "level": "2",
  "url": "section-jacobian-substitution.html#example-parallelepiped-volume",
  "type": "Example",
  "number": "14.12",
  "title": "Volume of a Parallelepiped by Substitution.",
  "body": " Volume of a Parallelepiped by Substitution   Find the volume of the parallelepiped shown in by writing the equations of all faces of the parallelepiped and describing it by three inequalities. Use a suitable change of variables such that all the integral limits are constants (as opposed to functions).   "
},
{
  "id": "remark-box-product",
  "level": "2",
  "url": "section-jacobian-substitution.html#remark-box-product",
  "type": "Remark",
  "number": "14.13",
  "title": "",
  "body": " Finally, we would like to mention that there is a much easier way of calculating the volume of a parallelepiped (using the so-called box product); however, the method above is a rich example in calculus and definitely worth learning. For example, you may need to integrate a function over the parallelepiped, which cannot be done using the box product.  "
},
{
  "id": "fig-parallelepiped-video",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-parallelepiped-video",
  "type": "Figure",
  "number": "14.14",
  "title": "",
  "body": " The change of variables , , shears the parallelepiped into the box ; since , the volume is .   "
},
{
  "id": "fig-parallelepiped-tikz",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-parallelepiped-tikz",
  "type": "Figure",
  "number": "14.15",
  "title": "",
  "body": " The parallelepiped bounded by the planes , , , , , and .   A long slanted box in space bounded by six planes.   A parallelepiped drawn with crimson edges in a three-dimensional coordinate system. Its base is the unit square in the plane , sheared in the -direction: the bottom face lies between the planes and , and the top face, at height , is shifted one unit in .     "
},
{
  "id": "example-ellipsoid-volume",
  "level": "2",
  "url": "section-jacobian-substitution.html#example-ellipsoid-volume",
  "type": "Example",
  "number": "14.16",
  "title": "Volume of an Ellipsoid.",
  "body": " Volume of an Ellipsoid   Use the method of substitution in multiple integrals to show that the volume of the ellipsoid   is equal to .   "
},
{
  "id": "fig-ellipsoid-video",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-ellipsoid-video",
  "type": "Figure",
  "number": "14.17",
  "title": "",
  "body": " Stretching the unit sphere by factors , , and along the coordinate axes produces the ellipsoid; the Jacobian scales the volume from to .   "
},
{
  "id": "fig-ellipsoid-tikz",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-ellipsoid-tikz",
  "type": "Figure",
  "number": "14.18",
  "title": "",
  "body": " The transformation carries the unit ball onto the solid ellipsoid with semi-axes , , .   A unit sphere on the left is mapped by an arrow labeled T to an ellipsoid on the right.   On the left, the unit sphere , labeled , drawn as a translucent gray-blue ball. An arrow labeled points to the right, where the ellipsoid , labeled , is drawn as a translucent green surface, wider than it is tall, with its three semi-axes , , and drawn in vermillion, blue, and green.     "
},
{
  "id": "section-greens-theorem",
  "level": "1",
  "url": "section-greens-theorem.html",
  "type": "Section",
  "number": "15",
  "title": "Green’s Theorem in the Plane",
  "body": " Green's Theorem in the Plane   Before we learn about Green's theorem, we will need to learn about two operations on vector fields: curl and divergence . We begin by studying divergence.     Divergence  Consider a vector field to be the velocity field of a fluid. How can we find the net flow rate of the gas through the boundaries of a rectangle shown in ?   The flux of the field through the four sides of a small rectangle with corner , width , and height . The pink arrows show the outward components of on each side.     field(x,y) = (0.4*x + 0.25, 0.32*y + 0.18)      (x,y)    (x+\\Delta x, y)    (x, y+\\Delta y)    (x+\\Delta x, y+\\Delta y)        \\mathbf{F}\\cdot\\mathbf{j}\\gt 0    \\mathbf{F}\\cdot(-\\mathbf{j})\\mathrel{\\unicode{x3C}} 0    \\mathbf{F}\\cdot\\mathbf{i}\\gt 0    \\mathbf{F}\\cdot(-\\mathbf{i})\\mathrel{\\unicode{x3C}} 0    A    \\Delta x    \\Delta y                 Let us evaluate the flux through each side, assuming the field is nearly constant along each side:   The net flow rate is approximately   Note that this is an approximation, since we are assuming the velocity field has a constant value along each side of the rectangle. The flux density can be calculated as follows:   Note that, in the limit that and approach , the above equation represents to what extent a gas is expanding or compressing at each point. This quantity is known as the divergence , and it is denoted by . Watch the construction in .    The divergence of the vector field is defined as   where .     The net flux of out of a small rectangle, divided by its area, converges to the divergence as the rectangle shrinks.     Computing and Interpreting Divergence   The vector fields below represent the velocity field of a gas. Calculate the divergence in each case and explain what it means physically.                    Part A. Using ,   Note that for every point on the -plane we have found that , which means that the gas is expanding, since there is a positive flux density at every point . The field is shown on the left in .   Part B. Again by ,   Note that for every point on the -plane we have found that , which means that the gas is neither expanding nor compressing. This rotating field is shown on the right in .    Left: the field flows away from the origin; its divergence is at every point (the gas expands). Right: the field circulates around the origin; its divergence is (the gas neither expands nor compresses).      fieldA(x,y) = (2*x, 2*y)                 fieldB(x,y) = (-y\/(x^2 + y^2 + 0.2), x\/(x^2 + y^2 + 0.2))                   Curl  Again, let us consider a vector field to be the velocity field of a fluid. This time we are interested in answering this question: how can we figure out the circulation density of the fluid at any point on the -plane?  To answer this question, we compute the flow rates of the vector field  along the sides of the rectangle (counterclockwise), as in , and then we take the limit as to find the circulation density at a point in the -plane.   The counterclockwise circulation of around the rectangle: along each side we take the component of in the direction of travel.     field(x,y) = (0.4*x + 0.25, 0.32*y + 0.18)      (x,y)    (x+\\Delta x, y)    (x, y+\\Delta y)    (x+\\Delta x, y+\\Delta y)        \\mathbf{F}\\cdot(-\\mathbf{i})\\mathrel{\\unicode{x3C}} 0    \\mathbf{F}\\cdot\\mathbf{i}\\gt 0    \\mathbf{F}\\cdot\\mathbf{j}\\gt 0    \\mathbf{F}\\cdot(-\\mathbf{j})\\mathrel{\\unicode{x3C}} 0    A    \\Delta x    \\Delta y                 We begin by computing the flow rates along each edge, i.e. top, bottom, left, and right:   Then we sum up the flow across the parallel edges:   Finally, after summing the flow rates above and taking the limit as , for the circulation density we get   This quantity is denoted by and is known as the -component of curl .    The -component of the curl of the vector field is     To find out the circulation density at a point in the -plane, you can imagine a paddle wheel whose axis goes through the point of interest. Then the -component of curl is positive if the fluid flow causes the paddle wheel to rotate counterclockwise, and it is negative if it turns clockwise. The animation in shows both behaviors.   The counterclockwise circulation of around a small rectangle, divided by its area, converges to the -component of curl. A paddle wheel placed in the fluid spins counterclockwise where the curl is positive.     Computing and Interpreting Curl   The vector fields below represent the velocity field of a fluid. Calculate the curl in each case and explain what it means physically.                    Part A. In this case we have and , and hence by ,   This means that if we place the paddle wheel at any point , the fluid flow will not rotate it: the radial field on the left of has no circulation.   Part B. In this case we have and , and hence   This means that if we place the paddle wheel at any point , we see that the fluid flow causes it to rotate in the counterclockwise direction, since the -component of curl is positive. See the right of .    Left: the radial field has : a paddle wheel does not spin. Right: the rotational field has : a paddle wheel spins counterclockwise everywhere.      fieldA(x,y) = (2*x, 2*y)                 fieldB(x,y) = (-2*y, 2*x)                   The Two Forms of Green's Theorem  Next we state Green's theorem in 2D Note that we only cover Green's theorem in 2D; however, you should know that this theorem can be generalized to 3D, and in that case it is known as Stokes' theorem. , in two forms. The first form relates the outward flux across a simple A curve in the -plane is simple if it does not cross itself. closed curve and the double integral of the divergence over the region bounded by the curve .   Green's Theorem (Flux-Divergence or Normal Form)   Let be a piecewise smooth, simple closed curve enclosing a region in the plane. Let be a vector field with and having continuous first partial derivatives in an open region containing . Then the outward flux of across equals the double integral of over the region enclosed by :     The second form of Green's theorem connects the counterclockwise circulation of a vector field around a simple closed curve and the double integral of the -component of the curl of the field over the region enclosed by the curve.   Green's Theorem (Circulation-Curl or Tangential Form)   Let be a piecewise smooth, simple closed curve enclosing a region in the plane. Let be a vector field with and having continuous first partial derivatives in an open region containing . Then the counterclockwise circulation of around equals the double integral of over :      Verifying Both Forms on the Unit Circle   Assume that the vector field and the closed curve is the unit circle centered at the origin. Convince yourself of the two forms of Green's theorem by applying them to this example.     We begin by noticing that the unit circle can be parametrized as   After substituting the parametrized equations and into the vector field, we get , and thus   with the partial derivatives   For the first form of Green's theorem, , we have   while the double integral gives the same value:   Whereas the second form of Green's theorem, , can be verified as follows:   and   The field and the curve are shown in ; note that the field has a positive (counterclockwise) circulation, which we calculated above to be . Watch both computations side by side in .    Both forms of Green's theorem verified for on the unit circle: the outward flux equals and the counterclockwise circulation equals .     The vector field and the unit circle . The field has a positive (counterclockwise) circulation around .     field(x,y) = (x - y, x)  circ(t) = (cos(t), sin(t))         \\mathbf{T}    \\mathbf{T}    C                A Line Integral via Green's Theorem and Substitution   Evaluate the line integral   where is the boundary of the square with vertices , , , and , shown in . Make suitable substitutions in your integral to make the limits of integration numbers as opposed to functions.     In this example we have   and thus   Then we can use the tangential form of Green's theorem, , to evaluate the line integral:   The region is the square bounded by the four lines , , , and , so the natural substitution uses the boundary expressions:   under which the region becomes the rectangle , . Solving for and gives , , so the Jacobian is   Therefore   Green's theorem converted the line integral into a double integral, and the substitution exactly the technique of the previous section made its limits constant. See for the animation.    Green's theorem turns the line integral around the tilted square into a double integral of , and the substitution , straightens the square into a rectangle with constant limits.     The square with vertices , , , (left) and the corresponding rectangle , under , (right).          y=x+1    y=-x+3    y=-x+1    y=x-1    R    C                   R'                 An Alternative Form of the Component Test for Conservative Fields  Recall the component test for conservative fields:   Reminder: Component Test for Conservative Fields  Let be a field on a connected and simply connected domain whose component functions have continuous first partial derivatives. Then is conservative if and only if    The three equalities above are equivalent to , since   So to check whether a vector field is conservative or not, we can check whether its curl is zero or not.   Conservative Fields and Green's Theorem   Consider the line integral .     As you know, the vector form of a line integral is . Write down the vector field for the above line integral.    Is this vector field a conservative field? Use the component test to answer.    Using Green's theorem, confirm your answer to part B.         Part A. The vector field is    Part B. Treating as a field in space with ,   and hence the vector field is conservative.   Part C. Using the tangential form of Green's theorem, , for any simple closed curve enclosing a region :   The circulation of a conservative field around every closed curve vanishes, which confirms part B. The animation in shows the field and several closed loops, all with zero circulation.    The conservative field has zero curl, so by Green's theorem its circulation around every closed curve is zero.     "
},
{
  "id": "section-greens-theorem-2-1",
  "level": "2",
  "url": "section-greens-theorem.html#section-greens-theorem-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curl divergence "
},
{
  "id": "fig-div-flux",
  "level": "2",
  "url": "section-greens-theorem.html#fig-div-flux",
  "type": "Figure",
  "number": "15.1",
  "title": "",
  "body": " The flux of the field through the four sides of a small rectangle with corner , width , and height . The pink arrows show the outward components of on each side.     field(x,y) = (0.4*x + 0.25, 0.32*y + 0.18)      (x,y)    (x+\\Delta x, y)    (x, y+\\Delta y)    (x+\\Delta x, y+\\Delta y)        \\mathbf{F}\\cdot\\mathbf{j}\\gt 0    \\mathbf{F}\\cdot(-\\mathbf{j})\\mathrel{\\unicode{x3C}} 0    \\mathbf{F}\\cdot\\mathbf{i}\\gt 0    \\mathbf{F}\\cdot(-\\mathbf{i})\\mathrel{\\unicode{x3C}} 0    A    \\Delta x    \\Delta y                "
},
{
  "id": "sec-divergence-8",
  "level": "2",
  "url": "section-greens-theorem.html#sec-divergence-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "flux density "
},
{
  "id": "sec-divergence-10",
  "level": "2",
  "url": "section-greens-theorem.html#sec-divergence-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "divergence "
},
{
  "id": "def-divergence",
  "level": "2",
  "url": "section-greens-theorem.html#def-divergence",
  "type": "Definition",
  "number": "15.2",
  "title": "",
  "body": "  The divergence of the vector field is defined as   where .   "
},
{
  "id": "fig-div-video",
  "level": "2",
  "url": "section-greens-theorem.html#fig-div-video",
  "type": "Figure",
  "number": "15.3",
  "title": "",
  "body": " The net flux of out of a small rectangle, divided by its area, converges to the divergence as the rectangle shrinks.   "
},
{
  "id": "example-divergence-fields",
  "level": "2",
  "url": "section-greens-theorem.html#example-divergence-fields",
  "type": "Example",
  "number": "15.4",
  "title": "Computing and Interpreting Divergence.",
  "body": " Computing and Interpreting Divergence   The vector fields below represent the velocity field of a gas. Calculate the divergence in each case and explain what it means physically.                 "
},
{
  "id": "fig-div-fields",
  "level": "2",
  "url": "section-greens-theorem.html#fig-div-fields",
  "type": "Figure",
  "number": "15.5",
  "title": "",
  "body": " Left: the field flows away from the origin; its divergence is at every point (the gas expands). Right: the field circulates around the origin; its divergence is (the gas neither expands nor compresses).      fieldA(x,y) = (2*x, 2*y)                 fieldB(x,y) = (-y\/(x^2 + y^2 + 0.2), x\/(x^2 + y^2 + 0.2))               "
},
{
  "id": "sec-curl-2",
  "level": "2",
  "url": "section-greens-theorem.html#sec-curl-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circulation density "
},
{
  "id": "fig-curl-circulation",
  "level": "2",
  "url": "section-greens-theorem.html#fig-curl-circulation",
  "type": "Figure",
  "number": "15.6",
  "title": "",
  "body": " The counterclockwise circulation of around the rectangle: along each side we take the component of in the direction of travel.     field(x,y) = (0.4*x + 0.25, 0.32*y + 0.18)      (x,y)    (x+\\Delta x, y)    (x, y+\\Delta y)    (x+\\Delta x, y+\\Delta y)        \\mathbf{F}\\cdot(-\\mathbf{i})\\mathrel{\\unicode{x3C}} 0    \\mathbf{F}\\cdot\\mathbf{i}\\gt 0    \\mathbf{F}\\cdot\\mathbf{j}\\gt 0    \\mathbf{F}\\cdot(-\\mathbf{j})\\mathrel{\\unicode{x3C}} 0    A    \\Delta x    \\Delta y                "
},
{
  "id": "sec-curl-11",
  "level": "2",
  "url": "section-greens-theorem.html#sec-curl-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-component of curl "
},
{
  "id": "def-curl-k",
  "level": "2",
  "url": "section-greens-theorem.html#def-curl-k",
  "type": "Definition",
  "number": "15.7",
  "title": "",
  "body": "  The -component of the curl of the vector field is    "
},
{
  "id": "sec-curl-13",
  "level": "2",
  "url": "section-greens-theorem.html#sec-curl-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paddle wheel "
},
{
  "id": "fig-curl-video",
  "level": "2",
  "url": "section-greens-theorem.html#fig-curl-video",
  "type": "Figure",
  "number": "15.8",
  "title": "",
  "body": " The counterclockwise circulation of around a small rectangle, divided by its area, converges to the -component of curl. A paddle wheel placed in the fluid spins counterclockwise where the curl is positive.   "
},
{
  "id": "example-curl-fields",
  "level": "2",
  "url": "section-greens-theorem.html#example-curl-fields",
  "type": "Example",
  "number": "15.9",
  "title": "Computing and Interpreting Curl.",
  "body": " Computing and Interpreting Curl   The vector fields below represent the velocity field of a fluid. Calculate the curl in each case and explain what it means physically.                 "
},
{
  "id": "fig-curl-fields",
  "level": "2",
  "url": "section-greens-theorem.html#fig-curl-fields",
  "type": "Figure",
  "number": "15.10",
  "title": "",
  "body": " Left: the radial field has : a paddle wheel does not spin. Right: the rotational field has : a paddle wheel spins counterclockwise everywhere.      fieldA(x,y) = (2*x, 2*y)                 fieldB(x,y) = (-2*y, 2*x)               "
},
{
  "id": "sec-greens-theorem-forms-2",
  "level": "2",
  "url": "section-greens-theorem.html#sec-greens-theorem-forms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple "
},
{
  "id": "thm-green-normal",
  "level": "2",
  "url": "section-greens-theorem.html#thm-green-normal",
  "type": "Theorem",
  "number": "15.11",
  "title": "Green’s Theorem (Flux-Divergence or Normal Form).",
  "body": " Green's Theorem (Flux-Divergence or Normal Form)   Let be a piecewise smooth, simple closed curve enclosing a region in the plane. Let be a vector field with and having continuous first partial derivatives in an open region containing . Then the outward flux of across equals the double integral of over the region enclosed by :    "
},
{
  "id": "thm-green-tangential",
  "level": "2",
  "url": "section-greens-theorem.html#thm-green-tangential",
  "type": "Theorem",
  "number": "15.12",
  "title": "Green’s Theorem (Circulation-Curl or Tangential Form).",
  "body": " Green's Theorem (Circulation-Curl or Tangential Form)   Let be a piecewise smooth, simple closed curve enclosing a region in the plane. Let be a vector field with and having continuous first partial derivatives in an open region containing . Then the counterclockwise circulation of around equals the double integral of over :    "
},
{
  "id": "example-green-circle",
  "level": "2",
  "url": "section-greens-theorem.html#example-green-circle",
  "type": "Example",
  "number": "15.13",
  "title": "Verifying Both Forms on the Unit Circle.",
  "body": " Verifying Both Forms on the Unit Circle   Assume that the vector field and the closed curve is the unit circle centered at the origin. Convince yourself of the two forms of Green's theorem by applying them to this example.   "
},
{
  "id": "fig-green-circle-video",
  "level": "2",
  "url": "section-greens-theorem.html#fig-green-circle-video",
  "type": "Figure",
  "number": "15.14",
  "title": "",
  "body": " Both forms of Green's theorem verified for on the unit circle: the outward flux equals and the counterclockwise circulation equals .   "
},
{
  "id": "fig-green-circle",
  "level": "2",
  "url": "section-greens-theorem.html#fig-green-circle",
  "type": "Figure",
  "number": "15.15",
  "title": "",
  "body": " The vector field and the unit circle . The field has a positive (counterclockwise) circulation around .     field(x,y) = (x - y, x)  circ(t) = (cos(t), sin(t))         \\mathbf{T}    \\mathbf{T}    C              "
},
{
  "id": "example-green-diamond",
  "level": "2",
  "url": "section-greens-theorem.html#example-green-diamond",
  "type": "Example",
  "number": "15.16",
  "title": "A Line Integral via Green’s Theorem and Substitution.",
  "body": " A Line Integral via Green's Theorem and Substitution   Evaluate the line integral   where is the boundary of the square with vertices , , , and , shown in . Make suitable substitutions in your integral to make the limits of integration numbers as opposed to functions.   "
},
{
  "id": "fig-green-diamond-video",
  "level": "2",
  "url": "section-greens-theorem.html#fig-green-diamond-video",
  "type": "Figure",
  "number": "15.17",
  "title": "",
  "body": " Green's theorem turns the line integral around the tilted square into a double integral of , and the substitution , straightens the square into a rectangle with constant limits.   "
},
{
  "id": "fig-green-diamond",
  "level": "2",
  "url": "section-greens-theorem.html#fig-green-diamond",
  "type": "Figure",
  "number": "15.18",
  "title": "",
  "body": " The square with vertices , , , (left) and the corresponding rectangle , under , (right).          y=x+1    y=-x+3    y=-x+1    y=x-1    R    C                   R'             "
},
{
  "id": "example-conservative-green",
  "level": "2",
  "url": "section-greens-theorem.html#example-conservative-green",
  "type": "Example",
  "number": "15.19",
  "title": "Conservative Fields and Green’s Theorem.",
  "body": " Conservative Fields and Green's Theorem   Consider the line integral .     As you know, the vector form of a line integral is . Write down the vector field for the above line integral.    Is this vector field a conservative field? Use the component test to answer.    Using Green's theorem, confirm your answer to part B.      "
},
{
  "id": "fig-conservative-video",
  "level": "2",
  "url": "section-greens-theorem.html#fig-conservative-video",
  "type": "Figure",
  "number": "15.20",
  "title": "",
  "body": " The conservative field has zero curl, so by Green's theorem its circulation around every closed curve is zero.   "
},
{
  "id": "section-surface-integrals",
  "level": "1",
  "url": "section-surface-integrals.html",
  "type": "Section",
  "number": "16",
  "title": "Surface Integrals: Flux Through a Surface",
  "body": " Surface Integrals: Flux Through a Surface   How much fluid crosses a surface per unit time? For a flat surface in a constant velocity field the answer is a single dot product; for a curved surface in a varying field it is a surface integral . In this section we build the surface integral in three steps: we learn how to parametrize a surface, how to use the parametrization to find a normal vector, and how to combine the two to compute the flux of a vector field.     Flux Through a Flat Surface  Suppose water flows with constant velocity through a flat surface of area that is perpendicular to the flow. In one second, the block of water that passes through has volume , so   measured in units of . If instead the surface is tilted, so that the flow meets it at an angle away from the normal direction, only the component of the velocity perpendicular to the surface pushes water through it, and the flow rate picks up a factor of :   where is the unit normal to the surface and is the normal vector whose length equals the area of , as in . Note that the flow rate is the dot product of the vector field whose flux we wish to compute and the normal vector whose length is equal to the surface area of .   A tilted plate of area in a uniform flow . Only the component of along the normal carries fluid through the plate, so the flow rate is .   A tilted plate in a uniform flow, with its normal vector and the angle between the normal and the velocity marked.   A blue parallelogram-shaped plate stands tilted in a uniform flow of parallel gray velocity arrows pointing up and to the right. A magenta arrow , normal to the plate, makes an angle with the velocity arrows.      Our goal is to generalize the above scenario in two respects: (I) we generalize the surface (not just a plane), and (II) we generalize the vector field (not just a constant). To achieve this goal, we will need to learn: (I) how to parametrize a surface ; (II) how to use the parametrization of to find the normal vector ; and (III) how to use (I) and (II) to compute the flux of a vector field. Watch for the flat-plate picture.   Flow through a flat plate: perpendicular flow carries volume per second, and tilting the plate by an angle reduces the flow rate to .       Parametric Surfaces  Recall how we parametrize curves in the -plane: the parabola is traced by for ; only one parameter is needed. A surface is two-dimensional, so its parametrization needs two parameters.   Parametrizing Surfaces   Find parametric representations for each of the following surfaces.                         Part A. The constraint is . Starting from the position vector of an arbitrary point and imposing the constraint, we get   the position vector of a point located on the paraboloid; the two parameters are and themselves. In cylindrical coordinates the same paraboloid is   In spherical coordinates , substituting , , into gives , so on the surface, and    Part B. The surface is a sphere of radius , so spherical coordinates with give    Part C. The surface is a cylinder of radius around the -axis. The angle parametrizes the circle and is free:   In each case, two parameters sweep out the two-dimensional surface; see .    Parametrizing the paraboloid , the sphere of radius , and the cylinder : two parameters sweep out coordinate grids on each surface.       The Normal Vector to a Surface  Consider the unit sphere with its spherical parametrization   Our goal is to find the normal to the sphere at every point on its surface. Holding one parameter fixed and varying the other produces two tangent vectors,   so that the two edges of a small coordinate patch on the sphere are approximately and , as in . Their cross product is perpendicular to the patch, so it gives a normal vector, and its length gives the area of the patch:    A small coordinate patch on the unit sphere. The tangent vectors and span the patch, and their cross product points along the outward normal .   A wireframe piece of a sphere with two tangent vectors and the normal vector drawn at a point.   A wireframe octant of the unit sphere. At a point on the surface, a blue tangent vector points east along a parallel, a red tangent vector points south along a meridian, a small shaded patch lies between them, and a green arrow points radially outward, perpendicular to both.      Let us carry out this computation for the sphere. The tangent vectors are   and their cross product is   Normalizing, and using the fact that on the sphere,   the unit normal to the sphere at a point is simply the position vector of that point it points radially outward, as expected. The animation in builds this construction step by step.   The tangent vectors and span a small patch of the sphere; their cross product is normal to the surface and its length measures the patch area.       Oriented Surfaces  For a closed surface , that is, a surface that is the boundary of a solid region , the convention is that the positive orientation is the one for which the normal vectors point outward from , and inward-pointing normals give the negative orientation.   Two Orientations of a Cylinder   Consider the cylinder . Describe its two possible orientations.     The normal vector can be described as the vector orthogonal to the curved surface of the cylinder pointing outward (or pointing away from the -axis), whereas the normal vector points inward (or toward the -axis), as in . The two orientations are opposite: .    The cylinder with its two possible orientations: points away from the -axis and points toward it.   A cylinder around the vertical axis with an outward normal arrow and an inward normal arrow at the same point.   A translucent cylinder of radius one around the -axis. At a point on its curved surface, a magenta arrow points horizontally away from the axis, and a teal arrow points from the same point horizontally toward the axis.         The Surface Integral of a Vector Field  The following definition should be compared to the definition of the line integral of a vector field along a curve , i.e. , where was defined as the unit tangent vector to the curve . For a surface, the unit tangent is replaced by the unit normal.    If is a continuous vector field defined on an oriented surface with unit normal vector , then the surface integral of over is   This integral is also called the flux of across .     If the surface is parametrized with respect to and , we can write the unit normal vector as , which can be combined with the fact that (from ) to write the surface integral as   where is the region of the parameters in the -plane. The normalizing length cancels against the area factor, which is what makes this formula so computable.   For instance, if the vector field is the velocity field of a fluid, then the surface integral of over the surface is the net rate at which fluid is crossing in the chosen positive direction. As another example, if the vector field represents the electric field due to a charged particle such as an electron, then the surface integral of over the surface corresponds to the flux of the electric field through the surface .   Flux Across the Unit Sphere   Find the flux of the vector field across the unit sphere .     We begin by remembering that a sphere of radius one centered at the origin can be parametrized as   where and . This means that we can use the formula for surface integrals, , to compute the flux. From the previous subsection,   which points outward. Substituting the parametrization into ,   so the integrand is   Now we integrate over the parameter region:   See for the animation of the field crossing the sphere.    The flux of across the unit sphere equals .     Flux Across a Closed Surface   Evaluate the surface integral , where and the surface is the boundary of the solid region enclosed by the paraboloid and the plane .     The closed surface consists of two pieces, shown in : the paraboloid cap and the unit disk in the plane . With the positive (outward) orientation, the normal on must point up and away from the solid, while the normal on must point straight down.  For the paraboloid we use the graph parametrization , whose normal is   Note that the -component of this normal vector is positive, so it points upward and outward from the solid, as required. For the disk in the -plane we can write , which gives ; this points upward, and to make it point downward (outward from the solid) we merely need to multiply by minus one to get . Finally, the surface integral is evaluated using , split over the two pieces:   On , with the unit disk in the -plane,   and by symmetry (the integrand is odd in ), so switching to polar coordinates,   On we have , so   Adding the two pieces,   The animation in walks through both pieces of the surface.    The closed surface made of the paraboloid cap and the disk , with outward normals: the flux of through it equals .     The boundary of the solid enclosed by and : the cap with upward-and-outward normals, and the disk with downward normals.   A paraboloid dome over a disk, with outward normal arrows on the dome and downward normal arrows on the disk.   A translucent blue dome, the paraboloid , labeled , sits over the unit disk in the -plane, labeled . Magenta arrows on the dome point up and outward, and magenta arrows below the disk point straight down: together they give the closed surface its positive, outward orientation.       "
},
{
  "id": "section-surface-integrals-2-1",
  "level": "2",
  "url": "section-surface-integrals.html#section-surface-integrals-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "surface integral "
},
{
  "id": "fig-flux-plate",
  "level": "2",
  "url": "section-surface-integrals.html#fig-flux-plate",
  "type": "Figure",
  "number": "16.1",
  "title": "",
  "body": " A tilted plate of area in a uniform flow . Only the component of along the normal carries fluid through the plate, so the flow rate is .   A tilted plate in a uniform flow, with its normal vector and the angle between the normal and the velocity marked.   A blue parallelogram-shaped plate stands tilted in a uniform flow of parallel gray velocity arrows pointing up and to the right. A magenta arrow , normal to the plate, makes an angle with the velocity arrows.     "
},
{
  "id": "fig-flux-plate-video",
  "level": "2",
  "url": "section-surface-integrals.html#fig-flux-plate-video",
  "type": "Figure",
  "number": "16.2",
  "title": "",
  "body": " Flow through a flat plate: perpendicular flow carries volume per second, and tilting the plate by an angle reduces the flow rate to .   "
},
{
  "id": "example-parametric-surfaces",
  "level": "2",
  "url": "section-surface-integrals.html#example-parametric-surfaces",
  "type": "Example",
  "number": "16.3",
  "title": "Parametrizing Surfaces.",
  "body": " Parametrizing Surfaces   Find parametric representations for each of the following surfaces.                      "
},
{
  "id": "solution-parametric-surfaces-3",
  "level": "2",
  "url": "section-surface-integrals.html#solution-parametric-surfaces-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cylindrical coordinates "
},
{
  "id": "solution-parametric-surfaces-5",
  "level": "2",
  "url": "section-surface-integrals.html#solution-parametric-surfaces-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spherical coordinates "
},
{
  "id": "fig-parametric-surfaces-video",
  "level": "2",
  "url": "section-surface-integrals.html#fig-parametric-surfaces-video",
  "type": "Figure",
  "number": "16.4",
  "title": "",
  "body": " Parametrizing the paraboloid , the sphere of radius , and the cylinder : two parameters sweep out coordinate grids on each surface.   "
},
{
  "id": "fig-sphere-patch",
  "level": "2",
  "url": "section-surface-integrals.html#fig-sphere-patch",
  "type": "Figure",
  "number": "16.5",
  "title": "",
  "body": " A small coordinate patch on the unit sphere. The tangent vectors and span the patch, and their cross product points along the outward normal .   A wireframe piece of a sphere with two tangent vectors and the normal vector drawn at a point.   A wireframe octant of the unit sphere. At a point on the surface, a blue tangent vector points east along a parallel, a red tangent vector points south along a meridian, a small shaded patch lies between them, and a green arrow points radially outward, perpendicular to both.     "
},
{
  "id": "fig-surface-normal-video",
  "level": "2",
  "url": "section-surface-integrals.html#fig-surface-normal-video",
  "type": "Figure",
  "number": "16.6",
  "title": "",
  "body": " The tangent vectors and span a small patch of the sphere; their cross product is normal to the surface and its length measures the patch area.   "
},
{
  "id": "sec-oriented-surfaces-2",
  "level": "2",
  "url": "section-surface-integrals.html#sec-oriented-surfaces-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "closed surface positive orientation "
},
{
  "id": "example-cylinder-orientation",
  "level": "2",
  "url": "section-surface-integrals.html#example-cylinder-orientation",
  "type": "Example",
  "number": "16.7",
  "title": "Two Orientations of a Cylinder.",
  "body": " Two Orientations of a Cylinder   Consider the cylinder . Describe its two possible orientations.   "
},
{
  "id": "fig-cylinder-normals",
  "level": "2",
  "url": "section-surface-integrals.html#fig-cylinder-normals",
  "type": "Figure",
  "number": "16.8",
  "title": "",
  "body": " The cylinder with its two possible orientations: points away from the -axis and points toward it.   A cylinder around the vertical axis with an outward normal arrow and an inward normal arrow at the same point.   A translucent cylinder of radius one around the -axis. At a point on its curved surface, a magenta arrow points horizontally away from the axis, and a teal arrow points from the same point horizontally toward the axis.     "
},
{
  "id": "def-surface-integral",
  "level": "2",
  "url": "section-surface-integrals.html#def-surface-integral",
  "type": "Definition",
  "number": "16.9",
  "title": "",
  "body": "  If is a continuous vector field defined on an oriented surface with unit normal vector , then the surface integral of over is   This integral is also called the flux of across .   "
},
{
  "id": "remark-flux-param",
  "level": "2",
  "url": "section-surface-integrals.html#remark-flux-param",
  "type": "Remark",
  "number": "16.10",
  "title": "",
  "body": " If the surface is parametrized with respect to and , we can write the unit normal vector as , which can be combined with the fact that (from ) to write the surface integral as   where is the region of the parameters in the -plane. The normalizing length cancels against the area factor, which is what makes this formula so computable.  "
},
{
  "id": "example-sphere-flux",
  "level": "2",
  "url": "section-surface-integrals.html#example-sphere-flux",
  "type": "Example",
  "number": "16.11",
  "title": "Flux Across the Unit Sphere.",
  "body": " Flux Across the Unit Sphere   Find the flux of the vector field across the unit sphere .   "
},
{
  "id": "fig-sphere-flux-video",
  "level": "2",
  "url": "section-surface-integrals.html#fig-sphere-flux-video",
  "type": "Figure",
  "number": "16.12",
  "title": "",
  "body": " The flux of across the unit sphere equals .   "
},
{
  "id": "example-paraboloid-flux",
  "level": "2",
  "url": "section-surface-integrals.html#example-paraboloid-flux",
  "type": "Example",
  "number": "16.13",
  "title": "Flux Across a Closed Surface.",
  "body": " Flux Across a Closed Surface   Evaluate the surface integral , where and the surface is the boundary of the solid region enclosed by the paraboloid and the plane .   "
},
{
  "id": "fig-paraboloid-flux-video",
  "level": "2",
  "url": "section-surface-integrals.html#fig-paraboloid-flux-video",
  "type": "Figure",
  "number": "16.14",
  "title": "",
  "body": " The closed surface made of the paraboloid cap and the disk , with outward normals: the flux of through it equals .   "
},
{
  "id": "fig-paraboloid-flux",
  "level": "2",
  "url": "section-surface-integrals.html#fig-paraboloid-flux",
  "type": "Figure",
  "number": "16.15",
  "title": "",
  "body": " The boundary of the solid enclosed by and : the cap with upward-and-outward normals, and the disk with downward normals.   A paraboloid dome over a disk, with outward normal arrows on the dome and downward normal arrows on the disk.   A translucent blue dome, the paraboloid , labeled , sits over the unit disk in the -plane, labeled . Magenta arrows on the dome point up and outward, and magenta arrows below the disk point straight down: together they give the closed surface its positive, outward orientation.     "
},
{
  "id": "section-divergence-theorem",
  "level": "1",
  "url": "section-divergence-theorem.html",
  "type": "Section",
  "number": "17",
  "title": "The Divergence Theorem",
  "body": " The Divergence Theorem   In we saw that the divergence of a two-dimensional field measures its flux density, and Green's theorem (in its normal form) converted a flux integral around a closed curve into a double integral of the divergence. In this section we extend both ideas to three dimensions: the result is Gauss's divergence theorem , which converts a flux integral over a closed surface often a lengthy parametrized computation, as in into an ordinary triple integral.     Divergence in 3D  Recall from that in 2D the divergence of is , the flux density of the field at a point: positive where the gas expands, negative where it is compressed (see ). The three-dimensional definition adds one term.    Consider the vector field . Then the divergence of is defined as     If the vector field represents the velocity field of a flowing gas, then the divergence of corresponds to the amount of compression or expansion of the gas at the point .   Expanding or Compressing?   Consider the following velocity fields of a gas, and in each case determine whether the gas is expanding or compressing.                             We calculate the divergence of the given vector fields in each case using .   Part A.  : the gas is expanding, at the same rate at every point. This radial field is shown on the left in .   Part B.  : the gas is being compressed; the field is the reverse of the one in part A, with all arrows pointing toward the origin.   Part C.  : the gas is neither expanding nor being compressed this field rotates rigidly about the -axis, as on the right in .   Part D. Writing , a direct computation with the quotient rule gives   Again, the gas is neither expanding nor being compressed: even though the arrows point outward, they weaken with distance at exactly the rate that preserves volume. (This is the field of a point charge in electrostatics.) The animation in shows all four fields.    Four velocity fields and their divergences: expanding ( ), compressing ( ), rotating ( ), and the inverse-square field ( ).     Left: the field points radially outward and expands the gas ( ). Right: the field rotates about the -axis without expansion ( ).   Two 3D vector field plots: one with arrows radiating from the origin, one with arrows circulating around the vertical axis.   Two three-dimensional coordinate boxes. In the left box, blue arrows point away from the origin in every direction, growing longer with distance: the field . In the right box, blue arrows lie in horizontal planes and circulate counterclockwise around the -axis: the field .         Gauss's Divergence Theorem  The divergence theorem relates the outward flux through the surface boundary of a 3D region to the triple integral over the volume of the enclosed region.   Gauss's Divergence Theorem   Let be a vector field whose components have continuous first partial derivatives, and let be a piecewise smooth oriented closed surface. The flux of across in the direction of the surface's outward unit normal field equals the integral of over the region enclosed by the surface:      Flux Through a Sphere, the Easy Way   Use the divergence theorem to compute the flux of the vector field through the sphere .     We calculate the right-hand side of the divergence theorem, . Since ,   Therefore,   with no parametrization, no cross product, and no double integral in sight: the field and its outward-pointing flux are shown in .    The radial field crossing the unit sphere. By the divergence theorem the outward flux is .   A sphere with arrows radiating outward through its surface.   A translucent gray unit sphere centered at the origin. Vermillion arrows pierce the surface from inside, pointing radially outward in every direction and growing with distance from the origin.       Revisiting the Flux of   In we found the flux of across the unit sphere by parametrizing the surface, computing , and integrating a full page of work that produced . Recompute this flux using the divergence theorem.     The divergence is   so by , with the unit sphere and the unit ball ,   in agreement with the long computation in one line. Watch the two sphere computations side by side in .    The divergence theorem converts the flux integrals of and through the unit sphere into triple integrals: and .     Revisiting the Paraboloid, the Easy Way   Evaluate the surface integral , where and the surface is the boundary of the solid region enclosed by the paraboloid and the plane , this time using the divergence theorem.     In we computed this flux by splitting into the cap and the disk , finding a normal vector for each piece, and evaluating two surface integrals. With the divergence theorem the whole computation collapses. The divergence is   so by , using cylindrical coordinates for the solid ( , ),   which agrees with the two-piece surface computation. Whenever the surface is closed and the divergence is simple, the divergence theorem is the tool of choice; see .    The flux of through the closed paraboloid-and-disk surface: the divergence theorem replaces two surface integrals with one triple integral whose value is .     "
},
{
  "id": "section-divergence-theorem-2-1",
  "level": "2",
  "url": "section-divergence-theorem.html#section-divergence-theorem-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gauss's divergence theorem "
},
{
  "id": "def-divergence-3d",
  "level": "2",
  "url": "section-divergence-theorem.html#def-divergence-3d",
  "type": "Definition",
  "number": "17.1",
  "title": "",
  "body": "  Consider the vector field . Then the divergence of is defined as    "
},
{
  "id": "example-divergence-3d",
  "level": "2",
  "url": "section-divergence-theorem.html#example-divergence-3d",
  "type": "Example",
  "number": "17.2",
  "title": "Expanding or Compressing?",
  "body": " Expanding or Compressing?   Consider the following velocity fields of a gas, and in each case determine whether the gas is expanding or compressing.                           "
},
{
  "id": "fig-div3d-video",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-div3d-video",
  "type": "Figure",
  "number": "17.3",
  "title": "",
  "body": " Four velocity fields and their divergences: expanding ( ), compressing ( ), rotating ( ), and the inverse-square field ( ).   "
},
{
  "id": "fig-div3d-fields",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-div3d-fields",
  "type": "Figure",
  "number": "17.4",
  "title": "",
  "body": " Left: the field points radially outward and expands the gas ( ). Right: the field rotates about the -axis without expansion ( ).   Two 3D vector field plots: one with arrows radiating from the origin, one with arrows circulating around the vertical axis.   Two three-dimensional coordinate boxes. In the left box, blue arrows point away from the origin in every direction, growing longer with distance: the field . In the right box, blue arrows lie in horizontal planes and circulate counterclockwise around the -axis: the field .     "
},
{
  "id": "thm-divergence",
  "level": "2",
  "url": "section-divergence-theorem.html#thm-divergence",
  "type": "Theorem",
  "number": "17.5",
  "title": "Gauss’s Divergence Theorem.",
  "body": " Gauss's Divergence Theorem   Let be a vector field whose components have continuous first partial derivatives, and let be a piecewise smooth oriented closed surface. The flux of across in the direction of the surface's outward unit normal field equals the integral of over the region enclosed by the surface:    "
},
{
  "id": "example-divthm-sphere",
  "level": "2",
  "url": "section-divergence-theorem.html#example-divthm-sphere",
  "type": "Example",
  "number": "17.6",
  "title": "Flux Through a Sphere, the Easy Way.",
  "body": " Flux Through a Sphere, the Easy Way   Use the divergence theorem to compute the flux of the vector field through the sphere .   "
},
{
  "id": "fig-divthm-sphere",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-divthm-sphere",
  "type": "Figure",
  "number": "17.7",
  "title": "",
  "body": " The radial field crossing the unit sphere. By the divergence theorem the outward flux is .   A sphere with arrows radiating outward through its surface.   A translucent gray unit sphere centered at the origin. Vermillion arrows pierce the surface from inside, pointing radially outward in every direction and growing with distance from the origin.     "
},
{
  "id": "example-divthm-sphere-zyx",
  "level": "2",
  "url": "section-divergence-theorem.html#example-divthm-sphere-zyx",
  "type": "Example",
  "number": "17.8",
  "title": "Revisiting the Flux of <span class=\"process-math\">\\(\\langle z, y, x \\rangle\\)<\/span>.",
  "body": " Revisiting the Flux of   In we found the flux of across the unit sphere by parametrizing the surface, computing , and integrating a full page of work that produced . Recompute this flux using the divergence theorem.   "
},
{
  "id": "fig-divthm-sphere-video",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-divthm-sphere-video",
  "type": "Figure",
  "number": "17.9",
  "title": "",
  "body": " The divergence theorem converts the flux integrals of and through the unit sphere into triple integrals: and .   "
},
{
  "id": "example-divthm-paraboloid",
  "level": "2",
  "url": "section-divergence-theorem.html#example-divthm-paraboloid",
  "type": "Example",
  "number": "17.10",
  "title": "Revisiting the Paraboloid, the Easy Way.",
  "body": " Revisiting the Paraboloid, the Easy Way   Evaluate the surface integral , where and the surface is the boundary of the solid region enclosed by the paraboloid and the plane , this time using the divergence theorem.   "
},
{
  "id": "fig-divthm-paraboloid-video",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-divthm-paraboloid-video",
  "type": "Figure",
  "number": "17.11",
  "title": "",
  "body": " The flux of through the closed paraboloid-and-disk surface: the divergence theorem replaces two surface integrals with one triple integral whose value is .   "
},
{
  "id": "exercises-hw1",
  "level": "1",
  "url": "exercises-hw1.html",
  "type": "Exercises",
  "number": "",
  "title": "Homework 1",
  "body": " Homework 1   Sections: 13.1 Curves in Space and 13.3 Arc Length in Space.     The curve is the intersection of and . Parametrize .      The curve is a helix of radius and height . Moreover, let denote the number of turns (revolutions) for the helix.   Which spring uses more wire?         Parametrize .      Compute the length of the two springs shown in . Which spring uses more wire? A or B?       Find equation of the tangent line to the curve at the point .      The path of an object is given by Assume that the starting point of the object's motion is the origin. Determine the location of the object after traveling a distance of .    "
},
{
  "id": "ex-hw1-parametrize-intersection",
  "level": "2",
  "url": "exercises-hw1.html#ex-hw1-parametrize-intersection",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  The curve is the intersection of and . Parametrize .   "
},
{
  "id": "ex-hw1-helix",
  "level": "2",
  "url": "exercises-hw1.html#ex-hw1-helix",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  The curve is a helix of radius and height . Moreover, let denote the number of turns (revolutions) for the helix.   Which spring uses more wire?         Parametrize .      Compute the length of the two springs shown in . Which spring uses more wire? A or B?    "
},
{
  "id": "ex-hw1-tangent-line",
  "level": "2",
  "url": "exercises-hw1.html#ex-hw1-tangent-line",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Find equation of the tangent line to the curve at the point .   "
},
{
  "id": "ex-hw1-location",
  "level": "2",
  "url": "exercises-hw1.html#ex-hw1-location",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The path of an object is given by Assume that the starting point of the object's motion is the origin. Determine the location of the object after traveling a distance of .   "
},
{
  "id": "subsec-brain-map",
  "level": "1",
  "url": "subsec-brain-map.html",
  "type": "Section",
  "number": "19",
  "title": "Brain map: the integrals of vector calculus",
  "body": " Brain map: the integrals of vector calculus  The map below gathers every integral of the chapter on one page. Parametrization feeds the line integrals; the five theorems act as bridges, trading an integral over a boundary for an integral over the region, surface, or solid it bounds; and each multiple integral carries its coordinate substitutions. Follow the gold lines. For comfortable reading, open the map full size in a new tab .   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
