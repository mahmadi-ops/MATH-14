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
  "id": "exercises-hw1",
  "level": "1",
  "url": "exercises-hw1.html",
  "type": "Exercises",
  "number": "4",
  "title": "Curves in Space and Arc Length in Space",
  "body": " Curves in Space and Arc Length in Space   Sections: 13.1 Curves in Space and 13.3 Arc Length in Space.     The curve is the intersection of and . Parametrize .      The curve is a helix of radius and height . Moreover, let denote the number of turns (revolutions) for the helix.   Which spring uses more wire?         Parametrize .      Compute the length of the two springs shown in . Which spring uses more wire? A or B?       Find equation of the tangent line to the curve at the point .      The path of an object is given by Assume that the starting point of the object's motion is the origin. Determine the location of the object after traveling a distance of .    "
},
{
  "id": "ex-hw1-parametrize-intersection",
  "level": "2",
  "url": "exercises-hw1.html#ex-hw1-parametrize-intersection",
  "type": "Exercise",
  "number": "4.1",
  "title": "",
  "body": "  The curve is the intersection of and . Parametrize .   "
},
{
  "id": "ex-hw1-helix",
  "level": "2",
  "url": "exercises-hw1.html#ex-hw1-helix",
  "type": "Exercise",
  "number": "4.2",
  "title": "",
  "body": "  The curve is a helix of radius and height . Moreover, let denote the number of turns (revolutions) for the helix.   Which spring uses more wire?         Parametrize .      Compute the length of the two springs shown in . Which spring uses more wire? A or B?    "
},
{
  "id": "ex-hw1-tangent-line",
  "level": "2",
  "url": "exercises-hw1.html#ex-hw1-tangent-line",
  "type": "Exercise",
  "number": "4.3",
  "title": "",
  "body": "  Find equation of the tangent line to the curve at the point .   "
},
{
  "id": "ex-hw1-location",
  "level": "2",
  "url": "exercises-hw1.html#ex-hw1-location",
  "type": "Exercise",
  "number": "4.4",
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
