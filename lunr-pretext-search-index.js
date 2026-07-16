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
