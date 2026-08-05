var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "intro",
  "level": "1",
  "url": "intro.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  This book covers the same vector calculus as a traditional printed text line integrals, multiple integrals, and the big theorems that tie them together but it was written from the start as an interactive, accessible web book rather than a printed page. This preface points out what that makes possible, and what you will find here that a conventional textbook cannot offer.   What this book does that other books do not      Answer boxes that check your work instantly. The assignments and review problems are not just lists of exercises: each problem carries answer boxes that grade themselves the moment you press Check Me , as many times as you like. Each box is checked on its own, so you learn exactly which part of a long computation went wrong something no printed answer key in the back of a book can tell you.     Solutions that arrive where you need them. After each assignment's due date, a complete worked solution appears directly beneath every one of its problems on the same page where you worked them rather than in a separate solutions manual. The review problem sets get their solutions the same way.     A clickable map of the whole course. The big picture map in this front matter draws every integral of the course on one page, with arrows showing what builds on what and gold arrows marking the theorems that bridge the integral types. Every topic on the map is a link into the part of the book where it is covered.     Figures you can move. Many figures are live GeoGebra worksheets: you can rotate a solid of integration with your own hands, drag sliders to refine a Riemann sum box by box, and watch a region of integration change shape instead of staring at one frozen perspective drawing.     Animated proof ideas. The proofs of Green's theorem, Stokes' theorem, and the divergence theorem are accompanied by short animations that show the key idea internal boundaries cancelling, partitions refining unfolding in time, the way an instructor would build it up at the board.     Free, current, and everywhere. The book costs nothing, opens on a phone, a tablet, or a laptop, and can be corrected and improved continuously a fixed typo or a clearer example reaches every reader the same day, with no second edition to buy.       Accessibility  Accessibility is a design goal of this book, not an afterthought. The book is built with PreTeXt, which produces web pages designed to support diverse learners, including readers who use assistive technology:      Mathematics a screen reader can speak. Every formula is real mathematical notation, not a picture of one. Screen readers can read expressions aloud piece by piece, and readers can magnify or explore any formula without it turning into a blur.     Figures built to be described and touched. Diagrams are generated from descriptions of their mathematical content, so the same figure can carry text alternatives for screen readers and can be produced as tactile graphics for readers who are blind or have low vision.     Navigation without a mouse. The book has a consistent structure chapters, sections, and a table of contents on every page that can be traversed entirely from the keyboard.     Type and layout that adapt to the reader. Text reflows to fit any screen and any zoom level, so enlarging the type never forces sideways scrolling, and the reading experience is the same on a phone as on a desktop monitor.     If any part of this book does not work well with the tools you use to read it, please let the author know, so it can be fixed for you and for every reader after you.   "
},
{
  "id": "subsec-brain-map",
  "level": "1",
  "url": "subsec-brain-map.html",
  "type": "Preface",
  "number": "",
  "title": "The big picture",
  "body": " The big picture  The map below gathers every integral of this book on one page. Parametrization feeds the line integrals; the five theorems act as bridges, trading an integral over a boundary for an integral over the region, surface, or solid it bounds; and each multiple integral carries its coordinate substitutions. An arrow between two topics means the second builds on the first, and the gold arrows mark the theorem and substitution bridges between the integral types. Every topic on the map is a link to the part of the book where it is covered. For comfortable reading, open the map full size in a new tab .   "
},
{
  "id": "sec-parametrization",
  "level": "1",
  "url": "sec-parametrization.html",
  "type": "Section",
  "number": "1.1",
  "title": "Parametrization of Curves",
  "body": " Parametrization of Curves     Describe the motion of a point in the plane with a pair of parametric equations and , and understand the parameter as recording when the point visits each place on the curve.    Sketch a parametric curve from a table of values, and indicate the direction of increasing in which the curve is traced.    Find parametric equations for common curves, such as lines, circles, and ellipses, and eliminate the parameter to recover a Cartesian equation when possible.    Distinguish the intersection points of two parametric curves from their collision points , where two moving objects reach the same place at the same time.    Write a space curve as a vector function , and parametrize the curve in which two surfaces meet.      Imagine that you would like to describe the motion of an object whose motion is confined to a plane. If you know how its Cartesian coordinates, and , change as time passes, you will be able to draw a curve that represents the trajectory of its motion. Mathematically, we will need two equations to demonstrate how the and -coordinates evolve in time , which are known as the parametric equations. This section reviews that language and then extends it to curves in space, where it becomes the main tool for everything that follows.     Parametric Equations   Parametric Equations   If and are given as functions of a third variable , called a parameter , by   then the points trace out a curve in the plane, called a parametric curve . The equations and are the parametric equations of the curve.    As runs over its interval, the point moves, and the trail it leaves behind is the curve. The parameter therefore carries more information than the picture does: it also records when the moving point is at each place, as in .   The trajectory of a moving point whose coordinates are given by the parametric equations , . At the instant the point is at .   A curved trajectory in the plane with a marked point and dashed lines dropping to the two coordinate axes.   A smooth curve rises and falls across the first quadrant from a starting point A, reached at time t equals a, to an ending point B, reached at time t equals b. A single point on the curve is marked; dashed gray segments run from it straight down to the x axis, where the value is labeled f of t nought, and straight left to the y axis, where the value is labeled g of t nought. An arrow on the curve shows the direction of increasing t.     c(t) = (t, 2 + sin(t))  t0 = 2  P = c(t0)       C       A,\\ t=a     B,\\ t=b         \\left(f(t_0),g(t_0)\\right)    f(t_0)    g(t_0)                  As an example, consider and . Let us calculate some of the points .   Points on the curve ,                                   Plotting these points and connecting them, we recognize the parabola , traced from left to right as increases from to . See .   The curve , is the parabola . The marked points correspond to the integer values from , and the arrow shows the direction of increasing .   The parabola y equals x squared with seven marked points and an arrow showing that it is traced from left to right.   The parabola y equals x squared drawn on a coordinate grid for x between minus three and three. Seven dots on the curve mark the points obtained from the integer parameter values t equals minus three through three, namely minus three comma nine, minus two comma four, minus one comma one, the origin, one comma one, two comma four, and three comma nine. An arrowhead partway up the right branch shows that the curve is traced from left to right as t increases.     f(t) = (t, t^2)       y=x^2         t=-3    t=0    t=3                 As our second example, consider the equation of the circle centered at with unit radius,   Here, we would like to parametrize and in terms of a single parameter in such a way that by varying the value of , we can reconstruct the circle . Remember that , so one way to achieve our goal is to write   where . The parametrization is illustrated in .   Parametrizing the unit circle by , , . A generic point of the circle corresponds to the parameter value .   The unit circle traced counterclockwise, with the four quarter points marked and one generic point at parameter value t nought.   The unit circle on a coordinate grid, traced counterclockwise as indicated by an arrowhead. Four dots mark the points reached at t equals zero, at one comma zero; t equals pi over two, at zero comma one; t equals pi, at minus one comma zero; and t equals three pi over two, at zero comma minus one. A fifth dot part way around the first quadrant marks a generic point cosine t nought, sine t nought, joined to the origin by a segment that makes the angle t nought with the positive x axis.     c(t) = (cos(t), sin(t))  t0 = 0.9          t=0     t=\\pi\/2     t=\\pi     t=3\\pi\/2        \\left(\\cos t_0,\\ \\sin t_0\\right)    t_0                   Question   Can you think of another way to write a parametric form of the circle ?    Nothing forces the point to start at , to travel counterclockwise, or to go around exactly once.    For instance , , or , .    Taking and with gives the same circle, but starting at and traced clockwise . Taking and with also gives the same circle, traced counterclockwise but twice . A curve has many parametrizations: the picture does not determine the schedule.       Some Examples of Parametrizing Curves   Parametrizing Curves   Find the parametric equations corresponding to the following curves.    The line segment connecting the two points and .    The ellipse .    The circle of radius centered at .       Part A. The segment lies on the line , so we may take   At we are at the point , and at we arrive at the point . See .   Part A: the segment , , , which starts at when and ends at when .   The straight segment from the point (0,1) down to the point (1,0), with an arrow pointing from the first to the second.   A straight segment on a coordinate grid joining the point zero comma one on the y axis to the point one comma zero on the x axis. Both endpoints are marked with dots and labeled with the parameter values t equals zero and t equals one, and an arrowhead on the segment points from the first toward the second.     s(t) = (t, 1-t)          (0,1),\\ t=0     (1,0),\\ t=1                  Part B. Guided by the unit circle , we take   To verify, note that   See .   Part B: the ellipse , , , traced counterclockwise.   An ellipse taller than it is wide, traced counterclockwise, with its four axis points marked.   An ellipse on a coordinate grid, two units wide in the x direction and three units tall in the y direction, centered at the origin. Four dots mark the points reached at t equals zero, at two comma zero; t equals pi over two, at zero comma three; t equals pi, at minus two comma zero; and t equals three pi over two, at zero comma minus three. An arrowhead shows that the ellipse is traced counterclockwise.     e(t) = (2*cos(t), 3*sin(t))          t=0     t=\\pi\/2     t=\\pi     t=3\\pi\/2                  Part C. The equation of such a circle in Cartesian coordinates is , so we shift the standard parametrization of a circle of radius by units in the -direction:   To verify, note that   See .   Part C: the circle , , , of radius centered at .   A circle of radius two centered at the point (2,0), passing through the origin, traced counterclockwise.   A circle of radius two on a coordinate grid, centered at the point two comma zero, which is marked with a cross. The circle passes through the origin on the left and through the point four comma zero on the right. A dot marks the starting point four comma zero, reached at t equals zero, and an arrowhead shows that the circle is traced counterclockwise.     k(t) = (2*cos(t)+2, 2*sin(t))          (2,0)     t=0                      Intersection Points versus Collision Points  A parametrization carries more information than the curve it traces: it also records when the moving point visits each place on the curve. Because of this, there are two different questions we can ask about two parametric curves   thought of as the trajectories of two particles.   Intersection Points and Collision Points   A point is an intersection point of the two curves if lies on both curves; that is, if there are parameter values and , not necessarily equal, with   A point is a collision point of the two particles if both particles are at at the same time; that is, if there is a single value of with     An intersection point is a statement about the two paths : they cross, like two roads on a map. A collision point is a statement about the two motions : the cars are at the crossroads at the same instant. Every collision point is automatically an intersection point, but, as the next two examples show, an intersection point need not be a collision point.  In practice this dictates how we set up the equations.    To find intersection points , give the two curves different parameter names and solve , for the pair . Equivalently, eliminate the parameters and intersect the two Cartesian curves.    To find collision points , use the same parameter in both curves and solve , for .    In the next two examples the two paths are always the same: the parabola and the line . Setting gives , so the paths meet at the two points   Only the schedule of the second particle will change.   The paths cross, but the particles never meet   Two particles move in the plane with position vectors   Find all intersection points of their paths, and all collision points of the particles.     Paths. Eliminating the parameter, the first particle traces the parabola . For the second, and , so it traces the line . As computed in , the two paths intersect at and .   Collisions. A collision requires a single with   The first equation forces , but then while . There is no solution, so the particles never collide.  We can see exactly how they miss each other. The first particle is at when , while the second particle arrives there only at . Similarly, the first particle reaches at , long after the second particle passed through it at . Each intersection point is visited twice, but never simultaneously. See .   The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.   A parabola and a line crossing at two points, each labeled with the two different times at which the particles pass through it.   The parabola y equals x squared and the line y equals x plus two drawn on the same coordinate grid, crossing at the points minus one comma one and two comma four. Each crossing is marked with a dot and labeled with two different parameter values: at minus one comma one the first particle arrives at t equals minus one and the second at t equals one, and at two comma four the first arrives at t equals two and the second at t equals minus two.     p(t) = (t, t^2)  l(t) = (-t, 2-t)        C_1       C_2         (-1,1)    C_1: t=-1    C_2: t=1      (2,4)    C_1: t=2    C_2: t=-2                     The same paths, a different schedule now they collide   Keep the first particle, but re-schedule the second one:   Find the intersection points of the paths and the collision points of the particles.     Paths. For the second particle, and , so it travels along the very same line as before, only faster and in the opposite direction. The paths are therefore unchanged, and they still intersect at the points , and .   Collisions. Now a collision requires a single with   The first equation gives , and this value does satisfy the second equation, since . Hence the particles do collide, at   The other intersection point is not a collision point: the first particle passes through at , while the second particle passes through it at . Two intersection points, but only one collision. See .   The same two paths as in . The point is now a collision point, reached by both particles at , while remains an intersection point that is not a collision point.   The same parabola and line, with the crossing at (2,4) highlighted as a collision point reached by both particles at time t equals two.   The parabola y equals x squared and the line y equals x plus two crossing at minus one comma one and at two comma four. The point two comma four is drawn as a large highlighted dot and labeled as a collision point, reached by both particles at time t equals two, while the particles pass through minus one comma one at the different times t equals minus one and t equals one half.     p(t) = (t, t^2)  l(t) = (t, t+2)        C_1       C_2         (-1,1)    C_1: t=-1    C_2: t=\\tfrac12         (2,4)    \\text{collision}    \\text{at } t=2                      Every collision is an intersection, but not conversely  If two particles collide at , then certainly lies on both paths, so every collision point is an intersection point. The converse fails: the paths may cross at a point that the two particles visit at different times. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.     Keep . Find a parametrization of the line for which the two particles collide at both intersection points.    Try to arrange that the second particle has the same -coordinate as the first one at every time .     .    With the collision equations become and , that is, . Thus gives the collision at and gives the collision at : both intersection points are now collision points.       Curves in Space and Vector Functions  Assume that we are interested in describing the path of an object in space. To this aim, we can specify its location at each instant of time; that is, we can write its coordinates in as   Here is the time parameter, which varies from some initial time to some final time , that is, . Nothing has changed except the bookkeeping: where a plane curve needed the two equations , a space curve needs three.  There is a second, more compact way to look at , and it is the point of view we will use for the rest of the course. Instead of three separate coordinate equations, collect the coordinates into a single vector function  a function whose input is a real number and whose output is a vector:   Think of as the position vector of the moving object: an arrow drawn from the origin to the object's location at time . As increases, the arrow swings around and changes length, and its tip sweeps out the curve. So a parametrization can be read in two equivalent ways.     Coordinatewise. Three ordinary scalar functions , , of one variable, one for each coordinate, as in .     Vectorially. One vector-valued function of one variable, as in . The curve is the set of tips of the vectors .    The two descriptions carry exactly the same information, but the vector form is the more useful one: it lets us differentiate and integrate a whole motion at once, and will turn out to be the velocity of the moving object. The same device works in the plane, where ; the position vectors and of were already written this way.   A helix   Consider the object whose coordinates are parametrized by   Write the motion as a vector function and describe the path.    Collecting into a single vector function,   The first two coordinates satisfy , so the shadow of the path on the -plane is the unit circle, and as runs from to the angle runs from to : the shadow goes around exactly once. Meanwhile increases steadily, so the object climbs at a constant rate while circling. The path is therefore one full turn of a helix , shown in . The motion begins at at time and ends at at time , directly above the starting point.   One turn of the helix , . The violet arrow is the position vector at ; its tip rides along the curve as increases. The dashed gray circle is the shadow of the path on the plane .   One turn of a helix rising above the unit circle, with the position vector drawn from the origin to a point on the curve.   A three-dimensional coordinate box with x and y running from minus 1.3 to 1.3 and z from 0 to about 3.4. A thick blue curve spirals counterclockwise once around the vertical axis while climbing steadily, starting at a red point labeled (1,0,0) at time t equals zero on the floor of the box and ending at a red point labeled (1,0,pi) at time t equals pi, directly above the start. A dashed gray unit circle on the floor is the shadow of the path. A violet arrow labeled r of t runs from the origin to a point partway up the curve, illustrating the position vector whose tip traces the helix.        There are situations in which a curve in space arises as the intersection of two surfaces. In the next two examples we turn such a description into a vector function .   Where a plane cuts a cylinder   Find a vector function that represents the curve of intersection of the cylinder and the plane .    As shown in , the intersection of the two surfaces is an ellipse. Furthermore, its projection onto the -plane is the circle , and we already know its parametrization from :   Then we use the fact that and write in terms of :   Hence the vector function representing the intersection of and is   where . As a check, the four points , , and all satisfy both equations.   The cylinder , the plane , and the ellipse in which they meet. The violet arrow is the position vector of at .   A vertical cylinder cut by a slanted plane, with the ellipse where they meet drawn on the surfaces.   A three-dimensional plot showing a vertical circular cylinder of radius one standing on the xy-plane, and a slanted plane cutting through it. The two meet along a closed curve, an ellipse, drawn as a thick magenta loop and labeled C. Four points on the ellipse are marked, at (1,0,2), (0,1,1), (-1,0,2) and (0,-1,3). A violet arrow runs from the origin to a point on the ellipse, illustrating the position vector r of t.         Where two curved surfaces meet   Parametrize the intersection of the surfaces     On the intersection the two expressions for agree. Squaring both sides of   gives , that is,   Notice that has disappeared: equation describes the shadow of the intersection curve in the -plane, and it is an ellipse. Parametrizing it exactly as in ,   Plugging these into either of the two original equations, say , recovers the missing coordinate:   Hence the curve of intersection, shown in , is   for .   The upper sheet of (blue) and the dome (red) meet along the closed curve , drawn in black. Its shadow in the plane is the dashed ellipse .   A bowl-shaped surface and a dome overlapping, with the closed curve where they meet drawn on them.   A three-dimensional plot showing two surfaces. The first, in blue, is the upper sheet of a hyperboloid opening upward from its lowest point at height one above the origin. The second, in red, is a dome, the upper half of an ellipsoid, reaching height two above the origin. The two surfaces cross along a closed curve, drawn in black, which loops around the vertical axis at heights between about 1.26 and 1.58. A dashed ellipse on the floor of the box shows the shadow of that curve.         "
},
{
  "id": "sec-parametrization-2",
  "level": "2",
  "url": "sec-parametrization.html#sec-parametrization-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   Describe the motion of a point in the plane with a pair of parametric equations and , and understand the parameter as recording when the point visits each place on the curve.    Sketch a parametric curve from a table of values, and indicate the direction of increasing in which the curve is traced.    Find parametric equations for common curves, such as lines, circles, and ellipses, and eliminate the parameter to recover a Cartesian equation when possible.    Distinguish the intersection points of two parametric curves from their collision points , where two moving objects reach the same place at the same time.    Write a space curve as a vector function , and parametrize the curve in which two surfaces meet.    "
},
{
  "id": "def-parametric-equations",
  "level": "2",
  "url": "sec-parametrization.html#def-parametric-equations",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Parametric Equations.",
  "body": " Parametric Equations   If and are given as functions of a third variable , called a parameter , by   then the points trace out a curve in the plane, called a parametric curve . The equations and are the parametric equations of the curve.   "
},
{
  "id": "fig-trajectory",
  "level": "2",
  "url": "sec-parametrization.html#fig-trajectory",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " The trajectory of a moving point whose coordinates are given by the parametric equations , . At the instant the point is at .   A curved trajectory in the plane with a marked point and dashed lines dropping to the two coordinate axes.   A smooth curve rises and falls across the first quadrant from a starting point A, reached at time t equals a, to an ending point B, reached at time t equals b. A single point on the curve is marked; dashed gray segments run from it straight down to the x axis, where the value is labeled f of t nought, and straight left to the y axis, where the value is labeled g of t nought. An arrow on the curve shows the direction of increasing t.     c(t) = (t, 2 + sin(t))  t0 = 2  P = c(t0)       C       A,\\ t=a     B,\\ t=b         \\left(f(t_0),g(t_0)\\right)    f(t_0)    g(t_0)                 "
},
{
  "id": "table-parabola-points",
  "level": "2",
  "url": "sec-parametrization.html#table-parabola-points",
  "type": "Table",
  "number": "1.1.3",
  "title": "Points on the curve <span class=\"process-math\">\\(x=t\\text{,}\\)<\/span> <span class=\"process-math\">\\(y=t^2\\)<\/span>",
  "body": " Points on the curve ,                                  "
},
{
  "id": "fig-parabola-parametric",
  "level": "2",
  "url": "sec-parametrization.html#fig-parabola-parametric",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " The curve , is the parabola . The marked points correspond to the integer values from , and the arrow shows the direction of increasing .   The parabola y equals x squared with seven marked points and an arrow showing that it is traced from left to right.   The parabola y equals x squared drawn on a coordinate grid for x between minus three and three. Seven dots on the curve mark the points obtained from the integer parameter values t equals minus three through three, namely minus three comma nine, minus two comma four, minus one comma one, the origin, one comma one, two comma four, and three comma nine. An arrowhead partway up the right branch shows that the curve is traced from left to right as t increases.     f(t) = (t, t^2)       y=x^2         t=-3    t=0    t=3                "
},
{
  "id": "fig-unit-circle-param",
  "level": "2",
  "url": "sec-parametrization.html#fig-unit-circle-param",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": " Parametrizing the unit circle by , , . A generic point of the circle corresponds to the parameter value .   The unit circle traced counterclockwise, with the four quarter points marked and one generic point at parameter value t nought.   The unit circle on a coordinate grid, traced counterclockwise as indicated by an arrowhead. Four dots mark the points reached at t equals zero, at one comma zero; t equals pi over two, at zero comma one; t equals pi, at minus one comma zero; and t equals three pi over two, at zero comma minus one. A fifth dot part way around the first quadrant marks a generic point cosine t nought, sine t nought, joined to the origin by a segment that makes the angle t nought with the positive x axis.     c(t) = (cos(t), sin(t))  t0 = 0.9          t=0     t=\\pi\/2     t=\\pi     t=3\\pi\/2        \\left(\\cos t_0,\\ \\sin t_0\\right)    t_0                 "
},
{
  "id": "check-circle-other-parametrization",
  "level": "2",
  "url": "sec-parametrization.html#check-circle-other-parametrization",
  "type": "Checkpoint",
  "number": "1.1.6",
  "title": "Question.",
  "body": " Question   Can you think of another way to write a parametric form of the circle ?    Nothing forces the point to start at , to travel counterclockwise, or to go around exactly once.    For instance , , or , .    Taking and with gives the same circle, but starting at and traced clockwise . Taking and with also gives the same circle, traced counterclockwise but twice . A curve has many parametrizations: the picture does not determine the schedule.   "
},
{
  "id": "ex-parametrizing-curves",
  "level": "2",
  "url": "sec-parametrization.html#ex-parametrizing-curves",
  "type": "Example",
  "number": "1.1.7",
  "title": "Parametrizing Curves.",
  "body": " Parametrizing Curves   Find the parametric equations corresponding to the following curves.    The line segment connecting the two points and .    The ellipse .    The circle of radius centered at .       Part A. The segment lies on the line , so we may take   At we are at the point , and at we arrive at the point . See .   Part A: the segment , , , which starts at when and ends at when .   The straight segment from the point (0,1) down to the point (1,0), with an arrow pointing from the first to the second.   A straight segment on a coordinate grid joining the point zero comma one on the y axis to the point one comma zero on the x axis. Both endpoints are marked with dots and labeled with the parameter values t equals zero and t equals one, and an arrowhead on the segment points from the first toward the second.     s(t) = (t, 1-t)          (0,1),\\ t=0     (1,0),\\ t=1                  Part B. Guided by the unit circle , we take   To verify, note that   See .   Part B: the ellipse , , , traced counterclockwise.   An ellipse taller than it is wide, traced counterclockwise, with its four axis points marked.   An ellipse on a coordinate grid, two units wide in the x direction and three units tall in the y direction, centered at the origin. Four dots mark the points reached at t equals zero, at two comma zero; t equals pi over two, at zero comma three; t equals pi, at minus two comma zero; and t equals three pi over two, at zero comma minus three. An arrowhead shows that the ellipse is traced counterclockwise.     e(t) = (2*cos(t), 3*sin(t))          t=0     t=\\pi\/2     t=\\pi     t=3\\pi\/2                  Part C. The equation of such a circle in Cartesian coordinates is , so we shift the standard parametrization of a circle of radius by units in the -direction:   To verify, note that   See .   Part C: the circle , , , of radius centered at .   A circle of radius two centered at the point (2,0), passing through the origin, traced counterclockwise.   A circle of radius two on a coordinate grid, centered at the point two comma zero, which is marked with a cross. The circle passes through the origin on the left and through the point four comma zero on the right. A dot marks the starting point four comma zero, reached at t equals zero, and an arrowhead shows that the circle is traced counterclockwise.     k(t) = (2*cos(t)+2, 2*sin(t))          (2,0)     t=0                  "
},
{
  "id": "def-intersection-collision",
  "level": "2",
  "url": "sec-parametrization.html#def-intersection-collision",
  "type": "Definition",
  "number": "1.1.11",
  "title": "Intersection Points and Collision Points.",
  "body": " Intersection Points and Collision Points   A point is an intersection point of the two curves if lies on both curves; that is, if there are parameter values and , not necessarily equal, with   A point is a collision point of the two particles if both particles are at at the same time; that is, if there is a single value of with    "
},
{
  "id": "subsec-intersection-collision-7-1-1",
  "level": "2",
  "url": "sec-parametrization.html#subsec-intersection-collision-7-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intersection points "
},
{
  "id": "subsec-intersection-collision-7-2-1",
  "level": "2",
  "url": "sec-parametrization.html#subsec-intersection-collision-7-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "collision points "
},
{
  "id": "ex-paths-cross-no-collision",
  "level": "2",
  "url": "sec-parametrization.html#ex-paths-cross-no-collision",
  "type": "Example",
  "number": "1.1.12",
  "title": "The paths cross, but the particles never meet.",
  "body": " The paths cross, but the particles never meet   Two particles move in the plane with position vectors   Find all intersection points of their paths, and all collision points of the particles.     Paths. Eliminating the parameter, the first particle traces the parabola . For the second, and , so it traces the line . As computed in , the two paths intersect at and .   Collisions. A collision requires a single with   The first equation forces , but then while . There is no solution, so the particles never collide.  We can see exactly how they miss each other. The first particle is at when , while the second particle arrives there only at . Similarly, the first particle reaches at , long after the second particle passed through it at . Each intersection point is visited twice, but never simultaneously. See .   The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.   A parabola and a line crossing at two points, each labeled with the two different times at which the particles pass through it.   The parabola y equals x squared and the line y equals x plus two drawn on the same coordinate grid, crossing at the points minus one comma one and two comma four. Each crossing is marked with a dot and labeled with two different parameter values: at minus one comma one the first particle arrives at t equals minus one and the second at t equals one, and at two comma four the first arrives at t equals two and the second at t equals minus two.     p(t) = (t, t^2)  l(t) = (-t, 2-t)        C_1       C_2         (-1,1)    C_1: t=-1    C_2: t=1      (2,4)    C_1: t=2    C_2: t=-2                   "
},
{
  "id": "ex-same-paths-collision",
  "level": "2",
  "url": "sec-parametrization.html#ex-same-paths-collision",
  "type": "Example",
  "number": "1.1.14",
  "title": "The same paths, a different schedule—now they collide.",
  "body": " The same paths, a different schedule now they collide   Keep the first particle, but re-schedule the second one:   Find the intersection points of the paths and the collision points of the particles.     Paths. For the second particle, and , so it travels along the very same line as before, only faster and in the opposite direction. The paths are therefore unchanged, and they still intersect at the points , and .   Collisions. Now a collision requires a single with   The first equation gives , and this value does satisfy the second equation, since . Hence the particles do collide, at   The other intersection point is not a collision point: the first particle passes through at , while the second particle passes through it at . Two intersection points, but only one collision. See .   The same two paths as in . The point is now a collision point, reached by both particles at , while remains an intersection point that is not a collision point.   The same parabola and line, with the crossing at (2,4) highlighted as a collision point reached by both particles at time t equals two.   The parabola y equals x squared and the line y equals x plus two crossing at minus one comma one and at two comma four. The point two comma four is drawn as a large highlighted dot and labeled as a collision point, reached by both particles at time t equals two, while the particles pass through minus one comma one at the different times t equals minus one and t equals one half.     p(t) = (t, t^2)  l(t) = (t, t+2)        C_1       C_2         (-1,1)    C_1: t=-1    C_2: t=\\tfrac12         (2,4)    \\text{collision}    \\text{at } t=2                    "
},
{
  "id": "remark-collision-vs-intersection",
  "level": "2",
  "url": "sec-parametrization.html#remark-collision-vs-intersection",
  "type": "Remark",
  "number": "1.1.16",
  "title": "Every collision is an intersection, but not conversely.",
  "body": " Every collision is an intersection, but not conversely  If two particles collide at , then certainly lies on both paths, so every collision point is an intersection point. The converse fails: the paths may cross at a point that the two particles visit at different times. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.  "
},
{
  "id": "check-collision-both-points",
  "level": "2",
  "url": "sec-parametrization.html#check-collision-both-points",
  "type": "Checkpoint",
  "number": "1.1.17",
  "title": "",
  "body": "  Keep . Find a parametrization of the line for which the two particles collide at both intersection points.    Try to arrange that the second particle has the same -coordinate as the first one at every time .     .    With the collision equations become and , that is, . Thus gives the collision at and gives the collision at : both intersection points are now collision points.   "
},
{
  "id": "subsec-curves-in-space-4",
  "level": "2",
  "url": "sec-parametrization.html#subsec-curves-in-space-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector function "
},
{
  "id": "subsec-curves-in-space-5",
  "level": "2",
  "url": "sec-parametrization.html#subsec-curves-in-space-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "position vector "
},
{
  "id": "subsec-curves-in-space-6-1-1",
  "level": "2",
  "url": "sec-parametrization.html#subsec-curves-in-space-6-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Coordinatewise. "
},
{
  "id": "subsec-curves-in-space-6-2-1",
  "level": "2",
  "url": "sec-parametrization.html#subsec-curves-in-space-6-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vectorially. "
},
{
  "id": "ex-helix-space-curve",
  "level": "2",
  "url": "sec-parametrization.html#ex-helix-space-curve",
  "type": "Example",
  "number": "1.1.18",
  "title": "A helix.",
  "body": " A helix   Consider the object whose coordinates are parametrized by   Write the motion as a vector function and describe the path.    Collecting into a single vector function,   The first two coordinates satisfy , so the shadow of the path on the -plane is the unit circle, and as runs from to the angle runs from to : the shadow goes around exactly once. Meanwhile increases steadily, so the object climbs at a constant rate while circling. The path is therefore one full turn of a helix , shown in . The motion begins at at time and ends at at time , directly above the starting point.   One turn of the helix , . The violet arrow is the position vector at ; its tip rides along the curve as increases. The dashed gray circle is the shadow of the path on the plane .   One turn of a helix rising above the unit circle, with the position vector drawn from the origin to a point on the curve.   A three-dimensional coordinate box with x and y running from minus 1.3 to 1.3 and z from 0 to about 3.4. A thick blue curve spirals counterclockwise once around the vertical axis while climbing steadily, starting at a red point labeled (1,0,0) at time t equals zero on the floor of the box and ending at a red point labeled (1,0,pi) at time t equals pi, directly above the start. A dashed gray unit circle on the floor is the shadow of the path. A violet arrow labeled r of t runs from the origin to a point partway up the curve, illustrating the position vector whose tip traces the helix.       "
},
{
  "id": "ex-cylinder-plane",
  "level": "2",
  "url": "sec-parametrization.html#ex-cylinder-plane",
  "type": "Example",
  "number": "1.1.20",
  "title": "Where a plane cuts a cylinder.",
  "body": " Where a plane cuts a cylinder   Find a vector function that represents the curve of intersection of the cylinder and the plane .    As shown in , the intersection of the two surfaces is an ellipse. Furthermore, its projection onto the -plane is the circle , and we already know its parametrization from :   Then we use the fact that and write in terms of :   Hence the vector function representing the intersection of and is   where . As a check, the four points , , and all satisfy both equations.   The cylinder , the plane , and the ellipse in which they meet. The violet arrow is the position vector of at .   A vertical cylinder cut by a slanted plane, with the ellipse where they meet drawn on the surfaces.   A three-dimensional plot showing a vertical circular cylinder of radius one standing on the xy-plane, and a slanted plane cutting through it. The two meet along a closed curve, an ellipse, drawn as a thick magenta loop and labeled C. Four points on the ellipse are marked, at (1,0,2), (0,1,1), (-1,0,2) and (0,-1,3). A violet arrow runs from the origin to a point on the ellipse, illustrating the position vector r of t.       "
},
{
  "id": "ex-two-surfaces",
  "level": "2",
  "url": "sec-parametrization.html#ex-two-surfaces",
  "type": "Example",
  "number": "1.1.22",
  "title": "Where two curved surfaces meet.",
  "body": " Where two curved surfaces meet   Parametrize the intersection of the surfaces     On the intersection the two expressions for agree. Squaring both sides of   gives , that is,   Notice that has disappeared: equation describes the shadow of the intersection curve in the -plane, and it is an ellipse. Parametrizing it exactly as in ,   Plugging these into either of the two original equations, say , recovers the missing coordinate:   Hence the curve of intersection, shown in , is   for .   The upper sheet of (blue) and the dome (red) meet along the closed curve , drawn in black. Its shadow in the plane is the dashed ellipse .   A bowl-shaped surface and a dome overlapping, with the closed curve where they meet drawn on them.   A three-dimensional plot showing two surfaces. The first, in blue, is the upper sheet of a hyperboloid opening upward from its lowest point at height one above the origin. The second, in red, is a dome, the upper half of an ellipsoid, reaching height two above the origin. The two surfaces cross along a closed curve, drawn in black, which loops around the vertical axis at heights between about 1.26 and 1.58. A dashed ellipse on the floor of the box shows the shadow of that curve.       "
},
{
  "id": "sec-arc-length",
  "level": "1",
  "url": "sec-arc-length.html",
  "type": "Section",
  "number": "1.2",
  "title": "Arc Length of a Curve",
  "body": " Arc Length of a Curve   When an object moves along a curve, we often want to know the total distance it travels. In this section we build the arc-length integral, first in the plane and then in space, and we apply it to two motions: a point sweeping out a quarter circle and a paraglider spiralling to the ground. The key idea throughout is simple: distance travelled is speed accumulated over time .     Arc Length in 2D   Goal. Compute the arc length of a curve using its parametrized form. Imagine that at time an object starts moving from an initial point and at time it reaches the final point . During this period the object traces out a smooth curve in the plane. Throughout this section we illustrate the construction on the closed curve of , a circle traversed once counterclockwise, so that the object returns to where it began and and are the same point. How can we calculate the distance the object has travelled?   A smooth curve traced by a moving object, from the starting point at time to the ending point at time . Here is closed, so the object returns to its starting point and .   A circle labelled C on a pair of coordinate axes, with an arrow giving the direction of travel and the start and end point marked.   A circle of radius three, labelled C, is drawn on a pair of coordinate axes with equally scaled x and y directions. An arrowhead on the curve shows that the object travels counterclockwise. A single red dot on the positive x axis, where the circle crosses it, marks both the starting point A, reached at time t equals a, and the ending point B, reached at time t equals b, since the object returns to where it began after going once around.      R = 3  C(t) = (R*cos(t), R*sin(t))  Start = C(0)       C       A=B    t=a,\\ t=b                The strategy is to replace the curve by a chain of straight segments whose lengths we already know how to compute. Partition the time interval into pieces, , mark the corresponding points on the curve, and join consecutive ones by chords, as in . Over the -th step the object is displaced horizontally and vertically, so by the Pythagorean theorem the -th chord length satisfies    Approximating the length of a curve by an inscribed polygon with sides. The -th chord joins the point reached at time to the point reached at time ; its length is the hypotenuse of a right triangle with legs and . The corresponding time step is .   A closed curve with an inscribed dashed polygon; one chord is highlighted together with its horizontal and vertical legs, labelled delta x sub k and delta y sub k.   A circle of radius three, labelled C, is drawn on a pair of coordinate axes. Inside it a dashed green polygon with nine equal sides is inscribed, its vertices marked by small green dots lying on the curve; these are the points reached at the partition times. In the upper right of the circle one side of the polygon is drawn as a thick solid green chord and labelled delta s sub k. Its two endpoints are marked in red and labelled t sub k minus one, the lower right endpoint, and t sub k, the upper left endpoint. A dashed orange horizontal segment labelled delta x sub k runs from beneath t sub k across to t sub k minus one, and a dotted blue vertical segment labelled delta y sub k runs from the right end of that horizontal segment up to t sub k, so that the chord is the hypotenuse of a right triangle. A small square marks the right angle where the two legs meet. Above the figure a red note reads delta t sub k equals t sub k minus t sub k minus one.      R = 3  N = 9  V(k) = (R*cos(2*pi*k\/N), R*sin(2*pi*k\/N))  Pprev = V(1)  Pk = V(2)  Q = (Pk[0], Pprev[1])  Mx = ((Pprev[0]+Pk[0])\/2, Pprev[1])  My = (Pk[0], (Pprev[1]+Pk[1])\/2)  Ms = ((Pprev[0]+Pk[0])\/2, (Pprev[1]+Pk[1])\/2)  sq = 0.25       C             \\Delta s_k         \\Delta x_k    \\Delta y_k        t_{k-1}    t_k     \\Delta t_k = t_k - t_{k-1}                   We approximate the arc length by summing as changes from to the number of divisions :   The inscribed polygon hugs the curve more and more closely as the chords get shorter, so we recover the exact length in the limit:   This is a fine formula, but it is not yet something we can evaluate: there is no variable of integration. To bring the parameter into the picture, we divide and multiply by :   We then take to find the exact arc length. Each difference quotient turns into a derivative, and the sum turns into an integral over time:   where in the last step we recognized the square root as the length of the velocity vector, that is, as the object's speed.   Results  Let a plane curve be parametrized by for . Then   where    In words: arc length is the integral of speed over time . This is the natural generalization of the familiar rule distance equals speed times time to motion whose speed and direction change from moment to moment.       Length of a quarter circle   Using the arc-length formula , calculate the length of a quarter circle of radius one. (We already know the answer: a full unit circle has circumference , so a quarter of it has length . The point of this example is to see the formula reproduce it.)    We can parametrize the quarter circle as Differentiating, the velocity vector and its length are   The speed is constant and equal to , so the arc length is simply the elapsed time:   as expected. Notice a useful by-product: because the speed is , the arc length swept out up to time is exactly. The motion is shown in , the position and velocity vectors in , and a snapshot of the partially swept arc in .   The point sweeps out the quarter circle as increases from to ; the accumulated arc length reaches .     The quarter circle with the position vector (orange) and the unit velocity vector (green), which is tangent to the curve.    A quarter of the unit circle from the point one comma zero to the point zero comma one on a coordinate grid, with an orange position vector from the origin to a point on the arc and a green unit velocity vector tangent to the arc at that point.   A quarter of the unit circle with position and velocity vectors drawn.    r(t)=(cos(t), sin(t))  t0=0.9  P=r(t0)  vel=(-sin(t0), cos(t0))       \\mathbf{r}(t)       (1,0)     (0,1)           \\mathbf{v}(t)                    Snapshot at : the arc already swept out (blue) has length , the part not yet traced is gray, and the unit velocity vector is tangent to the circle at the moving point.   A point partway along the unit quarter circle, with its position vector, unit velocity vector, and the arc swept so far.   The first quadrant with a light coordinate grid. A quarter circle of radius one runs from the point (1,0) up to the point (0,1). The portion already travelled, from (1,0) counterclockwise to the moving point at t equals 0.9, is a thick blue arc ending in an arrowhead; the portion not yet travelled is gray. An orange position vector labelled r of t reaches from the origin to the moving point, drawn in red. A green vector labelled v of t, of length one, starts at the moving point, tangent to the circle and pointing in the direction of motion. A blue label reads s of t equals t, the arc length swept so far.          Arc Length in 3D  The formulas and generalize to motion in space with no new ideas: the -th chord of simply picks up a third leg, so and in the limit . For a space curve we therefore have   As in the plane, arc length is still the integral of speed over time.      Distance travelled by a paraglider   The position of a paraglider at time is Assuming that the paraglider begins at time :    How long does it take to reach the ground, that is, ?    Calculate the velocity vector at time , and also calculate its length.    Calculate the distance travelled by the paraglider.       Part A. The paraglider reaches the ground when the -coordinate vanishes: So it takes units of time to land.   Part B. We differentiate each component. The first two require the product rule, and for the third, . Hence   Its length simplifies neatly: the cross terms cancel, the squared sines and cosines combine, and the last component contributes :   where the last equality uses . So the paraglider's speed grows linearly: it starts at and reaches at touchdown.   Part C. The distance travelled is the arc length of the path, that is, speed integrated over the units of flight time:   The descending spiral, together with its endpoints and , is animated in and shown in .   The paraglider spirals down from to . Because the speed is , the total distance travelled is .     The paraglider's path from down to . The dashed gray curve is the path's shadow on the ground .   The paraglider's descending spiral path in three dimensions, from its starting point down to the ground.   A three-dimensional coordinate box with x and y running from minus 10 to 10 and z from 0 to 27. A thick blue spiral starts at a red point labelled start, at the position vector with components 0, 0, and 9 root 8, about 25.5 units above the origin. The spiral winds outward and downward, its radius growing as it descends, making roughly one and a half turns before landing at a red point labelled ground, at the position vector with components 9 cosine 9, 9 sine 9, and 0. A dashed gray spiral on the floor of the box shows the path's shadow on the ground.            Activity: Where a Plane Slices a Cone   Where a Plane Slices a Cone   Let be the upper half of a circular cone and let be a slanted plane:   Let be their curve of intersection, shown in .   The cone with , the plane , and the curve where they meet. The darker portion is the arc from to .   An upward-opening cone cut by a slanted plane, with the parabola along which they meet drawn on the surfaces.   A three-dimensional plot showing the upper nappe of a circular cone opening upward from the origin, a slanted plane cutting through it, and the parabola along which the two surfaces meet. The vertex of the parabola is marked V at its lowest point, and the points P and Q, where the parabola crosses the plane x equals zero, are marked on either side of the vertex.          Show that every point of satisfies , and use this to find a vector parametrization of . Then verify directly that your lies on both surfaces for every .   Suggestion. Use itself as the parameter, and say why that is smarter than using .    A point lies on exactly when it satisfies both equations at once. Substituting from the plane into the equation of the cone eliminates :   So the shadow of in the -plane is the parabola , that is, ( ). Solving for rather than for is the key move: is a single-valued function of , so taking as the parameter captures the whole curve at once, whereas parametrizing by would force the two branches and split the problem in half. Since ,    The shadow of in the -plane is the parabola , with vertex . The darker arc is the projection of the piece of that runs from to .   A parabola opening to the right on a coordinate grid, with its vertex and the arc between the points (0,-1) and (0,1) marked.   The shadow of the curve C in the xy-plane: a parabola opening to the right with vertex V at the point minus one half, zero. The arc between the points (0,-1) and (0,1), the shadow of the piece of C from P to Q, is drawn more thickly.     p(t) = ((t^2-1)\/2, t)       V    (0,1)    (0,-1)    y^2 = 2x+1               Check on :    and for all , so the entire curve lies on the upper nappe . Check on :  , so .       The curve crosses the plane at the two points and . Set up the arc-length integral for the piece of joining to and evaluate it exactly . Then give a decimal approximation to four places.         First locate the endpoints: means , so , giving and . Differentiating the parametrization componentwise gives the velocity vector   Hence, using the evenness of the integrand,   The integrand is not quite of the form , so first substitute , , which sends to :   Now evaluate . Integrating by parts against reproduces the original integral, which lets us solve for it: with in the numerator,   The last integral is , so , that is, The inverse hyperbolic sine is a logarithm in disguise. Setting and multiplying through by gives , a quadratic in . The quadratic formula gives , and only the sign keeps positive, so .    The substitution gives the same antiderivative: it turns the integral into . The trigonometric substitution works too, but it leads to , which needs the same solve-for- trick anyway.  Finally apply the limits. At we have , and everything vanishes at :   Sanity check: the straight-line distance from to is , and , as an arc must be.       The point is the vertex (the lowest point) of . Find the arc-length function measured from , and use it to compute the exact length of from to the point .         The vertex is in , so measuring arc length from means starting the integral at and applying the antiderivative :   which is also written   One can verify , as it must be. The point corresponds to , since and then and . Therefore   Because , the logarithm halves:        Instructor notes what to watch for      Losing half the curve. Students who write and then square are fine, but those who parametrize by get and often keep only the branch losing the arc from to . The check in the first task is worth insisting on.     Forgetting to verify. The first task asks for a substitution and a check; a parametrization that satisfies only one of the two equations is a common error.     Wrong endpoints. In the arc-length task some students integrate over and forget the symmetric half, getting exactly half the correct length.       "
},
{
  "id": "subsec-arc-length-2d-2",
  "level": "2",
  "url": "sec-arc-length.html#subsec-arc-length-2d-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Goal. "
},
{
  "id": "fig-arc-length-curve",
  "level": "2",
  "url": "sec-arc-length.html#fig-arc-length-curve",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " A smooth curve traced by a moving object, from the starting point at time to the ending point at time . Here is closed, so the object returns to its starting point and .   A circle labelled C on a pair of coordinate axes, with an arrow giving the direction of travel and the start and end point marked.   A circle of radius three, labelled C, is drawn on a pair of coordinate axes with equally scaled x and y directions. An arrowhead on the curve shows that the object travels counterclockwise. A single red dot on the positive x axis, where the circle crosses it, marks both the starting point A, reached at time t equals a, and the ending point B, reached at time t equals b, since the object returns to where it began after going once around.      R = 3  C(t) = (R*cos(t), R*sin(t))  Start = C(0)       C       A=B    t=a,\\ t=b               "
},
{
  "id": "fig-arc-length-chords",
  "level": "2",
  "url": "sec-arc-length.html#fig-arc-length-chords",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Approximating the length of a curve by an inscribed polygon with sides. The -th chord joins the point reached at time to the point reached at time ; its length is the hypotenuse of a right triangle with legs and . The corresponding time step is .   A closed curve with an inscribed dashed polygon; one chord is highlighted together with its horizontal and vertical legs, labelled delta x sub k and delta y sub k.   A circle of radius three, labelled C, is drawn on a pair of coordinate axes. Inside it a dashed green polygon with nine equal sides is inscribed, its vertices marked by small green dots lying on the curve; these are the points reached at the partition times. In the upper right of the circle one side of the polygon is drawn as a thick solid green chord and labelled delta s sub k. Its two endpoints are marked in red and labelled t sub k minus one, the lower right endpoint, and t sub k, the upper left endpoint. A dashed orange horizontal segment labelled delta x sub k runs from beneath t sub k across to t sub k minus one, and a dotted blue vertical segment labelled delta y sub k runs from the right end of that horizontal segment up to t sub k, so that the chord is the hypotenuse of a right triangle. A small square marks the right angle where the two legs meet. Above the figure a red note reads delta t sub k equals t sub k minus t sub k minus one.      R = 3  N = 9  V(k) = (R*cos(2*pi*k\/N), R*sin(2*pi*k\/N))  Pprev = V(1)  Pk = V(2)  Q = (Pk[0], Pprev[1])  Mx = ((Pprev[0]+Pk[0])\/2, Pprev[1])  My = (Pk[0], (Pprev[1]+Pk[1])\/2)  Ms = ((Pprev[0]+Pk[0])\/2, (Pprev[1]+Pk[1])\/2)  sq = 0.25       C             \\Delta s_k         \\Delta x_k    \\Delta y_k        t_{k-1}    t_k     \\Delta t_k = t_k - t_{k-1}                  "
},
{
  "id": "ex-quarter-circle",
  "level": "2",
  "url": "sec-arc-length.html#ex-quarter-circle",
  "type": "Example",
  "number": "1.2.3",
  "title": "Length of a quarter circle.",
  "body": " Length of a quarter circle   Using the arc-length formula , calculate the length of a quarter circle of radius one. (We already know the answer: a full unit circle has circumference , so a quarter of it has length . The point of this example is to see the formula reproduce it.)    We can parametrize the quarter circle as Differentiating, the velocity vector and its length are   The speed is constant and equal to , so the arc length is simply the elapsed time:   as expected. Notice a useful by-product: because the speed is , the arc length swept out up to time is exactly. The motion is shown in , the position and velocity vectors in , and a snapshot of the partially swept arc in .   The point sweeps out the quarter circle as increases from to ; the accumulated arc length reaches .     The quarter circle with the position vector (orange) and the unit velocity vector (green), which is tangent to the curve.    A quarter of the unit circle from the point one comma zero to the point zero comma one on a coordinate grid, with an orange position vector from the origin to a point on the arc and a green unit velocity vector tangent to the arc at that point.   A quarter of the unit circle with position and velocity vectors drawn.    r(t)=(cos(t), sin(t))  t0=0.9  P=r(t0)  vel=(-sin(t0), cos(t0))       \\mathbf{r}(t)       (1,0)     (0,1)           \\mathbf{v}(t)                    Snapshot at : the arc already swept out (blue) has length , the part not yet traced is gray, and the unit velocity vector is tangent to the circle at the moving point.   A point partway along the unit quarter circle, with its position vector, unit velocity vector, and the arc swept so far.   The first quadrant with a light coordinate grid. A quarter circle of radius one runs from the point (1,0) up to the point (0,1). The portion already travelled, from (1,0) counterclockwise to the moving point at t equals 0.9, is a thick blue arc ending in an arrowhead; the portion not yet travelled is gray. An orange position vector labelled r of t reaches from the origin to the moving point, drawn in red. A green vector labelled v of t, of length one, starts at the moving point, tangent to the circle and pointing in the direction of motion. A blue label reads s of t equals t, the arc length swept so far.       "
},
{
  "id": "ex-paraglider",
  "level": "2",
  "url": "sec-arc-length.html#ex-paraglider",
  "type": "Example",
  "number": "1.2.7",
  "title": "Distance travelled by a paraglider.",
  "body": " Distance travelled by a paraglider   The position of a paraglider at time is Assuming that the paraglider begins at time :    How long does it take to reach the ground, that is, ?    Calculate the velocity vector at time , and also calculate its length.    Calculate the distance travelled by the paraglider.       Part A. The paraglider reaches the ground when the -coordinate vanishes: So it takes units of time to land.   Part B. We differentiate each component. The first two require the product rule, and for the third, . Hence   Its length simplifies neatly: the cross terms cancel, the squared sines and cosines combine, and the last component contributes :   where the last equality uses . So the paraglider's speed grows linearly: it starts at and reaches at touchdown.   Part C. The distance travelled is the arc length of the path, that is, speed integrated over the units of flight time:   The descending spiral, together with its endpoints and , is animated in and shown in .   The paraglider spirals down from to . Because the speed is , the total distance travelled is .     The paraglider's path from down to . The dashed gray curve is the path's shadow on the ground .   The paraglider's descending spiral path in three dimensions, from its starting point down to the ground.   A three-dimensional coordinate box with x and y running from minus 10 to 10 and z from 0 to 27. A thick blue spiral starts at a red point labelled start, at the position vector with components 0, 0, and 9 root 8, about 25.5 units above the origin. The spiral winds outward and downward, its radius growing as it descends, making roughly one and a half turns before landing at a red point labelled ground, at the position vector with components 9 cosine 9, 9 sine 9, and 0. A dashed gray spiral on the floor of the box shows the path's shadow on the ground.       "
},
{
  "id": "activity-cone-plane-arc-length",
  "level": "2",
  "url": "sec-arc-length.html#activity-cone-plane-arc-length",
  "type": "Activity",
  "number": "1.2.1",
  "title": "Where a Plane Slices a Cone.",
  "body": " Where a Plane Slices a Cone   Let be the upper half of a circular cone and let be a slanted plane:   Let be their curve of intersection, shown in .   The cone with , the plane , and the curve where they meet. The darker portion is the arc from to .   An upward-opening cone cut by a slanted plane, with the parabola along which they meet drawn on the surfaces.   A three-dimensional plot showing the upper nappe of a circular cone opening upward from the origin, a slanted plane cutting through it, and the parabola along which the two surfaces meet. The vertex of the parabola is marked V at its lowest point, and the points P and Q, where the parabola crosses the plane x equals zero, are marked on either side of the vertex.          Show that every point of satisfies , and use this to find a vector parametrization of . Then verify directly that your lies on both surfaces for every .   Suggestion. Use itself as the parameter, and say why that is smarter than using .    A point lies on exactly when it satisfies both equations at once. Substituting from the plane into the equation of the cone eliminates :   So the shadow of in the -plane is the parabola , that is, ( ). Solving for rather than for is the key move: is a single-valued function of , so taking as the parameter captures the whole curve at once, whereas parametrizing by would force the two branches and split the problem in half. Since ,    The shadow of in the -plane is the parabola , with vertex . The darker arc is the projection of the piece of that runs from to .   A parabola opening to the right on a coordinate grid, with its vertex and the arc between the points (0,-1) and (0,1) marked.   The shadow of the curve C in the xy-plane: a parabola opening to the right with vertex V at the point minus one half, zero. The arc between the points (0,-1) and (0,1), the shadow of the piece of C from P to Q, is drawn more thickly.     p(t) = ((t^2-1)\/2, t)       V    (0,1)    (0,-1)    y^2 = 2x+1               Check on :    and for all , so the entire curve lies on the upper nappe . Check on :  , so .       The curve crosses the plane at the two points and . Set up the arc-length integral for the piece of joining to and evaluate it exactly . Then give a decimal approximation to four places.         First locate the endpoints: means , so , giving and . Differentiating the parametrization componentwise gives the velocity vector   Hence, using the evenness of the integrand,   The integrand is not quite of the form , so first substitute , , which sends to :   Now evaluate . Integrating by parts against reproduces the original integral, which lets us solve for it: with in the numerator,   The last integral is , so , that is, The inverse hyperbolic sine is a logarithm in disguise. Setting and multiplying through by gives , a quadratic in . The quadratic formula gives , and only the sign keeps positive, so .    The substitution gives the same antiderivative: it turns the integral into . The trigonometric substitution works too, but it leads to , which needs the same solve-for- trick anyway.  Finally apply the limits. At we have , and everything vanishes at :   Sanity check: the straight-line distance from to is , and , as an arc must be.       The point is the vertex (the lowest point) of . Find the arc-length function measured from , and use it to compute the exact length of from to the point .         The vertex is in , so measuring arc length from means starting the integral at and applying the antiderivative :   which is also written   One can verify , as it must be. The point corresponds to , since and then and . Therefore   Because , the logarithm halves:     "
},
{
  "id": "remark-cone-plane-instructor-notes",
  "level": "2",
  "url": "sec-arc-length.html#remark-cone-plane-instructor-notes",
  "type": "Remark",
  "number": "1.2.12",
  "title": "Instructor notes—what to watch for.",
  "body": " Instructor notes what to watch for      Losing half the curve. Students who write and then square are fine, but those who parametrize by get and often keep only the branch losing the arc from to . The check in the first task is worth insisting on.     Forgetting to verify. The first task asks for a substitution and a check; a parametrization that satisfies only one of the two equations is a common error.     Wrong endpoints. In the arc-length task some students integrate over and forget the symmetric half, getting exactly half the correct length.     "
},
{
  "id": "sec-line-integrals",
  "level": "1",
  "url": "sec-line-integrals.html",
  "type": "Section",
  "number": "1.3",
  "title": "Line Integrals",
  "body": " Line Integrals   In this section we study line integrals of scalar functions. We develop the idea through a concrete problem: finding the mass of a curved wire when we know its density its mass per unit length at every point. The strategy is the one behind every integral: chop the wire into tiny pieces, multiply the density of each piece by its length, and add up the results .     Line Integrals of Scalar Functions  Suppose we would like to compute the mass of a wire that does not have a trivial shape (such as a straight line). If the wire were straight and its density constant, the mass would simply be density times length. For a curved wire whose density varies from point to point, neither shortcut is available but we can approximate mass of small portions of the wire by treating each as if it were straight and had constant density.  Assume the wire is represented by a curve in space, parametrized by , as in . Divide the wire into small portions, and denote the length of the th portion by . Pick a sample point on this portion. If the portion is short, the density is nearly constant along it, so   and summing over all portions,    A wire represented by a curve in space, parametrized by and cut into portions by the partition points (black dots). The th portion (black) has length and contains the sample point , located by the position vector . The red chords form the inscribed polygon that approximates ; here its total length falls about short of the length of .   A helical wire cut into eight portions by dots, with the inscribed polygon of red chords, one portion highlighted in black, and a position vector reaching from the origin to a sample point on it.   A helical wire rising counterclockwise around the vertical axis from its lower end, marked t equals a, to its upper end, marked t equals b. Eight dots cut the wire into seven portions, and a straight red chord joins the ends of each portion, so the chords form a polygon inscribed in the wire that visibly cuts inside every bend. One portion on the near side is drawn in thick black and labeled with its length, delta s sub k; a dot inside it is the sample point, and a dashed green arrow runs to that dot from the origin, labeled r of t sub k equals the vector with components x sub k, y sub k, z sub k.      The estimate is only an approximation, because the density is not actually constant over each portion. How can we make the calculation exact? We take the limit in which every portion becomes infinitely small, that is, , or equivalently :   The limit in is denoted by the integral   which is read as the line integral of over the curve . The process is animated in : as the partition refines, the sums settle down to the value of the integral.   The construction above, on the wire of : the wire is cut into portions, and the th of them, of length , carries a sample point , so its mass is about . As grows the portions shrink, and the sum settles down to the line integral .    Our final task is to write the line element in terms of , so the integral becomes an ordinary integral we can evaluate. Exactly as in of , the line element is the length of an infinitesimal displacement in ,   so substituting into and factoring out gives   The square root in is exactly the length of the velocity vector   so turns into the tidy form   There is nothing special about density here. In general, a scalar line integral has the form   where is a scalar-valued function and the curve specifies the region of integration. Once the curve is parametrized in terms of , the region of integration translates to . In words: to compute a line integral, trade the geometric element for the parameter element . Two sanity checks connect this to what we already know. Taking in recovers the arc length of total length is the mass of a wire of density one. And is exactly the speed from that section, so the factor converts time spent into distance covered.      Mass and length of a helical wire   Consider a wire of length and mass . The wire is helix-shaped, with its bottom end located at and parametric equation Its density (mass per unit length) is kg\/m. Assuming that kg, calculate the length of the wire.    The wire occupies the part of the helix with , where the upper limit is unknown: it marks where the wire ends. Our plan has two steps. First we use the known mass in , which for this wire reads to find ; then the length is the arc length .  Differentiating gives and its length:   Next we write the density along the curve in terms of , using the double-angle identity :   Substituting and into and using the half-angle identity ,   Setting equal to the given mass and multiplying both sides by ,   since . (This solution is the only one: the left-hand side has derivative , so it is increasing and crosses the value exactly once.)  With from , the length of the wire is the arc length from to . Because the speed in is the constant ,   The wire a quarter turn of the helix from up to is shown in , and the accumulation of its mass is animated in .   The helical wire for , from its bottom end to its top end . The dashed gray curve is its shadow on the plane .   A quarter turn of a helix rising from the point (1,0,0) to the point (0,1,pi over 2), with its shadow on the floor.   A three-dimensional coordinate box with x and y running from minus 1.2 to 1.2 and z from 0 to 1.8. A thick blue curve, one quarter turn of a helix, starts at a red point on the floor labelled (1, 0, 0), t equals 0, and climbs steadily as it curves, ending at a red point labelled (0, 1, pi over 2), t equals pi over 2, about 1.57 units above the floor. A dashed gray quarter circle on the floor of the box shows the curve's shadow.       A point traverses the helical wire while the accumulated mass grows to kg over the length m.         A wire whose density is read off the picture   A wire of length meters is parametrized as   where , and are in meters and is in seconds. Assume that the mass density at a point of the wire is   where is the distance from to the -axis.  The wire is graphed in . Note that there is a piece of information that has to be extracted from the graph. Calculate the mass of the wire.     What the graph supplies. Equation is a formula for every , but a wire is a finite piece of that curve, and the formula alone does not say which piece. does: the wire starts at the origin, and exactly when . So the wire is the piece , and the unknown upper limit is what the given length will pin down.   Speed. Differentiating , the first two components by the product rule and the third by the power rule,   where the cross terms cancelled and .   The upper limit. The length of the wire is the arc length from to , and we are told it is :   So , and since the wire ends at seconds.   The density along the wire. The distance from a point to the -axis is , and along this curve    The mass. Now everything collapses: the density is exactly the reciprocal of the speed, so the two factors in cancel,   The wire has mass kilograms. The cancellation is worth a second look: here, so this wire carries exactly one kilogram for every second of parameter it is heavy and slow near the origin, light and fast far from the -axis, and the two effects balance perfectly.   The wire , spiralling outward and upward from the origin. The dashed gray curve is its shadow on the plane . The graph is what tells us the wire starts at .   A wire spiralling outward and upward from the origin, with its shadow on the ground.   A three-dimensional coordinate box with x and y running from minus 8.5 to 8.5 and z from 0 to 22. A thick blue curve starts at a red point at the origin, marked t equals 0, and spirals outward and upward, making a little more than one full turn around the vertical axis while climbing, its radius growing steadily, until it ends high above the floor. A dashed gray spiral on the floor of the box shows the curve's shadow.            Concept Check  This last part of the section is not about computing anything new. It is about reviewing the concepts we have just built. Everything below refers to the two applications developed so far using line integrals, in particular the length of a wire and its mass ,   where is again and is the case the arc length once more. Assume throughout that the thickness of the wire can be ignored.   Reading the two formulas   In and , what do , , , , , and represent?     is the parameter along the curve, which we usually read as time, and and are its initial and final values, so the wire is traced once as runs from to . The curve is the wire itself: it is the region of integration, and once the wire is parametrized that region becomes the interval . The symbol is the element of that parameter interval. The vector is the velocity of the point tracing the wire, so is its speed and the factor that converts time spent into distance covered. Finally is the linear mass density, the mass per unit length at the point of the wire.     The two line elements   Take two nearby points of the wire, the ones reached at the parameter values and . Write for the displacement from the first to the second, and for the length of the piece of wire joining them. Intuitively speaking, what do and represent, and what happens to and in the limit that produces them?    Both describe an infinitesimal step along the wire, but one is a number and the other is a vector. is the displacement of that step: it records how far the point moves and in which direction . Its length is the scalar , the arc length of the step how much wire the step uses up, with no direction attached. Scalar line integrals are built from ; the vector element is what we will need later, for work integrals.   Two nearby points of a curve , at the parameter values and . The straight arrow is the displacement ; the thick piece of curve joining the same two points has length . The chord is straight and the arc is not, so the two differ but less and less as the points come together.   A curve with two nearby points, their position vectors from the origin, the chord vector between them, and the arc joining them.   A smooth curve rises across the first quadrant. Two points on it, reached at the parameter values t sub k minus one and t sub k, are joined to the origin by two thin position vectors, labeled r of t sub k minus one and r of t sub k. A green arrow runs straight from the first point to the second and is labeled delta r, the difference of the two position vectors. The piece of curve between the same two points is drawn thickly in orange and labeled delta s sub k. The straight arrow cuts across inside the bend of the curve, so it is visibly shorter than the arc.     c(t) = (2.9*cos(t), 1.7*sin(t))  t1 = 0.32  t2 = 1.18  P = c(t1)  Q = c(t2)  D = (Q[0]-P[0], Q[1]-P[1])  M = ((P[0]+Q[0])\/2, (P[1]+Q[1])\/2)       C       \\Delta s_k       \\Delta \\mathbf{r}          \\mathbf{r}(t_{k-1})    \\mathbf{r}(t_k)    t_{k-1}    t_k                  The limit is the passage from to those two symbols. Write . Dividing the displacement by gives a difference quotient, and letting the two points come together turns it into the derivative:   The arc does the same thing one step behind. In the chord cuts across the bend, so ; but as the two points close in, the piece of curve between them becomes indistinguishable from the straight chord, in the sense that their ratio tends to :   That last equality is exactly the substitution that makes a line integral computable, and it is what records: trading the geometric element for is the same move as replacing the arc by its chord in and then shrinking it.     Units   If we use meters and kilograms as the units of length and mass respectively, then what will the units of and be?     is a length, so it is measured in meters ( ), and is a mass per unit length, so it is measured in kilograms per meter ( ). The product is then measured in kilograms, as a contribution to a mass must be.     What is being integrated?   In the above applications of line integrals of scalar functions , what is the scalar function that is being integrated (the integrand) along the wire?    For the mass the integrand is the density, . For the length the integrand is the constant function : the length is the mass of a wire of density one.     Two wires: the circle of radius centered at the origin, and the square inscribed in it, whose vertices lie on the circle.   A circle of radius two centered at the origin with a square inscribed in it, the square's four vertices lying on the circle.   A coordinate grid showing two closed curves. The first is a circle of radius two centered at the origin, passing through the marked point two comma zero. The second is a square inscribed in that circle, with horizontal and vertical sides and with its four vertices, at plus or minus root two in each coordinate, lying on the circle. The square's sides therefore cut across the inside of the circle.     R = 2  h = 1.4142135624       x^2+y^2=4       \\left(-\\sqrt{2},\\sqrt{2}\\right)       (2,0)     \\left(\\sqrt{2},\\sqrt{2}\\right)                   A mass with no parametrization   Assume that the density of the circular wire in is given by . Without parametrizing , find its mass.     .    Every point of the wire lies on the circle of radius , so  along the curve , and the density is not really varying at all:   A constant comes out of the integral, and what is left is the length of the wire, namely the circumference :   This is the one situation in which a line integral needs no parametrization: when the integrand is constant on the curve, the integral is that constant times the length.     Does the radius matter?   Assume that the mass density of a circular wire of radius centered at the origin is given by . Which statement is correct?    The mass of the wire is independent of its radius .    The mass of the wire increases as increases.    The mass of the wire decreases as decreases.      Only option A.    On the circle of radius we have , so is constant along the wire and   independently of . Only option A is correct.     Which wire is heavier?   Assume that the density of the square-shaped wire and of the circular wire graphed in is given by . Then, without parametrizing the curves, choose the correct option below. Which statement is correct?    The circular wire is heavier.    The square-shaped wire is heavier.    The two wires have the same mass.      Only option A.     The circle. Here is the square of the distance to the origin, and on a circle of radius centered at the origin that distance never changes. So is constant along the wire, it comes out of the integral, and what is left is the circumference:    The square. We do not need its mass exactly an upper bound is enough. The square is inscribed in the circle, so every one of its points lies inside or on the circle, which is to say   Replacing the integrand by that upper bound, and using that the square has side and hence perimeter ,   The inequality is strict because everywhere on the square except at its four vertices. So the square weighs less than while the circle weighs : the circular wire is heavier, and neither integral had to be parametrized. Only option A is correct.     A charged wire   Assume that the charge density of the square-shaped wire and of the circular wire graphed in is given by . Then, without parametrizing the curves, choose the correct option(s) below. Select all that apply.    The circular wire is negatively charged.    The square-shaped wire is positively charged.    In both cases (square and circular wires) the amount of positive charge is equal to the amount of negative charge.      Option C is correct.    Let us focus on the quarter of each wire lying where and , so that the absolute values disappear and   The line cuts that quarter into two halves, as in . Below the line we have , so there and the wire carries positive charge; above it , so and the charge is negative.  Now reflect in the line , that is, interchange and . This reflection carries each of the two shapes onto itself and it does not change lengths, so it matches the lower half of the quarter with the upper half piece for piece. On corresponding pieces the density is exactly opposite,   so the positive charge on the half below the line is exactly cancelled by the negative charge on the half above it: this quarter of each wire is neutral. The same argument applies to the other three quarters, where the line of reflection is and the density is again . Adding up the four quarters,   for both the square and the circle. Neither wire is charged overall: each carries exactly as much positive as negative charge. Option C is correct.   The quarter of each wire in the first quadrant, where . Below the line we have , so the density is positive; above it and the density is negative; and reflecting in that line matches the two halves of each wire piece for piece while reversing the sign of .   The first-quadrant quarter of the circular and square wires, split by the line y equals x into a region of positive density and a region of negative density.   The first quadrant of a coordinate grid. A quarter of the circle of radius two runs from the point two comma zero on the x axis up to the point zero comma two on the y axis. The corner of the inscribed square is drawn as two straight segments, one going up the vertical line x equals root two and one going left along the horizontal line y equals root two, meeting at the vertex root two comma root two, which lies on the circle. A dashed line y equals x runs from the origin out through that vertex, cutting both wires into two halves. The region below the dashed line is labeled x greater than y, so the density is positive; the region above it is labeled x less than y, so the density is negative.     R = 2  h = 1.4142135624  q(t) = (R*cos(t), R*sin(t))             y=x       \\rho \\geq 0    \\rho \\leq 0                      "
},
{
  "id": "fig-wire-partition",
  "level": "2",
  "url": "sec-line-integrals.html#fig-wire-partition",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " A wire represented by a curve in space, parametrized by and cut into portions by the partition points (black dots). The th portion (black) has length and contains the sample point , located by the position vector . The red chords form the inscribed polygon that approximates ; here its total length falls about short of the length of .   A helical wire cut into eight portions by dots, with the inscribed polygon of red chords, one portion highlighted in black, and a position vector reaching from the origin to a sample point on it.   A helical wire rising counterclockwise around the vertical axis from its lower end, marked t equals a, to its upper end, marked t equals b. Eight dots cut the wire into seven portions, and a straight red chord joins the ends of each portion, so the chords form a polygon inscribed in the wire that visibly cuts inside every bend. One portion on the near side is drawn in thick black and labeled with its length, delta s sub k; a dot inside it is the sample point, and a dashed green arrow runs to that dot from the origin, labeled r of t sub k equals the vector with components x sub k, y sub k, z sub k.     "
},
{
  "id": "fig-wire-partition-video",
  "level": "2",
  "url": "sec-line-integrals.html#fig-wire-partition-video",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " The construction above, on the wire of : the wire is cut into portions, and the th of them, of length , carries a sample point , so its mass is about . As grows the portions shrink, and the sum settles down to the line integral .   "
},
{
  "id": "subsec-scalar-line-integrals-14",
  "level": "2",
  "url": "sec-line-integrals.html#subsec-scalar-line-integrals-14",
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
  "number": "1.3.3",
  "title": "Mass and length of a helical wire.",
  "body": " Mass and length of a helical wire   Consider a wire of length and mass . The wire is helix-shaped, with its bottom end located at and parametric equation Its density (mass per unit length) is kg\/m. Assuming that kg, calculate the length of the wire.    The wire occupies the part of the helix with , where the upper limit is unknown: it marks where the wire ends. Our plan has two steps. First we use the known mass in , which for this wire reads to find ; then the length is the arc length .  Differentiating gives and its length:   Next we write the density along the curve in terms of , using the double-angle identity :   Substituting and into and using the half-angle identity ,   Setting equal to the given mass and multiplying both sides by ,   since . (This solution is the only one: the left-hand side has derivative , so it is increasing and crosses the value exactly once.)  With from , the length of the wire is the arc length from to . Because the speed in is the constant ,   The wire a quarter turn of the helix from up to is shown in , and the accumulation of its mass is animated in .   The helical wire for , from its bottom end to its top end . The dashed gray curve is its shadow on the plane .   A quarter turn of a helix rising from the point (1,0,0) to the point (0,1,pi over 2), with its shadow on the floor.   A three-dimensional coordinate box with x and y running from minus 1.2 to 1.2 and z from 0 to 1.8. A thick blue curve, one quarter turn of a helix, starts at a red point on the floor labelled (1, 0, 0), t equals 0, and climbs steadily as it curves, ending at a red point labelled (0, 1, pi over 2), t equals pi over 2, about 1.57 units above the floor. A dashed gray quarter circle on the floor of the box shows the curve's shadow.       A point traverses the helical wire while the accumulated mass grows to kg over the length m.     "
},
{
  "id": "ex-spiral-wire",
  "level": "2",
  "url": "sec-line-integrals.html#ex-spiral-wire",
  "type": "Example",
  "number": "1.3.6",
  "title": "A wire whose density is read off the picture.",
  "body": " A wire whose density is read off the picture   A wire of length meters is parametrized as   where , and are in meters and is in seconds. Assume that the mass density at a point of the wire is   where is the distance from to the -axis.  The wire is graphed in . Note that there is a piece of information that has to be extracted from the graph. Calculate the mass of the wire.     What the graph supplies. Equation is a formula for every , but a wire is a finite piece of that curve, and the formula alone does not say which piece. does: the wire starts at the origin, and exactly when . So the wire is the piece , and the unknown upper limit is what the given length will pin down.   Speed. Differentiating , the first two components by the product rule and the third by the power rule,   where the cross terms cancelled and .   The upper limit. The length of the wire is the arc length from to , and we are told it is :   So , and since the wire ends at seconds.   The density along the wire. The distance from a point to the -axis is , and along this curve    The mass. Now everything collapses: the density is exactly the reciprocal of the speed, so the two factors in cancel,   The wire has mass kilograms. The cancellation is worth a second look: here, so this wire carries exactly one kilogram for every second of parameter it is heavy and slow near the origin, light and fast far from the -axis, and the two effects balance perfectly.   The wire , spiralling outward and upward from the origin. The dashed gray curve is its shadow on the plane . The graph is what tells us the wire starts at .   A wire spiralling outward and upward from the origin, with its shadow on the ground.   A three-dimensional coordinate box with x and y running from minus 8.5 to 8.5 and z from 0 to 22. A thick blue curve starts at a red point at the origin, marked t equals 0, and spirals outward and upward, making a little more than one full turn around the vertical axis while climbing, its radius growing steadily, until it ends high above the floor. A dashed gray spiral on the floor of the box shows the curve's shadow.       "
},
{
  "id": "q-line-integral-symbols",
  "level": "2",
  "url": "sec-line-integrals.html#q-line-integral-symbols",
  "type": "Checkpoint",
  "number": "1.3.8",
  "title": "Reading the two formulas.",
  "body": " Reading the two formulas   In and , what do , , , , , and represent?     is the parameter along the curve, which we usually read as time, and and are its initial and final values, so the wire is traced once as runs from to . The curve is the wire itself: it is the region of integration, and once the wire is parametrized that region becomes the interval . The symbol is the element of that parameter interval. The vector is the velocity of the point tracing the wire, so is its speed and the factor that converts time spent into distance covered. Finally is the linear mass density, the mass per unit length at the point of the wire.   "
},
{
  "id": "q-ds-dr",
  "level": "2",
  "url": "sec-line-integrals.html#q-ds-dr",
  "type": "Checkpoint",
  "number": "1.3.9",
  "title": "The two line elements.",
  "body": " The two line elements   Take two nearby points of the wire, the ones reached at the parameter values and . Write for the displacement from the first to the second, and for the length of the piece of wire joining them. Intuitively speaking, what do and represent, and what happens to and in the limit that produces them?    Both describe an infinitesimal step along the wire, but one is a number and the other is a vector. is the displacement of that step: it records how far the point moves and in which direction . Its length is the scalar , the arc length of the step how much wire the step uses up, with no direction attached. Scalar line integrals are built from ; the vector element is what we will need later, for work integrals.   Two nearby points of a curve , at the parameter values and . The straight arrow is the displacement ; the thick piece of curve joining the same two points has length . The chord is straight and the arc is not, so the two differ but less and less as the points come together.   A curve with two nearby points, their position vectors from the origin, the chord vector between them, and the arc joining them.   A smooth curve rises across the first quadrant. Two points on it, reached at the parameter values t sub k minus one and t sub k, are joined to the origin by two thin position vectors, labeled r of t sub k minus one and r of t sub k. A green arrow runs straight from the first point to the second and is labeled delta r, the difference of the two position vectors. The piece of curve between the same two points is drawn thickly in orange and labeled delta s sub k. The straight arrow cuts across inside the bend of the curve, so it is visibly shorter than the arc.     c(t) = (2.9*cos(t), 1.7*sin(t))  t1 = 0.32  t2 = 1.18  P = c(t1)  Q = c(t2)  D = (Q[0]-P[0], Q[1]-P[1])  M = ((P[0]+Q[0])\/2, (P[1]+Q[1])\/2)       C       \\Delta s_k       \\Delta \\mathbf{r}          \\mathbf{r}(t_{k-1})    \\mathbf{r}(t_k)    t_{k-1}    t_k                  The limit is the passage from to those two symbols. Write . Dividing the displacement by gives a difference quotient, and letting the two points come together turns it into the derivative:   The arc does the same thing one step behind. In the chord cuts across the bend, so ; but as the two points close in, the piece of curve between them becomes indistinguishable from the straight chord, in the sense that their ratio tends to :   That last equality is exactly the substitution that makes a line integral computable, and it is what records: trading the geometric element for is the same move as replacing the arc by its chord in and then shrinking it.   "
},
{
  "id": "q-units",
  "level": "2",
  "url": "sec-line-integrals.html#q-units",
  "type": "Checkpoint",
  "number": "1.3.11",
  "title": "Units.",
  "body": " Units   If we use meters and kilograms as the units of length and mass respectively, then what will the units of and be?     is a length, so it is measured in meters ( ), and is a mass per unit length, so it is measured in kilograms per meter ( ). The product is then measured in kilograms, as a contribution to a mass must be.   "
},
{
  "id": "q-integrand",
  "level": "2",
  "url": "sec-line-integrals.html#q-integrand",
  "type": "Checkpoint",
  "number": "1.3.12",
  "title": "What is being integrated?",
  "body": " What is being integrated?   In the above applications of line integrals of scalar functions , what is the scalar function that is being integrated (the integrand) along the wire?    For the mass the integrand is the density, . For the length the integrand is the constant function : the length is the mass of a wire of density one.   "
},
{
  "id": "fig-square-circle-wires",
  "level": "2",
  "url": "sec-line-integrals.html#fig-square-circle-wires",
  "type": "Figure",
  "number": "1.3.13",
  "title": "",
  "body": " Two wires: the circle of radius centered at the origin, and the square inscribed in it, whose vertices lie on the circle.   A circle of radius two centered at the origin with a square inscribed in it, the square's four vertices lying on the circle.   A coordinate grid showing two closed curves. The first is a circle of radius two centered at the origin, passing through the marked point two comma zero. The second is a square inscribed in that circle, with horizontal and vertical sides and with its four vertices, at plus or minus root two in each coordinate, lying on the circle. The square's sides therefore cut across the inside of the circle.     R = 2  h = 1.4142135624       x^2+y^2=4       \\left(-\\sqrt{2},\\sqrt{2}\\right)       (2,0)     \\left(\\sqrt{2},\\sqrt{2}\\right)                 "
},
{
  "id": "q-circular-wire-mass",
  "level": "2",
  "url": "sec-line-integrals.html#q-circular-wire-mass",
  "type": "Checkpoint",
  "number": "1.3.14",
  "title": "A mass with no parametrization.",
  "body": " A mass with no parametrization   Assume that the density of the circular wire in is given by . Without parametrizing , find its mass.     .    Every point of the wire lies on the circle of radius , so  along the curve , and the density is not really varying at all:   A constant comes out of the integral, and what is left is the length of the wire, namely the circumference :   This is the one situation in which a line integral needs no parametrization: when the integrand is constant on the curve, the integral is that constant times the length.   "
},
{
  "id": "q-radius-independence",
  "level": "2",
  "url": "sec-line-integrals.html#q-radius-independence",
  "type": "Checkpoint",
  "number": "1.3.15",
  "title": "Does the radius matter?",
  "body": " Does the radius matter?   Assume that the mass density of a circular wire of radius centered at the origin is given by . Which statement is correct?    The mass of the wire is independent of its radius .    The mass of the wire increases as increases.    The mass of the wire decreases as decreases.      Only option A.    On the circle of radius we have , so is constant along the wire and   independently of . Only option A is correct.   "
},
{
  "id": "q-square-vs-circle-mass",
  "level": "2",
  "url": "sec-line-integrals.html#q-square-vs-circle-mass",
  "type": "Checkpoint",
  "number": "1.3.16",
  "title": "Which wire is heavier?",
  "body": " Which wire is heavier?   Assume that the density of the square-shaped wire and of the circular wire graphed in is given by . Then, without parametrizing the curves, choose the correct option below. Which statement is correct?    The circular wire is heavier.    The square-shaped wire is heavier.    The two wires have the same mass.      Only option A.     The circle. Here is the square of the distance to the origin, and on a circle of radius centered at the origin that distance never changes. So is constant along the wire, it comes out of the integral, and what is left is the circumference:    The square. We do not need its mass exactly an upper bound is enough. The square is inscribed in the circle, so every one of its points lies inside or on the circle, which is to say   Replacing the integrand by that upper bound, and using that the square has side and hence perimeter ,   The inequality is strict because everywhere on the square except at its four vertices. So the square weighs less than while the circle weighs : the circular wire is heavier, and neither integral had to be parametrized. Only option A is correct.   "
},
{
  "id": "q-charge-symmetry",
  "level": "2",
  "url": "sec-line-integrals.html#q-charge-symmetry",
  "type": "Checkpoint",
  "number": "1.3.17",
  "title": "A charged wire.",
  "body": " A charged wire   Assume that the charge density of the square-shaped wire and of the circular wire graphed in is given by . Then, without parametrizing the curves, choose the correct option(s) below. Select all that apply.    The circular wire is negatively charged.    The square-shaped wire is positively charged.    In both cases (square and circular wires) the amount of positive charge is equal to the amount of negative charge.      Option C is correct.    Let us focus on the quarter of each wire lying where and , so that the absolute values disappear and   The line cuts that quarter into two halves, as in . Below the line we have , so there and the wire carries positive charge; above it , so and the charge is negative.  Now reflect in the line , that is, interchange and . This reflection carries each of the two shapes onto itself and it does not change lengths, so it matches the lower half of the quarter with the upper half piece for piece. On corresponding pieces the density is exactly opposite,   so the positive charge on the half below the line is exactly cancelled by the negative charge on the half above it: this quarter of each wire is neutral. The same argument applies to the other three quarters, where the line of reflection is and the density is again . Adding up the four quarters,   for both the square and the circle. Neither wire is charged overall: each carries exactly as much positive as negative charge. Option C is correct.   The quarter of each wire in the first quadrant, where . Below the line we have , so the density is positive; above it and the density is negative; and reflecting in that line matches the two halves of each wire piece for piece while reversing the sign of .   The first-quadrant quarter of the circular and square wires, split by the line y equals x into a region of positive density and a region of negative density.   The first quadrant of a coordinate grid. A quarter of the circle of radius two runs from the point two comma zero on the x axis up to the point zero comma two on the y axis. The corner of the inscribed square is drawn as two straight segments, one going up the vertical line x equals root two and one going left along the horizontal line y equals root two, meeting at the vertex root two comma root two, which lies on the circle. A dashed line y equals x runs from the origin out through that vertex, cutting both wires into two halves. The region below the dashed line is labeled x greater than y, so the density is positive; the region above it is labeled x less than y, so the density is negative.     R = 2  h = 1.4142135624  q(t) = (R*cos(t), R*sin(t))             y=x       \\rho \\geq 0    \\rho \\leq 0                    "
},
{
  "id": "sec-vector-fields",
  "level": "1",
  "url": "sec-vector-fields.html",
  "type": "Section",
  "number": "1.4",
  "title": "Vector Fields and Line Integrals",
  "body": " Vector Fields and Line Integrals   In this section we meet two ideas. A vector field attaches a vector a magnitude and a direction to every point of the plane or of space; think of the velocity of the air at each point of a room, or the gravitational pull at each point around a planet. The line integral of a vector field then answers a natural question: as an object moves along a curve through the field, how much does the field push it along its way? The physical name for this accumulated push is work .     Vector Fields  What is a vector field? We will study the definition through an example. Assume that we have a function on : the function takes two real numbers as its input and outputs a vector in . As an example, consider the following vector field: To visualize this vector field, imagine that at each point there is a vector attached. Physically, this vector could correspond to the velocity of an atom located at the point . See .   The vector field . Every arrow points directly away from the origin, and the arrows get longer as the distance from the origin grows.   A grid of arrows all pointing away from the origin, growing longer farther from the origin.   The plane with x and y from minus 5 to 5. At each point of a regular grid a blue arrow points radially outward, directly away from the origin. Arrows near the origin are short; arrows near the edge of the picture are long. A red dot marks the origin, where the field is the zero vector.     F(x,y) = (0.22*x, 0.22*y)                           Note that the length of the vector in is , the distance from the origin. This is why the blue arrows in grow in length as we move away from the origin along a straight line. Can we modify the vector field so that the length of the vectors is one at every point? The answer is yes: dividing the vector by its own length produces a unit vector, and hence the vector field of , when visualized, looks like : the directions are unchanged, but now all arrows have the same length.   The normalized field : same directions as , but every arrow has length one.   A grid of arrows all pointing away from the origin, all of the same length.   The plane with x and y from minus 5 to 5. At each point of a regular grid a blue arrow points radially outward, directly away from the origin, and every arrow has exactly the same length. A red dot marks the origin, where the field is undefined.      U(x,y) = (0.55*x\/sqrt(x^2+y^2+0.0001), 0.55*y\/sqrt(x^2+y^2+0.0001))                           Our next example is a vector field which is a function on . Consider the following vector field: This field has the same dependence on , and as the gravitational force exerted by a massive body located at the origin. The gravitational force exerted by a mass at the origin on a mass at the point is the gravitational force field  , where is the gravitational constant and the minus sign makes the force point back toward the origin. The field studied here is that force with the constant stripped off, so the two differ only by a positive factor and point the same way at every point. Every arrow points toward the origin, and since , the pull weakens with the square of the distance the inverse-square law. See . We will meet this field again in .   The field , which depends on , and exactly as the gravitational force does. All arrows point toward the origin and shrink with the square of the distance.   A three-dimensional grid of arrows all pointing toward the origin, longer near the origin.   A three-dimensional box with x, y, and z from minus 0.7 to 0.7. At each point of a coarse three-dimensional grid a blue arrow points directly toward the center of the box, where a red dot marks the origin. Arrows close to the origin are long; arrows at the corners of the box are short.         Work (Reminder)  Our goal is to study the line integral of a vector field over a curve , and we will do so using an example from physics: calculating the amount of work done by a force , which in general can be a function of , , and . Before we present the example, let us remind ourselves of the definition of work. Consider a box being pulled by a constant force , as shown in .   A box pulled by a constant force applied at an angle . The displacement is measured below the ground line, from the centre of mass of the box in its initial position to its centre of mass in the final position (the faint box). Only the component along the motion does work.   A box on a horizontal line pulled by a tilted force arrow, with the horizontal component of the force and the displacement marked.   A horizontal line represents the ground, with a small box sitting on it at the left. A red arrow labelled F points up and to the right from the top of the box, making an angle alpha with the horizontal; a small arc marks the angle. A shorter blue horizontal arrow labelled the magnitude of F times cosine alpha, times i, shows the horizontal component of the force. A faint second box to the right marks the final position. The centre of each box is marked with a dot, and a dashed vertical line drops from each centre to a dashed double-headed arrow drawn below the ground line and labelled delta x, so the displacement is measured from one centre of mass to the other.                \\mathbf{F}     \\alpha       \\left\\lVert\\mathbf{F}\\right\\rVert\\cos(\\alpha)\\,\\mathbf{i}           \\delta x                  The amount of work done by the force is equal to the magnitude of the force in the direction of motion, , multiplied by the amount of displacement : The last equality holds because the motion is in the -direction, which lets us rewrite as the dot product . This dot-product form is the one that generalizes: work is the dot product of the force with the displacement .     Work of a Force Field  Let us now consider the situation where a force is acting on an object and causing it to move along a curved trajectory from an initial point to a final point. Neither the force nor the direction of motion is constant anymore, so we cannot apply directly. Instead, we reuse the strategy of : calculate the work on small subarcs of the trajectory, where force and direction are nearly constant, and then sum up. shows one such subarc.   On the th subarc, of length , the direction of motion is the unit tangent vector (green) and the force is approximately (red). Only the tangential component of the force does work.   A curved trajectory with one short subarc highlighted, showing the force vector and the unit tangent vector at a point.   A black curve rises from a red point near the origin, bending upward to a red endpoint at the upper right. A short piece of the curve, labelled Delta s sub k, is drawn thicker in blue. At a black point on this piece, a red arrow labelled F of (x sub k, y sub k) points steeply up and to the right, and a shorter green arrow labelled T sub k points along the curve in the direction of motion.     q(t) = (t, 0.5+0.5*t^2)  tk = 0.52              \\Delta s_k         \\mathbf{F}(x_k,y_k)     \\mathbf{T}_k                  On the th subarc the displacement has length and direction , the unit tangent vector, so by the dot-product formula for work, the work done along the th subarc is . Therefore the work done over the whole curve can be approximated as Finally, to find the exact amount of work we take the limit of as the number of subarcs approaches infinity: where is the unit tangent vector of the curve. Since the combination in is simply by , and we arrive at the compact form   In practice, once the curve is parametrized by for , becomes evaluate the field along the curve, dot it with the velocity, and integrate over time.  The applet below carries every ingredient of at once: a curve parametrized by , the velocity tangent to it, and a force field evaluated at the moving point. Work out what the integrand is doing before you compute anything.   A point climbs the curve while the force field and the velocity are drawn at its current position. The work is the accumulated , so the angle between the two arrows is what decides its sign.     Work was our motivation, but any vector field can be integrated over a curve in this fashion; the number it produces is also called the circulation of along , a name that becomes the usual one when is a closed curve. shows the accumulation of along a trajectory.   As the object moves through the field along the trajectory, the work accumulates moment by moment from the tangential component of the force.    There is a third, frequently used way to write the same integral. Assume the vector field has components . Since , expanding the dot product gives the differential form of the line integral: All three notations , , and mean exactly the same thing.      Work along a twisted cubic   Calculate the work done by the force over the curve : from to .    We use . The curve, shown in , runs from to , so the parameter interval is . We begin by writing the force in terms of the parameter , substituting , , :   where the first component vanishes identically along this particular curve. The velocity vector is Finally, the amount of work is    The twisted cubic , , from the origin to . The dashed gray curve is its shadow on the plane .   A curve in space rising from the origin to the point (1,1,1), with its shadow on the floor.   A three-dimensional box with x, y, and z from 0 to 1.1. A thick blue curve starts at a red point at the origin, labelled (0,0,0), hugs the floor at first, then sweeps upward ever more steeply to a red point labelled (1,1,1) at the far upper corner. A dashed gray parabola on the floor shows the curve's shadow.            Work done by an inverse-square field along a helix   Calculate the line integral over the curve from to .    This integral is in the differential form with , and we recognize the field: the inverse-square field , drawn in , which varies with position just as the gravitational force does. The curve is a helix that climbs one full turn, from at to at ; see .  We write the field along the curve in terms of . On the helix, so The velocity vector is , and the dot product collapses nicely:   Therefore, using the substitution , ,   The work is negative, and the picture explains why: the field always points toward the origin, while the helix climbs steadily away from it, so the tangential component of the force opposes the motion at every instant. The accumulation of this negative work is animated in .   The helix , , climbing through the field (orange arrows, direction only). At the same three points the velocity is drawn in green: at every one of them the field leans away from the direction of travel, which is why the work comes out negative.   One full turn of a helix rising from (1,0,0) to (1,0,2 pi), with arrows along it pointing toward the origin.   A three-dimensional box with x and y from minus 1.4 to 1.4 and z from 0 to 7. A thick blue helix makes one full counterclockwise turn of radius one, starting at a red point labelled (1,0,0), t equals 0, on the floor and ending at a red point labelled (1,0,2 pi), t equals 2 pi, directly above it. A dashed gray unit circle on the floor is the helix's shadow. Three orange arrows attached to points of the helix, labelled F, point inward and downward, toward the origin. At the same three points three green arrows, labelled v, point along the helix in the direction of travel, upward and around; each green arrow makes an obtuse angle with the orange one beside it.       A particle climbs the helix through the field while the work accumulates, reaching at the top: the field opposes the motion the whole way.       The same endpoints, two paths, two answers   Calculate the work done by the force in moving a particle from to along each of the following two paths:    , the straight segment from to , parametrized by , ;     , the arc of the parabola from to , parametrized by , .       Both curves start at and end at , as shown in , so any difference between the two answers can come only from the paths themselves. We use for each one.   The two paths of drawn in the field : the segment along and the arc along , both running from to . The field pushes harder along one than the other, and the two answers and differ.   A straight segment and a parabolic arc, both joining the origin to the point one comma one, drawn in a field of arrows.   The first quadrant, with x and y running from zero to a little past one, carrying a grid of blue field arrows. Along the x axis they point straight up and along the y axis they point straight right, turning and lengthening in between. Two curves join the origin O to the point P at one comma one: a green straight segment labelled C 1 along the line y equals x, and a vermillion arc labelled C 2 following the parabola y equals x squared, which bows below the segment. Each curve carries an arrowhead pointing from O toward P.     F(x,y) = (0.11*y, 0.22*x)  c1(t) = (t, t)  c2(t) = (t, t^2)              C_1       C_2       O     P                    Along . Here and , so and . Therefore    Along . Here and , so and . Therefore   Since and are not equal, the line integral of from to depends on the path taken, and not on the endpoints alone. Knowing where a curve starts and ends is therefore not enough, in general, to determine the work. Deciding which fields are the exception those for which the endpoints are enough is the question taken up in .        Concept Check   Positive, negative, or zero?   In , determine whether the work done by the force field along the two paths and is positive, negative, or zero.   Two closed paths in the radial field : the ellipse and the circle . Notice the orientation of each curve.   An ellipse and a circle centred at the origin, drawn in a field of arrows that point away from the origin, each curve carrying an arrowhead that gives its direction of travel.   The plane with x and y from minus 5 to 5, filled with blue arrows that point straight away from the origin and grow longer with the distance from it. A green ellipse crosses the x axis at plus and minus three and the y axis at plus and minus one; its arrowhead, just above the origin, points in the negative x direction, so the ellipse is traversed counterclockwise. A black circle of radius two is centred at the origin; its arrowhead, in the upper right, points down and to the right, so the circle is traversed clockwise. A red dot marks the origin, where the field is the zero vector.     F(x,y) = (0.22*x, 0.22*y)  c1(t) = (3*cos(t), sin(t))  c2(t) = (2*cos(t), -2*sin(t))              C_2       C_1                        Zero along both paths but for two different reasons.    The field is , which at every point aims straight away from the origin.   The circle . A circle centred at the origin keeps a constant distance from it, so the direction of travel is everywhere perpendicular to the outward direction: at every point of the curve. The integrand of vanishes identically, so the work is zero. Reversing the orientation changes nothing zero either way.   On a circle centred at the origin the field (red) points straight out and the direction of travel (green) runs around, so the two are perpendicular at every point and throughout.   A circle centred at the origin in a radial field, with the field vector and the tangent vector drawn at four points and a right angle marked between them.   A circle of radius two centred at the origin, drawn on a coordinate grid over a sparse field of blue arrows that point straight away from the origin. At each of four points of the circle two arrows are attached: a red one pointing radially outward, away from the origin, and a green one tangent to the circle in the counterclockwise direction of travel. A small square at each of those points marks the right angle between the red and the green arrow.     G(x,y) = (0.18*x, 0.18*y)  R = 2  k(t) = (R*cos(t), R*sin(t))  rad(t) = (0.85*cos(t), 0.85*sin(t))  tan(t) = (-0.85*sin(t), 0.85*cos(t))  sq = 0.28                     \\mathbf{F}    \\mathbf{T}                       The ellipse . Here the integrand does not vanish: on the stretches where the curve moves away from the origin the field pushes it along and , while on the stretches where it moves back inward . Over one full circuit the curve returns to where it started, so the outward stretches and the inward stretches cancel exactly and the total is again zero. Reversing the orientation swaps which stretches are positive, and the total is still zero.   On an ellipse the distance from the origin rises and falls. Along the green stretches the curve moves outward and ; along the orange stretches it moves back inward and . At the four marked points the distance is momentarily stationary and the integrand is zero. Over a full circuit the two kinds of stretch cancel.   An ellipse centred at the origin whose arcs are coloured according to whether the motion carries the point away from the origin or back toward it.   An ellipse centred at the origin, three units wide and one unit tall, drawn over a sparse field of blue arrows pointing away from the origin. The ellipse is traversed counterclockwise. Its four quarters alternate in colour: the two along which the point moves away from the origin are green and marked with a plus, and the two along which it moves back toward the origin are orange and marked with a minus. At one green point and one orange point the outward field vector and the tangent vector are drawn; at the green point they make an acute angle, at the orange point an obtuse one. Four black dots mark the ends of the axes, where the distance from the origin stops changing.     G(x,y) = (0.18*x, 0.18*y)  e(t) = (3*cos(t), sin(t))  rade(t) = (0.75*3*cos(t)\/sqrt(9*cos(t)^2+sin(t)^2), 0.75*sin(t)\/sqrt(9*cos(t)^2+sin(t)^2))  tane(t) = (-0.75*3*sin(t)\/sqrt(9*sin(t)^2+cos(t)^2), 0.75*cos(t)\/sqrt(9*sin(t)^2+cos(t)^2))               -    -        +    +                \\text{moving outward}    \\text{moving inward}                           "
},
{
  "id": "fig-radial-field",
  "level": "2",
  "url": "sec-vector-fields.html#fig-radial-field",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " The vector field . Every arrow points directly away from the origin, and the arrows get longer as the distance from the origin grows.   A grid of arrows all pointing away from the origin, growing longer farther from the origin.   The plane with x and y from minus 5 to 5. At each point of a regular grid a blue arrow points radially outward, directly away from the origin. Arrows near the origin are short; arrows near the edge of the picture are long. A red dot marks the origin, where the field is the zero vector.     F(x,y) = (0.22*x, 0.22*y)                          "
},
{
  "id": "fig-unit-radial-field",
  "level": "2",
  "url": "sec-vector-fields.html#fig-unit-radial-field",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " The normalized field : same directions as , but every arrow has length one.   A grid of arrows all pointing away from the origin, all of the same length.   The plane with x and y from minus 5 to 5. At each point of a regular grid a blue arrow points radially outward, directly away from the origin, and every arrow has exactly the same length. A red dot marks the origin, where the field is undefined.      U(x,y) = (0.55*x\/sqrt(x^2+y^2+0.0001), 0.55*y\/sqrt(x^2+y^2+0.0001))                          "
},
{
  "id": "subsec-vector-fields-6",
  "level": "2",
  "url": "sec-vector-fields.html#subsec-vector-fields-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gravitational force field "
},
{
  "id": "fig-gravity-field",
  "level": "2",
  "url": "sec-vector-fields.html#fig-gravity-field",
  "type": "Figure",
  "number": "1.4.3",
  "title": "",
  "body": " The field , which depends on , and exactly as the gravitational force does. All arrows point toward the origin and shrink with the square of the distance.   A three-dimensional grid of arrows all pointing toward the origin, longer near the origin.   A three-dimensional box with x, y, and z from minus 0.7 to 0.7. At each point of a coarse three-dimensional grid a blue arrow points directly toward the center of the box, where a red dot marks the origin. Arrows close to the origin are long; arrows at the corners of the box are short.     "
},
{
  "id": "fig-work-reminder",
  "level": "2",
  "url": "sec-vector-fields.html#fig-work-reminder",
  "type": "Figure",
  "number": "1.4.4",
  "title": "",
  "body": " A box pulled by a constant force applied at an angle . The displacement is measured below the ground line, from the centre of mass of the box in its initial position to its centre of mass in the final position (the faint box). Only the component along the motion does work.   A box on a horizontal line pulled by a tilted force arrow, with the horizontal component of the force and the displacement marked.   A horizontal line represents the ground, with a small box sitting on it at the left. A red arrow labelled F points up and to the right from the top of the box, making an angle alpha with the horizontal; a small arc marks the angle. A shorter blue horizontal arrow labelled the magnitude of F times cosine alpha, times i, shows the horizontal component of the force. A faint second box to the right marks the final position. The centre of each box is marked with a dot, and a dashed vertical line drops from each centre to a dashed double-headed arrow drawn below the ground line and labelled delta x, so the displacement is measured from one centre of mass to the other.                \\mathbf{F}     \\alpha       \\left\\lVert\\mathbf{F}\\right\\rVert\\cos(\\alpha)\\,\\mathbf{i}           \\delta x                 "
},
{
  "id": "fig-work-subarc",
  "level": "2",
  "url": "sec-vector-fields.html#fig-work-subarc",
  "type": "Figure",
  "number": "1.4.5",
  "title": "",
  "body": " On the th subarc, of length , the direction of motion is the unit tangent vector (green) and the force is approximately (red). Only the tangential component of the force does work.   A curved trajectory with one short subarc highlighted, showing the force vector and the unit tangent vector at a point.   A black curve rises from a red point near the origin, bending upward to a red endpoint at the upper right. A short piece of the curve, labelled Delta s sub k, is drawn thicker in blue. At a black point on this piece, a red arrow labelled F of (x sub k, y sub k) points steeply up and to the right, and a shorter green arrow labelled T sub k points along the curve in the direction of motion.     q(t) = (t, 0.5+0.5*t^2)  tk = 0.52              \\Delta s_k         \\mathbf{F}(x_k,y_k)     \\mathbf{T}_k                 "
},
{
  "id": "fig-work-geogebra",
  "level": "2",
  "url": "sec-vector-fields.html#fig-work-geogebra",
  "type": "Figure",
  "number": "1.4.6",
  "title": "",
  "body": " A point climbs the curve while the force field and the velocity are drawn at its current position. The work is the accumulated , so the angle between the two arrows is what decides its sign.    "
},
{
  "id": "subsec-work-force-field-8",
  "level": "2",
  "url": "sec-vector-fields.html#subsec-work-force-field-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circulation "
},
{
  "id": "fig-work-video",
  "level": "2",
  "url": "sec-vector-fields.html#fig-work-video",
  "type": "Figure",
  "number": "1.4.7",
  "title": "",
  "body": " As the object moves through the field along the trajectory, the work accumulates moment by moment from the tangential component of the force.   "
},
{
  "id": "subsec-work-force-field-10",
  "level": "2",
  "url": "sec-vector-fields.html#subsec-work-force-field-10",
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
  "number": "1.4.8",
  "title": "Work along a twisted cubic.",
  "body": " Work along a twisted cubic   Calculate the work done by the force over the curve : from to .    We use . The curve, shown in , runs from to , so the parameter interval is . We begin by writing the force in terms of the parameter , substituting , , :   where the first component vanishes identically along this particular curve. The velocity vector is Finally, the amount of work is    The twisted cubic , , from the origin to . The dashed gray curve is its shadow on the plane .   A curve in space rising from the origin to the point (1,1,1), with its shadow on the floor.   A three-dimensional box with x, y, and z from 0 to 1.1. A thick blue curve starts at a red point at the origin, labelled (0,0,0), hugs the floor at first, then sweeps upward ever more steeply to a red point labelled (1,1,1) at the far upper corner. A dashed gray parabola on the floor shows the curve's shadow.       "
},
{
  "id": "ex-helix-gravity",
  "level": "2",
  "url": "sec-vector-fields.html#ex-helix-gravity",
  "type": "Example",
  "number": "1.4.10",
  "title": "Work done by an inverse-square field along a helix.",
  "body": " Work done by an inverse-square field along a helix   Calculate the line integral over the curve from to .    This integral is in the differential form with , and we recognize the field: the inverse-square field , drawn in , which varies with position just as the gravitational force does. The curve is a helix that climbs one full turn, from at to at ; see .  We write the field along the curve in terms of . On the helix, so The velocity vector is , and the dot product collapses nicely:   Therefore, using the substitution , ,   The work is negative, and the picture explains why: the field always points toward the origin, while the helix climbs steadily away from it, so the tangential component of the force opposes the motion at every instant. The accumulation of this negative work is animated in .   The helix , , climbing through the field (orange arrows, direction only). At the same three points the velocity is drawn in green: at every one of them the field leans away from the direction of travel, which is why the work comes out negative.   One full turn of a helix rising from (1,0,0) to (1,0,2 pi), with arrows along it pointing toward the origin.   A three-dimensional box with x and y from minus 1.4 to 1.4 and z from 0 to 7. A thick blue helix makes one full counterclockwise turn of radius one, starting at a red point labelled (1,0,0), t equals 0, on the floor and ending at a red point labelled (1,0,2 pi), t equals 2 pi, directly above it. A dashed gray unit circle on the floor is the helix's shadow. Three orange arrows attached to points of the helix, labelled F, point inward and downward, toward the origin. At the same three points three green arrows, labelled v, point along the helix in the direction of travel, upward and around; each green arrow makes an obtuse angle with the orange one beside it.       A particle climbs the helix through the field while the work accumulates, reaching at the top: the field opposes the motion the whole way.     "
},
{
  "id": "ex-work-path-dependence",
  "level": "2",
  "url": "sec-vector-fields.html#ex-work-path-dependence",
  "type": "Example",
  "number": "1.4.13",
  "title": "The same endpoints, two paths, two answers.",
  "body": " The same endpoints, two paths, two answers   Calculate the work done by the force in moving a particle from to along each of the following two paths:    , the straight segment from to , parametrized by , ;     , the arc of the parabola from to , parametrized by , .       Both curves start at and end at , as shown in , so any difference between the two answers can come only from the paths themselves. We use for each one.   The two paths of drawn in the field : the segment along and the arc along , both running from to . The field pushes harder along one than the other, and the two answers and differ.   A straight segment and a parabolic arc, both joining the origin to the point one comma one, drawn in a field of arrows.   The first quadrant, with x and y running from zero to a little past one, carrying a grid of blue field arrows. Along the x axis they point straight up and along the y axis they point straight right, turning and lengthening in between. Two curves join the origin O to the point P at one comma one: a green straight segment labelled C 1 along the line y equals x, and a vermillion arc labelled C 2 following the parabola y equals x squared, which bows below the segment. Each curve carries an arrowhead pointing from O toward P.     F(x,y) = (0.11*y, 0.22*x)  c1(t) = (t, t)  c2(t) = (t, t^2)              C_1       C_2       O     P                    Along . Here and , so and . Therefore    Along . Here and , so and . Therefore   Since and are not equal, the line integral of from to depends on the path taken, and not on the endpoints alone. Knowing where a curve starts and ends is therefore not enough, in general, to determine the work. Deciding which fields are the exception those for which the endpoints are enough is the question taken up in .   "
},
{
  "id": "q-work-sign-two-paths",
  "level": "2",
  "url": "sec-vector-fields.html#q-work-sign-two-paths",
  "type": "Checkpoint",
  "number": "1.4.15",
  "title": "Positive, negative, or zero?",
  "body": " Positive, negative, or zero?   In , determine whether the work done by the force field along the two paths and is positive, negative, or zero.   Two closed paths in the radial field : the ellipse and the circle . Notice the orientation of each curve.   An ellipse and a circle centred at the origin, drawn in a field of arrows that point away from the origin, each curve carrying an arrowhead that gives its direction of travel.   The plane with x and y from minus 5 to 5, filled with blue arrows that point straight away from the origin and grow longer with the distance from it. A green ellipse crosses the x axis at plus and minus three and the y axis at plus and minus one; its arrowhead, just above the origin, points in the negative x direction, so the ellipse is traversed counterclockwise. A black circle of radius two is centred at the origin; its arrowhead, in the upper right, points down and to the right, so the circle is traversed clockwise. A red dot marks the origin, where the field is the zero vector.     F(x,y) = (0.22*x, 0.22*y)  c1(t) = (3*cos(t), sin(t))  c2(t) = (2*cos(t), -2*sin(t))              C_2       C_1                        Zero along both paths but for two different reasons.    The field is , which at every point aims straight away from the origin.   The circle . A circle centred at the origin keeps a constant distance from it, so the direction of travel is everywhere perpendicular to the outward direction: at every point of the curve. The integrand of vanishes identically, so the work is zero. Reversing the orientation changes nothing zero either way.   On a circle centred at the origin the field (red) points straight out and the direction of travel (green) runs around, so the two are perpendicular at every point and throughout.   A circle centred at the origin in a radial field, with the field vector and the tangent vector drawn at four points and a right angle marked between them.   A circle of radius two centred at the origin, drawn on a coordinate grid over a sparse field of blue arrows that point straight away from the origin. At each of four points of the circle two arrows are attached: a red one pointing radially outward, away from the origin, and a green one tangent to the circle in the counterclockwise direction of travel. A small square at each of those points marks the right angle between the red and the green arrow.     G(x,y) = (0.18*x, 0.18*y)  R = 2  k(t) = (R*cos(t), R*sin(t))  rad(t) = (0.85*cos(t), 0.85*sin(t))  tan(t) = (-0.85*sin(t), 0.85*cos(t))  sq = 0.28                     \\mathbf{F}    \\mathbf{T}                       The ellipse . Here the integrand does not vanish: on the stretches where the curve moves away from the origin the field pushes it along and , while on the stretches where it moves back inward . Over one full circuit the curve returns to where it started, so the outward stretches and the inward stretches cancel exactly and the total is again zero. Reversing the orientation swaps which stretches are positive, and the total is still zero.   On an ellipse the distance from the origin rises and falls. Along the green stretches the curve moves outward and ; along the orange stretches it moves back inward and . At the four marked points the distance is momentarily stationary and the integrand is zero. Over a full circuit the two kinds of stretch cancel.   An ellipse centred at the origin whose arcs are coloured according to whether the motion carries the point away from the origin or back toward it.   An ellipse centred at the origin, three units wide and one unit tall, drawn over a sparse field of blue arrows pointing away from the origin. The ellipse is traversed counterclockwise. Its four quarters alternate in colour: the two along which the point moves away from the origin are green and marked with a plus, and the two along which it moves back toward the origin are orange and marked with a minus. At one green point and one orange point the outward field vector and the tangent vector are drawn; at the green point they make an acute angle, at the orange point an obtuse one. Four black dots mark the ends of the axes, where the distance from the origin stops changing.     G(x,y) = (0.18*x, 0.18*y)  e(t) = (3*cos(t), sin(t))  rade(t) = (0.75*3*cos(t)\/sqrt(9*cos(t)^2+sin(t)^2), 0.75*sin(t)\/sqrt(9*cos(t)^2+sin(t)^2))  tane(t) = (-0.75*3*sin(t)\/sqrt(9*sin(t)^2+cos(t)^2), 0.75*cos(t)\/sqrt(9*sin(t)^2+cos(t)^2))               -    -        +    +                \\text{moving outward}    \\text{moving inward}                         "
},
{
  "id": "section-conservative-fields",
  "level": "1",
  "url": "section-conservative-fields.html",
  "type": "Section",
  "number": "1.5",
  "title": "Path Independence, Conservative Fields, and Potential Functions",
  "body": " Path Independence, Conservative Fields, and Potential Functions  Before we begin discussing the actual topic of today's lecture, we will need to study a particular type of a vector field known as a gradient field .    A Brief Reminder (Gradient Fields)   Gradient Field   The gradient field of a differentiable function is the field of gradient vectors     At each point , the gradient field gives a vector pointing in the direction of greatest increase of . Let us emphasize that even though the function is a scalar-valued function, its gradient is a vector-valued one by definition. As an example, see .   The surface together with its gradient field , drawn in the -plane. The gradient vectors point radially away from the origin, the direction of steepest ascent, and grow longer as we move away from the origin.   A paraboloid above the plane, with gradient arrows below it pointing radially outward.  An upward-opening paraboloid, the graph of z equals x squared plus y squared, drawn as a translucent blue surface. In the x y plane below it, blue arrows of the gradient field point radially outward from the origin, growing longer at points farther from the origin.     In , you see the scalar-valued function , which is a function on , and according to , its gradient is   The gradient field is visualized in the -plane and the value of the function at each point is plotted on the -axis. Intuitively, the gradient of a function at a point is a vector pointing in the direction of the steepest slope.     Path Independence and Some Basic Definitions  Previously, in , we saw that the line integral of a vector field depends on the path in general. Then, the natural question to ask is:    What are the conditions under which the line integral of a vector field from point to point is independent of the curve taken to go from to ?    Answering this question requires a few new ideas, so we introduce them first.   Reminder  A smooth curve has no sharp corners or cusps; when the tangent vector turns, it does so continuously.    Open, Connected, and Simply Connected Regions; Conservative Fields      A region is open if for every point in there is a disk with center that lies entirely in , which means that doesn't contain any of its boundary points.    Consider an open region in space and a vector field . If the result of the line integral from to is the same for all possible paths inside , then the line integral is said to be path-independent inside and the field is said to be conservative on .    If a vector field can be written as , where is a scalar-valued function, then is a potential function .     Piecewise smooth curves are curves that are made up of finitely many smooth pieces.    An open region is said to be connected if any two points in can be joined by a smooth curve that lies in the region.     is simply connected , which means that every loop in can be contracted to a point in without ever leaving . (See .)        On the left, a simply connected region: every loop can be contracted to a point without leaving the region. On the right, a region that is not simply connected: the loop encircles a hole and cannot be contracted to a point while staying inside the region.    A blob-shaped region with no holes.    blob(t) = ((1.5 + 0.55*sin(2*t) + 0.3*cos(3*t))*cos(t) + 0.2, (1.2 + 0.45*cos(2*t) + 0.25*sin(3*t))*sin(t) + 0.4)     Simply connected            A blob-shaped region with two holes and a loop around one hole.    blob(t) = ((1.9 + 0.4*sin(2*t))*cos(t), (1.25 + 0.3*cos(3*t))*sin(t) + 0.3)         C_1  Not simply connected                   Line Integrals in Conservative Fields  Next, we will study the line integrals of conservative fields, in the sense of . As you will recognize, if you think of the gradient of a vector field as its derivative, then the fundamental theorem of line integrals makes a similar statement for vector-valued functions as the one made for definite integrals of scalar-valued functions, i.e., the one that you know as FTC II. The Fundamental Theorem of Calculus, Part II: if is continuous on and is any antiderivative of on that interval, then . It evaluates a definite integral from the values of an antiderivative at the two endpoints, and does the same for a line integral, using the values of a potential function at the two endpoints of the curve.    Fundamental Theorem of Line Integrals   Let be a smooth curve joining the point to the point in the plane or in space and parametrized by . Let be a differentiable function with a continuous gradient vector on a domain containing . Then     Assuming that the curve is parametrised as , we have and we can rewrite the line integral as     In , the region is drawn as a translucent solid and the curve is in red. According to the fundamental theorem, the line integral of a conservative vector field can be easily calculated by calculating the values of its corresponding potential function ( ) at the beginning (point ) and end (point ) of the curve .   A smooth curve joining to inside an open region in space, drawn as a translucent solid containing . For a conservative field , the line integral along equals , no matter how winds from to .   A curve winding from point A to point B inside a dotted region in space.  Three coordinate axes in space with a translucent blue solid marking an open region D. Inside the solid, a red curve C winds from the point A with coordinates x 1 comma y 1 comma z 1 to the point B with coordinates x 2 comma y 2 comma z 2, with an arrowhead at the middle of the curve showing the direction of travel from A to B.     The central idea of the theorem that only the endpoints matter is animated in .   Animation of the fundamental theorem of line integrals for the field with . Two different curves join to : the helix and the straight segment . The accumulated value of each line integral is tracked as the paths are traced, and both integrals arrive at the same value .    In the next example, we will see how we can use .   Example I   Consider the scalar-valued function .     Calculate the gradient vector field .    Evaluate the line integral of the vector field over the curve parametrized as from to .    What is the result of from to where is the line connecting the two points?         A. We compute the three partial derivatives of :    B. Of course, one way would be to calculate the line integral using the vector field calculated in part A, exactly as was done in ; however, provides us with a much more efficient way of calculating the line integral as follows:    C. The result is the same as part B and it agrees with the direct computation of since the vector field is a conservative field ( ), which means that the result of the line integral is independent of the chosen path. Note that the line integral is calculated from to in both cases. The two curves and are shown in .    The two paths of joining to : the helix , parametrized by , and the straight segment . Since is conservative, both line integrals equal .   A helix and a vertical segment joining the same two points in space.  Three coordinate axes in space showing a blue helix that winds once around the z axis, climbing from the point one comma zero comma zero up to the point one comma zero comma two pi, and a vertical vermillion segment joining the same two points directly. Both endpoints are marked and labeled.        Finding a Potential Function   Example II   Consider the vector field in the plane.     Find a function such that .    Use the solution of part (A) to calculate the line integral of along any curve from to .        A. In the plane there are two components to match instead of three. Writing , we take them one at a time.   Step I. Since , we integrate with respect to (here is the variable and is constant), so   where the constant of integration is allowed to depend on .   Step II. Since , we differentiate with respect to :   Putting the two steps together, we conclude    B. Since , the field is conservative ( ), so applies to any curve joining to :   Notice that the arbitrary constant cancels in the difference, so it never affects the value of a line integral.     Example III   Consider the vector field .     Find a function such that .    Use the solution of part (A) to calculate the line integral from to .         A. Writing , we match the components one at a time; the three steps are summarized in .   Step I. Since , we integrate with respect to (here is the variable and and are constants), so   where the constant of integration is allowed to depend on and .   Step II. Since , we differentiate with respect to :   so does not depend on , and we can write ; that is,    Step III. Since , we differentiate with respect to :   Putting the three steps together, we conclude    B. By , with and ,    The three-step cascade for building the potential function of . Each component of pins down one more piece of , shrinking the unknown constant of integration from to to the true constant .   A three-row flow diagram building the potential function step by step.       \\dfrac{\\partial f}{\\partial x} = yz    integrate in x    xyz + g(y,z)     \\dfrac{\\partial f}{\\partial y} = xz    \\partial g\/\\partial y = 0    xyz + h(z)     \\dfrac{\\partial f}{\\partial z} = xy + 2z    h'(z) = 2z    xyz + z^2 + C                       Example IV   In we computed the work done by the inverse-square field   along the helix from to , by parametrizing the curve. Do it again with .    The field is defined everywhere except at the origin, and the helix never passes through the origin, so we may look for a potential function. Rather than run the three steps of , notice that depends only on the distance , and recall that   So for the chain rule gives   so is a potential function for . Now the work needs nothing but the two endpoints. At we have , and at we have , so gives   which is , obtained there only after writing the field along the curve, taking a dot product, and evaluating an integral by substitution. The potential function did all of that work at once. Notice also what the calculation never used: the helix itself. Any other path from to that avoids the origin gives the same .       Conservative Fields are Gradient Fields   Conservative Fields are Gradient Fields   Let be a vector field whose components are continuous throughout an open connected region in space ( ). Then is conservative if and only if is a gradient field for a differentiable function .     First, we prove that a gradient field is conservative; we assume that for a differentiable function . If is any piecewise smooth curve in running from to , then gives   which depends only on the endpoints and , and not on the curve joining them. The line integral is therefore path-independent in , which is to say that is conservative on ( ).   Next, we prove that a conservative field is a gradient field; we assume that is conservative on , and we build a potential function for it. Fix a point of . Because is connected, every point of can be joined to by a curve lying in ; and because is conservative, the value of the line integral along such a curve does not depend on which one we choose. We may therefore define   the integral being taken along any curve in from to . It remains to check that .  Fix a point of . Since is open, there is a such that every point within distance of also lies in . For , let be the straight segment from to , which then lies in . Following a curve from to and then travelling along produces a curve in from to , so gives   Parametrizing by with gives , so that and   The right-hand side is the average value of along the segment from to . As that segment shrinks down to the single point , and since is continuous its values on the segment all approach ; so their average does too. Therefore . Repeating the argument with segments in the and directions gives and . Hence   and is differentiable because its partial derivatives , , and are continuous on . So is the gradient field of .    Path independence means that all of the paths in give the same value of the line integral: if is conservative, then    Three different paths , , and joining to . For a conservative field, all three line integrals have the same value .   Three different curves joining the points A and B.    c1(t) = (4*t - 1.6*t*(1-t), 3*t - 3.4*t*(1-t))  c2(t) = (4*t, 3*t)  c3(t) = (4*t - 3.4*t*(1-t), 3*t + 3.2*t*(1-t))              A    B   C_1  C_2  C_3                   The Loop Property of Conservative Fields   Loop Property of Conservative Fields   The following statements are equivalent.      around every loop (that is, closed curve ) in .    The field is conservative on .        First, we prove that (2) implies (1); we assume that is conservative. Then, as shown in , we can think about any loop as , where goes from to and returns from to . Reversing the orientation of produces the curve , and and both connect to . Since is conservative, path independence gives , and therefore   Hence for any loop .   Next, we prove that (1) implies (2); we assume that around every loop in . Let and be any two points of , and let and be any two paths in from to . Travelling along from to and then back along from to traces a loop in , so the assumption applies to it:   Therefore . Since and were arbitrary paths joining to , and and were arbitrary points of , the line integral of is path-independent in ; that is, is conservative on ( ).     On the left, a loop is split into two pieces: from to and from back to , so . On the right, the orientation of is reversed to produce ; now and both connect to , and path independence forces the two integrals to agree.    An oval loop through A and B split into an upper and a lower half.    top(t) = (2*cos(t), 1.35*sin(t) + 0.12*sin(2*t))  bot(t) = (2*cos(t), 1.35*sin(t) - 0.1*sin(2*t))      A    B   C_1  C_2   C = C_1 \\cup C_2              The same oval with the lower half reversed so both halves run from A to B.    top(t) = (2*cos(t), 1.35*sin(t) + 0.12*sin(2*t))  botrev(t) = (2*cos(-t), 1.35*sin(-t) + 0.1*sin(2*t))      A    B   C_1  -C_2   \\int_{C_1}\\mathbf F\\cdot d\\mathbf r = \\int_{-C_2}\\mathbf F\\cdot d\\mathbf r               We can now collect everything this section has proved. The content of , combined with , the loop property in , and the definition of path independence in , can be organized into the following square of equivalent statements. Throughout, is a continuous field with continuous partial derivatives on an open, connected, simply connected region .   The four statements are equivalent. Each double arrow joins the middle of one box to the middle of the next, and may be read in either direction.   Four boxed statements at the corners of a square, joined by double arrows.           \\mathbf F \\text{ is a conservative field}     \\mathbf F \\text{ is a gradient field}    \\mathbf F = \\nabla f \\text{ for some } f     \\oint_C \\mathbf F\\cdot d\\mathbf r = 0    \\text{on every loop}     \\int_C \\mathbf F\\cdot d\\mathbf r \\text{ is path independent}    \\int_C \\mathbf F\\cdot d\\mathbf r = f(B) - f(A)                         Read across the top: a conservative field is exactly a gradient field, and the potential function is what makes that concrete. Read across the bottom: path independence and the loop property are two ways of saying the same thing, and the Fundamental Theorem turns either one into a number, . Read down either side: each statement on the top implies, and is implied by, the one beneath it. In practice the four are used in whichever direction is convenient find a potential function to evaluate a line integral, or observe that a field is a gradient field to conclude at once that its integral around every loop vanishes.       Concept Check  The three questions below all use the applets that go with them. In each one, drag the slider to send the point along the curve and watch the field vector and the tangent vector move with it; the sign of their dot product is what the integral is accumulating. Every applet can be rotated by dragging the background and zoomed by scrolling.   Work Along the Helix, Two Ways   For the field and path of :    Use the parametrized path to compute the work done by the force field from point to point .    Is it possible to use the fundamental theorem of line integrals to compute that work? If so, use it to verify your answer to the previous part. Justify your answer fully.      The work is , by either method.     Directly. On the helix the point is and is , since . Along the curve   Hence    By the fundamental theorem. Yes, it applies. The field is defined and smooth on all of , which is open and simply connected ( ), and its mixed partials match: , and the -component is while neither of the others involves . So is conservative, with potential   Therefore, by ,   which agrees with the direct computation. The reason is visible in the picture: and differ only in , and the potential does not involve at all, so climbing costs nothing. The work gained on the stretches where and make an acute angle is given back exactly on the stretches where the angle is obtuse.     A point climbing the helix from to , through the force field . The two arrows are at the moving point and the velocity .     A Line Integral Along a Segment   Compute the line integral of the vector field along the line segment shown in .         The field is conservative: it is smooth on all of and   A potential is found by inspection:   So there is no need to parametrize the segment at all. By , with and ,      The straight segment from to in the field , with and the unit tangent drawn at the moving point.      The Same Endpoints, a Wilder Path   Compute the line integral of the vector field from point to point as shown in , where the curve is parametrized as      , exactly as in .    First check the endpoints. At , , and at , . So this curve joins the same two points as the segment of .  Computing directly here would mean differentiating and and integrating the resulting mess. There is no need: the field is the same conservative field as before, with the same potential , so the integral depends only on the endpoints:   This is the same number as in , and that is the whole point: for a conservative field the path between two points is irrelevant. A wildly complicated path and a straight segment cost exactly the same.     The same field and the same endpoints as in , but now joined by the curve .      "
},
{
  "id": "def-gradient-field",
  "level": "2",
  "url": "section-conservative-fields.html#def-gradient-field",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Gradient Field.",
  "body": " Gradient Field   The gradient field of a differentiable function is the field of gradient vectors    "
},
{
  "id": "fig-gradient-field-tikz",
  "level": "2",
  "url": "section-conservative-fields.html#fig-gradient-field-tikz",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": " The surface together with its gradient field , drawn in the -plane. The gradient vectors point radially away from the origin, the direction of steepest ascent, and grow longer as we move away from the origin.   A paraboloid above the plane, with gradient arrows below it pointing radially outward.  An upward-opening paraboloid, the graph of z equals x squared plus y squared, drawn as a translucent blue surface. In the x y plane below it, blue arrows of the gradient field point radially outward from the origin, growing longer at points farther from the origin.    "
},
{
  "id": "remark-smooth-curve",
  "level": "2",
  "url": "section-conservative-fields.html#remark-smooth-curve",
  "type": "Remark",
  "number": "1.5.3",
  "title": "Reminder.",
  "body": " Reminder  A smooth curve has no sharp corners or cusps; when the tangent vector turns, it does so continuously.  "
},
{
  "id": "def-conservative-concepts",
  "level": "2",
  "url": "section-conservative-fields.html#def-conservative-concepts",
  "type": "Definition",
  "number": "1.5.4",
  "title": "Open, Connected, and Simply Connected Regions; Conservative Fields.",
  "body": " Open, Connected, and Simply Connected Regions; Conservative Fields      A region is open if for every point in there is a disk with center that lies entirely in , which means that doesn't contain any of its boundary points.    Consider an open region in space and a vector field . If the result of the line integral from to is the same for all possible paths inside , then the line integral is said to be path-independent inside and the field is said to be conservative on .    If a vector field can be written as , where is a scalar-valued function, then is a potential function .     Piecewise smooth curves are curves that are made up of finitely many smooth pieces.    An open region is said to be connected if any two points in can be joined by a smooth curve that lies in the region.     is simply connected , which means that every loop in can be contracted to a point in without ever leaving . (See .)      "
},
{
  "id": "fig-simply-connected-prefigure",
  "level": "2",
  "url": "section-conservative-fields.html#fig-simply-connected-prefigure",
  "type": "Figure",
  "number": "1.5.5",
  "title": "",
  "body": " On the left, a simply connected region: every loop can be contracted to a point without leaving the region. On the right, a region that is not simply connected: the loop encircles a hole and cannot be contracted to a point while staying inside the region.    A blob-shaped region with no holes.    blob(t) = ((1.5 + 0.55*sin(2*t) + 0.3*cos(3*t))*cos(t) + 0.2, (1.2 + 0.45*cos(2*t) + 0.25*sin(3*t))*sin(t) + 0.4)     Simply connected            A blob-shaped region with two holes and a loop around one hole.    blob(t) = ((1.9 + 0.4*sin(2*t))*cos(t), (1.25 + 0.3*cos(3*t))*sin(t) + 0.3)         C_1  Not simply connected               "
},
{
  "id": "thm-ftli",
  "level": "2",
  "url": "section-conservative-fields.html#thm-ftli",
  "type": "Theorem",
  "number": "1.5.6",
  "title": "Fundamental Theorem of Line Integrals.",
  "body": " Fundamental Theorem of Line Integrals   Let be a smooth curve joining the point to the point in the plane or in space and parametrized by . Let be a differentiable function with a continuous gradient vector on a domain containing . Then     Assuming that the curve is parametrised as , we have and we can rewrite the line integral as    "
},
{
  "id": "fig-ftli-region-tikz",
  "level": "2",
  "url": "section-conservative-fields.html#fig-ftli-region-tikz",
  "type": "Figure",
  "number": "1.5.7",
  "title": "",
  "body": " A smooth curve joining to inside an open region in space, drawn as a translucent solid containing . For a conservative field , the line integral along equals , no matter how winds from to .   A curve winding from point A to point B inside a dotted region in space.  Three coordinate axes in space with a translucent blue solid marking an open region D. Inside the solid, a red curve C winds from the point A with coordinates x 1 comma y 1 comma z 1 to the point B with coordinates x 2 comma y 2 comma z 2, with an arrowhead at the middle of the curve showing the direction of travel from A to B.    "
},
{
  "id": "fig-ftli-video",
  "level": "2",
  "url": "section-conservative-fields.html#fig-ftli-video",
  "type": "Figure",
  "number": "1.5.8",
  "title": "",
  "body": " Animation of the fundamental theorem of line integrals for the field with . Two different curves join to : the helix and the straight segment . The accumulated value of each line integral is tracked as the paths are traced, and both integrals arrive at the same value .   "
},
{
  "id": "example-ftli-helix",
  "level": "2",
  "url": "section-conservative-fields.html#example-ftli-helix",
  "type": "Example",
  "number": "1.5.9",
  "title": "Example I.",
  "body": " Example I   Consider the scalar-valued function .     Calculate the gradient vector field .    Evaluate the line integral of the vector field over the curve parametrized as from to .    What is the result of from to where is the line connecting the two points?      "
},
{
  "id": "fig-helix-segment-tikz",
  "level": "2",
  "url": "section-conservative-fields.html#fig-helix-segment-tikz",
  "type": "Figure",
  "number": "1.5.10",
  "title": "",
  "body": " The two paths of joining to : the helix , parametrized by , and the straight segment . Since is conservative, both line integrals equal .   A helix and a vertical segment joining the same two points in space.  Three coordinate axes in space showing a blue helix that winds once around the z axis, climbing from the point one comma zero comma zero up to the point one comma zero comma two pi, and a vertical vermillion segment joining the same two points directly. Both endpoints are marked and labeled.    "
},
{
  "id": "example-potential-2d",
  "level": "2",
  "url": "section-conservative-fields.html#example-potential-2d",
  "type": "Example",
  "number": "1.5.11",
  "title": "Example II.",
  "body": " Example II   Consider the vector field in the plane.     Find a function such that .    Use the solution of part (A) to calculate the line integral of along any curve from to .        A. In the plane there are two components to match instead of three. Writing , we take them one at a time.   Step I. Since , we integrate with respect to (here is the variable and is constant), so   where the constant of integration is allowed to depend on .   Step II. Since , we differentiate with respect to :   Putting the two steps together, we conclude    B. Since , the field is conservative ( ), so applies to any curve joining to :   Notice that the arbitrary constant cancels in the difference, so it never affects the value of a line integral.   "
},
{
  "id": "example-potential-function",
  "level": "2",
  "url": "section-conservative-fields.html#example-potential-function",
  "type": "Example",
  "number": "1.5.12",
  "title": "Example III.",
  "body": " Example III   Consider the vector field .     Find a function such that .    Use the solution of part (A) to calculate the line integral from to .      "
},
{
  "id": "fig-potential-steps-prefigure",
  "level": "2",
  "url": "section-conservative-fields.html#fig-potential-steps-prefigure",
  "type": "Figure",
  "number": "1.5.13",
  "title": "",
  "body": " The three-step cascade for building the potential function of . Each component of pins down one more piece of , shrinking the unknown constant of integration from to to the true constant .   A three-row flow diagram building the potential function step by step.       \\dfrac{\\partial f}{\\partial x} = yz    integrate in x    xyz + g(y,z)     \\dfrac{\\partial f}{\\partial y} = xz    \\partial g\/\\partial y = 0    xyz + h(z)     \\dfrac{\\partial f}{\\partial z} = xy + 2z    h'(z) = 2z    xyz + z^2 + C                 "
},
{
  "id": "example-gravity-ftli",
  "level": "2",
  "url": "section-conservative-fields.html#example-gravity-ftli",
  "type": "Example",
  "number": "1.5.14",
  "title": "Example IV.",
  "body": " Example IV   In we computed the work done by the inverse-square field   along the helix from to , by parametrizing the curve. Do it again with .    The field is defined everywhere except at the origin, and the helix never passes through the origin, so we may look for a potential function. Rather than run the three steps of , notice that depends only on the distance , and recall that   So for the chain rule gives   so is a potential function for . Now the work needs nothing but the two endpoints. At we have , and at we have , so gives   which is , obtained there only after writing the field along the curve, taking a dot product, and evaluating an integral by substitution. The potential function did all of that work at once. Notice also what the calculation never used: the helix itself. Any other path from to that avoids the origin gives the same .   "
},
{
  "id": "thm-conservative-gradient",
  "level": "2",
  "url": "section-conservative-fields.html#thm-conservative-gradient",
  "type": "Theorem",
  "number": "1.5.15",
  "title": "Conservative Fields are Gradient Fields.",
  "body": " Conservative Fields are Gradient Fields   Let be a vector field whose components are continuous throughout an open connected region in space ( ). Then is conservative if and only if is a gradient field for a differentiable function .     First, we prove that a gradient field is conservative; we assume that for a differentiable function . If is any piecewise smooth curve in running from to , then gives   which depends only on the endpoints and , and not on the curve joining them. The line integral is therefore path-independent in , which is to say that is conservative on ( ).   Next, we prove that a conservative field is a gradient field; we assume that is conservative on , and we build a potential function for it. Fix a point of . Because is connected, every point of can be joined to by a curve lying in ; and because is conservative, the value of the line integral along such a curve does not depend on which one we choose. We may therefore define   the integral being taken along any curve in from to . It remains to check that .  Fix a point of . Since is open, there is a such that every point within distance of also lies in . For , let be the straight segment from to , which then lies in . Following a curve from to and then travelling along produces a curve in from to , so gives   Parametrizing by with gives , so that and   The right-hand side is the average value of along the segment from to . As that segment shrinks down to the single point , and since is continuous its values on the segment all approach ; so their average does too. Therefore . Repeating the argument with segments in the and directions gives and . Hence   and is differentiable because its partial derivatives , , and are continuous on . So is the gradient field of .   "
},
{
  "id": "fig-path-independence-prefigure",
  "level": "2",
  "url": "section-conservative-fields.html#fig-path-independence-prefigure",
  "type": "Figure",
  "number": "1.5.16",
  "title": "",
  "body": " Three different paths , , and joining to . For a conservative field, all three line integrals have the same value .   Three different curves joining the points A and B.    c1(t) = (4*t - 1.6*t*(1-t), 3*t - 3.4*t*(1-t))  c2(t) = (4*t, 3*t)  c3(t) = (4*t - 3.4*t*(1-t), 3*t + 3.2*t*(1-t))              A    B   C_1  C_2  C_3               "
},
{
  "id": "thm-loop-property",
  "level": "2",
  "url": "section-conservative-fields.html#thm-loop-property",
  "type": "Theorem",
  "number": "1.5.17",
  "title": "Loop Property of Conservative Fields.",
  "body": " Loop Property of Conservative Fields   The following statements are equivalent.      around every loop (that is, closed curve ) in .    The field is conservative on .        First, we prove that (2) implies (1); we assume that is conservative. Then, as shown in , we can think about any loop as , where goes from to and returns from to . Reversing the orientation of produces the curve , and and both connect to . Since is conservative, path independence gives , and therefore   Hence for any loop .   Next, we prove that (1) implies (2); we assume that around every loop in . Let and be any two points of , and let and be any two paths in from to . Travelling along from to and then back along from to traces a loop in , so the assumption applies to it:   Therefore . Since and were arbitrary paths joining to , and and were arbitrary points of , the line integral of is path-independent in ; that is, is conservative on ( ).   "
},
{
  "id": "fig-loop-split-prefigure",
  "level": "2",
  "url": "section-conservative-fields.html#fig-loop-split-prefigure",
  "type": "Figure",
  "number": "1.5.18",
  "title": "",
  "body": " On the left, a loop is split into two pieces: from to and from back to , so . On the right, the orientation of is reversed to produce ; now and both connect to , and path independence forces the two integrals to agree.    An oval loop through A and B split into an upper and a lower half.    top(t) = (2*cos(t), 1.35*sin(t) + 0.12*sin(2*t))  bot(t) = (2*cos(t), 1.35*sin(t) - 0.1*sin(2*t))      A    B   C_1  C_2   C = C_1 \\cup C_2              The same oval with the lower half reversed so both halves run from A to B.    top(t) = (2*cos(t), 1.35*sin(t) + 0.12*sin(2*t))  botrev(t) = (2*cos(-t), 1.35*sin(-t) + 0.1*sin(2*t))      A    B   C_1  -C_2   \\int_{C_1}\\mathbf F\\cdot d\\mathbf r = \\int_{-C_2}\\mathbf F\\cdot d\\mathbf r              "
},
{
  "id": "fig-equivalence-square-prefigure",
  "level": "2",
  "url": "section-conservative-fields.html#fig-equivalence-square-prefigure",
  "type": "Figure",
  "number": "1.5.19",
  "title": "",
  "body": " The four statements are equivalent. Each double arrow joins the middle of one box to the middle of the next, and may be read in either direction.   Four boxed statements at the corners of a square, joined by double arrows.           \\mathbf F \\text{ is a conservative field}     \\mathbf F \\text{ is a gradient field}    \\mathbf F = \\nabla f \\text{ for some } f     \\oint_C \\mathbf F\\cdot d\\mathbf r = 0    \\text{on every loop}     \\int_C \\mathbf F\\cdot d\\mathbf r \\text{ is path independent}    \\int_C \\mathbf F\\cdot d\\mathbf r = f(B) - f(A)                        "
},
{
  "id": "q-vf-helix-work",
  "level": "2",
  "url": "section-conservative-fields.html#q-vf-helix-work",
  "type": "Checkpoint",
  "number": "1.5.20",
  "title": "Work Along the Helix, Two Ways.",
  "body": " Work Along the Helix, Two Ways   For the field and path of :    Use the parametrized path to compute the work done by the force field from point to point .    Is it possible to use the fundamental theorem of line integrals to compute that work? If so, use it to verify your answer to the previous part. Justify your answer fully.      The work is , by either method.     Directly. On the helix the point is and is , since . Along the curve   Hence    By the fundamental theorem. Yes, it applies. The field is defined and smooth on all of , which is open and simply connected ( ), and its mixed partials match: , and the -component is while neither of the others involves . So is conservative, with potential   Therefore, by ,   which agrees with the direct computation. The reason is visible in the picture: and differ only in , and the potential does not involve at all, so climbing costs nothing. The work gained on the stretches where and make an acute angle is given back exactly on the stretches where the angle is obtuse.   "
},
{
  "id": "fig-vf-helix-work",
  "level": "2",
  "url": "section-conservative-fields.html#fig-vf-helix-work",
  "type": "Figure",
  "number": "1.5.21",
  "title": "",
  "body": " A point climbing the helix from to , through the force field . The two arrows are at the moving point and the velocity .   "
},
{
  "id": "q-vf-segment",
  "level": "2",
  "url": "section-conservative-fields.html#q-vf-segment",
  "type": "Checkpoint",
  "number": "1.5.22",
  "title": "A Line Integral Along a Segment.",
  "body": " A Line Integral Along a Segment   Compute the line integral of the vector field along the line segment shown in .         The field is conservative: it is smooth on all of and   A potential is found by inspection:   So there is no need to parametrize the segment at all. By , with and ,    "
},
{
  "id": "fig-vf-segment",
  "level": "2",
  "url": "section-conservative-fields.html#fig-vf-segment",
  "type": "Figure",
  "number": "1.5.23",
  "title": "",
  "body": " The straight segment from to in the field , with and the unit tangent drawn at the moving point.    "
},
{
  "id": "q-vf-curve",
  "level": "2",
  "url": "section-conservative-fields.html#q-vf-curve",
  "type": "Checkpoint",
  "number": "1.5.24",
  "title": "The Same Endpoints, a Wilder Path.",
  "body": " The Same Endpoints, a Wilder Path   Compute the line integral of the vector field from point to point as shown in , where the curve is parametrized as      , exactly as in .    First check the endpoints. At , , and at , . So this curve joins the same two points as the segment of .  Computing directly here would mean differentiating and and integrating the resulting mess. There is no need: the field is the same conservative field as before, with the same potential , so the integral depends only on the endpoints:   This is the same number as in , and that is the whole point: for a conservative field the path between two points is irrelevant. A wildly complicated path and a straight segment cost exactly the same.   "
},
{
  "id": "fig-vf-curve",
  "level": "2",
  "url": "section-conservative-fields.html#fig-vf-curve",
  "type": "Figure",
  "number": "1.5.25",
  "title": "",
  "body": " The same field and the same endpoints as in , but now joined by the curve .    "
},
{
  "id": "section-double-integrals-rectangles",
  "level": "1",
  "url": "section-double-integrals-rectangles.html",
  "type": "Section",
  "number": "2.1",
  "title": "Double and Iterated Integrals Over Rectangles",
  "body": " Double and Iterated Integrals Over Rectangles  Before we begin discussing the actual topic of today's lecture, we will briefly remind ourselves of the concept of area under a function and its relation with definite integrals.    Reminder: Area Under from to  As shown in , to calculate the area under from to , we divide the interval into subintervals and then let the number of subintervals (which is the same as the number of rectangles) approach infinity:   We also learned that the definite integral of from to is equal to this area:    The area under from to , approximated by rectangles of width . The height of the -th rectangle is , where is a sample point in the -th subinterval. As , the total area of the rectangles approaches the area under the curve.   The area under a curve approximated by eight rectangles.    f(t) = (t, 0.15*(t-1)*(t-3)*(t-5) + 2.5)              a    b    \\Delta x       x_i^*       \\text{height} = f(x_i^*)   y = f(x)                    Double Integrals Over Rectangles  As we will see, double integrals can be interpreted geometrically as the volume under a surface . As an example, consider the surface over the region   drawn in . The solid we are after stands on top of and stops at the surface: its floor is the shaded square in the -plane, its ceiling is the piece of the surface lying directly above , outlined in dashed black, and the dashed vertical segments above the four corners of are its vertical edges. Computing the volume of that solid the volume on top of the region of integration and below the surface is the goal of this section. Its ceiling is curved, so no formula from solid geometry gives the answer, and we fall back on the idea of : estimate the volume with pieces whose volume we do know, then refine.   The volume this section sets out to compute: the solid above the region of integration and below the surface . The shaded square is , the dashed black curve is the outline of the top of the solid on the surface, and the dashed vertical segments are the edges of the solid above the four corners of .     To estimate that volume, we can use the point in the middle to find the height of the cuboid and come up with a very bad estimate of the desired volume.   A first, very rough estimate of the volume under over the square : a single cuboid whose height is sampled at the center of the square, giving the estimate . Turn the picture around: seen from any direction, part of the box sticks out above the surface and part of the volume under the surface is left uncovered.     We can improve the estimate by splitting the region into more squares. For instance, we can split the region into four squares to achieve a better approximation for the desired volume, as shown in . Similar to finding the area under , if we let the number of splittings go to infinity, our estimation becomes exact, i.e., we find the exact desired volume. The refinement process is animated in .   Splitting into four squares improves the estimate. Each cuboid uses the value of at the center of its square: , , , and , giving . Turn the picture around: each box now has to match the surface over a quarter of instead of over all of it, as the single box of does.      A Riemann sum for a double integral, to explore: the region of integration, the surface , and the grid of boxes built over it. Refining the grid drives the sum toward .     In the Riemann sum notation, the approximation of the volume using small rectangles is   and the exact volume is   The result of the above limit is defined as the double integral over a rectangular region and is denoted as   For instance, in the example above, we have   Next, we will study how to calculate such integrals.   Animation of the Riemann-sum definition of the double integral. The region is split into , then , then , then squares, and a cuboid is built over each square with height sampled at its center. The displayed estimate approaches the exact volume .       Calculating Double Integrals as Iterated Integrals   Example I   Calculate the double integral .     To calculate the double integral   we first use FTC II to integrate with respect to :   which gives us a function of , and then we integrate it with respect to :    In calculating double integrals, the following theorem can be very useful.   Fubini's Theorem (First Form)   If is continuous throughout the rectangular region , then     Therefore, if the integrand satisfies the conditions of , we can change the order of integration as in . For the previous example, we can first integrate over :   Then, we integrate this function of :   which gives us the same result, i.e., .     An Iterated Integral Requiring Substitution and Integration by Parts   Example II   Calculate the double integral .     Using Fubini's theorem, , we first integrate over , which means that is considered to be a constant. As our substitution , we choose and :    Next, we integrate with respect to using the method of integration by parts  . We make the following choices for the integration by parts:   Therefore,   and hence   The surface whose volume over we just computed is shown in .    The surface over the rectangle , . The double integral of is the volume between this surface and the shaded base rectangle, and equals .   A curved surface over a rectangle in the plane, highest along one edge.  Three coordinate axes in space with a curved surface over the rectangle zero to one in x and zero to two in y. The surface rises from height zero along the y z plane to height one at the corner x equals one, y equals zero, and slopes downward as y increases. The base rectangle in the x y plane is shaded.       Concept Check  The questions below are about setting up double integrals, not about evaluating them. Throughout, is the square   Each figure can be rotated: drag the background to turn it, and scroll to zoom. In the first three figures the light blue segments at the corners of join the region of integration to the surface above it, the way the dashed drops do in .   A volume under a sphere   Write down a double integral for computing the volume inside the sphere and above the region . See .    Above the sphere has upper half , and lies well inside the unit disk, so that square root is defined on all of . The solid is exactly the one of with a different ceiling, so      Figure (1): the part of the sphere lying above the square . The four light blue segments join the corners of to the sphere above them.     Signs, without computing   Assume that is the square of and choose all the correct statements below. Remember to justify your answers. Note that and are helpful in answering this question.             B and D are the correct statements.  For B : the plane of lies above the -plane on the half of where and the same distance below it on the half where , because is symmetric about the line . The two signed volumes cancel, so . In symbols, replacing by carries to itself and changes the sign of the integrand.  For D : the same argument applies to , so as well, and therefore    shows this directly: the plane cuts along the diagonal , and the wedge above that diagonal is congruent to the wedge below it. Statements A , C , E and F all claim a nonzero sign, so all four are false.     Figure (2): the plane over the square , together with itself in the -plane. Half of the plane lies above and half below.      Figure (3): the plane over the square . It meets the -plane along the diagonal of .      The volume cut off by   Write a double integral for computing the volume of the region bounded by the blue plane and the orange plane as graphed in .    The blue plane is the square at height and the orange plane is . Volume is unsigned, so the integrand is the distance between the two planes, namely :   Note how this differs from : there the integrand was and the answer was , because the piece below the -plane counted negatively.     The volume cut off by   Write a double integral for computing the volume of the region bounded by the blue plane and the orange plane as graphed in .    As before the integrand is the distance between the two planes:   Splitting at the diagonal removes the absolute value: by the symmetry noted in the two halves contribute equally, so .     "
},
{
  "id": "fig-riemann-1d-prefigure",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-riemann-1d-prefigure",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " The area under from to , approximated by rectangles of width . The height of the -th rectangle is , where is a sample point in the -th subinterval. As , the total area of the rectangles approaches the area under the curve.   The area under a curve approximated by eight rectangles.    f(t) = (t, 0.15*(t-1)*(t-3)*(t-5) + 2.5)              a    b    \\Delta x       x_i^*       \\text{height} = f(x_i^*)   y = f(x)                "
},
{
  "id": "fig-volume-solid-geogebra",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-volume-solid-geogebra",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": " The volume this section sets out to compute: the solid above the region of integration and below the surface . The shaded square is , the dashed black curve is the outline of the top of the solid on the surface, and the dashed vertical segments are the edges of the solid above the four corners of .    "
},
{
  "id": "fig-volume-one-box-geogebra",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-volume-one-box-geogebra",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": " A first, very rough estimate of the volume under over the square : a single cuboid whose height is sampled at the center of the square, giving the estimate . Turn the picture around: seen from any direction, part of the box sticks out above the surface and part of the volume under the surface is left uncovered.    "
},
{
  "id": "fig-volume-four-boxes-geogebra",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-volume-four-boxes-geogebra",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": " Splitting into four squares improves the estimate. Each cuboid uses the value of at the center of its square: , , , and , giving . Turn the picture around: each box now has to match the surface over a quarter of instead of over all of it, as the single box of does.    "
},
{
  "id": "fig-double-integral-geogebra",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-double-integral-geogebra",
  "type": "Figure",
  "number": "2.1.5",
  "title": "",
  "body": " A Riemann sum for a double integral, to explore: the region of integration, the surface , and the grid of boxes built over it. Refining the grid drives the sum toward .    "
},
{
  "id": "sec-double-integrals-rectangles-15",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#sec-double-integrals-rectangles-15",
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
  "number": "2.1.6",
  "title": "",
  "body": " Animation of the Riemann-sum definition of the double integral. The region is split into , then , then , then squares, and a cuboid is built over each square with height sampled at its center. The displayed estimate approaches the exact volume .   "
},
{
  "id": "example-iterated-rectangle",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#example-iterated-rectangle",
  "type": "Example",
  "number": "2.1.7",
  "title": "Example I.",
  "body": " Example I   Calculate the double integral .   "
},
{
  "id": "thm-fubini",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#thm-fubini",
  "type": "Theorem",
  "number": "2.1.8",
  "title": "Fubini’s Theorem (First Form).",
  "body": " Fubini's Theorem (First Form)   If is continuous throughout the rectangular region , then    "
},
{
  "id": "example-iterated-substitution",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#example-iterated-substitution",
  "type": "Example",
  "number": "2.1.9",
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
  "body": "substitution "
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
  "number": "2.1.10",
  "title": "",
  "body": " The surface over the rectangle , . The double integral of is the volume between this surface and the shaded base rectangle, and equals .   A curved surface over a rectangle in the plane, highest along one edge.  Three coordinate axes in space with a curved surface over the rectangle zero to one in x and zero to two in y. The surface rises from height zero along the y z plane to height one at the corner x equals one, y equals zero, and slopes downward as y increases. The base rectangle in the x y plane is shaded.    "
},
{
  "id": "q-di-sphere-over-square",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#q-di-sphere-over-square",
  "type": "Checkpoint",
  "number": "2.1.11",
  "title": "A volume under a sphere.",
  "body": " A volume under a sphere   Write down a double integral for computing the volume inside the sphere and above the region . See .    Above the sphere has upper half , and lies well inside the unit disk, so that square root is defined on all of . The solid is exactly the one of with a different ceiling, so    "
},
{
  "id": "fig-ws-sphere-over-square",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-ws-sphere-over-square",
  "type": "Figure",
  "number": "2.1.12",
  "title": "",
  "body": " Figure (1): the part of the sphere lying above the square . The four light blue segments join the corners of to the sphere above them.   "
},
{
  "id": "q-di-signs",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#q-di-signs",
  "type": "Checkpoint",
  "number": "2.1.13",
  "title": "Signs, without computing.",
  "body": " Signs, without computing   Assume that is the square of and choose all the correct statements below. Remember to justify your answers. Note that and are helpful in answering this question.             B and D are the correct statements.  For B : the plane of lies above the -plane on the half of where and the same distance below it on the half where , because is symmetric about the line . The two signed volumes cancel, so . In symbols, replacing by carries to itself and changes the sign of the integrand.  For D : the same argument applies to , so as well, and therefore    shows this directly: the plane cuts along the diagonal , and the wedge above that diagonal is congruent to the wedge below it. Statements A , C , E and F all claim a nonzero sign, so all four are false.   "
},
{
  "id": "fig-ws-plane-x",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-ws-plane-x",
  "type": "Figure",
  "number": "2.1.14",
  "title": "",
  "body": " Figure (2): the plane over the square , together with itself in the -plane. Half of the plane lies above and half below.    "
},
{
  "id": "fig-ws-plane-y-minus-x",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#fig-ws-plane-y-minus-x",
  "type": "Figure",
  "number": "2.1.15",
  "title": "",
  "body": " Figure (3): the plane over the square . It meets the -plane along the diagonal of .    "
},
{
  "id": "q-di-volume-plane-x",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#q-di-volume-plane-x",
  "type": "Checkpoint",
  "number": "2.1.16",
  "title": "The volume cut off by <span class=\"process-math\">\\(z=x\\)<\/span>.",
  "body": " The volume cut off by   Write a double integral for computing the volume of the region bounded by the blue plane and the orange plane as graphed in .    The blue plane is the square at height and the orange plane is . Volume is unsigned, so the integrand is the distance between the two planes, namely :   Note how this differs from : there the integrand was and the answer was , because the piece below the -plane counted negatively.   "
},
{
  "id": "q-di-volume-plane-y-minus-x",
  "level": "2",
  "url": "section-double-integrals-rectangles.html#q-di-volume-plane-y-minus-x",
  "type": "Checkpoint",
  "number": "2.1.17",
  "title": "The volume cut off by <span class=\"process-math\">\\(z=y-x\\)<\/span>.",
  "body": " The volume cut off by   Write a double integral for computing the volume of the region bounded by the blue plane and the orange plane as graphed in .    As before the integrand is the distance between the two planes:   Splitting at the diagonal removes the absolute value: by the symmetry noted in the two halves contribute equally, so .   "
},
{
  "id": "section-double-integrals-general-regions",
  "level": "1",
  "url": "section-double-integrals-general-regions.html",
  "type": "Section",
  "number": "2.2",
  "title": "Double Integrals Over General Regions and Area by Double Integration",
  "body": " Double Integrals Over General Regions and Area by Double Integration  Here we will generalize our last session's discussion about double integrals and how they can be used to evaluate volumes. Last session we restricted ourselves to shapes with rectangular base. Today we will look at more general shapes for the base.    Case I: Regions of the Form   Example I   Calculate the following double integral,   where .     The region is shown in . Since for each fixed the variable runs from the lower curve to the upper curve , we integrate along the green vertical strips first. We can re-write the integral as     The region of , bounded above by and below by for . For each fixed , the inner integral runs along a vertical strip from the lower curve to the upper curve.   A region between an upper and a lower curve, with vertical strips.    f1(t) = (t, t^3 + 1)  f2(t) = (t, -2*t^2 + 2*t)  f1sc(t) = t^3 + 1  f2sc(t) = -2*t^2 + 2*t            f_1(x) = x^3 + 1  f_2(x) = -2x^2 + 2x   0    1                   Case II: Regions of the Form   Example II   Calculate the following double integral,   where .     The region is shown in . This time, for each fixed , the variable runs along a horizontal strip from to , so we integrate with respect to first:     The region of , bounded on the left by and on the right by for . For each fixed , the inner integral runs along a horizontal strip from the left curve to the right curve.   A region between a left and a right curve, with horizontal strips.    g1(t) = (t^2, t)  g2(t) = (t^(1\/3), t)            g_1(y) = y^2  g_2(y) = y^{1\/3}   y = 0.5    y = 0.1                The idea behind both cases sweeping a strip across the region while the inner integral measures the length of the strip is animated in .   Animation of iterated integration over a general region. For the region of , a vertical strip at position has height ; as the strip sweeps from to , the outer integral accumulates the strip contributions, arriving at .       Volume of a Tetrahedron   Example III   Find the volume of the tetrahedron bounded by the planes , , and .      shows the tetrahedron bounded by the planes , , and . To find the volume of the tetrahedron , we first need to figure out the region of integration. shows the region of integration, i.e., the base of the tetrahedron. Therefore, our region of integration is   For the volume of the tetrahedron, we integrate the height of the top plane over :     The tetrahedron bounded by the planes (slanted face), (vertical face through the -axis), (the -plane) and (the base). Its vertices are , , and .   A tetrahedron with one vertex at the origin, bounded by a slanted plane and a vertical plane.  Three coordinate axes in space with a tetrahedron drawn in translucent blue. One vertex is at the origin, one at height two on the z axis, one at zero one zero on the y axis, and one at the point one comma one half comma zero. The slanted face x plus two y plus z equals two and the vertical face x equals two y are labeled with arrows.      The region of integration for : the base of the tetrahedron in the -plane, bounded below by and above by (or ) for . A typical vertical strip is drawn in blue.   The triangular base of the tetrahedron in the x y plane.    top(t) = (t, 1 - t\/2)  bot(t) = (t, t\/2)  topsc(t) = 1 - t\/2  botsc(t) = t\/2            \\left(1,\\tfrac12\\right)    1    x + 2y = 2    y = x\/2    0     upper bound for y   lower bound for y                 Why not integrate in the reverse order?  We could also try to integrate with respect to first, using horizontal strips. However, as the figure below shows, the right end of a horizontal strip depends on where the strip is: for the strip ends on the line , while for it ends on the line (that is, ). We would therefore have to split the region into two pieces and evaluate two double integrals, so integrating with respect to first is the more efficient choice here.    The same triangle swept by horizontal arrows for the reversed order of integration.    top(t) = (t, 1 - t\/2)  bot(t) = (t, t\/2)  topsc(t) = 1 - t\/2  botsc(t) = t\/2              \\left(1,\\tfrac12\\right)    y = \\tfrac12   x = 2 - 2y  x = 2y   0                   Area by Double Integration  In the previous session, we talked about finding the double integral and how it corresponds to the volume of an object with base and height . This session, we will look at a special case of this double integral, which corresponds to the area of region :    Example IV   Calculate the area of the region shown in , bounded on the right by , on the left by , and by the parabola .     Method 1  We split the region into two regions and as follows:   Note that on , the left boundary is the parabola , solved for as . Then     Method 2 (using symmetry)  The curve is odd : rotating it by about the origin maps it onto itself. As shown in , this rotation carries the piece that the curve cuts out of the unit square exactly onto the piece that the curve adds to the right of the -axis for . These two pieces therefore have the same area, and swapping one for the other turns the region into the unit square (of area ) together with the strip between the parabola and the -axis. Hence     Method 2: since is odd, the piece removed from the unit square (below the -axis) is congruent to the piece added to the right of the -axis (above it). The area is therefore the area of the square, , plus the area of the green strip between the parabola and the -axis.   The region decomposed into a unit square and two matching pieces.    right(t) = (t - t^3, t)  leftR2(t) = (sqrt(t) - 1, t)             \\text{area } 1    A    A    \\tfrac13   x = y - y^3  y = (x+1)^2                The region of , split into (below the -axis) and (above it). Both subregions share the right boundary ; the left boundary is the vertical line for and the parabola for .   A region split into two stacked parts R 1 and R 2.    right(t) = (t - t^3, t)  leftR1(t) = (-1, t)  leftR2(t) = (sqrt(t) - 1, t)          x = y - y^3  y = (x+1)^2   R_1    R_2    -1    -1                   Concept Check  Both problems below ask only for a setup : a double integral whose value is the volume or the area in question, with a region of integration that is no longer a rectangle. Each figure can be rotated by dragging the background, and zoomed by scrolling.   A ball cut by a cylinder   Set up a double integral for computing the volume of the region bounded by the cylinder and the sphere . See .    The solid is the part of the ball that lies inside the cylinder. It is bounded below by and above by , so its height over a point of the region of integration is .  The region of integration is the shadow of the solid: the points lying inside both circles and . Those circles cross where , that is at , . Between those values of , the lower boundary of is the cylinder and the upper boundary is the sphere, so   This is a region of the kind this section is about: is bounded above and below by the graphs of functions of , which is . In polar coordinates the same integral becomes far friendlier still.     Figure (4): the sphere and the cylinder . Use this graph to find the region of integration and the integrand. The wall of the cylinder runs straight down to the -plane, where the red circle outlines the region of integration.     Problem: an area as a double integral   Set up a double integral for computing the area of the region bounded by the blue curve and the red curve, which are graphed in .    The red curve is , that is for , and the blue curve is the half of the circle , , that runs counterclockwise from to . Those two endpoints are the ends of the red curve, and they are antipodal on the circle.  Slice the region horizontally. For a slice runs from the circle on the left to the red curve on the right; above it runs from the circle to the circle. Since area is given by ,   It is worth seeing what comes out. The first integrand contains , which is odd, so it contributes nothing, and what is left is exactly the integral of over , cut into two pieces. The area is therefore half the area of the disk:   The wiggle of the red curve costs nothing, because it bulges as far to one side of the diameter through its endpoints as it does to the other.     Figure (5): the region bounded by the blue arc of the circle and the red curve . The two curves meet at and , which are opposite ends of a diameter; the dashed arc is the rest of the circle.   A tilted circle with solid and dashed halves bounding the shaded region.    R = sqrt(1 + pi^2\/4)  arcsine(u) = (sin(u), u)  circ(t) = (R*cos(t), R*sin(t))         \\left(1,\\tfrac{\\pi}{2}\\right)    \\left(-1,-\\tfrac{\\pi}{2}\\right)   y=\\sin^{-1}(x)  x^2+y^2=1+\\tfrac{\\pi^2}{4}   D                   "
},
{
  "id": "example-case1-vertical",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#example-case1-vertical",
  "type": "Example",
  "number": "2.2.1",
  "title": "Example I.",
  "body": " Example I   Calculate the following double integral,   where .   "
},
{
  "id": "fig-case1-region-prefigure",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-case1-region-prefigure",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " The region of , bounded above by and below by for . For each fixed , the inner integral runs along a vertical strip from the lower curve to the upper curve.   A region between an upper and a lower curve, with vertical strips.    f1(t) = (t, t^3 + 1)  f2(t) = (t, -2*t^2 + 2*t)  f1sc(t) = t^3 + 1  f2sc(t) = -2*t^2 + 2*t            f_1(x) = x^3 + 1  f_2(x) = -2x^2 + 2x   0    1               "
},
{
  "id": "example-case2-horizontal",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#example-case2-horizontal",
  "type": "Example",
  "number": "2.2.3",
  "title": "Example II.",
  "body": " Example II   Calculate the following double integral,   where .   "
},
{
  "id": "fig-case2-region-prefigure",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-case2-region-prefigure",
  "type": "Figure",
  "number": "2.2.4",
  "title": "",
  "body": " The region of , bounded on the left by and on the right by for . For each fixed , the inner integral runs along a horizontal strip from the left curve to the right curve.   A region between a left and a right curve, with horizontal strips.    g1(t) = (t^2, t)  g2(t) = (t^(1\/3), t)            g_1(y) = y^2  g_2(y) = y^{1\/3}   y = 0.5    y = 0.1               "
},
{
  "id": "fig-strip-sweep-video",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-strip-sweep-video",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": " Animation of iterated integration over a general region. For the region of , a vertical strip at position has height ; as the strip sweeps from to , the outer integral accumulates the strip contributions, arriving at .   "
},
{
  "id": "example-tetrahedron",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#example-tetrahedron",
  "type": "Example",
  "number": "2.2.6",
  "title": "Example III.",
  "body": " Example III   Find the volume of the tetrahedron bounded by the planes , , and .   "
},
{
  "id": "fig-tetrahedron-tikz",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-tetrahedron-tikz",
  "type": "Figure",
  "number": "2.2.7",
  "title": "",
  "body": " The tetrahedron bounded by the planes (slanted face), (vertical face through the -axis), (the -plane) and (the base). Its vertices are , , and .   A tetrahedron with one vertex at the origin, bounded by a slanted plane and a vertical plane.  Three coordinate axes in space with a tetrahedron drawn in translucent blue. One vertex is at the origin, one at height two on the z axis, one at zero one zero on the y axis, and one at the point one comma one half comma zero. The slanted face x plus two y plus z equals two and the vertical face x equals two y are labeled with arrows.    "
},
{
  "id": "fig-tetrahedron-base-prefigure",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-tetrahedron-base-prefigure",
  "type": "Figure",
  "number": "2.2.8",
  "title": "",
  "body": " The region of integration for : the base of the tetrahedron in the -plane, bounded below by and above by (or ) for . A typical vertical strip is drawn in blue.   The triangular base of the tetrahedron in the x y plane.    top(t) = (t, 1 - t\/2)  bot(t) = (t, t\/2)  topsc(t) = 1 - t\/2  botsc(t) = t\/2            \\left(1,\\tfrac12\\right)    1    x + 2y = 2    y = x\/2    0     upper bound for y   lower bound for y               "
},
{
  "id": "remark-reverse-order",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#remark-reverse-order",
  "type": "Remark",
  "number": "2.2.9",
  "title": "Why not integrate in the reverse order?",
  "body": " Why not integrate in the reverse order?  We could also try to integrate with respect to first, using horizontal strips. However, as the figure below shows, the right end of a horizontal strip depends on where the strip is: for the strip ends on the line , while for it ends on the line (that is, ). We would therefore have to split the region into two pieces and evaluate two double integrals, so integrating with respect to first is the more efficient choice here.    The same triangle swept by horizontal arrows for the reversed order of integration.    top(t) = (t, 1 - t\/2)  bot(t) = (t, t\/2)  topsc(t) = 1 - t\/2  botsc(t) = t\/2              \\left(1,\\tfrac12\\right)    y = \\tfrac12   x = 2 - 2y  x = 2y   0               "
},
{
  "id": "example-area-double-integration",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#example-area-double-integration",
  "type": "Example",
  "number": "2.2.10",
  "title": "Example IV.",
  "body": " Example IV   Calculate the area of the region shown in , bounded on the right by , on the left by , and by the parabola .   "
},
{
  "id": "fig-area-symmetry-prefigure",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-area-symmetry-prefigure",
  "type": "Figure",
  "number": "2.2.11",
  "title": "",
  "body": " Method 2: since is odd, the piece removed from the unit square (below the -axis) is congruent to the piece added to the right of the -axis (above it). The area is therefore the area of the square, , plus the area of the green strip between the parabola and the -axis.   The region decomposed into a unit square and two matching pieces.    right(t) = (t - t^3, t)  leftR2(t) = (sqrt(t) - 1, t)             \\text{area } 1    A    A    \\tfrac13   x = y - y^3  y = (x+1)^2              "
},
{
  "id": "fig-area-region-prefigure",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-area-region-prefigure",
  "type": "Figure",
  "number": "2.2.12",
  "title": "",
  "body": " The region of , split into (below the -axis) and (above it). Both subregions share the right boundary ; the left boundary is the vertical line for and the parabola for .   A region split into two stacked parts R 1 and R 2.    right(t) = (t - t^3, t)  leftR1(t) = (-1, t)  leftR2(t) = (sqrt(t) - 1, t)          x = y - y^3  y = (x+1)^2   R_1    R_2    -1    -1                "
},
{
  "id": "q-di-cylinder-sphere",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#q-di-cylinder-sphere",
  "type": "Checkpoint",
  "number": "2.2.13",
  "title": "A ball cut by a cylinder.",
  "body": " A ball cut by a cylinder   Set up a double integral for computing the volume of the region bounded by the cylinder and the sphere . See .    The solid is the part of the ball that lies inside the cylinder. It is bounded below by and above by , so its height over a point of the region of integration is .  The region of integration is the shadow of the solid: the points lying inside both circles and . Those circles cross where , that is at , . Between those values of , the lower boundary of is the cylinder and the upper boundary is the sphere, so   This is a region of the kind this section is about: is bounded above and below by the graphs of functions of , which is . In polar coordinates the same integral becomes far friendlier still.   "
},
{
  "id": "fig-ws-cylinder-sphere",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-ws-cylinder-sphere",
  "type": "Figure",
  "number": "2.2.14",
  "title": "",
  "body": " Figure (4): the sphere and the cylinder . Use this graph to find the region of integration and the integrand. The wall of the cylinder runs straight down to the -plane, where the red circle outlines the region of integration.   "
},
{
  "id": "q-di-area-arcsin",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#q-di-area-arcsin",
  "type": "Checkpoint",
  "number": "2.2.15",
  "title": "Problem: an area as a double integral.",
  "body": " Problem: an area as a double integral   Set up a double integral for computing the area of the region bounded by the blue curve and the red curve, which are graphed in .    The red curve is , that is for , and the blue curve is the half of the circle , , that runs counterclockwise from to . Those two endpoints are the ends of the red curve, and they are antipodal on the circle.  Slice the region horizontally. For a slice runs from the circle on the left to the red curve on the right; above it runs from the circle to the circle. Since area is given by ,   It is worth seeing what comes out. The first integrand contains , which is odd, so it contributes nothing, and what is left is exactly the integral of over , cut into two pieces. The area is therefore half the area of the disk:   The wiggle of the red curve costs nothing, because it bulges as far to one side of the diameter through its endpoints as it does to the other.   "
},
{
  "id": "fig-ws-arcsin-region",
  "level": "2",
  "url": "section-double-integrals-general-regions.html#fig-ws-arcsin-region",
  "type": "Figure",
  "number": "2.2.16",
  "title": "",
  "body": " Figure (5): the region bounded by the blue arc of the circle and the red curve . The two curves meet at and , which are opposite ends of a diameter; the dashed arc is the rest of the circle.   A tilted circle with solid and dashed halves bounding the shaded region.    R = sqrt(1 + pi^2\/4)  arcsine(u) = (sin(u), u)  circ(t) = (R*cos(t), R*sin(t))         \\left(1,\\tfrac{\\pi}{2}\\right)    \\left(-1,-\\tfrac{\\pi}{2}\\right)   y=\\sin^{-1}(x)  x^2+y^2=1+\\tfrac{\\pi^2}{4}   D                 "
},
{
  "id": "section-polar-coordinates",
  "level": "1",
  "url": "section-polar-coordinates.html",
  "type": "Section",
  "number": "2.3",
  "title": "Polar Coordinates and Graphing Polar Equations",
  "body": " Polar Coordinates and Graphing Polar Equations  Usually we use Cartesian coordinates, which are directed distances from two perpendicular axes. Here we will study a new coordinate system, called the polar coordinate system , which is more convenient for many purposes such as finding the volume of some objects.    The Polar Coordinate System  Similar to the Cartesian coordinate system, we need two real numbers to specify the location of a point in the -plane. The first one is the directed distance from the origin and it is shown by in . The second one is the directed angle , and an angle is positive if measured in the counterclockwise direction from the positive -axis and negative in the clockwise direction. The ordered pair represents the location of a point in the polar coordinate system.   The same point in both coordinate systems: in Cartesian coordinates it is , and in polar coordinates it is , where is the directed distance from the origin and is the directed angle measured counterclockwise from the positive -axis. The two are related by and .   A point P labeled in both Cartesian and polar coordinates, with r and theta marked.    arc(t) = (0.55*cos(t), 0.55*sin(t))        O    P(x,y) = P(r,\\theta)    x = r\\cos\\theta   y = r\\sin\\theta   r   \\theta                 demonstrates the meaning of negative . Note that the polar pair is the same as .   The meaning of negative : the point lies on the ray opposite to the ray of angle , so is the same point as .   A ray at angle theta and its opposite ray, showing a point with negative r.    arc1(t) = (0.5*cos(t), 0.5*sin(t))  arc2(t) = (0.72*cos(t), 0.72*sin(t))          O    (r,\\theta)    (-r,\\theta)   \\theta  \\theta+\\pi                Relation Between Polar and Cartesian Coordinates   The common origin and initial ray of the polar and Cartesian systems. For a point , the right triangle with legs and and hypotenuse relates the two coordinate systems.   A point P on a circle labeled in both coordinate systems, with the right triangle of x, y, and r.    arc(t) = (0.5*cos(t), 0.5*sin(t))  unitcircle(t) = (1.7*cos(t), 1.7*sin(t))          P(x,y) = P(r,\\theta)   r  x  y  \\theta               From , you can see that for a given , we uniquely have . If we are given a pair , there are two options for the directed distance : a positive and a negative value. However, for a given , there is a unique that satisfies the first two equations of .   Equations Relating Polar and Cartesian Coordinates         Non-Uniqueness of Polar Coordinates  Unlike Cartesian coordinates, polar coordinates are not unique: a point has many representations. For example, in you can see two different representations, and , of the same point; the pairs and locate it as well. In general, a point denoted by can also be represented by or , where is any integer, and all the representations of a point can be generated this way from any one of them.   Two of the many polar representations of the same point. On the left, : the angle wraps around once before landing on the third-quadrant ray. On the right, : the negative places the point on the ray opposite to the angle . The pairs and give the same point too.    A spiral arc ending at the ray of angle thirteen pi over four.    arc(t) = ((0.38 + 0.045*t)*cos(t), (0.38 + 0.045*t)*sin(t))        O    \\left(1,\\tfrac{13\\pi}{4}\\right)   \\tfrac{13\\pi}{4}             A ray at angle pi over four with its dashed opposite ray and a negative r point.    arc(t) = (0.5*cos(t), 0.5*sin(t))         O    \\left(-1,\\tfrac{\\pi}{4}\\right)   \\tfrac{\\pi}{4}                 Replacing Polar Equations by Cartesian Equations   Example I   Replace the following polar equations by equivalent Cartesian equations.             The four curves are shown in .     This is the circle .    This is the line .    We re-write as , which then gives us .    Using and from :        The four curves of . From left to right: the circle , i.e., ; the line , i.e., ; the hyperbola , i.e., ; and the conic , i.e., .    The unit circle centered at the origin.    c(t) = (cos(t), sin(t))      x^2+y^2=1             The line y equals x through the origin.        y = x             The hyperbola x y equals four.    b1(t) = (t, 4\/t)  b2(t) = (-t, -4\/t)       xy = 4              A hyperbola opening left and right.    br1(t) = (cos(t)\/(1-2*cos(t)), sin(t)\/(1-2*cos(t)))       y^2-3x^2-4x-1=0               Next, we would like to learn about graphing polar equations. We will begin by analyzing symmetries of polar equations.     Symmetries   Symmetry about the -axis  Note that a graph is symmetric about the -axis if for every point on the graph, there exists a point with the coordinates on the graph as well. As an example, consider the equation . Assuming that is a point on the graph of this equation, so is , simply because . Let us plot its graph by computing some of the points as shown in ; the graph, with these points marked, is shown in , and the process of sweeping to trace the graph is animated in .   Some points on the graph of                      The cardioid . The marked points correspond to the values in . Since , the graph is symmetric about the -axis.   The cardioid r equals one plus cosine theta on a polar grid.    card(t) = ((1+cos(t))*cos(t), (1+cos(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))  ring3(t) = (1.5*cos(t), 1.5*sin(t))  ring4(t) = (2*cos(t), 2*sin(t))                r = 1+\\cos(\\theta)   \\tfrac12    1    2                 Animation of graphing the polar equation . A ray at angle rotates counterclockwise while the distance along the ray is recomputed; the traced point sweeps out the cardioid, hitting the values of along the way.      Symmetry about the -axis  For every point on the graph, there exists a point with the coordinates or on the graph. As an example, consider , which is shown in : since , the graph is symmetric about the -axis. The symmetry is animated in .   The cardioid , symmetric about the -axis.   The cardioid r equals one minus sine theta, pointing downward, on a polar grid.    card(t) = ((1-sin(t))*cos(t), (1-sin(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))  ring3(t) = (1.5*cos(t), 1.5*sin(t))  ring4(t) = (2*cos(t), 2*sin(t))           r = 1-\\sin(\\theta)   \\tfrac12    1    2              Animation of graphing . As the traced point (in blue) sweeps out the cardioid, its mirror image across the -axis (in green) lands on the same curve, showing the symmetry about the -axis.      Symmetry about the origin  If the point is on the graph, then the point or lies on the graph as well. As an example, , shown in , is symmetric about the origin: its graph consists of the two branches and , and replacing by leaves the equation unchanged. The two branches are traced simultaneously in .   The graph of , made of the branch (in blue) and the branch (in vermillion). Since replacing by does not change the equation, the graph is symmetric about the origin.   Two petal-shaped loops symmetric through the origin on a polar grid.    pos(t) = (sqrt(sin(t))*cos(t), sqrt(sin(t))*sin(t))  neg(t) = (-sqrt(sin(t))*cos(t), -sqrt(sin(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))          r = \\sqrt{\\sin\\theta}  r = -\\sqrt{\\sin\\theta}              Animation of graphing . For each , both with (in blue) and (in vermillion) satisfy the equation, so the two branches are traced simultaneously and the graph is symmetric about the origin.      "
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
  "number": "2.3.1",
  "title": "",
  "body": " The same point in both coordinate systems: in Cartesian coordinates it is , and in polar coordinates it is , where is the directed distance from the origin and is the directed angle measured counterclockwise from the positive -axis. The two are related by and .   A point P labeled in both Cartesian and polar coordinates, with r and theta marked.    arc(t) = (0.55*cos(t), 0.55*sin(t))        O    P(x,y) = P(r,\\theta)    x = r\\cos\\theta   y = r\\sin\\theta   r   \\theta               "
},
{
  "id": "fig-polar-negative-r-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-polar-negative-r-prefigure",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": " The meaning of negative : the point lies on the ray opposite to the ray of angle , so is the same point as .   A ray at angle theta and its opposite ray, showing a point with negative r.    arc1(t) = (0.5*cos(t), 0.5*sin(t))  arc2(t) = (0.72*cos(t), 0.72*sin(t))          O    (r,\\theta)    (-r,\\theta)   \\theta  \\theta+\\pi            "
},
{
  "id": "fig-polar-cartesian-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-polar-cartesian-prefigure",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": " The common origin and initial ray of the polar and Cartesian systems. For a point , the right triangle with legs and and hypotenuse relates the two coordinate systems.   A point P on a circle labeled in both coordinate systems, with the right triangle of x, y, and r.    arc(t) = (0.5*cos(t), 0.5*sin(t))  unitcircle(t) = (1.7*cos(t), 1.7*sin(t))          P(x,y) = P(r,\\theta)   r  x  y  \\theta              "
},
{
  "id": "fig-polar-representations-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-polar-representations-prefigure",
  "type": "Figure",
  "number": "2.3.4",
  "title": "",
  "body": " Two of the many polar representations of the same point. On the left, : the angle wraps around once before landing on the third-quadrant ray. On the right, : the negative places the point on the ray opposite to the angle . The pairs and give the same point too.    A spiral arc ending at the ray of angle thirteen pi over four.    arc(t) = ((0.38 + 0.045*t)*cos(t), (0.38 + 0.045*t)*sin(t))        O    \\left(1,\\tfrac{13\\pi}{4}\\right)   \\tfrac{13\\pi}{4}             A ray at angle pi over four with its dashed opposite ray and a negative r point.    arc(t) = (0.5*cos(t), 0.5*sin(t))         O    \\left(-1,\\tfrac{\\pi}{4}\\right)   \\tfrac{\\pi}{4}             "
},
{
  "id": "example-polar-to-cartesian",
  "level": "2",
  "url": "section-polar-coordinates.html#example-polar-to-cartesian",
  "type": "Example",
  "number": "2.3.5",
  "title": "Example I.",
  "body": " Example I   Replace the following polar equations by equivalent Cartesian equations.           "
},
{
  "id": "fig-polar-to-cartesian-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-polar-to-cartesian-prefigure",
  "type": "Figure",
  "number": "2.3.6",
  "title": "",
  "body": " The four curves of . From left to right: the circle , i.e., ; the line , i.e., ; the hyperbola , i.e., ; and the conic , i.e., .    The unit circle centered at the origin.    c(t) = (cos(t), sin(t))      x^2+y^2=1             The line y equals x through the origin.        y = x             The hyperbola x y equals four.    b1(t) = (t, 4\/t)  b2(t) = (-t, -4\/t)       xy = 4              A hyperbola opening left and right.    br1(t) = (cos(t)\/(1-2*cos(t)), sin(t)\/(1-2*cos(t)))       y^2-3x^2-4x-1=0              "
},
{
  "id": "table-cardioid-points",
  "level": "2",
  "url": "section-polar-coordinates.html#table-cardioid-points",
  "type": "Table",
  "number": "2.3.7",
  "title": "Some points on the graph of <span class=\"process-math\">\\(r = 1 + \\cos\\theta\\)<\/span>",
  "body": " Some points on the graph of                    "
},
{
  "id": "fig-cardioid-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-cardioid-prefigure",
  "type": "Figure",
  "number": "2.3.8",
  "title": "",
  "body": " The cardioid . The marked points correspond to the values in . Since , the graph is symmetric about the -axis.   The cardioid r equals one plus cosine theta on a polar grid.    card(t) = ((1+cos(t))*cos(t), (1+cos(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))  ring3(t) = (1.5*cos(t), 1.5*sin(t))  ring4(t) = (2*cos(t), 2*sin(t))                r = 1+\\cos(\\theta)   \\tfrac12    1    2               "
},
{
  "id": "fig-cardioid-video",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-cardioid-video",
  "type": "Figure",
  "number": "2.3.9",
  "title": "",
  "body": " Animation of graphing the polar equation . A ray at angle rotates counterclockwise while the distance along the ray is recomputed; the traced point sweeps out the cardioid, hitting the values of along the way.   "
},
{
  "id": "fig-cardioid-y-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-cardioid-y-prefigure",
  "type": "Figure",
  "number": "2.3.10",
  "title": "",
  "body": " The cardioid , symmetric about the -axis.   The cardioid r equals one minus sine theta, pointing downward, on a polar grid.    card(t) = ((1-sin(t))*cos(t), (1-sin(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))  ring3(t) = (1.5*cos(t), 1.5*sin(t))  ring4(t) = (2*cos(t), 2*sin(t))           r = 1-\\sin(\\theta)   \\tfrac12    1    2            "
},
{
  "id": "fig-cardioid-y-video",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-cardioid-y-video",
  "type": "Figure",
  "number": "2.3.11",
  "title": "",
  "body": " Animation of graphing . As the traced point (in blue) sweeps out the cardioid, its mirror image across the -axis (in green) lands on the same curve, showing the symmetry about the -axis.   "
},
{
  "id": "fig-origin-symmetry-prefigure",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-origin-symmetry-prefigure",
  "type": "Figure",
  "number": "2.3.12",
  "title": "",
  "body": " The graph of , made of the branch (in blue) and the branch (in vermillion). Since replacing by does not change the equation, the graph is symmetric about the origin.   Two petal-shaped loops symmetric through the origin on a polar grid.    pos(t) = (sqrt(sin(t))*cos(t), sqrt(sin(t))*sin(t))  neg(t) = (-sqrt(sin(t))*cos(t), -sqrt(sin(t))*sin(t))  ring1(t) = (0.5*cos(t), 0.5*sin(t))  ring2(t) = (cos(t), sin(t))          r = \\sqrt{\\sin\\theta}  r = -\\sqrt{\\sin\\theta}            "
},
{
  "id": "fig-origin-symmetry-video",
  "level": "2",
  "url": "section-polar-coordinates.html#fig-origin-symmetry-video",
  "type": "Figure",
  "number": "2.3.13",
  "title": "",
  "body": " Animation of graphing . For each , both with (in blue) and (in vermillion) satisfy the equation, so the two branches are traced simultaneously and the graph is symmetric about the origin.   "
},
{
  "id": "section-double-integrals-polar-form",
  "level": "1",
  "url": "section-double-integrals-polar-form.html",
  "type": "Section",
  "number": "2.4",
  "title": "Double Integrals in Polar Form",
  "body": " Double Integrals in Polar Form  In the previous session, we talked about a new coordinate system known as polar coordinates. Today, we will use polar coordinates to calculate double integrals. As you will see, this set of coordinates can sometimes simplify our calculations. In Cartesian coordinates, double integrals are of the form ,     How Does a Double Integral Look in Polar Coordinates?  To answer this question, assume that our region of integration is   which is shown on the left in . We divide this region into polar rectangles as shown on the right. Then, we calculate the area of a typical polar rectangle   which, using the fact that the area of a sector of a circle with radius and central angle is , gives us   where , , and . Here is the average radius of the polar rectangle. Therefore,    On the left, the region . On the right, divided into polar rectangles; the highlighted polar rectangle has area , where is its center.    A washer-slice region between two radii and two angles.    outer(t) = (2.4*cos(t), 2.4*sin(t))  inner(t) = (1.1*cos(t), 1.1*sin(t))            R   r = b  r = a   \\theta = \\beta    \\theta = \\alpha    O               The washer slice divided into small polar rectangles, one highlighted.    a1(t) = (1.1*cos(t), 1.1*sin(t))  a2(t) = (1.425*cos(t), 1.425*sin(t))  a3(t) = (1.75*cos(t), 1.75*sin(t))  a4(t) = (2.075*cos(t), 2.075*sin(t))  a5(t) = (2.4*cos(t), 2.4*sin(t))                  R_{ij}   (r_i^*, \\theta_j^*)    O               The subdivision of into polar rectangles, and how the area of a polar rectangle behaves as the grid is refined, is animated in .   Animation of the polar area element. The region is divided into finer and finer polar rectangles; a highlighted cell has area exactly , and the sum equals the area of at every stage.       Integrating Over a Half Annulus   Example I   Evaluate , where is the region in the upper half plane bounded by the circles and .     The region   is shown in , and in polar coordinates we have   Therefore, using and from , we can write:     The region of : the upper half of the annulus between the circles and . In polar coordinates it is simply , .   The upper half of an annulus between radii one and two.    outer(t) = (2*cos(t), 2*sin(t))  inner(t) = (cos(t), sin(t))        R   x^2+y^2 = 4  x^2+y^2 = 1   1    2                  Area Enclosed by One Loop of a Rose   Example II   Use a double integral to find the area enclosed by one loop of the four-leaved rose , graphed in .     We notice that the region (the colored loop in ) can be described as   and hence, by , we can evaluate its area as follows:     The four-leaved rose . The shaded loop is swept out as runs from to ; the dashed rays are , where .   A four-leaved rose with one petal outlined and shaded.    rose(t) = (cos(2*t)*cos(t), cos(2*t)*sin(t))  loop(t) = (cos(2*t)*cos(t), cos(2*t)*sin(t))          D    \\theta = \\tfrac{\\pi}{4}    \\theta = -\\tfrac{\\pi}{4}                   A Volume Computed in Polar Coordinates   Example III   Find the volume of the solid that lies under the paraboloid , above the -plane, and inside the cylinder .     We notice that the cylinder can be re-written as , which is shown in ; the solid itself is shown in . In polar coordinates, becomes , that is, , so the base disk is   Therefore,     The base of the solid in : the disk , whose boundary is the polar curve .   A disk of radius one centered at (1,0), passing through the origin.    circ(t) = (1 + cos(t), sin(t))       1    2    D    (x-1)^2 + y^2 = 1 \\text{ (or } r = 2\\cos\\theta)    0               The solid of : the region under the paraboloid , above the -plane, and inside the cylinder . Its volume is .   A paraboloid rising inside an off-center vertical cylinder above the plane.  Three coordinate axes in space with a vertical circular cylinder of radius one centered on the line x equals one, y equals zero. Inside the cylinder, the paraboloid z equals x squared plus y squared rises from the origin; the solid between the x y plane and the paraboloid, inside the cylinder, is the region whose volume is computed. Dashed lines mark the base circle.        An Integral That Needs Polar Coordinates   Example IV   Calculate the double integral , where is the unit disk centered at the origin.   Hint: Notice that you cannot solve this integral using Cartesian coordinates.     In polar coordinates the unit disk is , , and . The extra factor of in is exactly what makes the integral computable, via the substitution :      Concept Check  Each question below asks for a setup in polar coordinates. Recall from that , , and from that , so that the double integral takes the polar form .  The work is almost entirely in the limits: which values of sweep the region, and for each such , between which two values of does the ray at that angle enter and leave the region. Two of the figures below carry a slider for so you can watch the ray move.   Three areas   Set up three (not more than three) integrals that correspond to the following areas graphed in :   the red-colored area,  the blue-colored area,  the sum of the areas in (1) and (2).     Both regions are swept by the rays with : the lower limit is the positive -axis and the upper limit is the line . The vertical line is , that is , and the two arcs are and . Along a ray, the red region runs from the unit circle out to the line , and the blue region takes over from there out to the circle of radius :   The third integral is the point of the question: adding the two regions removes the line from the picture, and what is left is the annular sector between and over , whose area is . It is a good check on the first two: .     Figure (1): two regions between the circles and , cut apart by the vertical line and swept by the angles . The line is the ray , and it meets exactly on the outer circle.   Two semicircles, a slanted line, and two vertical lines bounding two shaded regions.    inner(t) = (cos(t), sin(t))  outer(t) = (2*cos(t), 2*sin(t))             \\left(1,\\sqrt3\\right)     \\theta = \\pi\/3  r=1  r=2  x=1  x=2  1  2                    Mass of a piece of a rose   Region is the region inside  and inside  . See . Set up a double integral for computing the mass of a planar object that occupies region and whose density is given by .   Hint : note that as varies, you may need to modify the limits of accordingly.    In polar coordinates the density is , and , so the two factors of cancel and the integrand is :   Now the limits, which is where the hint bites. Take the petal around , which is traced for . Sliding the ray in shows what happens: near the petal is fatter than the circle, so the ray leaves at , while near the edges of the petal it is thinner and the ray leaves at . The changeover is where , that is . So for that petal   the factor coming from the two symmetric ends of the petal. The three petals are congruent, so      Figure (2): the rose and the circle . Drag the slider to turn the ray of angle ; the dots mark where that ray crosses each curve, which is what fixes the limits of .     The ball and the cylinder again, in polar   Set up a double integral (in polar coordinates) for computing the volume of the region bounded by the cylinder and the sphere . See .    This is again, and it is the reason polar coordinates were worth developing. The height over a point of the region of integration is still . The two boundary circles are as friendly as they could be in polar form: the sphere gives , and the cylinder expands to , that is . They cross where , at and .  For the sphere is the binding constraint and the ray leaves at ; outside that range the cylinder is, and the ray leaves at . Using the symmetry about the -axis,   Compare the region of integration here with the one in : the same set, described by two circles instead of by a square root.     The overlap of two cardioids   Set up integral(s) for computing the area of the overlap of the two curves and . See .    A point lies in the overlap when its is at most both  and , so along each ray the region runs from out to the smaller of the two. The two cardioids cross where , that is and , and these are exactly the angles where the smaller of the two changes identity. Sliding the ray in makes this visible: the readout shows which of the two radii is smaller.   Each piece contributes the same amount, by the symmetry of the picture about the line , and      Figure (4): the cardioids and . Drag the slider to turn the ray of angle ; the overlap is what the ray reaches before it leaves the first of the two curves.     "
},
{
  "id": "fig-polar-rectangles-prefigure",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-polar-rectangles-prefigure",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " On the left, the region . On the right, divided into polar rectangles; the highlighted polar rectangle has area , where is its center.    A washer-slice region between two radii and two angles.    outer(t) = (2.4*cos(t), 2.4*sin(t))  inner(t) = (1.1*cos(t), 1.1*sin(t))            R   r = b  r = a   \\theta = \\beta    \\theta = \\alpha    O               The washer slice divided into small polar rectangles, one highlighted.    a1(t) = (1.1*cos(t), 1.1*sin(t))  a2(t) = (1.425*cos(t), 1.425*sin(t))  a3(t) = (1.75*cos(t), 1.75*sin(t))  a4(t) = (2.075*cos(t), 2.075*sin(t))  a5(t) = (2.4*cos(t), 2.4*sin(t))                  R_{ij}   (r_i^*, \\theta_j^*)    O              "
},
{
  "id": "fig-polar-element-video",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-polar-element-video",
  "type": "Figure",
  "number": "2.4.2",
  "title": "",
  "body": " Animation of the polar area element. The region is divided into finer and finer polar rectangles; a highlighted cell has area exactly , and the sum equals the area of at every stage.   "
},
{
  "id": "example-polar-annulus",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#example-polar-annulus",
  "type": "Example",
  "number": "2.4.3",
  "title": "Example I.",
  "body": " Example I   Evaluate , where is the region in the upper half plane bounded by the circles and .   "
},
{
  "id": "fig-half-annulus-prefigure",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-half-annulus-prefigure",
  "type": "Figure",
  "number": "2.4.4",
  "title": "",
  "body": " The region of : the upper half of the annulus between the circles and . In polar coordinates it is simply , .   The upper half of an annulus between radii one and two.    outer(t) = (2*cos(t), 2*sin(t))  inner(t) = (cos(t), sin(t))        R   x^2+y^2 = 4  x^2+y^2 = 1   1    2              "
},
{
  "id": "example-polar-rose",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#example-polar-rose",
  "type": "Example",
  "number": "2.4.5",
  "title": "Example II.",
  "body": " Example II   Use a double integral to find the area enclosed by one loop of the four-leaved rose , graphed in .   "
},
{
  "id": "fig-rose-prefigure",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-rose-prefigure",
  "type": "Figure",
  "number": "2.4.6",
  "title": "",
  "body": " The four-leaved rose . The shaded loop is swept out as runs from to ; the dashed rays are , where .   A four-leaved rose with one petal outlined and shaded.    rose(t) = (cos(2*t)*cos(t), cos(2*t)*sin(t))  loop(t) = (cos(2*t)*cos(t), cos(2*t)*sin(t))          D    \\theta = \\tfrac{\\pi}{4}    \\theta = -\\tfrac{\\pi}{4}               "
},
{
  "id": "example-polar-volume",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#example-polar-volume",
  "type": "Example",
  "number": "2.4.7",
  "title": "Example III.",
  "body": " Example III   Find the volume of the solid that lies under the paraboloid , above the -plane, and inside the cylinder .   "
},
{
  "id": "fig-shifted-disk-prefigure",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-shifted-disk-prefigure",
  "type": "Figure",
  "number": "2.4.8",
  "title": "",
  "body": " The base of the solid in : the disk , whose boundary is the polar curve .   A disk of radius one centered at (1,0), passing through the origin.    circ(t) = (1 + cos(t), sin(t))       1    2    D    (x-1)^2 + y^2 = 1 \\text{ (or } r = 2\\cos\\theta)    0             "
},
{
  "id": "fig-polar-volume-tikz",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-polar-volume-tikz",
  "type": "Figure",
  "number": "2.4.9",
  "title": "",
  "body": " The solid of : the region under the paraboloid , above the -plane, and inside the cylinder . Its volume is .   A paraboloid rising inside an off-center vertical cylinder above the plane.  Three coordinate axes in space with a vertical circular cylinder of radius one centered on the line x equals one, y equals zero. Inside the cylinder, the paraboloid z equals x squared plus y squared rises from the origin; the solid between the x y plane and the paraboloid, inside the cylinder, is the region whose volume is computed. Dashed lines mark the base circle.    "
},
{
  "id": "example-polar-gaussian",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#example-polar-gaussian",
  "type": "Example",
  "number": "2.4.10",
  "title": "Example IV.",
  "body": " Example IV   Calculate the double integral , where is the unit disk centered at the origin.   Hint: Notice that you cannot solve this integral using Cartesian coordinates.   "
},
{
  "id": "q-polar-three-areas",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#q-polar-three-areas",
  "type": "Checkpoint",
  "number": "2.4.11",
  "title": "Three areas.",
  "body": " Three areas   Set up three (not more than three) integrals that correspond to the following areas graphed in :   the red-colored area,  the blue-colored area,  the sum of the areas in (1) and (2).     Both regions are swept by the rays with : the lower limit is the positive -axis and the upper limit is the line . The vertical line is , that is , and the two arcs are and . Along a ray, the red region runs from the unit circle out to the line , and the blue region takes over from there out to the circle of radius :   The third integral is the point of the question: adding the two regions removes the line from the picture, and what is left is the annular sector between and over , whose area is . It is a good check on the first two: .   "
},
{
  "id": "fig-polar-two-areas",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-polar-two-areas",
  "type": "Figure",
  "number": "2.4.12",
  "title": "",
  "body": " Figure (1): two regions between the circles and , cut apart by the vertical line and swept by the angles . The line is the ray , and it meets exactly on the outer circle.   Two semicircles, a slanted line, and two vertical lines bounding two shaded regions.    inner(t) = (cos(t), sin(t))  outer(t) = (2*cos(t), 2*sin(t))             \\left(1,\\sqrt3\\right)     \\theta = \\pi\/3  r=1  r=2  x=1  x=2  1  2                  "
},
{
  "id": "q-polar-rose-mass",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#q-polar-rose-mass",
  "type": "Checkpoint",
  "number": "2.4.13",
  "title": "Mass of a piece of a rose.",
  "body": " Mass of a piece of a rose   Region is the region inside  and inside  . See . Set up a double integral for computing the mass of a planar object that occupies region and whose density is given by .   Hint : note that as varies, you may need to modify the limits of accordingly.    In polar coordinates the density is , and , so the two factors of cancel and the integrand is :   Now the limits, which is where the hint bites. Take the petal around , which is traced for . Sliding the ray in shows what happens: near the petal is fatter than the circle, so the ray leaves at , while near the edges of the petal it is thinner and the ray leaves at . The changeover is where , that is . So for that petal   the factor coming from the two symmetric ends of the petal. The three petals are congruent, so    "
},
{
  "id": "fig-polar-rose-circle",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-polar-rose-circle",
  "type": "Figure",
  "number": "2.4.14",
  "title": "",
  "body": " Figure (2): the rose and the circle . Drag the slider to turn the ray of angle ; the dots mark where that ray crosses each curve, which is what fixes the limits of .   "
},
{
  "id": "q-polar-cylinder-sphere",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#q-polar-cylinder-sphere",
  "type": "Checkpoint",
  "number": "2.4.15",
  "title": "The ball and the cylinder again, in polar.",
  "body": " The ball and the cylinder again, in polar   Set up a double integral (in polar coordinates) for computing the volume of the region bounded by the cylinder and the sphere . See .    This is again, and it is the reason polar coordinates were worth developing. The height over a point of the region of integration is still . The two boundary circles are as friendly as they could be in polar form: the sphere gives , and the cylinder expands to , that is . They cross where , at and .  For the sphere is the binding constraint and the ray leaves at ; outside that range the cylinder is, and the ray leaves at . Using the symmetry about the -axis,   Compare the region of integration here with the one in : the same set, described by two circles instead of by a square root.   "
},
{
  "id": "q-polar-cardioid-overlap",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#q-polar-cardioid-overlap",
  "type": "Checkpoint",
  "number": "2.4.16",
  "title": "The overlap of two cardioids.",
  "body": " The overlap of two cardioids   Set up integral(s) for computing the area of the overlap of the two curves and . See .    A point lies in the overlap when its is at most both  and , so along each ray the region runs from out to the smaller of the two. The two cardioids cross where , that is and , and these are exactly the angles where the smaller of the two changes identity. Sliding the ray in makes this visible: the readout shows which of the two radii is smaller.   Each piece contributes the same amount, by the symmetry of the picture about the line , and    "
},
{
  "id": "fig-polar-cardioids",
  "level": "2",
  "url": "section-double-integrals-polar-form.html#fig-polar-cardioids",
  "type": "Figure",
  "number": "2.4.17",
  "title": "",
  "body": " Figure (4): the cardioids and . Drag the slider to turn the ray of angle ; the overlap is what the ray reaches before it leaves the first of the two curves.   "
},
{
  "id": "section-triple-integrals-rectangular",
  "level": "1",
  "url": "section-triple-integrals-rectangular.html",
  "type": "Section",
  "number": "2.5",
  "title": "Triple Integrals in Rectangular Coordinates",
  "body": " Triple Integrals in Rectangular Coordinates  Previously, we learned how to calculate double integrals and how to use them to calculate volumes. Today, we will learn triple integrals in Cartesian coordinates, which can also be used to evaluate volumes of solids, along with other applications that we will learn.    What Does a Triple Integral Mean?  An important application comes first: the mass of a block with variable density (mass per unit volume) is   More generally, a triple integral has the form , defined by chopping the solid into tiny blocks of volume , sampling in each block, and passing to the limit. A natural question is: what does mean? We can think of it as summing the volumes of the tiny blocks , hence      Case I:    The first case that we will study is the case where the region of integration is of the form   so lies between the surfaces and over a projection in the -plane, and    Example I   Calculate the triple integral , where is the tetrahedron shown in , bounded by the coordinate planes and the plane .     Let us begin by describing the projection (shown in ) and the region :   We then calculate the triple integral as follows:     The tetrahedron of , bounded by the three coordinate planes and the plane . Its projection into the -plane is the triangle .   A tetrahedron cut from the first octant by a slanted plane, with its shadow triangle shaded.  Three coordinate axes in space with a tetrahedron whose vertices are the origin and the three points one zero zero, zero one zero, and zero zero one. The slanted face is the plane z equals one minus x minus y. The base triangle D in the x y plane is shaded.      The projection of the tetrahedron into the -plane: the triangle , . A vertical arrow at a fixed in corresponds to the inner -integration from up to .   The triangular projection D with legs on the coordinate axes.           1    1    D   y = 1 - x   0              The role of the projection and of the inner -integration a column rising from through the solid is animated in .   Animation of iterated triple integration for . The solid is projected onto the triangle in the -plane; at each point of a column runs from up to the surface (the inner integral), and the column then sweeps across (the two outer integrals).       Case II:    The second case is entirely similar to , but the projection is described with horizontal strips:   and the corresponding iterated integral is . In fact, by projecting into the - or -plane instead, a triple integral can be set up in six different orders of integration; the next example illustrates three of them.   Example II   Set up the triple integrals below whose value gives the volume of the region of , bounded by the cylinder , the plane , and the coordinate planes. Then, evaluate two out of the three integrals.          Question: How many more triple integrals can you think of for computing such a volume? (Three more; six in total.)     Part A  For the order , we project into the -plane (the triangle on the left in ): , , and the 3D figure gives . Hence     Part B  For the order , we project into the -plane (the middle region in ): , , and the 3D figure gives the limits of the last variable: . Hence     Part C  For the order , we project into the -plane (the region on the right in ). This time the projection must be split by the curve into   with on (the plane is reached first) and on (the cylinder is reached first). Hence     The solid of , bounded by the parabolic cylinder , the vertical plane , and the coordinate planes.   A solid under a parabolic cylinder, cut by a slanted vertical plane.  Three coordinate axes in space with a solid bounded above by the parabolic cylinder z equals one minus x squared, on the side by the vertical plane y equals one minus x, and by the coordinate planes. The curved top descends from height one at the z axis to zero at x equals one.      The three projections of the solid . Left: into the -plane (order ). Middle: into the -plane (order ). Right: into the -plane (order ), which the curve splits into and .    The x y projection: a right triangle with hypotenuse y equals one minus x.        y = 1-x   1    1             The x z projection: the region under a parabola.    par(t) = (t, 1 - t^2)      z = 1-x^2   1    1             The y z projection: the unit square split into two regions by a curve.    cur(t) = (t, 1 - (1-t)^2)       R_1    R_2   z = 1-(1-y)^2   1    1                The solid itself, to turn around: the triangular base in the -plane, the surface that caps it, and the two edges of that cap above and above . The vertical plane slices the solid the way the innermost integral does.       Mass With Variable Density   Example III   Assume that the density (mass per unit volume) is given by . Evaluate the mass of the solid of .     Using the mass formula with the same limits as in Part A of :      Concept Check  The first five questions all concern the same solid , the region bounded below by the paraboloid and above by the upper half of the sphere of radius centered at , drawn in . Four of them ask for a sign or a yes-or-no answer rather than a number: the point is to read the integrand on the region, not to integrate.  It is worth locating first. The two surfaces meet where ; writing this is , hence and . So sits over the unit disk , and for each there, runs from up to .   The sign of an integral, without calculating    Without calculation , decide whether the integral below is positive, negative, or zero. The region of integration is the region bounded by and . See .    Positive  Negative  Zero    Hint : begin by determining the limits of integration.     B , negative.  The upper surface of is , so every point of satisfies , that is   The integrand is exactly the (signed) vertical distance from a point of up to the sphere, so it is never positive, and it vanishes only on the cap itself, a surface of zero volume. An integrand that is negative on the interior of the solid gives a negative integral.     Could it be a mass density?   Can the function represent mass density (mass per unit volume) over the region , which is graphed in ?   Yes  No      B , no. Mass is never negative, so a mass density must satisfy . As we just saw, this is negative throughout the interior of . A region carrying it would have negative mass.     Could it be a charge density?   Can the function represent charge density (charge per unit volume) over the region , which is graphed in ?   Yes  No      A , yes. Charge comes in both signs, so a charge density is free to be negative; there is nothing wrong with a body that is negatively charged everywhere. The triple integral of is then the total charge, and its negative sign says the body carries a net negative charge.  This is the whole difference between the two questions: the mathematics is identical, and only the physical meaning of the sign changes.     The sign of a second integral    Without calculation , decide whether the integral below is positive, negative, or zero. The region of integration is the region bounded by and . See .    Positive  Negative  Zero      A , positive.  The solid lies over the unit disk, so at every point of , and therefore   The integrand is at least on all of , so the integral is positive in fact it is at least the volume of . Note that no antiderivative was needed: only the projection of onto the -plane.     Could this one be a mass density?   Can the function represent mass density (mass per unit volume) over the region , which is graphed in ?   Yes  No      A , yes. On we have , so is positive there and can be read as a density: the solid is densest along its axis and lightest near the rim, where the two surfaces meet. Its mass would be the integral of .  Beware of the phrase over the region . The same formula would not do on a larger region: outside the cylinder it turns negative.     Figure (3): the region of integration , bounded below by the paraboloid and above by . The two surfaces meet over the circle .     A volume between two cylinders   Set up a triple integral for computing the volume of the region bounded by the two cylinders and and the two planes and . See .    The two cylinders are vertical walls standing on the curves and of the -plane, and those curves cross at and . Between them , so the shadow of the solid is   which is the region of lying between the two walls. The floor is and the ceiling is the plane, so   Carrying it out is quick, since the innermost integral just returns the height of the ceiling:      Figure (4): the solid bounded by the cylinders and , the plane , and the plane , whose two edges are drawn on the walls.     "
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
  "number": "2.5.1",
  "title": "Example I.",
  "body": " Example I   Calculate the triple integral , where is the tetrahedron shown in , bounded by the coordinate planes and the plane .   "
},
{
  "id": "fig-triple-tetra-tikz",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-tetra-tikz",
  "type": "Figure",
  "number": "2.5.2",
  "title": "",
  "body": " The tetrahedron of , bounded by the three coordinate planes and the plane . Its projection into the -plane is the triangle .   A tetrahedron cut from the first octant by a slanted plane, with its shadow triangle shaded.  Three coordinate axes in space with a tetrahedron whose vertices are the origin and the three points one zero zero, zero one zero, and zero zero one. The slanted face is the plane z equals one minus x minus y. The base triangle D in the x y plane is shaded.    "
},
{
  "id": "fig-triple-tetra-base-prefigure",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-tetra-base-prefigure",
  "type": "Figure",
  "number": "2.5.3",
  "title": "",
  "body": " The projection of the tetrahedron into the -plane: the triangle , . A vertical arrow at a fixed in corresponds to the inner -integration from up to .   The triangular projection D with legs on the coordinate axes.           1    1    D   y = 1 - x   0             "
},
{
  "id": "fig-triple-column-video",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-column-video",
  "type": "Figure",
  "number": "2.5.4",
  "title": "",
  "body": " Animation of iterated triple integration for . The solid is projected onto the triangle in the -plane; at each point of a column runs from up to the surface (the inner integral), and the column then sweeps across (the two outer integrals).   "
},
{
  "id": "example-triple-order",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#example-triple-order",
  "type": "Example",
  "number": "2.5.5",
  "title": "Example II.",
  "body": " Example II   Set up the triple integrals below whose value gives the volume of the region of , bounded by the cylinder , the plane , and the coordinate planes. Then, evaluate two out of the three integrals.          Question: How many more triple integrals can you think of for computing such a volume? (Three more; six in total.)   "
},
{
  "id": "fig-triple-wedge-tikz",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-wedge-tikz",
  "type": "Figure",
  "number": "2.5.6",
  "title": "",
  "body": " The solid of , bounded by the parabolic cylinder , the vertical plane , and the coordinate planes.   A solid under a parabolic cylinder, cut by a slanted vertical plane.  Three coordinate axes in space with a solid bounded above by the parabolic cylinder z equals one minus x squared, on the side by the vertical plane y equals one minus x, and by the coordinate planes. The curved top descends from height one at the z axis to zero at x equals one.    "
},
{
  "id": "fig-triple-projections-prefigure",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-projections-prefigure",
  "type": "Figure",
  "number": "2.5.7",
  "title": "",
  "body": " The three projections of the solid . Left: into the -plane (order ). Middle: into the -plane (order ). Right: into the -plane (order ), which the curve splits into and .    The x y projection: a right triangle with hypotenuse y equals one minus x.        y = 1-x   1    1             The x z projection: the region under a parabola.    par(t) = (t, 1 - t^2)      z = 1-x^2   1    1             The y z projection: the unit square split into two regions by a curve.    cur(t) = (t, 1 - (1-t)^2)       R_1    R_2   z = 1-(1-y)^2   1    1              "
},
{
  "id": "fig-triple-wedge-geogebra",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-wedge-geogebra",
  "type": "Figure",
  "number": "2.5.8",
  "title": "",
  "body": " The solid itself, to turn around: the triangular base in the -plane, the surface that caps it, and the two edges of that cap above and above . The vertical plane slices the solid the way the innermost integral does.   "
},
{
  "id": "example-triple-mass",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#example-triple-mass",
  "type": "Example",
  "number": "2.5.9",
  "title": "Example III.",
  "body": " Example III   Assume that the density (mass per unit volume) is given by . Evaluate the mass of the solid of .   "
},
{
  "id": "q-triple-sign-one",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#q-triple-sign-one",
  "type": "Checkpoint",
  "number": "2.5.10",
  "title": "The sign of an integral, without calculating.",
  "body": " The sign of an integral, without calculating    Without calculation , decide whether the integral below is positive, negative, or zero. The region of integration is the region bounded by and . See .    Positive  Negative  Zero    Hint : begin by determining the limits of integration.     B , negative.  The upper surface of is , so every point of satisfies , that is   The integrand is exactly the (signed) vertical distance from a point of up to the sphere, so it is never positive, and it vanishes only on the cap itself, a surface of zero volume. An integrand that is negative on the interior of the solid gives a negative integral.   "
},
{
  "id": "q-triple-mass-density-one",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#q-triple-mass-density-one",
  "type": "Checkpoint",
  "number": "2.5.11",
  "title": "Could it be a mass density?",
  "body": " Could it be a mass density?   Can the function represent mass density (mass per unit volume) over the region , which is graphed in ?   Yes  No      B , no. Mass is never negative, so a mass density must satisfy . As we just saw, this is negative throughout the interior of . A region carrying it would have negative mass.   "
},
{
  "id": "q-triple-charge-density",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#q-triple-charge-density",
  "type": "Checkpoint",
  "number": "2.5.12",
  "title": "Could it be a charge density?",
  "body": " Could it be a charge density?   Can the function represent charge density (charge per unit volume) over the region , which is graphed in ?   Yes  No      A , yes. Charge comes in both signs, so a charge density is free to be negative; there is nothing wrong with a body that is negatively charged everywhere. The triple integral of is then the total charge, and its negative sign says the body carries a net negative charge.  This is the whole difference between the two questions: the mathematics is identical, and only the physical meaning of the sign changes.   "
},
{
  "id": "q-triple-sign-two",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#q-triple-sign-two",
  "type": "Checkpoint",
  "number": "2.5.13",
  "title": "The sign of a second integral.",
  "body": " The sign of a second integral    Without calculation , decide whether the integral below is positive, negative, or zero. The region of integration is the region bounded by and . See .    Positive  Negative  Zero      A , positive.  The solid lies over the unit disk, so at every point of , and therefore   The integrand is at least on all of , so the integral is positive in fact it is at least the volume of . Note that no antiderivative was needed: only the projection of onto the -plane.   "
},
{
  "id": "q-triple-mass-density-two",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#q-triple-mass-density-two",
  "type": "Checkpoint",
  "number": "2.5.14",
  "title": "Could this one be a mass density?",
  "body": " Could this one be a mass density?   Can the function represent mass density (mass per unit volume) over the region , which is graphed in ?   Yes  No      A , yes. On we have , so is positive there and can be read as a density: the solid is densest along its axis and lightest near the rim, where the two surfaces meet. Its mass would be the integral of .  Beware of the phrase over the region . The same formula would not do on a larger region: outside the cylinder it turns negative.   "
},
{
  "id": "fig-triple-paraboloid-sphere",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-paraboloid-sphere",
  "type": "Figure",
  "number": "2.5.15",
  "title": "",
  "body": " Figure (3): the region of integration , bounded below by the paraboloid and above by . The two surfaces meet over the circle .   "
},
{
  "id": "q-triple-two-cylinders",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#q-triple-two-cylinders",
  "type": "Checkpoint",
  "number": "2.5.16",
  "title": "A volume between two cylinders.",
  "body": " A volume between two cylinders   Set up a triple integral for computing the volume of the region bounded by the two cylinders and and the two planes and . See .    The two cylinders are vertical walls standing on the curves and of the -plane, and those curves cross at and . Between them , so the shadow of the solid is   which is the region of lying between the two walls. The floor is and the ceiling is the plane, so   Carrying it out is quick, since the innermost integral just returns the height of the ceiling:    "
},
{
  "id": "fig-triple-two-cylinders",
  "level": "2",
  "url": "section-triple-integrals-rectangular.html#fig-triple-two-cylinders",
  "type": "Figure",
  "number": "2.5.17",
  "title": "",
  "body": " Figure (4): the solid bounded by the cylinders and , the plane , and the plane , whose two edges are drawn on the walls.   "
},
{
  "id": "section-triple-integrals-cylindrical",
  "level": "1",
  "url": "section-triple-integrals-cylindrical.html",
  "type": "Section",
  "number": "2.6",
  "title": "Triple Integrals in Cylindrical Coordinates",
  "body": " Triple Integrals in Cylindrical Coordinates  Previously, we learned how to calculate triple integrals in rectangular coordinates. Today, we will learn triple integrals in cylindrical coordinates, which can be used to evaluate volumes of solids or to integrate a function over a region in space. We will see that when there is symmetry about an axis, it is more convenient to use cylindrical coordinates to calculate a triple integral.    Cylindrical Coordinates  Cylindrical coordinates are the combination of polar coordinates in the -plane and the -coordinate of Cartesian coordinates; see . Thus, adding to , the relations between Cartesian and cylindrical coordinates are     A point in cylindrical coordinates: are the polar coordinates of its projection into the -plane, and is its usual height.   A point in space located by a radius in the plane, an angle, and a height.  Three coordinate axes in space. A point P is shown above the x y plane. A segment of length r runs from the origin to the projection of P in the x y plane, making an angle theta with the positive x axis, and a vertical segment of length z connects the projection to P.     Before calculating triple integrals in cylindrical coordinates, we need to figure out the volume element in this new set of coordinates. Remember from that the area element in polar coordinates is ; stacking it through a height gives the cylindrical volume element    Now suppose our goal is to integrate over a region described as   where the region is known in polar coordinates:   Then the iterated integral , written as , can be converted to cylindrical coordinates:      The Mass of a Solid With Axial Symmetry   Example I   A solid lies within the cylinder , below the plane , and above the paraboloid . Given that the density of the solid at any point is proportional to its distance from the axis of the cylinder, find the mass of the solid.     Let us begin by plotting the region of integration ( ). Note that the equation of the cylinder in cylindrical coordinates is , and the equation of the paraboloid is   Therefore, the limits of integration can be written as   since the projection into the -plane is a circle of radius and the height of the solid is bounded between the paraboloid and . Since we know that the density of the solid is proportional to the distance from the axis of the cylinder, we have   and since , in cylindrical coordinates . Thus, by and , we can compute the mass of the solid as follows:     The solid of : inside the cylinder , above the paraboloid , and below the plane . Its mass, with density , is .   A vertical cylinder with a flat top and a dome-shaped paraboloid floor.  Three coordinate axes in space with a vertical circular cylinder of radius one about the z axis, capped by the plane z equals four on top. Inside the bottom of the cylinder, the paraboloid z equals one minus r squared forms a dome shaped floor that touches the point zero zero one on the z axis and meets the cylinder wall at the x y plane.     The way a column of the solid runs from the paraboloid floor up to the plane , and how it sweeps around the axis, is animated in .   Animation of the cylindrical setup for . The solid is assembled from the cylinder , the plane , and the paraboloid floor ; a column at runs from up to , and sweeps through the solid as goes around the axis, illustrating .      Concept Check  Each part below describes a solid by the surfaces that bound it. Set up a triple integral in cylindrical coordinates that gives its volume: the work is all in the limits, and supplies the rest. Try each part from the description alone the solution shows the solid, so you can check whether the picture in your head was the right one.   Eight volumes in cylindrical coordinates   Set up triple integrals, in cylindrical coordinates, which give the volume of each of the following regions.     The volume of the region bounded above by the paraboloid , below by the plane , and on the side by the cylinder .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The cylinder is and the paraboloid is ; they meet at , which is where the wall of the cylinder stops.   The solid of part (a).        The volume of the region bounded below by the paraboloid and above by the plane .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The paraboloid is , and it meets at , which fixes the outer limit of .   The solid of part (b).        The volume of the region bounded above by the paraboloid , below by the plane , and on the side by the cylinder .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   This solid and the one of together fill the cylinder , , whose volume is which is why both answers are .   The solid of part (c).        The volume of the region bounded below by the lower half of the sphere and above by the plane .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The sphere has center and radius , so its lower half is and the answer is the volume of a hemisphere of radius .   The solid of part (d).        The volume of the region bounded by the cone and the planes and .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The cone is , and a point lies inside its upper half when . The solid is two cones of radius and height , each of volume .   The solid of part (e).        The volume of the region bounded by the hyperboloid of one sheet and the planes and .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   Here it pays to integrate first: the wall is , one formula for every , while slicing the other way would take two pieces. The waist has radius and the caps radius .   The solid of part (f).        The volume of the region bounded by the cone and the planes and .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The same cone as in , cut at different heights: a piece of radius and height and one of radius and height , of volumes and .   The solid of part (g).        The volume of the region bounded above by the cone , below by the plane , and on the side by the cylinder .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The cone is , which is at the wall . Compare : the same picture with in place of .   The solid of part (h).        "
},
{
  "id": "fig-cylindrical-point-tikz",
  "level": "2",
  "url": "section-triple-integrals-cylindrical.html#fig-cylindrical-point-tikz",
  "type": "Figure",
  "number": "2.6.1",
  "title": "",
  "body": " A point in cylindrical coordinates: are the polar coordinates of its projection into the -plane, and is its usual height.   A point in space located by a radius in the plane, an angle, and a height.  Three coordinate axes in space. A point P is shown above the x y plane. A segment of length r runs from the origin to the projection of P in the x y plane, making an angle theta with the positive x axis, and a vertical segment of length z connects the projection to P.    "
},
{
  "id": "example-cylindrical-mass",
  "level": "2",
  "url": "section-triple-integrals-cylindrical.html#example-cylindrical-mass",
  "type": "Example",
  "number": "2.6.2",
  "title": "Example I.",
  "body": " Example I   A solid lies within the cylinder , below the plane , and above the paraboloid . Given that the density of the solid at any point is proportional to its distance from the axis of the cylinder, find the mass of the solid.   "
},
{
  "id": "fig-cylindrical-solid-tikz",
  "level": "2",
  "url": "section-triple-integrals-cylindrical.html#fig-cylindrical-solid-tikz",
  "type": "Figure",
  "number": "2.6.3",
  "title": "",
  "body": " The solid of : inside the cylinder , above the paraboloid , and below the plane . Its mass, with density , is .   A vertical cylinder with a flat top and a dome-shaped paraboloid floor.  Three coordinate axes in space with a vertical circular cylinder of radius one about the z axis, capped by the plane z equals four on top. Inside the bottom of the cylinder, the paraboloid z equals one minus r squared forms a dome shaped floor that touches the point zero zero one on the z axis and meets the cylinder wall at the x y plane.    "
},
{
  "id": "fig-cylindrical-video",
  "level": "2",
  "url": "section-triple-integrals-cylindrical.html#fig-cylindrical-video",
  "type": "Figure",
  "number": "2.6.4",
  "title": "",
  "body": " Animation of the cylindrical setup for . The solid is assembled from the cylinder , the plane , and the paraboloid floor ; a column at runs from up to , and sweeps through the solid as goes around the axis, illustrating .   "
},
{
  "id": "q-cylindrical-volumes",
  "level": "2",
  "url": "section-triple-integrals-cylindrical.html#q-cylindrical-volumes",
  "type": "Checkpoint",
  "number": "2.6.5",
  "title": "Eight volumes in cylindrical coordinates.",
  "body": " Eight volumes in cylindrical coordinates   Set up triple integrals, in cylindrical coordinates, which give the volume of each of the following regions.     The volume of the region bounded above by the paraboloid , below by the plane , and on the side by the cylinder .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The cylinder is and the paraboloid is ; they meet at , which is where the wall of the cylinder stops.   The solid of part (a).        The volume of the region bounded below by the paraboloid and above by the plane .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The paraboloid is , and it meets at , which fixes the outer limit of .   The solid of part (b).        The volume of the region bounded above by the paraboloid , below by the plane , and on the side by the cylinder .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   This solid and the one of together fill the cylinder , , whose volume is which is why both answers are .   The solid of part (c).        The volume of the region bounded below by the lower half of the sphere and above by the plane .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The sphere has center and radius , so its lower half is and the answer is the volume of a hemisphere of radius .   The solid of part (d).        The volume of the region bounded by the cone and the planes and .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The cone is , and a point lies inside its upper half when . The solid is two cones of radius and height , each of volume .   The solid of part (e).        The volume of the region bounded by the hyperboloid of one sheet and the planes and .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   Here it pays to integrate first: the wall is , one formula for every , while slicing the other way would take two pieces. The waist has radius and the caps radius .   The solid of part (f).        The volume of the region bounded by the cone and the planes and .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The same cone as in , cut at different heights: a piece of radius and height and one of radius and height , of volumes and .   The solid of part (g).        The volume of the region bounded above by the cone , below by the plane , and on the side by the cylinder .    The bounding surfaces are the ones drawn in , and in cylindrical coordinates   The cone is , which is at the wall . Compare : the same picture with in place of .   The solid of part (h).      "
},
{
  "id": "section-triple-integrals-spherical",
  "level": "1",
  "url": "section-triple-integrals-spherical.html",
  "type": "Section",
  "number": "2.7",
  "title": "Triple Integrals in Spherical Coordinates",
  "body": " Triple Integrals in Spherical Coordinates  Today, we will study yet another useful coordinate system in three dimensions, which is known as the spherical coordinate system . It simplifies the evaluation of triple integrals over regions bounded by spheres or cones.    Spherical Coordinates  The spherical coordinates can be best explained in a figure. Consider the point with spherical coordinates shown in .      is the distance of the point from the origin ( ).     is the angle the projection of makes with the positive -axis. This is the same as in cylindrical coordinates, ( ).     is the angle between and the positive -axis ( ).      A point in spherical coordinates: is the distance from the origin, is the usual polar angle of the projection into the -plane, and is the angle between and the positive -axis.   A point in space located by a distance from the origin and two angles.  Three coordinate axes in space. A segment of length rho runs from the origin to a point P above the x y plane. The angle phi is marked between the positive z axis and the segment, and the angle theta is marked in the x y plane between the positive x axis and the dashed projection of the segment. A dashed vertical line connects P to its projection.      Equations Relating Spherical Coordinates to Cartesian and Cylindrical Coordinates      Spheres and cones have particularly simple equations in spherical coordinates. For a sphere centered at the origin with radius , we have    Example I   Find the equation of the sphere in spherical coordinates.     Substituting the spherical expressions for , , and :     Example II   What are the equations of the two cones and in spherical coordinates?     The upper cone makes a angle with the positive -axis, so every point on it has ; likewise the lower cone is . (Algebraically: forces .)    Coordinate Conversion Formulas   The corresponding formulas for in triple integrals (see and ):       Integration in Spherical Coordinates  The volume element in spherical coordinates is illustrated in : a spherical wedge with radial side , one arc side , and the other arc side , so    The spherical volume element (spherical wedge), with sliders for the three increments. Its three mutually perpendicular sides have lengths , , and , so .    Then, the triple integral over a region described in spherical coordinates by , , and can be converted into spherical coordinates as follows:      The Ice Cream Cone   Example III   Find the volume of the ice cream cone  cut from the solid sphere by the cone .     We begin by plotting the ice cream cone ( ). Next, we identify the region of integration, which will provide us with the integration limits:   Thus, by and , the volume of the ice cream cone can be evaluated as follows:     The ice cream cone of : the region inside the sphere and above the cone . Its volume is .   An ice cream cone shape: a cone from the origin capped by a piece of a sphere.  Three coordinate axes in space with an ice cream cone shaped solid: a cone with vertex at the origin opening upward at sixty degrees from the z axis, capped by a dome which is part of the unit sphere. The circle where the cone meets the sphere is drawn.     How the spherical description of the ice cream cone works the angle sweeping from the -axis down to the cone while reaches out to the sphere is animated in .   Animation of spherical coordinates and the ice cream cone. A ray from the origin at angles carries the point ; sweeping spins the ray around the -axis, sweeping tilts it away from the axis, and restricting , fills out the ice cream cone of .       Converting a Triple Integral to Spherical Coordinates   Example IV   Calculate the triple integral below by converting it to spherical coordinates:      We begin by converting the integration limits and the integrand to spherical coordinates. The limits describe the solid sphere of radius centered at , shown in :   Note that is the upper hemisphere and is the lower hemisphere. In spherical coordinates the solid is , , , and the integrand is . Thus gives:     The sphere of , which in spherical coordinates is . It sits on the -plane, touching the origin.   A sphere resting on the origin, centered on the vertical axis.  Three coordinate axes in space with a sphere of radius two centered on the z axis at height two, so it touches the origin from above. A dashed vertical diameter runs from the origin to the north pole at height four.        Re-Writing an Integral in Spherical and Cylindrical Coordinates   Example V   Re-write (do not evaluate) the following integral in spherical and cylindrical coordinates:      The -projection is the lower half disk , (shown in ), so and . In , the solid runs from the cone (that is, ) up to the plane ; the solid is shown in . Since , the cylindrical form is   For the spherical form, the cone is , and the plane becomes , that is, . With , gives     The -projection of the solid in : the lower half of the unit disk, described by , .   The lower half of the unit disk, shaded.    arc(t) = (cos(t), sin(t))       y = -\\sqrt{1-x^2}   1    -1               The solid of : over the lower half disk, between the cone (spherical ) and the plane (spherical ).   A half cone over the negative y half plane, capped by a flat half disk.  Three coordinate axes in space with a half cone opening upward from the origin at forty five degrees, over the half of the plane with y negative, capped above by the flat half disk in the plane z equals one. The straight edge of the cap lies over the x axis.       Calculate the volume of the region inside and below .     .     "
},
{
  "id": "fig-spherical-point-tikz",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-spherical-point-tikz",
  "type": "Figure",
  "number": "2.7.1",
  "title": "",
  "body": " A point in spherical coordinates: is the distance from the origin, is the usual polar angle of the projection into the -plane, and is the angle between and the positive -axis.   A point in space located by a distance from the origin and two angles.  Three coordinate axes in space. A segment of length rho runs from the origin to a point P above the x y plane. The angle phi is marked between the positive z axis and the segment, and the angle theta is marked in the x y plane between the positive x axis and the dashed projection of the segment. A dashed vertical line connects P to its projection.    "
},
{
  "id": "example-spherical-shifted-sphere",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#example-spherical-shifted-sphere",
  "type": "Example",
  "number": "2.7.2",
  "title": "Example I.",
  "body": " Example I   Find the equation of the sphere in spherical coordinates.   "
},
{
  "id": "example-spherical-cones",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#example-spherical-cones",
  "type": "Example",
  "number": "2.7.3",
  "title": "Example II.",
  "body": " Example II   What are the equations of the two cones and in spherical coordinates?   "
},
{
  "id": "fig-spherical-element-tikz",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-spherical-element-tikz",
  "type": "Figure",
  "number": "2.7.4",
  "title": "",
  "body": " The spherical volume element (spherical wedge), with sliders for the three increments. Its three mutually perpendicular sides have lengths , , and , so .   "
},
{
  "id": "example-spherical-icecream",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#example-spherical-icecream",
  "type": "Example",
  "number": "2.7.5",
  "title": "Example III.",
  "body": " Example III   Find the volume of the ice cream cone  cut from the solid sphere by the cone .   "
},
{
  "id": "fig-icecream-tikz",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-icecream-tikz",
  "type": "Figure",
  "number": "2.7.6",
  "title": "",
  "body": " The ice cream cone of : the region inside the sphere and above the cone . Its volume is .   An ice cream cone shape: a cone from the origin capped by a piece of a sphere.  Three coordinate axes in space with an ice cream cone shaped solid: a cone with vertex at the origin opening upward at sixty degrees from the z axis, capped by a dome which is part of the unit sphere. The circle where the cone meets the sphere is drawn.    "
},
{
  "id": "fig-spherical-video",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-spherical-video",
  "type": "Figure",
  "number": "2.7.7",
  "title": "",
  "body": " Animation of spherical coordinates and the ice cream cone. A ray from the origin at angles carries the point ; sweeping spins the ray around the -axis, sweeping tilts it away from the axis, and restricting , fills out the ice cream cone of .   "
},
{
  "id": "example-spherical-convert",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#example-spherical-convert",
  "type": "Example",
  "number": "2.7.8",
  "title": "Example IV.",
  "body": " Example IV   Calculate the triple integral below by converting it to spherical coordinates:    "
},
{
  "id": "fig-shifted-sphere-tikz",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-shifted-sphere-tikz",
  "type": "Figure",
  "number": "2.7.9",
  "title": "",
  "body": " The sphere of , which in spherical coordinates is . It sits on the -plane, touching the origin.   A sphere resting on the origin, centered on the vertical axis.  Three coordinate axes in space with a sphere of radius two centered on the z axis at height two, so it touches the origin from above. A dashed vertical diameter runs from the origin to the north pole at height four.    "
},
{
  "id": "example-spherical-rewrite",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#example-spherical-rewrite",
  "type": "Example",
  "number": "2.7.10",
  "title": "Example V.",
  "body": " Example V   Re-write (do not evaluate) the following integral in spherical and cylindrical coordinates:    "
},
{
  "id": "fig-halfdisk-prefigure",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-halfdisk-prefigure",
  "type": "Figure",
  "number": "2.7.11",
  "title": "",
  "body": " The -projection of the solid in : the lower half of the unit disk, described by , .   The lower half of the unit disk, shaded.    arc(t) = (cos(t), sin(t))       y = -\\sqrt{1-x^2}   1    -1             "
},
{
  "id": "fig-cone-plane-tikz",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#fig-cone-plane-tikz",
  "type": "Figure",
  "number": "2.7.12",
  "title": "",
  "body": " The solid of : over the lower half disk, between the cone (spherical ) and the plane (spherical ).   A half cone over the negative y half plane, capped by a flat half disk.  Three coordinate axes in space with a half cone opening upward from the origin at forty five degrees, over the half of the plane with y negative, capped above by the flat half disk in the plane z equals one. The straight edge of the cap lies over the x axis.    "
},
{
  "id": "exercise-spherical-volume",
  "level": "2",
  "url": "section-triple-integrals-spherical.html#exercise-spherical-volume",
  "type": "Checkpoint",
  "number": "2.7.13",
  "title": "",
  "body": "  Calculate the volume of the region inside and below .     .   "
},
{
  "id": "section-mass-center-of-mass",
  "level": "1",
  "url": "section-mass-center-of-mass.html",
  "type": "Section",
  "number": "2.8",
  "title": "Applications: Mass and Center of Mass",
  "body": " Applications: Mass and Center of Mass   Multiple integrals let us compute physical quantities of solid objects and flat plates whose density varies from point to point. In this section we use double and triple integrals to compute the total mass of an object and to locate its center of mass the point at which the object would balance perfectly.     Finding the Center of Mass of a 3D Object  Suppose a solid object occupies a region in space and its density (mass per unit volume) at each point is given by a continuous function . To measure the total mass, we partition into small boxes. If the -th box contains the point and has volume , then the density is nearly constant on this small box, so its mass is approximately   as illustrated in . Summing over all the boxes gives a Riemann sum for the total mass, and letting the size of the boxes shrink to zero turns the sum into a triple integral:   Watch the construction unfold in .   Partitioning a solid into small boxes: each box carries the mass , and the Riemann sum of these masses converges to the triple integral of the density.     A solid region with a small box around the point . The box has volume and mass .   A potato-shaped solid in space with a small highlighted box inside it.   A translucent potato-shaped solid labeled floats above the -plane in a three-dimensional coordinate system. A small purple box inside the solid marks the point , and a leader line labels its mass .      The same idea locates the balance point of the object. Each small box contributes a moment about each coordinate plane its mass times its (signed) distance from that plane. Adding these contributions and passing to the limit gives the first moments    The center of mass  is the point whose coordinates are the moments divided by the total mass:    Center of Mass of a Solid Bounded by a Paraboloid   Find the center of mass of a solid of constant density , which is bounded by the disk (in the plane ) and the paraboloid .     The solid is shown in . Both the region and the density are symmetric about the -axis, so the center of mass lies on that axis: . It remains to find from .  Because of the circular symmetry, we work in cylindrical coordinates, where applies and the region is described by , , and . By , the mass is   Using , the first moment about the -plane is   Therefore   and the center of mass is . Notice that the answer does not depend on : for an object of constant density, the location of the balance point is determined by the shape alone. Watch the computation come together in .    The solid bounded above by and below by the disk . By symmetry the center of mass lies on the -axis, at height .     The solid of constant density bounded by the paraboloid and the disk : in the plane . The center of mass sits on the axis of symmetry at .   A dome-shaped solid over a disk with its center of mass marked on the vertical axis.   The paraboloid forms a translucent green dome over the disk in the -plane, labeled . The dashed -axis passes through the apex at height 4, and a magenta dot on the axis at height marks the center of mass.         Centroids    When the density of a solid object (as in the previous example) or plate (as in the next example) is constant, the center of mass is called the centroid of the object.    As we saw in , a constant density cancels in the quotients of , so the centroid depends only on the shape of the object. For a flat plate occupying a region in the plane with density (mass per unit area), the same reasoning that gave and with double integrals in place of triple integrals gives the mass and first moments   where is the moment about the -axis and the moment about the -axis, and the center of mass is    Centroid of the Region Between Two Curves   Find the centroid of the region between and .     The two curves intersect where , that is, at and , so the region lies over the interval with , as shown in . Since we are finding the centroid, we may take the constant density to be , in which case, by , the mass is simply the area:   By , the moment about the -axis is   and the moment about the -axis is   By ,   so the centroid is . It is no accident that : the region is symmetric about the line , so its centroid must lie on that line. See for an animated walkthrough.    The region between and is symmetric about the line , and its centroid lies on that line.     The region between (blue) and (red) over , with its centroid at .   The region between the square-root curve and the parabola, from 0 to 1.    f(x) = sqrt(x)  g(x) = x^2         (1,1)     \\left(\\frac{9}{20},\\frac{9}{20}\\right)    y=\\sqrt{x}    y=x^2                  Centroid of a Cardioid   Find the centroid of the object that has the shape and density .     The cardioid is shown in . The density is constant, so we are indeed finding a centroid, and the answer will not depend on the value . The region is symmetric about the -axis (replacing by does not change ), so and we only need .  Working in polar coordinates with from , the mass is   Since by , the moment about the -axis is   where the odd powers of cosine integrate to zero over a full period, , and . By ,   so the centroid is . As promised, the constant density canceled out. The animation in shows how symmetry and the polar integrals combine to locate this point.    The cardioid with constant density: symmetry places the centroid on the -axis, and the polar moment integrals put it at .     The cardioid . The region is symmetric about the -axis and its centroid is marked in maroon.   A cardioid symmetric about the x axis with shaded interior.    c(t) = ((1 + cos(t))*cos(t), (1 + cos(t))*sin(t))      \\left(\\frac{5}{6},0\\right)    r=1+\\cos(\\theta)               "
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
  "number": "2.8.1",
  "title": "",
  "body": " Partitioning a solid into small boxes: each box carries the mass , and the Riemann sum of these masses converges to the triple integral of the density.   "
},
{
  "id": "fig-mass-element-tikz",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-mass-element-tikz",
  "type": "Figure",
  "number": "2.8.2",
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
  "number": "2.8.3",
  "title": "Center of Mass of a Solid Bounded by a Paraboloid.",
  "body": " Center of Mass of a Solid Bounded by a Paraboloid   Find the center of mass of a solid of constant density , which is bounded by the disk (in the plane ) and the paraboloid .   "
},
{
  "id": "fig-paraboloid-com-video",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-paraboloid-com-video",
  "type": "Figure",
  "number": "2.8.4",
  "title": "",
  "body": " The solid bounded above by and below by the disk . By symmetry the center of mass lies on the -axis, at height .   "
},
{
  "id": "fig-paraboloid-com-tikz",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-paraboloid-com-tikz",
  "type": "Figure",
  "number": "2.8.5",
  "title": "",
  "body": " The solid of constant density bounded by the paraboloid and the disk : in the plane . The center of mass sits on the axis of symmetry at .   A dome-shaped solid over a disk with its center of mass marked on the vertical axis.   The paraboloid forms a translucent green dome over the disk in the -plane, labeled . The dashed -axis passes through the apex at height 4, and a magenta dot on the axis at height marks the center of mass.     "
},
{
  "id": "def-centroid",
  "level": "2",
  "url": "section-mass-center-of-mass.html#def-centroid",
  "type": "Definition",
  "number": "2.8.6",
  "title": "",
  "body": "  When the density of a solid object (as in the previous example) or plate (as in the next example) is constant, the center of mass is called the centroid of the object.   "
},
{
  "id": "example-centroid-between-curves",
  "level": "2",
  "url": "section-mass-center-of-mass.html#example-centroid-between-curves",
  "type": "Example",
  "number": "2.8.7",
  "title": "Centroid of the Region Between Two Curves.",
  "body": " Centroid of the Region Between Two Curves   Find the centroid of the region between and .   "
},
{
  "id": "fig-centroid-between-curves-video",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-centroid-between-curves-video",
  "type": "Figure",
  "number": "2.8.8",
  "title": "",
  "body": " The region between and is symmetric about the line , and its centroid lies on that line.   "
},
{
  "id": "fig-centroid-between-curves",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-centroid-between-curves",
  "type": "Figure",
  "number": "2.8.9",
  "title": "",
  "body": " The region between (blue) and (red) over , with its centroid at .   The region between the square-root curve and the parabola, from 0 to 1.    f(x) = sqrt(x)  g(x) = x^2         (1,1)     \\left(\\frac{9}{20},\\frac{9}{20}\\right)    y=\\sqrt{x}    y=x^2                "
},
{
  "id": "example-cardioid-centroid",
  "level": "2",
  "url": "section-mass-center-of-mass.html#example-cardioid-centroid",
  "type": "Example",
  "number": "2.8.10",
  "title": "Centroid of a Cardioid.",
  "body": " Centroid of a Cardioid   Find the centroid of the object that has the shape and density .   "
},
{
  "id": "fig-cardioid-centroid-video",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-cardioid-centroid-video",
  "type": "Figure",
  "number": "2.8.11",
  "title": "",
  "body": " The cardioid with constant density: symmetry places the centroid on the -axis, and the polar moment integrals put it at .   "
},
{
  "id": "fig-cardioid-centroid",
  "level": "2",
  "url": "section-mass-center-of-mass.html#fig-cardioid-centroid",
  "type": "Figure",
  "number": "2.8.12",
  "title": "",
  "body": " The cardioid . The region is symmetric about the -axis and its centroid is marked in maroon.   A cardioid symmetric about the x axis with shaded interior.    c(t) = ((1 + cos(t))*cos(t), (1 + cos(t))*sin(t))      \\left(\\frac{5}{6},0\\right)    r=1+\\cos(\\theta)             "
},
{
  "id": "section-jacobian-substitution",
  "level": "1",
  "url": "section-jacobian-substitution.html",
  "type": "Section",
  "number": "2.9",
  "title": "Substitution in Multiple Integrals and the Jacobian Determinant",
  "body": " Substitution in Multiple Integrals and the Jacobian Determinant   In single-variable calculus, substitution converts a difficult integral into an easier one at the cost of a correction factor . In this section we develop the analogous tool for double and triple integrals. The correction factor is now a determinant the Jacobian determinant which measures how a change of variables stretches or shrinks area and volume.     The Jacobian Determinant  Assume that there exists a transformation that relates two coordinate systems, and coordinates. In other words, there exist two functions and such that and . As illustrated in , the region in the -plane is transformed to the region in the -plane, and the inverse transformation carries back to .   The transformation carries the region in the -plane onto the region in the -plane; the inverse carries back onto . The point is sent to the point .    A blob-shaped region S in the u v plane with a marked point.    blobS(t) = (1.55 + (1 + 0.22*sin(2*t))*cos(t), 1.7 + (0.78 + 0.1*cos(3*t))*sin(t))      (u_1,v_1)    S              A blob-shaped region R in the x y plane with a marked point.    blobR(t) = (1.75 + (1.05 + 0.18*cos(2*t))*cos(t), 1.6 + (0.72 + 0.14*sin(3*t))*sin(t))      (x_1,y_1)    R                 The Jacobian determinant of the transformation , is defined as   In 3D, this definition is generalized to     Then the multiple integrals can be converted from one coordinate system to another as follows:   and in three dimensions, with , , carrying a region in -space onto a region in -space,   The integrals and should be compared to the single-variable substitution :   Note that in the past we used to use the substitution of the form and write:   The derivative factor records how much the substitution stretches lengths. In two variables, the Jacobian determinant plays the same role for areas: is the local ratio of area in the -plane to area in the -plane. The next example makes this ratio concrete.   A First Substitution: Scaling a Rectangle   Use the transformation , to evaluate   and verify that the Jacobian determinant equals the ratio of the areas of the two regions of integration.     The transformation is , which carries the rectangle in the -plane onto the unit square in the -plane, as shown in . By , the Jacobian determinant is   which is exactly the ratio of the areas, : the map shrinks areas by the factor , uniformly. Substituting , , and ,   which agrees with computing the integral directly: . The animation in shows how the Jacobian acts as an area conversion factor.    The transformation maps the rectangle onto the unit square . The Jacobian is the ratio of the areas.     The rectangle in the -plane (right) and its image, the unit square , in the -plane (left) under . The area ratio equals the Jacobian determinant.    The unit square R in the x y plane.        R             The rectangle S from the origin to (3,2) in the u v plane.        S                 Choosing a Transformation  In practice we usually run the process in the other direction: the region of integration is awkward in -coordinates, and we look for a substitution under which it corresponds to a simple region ideally a rectangle with constant limits of integration. The boundary curves of usually tell us what and should be.   A Parallelogram Region   Use the transformation to compute   where is the parallelogram bounded by the lines , , , and , shown in .     The transformation gives and , so by ,   Inverting the transformation, and . Therefore the boundary lines and become the vertical lines and , while and become and : the parallelogram corresponds to the rectangle   The integrand becomes , so by ,   Watch the region unfold into a rectangle in .    The substitution , straightens the parallelogram into the rectangle ; the Jacobian equals , so areas are preserved.     The parallelogram between the lines , , , and (left), and the corresponding rectangle in the -plane (right).    A parallelogram between two slanted lines and two horizontal lines.    l1(x) = (6 - x)\/2  l2(x) = (10 - x)\/2          x+2y=10    x+2y=6    D               The rectangle R in the u v plane, image of the parallelogram.        R               A Curved Region Mapped to a Rectangle   Let be the region in the first quadrant bounded by the hyperbolas , , , and , shown in .     Find a transformation that relates to a rectangle .    Compute the integral .         Part A. The boundary curves suggest the substitution   since then the four boundary curves become the four lines , , , and . Under this substitution the curved region corresponds to the rectangle    Part B. Here the substitution is given in the direction , , so it is easier to first compute the Jacobian of with respect to :   According to the inverse function theorem, the Jacobian we need is the reciprocal of this one:   Now apply . The factor in the integrand cancels against the Jacobian, and :   Without the substitution, even describing with explicit -limits would be painful; with it, the integral collapses in two lines. See for the animation.    The substitution , maps the region between the four hyperbolas onto the rectangle , and the Jacobian cancels the factor in the integrand.     The region bounded by the hyperbolas and , (left) corresponds to the rectangle under , (right).    A curved region bounded by two families of hyperbolas in the first quadrant.    hyp(x,y) = x^2 - y^2  prod(x,y) = x*y          x^2-y^2=-3    x^2-y^2=3    xy=4    xy=1    D                 The rectangle R in the u v plane, image of the curved region.        R                 Substitution in Triple Integrals   Volume of a Parallelepiped by Substitution   Find the volume of the parallelepiped shown in by writing the equations of all faces of the parallelepiped and describing it by three inequalities. Use a suitable change of variables such that all the integral limits are constants (as opposed to functions).     We can easily write the equations of of the faces, two of which are parallel to the -plane and the other two are parallel to the -plane:   To write the equations of the remaining two slanted faces, we find the normal to the plane, and together with a point on each plane, we compute their equations. Each slanted face contains the direction (an edge parallel to the -axis) and the edge direction , so   Using the points and on the two faces,   Thus we can describe the parallelepiped as the region between the six faces in other words, by the three inequalities   We can now transform the region into a box using the transformation , , and :   Note that according to the inverse function theorem, the matrix inverse of the Jacobian matrix of an invertible function is the Jacobian matrix of the inverse function, exactly as in . Using in the easy direction,   For the volume of the parallelepiped, gives   The animation in shows the shear that straightens the parallelepiped into a box.    Finally, we would like to mention that there is a much easier way of calculating the volume of a parallelepiped (using the so-called box product); however, the method above is a rich example in calculus and definitely worth learning. For example, you may need to integrate a function over the parallelepiped, which cannot be done using the box product.    The change of variables , , shears the parallelepiped into the box ; since , the volume is .     The parallelepiped bounded by the planes , , , , , and .   A long slanted box in space bounded by six planes.   A parallelepiped drawn with crimson edges in a three-dimensional coordinate system. Its base is the unit square in the plane , sheared in the -direction: the bottom face lies between the planes and , and the top face, at height , is shifted one unit in .       Volume of an Ellipsoid   Use the method of substitution in multiple integrals to show that the volume of the ellipsoid   is equal to .     The ellipsoid is a stretched sphere, so we use the transformation   which carries the unit ball , bounded by , onto the solid ellipsoid , as illustrated in . By , the Jacobian is   Therefore, by ,   since the last integral is the volume of a sphere of radius one, . The animation in shows the unit sphere stretching by the factors , , along the three axes, scaling its volume by .    Stretching the unit sphere by factors , , and along the coordinate axes produces the ellipsoid; the Jacobian scales the volume from to .     The transformation carries the unit ball onto the solid ellipsoid with semi-axes , , .   A unit sphere on the left is mapped by an arrow labeled T to an ellipsoid on the right.   On the left, the unit sphere , labeled , drawn as a translucent gray-blue ball. An arrow labeled points to the right, where the ellipsoid , labeled , is drawn as a translucent green surface, wider than it is tall, with its three semi-axes , , and drawn in vermillion, blue, and green.         Activity: Watching a Substitution Transform a Region   From a Rectangle to a Curved Region   Use the transformation   to compute   where   Also, make sure to graph the region of integration in the -plane. Note: choose a suitable substitution such that the limits of integration are numbers as opposed to functions.   The interactive below shows exactly this transformation at work: a rectangle in the -plane (left) is carried by onto a curved region in the -plane (right). Drag the rectangle's corner and adjust its dimensions until its image is exactly the region , and use what you see to read off the constant -limits.      Reading off the -rectangle. The transformation is already solved for and , so we can translate the description of directly. Since with , we have , and therefore   For the -bounds, note that , so the curves and become and . Since , dividing these inequalities by gives   Thus the region is the image of the rectangle with constant limits   which is exactly the rectangle the interactive carries onto . This settles the graph in the -plane: it is the axis-aligned box .   The Jacobian. Because the transformation is given in the direction , , we compute directly:   On we have , so .   The integrand. With and ,    Evaluating. Applying , the integral separates into a product of single-variable integrals:   The awkward -limits in the -plane have become the constant limits of a rectangle, and the integrand collapses to a function of alone.     "
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
  "number": "2.9.1",
  "title": "",
  "body": " The transformation carries the region in the -plane onto the region in the -plane; the inverse carries back onto . The point is sent to the point .    A blob-shaped region S in the u v plane with a marked point.    blobS(t) = (1.55 + (1 + 0.22*sin(2*t))*cos(t), 1.7 + (0.78 + 0.1*cos(3*t))*sin(t))      (u_1,v_1)    S              A blob-shaped region R in the x y plane with a marked point.    blobR(t) = (1.75 + (1.05 + 0.18*cos(2*t))*cos(t), 1.6 + (0.72 + 0.14*sin(3*t))*sin(t))      (x_1,y_1)    R              "
},
{
  "id": "def-jacobian",
  "level": "2",
  "url": "section-jacobian-substitution.html#def-jacobian",
  "type": "Definition",
  "number": "2.9.2",
  "title": "",
  "body": "  The Jacobian determinant of the transformation , is defined as   In 3D, this definition is generalized to    "
},
{
  "id": "example-jacobian-rectangle",
  "level": "2",
  "url": "section-jacobian-substitution.html#example-jacobian-rectangle",
  "type": "Example",
  "number": "2.9.3",
  "title": "A First Substitution: Scaling a Rectangle.",
  "body": " A First Substitution: Scaling a Rectangle   Use the transformation , to evaluate   and verify that the Jacobian determinant equals the ratio of the areas of the two regions of integration.   "
},
{
  "id": "fig-jacobian-rectangle-video",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-jacobian-rectangle-video",
  "type": "Figure",
  "number": "2.9.4",
  "title": "",
  "body": " The transformation maps the rectangle onto the unit square . The Jacobian is the ratio of the areas.   "
},
{
  "id": "fig-jacobian-rectangle",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-jacobian-rectangle",
  "type": "Figure",
  "number": "2.9.5",
  "title": "",
  "body": " The rectangle in the -plane (right) and its image, the unit square , in the -plane (left) under . The area ratio equals the Jacobian determinant.    The unit square R in the x y plane.        R             The rectangle S from the origin to (3,2) in the u v plane.        S             "
},
{
  "id": "example-parallelogram-substitution",
  "level": "2",
  "url": "section-jacobian-substitution.html#example-parallelogram-substitution",
  "type": "Example",
  "number": "2.9.6",
  "title": "A Parallelogram Region.",
  "body": " A Parallelogram Region   Use the transformation to compute   where is the parallelogram bounded by the lines , , , and , shown in .   "
},
{
  "id": "fig-parallelogram-sub-video",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-parallelogram-sub-video",
  "type": "Figure",
  "number": "2.9.7",
  "title": "",
  "body": " The substitution , straightens the parallelogram into the rectangle ; the Jacobian equals , so areas are preserved.   "
},
{
  "id": "fig-parallelogram-sub",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-parallelogram-sub",
  "type": "Figure",
  "number": "2.9.8",
  "title": "",
  "body": " The parallelogram between the lines , , , and (left), and the corresponding rectangle in the -plane (right).    A parallelogram between two slanted lines and two horizontal lines.    l1(x) = (6 - x)\/2  l2(x) = (10 - x)\/2          x+2y=10    x+2y=6    D               The rectangle R in the u v plane, image of the parallelogram.        R             "
},
{
  "id": "example-curved-to-rectangle",
  "level": "2",
  "url": "section-jacobian-substitution.html#example-curved-to-rectangle",
  "type": "Example",
  "number": "2.9.9",
  "title": "A Curved Region Mapped to a Rectangle.",
  "body": " A Curved Region Mapped to a Rectangle   Let be the region in the first quadrant bounded by the hyperbolas , , , and , shown in .     Find a transformation that relates to a rectangle .    Compute the integral .      "
},
{
  "id": "fig-curved-region-video",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-curved-region-video",
  "type": "Figure",
  "number": "2.9.10",
  "title": "",
  "body": " The substitution , maps the region between the four hyperbolas onto the rectangle , and the Jacobian cancels the factor in the integrand.   "
},
{
  "id": "fig-curved-region",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-curved-region",
  "type": "Figure",
  "number": "2.9.11",
  "title": "",
  "body": " The region bounded by the hyperbolas and , (left) corresponds to the rectangle under , (right).    A curved region bounded by two families of hyperbolas in the first quadrant.    hyp(x,y) = x^2 - y^2  prod(x,y) = x*y          x^2-y^2=-3    x^2-y^2=3    xy=4    xy=1    D                 The rectangle R in the u v plane, image of the curved region.        R             "
},
{
  "id": "example-parallelepiped-volume",
  "level": "2",
  "url": "section-jacobian-substitution.html#example-parallelepiped-volume",
  "type": "Example",
  "number": "2.9.12",
  "title": "Volume of a Parallelepiped by Substitution.",
  "body": " Volume of a Parallelepiped by Substitution   Find the volume of the parallelepiped shown in by writing the equations of all faces of the parallelepiped and describing it by three inequalities. Use a suitable change of variables such that all the integral limits are constants (as opposed to functions).   "
},
{
  "id": "remark-box-product",
  "level": "2",
  "url": "section-jacobian-substitution.html#remark-box-product",
  "type": "Remark",
  "number": "2.9.13",
  "title": "",
  "body": " Finally, we would like to mention that there is a much easier way of calculating the volume of a parallelepiped (using the so-called box product); however, the method above is a rich example in calculus and definitely worth learning. For example, you may need to integrate a function over the parallelepiped, which cannot be done using the box product.  "
},
{
  "id": "fig-parallelepiped-video",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-parallelepiped-video",
  "type": "Figure",
  "number": "2.9.14",
  "title": "",
  "body": " The change of variables , , shears the parallelepiped into the box ; since , the volume is .   "
},
{
  "id": "fig-parallelepiped-tikz",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-parallelepiped-tikz",
  "type": "Figure",
  "number": "2.9.15",
  "title": "",
  "body": " The parallelepiped bounded by the planes , , , , , and .   A long slanted box in space bounded by six planes.   A parallelepiped drawn with crimson edges in a three-dimensional coordinate system. Its base is the unit square in the plane , sheared in the -direction: the bottom face lies between the planes and , and the top face, at height , is shifted one unit in .     "
},
{
  "id": "example-ellipsoid-volume",
  "level": "2",
  "url": "section-jacobian-substitution.html#example-ellipsoid-volume",
  "type": "Example",
  "number": "2.9.16",
  "title": "Volume of an Ellipsoid.",
  "body": " Volume of an Ellipsoid   Use the method of substitution in multiple integrals to show that the volume of the ellipsoid   is equal to .   "
},
{
  "id": "fig-ellipsoid-video",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-ellipsoid-video",
  "type": "Figure",
  "number": "2.9.17",
  "title": "",
  "body": " Stretching the unit sphere by factors , , and along the coordinate axes produces the ellipsoid; the Jacobian scales the volume from to .   "
},
{
  "id": "fig-ellipsoid-tikz",
  "level": "2",
  "url": "section-jacobian-substitution.html#fig-ellipsoid-tikz",
  "type": "Figure",
  "number": "2.9.18",
  "title": "",
  "body": " The transformation carries the unit ball onto the solid ellipsoid with semi-axes , , .   A unit sphere on the left is mapped by an arrow labeled T to an ellipsoid on the right.   On the left, the unit sphere , labeled , drawn as a translucent gray-blue ball. An arrow labeled points to the right, where the ellipsoid , labeled , is drawn as a translucent green surface, wider than it is tall, with its three semi-axes , , and drawn in vermillion, blue, and green.     "
},
{
  "id": "activity-jacobian-geogebra",
  "level": "2",
  "url": "section-jacobian-substitution.html#activity-jacobian-geogebra",
  "type": "Activity",
  "number": "2.9.1",
  "title": "From a Rectangle to a Curved Region.",
  "body": " From a Rectangle to a Curved Region   Use the transformation   to compute   where   Also, make sure to graph the region of integration in the -plane. Note: choose a suitable substitution such that the limits of integration are numbers as opposed to functions.   The interactive below shows exactly this transformation at work: a rectangle in the -plane (left) is carried by onto a curved region in the -plane (right). Drag the rectangle's corner and adjust its dimensions until its image is exactly the region , and use what you see to read off the constant -limits.      Reading off the -rectangle. The transformation is already solved for and , so we can translate the description of directly. Since with , we have , and therefore   For the -bounds, note that , so the curves and become and . Since , dividing these inequalities by gives   Thus the region is the image of the rectangle with constant limits   which is exactly the rectangle the interactive carries onto . This settles the graph in the -plane: it is the axis-aligned box .   The Jacobian. Because the transformation is given in the direction , , we compute directly:   On we have , so .   The integrand. With and ,    Evaluating. Applying , the integral separates into a product of single-variable integrals:   The awkward -limits in the -plane have become the constant limits of a rectangle, and the integrand collapses to a function of alone.   "
},
{
  "id": "section-surface-integrals",
  "level": "1",
  "url": "section-surface-integrals.html",
  "type": "Section",
  "number": "2.10",
  "title": "Surface Integrals: Flux Through a Surface",
  "body": " Surface Integrals: Flux Through a Surface   How much fluid crosses a surface per unit time? For a flat surface in a constant velocity field the answer is a single dot product; for a curved surface in a varying field it is a surface integral . In this section we build the surface integral in three steps: we learn how to parametrize a surface, how to use the parametrization to find a normal vector, and how to combine the two to compute the flux of a vector field.     Flux Through a Flat Surface  Suppose water flows with constant velocity through a flat surface of area that is perpendicular to the flow. In one second, the block of water that passes through has volume , so   measured in units of . If instead the surface is tilted, so that the flow meets it at an angle away from the normal direction, only the component of the velocity perpendicular to the surface pushes water through it, and the flow rate picks up a factor of :   where is the unit normal to the surface and is the normal vector whose length equals the area of , as in . Note that the flow rate is the dot product of the vector field whose flux we wish to compute and the normal vector whose length is equal to the surface area of .   A tilted plate of area in a uniform flow . Only the component of along the normal carries fluid through the plate, so the flow rate is .   A tilted plate in a uniform flow, with its normal vector and the angle between the normal and the velocity marked.   A blue parallelogram-shaped plate stands tilted in a uniform flow of parallel gray velocity arrows pointing up and to the right. A magenta arrow , normal to the plate, makes an angle with the velocity arrows.      Our goal is to generalize the above scenario in two respects: (I) we generalize the surface (not just a plane), and (II) we generalize the vector field (not just a constant). To achieve this goal, we will need to learn: (I) how to parametrize a surface ; (II) how to use the parametrization of to find the normal vector ; and (III) how to use (I) and (II) to compute the flux of a vector field. Watch for the flat-plate picture.   Flow through a flat plate: perpendicular flow carries volume per second, and tilting the plate by an angle reduces the flow rate to .       Parametric Surfaces  Recall how we parametrize curves in the -plane: the parabola is traced by for ; only one parameter is needed. A surface is two-dimensional, so its parametrization needs two parameters.   Parametrizing Surfaces   Find parametric representations for each of the following surfaces.                         Part A. The constraint is . Starting from the position vector of an arbitrary point and imposing the constraint, we get   the position vector of a point located on the paraboloid; the two parameters are and themselves. In cylindrical coordinates the same paraboloid is   In spherical coordinates , substituting , , into gives , so on the surface, and    Part B. The surface is a sphere of radius , so spherical coordinates with give    Part C. The surface is a cylinder of radius around the -axis. The angle parametrizes the circle and is free:   In each case, two parameters sweep out the two-dimensional surface; see .    Parametrizing the paraboloid , the sphere of radius , and the cylinder : two parameters sweep out coordinate grids on each surface.       The Normal Vector to a Surface  Consider the unit sphere with its spherical parametrization   Our goal is to find the normal to the sphere at every point on its surface. Holding one parameter fixed and varying the other produces two tangent vectors,   so that the two edges of a small coordinate patch on the sphere are approximately and , as in . Their cross product is perpendicular to the patch, so it gives a normal vector, and its length gives the area of the patch:    A small coordinate patch on the unit sphere. The tangent vectors and span the patch, and their cross product points along the outward normal .   A wireframe piece of a sphere with two tangent vectors and the normal vector drawn at a point.   A wireframe octant of the unit sphere. At a point on the surface, a blue tangent vector points east along a parallel, a red tangent vector points south along a meridian, a small shaded patch lies between them, and a green arrow points radially outward, perpendicular to both.      Let us carry out this computation for the sphere. The tangent vectors are   and their cross product is   Normalizing, and using the fact that on the sphere,   the unit normal to the sphere at a point is simply the position vector of that point it points radially outward, as expected. The animation in builds this construction step by step.   The tangent vectors and span a small patch of the sphere; their cross product is normal to the surface and its length measures the patch area.       Oriented Surfaces  For a closed surface , that is, a surface that is the boundary of a solid region , the convention is that the positive orientation is the one for which the normal vectors point outward from , and inward-pointing normals give the negative orientation.   Two Orientations of a Cylinder   Consider the cylinder . Describe its two possible orientations.     The normal vector can be described as the vector orthogonal to the curved surface of the cylinder pointing outward (or pointing away from the -axis), whereas the normal vector points inward (or toward the -axis), as in . The two orientations are opposite: .    The cylinder with its two possible orientations: points away from the -axis and points toward it.   A cylinder around the vertical axis with an outward normal arrow and an inward normal arrow at the same point.   A translucent cylinder of radius one around the -axis. At a point on its curved surface, a magenta arrow points horizontally away from the axis, and a teal arrow points from the same point horizontally toward the axis.         The Surface Integral of a Vector Field  The following definition should be compared to the definition of the line integral of a vector field along a curve , i.e. , where was defined as the unit tangent vector to the curve . For a surface, the unit tangent is replaced by the unit normal.    If is a continuous vector field defined on an oriented surface with unit normal vector , then the surface integral of over is   This integral is also called the flux of across .     If the surface is parametrized with respect to and , we can write the unit normal vector as , which can be combined with the fact that (from ) to write the surface integral as   where is the region of the parameters in the -plane. The normalizing length cancels against the area factor, which is what makes this formula so computable.   For instance, if the vector field is the velocity field of a fluid, then the surface integral of over the surface is the net rate at which fluid is crossing in the chosen positive direction. As another example, if the vector field represents the electric field due to a charged particle such as an electron, then the surface integral of over the surface corresponds to the flux of the electric field through the surface .   Flux Across the Unit Sphere   Find the flux of the vector field across the unit sphere .     We begin by recalling from that a sphere of radius one centered at the origin can be parametrized as   where and . This means that we can use the formula for surface integrals, , to compute the flux. From ,   which points outward. Substituting the parametrization into ,   so the integrand is   Now we integrate over the parameter region:   See for the animation of the field crossing the sphere.    The flux of across the unit sphere equals .     Flux Across a Closed Surface   Evaluate the surface integral , where and the surface is the boundary of the solid region enclosed by the paraboloid and the plane .     The closed surface consists of two pieces, shown in : the paraboloid cap and the unit disk in the plane . With the positive (outward) orientation, the normal on must point up and away from the solid, while the normal on must point straight down.  For the paraboloid we use the graph parametrization , whose normal is   Note that the -component of this normal vector is positive, so it points upward and outward from the solid, as required. For the disk in the -plane we can write , which gives ; this points upward, and to make it point downward (outward from the solid) we merely need to multiply by minus one to get . Finally, the surface integral is evaluated using , split over the two pieces:   On , with the unit disk in the -plane,   and by symmetry (the integrand is odd in ), so switching to polar coordinates,   On we have , so   Adding the two pieces,   The animation in walks through both pieces of the surface.    The closed surface made of the paraboloid cap and the disk , with outward normals: the flux of through it equals .     The boundary of the solid enclosed by and : the cap with upward-and-outward normals, and the disk with downward normals.   A paraboloid dome over a disk, with outward normal arrows on the dome and downward normal arrows on the disk.   A translucent blue dome, the paraboloid , labeled , sits over the unit disk in the -plane, labeled . Magenta arrows on the dome point up and outward, and magenta arrows below the disk point straight down: together they give the closed surface its positive, outward orientation.       "
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
  "number": "2.10.1",
  "title": "",
  "body": " A tilted plate of area in a uniform flow . Only the component of along the normal carries fluid through the plate, so the flow rate is .   A tilted plate in a uniform flow, with its normal vector and the angle between the normal and the velocity marked.   A blue parallelogram-shaped plate stands tilted in a uniform flow of parallel gray velocity arrows pointing up and to the right. A magenta arrow , normal to the plate, makes an angle with the velocity arrows.     "
},
{
  "id": "fig-flux-plate-video",
  "level": "2",
  "url": "section-surface-integrals.html#fig-flux-plate-video",
  "type": "Figure",
  "number": "2.10.2",
  "title": "",
  "body": " Flow through a flat plate: perpendicular flow carries volume per second, and tilting the plate by an angle reduces the flow rate to .   "
},
{
  "id": "example-parametric-surfaces",
  "level": "2",
  "url": "section-surface-integrals.html#example-parametric-surfaces",
  "type": "Example",
  "number": "2.10.3",
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
  "number": "2.10.4",
  "title": "",
  "body": " Parametrizing the paraboloid , the sphere of radius , and the cylinder : two parameters sweep out coordinate grids on each surface.   "
},
{
  "id": "fig-sphere-patch",
  "level": "2",
  "url": "section-surface-integrals.html#fig-sphere-patch",
  "type": "Figure",
  "number": "2.10.5",
  "title": "",
  "body": " A small coordinate patch on the unit sphere. The tangent vectors and span the patch, and their cross product points along the outward normal .   A wireframe piece of a sphere with two tangent vectors and the normal vector drawn at a point.   A wireframe octant of the unit sphere. At a point on the surface, a blue tangent vector points east along a parallel, a red tangent vector points south along a meridian, a small shaded patch lies between them, and a green arrow points radially outward, perpendicular to both.     "
},
{
  "id": "fig-surface-normal-video",
  "level": "2",
  "url": "section-surface-integrals.html#fig-surface-normal-video",
  "type": "Figure",
  "number": "2.10.6",
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
  "number": "2.10.7",
  "title": "Two Orientations of a Cylinder.",
  "body": " Two Orientations of a Cylinder   Consider the cylinder . Describe its two possible orientations.   "
},
{
  "id": "fig-cylinder-normals",
  "level": "2",
  "url": "section-surface-integrals.html#fig-cylinder-normals",
  "type": "Figure",
  "number": "2.10.8",
  "title": "",
  "body": " The cylinder with its two possible orientations: points away from the -axis and points toward it.   A cylinder around the vertical axis with an outward normal arrow and an inward normal arrow at the same point.   A translucent cylinder of radius one around the -axis. At a point on its curved surface, a magenta arrow points horizontally away from the axis, and a teal arrow points from the same point horizontally toward the axis.     "
},
{
  "id": "def-surface-integral",
  "level": "2",
  "url": "section-surface-integrals.html#def-surface-integral",
  "type": "Definition",
  "number": "2.10.9",
  "title": "",
  "body": "  If is a continuous vector field defined on an oriented surface with unit normal vector , then the surface integral of over is   This integral is also called the flux of across .   "
},
{
  "id": "remark-flux-param",
  "level": "2",
  "url": "section-surface-integrals.html#remark-flux-param",
  "type": "Remark",
  "number": "2.10.10",
  "title": "",
  "body": " If the surface is parametrized with respect to and , we can write the unit normal vector as , which can be combined with the fact that (from ) to write the surface integral as   where is the region of the parameters in the -plane. The normalizing length cancels against the area factor, which is what makes this formula so computable.  "
},
{
  "id": "example-sphere-flux",
  "level": "2",
  "url": "section-surface-integrals.html#example-sphere-flux",
  "type": "Example",
  "number": "2.10.11",
  "title": "Flux Across the Unit Sphere.",
  "body": " Flux Across the Unit Sphere   Find the flux of the vector field across the unit sphere .   "
},
{
  "id": "fig-sphere-flux-video",
  "level": "2",
  "url": "section-surface-integrals.html#fig-sphere-flux-video",
  "type": "Figure",
  "number": "2.10.12",
  "title": "",
  "body": " The flux of across the unit sphere equals .   "
},
{
  "id": "example-paraboloid-flux",
  "level": "2",
  "url": "section-surface-integrals.html#example-paraboloid-flux",
  "type": "Example",
  "number": "2.10.13",
  "title": "Flux Across a Closed Surface.",
  "body": " Flux Across a Closed Surface   Evaluate the surface integral , where and the surface is the boundary of the solid region enclosed by the paraboloid and the plane .   "
},
{
  "id": "fig-paraboloid-flux-video",
  "level": "2",
  "url": "section-surface-integrals.html#fig-paraboloid-flux-video",
  "type": "Figure",
  "number": "2.10.14",
  "title": "",
  "body": " The closed surface made of the paraboloid cap and the disk , with outward normals: the flux of through it equals .   "
},
{
  "id": "fig-paraboloid-flux",
  "level": "2",
  "url": "section-surface-integrals.html#fig-paraboloid-flux",
  "type": "Figure",
  "number": "2.10.15",
  "title": "",
  "body": " The boundary of the solid enclosed by and : the cap with upward-and-outward normals, and the disk with downward normals.   A paraboloid dome over a disk, with outward normal arrows on the dome and downward normal arrows on the disk.   A translucent blue dome, the paraboloid , labeled , sits over the unit disk in the -plane, labeled . Magenta arrows on the dome point up and outward, and magenta arrows below the disk point straight down: together they give the closed surface its positive, outward orientation.     "
},
{
  "id": "section-greens-theorem",
  "level": "1",
  "url": "section-greens-theorem.html",
  "type": "Section",
  "number": "3.1",
  "title": "Green’s Theorem in the Plane",
  "body": " Green's Theorem in the Plane   Before we learn about Green's theorem, we will need to learn about two operations on vector fields: curl and divergence . We begin by studying divergence.     Divergence  Consider a vector field to be the velocity field of a fluid. How can we find the net flow rate of the gas through the boundaries of a rectangle shown in ?   The flux of the field through the four sides of a small rectangle with corner , width , and height . Each side's outward component of is drawn in its own color, and the legend gives the dot product it represents.   A rectangle in a vector field with a differently colored outward arrow through each of its four sides, and a legend pairing each color with its dot product.    field(x,y) = (0.4*x + 0.25, 0.32*y + 0.18)      (x,y)    (x+\\Delta x, y)    (x, y+\\Delta y)    (x+\\Delta x, y+\\Delta y)            \\mathbf{F}\\cdot\\mathbf{j}\\gt 0     \\mathbf{F}\\cdot(-\\mathbf{j})\\mathrel{\\unicode{x3C}} 0     \\mathbf{F}\\cdot\\mathbf{i}\\gt 0     \\mathbf{F}\\cdot(-\\mathbf{i})\\mathrel{\\unicode{x3C}} 0    A    \\Delta x    \\Delta y                 Let us evaluate the flux through each side, assuming the field is nearly constant along each side:   The net flow rate is approximately   Note that this is an approximation, since we are assuming the velocity field has a constant value along each side of the rectangle. The flux density can be calculated as follows:   Note that, in the limit that and approach , represents to what extent a gas is expanding or compressing at each point. This quantity is known as the divergence , and it is denoted by . Watch the construction in .    The divergence of the vector field is defined as   where .     The net flux of out of a small rectangle, divided by its area, converges to the divergence as the rectangle shrinks.     Computing and Interpreting Divergence   The vector fields below represent the velocity field of a gas. Calculate the divergence in each case and explain what it means physically.                    Part A. Using ,   Note that for every point on the -plane we have found that , which means that the gas is expanding, since there is a positive flux density at every point . The field is shown on the left in .   Part B. Again by ,   Note that for every point on the -plane we have found that , which means that the gas is neither expanding nor compressing. This rotating field is shown on the right in .    Left: the field flows away from the origin; its divergence is at every point (the gas expands). Right: the field circulates around the origin; its divergence is (the gas neither expands nor compresses).    A radial field with arrows pointing away from the origin.    fieldA(x,y) = (2*x, 2*y)               A rotational field circulating counterclockwise around the origin.    fieldB(x,y) = (-y\/(x^2 + y^2 + 0.2), x\/(x^2 + y^2 + 0.2))                   Curl  Again, let us consider a vector field to be the velocity field of a fluid. This time we are interested in answering this question: how can we figure out the circulation density of the fluid at any point on the -plane?  To answer this question, we compute the flow rates of the vector field  along the sides of the rectangle (counterclockwise), as in , and then we take the limit as to find the circulation density at a point in the -plane.   The counterclockwise circulation of around the rectangle: along each side we take the component of in the direction of travel. Each side's component is drawn in its own color, and the legend gives the dot product it represents.   A rectangle in a vector field with differently colored arrows tracing a counterclockwise loop along its sides, and a legend pairing each color with its dot product.    field(x,y) = (0.4*x + 0.25, 0.32*y + 0.18)      (x,y)    (x+\\Delta x, y)    (x, y+\\Delta y)    (x+\\Delta x, y+\\Delta y)             \\mathbf{F}\\cdot(-\\mathbf{i})\\mathrel{\\unicode{x3C}} 0     \\mathbf{F}\\cdot\\mathbf{i}\\gt 0     \\mathbf{F}\\cdot\\mathbf{j}\\gt 0     \\mathbf{F}\\cdot(-\\mathbf{j})\\mathrel{\\unicode{x3C}} 0    A    \\Delta x    \\Delta y                 We begin by computing the flow rates along each edge, i.e. top, bottom, left, and right:   Then we sum up the flow across the parallel edges:   Finally, after summing the flow rates above and taking the limit as , for the circulation density we get   This quantity is denoted by and is known as the -component of curl .    The -component of the curl of the vector field is     To find out the circulation density at a point in the -plane, you can imagine a paddle wheel whose axis goes through the point of interest. Then the -component of curl is positive if the fluid flow causes the paddle wheel to rotate counterclockwise, and it is negative if it turns clockwise. The animation in shows both behaviors.   The counterclockwise circulation of around a small rectangle, divided by its area, converges to the -component of curl. A paddle wheel placed in the fluid spins counterclockwise where the curl is positive.     Computing and Interpreting Curl   The vector fields below represent the velocity field of a fluid. Calculate the curl in each case and explain what it means physically.                    Part A. In this case we have and , and hence by ,   This means that if we place the paddle wheel at any point , the fluid flow will not rotate it: the radial field on the left of has no circulation.   Part B. In this case we have and , and hence   This means that if we place the paddle wheel at any point , we see that the fluid flow causes it to rotate in the counterclockwise direction, since the -component of curl is positive. See the right of .    Left: the radial field has : a paddle wheel does not spin. Right: the rotational field has : a paddle wheel spins counterclockwise everywhere.    A radial field with arrows pointing away from the origin.    fieldA(x,y) = (2*x, 2*y)               A rotational field circulating counterclockwise, arrows longer farther out.    fieldB(x,y) = (-2*y, 2*x)                   The Two Forms of Green's Theorem  Next we state Green's theorem in 2D Note that we only cover Green's theorem in 2D; however, you should know that this theorem can be generalized to 3D, and in that case it is known as Stokes' theorem, which is . , in two forms. The first form relates the outward flux across a simple A curve in the -plane is simple if it does not cross itself. closed curve and the double integral of the divergence over the region bounded by the curve .   Green's Theorem (Flux-Divergence or Normal Form)   Let be a piecewise smooth, simple closed curve enclosing a region in the plane. Let be a vector field with and having continuous first partial derivatives in an open region containing . Then the outward flux of across equals the double integral of over the region enclosed by :     The second form of Green's theorem connects the counterclockwise circulation of a vector field around a simple closed curve and the double integral of the -component of the curl of the field over the region enclosed by the curve.   Green's Theorem (Circulation-Curl or Tangential Form)   Let be a piecewise smooth, simple closed curve enclosing a region in the plane. Let be a vector field with and having continuous first partial derivatives in an open region containing . Then the counterclockwise circulation of around equals the double integral of over :     Write . Both sides of split into two pieces, one carrying and one carrying , so it is enough to prove the two separate statements   and add them. Note the minus sign in the first: it is the whole reason the curl carries one.   Step 1: the statement, on a region cut by vertical lines. Suppose first that is a region of the kind studied in ,   so that is made of the bottom curve travelled left to right, the top curve travelled right to left, and possibly two vertical segments at and . This is the picture in . On the vertical segments never changes, so and they contribute nothing to . What is left is   the sign appearing because the top is travelled backwards. Meanwhile, doing the double integral in the -direction first and applying the Fundamental Theorem of Calculus to the inner integral,   The two agree up to the minus sign, which is the first line of .   Step 2: the statement. Now read the other way, as in , with and . On the horizontal parts of the boundary , and the same computation with the roles of and exchanged gives the second line of . Here the right-hand curve is travelled upwards, in the direction of increasing , which is why no minus sign appears. Adding the two lines proves the theorem for a region that can be described both ways.   Step 3: general regions. A region that cannot be described both ways at once is cut into finitely many pieces that can, exactly as in , and the theorem is applied to each piece. Each cut is travelled twice, once for the piece on either side, and in opposite directions, so those two line integrals cancel. What survives is the integral around the original curve , while the double integrals add up to the integral over .  Finally, is the same theorem in disguise: applying to the rotated field turns the circulation into the outward flux and the -component of the curl into the divergence.     Step 1 of the proof of : a region cut by vertical lines, with for . Counterclockwise, the bottom curve is travelled left to right and the top curve right to left; on the two vertical sides , so they contribute nothing to .   A region between an upper and a lower curve with a counterclockwise boundary.    bottom(t) = (t, 0.55 + 0.30*sin(1.5*t - 0.6))  top(t) = (t, 2.35 - 0.35*sin(1.2*t + 0.4))             a  b  y = f_2(x)  y = f_1(x)   R    dy                  The idea of the proof, without the algebra: the -component of the curl is circulation per unit area, so chop into little cells and add the circulation around each one. Every interior edge is travelled twice, once in each direction, so the inside cancels in pairs and only the circulation around is left.     Verifying Both Forms on the Unit Circle   Assume that the vector field and the closed curve is the unit circle centered at the origin. Convince yourself of the two forms of Green's theorem by applying them to this example.     We begin by noticing that the unit circle can be parametrized as   After substituting the parametrized equations and into the vector field, we get , and thus   with the partial derivatives   For the first form of Green's theorem, , we have   while the double integral gives the same value:   Whereas the second form of Green's theorem, , can be verified as follows:   and   The field and the curve are shown in ; note that the field has a positive (counterclockwise) circulation, which we calculated above to be . Watch both computations side by side in .    Both forms of Green's theorem verified for on the unit circle: the outward flux equals and the counterclockwise circulation equals .     The vector field and the unit circle . The field has a positive (counterclockwise) circulation around .   A swirling field with the unit circle and two tangent vectors.    field(x,y) = (x - y, x)  circ(t) = (cos(t), sin(t))         \\mathbf{T}    \\mathbf{T}    C                A Line Integral via Green's Theorem and Substitution   Evaluate the line integral   where is the boundary of the square with vertices , , , and , shown in . Make suitable substitutions in your integral to make the limits of integration numbers as opposed to functions.     In this example we have   and thus   Then we can use the tangential form of Green's theorem, , to evaluate the line integral:   The region is the square bounded by the four lines , , , and , so the natural substitution uses the boundary expressions:   under which the region becomes the rectangle , . Solving for and gives , , so the Jacobian is   Therefore   Green's theorem converted the line integral into a double integral, and the substitution exactly the technique of the previous section made its limits constant. See for the animation.    Green's theorem turns the line integral around the tilted square into a double integral of , and the substitution , straightens the square into a rectangle with constant limits.     The square with vertices , , , (left) and the corresponding rectangle , under , (right).    A square rotated 45 degrees, shaded, with its four edge lines.        y=x+1    y=-x+3    y=-x+1    y=x-1    R    C             The rectangle in the u v plane that is the image of the tilted square.        R'                 An Alternative Form of the Component Test for Conservative Fields  Recall the component test for conservative fields:   Reminder: Component Test for Conservative Fields  Let be a field on a connected and simply connected domain whose component functions have continuous first partial derivatives. Then is conservative if and only if    The three equalities of are equivalent to , since   So to check whether a vector field is conservative or not, we can check whether its curl is zero or not.   Conservative Fields and Green's Theorem   Consider the line integral .     As you know, the vector form of a line integral is . Write down the vector field for the above line integral.    Is this vector field a conservative field? Use the component test, , to answer.    Using Green's theorem, confirm your answer to part B.         Part A. The vector field is    Part B. Treating as a field in space with in ,   and hence the vector field is conservative.   Part C. Using the tangential form of Green's theorem, , for any simple closed curve enclosing a region :   The circulation of a conservative field around every closed curve vanishes, which confirms part B. The animation in shows the field and several closed loops, all with zero circulation.    The conservative field has zero curl, so by Green's theorem its circulation around every closed curve is zero.     "
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
  "number": "3.1.1",
  "title": "",
  "body": " The flux of the field through the four sides of a small rectangle with corner , width , and height . Each side's outward component of is drawn in its own color, and the legend gives the dot product it represents.   A rectangle in a vector field with a differently colored outward arrow through each of its four sides, and a legend pairing each color with its dot product.    field(x,y) = (0.4*x + 0.25, 0.32*y + 0.18)      (x,y)    (x+\\Delta x, y)    (x, y+\\Delta y)    (x+\\Delta x, y+\\Delta y)            \\mathbf{F}\\cdot\\mathbf{j}\\gt 0     \\mathbf{F}\\cdot(-\\mathbf{j})\\mathrel{\\unicode{x3C}} 0     \\mathbf{F}\\cdot\\mathbf{i}\\gt 0     \\mathbf{F}\\cdot(-\\mathbf{i})\\mathrel{\\unicode{x3C}} 0    A    \\Delta x    \\Delta y                "
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
  "number": "3.1.2",
  "title": "",
  "body": "  The divergence of the vector field is defined as   where .   "
},
{
  "id": "fig-div-video",
  "level": "2",
  "url": "section-greens-theorem.html#fig-div-video",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": " The net flux of out of a small rectangle, divided by its area, converges to the divergence as the rectangle shrinks.   "
},
{
  "id": "example-divergence-fields",
  "level": "2",
  "url": "section-greens-theorem.html#example-divergence-fields",
  "type": "Example",
  "number": "3.1.4",
  "title": "Computing and Interpreting Divergence.",
  "body": " Computing and Interpreting Divergence   The vector fields below represent the velocity field of a gas. Calculate the divergence in each case and explain what it means physically.                 "
},
{
  "id": "fig-div-fields",
  "level": "2",
  "url": "section-greens-theorem.html#fig-div-fields",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": " Left: the field flows away from the origin; its divergence is at every point (the gas expands). Right: the field circulates around the origin; its divergence is (the gas neither expands nor compresses).    A radial field with arrows pointing away from the origin.    fieldA(x,y) = (2*x, 2*y)               A rotational field circulating counterclockwise around the origin.    fieldB(x,y) = (-y\/(x^2 + y^2 + 0.2), x\/(x^2 + y^2 + 0.2))               "
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
  "number": "3.1.6",
  "title": "",
  "body": " The counterclockwise circulation of around the rectangle: along each side we take the component of in the direction of travel. Each side's component is drawn in its own color, and the legend gives the dot product it represents.   A rectangle in a vector field with differently colored arrows tracing a counterclockwise loop along its sides, and a legend pairing each color with its dot product.    field(x,y) = (0.4*x + 0.25, 0.32*y + 0.18)      (x,y)    (x+\\Delta x, y)    (x, y+\\Delta y)    (x+\\Delta x, y+\\Delta y)             \\mathbf{F}\\cdot(-\\mathbf{i})\\mathrel{\\unicode{x3C}} 0     \\mathbf{F}\\cdot\\mathbf{i}\\gt 0     \\mathbf{F}\\cdot\\mathbf{j}\\gt 0     \\mathbf{F}\\cdot(-\\mathbf{j})\\mathrel{\\unicode{x3C}} 0    A    \\Delta x    \\Delta y                "
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
  "number": "3.1.7",
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
  "number": "3.1.8",
  "title": "",
  "body": " The counterclockwise circulation of around a small rectangle, divided by its area, converges to the -component of curl. A paddle wheel placed in the fluid spins counterclockwise where the curl is positive.   "
},
{
  "id": "example-curl-fields",
  "level": "2",
  "url": "section-greens-theorem.html#example-curl-fields",
  "type": "Example",
  "number": "3.1.9",
  "title": "Computing and Interpreting Curl.",
  "body": " Computing and Interpreting Curl   The vector fields below represent the velocity field of a fluid. Calculate the curl in each case and explain what it means physically.                 "
},
{
  "id": "fig-curl-fields",
  "level": "2",
  "url": "section-greens-theorem.html#fig-curl-fields",
  "type": "Figure",
  "number": "3.1.10",
  "title": "",
  "body": " Left: the radial field has : a paddle wheel does not spin. Right: the rotational field has : a paddle wheel spins counterclockwise everywhere.    A radial field with arrows pointing away from the origin.    fieldA(x,y) = (2*x, 2*y)               A rotational field circulating counterclockwise, arrows longer farther out.    fieldB(x,y) = (-2*y, 2*x)               "
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
  "number": "3.1.11",
  "title": "Green’s Theorem (Flux-Divergence or Normal Form).",
  "body": " Green's Theorem (Flux-Divergence or Normal Form)   Let be a piecewise smooth, simple closed curve enclosing a region in the plane. Let be a vector field with and having continuous first partial derivatives in an open region containing . Then the outward flux of across equals the double integral of over the region enclosed by :    "
},
{
  "id": "thm-green-tangential",
  "level": "2",
  "url": "section-greens-theorem.html#thm-green-tangential",
  "type": "Theorem",
  "number": "3.1.12",
  "title": "Green’s Theorem (Circulation-Curl or Tangential Form).",
  "body": " Green's Theorem (Circulation-Curl or Tangential Form)   Let be a piecewise smooth, simple closed curve enclosing a region in the plane. Let be a vector field with and having continuous first partial derivatives in an open region containing . Then the counterclockwise circulation of around equals the double integral of over :     Write . Both sides of split into two pieces, one carrying and one carrying , so it is enough to prove the two separate statements   and add them. Note the minus sign in the first: it is the whole reason the curl carries one.   Step 1: the statement, on a region cut by vertical lines. Suppose first that is a region of the kind studied in ,   so that is made of the bottom curve travelled left to right, the top curve travelled right to left, and possibly two vertical segments at and . This is the picture in . On the vertical segments never changes, so and they contribute nothing to . What is left is   the sign appearing because the top is travelled backwards. Meanwhile, doing the double integral in the -direction first and applying the Fundamental Theorem of Calculus to the inner integral,   The two agree up to the minus sign, which is the first line of .   Step 2: the statement. Now read the other way, as in , with and . On the horizontal parts of the boundary , and the same computation with the roles of and exchanged gives the second line of . Here the right-hand curve is travelled upwards, in the direction of increasing , which is why no minus sign appears. Adding the two lines proves the theorem for a region that can be described both ways.   Step 3: general regions. A region that cannot be described both ways at once is cut into finitely many pieces that can, exactly as in , and the theorem is applied to each piece. Each cut is travelled twice, once for the piece on either side, and in opposite directions, so those two line integrals cancel. What survives is the integral around the original curve , while the double integrals add up to the integral over .  Finally, is the same theorem in disguise: applying to the rotated field turns the circulation into the outward flux and the -component of the curl into the divergence.   "
},
{
  "id": "fig-green-proof-prefigure",
  "level": "2",
  "url": "section-greens-theorem.html#fig-green-proof-prefigure",
  "type": "Figure",
  "number": "3.1.13",
  "title": "",
  "body": " Step 1 of the proof of : a region cut by vertical lines, with for . Counterclockwise, the bottom curve is travelled left to right and the top curve right to left; on the two vertical sides , so they contribute nothing to .   A region between an upper and a lower curve with a counterclockwise boundary.    bottom(t) = (t, 0.55 + 0.30*sin(1.5*t - 0.6))  top(t) = (t, 2.35 - 0.35*sin(1.2*t + 0.4))             a  b  y = f_2(x)  y = f_1(x)   R    dy                "
},
{
  "id": "fig-green-proof-video",
  "level": "2",
  "url": "section-greens-theorem.html#fig-green-proof-video",
  "type": "Figure",
  "number": "3.1.14",
  "title": "",
  "body": " The idea of the proof, without the algebra: the -component of the curl is circulation per unit area, so chop into little cells and add the circulation around each one. Every interior edge is travelled twice, once in each direction, so the inside cancels in pairs and only the circulation around is left.   "
},
{
  "id": "example-green-circle",
  "level": "2",
  "url": "section-greens-theorem.html#example-green-circle",
  "type": "Example",
  "number": "3.1.15",
  "title": "Verifying Both Forms on the Unit Circle.",
  "body": " Verifying Both Forms on the Unit Circle   Assume that the vector field and the closed curve is the unit circle centered at the origin. Convince yourself of the two forms of Green's theorem by applying them to this example.   "
},
{
  "id": "fig-green-circle-video",
  "level": "2",
  "url": "section-greens-theorem.html#fig-green-circle-video",
  "type": "Figure",
  "number": "3.1.16",
  "title": "",
  "body": " Both forms of Green's theorem verified for on the unit circle: the outward flux equals and the counterclockwise circulation equals .   "
},
{
  "id": "fig-green-circle",
  "level": "2",
  "url": "section-greens-theorem.html#fig-green-circle",
  "type": "Figure",
  "number": "3.1.17",
  "title": "",
  "body": " The vector field and the unit circle . The field has a positive (counterclockwise) circulation around .   A swirling field with the unit circle and two tangent vectors.    field(x,y) = (x - y, x)  circ(t) = (cos(t), sin(t))         \\mathbf{T}    \\mathbf{T}    C              "
},
{
  "id": "example-green-diamond",
  "level": "2",
  "url": "section-greens-theorem.html#example-green-diamond",
  "type": "Example",
  "number": "3.1.18",
  "title": "A Line Integral via Green’s Theorem and Substitution.",
  "body": " A Line Integral via Green's Theorem and Substitution   Evaluate the line integral   where is the boundary of the square with vertices , , , and , shown in . Make suitable substitutions in your integral to make the limits of integration numbers as opposed to functions.   "
},
{
  "id": "fig-green-diamond-video",
  "level": "2",
  "url": "section-greens-theorem.html#fig-green-diamond-video",
  "type": "Figure",
  "number": "3.1.19",
  "title": "",
  "body": " Green's theorem turns the line integral around the tilted square into a double integral of , and the substitution , straightens the square into a rectangle with constant limits.   "
},
{
  "id": "fig-green-diamond",
  "level": "2",
  "url": "section-greens-theorem.html#fig-green-diamond",
  "type": "Figure",
  "number": "3.1.20",
  "title": "",
  "body": " The square with vertices , , , (left) and the corresponding rectangle , under , (right).    A square rotated 45 degrees, shaded, with its four edge lines.        y=x+1    y=-x+3    y=-x+1    y=x-1    R    C             The rectangle in the u v plane that is the image of the tilted square.        R'             "
},
{
  "id": "example-conservative-green",
  "level": "2",
  "url": "section-greens-theorem.html#example-conservative-green",
  "type": "Example",
  "number": "3.1.21",
  "title": "Conservative Fields and Green’s Theorem.",
  "body": " Conservative Fields and Green's Theorem   Consider the line integral .     As you know, the vector form of a line integral is . Write down the vector field for the above line integral.    Is this vector field a conservative field? Use the component test, , to answer.    Using Green's theorem, confirm your answer to part B.      "
},
{
  "id": "fig-conservative-video",
  "level": "2",
  "url": "section-greens-theorem.html#fig-conservative-video",
  "type": "Figure",
  "number": "3.1.22",
  "title": "",
  "body": " The conservative field has zero curl, so by Green's theorem its circulation around every closed curve is zero.   "
},
{
  "id": "section-stokes-theorem",
  "level": "1",
  "url": "section-stokes-theorem.html",
  "type": "Section",
  "number": "3.2",
  "title": "Stokes’ Theorem",
  "body": " Stokes' Theorem   The circulation-curl form of Green's theorem, , traded a circulation around a closed curve in the plane for a double integral of over the region the curve encloses. Nothing in that statement really needs the region to be flat. If we bend the region up out of the plane into a surface in space, keeping as its boundary, the same exchange still works: the circulation of around equals the flux of the curl of through . That is Stokes' theorem , the promise made in the footnote of .  It completes the family. turned a flux integral over a closed surface into a triple integral of the divergence; Stokes' theorem turns a line integral around the boundary of an open surface into a surface integral of the curl. Both say the same kind of thing: what happens on the boundary of a piece is the accumulation, over the piece, of a derivative of the field.     Curl in Three Dimensions  In we only needed the component of the curl along , because in the plane a paddle wheel can only spin about an axis perpendicular to the page. In space the axis can point anywhere, so the curl is a vector: it points along the axis the paddle wheel spins about, and its length is the circulation density about that axis.    The curl of the vector field , whose components have continuous first partial derivatives, is     The -component of is exactly the quantity of , so the two-dimensional curl of was one component of this vector all along.   Computing a Curl   Find for .     Here , , and . Taking the three components of in turn,   so that     The curl of at the point , where . The curl is the axis of the paddle wheel: put the wheel in the plane perpendicular to it and the field turns the wheel the way the arrow shows.   A vector at a point in space with a small paddle wheel turning about it.   At the point P equals one, one, one, a green arrow points in the direction of the curl, up and back toward the negative x direction. A small vermillion circle with four blades sits in the plane perpendicular to that arrow, with an arrowhead showing which way it turns.      Two facts about the curl are worth recording, both of which we have already met in disguise. First, a field is conservative exactly when its curl vanishes: if then , which is the component test for the conservative fields of . Second, : a curl field has no divergence, so by its flux through any closed surface is zero. We will use that second fact at the end of this section.     Stokes' Theorem  Stokes' theorem needs the orientation of the surface and the direction of travel along its boundary to agree. The rule is the right-hand rule : if the thumb of your right hand points along the unit normal , your fingers curl in the positive direction along the boundary curve . Equivalently, walking along with your head pointing in the direction of , the surface is on your left. This is the orientation drawn in ; reversing reverses the direction on and changes the sign of both sides of the theorem.   Stokes' Theorem   Let be a piecewise smooth oriented surface with unit normal field , whose boundary is a piecewise smooth simple closed curve traversed in the direction given by the right-hand rule. Let be a vector field whose components have continuous first partial derivatives on an open region containing . Then the circulation of around equals the flux of through :      Green's theorem is the flat case. If is a region of the -plane with , then and is the -component of the curl, so becomes word for word.    The orientation in . The unit normal and the direction of travel along the boundary are related by the right-hand rule: with the thumb along , the fingers curl the way is traversed.   A curved cap of a surface in space with its boundary circle, arrows along the boundary, and a normal vector standing on the cap.   A translucent blue cap, like a piece of a sphere, sits above the horizontal plane. Its boundary is a closed curve drawn in vermillion with arrowheads showing the direction of travel, counterclockwise seen from above. A green arrow labeled n hat rises from the middle of the cap at a point off the axis, perpendicular to the cap there. With the right thumb along that normal, the fingers curl the way the boundary arrows point.      Why is the theorem true? The animation in tells the story without any algebra. Chop into tiny, nearly flat patches; on each one, is the circulation of per unit area, so the patch contributes of circulation. Add up the patches: every interior edge is shared by two of them and travelled in opposite directions, so the interior cancels completely and only the boundary survives. Shrinking the patches turns the sum into the flux integral, and falls out.   The ideas behind the proof of Stokes' theorem, for : is circulation per unit area, the surface is chopped into tiny, nearly flat patches, every interior edge is travelled twice in opposite directions and cancels, and only the boundary survives. A flat surface recovers Green's theorem, as in .    The theorem is most useful when one of the two sides is much easier than the other. Reading it from left to right replaces an awkward line integral by a flux integral, as in ; reading it from right to left replaces an awkward surface integral by a line integral around the boundary, as in .   Both Sides of Stokes' Theorem   Verify for the field and the upper hemisphere of , oriented by its upward unit normal.     The boundary of is the unit circle in the -plane. The right-hand rule with an upward normal makes counterclockwise seen from above, so we parametrize it by , . Along ,   so the circulation is   For the other side, gives , a constant field. On the hemisphere the outward unit normal is by , so and   Parametrizing the hemisphere by with from and ,   which matches the circulation, as promises.    The surface and boundary of : the upper hemisphere of with its upward normal, and the unit circle in the -plane, counterclockwise seen from above. The field runs tangent to all the way round, which is why the circulation is as large as it can be.   A hemisphere with an upward normal, its boundary circle, and a field tangent to that circle.   A translucent blue hemisphere sits on the horizontal plane. Its rim is the unit circle, drawn in vermillion with arrowheads pointing counterclockwise seen from above, and shorter vermillion arrows along the circle show the field running tangent to it. A green arrow rises from the top of the hemisphere.       A Circulation That Is Easier as a Flux   Evaluate for , where is the curve in which the plane cuts the cylinder , traversed counterclockwise when seen from above. The curve is drawn in .     Parametrizing and integrating directly is possible but unpleasant. Instead take to be the flat elliptical region that bounds in the plane , that is the graph of over the unit disk in the -plane. For a graph with an upward normal, with gives   and an upward normal is the one the right-hand rule pairs with a counterclockwise . From ,   so and turns the line integral into a double integral over the unit disk:   The term integrates to zero because the disk is symmetric about , and what is left is the area of the disk.    The curve of : the plane cuts the cylinder in an ellipse. The shaded elliptical region is the surface used in the solution, and its shadow is the unit disk .   A vertical cylinder cut by a slanted plane, with the ellipse of intersection and its shadow on the horizontal plane.   A translucent vertical cylinder of radius one stands on the horizontal plane. A slanted plane cuts it in an ellipse drawn in vermillion, with arrowheads showing counterclockwise travel seen from above. The elliptical region inside the curve is shaded blue, and directly below it the unit disk in the x y plane is shaded gray as its shadow.         The next example shows the theorem at its most merciless: one term of the field cannot be integrated in closed form at all, and Stokes' theorem simply erases it.   A Term That Cannot Be Integrated   Evaluate for where is the circle , , traversed counterclockwise when seen from above.     The term makes a direct evaluation hopeless its antiderivative has no closed form. But Stokes' theorem only ever sees the field through its curl, and by ,   the monster differentiates to zero. For the surface we take the cheapest thing with boundary : the flat disk , whose unit normal (paired with the counterclockwise orientation of by the right-hand rule) is . Then is constant, so     The cheapest surface for : the flat disk of radius in the plane , whose boundary is the given circle . Its unit normal is , so only the -component of the curl survives.   A flat disk floating at height two, with its boundary circle and an upward normal.   A translucent blue disk of radius three lies in the horizontal plane at height two above the origin. Its boundary circle is drawn in vermillion with arrowheads pointing counterclockwise seen from above, and a green arrow labelled n hat equals k rises from the centre of the disk.      The same trick works when the curve is tilted the flat surface it bounds just tilts with it.   A Tilted Circle   Evaluate for where is the intersection of the sphere with the plane , traversed counterclockwise when seen from above.     The plane passes through the centre of the sphere, so is a great circle: centre and radius . The again rules out a direct attack, and again it dies under the curl: by ,   Take to be the flat disk that bounds in the plane . The gradient of is , so the upward unit normal of (the one the right-hand rule pairs with counterclockwise-from-above) is , and the integrand   is constant. Since is a disk of radius ,   If the constant-integrand shortcut goes unnoticed, the standard graph protocol still works: on , , so and . Substituting into the sphere, the shadow of in the -plane is the ellipse , with semiaxes and and area . Then , as before.    The curve of : the plane passes through the centre of the sphere , so it cuts out a great circle of radius . The surface is the flat disk that bounds in that plane, tilted at , and its unit normal is .   A sphere cut by a slanted plane through its centre, with the great circle and the tilted disk it bounds.   A faint grey sphere of radius three is cut through its centre by a slanted plane. The circle of intersection is drawn in vermillion with arrowheads showing counterclockwise travel seen from above, the flat disk inside it is shaded blue, and a green arrow perpendicular to that disk points up and toward the negative x direction.      When the boundary is made of straight segments, both sides of are computable, and the comparison is instructive: the direct route costs three parametrizations, the Stokes route one double integral.   Around a Triangle, Twice   Evaluate for where goes from to to and back to along straight line segments, as in . Do the computation twice: directly, and by Stokes' theorem.      Directly. The segment from to is , , with , so   The segment from to is with , so   and the segment from back to is with , so   The total is .   By Stokes' theorem. By , . The triangle lies in the plane , that is, the graph of over the shadow triangle . The traversal is counterclockwise seen from above, which pairs with the upward normal . So   using . The two answers agree, and the second computation is the one to remember.    The oriented triangle of : from to to and back, bounding a piece of the plane . The traversal is counterclockwise seen from above, pairing with the upward normal by the right-hand rule.   A triangle in space with vertices on the three positive coordinate axes, its edges carrying arrowheads that circle counterclockwise seen from above.   Coordinate axes in three dimensions. A blue triangular plate has its corners on the positive x axis at 2, the positive y axis at 2, and the positive z axis at 4. Vermillion arrows run along its edges from the x axis corner to the y axis corner, then up to the z axis corner, then back down to the x axis corner, a circuit that is counterclockwise when seen from above.      Finally, before reaching for Stokes' theorem at all, it pays to glance at the curl: if it vanishes, no surface is needed.   The Curve Nobody Can Parametrize   Evaluate for where is the intersection of the ellipsoid with the paraboloid , traversed counterclockwise when seen from above.     The curve is a warped loop around the paraboloid solving the two equations simultaneously for a parametrization would be miserable, and whatever surface it bounds is worse. But by ,   By the component test , this is conservative indeed so whichever surface the loop bounds,   and the geometry of never enters. Closed curve, conservative field, zero work exactly as in .    The curve of : the paraboloid meets the ellipsoid in a warped loop . Nothing about its shape matters here: the curl of is , so the circulation around it is zero whatever surface it bounds.   A warped closed curve where a paraboloid meets an ellipsoid.   A translucent blue paraboloid opening upward passes through a faint grey ellipsoid. They meet along a closed loop, drawn in vermillion with arrowheads showing counterclockwise travel seen from above. The loop is not flat: it rises and falls as it goes round.         Only the Boundary Matters  The right-hand side of mentions , but the left-hand side does not. So if two oriented surfaces and share the same boundary curve , with orientations that give the same direction on , both flux integrals equal the same circulation:   This is the surface analogue of the path independence of , and it has the same practical use: when a surface is unpleasant, trade it for any other surface with the same boundary. It also explains the identity noted earlier. Gluing and along makes a closed surface; the two flux integrals appear with opposite signs once both normals point outward, so the total flux of through any closed surface is zero.   Trading a Paraboloid for a Disk   Evaluate for , where is the part of the paraboloid above the -plane, oriented upward.     The boundary of is the circle in the plane , and the upward orientation makes it counterclockwise seen from above. By we may replace the paraboloid by the flat disk of radius in the -plane, oriented upward, which has the same boundary. On that disk and .  From , , so and   As a check, the circulation around the boundary gives the same number. With and we have and , so     The two surfaces of : the paraboloid and the flat disk , which share the boundary circle and carry orientations that give the same direction on it. By the flux of the curl through them is the same, and the disk is the easy one.   A paraboloid and a flat disk sharing the same boundary circle.   A translucent blue paraboloid opens downward from height four to the horizontal plane, where its rim is a circle of radius two drawn in vermillion with arrowheads pointing counterclockwise seen from above. The flat green disk bounded by that same circle lies in the plane. An upward arrow rises from the top of the paraboloid and another from the disk.        A Conceptual Stokes' Theorem Problem  The following problem uses no computation at all. It tests whether you can see what Stokes' theorem is really saying about circulation, curl, and as the extension questions bring out the role played by the domain of the vector field.   Equal Curls, Equal Circulations   Let and be continuously differentiable vector fields defined on all of . Suppose that   everywhere in . Without computing any line integrals, determine whether the statement   is true for every smooth simple closed curve in . If the statement is true, prove it using Stokes' theorem, . If it is false, provide a counterexample.    The statement is true. Define   We first verify carefully that curl distributes over subtraction. Write   Then   By the component formula for the curl from , the -component of is   using the linearity of partial differentiation, and the - and -components behave the same way. Therefore   and since , it follows that   Now let be a smooth oriented surface whose boundary is , with the direction of travel along given by the right-hand rule as in . Because the fields are defined on all of , the surface lies entirely in their domain. Stokes' theorem gives   By linearity of the line integral,   Hence    Why the domain matters. The crucial point is not merely that the two curls agree. To apply Stokes' theorem, the curve must bound an oriented surface that lies entirely inside the common domain of the vector fields. This is automatic here because the domain is all of , but it can fail in a domain with a hole.   Equivalent viewpoint. The field has zero curl on the simply connected domain , so is conservative. Therefore every closed-loop integral of is zero by the loop property of , which gives the same conclusion.     Extension Questions      Does the conclusion remain valid if the common domain is an arbitrary open subset of ?    Which hypothesis of Stokes' theorem is essential in the proof?    How is the result related to conservative vector fields and the Fundamental Theorem for line integrals of ?        "
},
{
  "id": "section-stokes-theorem-2-1",
  "level": "2",
  "url": "section-stokes-theorem.html#section-stokes-theorem-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Stokes' theorem "
},
{
  "id": "def-curl-3d",
  "level": "2",
  "url": "section-stokes-theorem.html#def-curl-3d",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  The curl of the vector field , whose components have continuous first partial derivatives, is    "
},
{
  "id": "example-curl-3d",
  "level": "2",
  "url": "section-stokes-theorem.html#example-curl-3d",
  "type": "Example",
  "number": "3.2.2",
  "title": "Computing a Curl.",
  "body": " Computing a Curl   Find for .   "
},
{
  "id": "fig-curl-paddle-tikz",
  "level": "2",
  "url": "section-stokes-theorem.html#fig-curl-paddle-tikz",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " The curl of at the point , where . The curl is the axis of the paddle wheel: put the wheel in the plane perpendicular to it and the field turns the wheel the way the arrow shows.   A vector at a point in space with a small paddle wheel turning about it.   At the point P equals one, one, one, a green arrow points in the direction of the curl, up and back toward the negative x direction. A small vermillion circle with four blades sits in the plane perpendicular to that arrow, with an arrowhead showing which way it turns.     "
},
{
  "id": "sec-stokes-theorem-2",
  "level": "2",
  "url": "section-stokes-theorem.html#sec-stokes-theorem-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-hand rule "
},
{
  "id": "thm-stokes",
  "level": "2",
  "url": "section-stokes-theorem.html#thm-stokes",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "Stokes’ Theorem.",
  "body": " Stokes' Theorem   Let be a piecewise smooth oriented surface with unit normal field , whose boundary is a piecewise smooth simple closed curve traversed in the direction given by the right-hand rule. Let be a vector field whose components have continuous first partial derivatives on an open region containing . Then the circulation of around equals the flux of through :    "
},
{
  "id": "remark-stokes-green",
  "level": "2",
  "url": "section-stokes-theorem.html#remark-stokes-green",
  "type": "Remark",
  "number": "3.2.5",
  "title": "",
  "body": " Green's theorem is the flat case. If is a region of the -plane with , then and is the -component of the curl, so becomes word for word.  "
},
{
  "id": "fig-stokes-orientation-tikz",
  "level": "2",
  "url": "section-stokes-theorem.html#fig-stokes-orientation-tikz",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": " The orientation in . The unit normal and the direction of travel along the boundary are related by the right-hand rule: with the thumb along , the fingers curl the way is traversed.   A curved cap of a surface in space with its boundary circle, arrows along the boundary, and a normal vector standing on the cap.   A translucent blue cap, like a piece of a sphere, sits above the horizontal plane. Its boundary is a closed curve drawn in vermillion with arrowheads showing the direction of travel, counterclockwise seen from above. A green arrow labeled n hat rises from the middle of the cap at a point off the axis, perpendicular to the cap there. With the right thumb along that normal, the fingers curl the way the boundary arrows point.     "
},
{
  "id": "fig-stokes-proof-idea-video",
  "level": "2",
  "url": "section-stokes-theorem.html#fig-stokes-proof-idea-video",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": " The ideas behind the proof of Stokes' theorem, for : is circulation per unit area, the surface is chopped into tiny, nearly flat patches, every interior edge is travelled twice in opposite directions and cancels, and only the boundary survives. A flat surface recovers Green's theorem, as in .   "
},
{
  "id": "example-stokes-hemisphere",
  "level": "2",
  "url": "section-stokes-theorem.html#example-stokes-hemisphere",
  "type": "Example",
  "number": "3.2.8",
  "title": "Both Sides of Stokes’ Theorem.",
  "body": " Both Sides of Stokes' Theorem   Verify for the field and the upper hemisphere of , oriented by its upward unit normal.   "
},
{
  "id": "fig-stokes-hemisphere-tikz",
  "level": "2",
  "url": "section-stokes-theorem.html#fig-stokes-hemisphere-tikz",
  "type": "Figure",
  "number": "3.2.9",
  "title": "",
  "body": " The surface and boundary of : the upper hemisphere of with its upward normal, and the unit circle in the -plane, counterclockwise seen from above. The field runs tangent to all the way round, which is why the circulation is as large as it can be.   A hemisphere with an upward normal, its boundary circle, and a field tangent to that circle.   A translucent blue hemisphere sits on the horizontal plane. Its rim is the unit circle, drawn in vermillion with arrowheads pointing counterclockwise seen from above, and shorter vermillion arrows along the circle show the field running tangent to it. A green arrow rises from the top of the hemisphere.     "
},
{
  "id": "example-stokes-cylinder",
  "level": "2",
  "url": "section-stokes-theorem.html#example-stokes-cylinder",
  "type": "Example",
  "number": "3.2.10",
  "title": "A Circulation That Is Easier as a Flux.",
  "body": " A Circulation That Is Easier as a Flux   Evaluate for , where is the curve in which the plane cuts the cylinder , traversed counterclockwise when seen from above. The curve is drawn in .   "
},
{
  "id": "fig-stokes-cylinder-tikz",
  "level": "2",
  "url": "section-stokes-theorem.html#fig-stokes-cylinder-tikz",
  "type": "Figure",
  "number": "3.2.11",
  "title": "",
  "body": " The curve of : the plane cuts the cylinder in an ellipse. The shaded elliptical region is the surface used in the solution, and its shadow is the unit disk .   A vertical cylinder cut by a slanted plane, with the ellipse of intersection and its shadow on the horizontal plane.   A translucent vertical cylinder of radius one stands on the horizontal plane. A slanted plane cuts it in an ellipse drawn in vermillion, with arrowheads showing counterclockwise travel seen from above. The elliptical region inside the curve is shaded blue, and directly below it the unit disk in the x y plane is shaded gray as its shadow.     "
},
{
  "id": "example-stokes-flat-disk",
  "level": "2",
  "url": "section-stokes-theorem.html#example-stokes-flat-disk",
  "type": "Example",
  "number": "3.2.12",
  "title": "A Term That Cannot Be Integrated.",
  "body": " A Term That Cannot Be Integrated   Evaluate for where is the circle , , traversed counterclockwise when seen from above.   "
},
{
  "id": "fig-stokes-flat-disk-tikz",
  "level": "2",
  "url": "section-stokes-theorem.html#fig-stokes-flat-disk-tikz",
  "type": "Figure",
  "number": "3.2.13",
  "title": "",
  "body": " The cheapest surface for : the flat disk of radius in the plane , whose boundary is the given circle . Its unit normal is , so only the -component of the curl survives.   A flat disk floating at height two, with its boundary circle and an upward normal.   A translucent blue disk of radius three lies in the horizontal plane at height two above the origin. Its boundary circle is drawn in vermillion with arrowheads pointing counterclockwise seen from above, and a green arrow labelled n hat equals k rises from the centre of the disk.     "
},
{
  "id": "example-stokes-tilted-circle",
  "level": "2",
  "url": "section-stokes-theorem.html#example-stokes-tilted-circle",
  "type": "Example",
  "number": "3.2.14",
  "title": "A Tilted Circle.",
  "body": " A Tilted Circle   Evaluate for where is the intersection of the sphere with the plane , traversed counterclockwise when seen from above.   "
},
{
  "id": "fig-stokes-tilted-tikz",
  "level": "2",
  "url": "section-stokes-theorem.html#fig-stokes-tilted-tikz",
  "type": "Figure",
  "number": "3.2.15",
  "title": "",
  "body": " The curve of : the plane passes through the centre of the sphere , so it cuts out a great circle of radius . The surface is the flat disk that bounds in that plane, tilted at , and its unit normal is .   A sphere cut by a slanted plane through its centre, with the great circle and the tilted disk it bounds.   A faint grey sphere of radius three is cut through its centre by a slanted plane. The circle of intersection is drawn in vermillion with arrowheads showing counterclockwise travel seen from above, the flat disk inside it is shaded blue, and a green arrow perpendicular to that disk points up and toward the negative x direction.     "
},
{
  "id": "example-stokes-triangle",
  "level": "2",
  "url": "section-stokes-theorem.html#example-stokes-triangle",
  "type": "Example",
  "number": "3.2.16",
  "title": "Around a Triangle, Twice.",
  "body": " Around a Triangle, Twice   Evaluate for where goes from to to and back to along straight line segments, as in . Do the computation twice: directly, and by Stokes' theorem.   "
},
{
  "id": "fig-stokes-triangle-tikz",
  "level": "2",
  "url": "section-stokes-theorem.html#fig-stokes-triangle-tikz",
  "type": "Figure",
  "number": "3.2.17",
  "title": "",
  "body": " The oriented triangle of : from to to and back, bounding a piece of the plane . The traversal is counterclockwise seen from above, pairing with the upward normal by the right-hand rule.   A triangle in space with vertices on the three positive coordinate axes, its edges carrying arrowheads that circle counterclockwise seen from above.   Coordinate axes in three dimensions. A blue triangular plate has its corners on the positive x axis at 2, the positive y axis at 2, and the positive z axis at 4. Vermillion arrows run along its edges from the x axis corner to the y axis corner, then up to the z axis corner, then back down to the x axis corner, a circuit that is counterclockwise when seen from above.     "
},
{
  "id": "example-stokes-conservative",
  "level": "2",
  "url": "section-stokes-theorem.html#example-stokes-conservative",
  "type": "Example",
  "number": "3.2.18",
  "title": "The Curve Nobody Can Parametrize.",
  "body": " The Curve Nobody Can Parametrize   Evaluate for where is the intersection of the ellipsoid with the paraboloid , traversed counterclockwise when seen from above.   "
},
{
  "id": "fig-stokes-warped-loop-tikz",
  "level": "2",
  "url": "section-stokes-theorem.html#fig-stokes-warped-loop-tikz",
  "type": "Figure",
  "number": "3.2.19",
  "title": "",
  "body": " The curve of : the paraboloid meets the ellipsoid in a warped loop . Nothing about its shape matters here: the curl of is , so the circulation around it is zero whatever surface it bounds.   A warped closed curve where a paraboloid meets an ellipsoid.   A translucent blue paraboloid opening upward passes through a faint grey ellipsoid. They meet along a closed loop, drawn in vermillion with arrowheads showing counterclockwise travel seen from above. The loop is not flat: it rises and falls as it goes round.     "
},
{
  "id": "example-stokes-paraboloid",
  "level": "2",
  "url": "section-stokes-theorem.html#example-stokes-paraboloid",
  "type": "Example",
  "number": "3.2.20",
  "title": "Trading a Paraboloid for a Disk.",
  "body": " Trading a Paraboloid for a Disk   Evaluate for , where is the part of the paraboloid above the -plane, oriented upward.   "
},
{
  "id": "fig-stokes-paraboloid-tikz",
  "level": "2",
  "url": "section-stokes-theorem.html#fig-stokes-paraboloid-tikz",
  "type": "Figure",
  "number": "3.2.21",
  "title": "",
  "body": " The two surfaces of : the paraboloid and the flat disk , which share the boundary circle and carry orientations that give the same direction on it. By the flux of the curl through them is the same, and the disk is the easy one.   A paraboloid and a flat disk sharing the same boundary circle.   A translucent blue paraboloid opens downward from height four to the horizontal plane, where its rim is a circle of radius two drawn in vermillion with arrowheads pointing counterclockwise seen from above. The flat green disk bounded by that same circle lies in the plane. An upward arrow rises from the top of the paraboloid and another from the disk.     "
},
{
  "id": "ex-stokes-conceptual",
  "level": "2",
  "url": "section-stokes-theorem.html#ex-stokes-conceptual",
  "type": "Checkpoint",
  "number": "3.2.22",
  "title": "Equal Curls, Equal Circulations.",
  "body": " Equal Curls, Equal Circulations   Let and be continuously differentiable vector fields defined on all of . Suppose that   everywhere in . Without computing any line integrals, determine whether the statement   is true for every smooth simple closed curve in . If the statement is true, prove it using Stokes' theorem, . If it is false, provide a counterexample.    The statement is true. Define   We first verify carefully that curl distributes over subtraction. Write   Then   By the component formula for the curl from , the -component of is   using the linearity of partial differentiation, and the - and -components behave the same way. Therefore   and since , it follows that   Now let be a smooth oriented surface whose boundary is , with the direction of travel along given by the right-hand rule as in . Because the fields are defined on all of , the surface lies entirely in their domain. Stokes' theorem gives   By linearity of the line integral,   Hence    Why the domain matters. The crucial point is not merely that the two curls agree. To apply Stokes' theorem, the curve must bound an oriented surface that lies entirely inside the common domain of the vector fields. This is automatic here because the domain is all of , but it can fail in a domain with a hole.   Equivalent viewpoint. The field has zero curl on the simply connected domain , so is conservative. Therefore every closed-loop integral of is zero by the loop property of , which gives the same conclusion.   "
},
{
  "id": "ex-stokes-conceptual-extensions",
  "level": "2",
  "url": "section-stokes-theorem.html#ex-stokes-conceptual-extensions",
  "type": "Checkpoint",
  "number": "3.2.23",
  "title": "Extension Questions.",
  "body": " Extension Questions      Does the conclusion remain valid if the common domain is an arbitrary open subset of ?    Which hypothesis of Stokes' theorem is essential in the proof?    How is the result related to conservative vector fields and the Fundamental Theorem for line integrals of ?      "
},
{
  "id": "section-divergence-theorem",
  "level": "1",
  "url": "section-divergence-theorem.html",
  "type": "Section",
  "number": "3.3",
  "title": "The Divergence Theorem",
  "body": " The Divergence Theorem   In we saw that the divergence of a two-dimensional field measures its flux density, and Green's theorem (in its normal form) converted a flux integral around a closed curve into a double integral of the divergence. In this section we extend both ideas to three dimensions: the result is Gauss's divergence theorem , which converts a flux integral over a closed surface often a lengthy parametrized computation, as in into an ordinary triple integral.     Divergence in 3D  Recall from that in 2D the divergence of is , the flux density of the field at a point: positive where the gas expands, negative where it is compressed (see ). The three-dimensional definition adds one term.    Consider the vector field . Then the divergence of is defined as     If the vector field represents the velocity field of a flowing gas, then the divergence of corresponds to the amount of compression or expansion of the gas at the point .   Expanding or Compressing?   Consider the following velocity fields of a gas, and in each case determine whether the gas is expanding or compressing.                             We calculate the divergence of the given vector fields in each case using .   Part A.  : the gas is expanding, at the same rate at every point. This radial field is shown on the left in .   Part B.  : the gas is being compressed; the field is the reverse of the one in part A, with all arrows pointing toward the origin.   Part C.  : the gas is neither expanding nor being compressed this field rotates rigidly about the -axis, as on the right in .   Part D. Writing , a direct computation with the quotient rule gives   Again, the gas is neither expanding nor being compressed: even though the arrows point outward, they weaken with distance at exactly the rate that preserves volume. (This is the field of a point charge in electrostatics.) The animation in shows all four fields.    Four velocity fields and their divergences: expanding ( ), compressing ( ), rotating ( ), and the inverse-square field ( ).     Left: the field points radially outward and expands the gas ( ). Right: the field rotates about the -axis without expansion ( ).   Two 3D vector field plots: one with arrows radiating from the origin, one with arrows circulating around the vertical axis.   Two three-dimensional coordinate boxes. In the left box, blue arrows point away from the origin in every direction, growing longer with distance: the field . In the right box, blue arrows lie in horizontal planes and circulate counterclockwise around the -axis: the field .         Gauss's Divergence Theorem  The divergence theorem relates the outward flux through the surface boundary of a 3D region to the triple integral over the volume of the enclosed region.   Gauss's Divergence Theorem   Let be a vector field whose components have continuous first partial derivatives, and let be a piecewise smooth oriented closed surface. The flux of across in the direction of the surface's outward unit normal field equals the integral of over the region enclosed by the surface:     Write . Both sides of break into three pieces along the three components: by the right-hand side is the sum of the integrals of , and , and the left-hand side is the sum of the fluxes of , and . So it is enough to prove the three separate statements   and add them. We prove the third; the other two are the same argument with the axes renamed.   Step 1: a solid that is simple in the -direction. Suppose first that can be described as in , that is   where is the shadow of in the -plane and are smooth. Its boundary then falls into three pieces, drawn in : the cap where , the floor where , and the vertical wall standing over the boundary of .  On the wall the outward normal is horizontal, so and contributes nothing. On the cap the outward normal points upward, and for a graph we already know from that , so that . On the floor the outward normal points downward, which flips the sign, and . Hence    Step 2: the triple integral. Integrating first in , as in , and using the Fundamental Theorem of Calculus on the inner integral,   which is exactly what Step 1 produced. So the third statement of holds for such a solid. Running the same argument with viewed as simple in the -direction gives the first statement, and in the -direction the second. Adding the three proves the theorem for any solid that is simple in all three directions.   Step 3: general solids. A solid that is not simple in all three directions is cut into finitely many pieces that are, exactly as a region of the plane was cut in . Apply the theorem to each piece and add. Every cut surface is shared by two neighbouring pieces, and it carries opposite outward normals as seen from the two sides, so the two flux contributions differ only in sign and cancel. What survives on the left is the flux through the original boundary , and the volume integrals simply add up to the integral over . This is the same bookkeeping that made the loop property of work, one dimension up.     The solid of Step 1 of the proof of : a solid that is simple in the -direction. Its boundary is the cap where , the floor where , and the vertical wall over the boundary of the shadow . On the wall is tangent, so .   A solid between two curved surfaces over a region in the horizontal plane, with outward normals drawn on the top, the bottom and the side.   A solid sits above a shaded region R in the horizontal plane. Its floor is a gently curved surface and its cap is a higher curved surface; a vertical wall joins them around the edge. A green arrow points upward and outward from the cap, another points downward and outward from the floor, and a third points horizontally outward from the wall, perpendicular to the vertical direction.       The idea of the proof, without the algebra: divergence is flux per unit volume, so chop into little boxes and add the flux out of each one. Every interior face is shared by two boxes and carries opposite outward normals, so the inside cancels in pairs and only the flux through is left.     Flux Through a Sphere, the Easy Way   Use the divergence theorem to compute the flux of the vector field through the sphere .     We calculate the right-hand side of the divergence theorem, . Since ,   Therefore,   with no parametrization, no cross product, and no double integral in sight: the field and its outward-pointing flux are shown in .    The radial field crossing the unit sphere. By the divergence theorem the outward flux is .   A sphere with arrows radiating outward through its surface.   A translucent gray unit sphere centered at the origin. Vermillion arrows pierce the surface from inside, pointing radially outward in every direction and growing with distance from the origin.       Revisiting the Flux of   In we found the flux of across the unit sphere by parametrizing the surface, computing , and integrating a full page of work that produced . Recompute this flux using the divergence theorem.     The divergence is   so by , with the unit sphere and the unit ball ,   in agreement with the long computation in one line. Watch the two sphere computations side by side in .    The divergence theorem converts the flux integrals of and through the unit sphere into triple integrals: and .     Revisiting the Paraboloid, the Easy Way   Evaluate the surface integral , where and the surface is the boundary of the solid region enclosed by the paraboloid and the plane , this time using the divergence theorem.     In we computed this flux by splitting into the cap and the disk , finding a normal vector for each piece, and evaluating two surface integrals. With the divergence theorem the whole computation collapses. The divergence is   so by , using cylindrical coordinates for the solid ( , ),   which agrees with the two-piece surface computation. Whenever the surface is closed and the divergence is simple, the divergence theorem is the tool of choice; see .    The flux of through the closed paraboloid-and-disk surface: the divergence theorem replaces two surface integrals with one triple integral whose value is .     "
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
  "number": "3.3.1",
  "title": "",
  "body": "  Consider the vector field . Then the divergence of is defined as    "
},
{
  "id": "example-divergence-3d",
  "level": "2",
  "url": "section-divergence-theorem.html#example-divergence-3d",
  "type": "Example",
  "number": "3.3.2",
  "title": "Expanding or Compressing?",
  "body": " Expanding or Compressing?   Consider the following velocity fields of a gas, and in each case determine whether the gas is expanding or compressing.                           "
},
{
  "id": "fig-div3d-video",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-div3d-video",
  "type": "Figure",
  "number": "3.3.3",
  "title": "",
  "body": " Four velocity fields and their divergences: expanding ( ), compressing ( ), rotating ( ), and the inverse-square field ( ).   "
},
{
  "id": "fig-div3d-fields",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-div3d-fields",
  "type": "Figure",
  "number": "3.3.4",
  "title": "",
  "body": " Left: the field points radially outward and expands the gas ( ). Right: the field rotates about the -axis without expansion ( ).   Two 3D vector field plots: one with arrows radiating from the origin, one with arrows circulating around the vertical axis.   Two three-dimensional coordinate boxes. In the left box, blue arrows point away from the origin in every direction, growing longer with distance: the field . In the right box, blue arrows lie in horizontal planes and circulate counterclockwise around the -axis: the field .     "
},
{
  "id": "thm-divergence",
  "level": "2",
  "url": "section-divergence-theorem.html#thm-divergence",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "Gauss’s Divergence Theorem.",
  "body": " Gauss's Divergence Theorem   Let be a vector field whose components have continuous first partial derivatives, and let be a piecewise smooth oriented closed surface. The flux of across in the direction of the surface's outward unit normal field equals the integral of over the region enclosed by the surface:     Write . Both sides of break into three pieces along the three components: by the right-hand side is the sum of the integrals of , and , and the left-hand side is the sum of the fluxes of , and . So it is enough to prove the three separate statements   and add them. We prove the third; the other two are the same argument with the axes renamed.   Step 1: a solid that is simple in the -direction. Suppose first that can be described as in , that is   where is the shadow of in the -plane and are smooth. Its boundary then falls into three pieces, drawn in : the cap where , the floor where , and the vertical wall standing over the boundary of .  On the wall the outward normal is horizontal, so and contributes nothing. On the cap the outward normal points upward, and for a graph we already know from that , so that . On the floor the outward normal points downward, which flips the sign, and . Hence    Step 2: the triple integral. Integrating first in , as in , and using the Fundamental Theorem of Calculus on the inner integral,   which is exactly what Step 1 produced. So the third statement of holds for such a solid. Running the same argument with viewed as simple in the -direction gives the first statement, and in the -direction the second. Adding the three proves the theorem for any solid that is simple in all three directions.   Step 3: general solids. A solid that is not simple in all three directions is cut into finitely many pieces that are, exactly as a region of the plane was cut in . Apply the theorem to each piece and add. Every cut surface is shared by two neighbouring pieces, and it carries opposite outward normals as seen from the two sides, so the two flux contributions differ only in sign and cancel. What survives on the left is the flux through the original boundary , and the volume integrals simply add up to the integral over . This is the same bookkeeping that made the loop property of work, one dimension up.   "
},
{
  "id": "fig-divthm-proof-tikz",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-divthm-proof-tikz",
  "type": "Figure",
  "number": "3.3.6",
  "title": "",
  "body": " The solid of Step 1 of the proof of : a solid that is simple in the -direction. Its boundary is the cap where , the floor where , and the vertical wall over the boundary of the shadow . On the wall is tangent, so .   A solid between two curved surfaces over a region in the horizontal plane, with outward normals drawn on the top, the bottom and the side.   A solid sits above a shaded region R in the horizontal plane. Its floor is a gently curved surface and its cap is a higher curved surface; a vertical wall joins them around the edge. A green arrow points upward and outward from the cap, another points downward and outward from the floor, and a third points horizontally outward from the wall, perpendicular to the vertical direction.     "
},
{
  "id": "fig-divthm-proof-video",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-divthm-proof-video",
  "type": "Figure",
  "number": "3.3.7",
  "title": "",
  "body": " The idea of the proof, without the algebra: divergence is flux per unit volume, so chop into little boxes and add the flux out of each one. Every interior face is shared by two boxes and carries opposite outward normals, so the inside cancels in pairs and only the flux through is left.   "
},
{
  "id": "example-divthm-sphere",
  "level": "2",
  "url": "section-divergence-theorem.html#example-divthm-sphere",
  "type": "Example",
  "number": "3.3.8",
  "title": "Flux Through a Sphere, the Easy Way.",
  "body": " Flux Through a Sphere, the Easy Way   Use the divergence theorem to compute the flux of the vector field through the sphere .   "
},
{
  "id": "fig-divthm-sphere",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-divthm-sphere",
  "type": "Figure",
  "number": "3.3.9",
  "title": "",
  "body": " The radial field crossing the unit sphere. By the divergence theorem the outward flux is .   A sphere with arrows radiating outward through its surface.   A translucent gray unit sphere centered at the origin. Vermillion arrows pierce the surface from inside, pointing radially outward in every direction and growing with distance from the origin.     "
},
{
  "id": "example-divthm-sphere-zyx",
  "level": "2",
  "url": "section-divergence-theorem.html#example-divthm-sphere-zyx",
  "type": "Example",
  "number": "3.3.10",
  "title": "Revisiting the Flux of <span class=\"process-math\">\\(\\langle z, y, x \\rangle\\)<\/span>.",
  "body": " Revisiting the Flux of   In we found the flux of across the unit sphere by parametrizing the surface, computing , and integrating a full page of work that produced . Recompute this flux using the divergence theorem.   "
},
{
  "id": "fig-divthm-sphere-video",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-divthm-sphere-video",
  "type": "Figure",
  "number": "3.3.11",
  "title": "",
  "body": " The divergence theorem converts the flux integrals of and through the unit sphere into triple integrals: and .   "
},
{
  "id": "example-divthm-paraboloid",
  "level": "2",
  "url": "section-divergence-theorem.html#example-divthm-paraboloid",
  "type": "Example",
  "number": "3.3.12",
  "title": "Revisiting the Paraboloid, the Easy Way.",
  "body": " Revisiting the Paraboloid, the Easy Way   Evaluate the surface integral , where and the surface is the boundary of the solid region enclosed by the paraboloid and the plane , this time using the divergence theorem.   "
},
{
  "id": "fig-divthm-paraboloid-video",
  "level": "2",
  "url": "section-divergence-theorem.html#fig-divthm-paraboloid-video",
  "type": "Figure",
  "number": "3.3.13",
  "title": "",
  "body": " The flux of through the closed paraboloid-and-disk surface: the divergence theorem replaces two surface integrals with one triple integral whose value is .   "
},
{
  "id": "sec-exercises-hw1-online",
  "level": "1",
  "url": "sec-exercises-hw1-online.html",
  "type": "Section",
  "number": "4.1",
  "title": "Assignment 1",
  "body": " Assignment 1   Sections: and . Work each problem, then type your answers into the boxes and have them checked here.  Each problem below has several answer boxes, and every box is graded separately : a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers.      Numbers. Type a decimal number and nothing else: no units, no sign, no . Give at least three decimal places (for instance 132.008 , not 132 and not 42pi ). Answers are accepted within a small tolerance, so a little rounding is fine.     Expressions. Type only the expression itself, not z(t) = . Write products with * and powers with ^ , and write functions with parentheses: cos(t) , sin(t) , ln(t) , sqrt(t) . So the expression is typed 4cos(t)^2 . Spaces are ignored.        Parametrizing a Curve of Intersection   The curve is the intersection of the cylinder and the surface . Parametrize by filling in the three components below, using the standard parametrization of the unit circle for the shadow of in the -plane.        The parameter runs from to , which traces exactly once.       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      Incorrect.        Correct.      Incorrect.         How Much Wire Is in a Spring?   A helix of radius and height that makes turns can be parametrized as    (a) For spring A of the figure below (radius cm, height cm, turns), the constant is  and the parameter runs up to  .   (b) Compute the length of each spring, in centimetres.  Length of spring A: cm.  Length of spring B: cm.  Which spring uses more wire? Type a single letter, A or B :    Which spring uses more wire?   Two coil springs side by side: spring A wide with three turns, spring B narrow with five turns.   Two helical springs drawn side by side. Spring A, on the left, has three turns of radius seven centimeters and a marked height of four centimeters. Spring B, on the right, has five turns of radius four centimeters and a marked height of three centimeters. Dashed lines with a double-headed arrow mark each spring's height.           Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.         Tangent Line to a Space Curve   Consider the curve   and the point on it.  The parameter value at is  .  The tangent line at has direction vector  , ,  .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.         Where Is the Object After Travelling 15?   The path of an object is   starting at the origin. Find where it is after travelling a distance of .  Its speed at is .  The object has travelled a distance of at time  .  At that moment it is at the point  , ,  .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        "
},
{
  "id": "sec-exercises-hw1-online-2-3",
  "level": "2",
  "url": "sec-exercises-hw1-online.html#sec-exercises-hw1-online-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "sec-exercises-hw1-online-2-4-1-1",
  "level": "2",
  "url": "sec-exercises-hw1-online.html#sec-exercises-hw1-online-2-4-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Numbers. "
},
{
  "id": "sec-exercises-hw1-online-2-4-2-1",
  "level": "2",
  "url": "sec-exercises-hw1-online.html#sec-exercises-hw1-online-2-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Expressions. "
},
{
  "id": "ex-hw1o-parametrize-intersection",
  "level": "2",
  "url": "sec-exercises-hw1-online.html#ex-hw1o-parametrize-intersection",
  "type": "Exercise",
  "number": "1",
  "title": "Parametrizing a Curve of Intersection.",
  "body": " Parametrizing a Curve of Intersection   The curve is the intersection of the cylinder and the surface . Parametrize by filling in the three components below, using the standard parametrization of the unit circle for the shadow of in the -plane.        The parameter runs from to , which traces exactly once.       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw1o-helix",
  "level": "2",
  "url": "sec-exercises-hw1-online.html#ex-hw1o-helix",
  "type": "Exercise",
  "number": "2",
  "title": "How Much Wire Is in a Spring?",
  "body": " How Much Wire Is in a Spring?   A helix of radius and height that makes turns can be parametrized as    (a) For spring A of the figure below (radius cm, height cm, turns), the constant is  and the parameter runs up to  .   (b) Compute the length of each spring, in centimetres.  Length of spring A: cm.  Length of spring B: cm.  Which spring uses more wire? Type a single letter, A or B :    Which spring uses more wire?   Two coil springs side by side: spring A wide with three turns, spring B narrow with five turns.   Two helical springs drawn side by side. Spring A, on the left, has three turns of radius seven centimeters and a marked height of four centimeters. Spring B, on the right, has five turns of radius four centimeters and a marked height of three centimeters. Dashed lines with a double-headed arrow mark each spring's height.           Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw1o-tangent-line",
  "level": "2",
  "url": "sec-exercises-hw1-online.html#ex-hw1o-tangent-line",
  "type": "Exercise",
  "number": "3",
  "title": "Tangent Line to a Space Curve.",
  "body": " Tangent Line to a Space Curve   Consider the curve   and the point on it.  The parameter value at is  .  The tangent line at has direction vector  , ,  .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw1o-location",
  "level": "2",
  "url": "sec-exercises-hw1-online.html#ex-hw1o-location",
  "type": "Exercise",
  "number": "4",
  "title": "Where Is the Object After Travelling 15?",
  "body": " Where Is the Object After Travelling 15?   The path of an object is   starting at the origin. Find where it is after travelling a distance of .  Its speed at is .  The object has travelled a distance of at time  .  At that moment it is at the point  , ,  .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "sec-exercises-hw2-online",
  "level": "1",
  "url": "sec-exercises-hw2-online.html",
  "type": "Section",
  "number": "4.2",
  "title": "Assignment 2",
  "body": " Assignment 2   Section: . Work each problem, then type your answers into the boxes and have them checked here.  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers. Numbers: a decimal number and nothing else no units, no sign, no ; give at least three decimals (for instance 18.850 , not 6pi ). Answers are accepted within a small tolerance. Words: type just the word asked for, in lower case.     Mass of a Quarter-Circle Wire          k*R\/2     A wire is the quarter circle of radius centered at , , lying in the first quadrant relative to its center. Its density is   in kilograms per meter. The total mass of the wire is kilograms.         Correct.       Incorrect.       Incorrect.        A Line Integral Along a Segment   Evaluate along the segment , , from to .  Along the path the integrand simplifies to (in terms of ); the speed of your parametrization is ; and the integral equals .      Correct.     Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        The curve of : the boundary of the unit square, traversed once as shown.   The unit square traversed counterclockwise, arrowheads on all four sides.            (0,0)    (1,0)    (1,1)    (0,1)                  Around the Unit Square   Evaluate over the boundary of the unit square of .  The side from to contributes ; the side from to contributes ; and the whole integral equals .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        The wall of : its base is the unit circle in the -plane and its height above a point of that circle is .   A curved wall standing on the unit circle, whose top edge rises and falls twice around the circle.   A translucent blue wall stands vertically on the unit circle in the horizontal plane. Its top edge is a closed curve that reaches height four above the points where the circle meets the x axis and dips to height two above the points where it meets the y axis.       Area of a Curved Wall   Find the surface area of the wall of , whose height is over the unit circle.  The surface area of the wall is .       Correct.      Incorrect.        "
},
{
  "id": "sec-exercises-hw2-online-2-3",
  "level": "2",
  "url": "sec-exercises-hw2-online.html#sec-exercises-hw2-online-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "ex-hw2o-quarter-circle",
  "level": "2",
  "url": "sec-exercises-hw2-online.html#ex-hw2o-quarter-circle",
  "type": "Exercise",
  "number": "1",
  "title": "Mass of a Quarter-Circle Wire.",
  "body": " Mass of a Quarter-Circle Wire          k*R\/2     A wire is the quarter circle of radius centered at , , lying in the first quadrant relative to its center. Its density is   in kilograms per meter. The total mass of the wire is kilograms.         Correct.       Incorrect.       Incorrect.      "
},
{
  "id": "ex-hw2o-segment",
  "level": "2",
  "url": "sec-exercises-hw2-online.html#ex-hw2o-segment",
  "type": "Exercise",
  "number": "2",
  "title": "A Line Integral Along a Segment.",
  "body": " A Line Integral Along a Segment   Evaluate along the segment , , from to .  Along the path the integrand simplifies to (in terms of ); the speed of your parametrization is ; and the integral equals .      Correct.     Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "fig-hw2o-square",
  "level": "2",
  "url": "sec-exercises-hw2-online.html#fig-hw2o-square",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " The curve of : the boundary of the unit square, traversed once as shown.   The unit square traversed counterclockwise, arrowheads on all four sides.            (0,0)    (1,0)    (1,1)    (0,1)                "
},
{
  "id": "ex-hw2o-square-path",
  "level": "2",
  "url": "sec-exercises-hw2-online.html#ex-hw2o-square-path",
  "type": "Exercise",
  "number": "3",
  "title": "Around the Unit Square.",
  "body": " Around the Unit Square   Evaluate over the boundary of the unit square of .  The side from to contributes ; the side from to contributes ; and the whole integral equals .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "fig-hw2o-wall",
  "level": "2",
  "url": "sec-exercises-hw2-online.html#fig-hw2o-wall",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " The wall of : its base is the unit circle in the -plane and its height above a point of that circle is .   A curved wall standing on the unit circle, whose top edge rises and falls twice around the circle.   A translucent blue wall stands vertically on the unit circle in the horizontal plane. Its top edge is a closed curve that reaches height four above the points where the circle meets the x axis and dips to height two above the points where it meets the y axis.     "
},
{
  "id": "ex-hw2o-wall",
  "level": "2",
  "url": "sec-exercises-hw2-online.html#ex-hw2o-wall",
  "type": "Exercise",
  "number": "4",
  "title": "Area of a Curved Wall.",
  "body": " Area of a Curved Wall   Find the surface area of the wall of , whose height is over the unit circle.  The surface area of the wall is .       Correct.      Incorrect.      "
},
{
  "id": "sec-exercises-hw3-online",
  "level": "1",
  "url": "sec-exercises-hw3-online.html",
  "type": "Section",
  "number": "4.3",
  "title": "Assignment 3",
  "body": " Assignment 3   Section: . Work each problem, then type your answers into the boxes and have them checked here.  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers. Numbers: a decimal number and nothing else no units, no sign, no ; give at least three decimals (for instance 18.850 , not 6pi ). Answers are accepted within a small tolerance. Words: type just the word asked for, in lower case.     The vector field and the curve of . The curve is traversed in the direction of the arrowhead.   A field over the first quadrant tilting from downward to rightward, with a blue circle.    F(x,y) = (0.30*y, -0.30)  circle(t) = (1.5 + 1.05*cos(t), 1.35 + 1.05*sin(t))           C  \\mathbf{F}               The Sign of a Line Integral   For the field and curve of , is positive, negative, or zero? Type one word: positive , negative , or zero .  Answer:       Correct.      Incorrect.      Incorrect.        Two Particles, Two Paths   With , find the work done from to along the parabola and along , the bottom half of .  Work along : foot-pounds.  Work along : foot-pounds.       Correct.      Incorrect.        Correct.      Incorrect.        A Line Integral Along a Helix   For the helix , , compute .  The integrand is the constant , and the integral equals .       Correct.      Incorrect.        Correct.      Incorrect.        "
},
{
  "id": "sec-exercises-hw3-online-2-3",
  "level": "2",
  "url": "sec-exercises-hw3-online.html#sec-exercises-hw3-online-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "fig-hw3o-field",
  "level": "2",
  "url": "sec-exercises-hw3-online.html#fig-hw3o-field",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": " The vector field and the curve of . The curve is traversed in the direction of the arrowhead.   A field over the first quadrant tilting from downward to rightward, with a blue circle.    F(x,y) = (0.30*y, -0.30)  circle(t) = (1.5 + 1.05*cos(t), 1.35 + 1.05*sin(t))           C  \\mathbf{F}             "
},
{
  "id": "ex-hw3o-sign",
  "level": "2",
  "url": "sec-exercises-hw3-online.html#ex-hw3o-sign",
  "type": "Exercise",
  "number": "1",
  "title": "The Sign of a Line Integral.",
  "body": " The Sign of a Line Integral   For the field and curve of , is positive, negative, or zero? Type one word: positive , negative , or zero .  Answer:       Correct.      Incorrect.      Incorrect.      "
},
{
  "id": "ex-hw3o-two-paths",
  "level": "2",
  "url": "sec-exercises-hw3-online.html#ex-hw3o-two-paths",
  "type": "Exercise",
  "number": "2",
  "title": "Two Particles, Two Paths.",
  "body": " Two Particles, Two Paths   With , find the work done from to along the parabola and along , the bottom half of .  Work along : foot-pounds.  Work along : foot-pounds.       Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw3o-helix",
  "level": "2",
  "url": "sec-exercises-hw3-online.html#ex-hw3o-helix",
  "type": "Exercise",
  "number": "3",
  "title": "A Line Integral Along a Helix.",
  "body": " A Line Integral Along a Helix   For the helix , , compute .  The integrand is the constant , and the integral equals .       Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "sec-exercises-hw4-online",
  "level": "1",
  "url": "sec-exercises-hw4-online.html",
  "type": "Section",
  "number": "4.4",
  "title": "Assignment 4",
  "body": " Assignment 4   Sections: , , and . Work each problem, then type your answers into the boxes and have them checked here.  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers. Numbers: a decimal number and nothing else no units, no sign, no ; give at least three decimals (for instance 18.850 , not 6pi ). Answers are accepted within a small tolerance. Words: type just the word asked for, in lower case.     The vector field and the two paths and of . Every field vector points in the same direction; only their lengths change.   A uniform slanted field with a square path from corner A to corner B.    G(x,y) = (0.16*(1+x), 0.16*(1+x))           A    D    C    B                   Which Path Takes Less Work?   For the field of : over which path does perform less work? Type ADC or ABC .  Answer:  Is conservative? Type yes or no .  Answer:       Correct.      Incorrect.        Correct.      Incorrect.        The four shapes of . Shapes and are triangles cut off by and ; shapes and are sectors of the circle . The dashed lines are and .   Four small pictures of candidate regions, each on its own axes.          1  y=r  y=x       2  x=r  y=x      3  x^2+y^2=r^2  y=x      4  x^2+y^2=r^2  y=-x                Which Shapes Can Carry This Density?   With and the shapes of : type the numbers of the two shapes that can carry as a density, in increasing order and separated by a comma (for instance 1,3 ).  Answer:  Which of those two is heavier? Type its number.  Answer:       Correct.      Incorrect.        Correct.      Incorrect.        Reversing the Order of Integration   Rewrite with the order of integration reversed.  How many double integrals does the reversed order need?   Taking them in order of increasing : the first runs up to  , and in it goes from to ; in the second, goes from to .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        A Volume Over a Triangle   Find the volume under and above the triangle formed by , , and the -axis.  After integrating in , the remaining integrand is (in terms of ), and the volume is .       Correct.      Incorrect.        Correct.      Incorrect.        "
},
{
  "id": "sec-exercises-hw4-online-2-3",
  "level": "2",
  "url": "sec-exercises-hw4-online.html#sec-exercises-hw4-online-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "fig-hw4o-paths",
  "level": "2",
  "url": "sec-exercises-hw4-online.html#fig-hw4o-paths",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " The vector field and the two paths and of . Every field vector points in the same direction; only their lengths change.   A uniform slanted field with a square path from corner A to corner B.    G(x,y) = (0.16*(1+x), 0.16*(1+x))           A    D    C    B                 "
},
{
  "id": "ex-hw4o-two-paths",
  "level": "2",
  "url": "sec-exercises-hw4-online.html#ex-hw4o-two-paths",
  "type": "Exercise",
  "number": "1",
  "title": "Which Path Takes Less Work?",
  "body": " Which Path Takes Less Work?   For the field of : over which path does perform less work? Type ADC or ABC .  Answer:  Is conservative? Type yes or no .  Answer:       Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "fig-hw4o-shapes",
  "level": "2",
  "url": "sec-exercises-hw4-online.html#fig-hw4o-shapes",
  "type": "Figure",
  "number": "4.4.2",
  "title": "",
  "body": " The four shapes of . Shapes and are triangles cut off by and ; shapes and are sectors of the circle . The dashed lines are and .   Four small pictures of candidate regions, each on its own axes.          1  y=r  y=x       2  x=r  y=x      3  x^2+y^2=r^2  y=x      4  x^2+y^2=r^2  y=-x              "
},
{
  "id": "ex-hw4o-density-shapes",
  "level": "2",
  "url": "sec-exercises-hw4-online.html#ex-hw4o-density-shapes",
  "type": "Exercise",
  "number": "2",
  "title": "Which Shapes Can Carry This Density?",
  "body": " Which Shapes Can Carry This Density?   With and the shapes of : type the numbers of the two shapes that can carry as a density, in increasing order and separated by a comma (for instance 1,3 ).  Answer:  Which of those two is heavier? Type its number.  Answer:       Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw4o-reverse-order",
  "level": "2",
  "url": "sec-exercises-hw4-online.html#ex-hw4o-reverse-order",
  "type": "Exercise",
  "number": "3",
  "title": "Reversing the Order of Integration.",
  "body": " Reversing the Order of Integration   Rewrite with the order of integration reversed.  How many double integrals does the reversed order need?   Taking them in order of increasing : the first runs up to  , and in it goes from to ; in the second, goes from to .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw4o-volume",
  "level": "2",
  "url": "sec-exercises-hw4-online.html#ex-hw4o-volume",
  "type": "Exercise",
  "number": "4",
  "title": "A Volume Over a Triangle.",
  "body": " A Volume Over a Triangle   Find the volume under and above the triangle formed by , , and the -axis.  After integrating in , the remaining integrand is (in terms of ), and the volume is .       Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "sec-exercises-hw5-online",
  "level": "1",
  "url": "sec-exercises-hw5-online.html",
  "type": "Section",
  "number": "4.5",
  "title": "Assignment 5",
  "body": " Assignment 5   Sections: and . Work each problem, then type your answers into the boxes and have them checked here.  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers. Numbers: a decimal number and nothing else no units, no sign, no ; give at least three decimals (for instance 18.850 , not 6pi ). Answers are accepted within a small tolerance. Words: type just the word asked for, in lower case.     A blank polar chart for . The circles are , , , and , and the spokes are spaced apart.   A blank polar grid of four circles and twelve labeled spokes.    c1(t) = (0.5*cos(t), 0.5*sin(t))  c2(t) = (cos(t), sin(t))  c3(t) = (1.5*cos(t), 1.5*sin(t))  c4(t) = (2*cos(t), 2*sin(t))          0   \\pi\/6    \\pi\/3    \\pi\/2    2\\pi\/3    5\\pi\/6   \\pi   7\\pi\/6    4\\pi\/3    3\\pi\/2    5\\pi\/3    11\\pi\/6   0.5  1  1.5  2              A Rose and Its Area   For , : about which axis is the graph symmetric? Type x or y .  Answer:  In the area integral , the inner limits are to , and runs from to .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Three Integrals Into One   Combine the three integrals of into a single polar integral. In , the radius runs from to and from to .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Mass Between Two Circles   Find the mass of the region bounded by and , whose density is .  Away from the origin the two circles cross at the polar angle  , and the mass is .       Correct.      Incorrect.        Correct.      Incorrect.        "
},
{
  "id": "sec-exercises-hw5-online-2-3",
  "level": "2",
  "url": "sec-exercises-hw5-online.html#sec-exercises-hw5-online-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "fig-hw5o-polar-chart",
  "level": "2",
  "url": "sec-exercises-hw5-online.html#fig-hw5o-polar-chart",
  "type": "Figure",
  "number": "4.5.1",
  "title": "",
  "body": " A blank polar chart for . The circles are , , , and , and the spokes are spaced apart.   A blank polar grid of four circles and twelve labeled spokes.    c1(t) = (0.5*cos(t), 0.5*sin(t))  c2(t) = (cos(t), sin(t))  c3(t) = (1.5*cos(t), 1.5*sin(t))  c4(t) = (2*cos(t), 2*sin(t))          0   \\pi\/6    \\pi\/3    \\pi\/2    2\\pi\/3    5\\pi\/6   \\pi   7\\pi\/6    4\\pi\/3    3\\pi\/2    5\\pi\/3    11\\pi\/6   0.5  1  1.5  2            "
},
{
  "id": "ex-hw5o-rose",
  "level": "2",
  "url": "sec-exercises-hw5-online.html#ex-hw5o-rose",
  "type": "Exercise",
  "number": "1",
  "title": "A Rose and Its Area.",
  "body": " A Rose and Its Area   For , : about which axis is the graph symmetric? Type x or y .  Answer:  In the area integral , the inner limits are to , and runs from to .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw5o-combine",
  "level": "2",
  "url": "sec-exercises-hw5-online.html#ex-hw5o-combine",
  "type": "Exercise",
  "number": "2",
  "title": "Three Integrals Into One.",
  "body": " Three Integrals Into One   Combine the three integrals of into a single polar integral. In , the radius runs from to and from to .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw5o-two-circles",
  "level": "2",
  "url": "sec-exercises-hw5-online.html#ex-hw5o-two-circles",
  "type": "Exercise",
  "number": "3",
  "title": "Mass Between Two Circles.",
  "body": " Mass Between Two Circles   Find the mass of the region bounded by and , whose density is .  Away from the origin the two circles cross at the polar angle  , and the mass is .       Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "sec-exercises-hw6-online",
  "level": "1",
  "url": "sec-exercises-hw6-online.html",
  "type": "Section",
  "number": "4.6",
  "title": "Assignment 6",
  "body": " Assignment 6   Sections: and . Work each problem, then type your answers into the boxes and have them checked here.  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers. Numbers: a decimal number and nothing else no units, no sign, no ; give at least three decimals (for instance 18.850 , not 6pi ). Answers are accepted within a small tolerance. Words: type just the word asked for, in lower case.     Mass of a Cone Along the x-Axis   An object is bounded by and , and its density is .  The mass of the object is .       Correct.      Incorrect.        From Cylindrical Back to Rectangular   Convert to rectangular coordinates.  In rectangular coordinates the innermost limit for becomes ; for a fixed , runs from to ; and runs from to .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Two Signs, No Calculation   Let be the solid between and . Type positive , negative , or zero for each.   :    :        Correct.      Incorrect.        Correct.      Incorrect.        Volume Between a Hyperboloid and a Paraboloid   Find the volume of the region bounded by and .  The two surfaces meet at  , over the circle of radius , and the volume is .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        "
},
{
  "id": "sec-exercises-hw6-online-2-3",
  "level": "2",
  "url": "sec-exercises-hw6-online.html#sec-exercises-hw6-online-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "ex-hw6o-cone-mass",
  "level": "2",
  "url": "sec-exercises-hw6-online.html#ex-hw6o-cone-mass",
  "type": "Exercise",
  "number": "1",
  "title": "Mass of a Cone Along the x-Axis.",
  "body": " Mass of a Cone Along the x-Axis   An object is bounded by and , and its density is .  The mass of the object is .       Correct.      Incorrect.      "
},
{
  "id": "ex-hw6o-convert",
  "level": "2",
  "url": "sec-exercises-hw6-online.html#ex-hw6o-convert",
  "type": "Exercise",
  "number": "2",
  "title": "From Cylindrical Back to Rectangular.",
  "body": " From Cylindrical Back to Rectangular   Convert to rectangular coordinates.  In rectangular coordinates the innermost limit for becomes ; for a fixed , runs from to ; and runs from to .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw6o-signs",
  "level": "2",
  "url": "sec-exercises-hw6-online.html#ex-hw6o-signs",
  "type": "Exercise",
  "number": "3",
  "title": "Two Signs, No Calculation.",
  "body": " Two Signs, No Calculation   Let be the solid between and . Type positive , negative , or zero for each.   :    :        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw6o-volume",
  "level": "2",
  "url": "sec-exercises-hw6-online.html#ex-hw6o-volume",
  "type": "Exercise",
  "number": "4",
  "title": "Volume Between a Hyperboloid and a Paraboloid.",
  "body": " Volume Between a Hyperboloid and a Paraboloid   Find the volume of the region bounded by and .  The two surfaces meet at  , over the circle of radius , and the volume is .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "sec-exercises-hw7-online",
  "level": "1",
  "url": "sec-exercises-hw7-online.html",
  "type": "Section",
  "number": "4.7",
  "title": "Assignment 7",
  "body": " Assignment 7   Sections: and . Work each problem, then type your answers into the boxes and have them checked here.  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers. Numbers: a decimal number and nothing else no units, no sign, no ; give at least three decimals (for instance 18.850 , not 6pi ). Answers are accepted within a small tolerance. Words: type just the word asked for, in lower case.     A Hemisphere in Spherical Coordinates   Evaluate   The solid of integration is half of a ball; its radius is , and the value of the integral is .       Correct.      Incorrect.        Correct.      Incorrect.        The Area of a Slanted Ellipse   With , , the Jacobian equals , the ellipse becomes the unit disk in the -plane, and its area is .       Correct.      Incorrect.        Correct.      Incorrect.        Scaling a Double Integral   Suppose , where is the disk . Let be the disk and .  The change of variables carrying onto multiplies areas by , and  .       Correct.      Incorrect.        Correct.      Incorrect.        "
},
{
  "id": "sec-exercises-hw7-online-2-3",
  "level": "2",
  "url": "sec-exercises-hw7-online.html#sec-exercises-hw7-online-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "ex-hw7o-hemisphere",
  "level": "2",
  "url": "sec-exercises-hw7-online.html#ex-hw7o-hemisphere",
  "type": "Exercise",
  "number": "1",
  "title": "A Hemisphere in Spherical Coordinates.",
  "body": " A Hemisphere in Spherical Coordinates   Evaluate   The solid of integration is half of a ball; its radius is , and the value of the integral is .       Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw7o-ellipse",
  "level": "2",
  "url": "sec-exercises-hw7-online.html#ex-hw7o-ellipse",
  "type": "Exercise",
  "number": "2",
  "title": "The Area of a Slanted Ellipse.",
  "body": " The Area of a Slanted Ellipse   With , , the Jacobian equals , the ellipse becomes the unit disk in the -plane, and its area is .       Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw7o-scaling",
  "level": "2",
  "url": "sec-exercises-hw7-online.html#ex-hw7o-scaling",
  "type": "Exercise",
  "number": "3",
  "title": "Scaling a Double Integral.",
  "body": " Scaling a Double Integral   Suppose , where is the disk . Let be the disk and .  The change of variables carrying onto multiplies areas by , and  .       Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "sec-exercises-hw8-online",
  "level": "1",
  "url": "sec-exercises-hw8-online.html",
  "type": "Section",
  "number": "4.8",
  "title": "Assignment 8",
  "body": " Assignment 8   Section: . Work each problem, then type your answers into the boxes and have them checked here.  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers. Numbers: a decimal number and nothing else no units, no sign, no ; give at least three decimals (for instance 18.850 , not 6pi ). Answers are accepted within a small tolerance. Words: type just the word asked for, in lower case.     The solid of : the cone capped by the plane , sitting on the horizontal cylinder cut off by the planes .   A cone standing point-down on a horizontal cylinder lying along the y axis.   A red cylinder of radius one lies on its side along the y axis, cut off by the planes y equals plus and minus one. Above it, a red cone opens upward from the point at height one on the z axis to a disk of radius one in the plane z equals two.       The Centroid of Cone Plus Cylinder   For the solid of with constant density : the mass of the cylinder is  times , and the mass of the cone is  times .  The centroid lies on the -axis at  .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Center of Mass of the Cone   For the solid bounded by and with : the mass is , the moment is , and the center of mass is at  .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        "
},
{
  "id": "sec-exercises-hw8-online-2-3",
  "level": "2",
  "url": "sec-exercises-hw8-online.html#sec-exercises-hw8-online-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "fig-hw8o-solid",
  "level": "2",
  "url": "sec-exercises-hw8-online.html#fig-hw8o-solid",
  "type": "Figure",
  "number": "4.8.1",
  "title": "",
  "body": " The solid of : the cone capped by the plane , sitting on the horizontal cylinder cut off by the planes .   A cone standing point-down on a horizontal cylinder lying along the y axis.   A red cylinder of radius one lies on its side along the y axis, cut off by the planes y equals plus and minus one. Above it, a red cone opens upward from the point at height one on the z axis to a disk of radius one in the plane z equals two.     "
},
{
  "id": "ex-hw8o-centroid",
  "level": "2",
  "url": "sec-exercises-hw8-online.html#ex-hw8o-centroid",
  "type": "Exercise",
  "number": "1",
  "title": "The Centroid of Cone Plus Cylinder.",
  "body": " The Centroid of Cone Plus Cylinder   For the solid of with constant density : the mass of the cylinder is  times , and the mass of the cone is  times .  The centroid lies on the -axis at  .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw8o-center-of-mass",
  "level": "2",
  "url": "sec-exercises-hw8-online.html#ex-hw8o-center-of-mass",
  "type": "Exercise",
  "number": "2",
  "title": "Center of Mass of the Cone.",
  "body": " Center of Mass of the Cone   For the solid bounded by and with : the mass is , the moment is , and the center of mass is at  .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "sec-exercises-hw9-online",
  "level": "1",
  "url": "sec-exercises-hw9-online.html",
  "type": "Section",
  "number": "4.9",
  "title": "Assignment 9",
  "body": " Assignment 9   Section: . Work each problem, then type your answers into the boxes and have them checked here.  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers. Numbers: a decimal number and nothing else no units, no sign, no ; give at least three decimals (for instance 18.850 , not 6pi ). Answers are accepted within a small tolerance. Words: type just the word asked for, in lower case.     The curve of : a staircase of ten unit steps from to , followed by the horizontal segment back to .   A staircase of ten unit steps from the origin to (10,10), returning along the top.          (0,0)    (10,10)    (0,10)                Work Along a Staircase   For along the path of : the curl integrand of equals .  Closing the path into a simple closed curve encloses an area of , so the integral around that closed curve is .  The work along the given path is .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        A Fierce-Looking Integral Around a Circle   For the integral of around the unit circle: after simplification equals (in terms of ), and the integral equals .       Correct.      Incorrect.        Correct.      Incorrect.        Outward Flux Across the Unit Circle   For : the flux density of equals  , and the outward flux across the unit circle is .       Correct.      Incorrect.        Correct.      Incorrect.        Green's Theorem on One Petal   For around one petal of : equals .  The area of the petal is , so the line integral is .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        "
},
{
  "id": "sec-exercises-hw9-online-2-3",
  "level": "2",
  "url": "sec-exercises-hw9-online.html#sec-exercises-hw9-online-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "fig-hw9o-staircase",
  "level": "2",
  "url": "sec-exercises-hw9-online.html#fig-hw9o-staircase",
  "type": "Figure",
  "number": "4.9.1",
  "title": "",
  "body": " The curve of : a staircase of ten unit steps from to , followed by the horizontal segment back to .   A staircase of ten unit steps from the origin to (10,10), returning along the top.          (0,0)    (10,10)    (0,10)              "
},
{
  "id": "ex-hw9o-staircase",
  "level": "2",
  "url": "sec-exercises-hw9-online.html#ex-hw9o-staircase",
  "type": "Exercise",
  "number": "1",
  "title": "Work Along a Staircase.",
  "body": " Work Along a Staircase   For along the path of : the curl integrand of equals .  Closing the path into a simple closed curve encloses an area of , so the integral around that closed curve is .  The work along the given path is .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw9o-circle",
  "level": "2",
  "url": "sec-exercises-hw9-online.html#ex-hw9o-circle",
  "type": "Exercise",
  "number": "2",
  "title": "A Fierce-Looking Integral Around a Circle.",
  "body": " A Fierce-Looking Integral Around a Circle   For the integral of around the unit circle: after simplification equals (in terms of ), and the integral equals .       Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw9o-flux",
  "level": "2",
  "url": "sec-exercises-hw9-online.html#ex-hw9o-flux",
  "type": "Exercise",
  "number": "3",
  "title": "Outward Flux Across the Unit Circle.",
  "body": " Outward Flux Across the Unit Circle   For : the flux density of equals  , and the outward flux across the unit circle is .       Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "ex-hw9o-rose",
  "level": "2",
  "url": "sec-exercises-hw9-online.html#ex-hw9o-rose",
  "type": "Exercise",
  "number": "4",
  "title": "Green’s Theorem on One Petal.",
  "body": " Green's Theorem on One Petal   For around one petal of : equals .  The area of the petal is , so the line integral is .       Correct.      Incorrect.        Correct.      Incorrect.        Correct.      Incorrect.      "
},
{
  "id": "sec-exercises-hw10-online",
  "level": "1",
  "url": "sec-exercises-hw10-online.html",
  "type": "Section",
  "number": "4.10",
  "title": "Assignment 10",
  "body": " Assignment 10   Sections: , , and .  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers. Give numbers as decimals to at least three places, with no units and no . A negative answer needs its minus sign.     Flux Through a Piece of a Cylinder                a+d    rad+m    rad*rad    -d*rad^2    0     Compute the flux , where   and is the portion of the cylinder lying between and , with pointing away from the -axis.  Parametrize the cylinder by , . Writing for the outward normal, the integrand collapses to . The constant is .  The flux is .       Correct.   Incorrect.      Correct.   Incorrect.        A Curl Integral Over a Hemisphere          -2*a*pi*rad^2     Compute , where   and is the portion of the sphere of radius with , taken with pointing upward.  Answer:        Correct.   Incorrect.        Flux Out of a Box                   x0+w    0    (3\/2)*w*(z1^2-z0^2)     Compute the flux , where   and is the surface of the box , , , with pointing outward.  The term of contributes to the triple integral.  The flux is .       Correct.   Incorrect.      Correct.   Incorrect.        Verifying Stokes' Theorem on a Hemisphere       rad*rad    -pi*rad^2     Verify Stokes' theorem for on the hemisphere , , with pointing outward.  The surface integral equals .  The circulation around the boundary curve equals .       Correct.   Incorrect.      Correct.   Incorrect.        Verifying Stokes' Theorem on a Cone             2*a*pi*h^2     Verify Stokes' theorem for   on the cone , , with pointing upward.  The surface integral equals .  The circulation around the boundary curve equals .       Correct.   Incorrect.      Correct.   Incorrect.        One Field, Three Theorems    3*pi\/2    pi\/3    0     Let , let be the paraboloid with , oriented upward, and let be its boundary curve the unit circle in the -plane, traversed counterclockwise as seen from above. Let be the unit disk in the plane , and let be the solid region enclosed between and .  (a) Explain why the space curve integral reduces exactly to a plane integral, and evaluate it using Green's theorem, . Its value is .  (b) Verify your answer using Stokes' theorem, , with the surface : the flux equals . Then explain, without computing, why any surface having as its boundary would give the same flux of .  (c) Use the divergence theorem, , to compute the outward flux of itself through the closed surface : . The flux through the disk alone is , so the flux through the paraboloid alone is .  (d) In (b) you were allowed to swap surfaces freely; in (c) you were not the flux of through and through differ. Reconcile these two facts using the identity  together with the divergence theorem.       Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.        "
},
{
  "id": "sec-exercises-hw10-online-2-3",
  "level": "2",
  "url": "sec-exercises-hw10-online.html#sec-exercises-hw10-online-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "ex-hw10o-cylinder-flux",
  "level": "2",
  "url": "sec-exercises-hw10-online.html#ex-hw10o-cylinder-flux",
  "type": "Exercise",
  "number": "1",
  "title": "Flux Through a Piece of a Cylinder.",
  "body": " Flux Through a Piece of a Cylinder                a+d    rad+m    rad*rad    -d*rad^2    0     Compute the flux , where   and is the portion of the cylinder lying between and , with pointing away from the -axis.  Parametrize the cylinder by , . Writing for the outward normal, the integrand collapses to . The constant is .  The flux is .       Correct.   Incorrect.      Correct.   Incorrect.      "
},
{
  "id": "ex-hw10o-stokes-hemisphere",
  "level": "2",
  "url": "sec-exercises-hw10-online.html#ex-hw10o-stokes-hemisphere",
  "type": "Exercise",
  "number": "2",
  "title": "A Curl Integral Over a Hemisphere.",
  "body": " A Curl Integral Over a Hemisphere          -2*a*pi*rad^2     Compute , where   and is the portion of the sphere of radius with , taken with pointing upward.  Answer:        Correct.   Incorrect.      "
},
{
  "id": "ex-hw10o-divergence-box",
  "level": "2",
  "url": "sec-exercises-hw10-online.html#ex-hw10o-divergence-box",
  "type": "Exercise",
  "number": "3",
  "title": "Flux Out of a Box.",
  "body": " Flux Out of a Box                   x0+w    0    (3\/2)*w*(z1^2-z0^2)     Compute the flux , where   and is the surface of the box , , , with pointing outward.  The term of contributes to the triple integral.  The flux is .       Correct.   Incorrect.      Correct.   Incorrect.      "
},
{
  "id": "ex-hw10o-verify-hemisphere",
  "level": "2",
  "url": "sec-exercises-hw10-online.html#ex-hw10o-verify-hemisphere",
  "type": "Exercise",
  "number": "4",
  "title": "Verifying Stokes’ Theorem on a Hemisphere.",
  "body": " Verifying Stokes' Theorem on a Hemisphere       rad*rad    -pi*rad^2     Verify Stokes' theorem for on the hemisphere , , with pointing outward.  The surface integral equals .  The circulation around the boundary curve equals .       Correct.   Incorrect.      Correct.   Incorrect.      "
},
{
  "id": "ex-hw10o-verify-cone",
  "level": "2",
  "url": "sec-exercises-hw10-online.html#ex-hw10o-verify-cone",
  "type": "Exercise",
  "number": "5",
  "title": "Verifying Stokes’ Theorem on a Cone.",
  "body": " Verifying Stokes' Theorem on a Cone             2*a*pi*h^2     Verify Stokes' theorem for   on the cone , , with pointing upward.  The surface integral equals .  The circulation around the boundary curve equals .       Correct.   Incorrect.      Correct.   Incorrect.      "
},
{
  "id": "ex-hw10o-three-theorems",
  "level": "2",
  "url": "sec-exercises-hw10-online.html#ex-hw10o-three-theorems",
  "type": "Exercise",
  "number": "6",
  "title": "One Field, Three Theorems.",
  "body": " One Field, Three Theorems    3*pi\/2    pi\/3    0     Let , let be the paraboloid with , oriented upward, and let be its boundary curve the unit circle in the -plane, traversed counterclockwise as seen from above. Let be the unit disk in the plane , and let be the solid region enclosed between and .  (a) Explain why the space curve integral reduces exactly to a plane integral, and evaluate it using Green's theorem, . Its value is .  (b) Verify your answer using Stokes' theorem, , with the surface : the flux equals . Then explain, without computing, why any surface having as its boundary would give the same flux of .  (c) Use the divergence theorem, , to compute the outward flux of itself through the closed surface : . The flux through the disk alone is , so the flux through the paraboloid alone is .  (d) In (b) you were allowed to swap surfaces freely; in (c) you were not the flux of through and through differ. Reconcile these two facts using the identity  together with the divergence theorem.       Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      "
},
{
  "id": "sec-exercises-review1-practice",
  "level": "1",
  "url": "sec-exercises-review1-practice.html",
  "type": "Section",
  "number": "4.11",
  "title": "Review Problems #1",
  "body": " Review Problems #1   Sections: , , and . Work each problem, then type your answers into the boxes and have them checked here.  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers. Type numbers as decimals to at least three places, with no units and no . Type expressions with * for products and ^ for powers, and write functions with parentheses: cos(t) , sqrt(x) , e^t , ln(s) .     Speed Where the Tangent Line is Horizontal       2*a     The position of an object at time is given by   Find its speed at the points where the tangent line is horizontal.  speed         Correct.     Incorrect.         A Cartesian Equation and a Tangent Line          b^3*x^3+a^3*y^3-a^2*b^2*x*y    (-b\/a)*(x-a\/2)+b\/2     Find a Cartesian equation relating and for the parametric curve   Write your answer in the form , where is a polynomial in and whose coefficient is .      Find the equation of the tangent line to the curve at the point corresponding to .           Correct.     Incorrect.       Correct.     Incorrect.         A Scalar Line Integral Along a Helix          sqrt(2)*(a*pi+pi^(n+1)\/(n+1))     Calculate the integral of over the curve for .           Correct.     Incorrect.         A Vector Line Integral Along an Exponential Path       2*(exp(2*T)-exp(-2*T))-(exp(T)-exp(-T))     Compute the line integral of the vector field over the path for .           Correct.     Incorrect.         A Circle Traced in Space          0     The function traces a circle. Determine the plane containing it, its center, and its radius.   Plane:    Center:  , ,    Radius:        Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.        Time, Distance and Speed of a Moving Object          a+gap       b^3\/3+b-a^3\/3-a    a^2+1     The position vector of an object is   Calculate the time it takes the object to reach ; the distance it travels from until ; and its speed at seconds.    seconds    meters    meters per second       Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.        Work Along a Parabola       a*7\/3+(exp(2)-exp(1))\/2     Evaluate the work done by the force field on a particle that moves along the curve from to .  Work         Correct.   Incorrect.        The Length of an Involute       a^2\/2     Calculate the length of the parametrized curve   Length         Correct.   Incorrect.        The Sign of a Line Integral Around a Closed Curve   Consider the closed curve shown below. For each vector field, decide whether is positive, negative, or zero. Type positive , negative or zero .   :    :    :    The closed curve , with the direction of travel marked on the two straight edges.   A closed curve made of two circular arcs of radius one and two between minus forty-five and plus forty-five degrees, joined by two radial segments, with arrows on the straight edges showing the direction of travel.    fInner(t) = (cos(t), sin(t))  fOuter(t) = (2*cos(t), 2*sin(t))          C          zero Correct.  .* Incorrect.    positive Correct.  .* Incorrect.    negative Correct.  .* Incorrect.        Matching Vector Fields to Their Graphs   Match each of the following vector fields with its graph, entering the letter A , B , C , D or E . The graphs are shown below; in each one a small circle marks the tail of the arrow.   :    :    :    :    :     Graph .   Vector field A: arrows drawn at a grid of points, each with a dot at its tail.                                                                                    Graph .   Vector field B: arrows drawn at a grid of points, each with a dot at its tail.                                                                                    Graph .   Vector field C: arrows drawn at a grid of points, each with a dot at its tail.                                                                                      Graph .   Vector field D: arrows drawn at a grid of points, each with a dot at its tail.                                                                                    Graph .   Vector field E: arrows drawn at a grid of points, each with a dot at its tail.                                                                                       C Correct.  .* Incorrect.    D Correct.  .* Incorrect.    A Correct.  .* Incorrect.    E Correct.  .* Incorrect.    B Correct.  .* Incorrect.        Ordering Three Line Integrals   Consider the vector field shown in together with the paths , and . Arrange the three line integrals , and in ascending order. Type C1 , C2 or C3 in each box.  smallest:  middle:  largest:    The vector field and the three paths , and . Each field vector is drawn with a dot at its tail.   A constant vector field pointing to the right, with three straight paths drawn on it.                                                                                                                                         C_1      C_2      C_3          C2 Correct.  .* Incorrect.    C3 Correct.  .* Incorrect.    C1 Correct.  .* Incorrect.        "
},
{
  "id": "sec-exercises-review1-practice-2-3",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#sec-exercises-review1-practice-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "ex-r1p-cycloid-speed",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#ex-r1p-cycloid-speed",
  "type": "Exercise",
  "number": "1",
  "title": "Speed Where the Tangent Line is Horizontal.",
  "body": " Speed Where the Tangent Line is Horizontal       2*a     The position of an object at time is given by   Find its speed at the points where the tangent line is horizontal.  speed         Correct.     Incorrect.       "
},
{
  "id": "ex-r1p-cartesian-from-parametric",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#ex-r1p-cartesian-from-parametric",
  "type": "Exercise",
  "number": "2",
  "title": "A Cartesian Equation and a Tangent Line.",
  "body": " A Cartesian Equation and a Tangent Line          b^3*x^3+a^3*y^3-a^2*b^2*x*y    (-b\/a)*(x-a\/2)+b\/2     Find a Cartesian equation relating and for the parametric curve   Write your answer in the form , where is a polynomial in and whose coefficient is .      Find the equation of the tangent line to the curve at the point corresponding to .           Correct.     Incorrect.       Correct.     Incorrect.       "
},
{
  "id": "ex-r1p-helix-scalar",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#ex-r1p-helix-scalar",
  "type": "Exercise",
  "number": "3",
  "title": "A Scalar Line Integral Along a Helix.",
  "body": " A Scalar Line Integral Along a Helix          sqrt(2)*(a*pi+pi^(n+1)\/(n+1))     Calculate the integral of over the curve for .           Correct.     Incorrect.       "
},
{
  "id": "ex-r1p-exponential-path",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#ex-r1p-exponential-path",
  "type": "Exercise",
  "number": "4",
  "title": "A Vector Line Integral Along an Exponential Path.",
  "body": " A Vector Line Integral Along an Exponential Path       2*(exp(2*T)-exp(-2*T))-(exp(T)-exp(-T))     Compute the line integral of the vector field over the path for .           Correct.     Incorrect.       "
},
{
  "id": "ex-r1p-circle-in-plane",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#ex-r1p-circle-in-plane",
  "type": "Exercise",
  "number": "5",
  "title": "A Circle Traced in Space.",
  "body": " A Circle Traced in Space          0     The function traces a circle. Determine the plane containing it, its center, and its radius.   Plane:    Center:  , ,    Radius:        Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      "
},
{
  "id": "ex-r1p-speed-distance",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#ex-r1p-speed-distance",
  "type": "Exercise",
  "number": "6",
  "title": "Time, Distance and Speed of a Moving Object.",
  "body": " Time, Distance and Speed of a Moving Object          a+gap       b^3\/3+b-a^3\/3-a    a^2+1     The position vector of an object is   Calculate the time it takes the object to reach ; the distance it travels from until ; and its speed at seconds.    seconds    meters    meters per second       Correct.   Incorrect.      Correct.   Incorrect.      Correct.   Incorrect.      "
},
{
  "id": "ex-r1p-work-parabola",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#ex-r1p-work-parabola",
  "type": "Exercise",
  "number": "7",
  "title": "Work Along a Parabola.",
  "body": " Work Along a Parabola       a*7\/3+(exp(2)-exp(1))\/2     Evaluate the work done by the force field on a particle that moves along the curve from to .  Work         Correct.   Incorrect.      "
},
{
  "id": "ex-r1p-spiral-length",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#ex-r1p-spiral-length",
  "type": "Exercise",
  "number": "8",
  "title": "The Length of an Involute.",
  "body": " The Length of an Involute       a^2\/2     Calculate the length of the parametrized curve   Length         Correct.   Incorrect.      "
},
{
  "id": "ex-r1p-sign-of-circulation",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#ex-r1p-sign-of-circulation",
  "type": "Exercise",
  "number": "9",
  "title": "The Sign of a Line Integral Around a Closed Curve.",
  "body": " The Sign of a Line Integral Around a Closed Curve   Consider the closed curve shown below. For each vector field, decide whether is positive, negative, or zero. Type positive , negative or zero .   :    :    :    The closed curve , with the direction of travel marked on the two straight edges.   A closed curve made of two circular arcs of radius one and two between minus forty-five and plus forty-five degrees, joined by two radial segments, with arrows on the straight edges showing the direction of travel.    fInner(t) = (cos(t), sin(t))  fOuter(t) = (2*cos(t), 2*sin(t))          C          zero Correct.  .* Incorrect.    positive Correct.  .* Incorrect.    negative Correct.  .* Incorrect.      "
},
{
  "id": "ex-r1p-match-fields",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#ex-r1p-match-fields",
  "type": "Exercise",
  "number": "10",
  "title": "Matching Vector Fields to Their Graphs.",
  "body": " Matching Vector Fields to Their Graphs   Match each of the following vector fields with its graph, entering the letter A , B , C , D or E . The graphs are shown below; in each one a small circle marks the tail of the arrow.   :    :    :    :    :     Graph .   Vector field A: arrows drawn at a grid of points, each with a dot at its tail.                                                                                    Graph .   Vector field B: arrows drawn at a grid of points, each with a dot at its tail.                                                                                    Graph .   Vector field C: arrows drawn at a grid of points, each with a dot at its tail.                                                                                      Graph .   Vector field D: arrows drawn at a grid of points, each with a dot at its tail.                                                                                    Graph .   Vector field E: arrows drawn at a grid of points, each with a dot at its tail.                                                                                       C Correct.  .* Incorrect.    D Correct.  .* Incorrect.    A Correct.  .* Incorrect.    E Correct.  .* Incorrect.    B Correct.  .* Incorrect.      "
},
{
  "id": "ex-r1p-order-integrals",
  "level": "2",
  "url": "sec-exercises-review1-practice.html#ex-r1p-order-integrals",
  "type": "Exercise",
  "number": "11",
  "title": "Ordering Three Line Integrals.",
  "body": " Ordering Three Line Integrals   Consider the vector field shown in together with the paths , and . Arrange the three line integrals , and in ascending order. Type C1 , C2 or C3 in each box.  smallest:  middle:  largest:    The vector field and the three paths , and . Each field vector is drawn with a dot at its tail.   A constant vector field pointing to the right, with three straight paths drawn on it.                                                                                                                                         C_1      C_2      C_3          C2 Correct.  .* Incorrect.    C3 Correct.  .* Incorrect.    C1 Correct.  .* Incorrect.      "
},
{
  "id": "sec-exercises-review2-practice",
  "level": "1",
  "url": "sec-exercises-review2-practice.html",
  "type": "Section",
  "number": "4.12",
  "title": "Review Problems #2",
  "body": " Review Problems #2   Sections: , , , , , and .  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.   How to type your answers. Give numbers as decimals to at least three places, with no units and no .     A Double Integral Over a Rectangle          (1\/15)*((a^2+b^2)^(5\/2)-a^5-b^5)     Evaluate .  Answer:        Correct.   Incorrect.        Reversing the Order of Integration          b^2    (2*c\/9)*((b^3+1)^(3\/2)-1)     Evaluate .  Answer:        Correct.   Incorrect.        Converting an Integral to Polar Coordinates       a^2    a^4\/16     Convert to polar coordinates and evaluate   Answer:        Correct.   Incorrect.        A Sector Integral in Polar Form       3*k    k*(1-sqrt(3)\/2)     Sketch the region of integration and evaluate by changing to polar coordinates:   Answer:        Correct.   Incorrect.        Mass of a Solid Under a Plane             a*b    a^2*b^2*(a+b*m)\/24     Find the mass of the solid bounded by the coordinate planes and the plane , if the density is .  mass         Correct.   Incorrect.        A Triple Integral Over a Tetrahedron       a^5\/60     Evaluate , where is the solid tetrahedron with vertices , , and .  Answer:        Correct.   Incorrect.        A Double Integral Over a Triangle       7*a\/8     Evaluate , where is the triangular region with vertices , and .  Answer:        Correct.   Incorrect.        Volume Under a Hyperbolic Paraboloid       40\/3+2*a     Find the volume of the solid that lies under the hyperbolic paraboloid and above the rectangle , .  Volume         Correct.   Incorrect.        A Double Integral Over a Region Under a Logarithm       (1\/(a+1))*((a\/(a+1))*exp(a+1)+1\/(a+1))     Evaluate , where .  Answer:        Correct.   Incorrect.        A Triple Integral in Cylindrical Coordinates       r^2    2*pi*r^2     Evaluate   Answer:        Correct.   Incorrect.        Volume Inside a Sphere and Outside a Cone          a^2    2*pi*a^3*b\/(3*sqrt(b^2+1))     Find the volume of the solid that lies within the sphere , above the -plane, and outside the cone .  Volume         Correct.   Incorrect.        A Triple Integral Over a Wedge       6*k    k     Evaluate over the region given by , , .  Answer:        Correct.   Incorrect.        Matching Polar Regions to Their Integrals   Each integral below is the area of one of the eight shaded regions shown underneath. Match each integral with its region by entering the letter A through H . Every region is drawn on the same scale, and each letter is used exactly once.   :    :    :    :    :    :    :    :     Region .   Polar region A: the quarter disk, shaded.             Region .   Polar region B: a cardioid, shaded.             Region .   Polar region C: an annulus, shaded.              Region .   Polar region D: a disk sitting above the origin, shaded.               Region .   Polar region E: one petal of a rose, shaded.             Region .   Polar region F: the upper half disk, shaded.             Region .   Polar region G: a quarter of an annulus, shaded.             Region .   Polar region H: a disk sitting to the right of the origin, shaded.                C Correct.  .* Incorrect.    F Correct.  .* Incorrect.    A Correct.  .* Incorrect.    B Correct.  .* Incorrect.    H Correct.  .* Incorrect.    E Correct.  .* Incorrect.    G Correct.  .* Incorrect.    D Correct.  .* Incorrect.        Limits of Integration Over a Disk      -rad  rad  -sqrt(rad^2-x^2)  sqrt(rad^2-x^2)  -rad  rad  -sqrt(rad^2-y^2)  sqrt(rad^2-y^2)    Let be the disk of radius centred at the origin, shown below. Write as an iterated integral in each of the two orders. Use sqrt(...) for square roots.   The disk of .   A disk centred at the origin, shaded, with radius r marked on both axes.       r  -r  r  -r  R        with from to and from to .   with from to and from to .     Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.        Limits of Integration Over a Trapezoid      1  3  x-1  4  6*k    Let be the trapezoid with vertices , , and , shown below.   The trapezoid of .   A shaded trapezoid with vertices at one comma zero, three comma two, three comma four and one comma four.       (1,0)  (3,2)  (3,4)  (1,4)  R       Fill in the limits that make an iterated integral in the order : runs from to , and for each such , runs from to .  Using those limits, evaluate :      Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.      Correct.   Incorrect.        An Integral Between Two Circles       (2\/3)*pi*(2*a)^3-(4\/9)*(2*a)^3     Let and let be the region that lies inside the circle and outside the circle , shaded below. The two circles are tangent at .   The region of .   A large disk centred at the origin with a smaller disk removed; the smaller disk is internally tangent to the large one on the positive x axis.        x^2+y^2=(2a)^2  (x-a)^2+y^2=a^2  D       Evaluate :        Correct.   Incorrect.        A Double Integral Between a Parabola and a Line      36*k    Let be the region bounded by the parabola and the line , shaded below.   The region of .   A rightward-opening parabola cut by a slanted line; the region between them is shaded, with corners at minus one comma minus two and five comma four.    par(t) = (t^2\/2-3, t)  lin(t) = (t+1, t)       x = \\frac{y^2}{2}-3  y = x-1  (5,4)  (-1,-2)  R       Evaluate :        Correct.   Incorrect.        A Region Common to a Cardioid and a Circle   -pi\/2  pi\/6  pi\/6  pi\/2  0  0  1+sin(t)  sqrt(3)*cos(t)    Let be the region lying inside both the cardioid and the circle , shaded below. The two curves cross at , where both equal .   The region of .   A cardioid and a circle drawn together; the region inside both is shaded, and the crossing point at theta equals pi over six is marked.    card(t) = ((1+sin(t))*cos(t), (1+sin(t))*sin(t))  circ(t) = (sqrt(3)*cos(t)*cos(t), sqrt(3)*cos(t)*sin(t))       r = 1+\\sin\\theta  r = \\sqrt{3}\\,\\cos\\theta  \\theta = \\pi\/6  R       Writing as a sum of two polar integrals splits at that crossing. Use t for and give exact answers, so pi\/2 rather than a decimal.  First piece: from to , and from to .  Second piece: from to , and from to .     Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.        Volume Under a Surface Over a Square      16\/3+4+4*a    Find the volume of the solid that lies under the surface and above the square , in the -plane.   The solid of : the surface over the square , with the four vertical walls that close it into a solid. The picture is drawn for one value of the constant ; a larger lifts the whole roof without changing its shape, which is why the volume grows by .   A curved surface rising over a square base in the horizontal plane, with the vertical solid beneath it.     Volume:        Correct.   Incorrect.        Volume Under a Plane Over a Triangle      (a-1)\/2    Let be the triangle in the -plane with vertices , and . Find the volume of the solid lying under the plane , with , and above .   The solid of : the plane over the triangle .   A slanted plane above a triangular base in the horizontal plane, the base having corners at the origin, one comma zero and one comma one.     Volume:        Correct.   Incorrect.        Mass of a Solid Inside a Sphere and a Cylinder      3*a\/5    A solid lies inside both the sphere and the cylinder ; the two surfaces are drawn together in . The density of at a point is   Find the mass of :        Correct.   Incorrect.        Which Fields Are Path Independent?   Six vector fields are graphed below. For each one, decide whether is path independent on the whole plane. Enter yes or no .  Field , :   Field , :   Field , :   Field , :   Field , :   Field , :     Field .   Vector field A: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                    Field .   Vector field B: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                    Field .   Vector field C: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                      Field .   Vector field D: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                    Field .   Vector field E: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                    Field .   Vector field F: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                       yes Correct.  .* Incorrect.    yes Correct.  .* Incorrect.    no Correct.  .* Incorrect.    yes Correct.  .* Incorrect.    no Correct.  .* Incorrect.    no Correct.  .* Incorrect.        "
},
{
  "id": "sec-exercises-review2-practice-2-3",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#sec-exercises-review2-practice-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "ex-r2p-xy-sqrt",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-xy-sqrt",
  "type": "Exercise",
  "number": "1",
  "title": "A Double Integral Over a Rectangle.",
  "body": " A Double Integral Over a Rectangle          (1\/15)*((a^2+b^2)^(5\/2)-a^5-b^5)     Evaluate .  Answer:        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-reverse-order",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-reverse-order",
  "type": "Exercise",
  "number": "2",
  "title": "Reversing the Order of Integration.",
  "body": " Reversing the Order of Integration          b^2    (2*c\/9)*((b^3+1)^(3\/2)-1)     Evaluate .  Answer:        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-to-polar",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-to-polar",
  "type": "Exercise",
  "number": "3",
  "title": "Converting an Integral to Polar Coordinates.",
  "body": " Converting an Integral to Polar Coordinates       a^2    a^4\/16     Convert to polar coordinates and evaluate   Answer:        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-sector",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-sector",
  "type": "Exercise",
  "number": "4",
  "title": "A Sector Integral in Polar Form.",
  "body": " A Sector Integral in Polar Form       3*k    k*(1-sqrt(3)\/2)     Sketch the region of integration and evaluate by changing to polar coordinates:   Answer:        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-mass-plane",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-mass-plane",
  "type": "Exercise",
  "number": "5",
  "title": "Mass of a Solid Under a Plane.",
  "body": " Mass of a Solid Under a Plane             a*b    a^2*b^2*(a+b*m)\/24     Find the mass of the solid bounded by the coordinate planes and the plane , if the density is .  mass         Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-tetra-x2",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-tetra-x2",
  "type": "Exercise",
  "number": "6",
  "title": "A Triple Integral Over a Tetrahedron.",
  "body": " A Triple Integral Over a Tetrahedron       a^5\/60     Evaluate , where is the solid tetrahedron with vertices , , and .  Answer:        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-triangle-xy",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-triangle-xy",
  "type": "Exercise",
  "number": "7",
  "title": "A Double Integral Over a Triangle.",
  "body": " A Double Integral Over a Triangle       7*a\/8     Evaluate , where is the triangular region with vertices , and .  Answer:        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-hyperbolic-paraboloid",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-hyperbolic-paraboloid",
  "type": "Exercise",
  "number": "8",
  "title": "Volume Under a Hyperbolic Paraboloid.",
  "body": " Volume Under a Hyperbolic Paraboloid       40\/3+2*a     Find the volume of the solid that lies under the hyperbolic paraboloid and above the rectangle , .  Volume         Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-log-region",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-log-region",
  "type": "Exercise",
  "number": "9",
  "title": "A Double Integral Over a Region Under a Logarithm.",
  "body": " A Double Integral Over a Region Under a Logarithm       (1\/(a+1))*((a\/(a+1))*exp(a+1)+1\/(a+1))     Evaluate , where .  Answer:        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-cylinder-inverse-r",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-cylinder-inverse-r",
  "type": "Exercise",
  "number": "10",
  "title": "A Triple Integral in Cylindrical Coordinates.",
  "body": " A Triple Integral in Cylindrical Coordinates       r^2    2*pi*r^2     Evaluate   Answer:        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-sphere-minus-cone",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-sphere-minus-cone",
  "type": "Exercise",
  "number": "11",
  "title": "Volume Inside a Sphere and Outside a Cone.",
  "body": " Volume Inside a Sphere and Outside a Cone          a^2    2*pi*a^3*b\/(3*sqrt(b^2+1))     Find the volume of the solid that lies within the sphere , above the -plane, and outside the cone .  Volume         Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-wedge",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-wedge",
  "type": "Exercise",
  "number": "12",
  "title": "A Triple Integral Over a Wedge.",
  "body": " A Triple Integral Over a Wedge       6*k    k     Evaluate over the region given by , , .  Answer:        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-match-polar",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-match-polar",
  "type": "Exercise",
  "number": "13",
  "title": "Matching Polar Regions to Their Integrals.",
  "body": " Matching Polar Regions to Their Integrals   Each integral below is the area of one of the eight shaded regions shown underneath. Match each integral with its region by entering the letter A through H . Every region is drawn on the same scale, and each letter is used exactly once.   :    :    :    :    :    :    :    :     Region .   Polar region A: the quarter disk, shaded.             Region .   Polar region B: a cardioid, shaded.             Region .   Polar region C: an annulus, shaded.              Region .   Polar region D: a disk sitting above the origin, shaded.               Region .   Polar region E: one petal of a rose, shaded.             Region .   Polar region F: the upper half disk, shaded.             Region .   Polar region G: a quarter of an annulus, shaded.             Region .   Polar region H: a disk sitting to the right of the origin, shaded.                C Correct.  .* Incorrect.    F Correct.  .* Incorrect.    A Correct.  .* Incorrect.    B Correct.  .* Incorrect.    H Correct.  .* Incorrect.    E Correct.  .* Incorrect.    G Correct.  .* Incorrect.    D Correct.  .* Incorrect.      "
},
{
  "id": "ex-r2p-circle-limits",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-circle-limits",
  "type": "Exercise",
  "number": "14",
  "title": "Limits of Integration Over a Disk.",
  "body": " Limits of Integration Over a Disk      -rad  rad  -sqrt(rad^2-x^2)  sqrt(rad^2-x^2)  -rad  rad  -sqrt(rad^2-y^2)  sqrt(rad^2-y^2)    Let be the disk of radius centred at the origin, shown below. Write as an iterated integral in each of the two orders. Use sqrt(...) for square roots.   The disk of .   A disk centred at the origin, shaded, with radius r marked on both axes.       r  -r  r  -r  R        with from to and from to .   with from to and from to .     Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.      "
},
{
  "id": "ex-r2p-trapezoid-limits",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-trapezoid-limits",
  "type": "Exercise",
  "number": "15",
  "title": "Limits of Integration Over a Trapezoid.",
  "body": " Limits of Integration Over a Trapezoid      1  3  x-1  4  6*k    Let be the trapezoid with vertices , , and , shown below.   The trapezoid of .   A shaded trapezoid with vertices at one comma zero, three comma two, three comma four and one comma four.       (1,0)  (3,2)  (3,4)  (1,4)  R       Fill in the limits that make an iterated integral in the order : runs from to , and for each such , runs from to .  Using those limits, evaluate :      Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.      Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-two-circles",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-two-circles",
  "type": "Exercise",
  "number": "16",
  "title": "An Integral Between Two Circles.",
  "body": " An Integral Between Two Circles       (2\/3)*pi*(2*a)^3-(4\/9)*(2*a)^3     Let and let be the region that lies inside the circle and outside the circle , shaded below. The two circles are tangent at .   The region of .   A large disk centred at the origin with a smaller disk removed; the smaller disk is internally tangent to the large one on the positive x axis.        x^2+y^2=(2a)^2  (x-a)^2+y^2=a^2  D       Evaluate :        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-parabola-line",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-parabola-line",
  "type": "Exercise",
  "number": "17",
  "title": "A Double Integral Between a Parabola and a Line.",
  "body": " A Double Integral Between a Parabola and a Line      36*k    Let be the region bounded by the parabola and the line , shaded below.   The region of .   A rightward-opening parabola cut by a slanted line; the region between them is shaded, with corners at minus one comma minus two and five comma four.    par(t) = (t^2\/2-3, t)  lin(t) = (t+1, t)       x = \\frac{y^2}{2}-3  y = x-1  (5,4)  (-1,-2)  R       Evaluate :        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-polar-overlap",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-polar-overlap",
  "type": "Exercise",
  "number": "18",
  "title": "A Region Common to a Cardioid and a Circle.",
  "body": " A Region Common to a Cardioid and a Circle   -pi\/2  pi\/6  pi\/6  pi\/2  0  0  1+sin(t)  sqrt(3)*cos(t)    Let be the region lying inside both the cardioid and the circle , shaded below. The two curves cross at , where both equal .   The region of .   A cardioid and a circle drawn together; the region inside both is shaded, and the crossing point at theta equals pi over six is marked.    card(t) = ((1+sin(t))*cos(t), (1+sin(t))*sin(t))  circ(t) = (sqrt(3)*cos(t)*cos(t), sqrt(3)*cos(t)*sin(t))       r = 1+\\sin\\theta  r = \\sqrt{3}\\,\\cos\\theta  \\theta = \\pi\/6  R       Writing as a sum of two polar integrals splits at that crossing. Use t for and give exact answers, so pi\/2 rather than a decimal.  First piece: from to , and from to .  Second piece: from to , and from to .     Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.    Correct.  Incorrect.      "
},
{
  "id": "ex-r2p-volume-square",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-volume-square",
  "type": "Exercise",
  "number": "19",
  "title": "Volume Under a Surface Over a Square.",
  "body": " Volume Under a Surface Over a Square      16\/3+4+4*a    Find the volume of the solid that lies under the surface and above the square , in the -plane.   The solid of : the surface over the square , with the four vertical walls that close it into a solid. The picture is drawn for one value of the constant ; a larger lifts the whole roof without changing its shape, which is why the volume grows by .   A curved surface rising over a square base in the horizontal plane, with the vertical solid beneath it.     Volume:        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-volume-triangle",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-volume-triangle",
  "type": "Exercise",
  "number": "20",
  "title": "Volume Under a Plane Over a Triangle.",
  "body": " Volume Under a Plane Over a Triangle      (a-1)\/2    Let be the triangle in the -plane with vertices , and . Find the volume of the solid lying under the plane , with , and above .   The solid of : the plane over the triangle .   A slanted plane above a triangular base in the horizontal plane, the base having corners at the origin, one comma zero and one comma one.     Volume:        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-sphere-cylinder-mass",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-sphere-cylinder-mass",
  "type": "Exercise",
  "number": "21",
  "title": "Mass of a Solid Inside a Sphere and a Cylinder.",
  "body": " Mass of a Solid Inside a Sphere and a Cylinder      3*a\/5    A solid lies inside both the sphere and the cylinder ; the two surfaces are drawn together in . The density of at a point is   Find the mass of :        Correct.   Incorrect.      "
},
{
  "id": "ex-r2p-path-independence",
  "level": "2",
  "url": "sec-exercises-review2-practice.html#ex-r2p-path-independence",
  "type": "Exercise",
  "number": "22",
  "title": "Which Fields Are Path Independent?",
  "body": " Which Fields Are Path Independent?   Six vector fields are graphed below. For each one, decide whether is path independent on the whole plane. Enter yes or no .  Field , :   Field , :   Field , :   Field , :   Field , :   Field , :     Field .   Vector field A: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                    Field .   Vector field B: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                    Field .   Vector field C: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                      Field .   Vector field D: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                    Field .   Vector field E: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                    Field .   Vector field F: arrows drawn at a grid of points, each with a small circle at its tail.                                                                                       yes Correct.  .* Incorrect.    yes Correct.  .* Incorrect.    no Correct.  .* Incorrect.    yes Correct.  .* Incorrect.    no Correct.  .* Incorrect.    no Correct.  .* Incorrect.      "
},
{
  "id": "sec-exercises-review3-practice",
  "level": "1",
  "url": "sec-exercises-review3-practice.html",
  "type": "Section",
  "number": "4.13",
  "title": "Review Problems #3",
  "body": " Review Problems #3   Sections: , , and . Work each problem, then type your answers into the boxes and have them checked here.  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.  Checking an answer tells you whether it is right or wrong and nothing more use the boxes to test yourself. A complete worked solution for every problem will be revealed beneath it once solutions are posted.   How to type your answers.      Give exact answers, not decimals. A rounded decimal will be marked wrong, even to several places. Type the exact value: pi*8^3\/2 rather than 1608.495 , and 4*5\/(3*pi) rather than 2.122 . A whole number or an exact fraction may of course be typed as it stands, so 77 and 7\/3 are both fine.     How to type it. Write products with * and powers with ^ , and write functions with parentheses: sqrt(s-t) , ln(9) , exp(-4) . Use pi for . So is typed u^2\/v , and is typed 2*pi*(exp(-1)-exp(-4)) . Spaces are ignored.     Any equivalent form counts. Your answer is compared to the exact value, not to one particular way of writing it, so 2*pi*exp(-1)-2*pi*exp(-4) is accepted just as readily as 2*pi*(exp(-1)-exp(-4)) . Do not simplify on our account just do not round.          Area by a Non-Linear Change of Variables          a^2    b^2    1    u^2\/v    v\/u    2*u\/v    -u^2\/v^2    -v\/u^2    1\/u    1\/v    (aa-1)*ln(bb)     Compute the area of the region in the first quadrant of the -plane bounded by    Part A. Sketch the region . (Nothing to submit for this part the sketch is for your own use in the parts that follow.)   Part B. Using the non-linear change of variables and , find and as functions of and .           Part C. Find the four partial derivatives in the Jacobian matrix of this change of variables, and then its determinant.    ,      ,         Part D. Using the change of variables, set up a double integral for the area of in the form   , where    ,  ,  , and  .   Part E. Evaluate the double integral to find the area of .  Area          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.           Area of a Tilted Ellipse by a Shear       2*a    a^2+1    s-a*t    t    1    pi     Use the change of variables , to find the area of the region bounded by    Part A. Invert the change of variables.    ,     Part B. Find the Jacobian determinant .       Part C. Find the area of the region.  Area          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.           A Double Integral Under a Parabolic Change of Variables          b^2    -a    0    sqrt(s-t)    s    1\/(2*sqrt(s-t))    1\/2    a*bsq\/2     Use the change of variables , to evaluate over the region in the first quadrant bounded by , , , and .   Part A. Invert the change of variables. (Take the positive square root, since lies in the first quadrant.)    ,     Part B. Find the Jacobian determinant.       Part C. The region becomes a rectangle in the -plane. Give its limits.   runs from to , and runs from to .   Part D. After the substitution, the integrand times the Jacobian simplifies to a constant. What is it?       Part E. Evaluate the integral.            Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.           A Triple Integral Over an Ellipsoid             a*b*c    4*a*b*c*pi\/5     Calculate the triple integral   where is the region bounded by the ellipsoid .   Part A. Use the change of variables , , , which carries to the unit ball. What is the Jacobian determinant ?       Part B. Evaluate the triple integral.            Correct.       Incorrect.         Correct.       Incorrect.           Centre of Mass of a Tetrahedron       8*k\/105    2\/9    2\/9    1\/3     Find the centre of mass of the solid bounded by the planes , , , and , assuming a mass density of .   Part A. Find the mass of the solid.       Part B. Find the coordinates of the centre of mass.    ,  ,          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.           Mass and Centre of Mass of a Rectangular Lamina                   A^2*B*C\/2+B^2*D*A\/2+E*A*B    C*A^3*B\/3+D*A^2*B^2\/4+E*A^2*B\/2    C*A^2*B^2\/4+D*A*B^3\/3+E*A*B^2\/2    xmom\/mass    ymom\/mass     A lamina occupies the part of the rectangle , , and the density at each point is given by the function .   Part A. What is the total mass?       Part B. Where is the centre of mass?    ,          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.           Volume Between Two Spheres in Spherical Coordinates       pi*a^3\/2     Find the volume of the region outside the sphere and inside the half sphere , with .  Volume          Correct.       Incorrect.           A Triple Integral Over a Spherical Shell          r0+gap    (r1^3-r0^3)\/3    pi*(r1^3-r0^3)\/3     Evaluate, in spherical coordinates, the triple integral of over the region , , .   Part A. The -integral separates from the rest. Evaluate it.       Part B. Evaluate the whole integral.  Integral          Correct.       Incorrect.         Correct.       Incorrect.           An Exponential Integral Between Two Spheres          a+gap    a^2    b^2    2*pi*(exp(-asq)-exp(-bsq))     Use spherical coordinates to evaluate the triple integral   where is the region bounded by the spheres and .  Answer          Correct.       Incorrect.           The Jacobian of a Linear Transformation                p*s-q*r    p    q    r    s     Consider the transformation from -coordinates to -coordinates given by    Part A. Find the four partial derivatives.    ,  ,  ,     Part B. Compute the Jacobian of this transformation.            Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.           A Quadratic Map and the Integral It Simplifies       u^2+v^2    4*(u^2+v^2)    56*a^6\/45     The map carries the triangle onto the domain in the first quadrant bounded by , , and the parabola through the image of the edge . Use to evaluate    Part A. Express the integrand in terms of and .       Part B. Find the Jacobian of .       Part C. Evaluate the integral.            Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.           Centre of Gravity of a Region Between Two Curves          0    (-m+sqrt(m^2+4*b))\/2    m*x    b-x^2    xstar^6\/12+(-b-m^2\/2)*xstar^4\/4+b^2*xstar^2\/4    xstar^7\/14+(-b-m^2\/2)*xstar^5\/5+b^2*xstar^3\/6    -xstar^8\/24+b*xstar^6\/6-m^3*xstar^5\/15-b^2*xstar^4\/4+b^3*xstar^2\/6    xmom\/mass    ymom\/mass     The region is bounded by the curves , , and the -axis, and its mass density is . To find the centre of gravity of you would compute the three integrals , , and , where    ,      ,                and finally the centre of gravity is    ,          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.           Centre of Mass of a Quarter Disc       4*r\/(3*pi)     The centre of mass of the quarter disc of radius lying under for , with constant density, is a point .    ,     Hint. Use symmetry.        Correct.       Incorrect.         Correct.       Incorrect.        "
},
{
  "id": "sec-exercises-review3-practice-2-4",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#sec-exercises-review3-practice-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "sec-exercises-review3-practice-2-5-1-1",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#sec-exercises-review3-practice-2-5-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Give exact answers, not decimals. "
},
{
  "id": "sec-exercises-review3-practice-2-5-2-1",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#sec-exercises-review3-practice-2-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type it. "
},
{
  "id": "sec-exercises-review3-practice-2-5-3-1",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#sec-exercises-review3-practice-2-5-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Any equivalent form counts. "
},
{
  "id": "ex-r3p-area-change-of-variables",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-area-change-of-variables",
  "type": "Exercise",
  "number": "1",
  "title": "Area by a Non-Linear Change of Variables.",
  "body": " Area by a Non-Linear Change of Variables          a^2    b^2    1    u^2\/v    v\/u    2*u\/v    -u^2\/v^2    -v\/u^2    1\/u    1\/v    (aa-1)*ln(bb)     Compute the area of the region in the first quadrant of the -plane bounded by    Part A. Sketch the region . (Nothing to submit for this part the sketch is for your own use in the parts that follow.)   Part B. Using the non-linear change of variables and , find and as functions of and .           Part C. Find the four partial derivatives in the Jacobian matrix of this change of variables, and then its determinant.    ,      ,         Part D. Using the change of variables, set up a double integral for the area of in the form   , where    ,  ,  , and  .   Part E. Evaluate the double integral to find the area of .  Area          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-shear-ellipse-area",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-shear-ellipse-area",
  "type": "Exercise",
  "number": "2",
  "title": "Area of a Tilted Ellipse by a Shear.",
  "body": " Area of a Tilted Ellipse by a Shear       2*a    a^2+1    s-a*t    t    1    pi     Use the change of variables , to find the area of the region bounded by    Part A. Invert the change of variables.    ,     Part B. Find the Jacobian determinant .       Part C. Find the area of the region.  Area          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-parabolic-strip",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-parabolic-strip",
  "type": "Exercise",
  "number": "3",
  "title": "A Double Integral Under a Parabolic Change of Variables.",
  "body": " A Double Integral Under a Parabolic Change of Variables          b^2    -a    0    sqrt(s-t)    s    1\/(2*sqrt(s-t))    1\/2    a*bsq\/2     Use the change of variables , to evaluate over the region in the first quadrant bounded by , , , and .   Part A. Invert the change of variables. (Take the positive square root, since lies in the first quadrant.)    ,     Part B. Find the Jacobian determinant.       Part C. The region becomes a rectangle in the -plane. Give its limits.   runs from to , and runs from to .   Part D. After the substitution, the integrand times the Jacobian simplifies to a constant. What is it?       Part E. Evaluate the integral.            Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-ellipsoid-integral",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-ellipsoid-integral",
  "type": "Exercise",
  "number": "4",
  "title": "A Triple Integral Over an Ellipsoid.",
  "body": " A Triple Integral Over an Ellipsoid             a*b*c    4*a*b*c*pi\/5     Calculate the triple integral   where is the region bounded by the ellipsoid .   Part A. Use the change of variables , , , which carries to the unit ball. What is the Jacobian determinant ?       Part B. Evaluate the triple integral.            Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-tetrahedron-com",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-tetrahedron-com",
  "type": "Exercise",
  "number": "5",
  "title": "Centre of Mass of a Tetrahedron.",
  "body": " Centre of Mass of a Tetrahedron       8*k\/105    2\/9    2\/9    1\/3     Find the centre of mass of the solid bounded by the planes , , , and , assuming a mass density of .   Part A. Find the mass of the solid.       Part B. Find the coordinates of the centre of mass.    ,  ,          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-lamina-rectangle",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-lamina-rectangle",
  "type": "Exercise",
  "number": "6",
  "title": "Mass and Centre of Mass of a Rectangular Lamina.",
  "body": " Mass and Centre of Mass of a Rectangular Lamina                   A^2*B*C\/2+B^2*D*A\/2+E*A*B    C*A^3*B\/3+D*A^2*B^2\/4+E*A^2*B\/2    C*A^2*B^2\/4+D*A*B^3\/3+E*A*B^2\/2    xmom\/mass    ymom\/mass     A lamina occupies the part of the rectangle , , and the density at each point is given by the function .   Part A. What is the total mass?       Part B. Where is the centre of mass?    ,          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-sphere-minus-sphere",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-sphere-minus-sphere",
  "type": "Exercise",
  "number": "7",
  "title": "Volume Between Two Spheres in Spherical Coordinates.",
  "body": " Volume Between Two Spheres in Spherical Coordinates       pi*a^3\/2     Find the volume of the region outside the sphere and inside the half sphere , with .  Volume          Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-spherical-shell",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-spherical-shell",
  "type": "Exercise",
  "number": "8",
  "title": "A Triple Integral Over a Spherical Shell.",
  "body": " A Triple Integral Over a Spherical Shell          r0+gap    (r1^3-r0^3)\/3    pi*(r1^3-r0^3)\/3     Evaluate, in spherical coordinates, the triple integral of over the region , , .   Part A. The -integral separates from the rest. Evaluate it.       Part B. Evaluate the whole integral.  Integral          Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-gaussian-shell",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-gaussian-shell",
  "type": "Exercise",
  "number": "9",
  "title": "An Exponential Integral Between Two Spheres.",
  "body": " An Exponential Integral Between Two Spheres          a+gap    a^2    b^2    2*pi*(exp(-asq)-exp(-bsq))     Use spherical coordinates to evaluate the triple integral   where is the region bounded by the spheres and .  Answer          Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-linear-jacobian",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-linear-jacobian",
  "type": "Exercise",
  "number": "10",
  "title": "The Jacobian of a Linear Transformation.",
  "body": " The Jacobian of a Linear Transformation                p*s-q*r    p    q    r    s     Consider the transformation from -coordinates to -coordinates given by    Part A. Find the four partial derivatives.    ,  ,  ,     Part B. Compute the Jacobian of this transformation.            Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-quadratic-map",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-quadratic-map",
  "type": "Exercise",
  "number": "11",
  "title": "A Quadratic Map and the Integral It Simplifies.",
  "body": " A Quadratic Map and the Integral It Simplifies       u^2+v^2    4*(u^2+v^2)    56*a^6\/45     The map carries the triangle onto the domain in the first quadrant bounded by , , and the parabola through the image of the edge . Use to evaluate    Part A. Express the integrand in terms of and .       Part B. Find the Jacobian of .       Part C. Evaluate the integral.            Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-centre-of-gravity",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-centre-of-gravity",
  "type": "Exercise",
  "number": "12",
  "title": "Centre of Gravity of a Region Between Two Curves.",
  "body": " Centre of Gravity of a Region Between Two Curves          0    (-m+sqrt(m^2+4*b))\/2    m*x    b-x^2    xstar^6\/12+(-b-m^2\/2)*xstar^4\/4+b^2*xstar^2\/4    xstar^7\/14+(-b-m^2\/2)*xstar^5\/5+b^2*xstar^3\/6    -xstar^8\/24+b*xstar^6\/6-m^3*xstar^5\/15-b^2*xstar^4\/4+b^3*xstar^2\/6    xmom\/mass    ymom\/mass     The region is bounded by the curves , , and the -axis, and its mass density is . To find the centre of gravity of you would compute the three integrals , , and , where    ,      ,                and finally the centre of gravity is    ,          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r3p-quarter-disc-com",
  "level": "2",
  "url": "sec-exercises-review3-practice.html#ex-r3p-quarter-disc-com",
  "type": "Exercise",
  "number": "13",
  "title": "Centre of Mass of a Quarter Disc.",
  "body": " Centre of Mass of a Quarter Disc       4*r\/(3*pi)     The centre of mass of the quarter disc of radius lying under for , with constant density, is a point .    ,     Hint. Use symmetry.        Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "sec-exercises-review4-practice",
  "level": "1",
  "url": "sec-exercises-review4-practice.html",
  "type": "Section",
  "number": "4.14",
  "title": "Review Problems #4",
  "body": " Review Problems #4   Sections: , , and . Work each problem, then type your answers into the boxes and have them checked here.  Every answer box is graded separately, so a box you fill in correctly earns its credit even if another box in the same problem is wrong. Press Check Me to submit; you may check as often as you like.  Checking an answer tells you whether it is right or wrong and nothing more use the boxes to test yourself. A complete worked solution for every problem will be revealed beneath it once solutions are posted.   How to type your answers.      Numbers. Type a decimal number and nothing else no units, no sign, no . Give at least three decimal places (for instance 18.850 , not 6pi ). Answers are accepted within a small tolerance, so a little rounding is fine.     Expressions. Type only the expression itself. Write products with * and powers with ^ , and write functions with parentheses: cos(u) , sqrt(x^2+y^2) , e^z . So the expression is typed 2*x + e^z . Spaces are ignored.     Words. Type just the word or letters asked for, in lower case unless the problem says otherwise.          Outward Flux Through the Surface of a Box                0    2*A*x+e^z    A*p^2*q*s+p*q*(e^s-1)    A*x^2+z^4+e^z     Evaluate the outward flux of the vector field   through the surface of the solid box given by , , .   Part A. By the Divergence Theorem the flux equals   , where    ,  ,  ,  ,  , and  .   Part B. Evaluate the integral that you set up in the previous part.  Flux  .        Correct.       Incorrect.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.           The Box With the Largest Flux          2*k       k*(2*A*a-a^2)*b*c    k*A^2*M^2     Let and .  (a) Find the flux of out of the rectangular solid , , , as an expression in , and .  flux    (b) For what values of , , is the flux largest?    ,  ,    (c) What is that largest flux?  flux          Correct.       Incorrect.         Correct.       Incorrect.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.           Verifying the Divergence Theorem on a Cylinder                A*h*pi     Verify the Divergence Theorem for the vector field and region:   and the region , . Give each side as a decimal number.                Correct.       Incorrect.         Correct.       Incorrect.           Flux Through a Sphere       R^2       3*x^2+3*z^2    8*pi*R^5\/5     Use the Divergence Theorem to evaluate the surface integral , where   and is the sphere , oriented outward.                Correct.       Incorrect.         Correct.       Incorrect.           Flux Through a Paraboloid Cap             (2*u-1)*t    1+a^2    b*(a^4\/2+a^2)*pi     Let . Use the Divergence Theorem to find the flux of across the part of the paraboloid that lies above the plane and is oriented upward.    (a number)            Correct.       Incorrect.         Correct.       Incorrect.           Radial Field Through a Closed Cylinder          3    6*pi*R^2*L     Compute the flux of the vector field through the surface , which is a closed cylinder of radius centered on the -axis, with , and oriented outward.    (a number)  Flux          Correct.       Incorrect.         Correct.       Incorrect.           Flux Through a Helicoid       w\/2    (w\/2)*(sin(u)-cos(u)+v)    (w\/2)*(2+pi\/2)    (w\/2)*(cos(u)-sin(u)-v)     Evaluate , where the vector field and the parametrized surface is the helicoid   oriented upward.  First compute the integrand (as an expression in and ):              Correct.       Incorrect.       Incorrect.         Correct.       Incorrect.           Flux Through a Paraboloid, Directly          R^2    2*a*(x^2+y^2)    pi*a*R^4     Compute the flux of the vector field through the surface , which is the part of the surface above the disk of radius centered at the origin, oriented upward .  Writing , we have , so (as an expression in and )    Flux          Correct.       Incorrect.         Correct.       Incorrect.           The parallelogram of , with its orientation. Note the direction of the arrows.   A parallelogram anchored at the origin with arrows showing its boundary orientation.            (0,0)    (x_0,0)    (x_0,y_0)    (2x_0,y_0)                  Work Around a Parallelogram                A    x0*y0    -A*x0*y0    A*x0*y0     Use Green's Theorem to evaluate the work done by in moving an object around the boundary of the parallelogram in ( note the orientation ), with and . Assume that the object circulates only once around the boundary and that its motion begins at the origin and ends at the same point.  With , first compute (a number):    The area of the parallelogram is .  Work          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.       Incorrect.           Three Gradient Fields and the Unit Circle             a1*x*y    a3*sqrt(x^2+y^2)    0    -2*pi*a2    2*pi*a2     (a) Each of the vector fields   is a gradient vector field on some domain (not necessarily the whole plane). Find potential functions for and , choosing the constant so that the potential is at the origin; and find the constant for the potential of .  For :    For : with    For :    (b) Find the line integrals of , , around the curve given to be the unit circle in the -plane, centered at the origin, and traversed counterclockwise.    ,  ,    (c) For which of the three vector fields can Green's Theorem be used to calculate the line integral in part (b)? Type the letters of all that apply, with no spaces (for example fg ):    (Be sure that you are able to explain why or why not.)         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.       Incorrect.         Correct.       Incorrect.       f   Correct.     fgh   Incorrect.     .*   Incorrect.           Circulation Around a Rectangle             -a*x    -a*x0^2*y0\/2    a*x     Use Green's Theorem to calculate the circulation of around the rectangle , , oriented counterclockwise.  With , first compute (as an expression in and ):    circulation          Correct.       Incorrect.       Incorrect.         Correct.       Incorrect.           Circulation Around a Circle                   c2+(2*u-1)*d0       (2*u-1)*d0    (2*u-1)*d0*pi*m^2     Calculate , where is the circular path with center and radius , oriented counterclockwise. Use Green's Theorem.  With , first compute (a number):              Correct.       Incorrect.         Correct.       Incorrect.           Divergence of a Family of Radial Fields          -2+pp    -2-qq    2+A    A    -2     Let and consider the vector field , where and is a constant. has no -component and is independent of .  (a) Find , and show that it can be written in the form . As expressions in :    , and  .  (b) For what values of is positive, negative, or zero?   is positive for  , negative for  , and zero for  .  (c) Suppose that . What is the sign of the flux out of a small sphere centered at ? Type positive or negative :   If instead , what is the sign of the flux out of a small sphere centered at ?    (Be sure you can say how your answers in part (c) would change if the question were about a small sphere centered at .)         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.       positive   Correct.     .*   Incorrect.       negative   Correct.     .*   Incorrect.           Flux Through a Slanted Cylinder Band       R^2          z0+dz    2*pi*R^2*dz     Compute the flux of through the surface of the cylinder bounded below by the plane , above by the plane , and oriented away from the -axis . Note that we are only interested in the flux through the curved surface of the cylinder.  On the cylinder,  (a number).  Flux          Correct.       Incorrect.         Correct.       Incorrect.           Flux Out of a Closed Cone                2*a*y    a*r^4*pi\/2     Find the flux of out of the closed cone , with .    (an expression in , , )  flux          Correct.       Incorrect.         Correct.       Incorrect.           Flux Through the Surface of a Tetrahedron             1+x    a*b*c*(a+4)\/24    a*b*c\/6     Use the Divergence Theorem to calculate the flux of across , where and is the surface of the tetrahedron enclosed by the coordinate planes and the plane     (an expression in , , )            Correct.       Incorrect.         Correct.       Incorrect.       Incorrect.        "
},
{
  "id": "sec-exercises-review4-practice-2-4",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#sec-exercises-review4-practice-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "How to type your answers. "
},
{
  "id": "sec-exercises-review4-practice-2-5-1-1",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#sec-exercises-review4-practice-2-5-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Numbers. "
},
{
  "id": "sec-exercises-review4-practice-2-5-2-1",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#sec-exercises-review4-practice-2-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Expressions. "
},
{
  "id": "sec-exercises-review4-practice-2-5-3-1",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#sec-exercises-review4-practice-2-5-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Words. "
},
{
  "id": "ex-r4p-box-flux",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-box-flux",
  "type": "Exercise",
  "number": "1",
  "title": "Outward Flux Through the Surface of a Box.",
  "body": " Outward Flux Through the Surface of a Box                0    2*A*x+e^z    A*p^2*q*s+p*q*(e^s-1)    A*x^2+z^4+e^z     Evaluate the outward flux of the vector field   through the surface of the solid box given by , , .   Part A. By the Divergence Theorem the flux equals   , where    ,  ,  ,  ,  , and  .   Part B. Evaluate the integral that you set up in the previous part.  Flux  .        Correct.       Incorrect.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r4p-box-div-max",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-box-div-max",
  "type": "Exercise",
  "number": "2",
  "title": "The Box With the Largest Flux.",
  "body": " The Box With the Largest Flux          2*k       k*(2*A*a-a^2)*b*c    k*A^2*M^2     Let and .  (a) Find the flux of out of the rectangular solid , , , as an expression in , and .  flux    (b) For what values of , , is the flux largest?    ,  ,    (c) What is that largest flux?  flux          Correct.       Incorrect.         Correct.       Incorrect.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r4p-verify-cylinder",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-verify-cylinder",
  "type": "Exercise",
  "number": "3",
  "title": "Verifying the Divergence Theorem on a Cylinder.",
  "body": " Verifying the Divergence Theorem on a Cylinder                A*h*pi     Verify the Divergence Theorem for the vector field and region:   and the region , . Give each side as a decimal number.                Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r4p-sphere",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-sphere",
  "type": "Exercise",
  "number": "4",
  "title": "Flux Through a Sphere.",
  "body": " Flux Through a Sphere       R^2       3*x^2+3*z^2    8*pi*R^5\/5     Use the Divergence Theorem to evaluate the surface integral , where   and is the sphere , oriented outward.                Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r4p-paraboloid-cap",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-paraboloid-cap",
  "type": "Exercise",
  "number": "5",
  "title": "Flux Through a Paraboloid Cap.",
  "body": " Flux Through a Paraboloid Cap             (2*u-1)*t    1+a^2    b*(a^4\/2+a^2)*pi     Let . Use the Divergence Theorem to find the flux of across the part of the paraboloid that lies above the plane and is oriented upward.    (a number)            Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r4p-cylinder-x-axis",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-cylinder-x-axis",
  "type": "Exercise",
  "number": "6",
  "title": "Radial Field Through a Closed Cylinder.",
  "body": " Radial Field Through a Closed Cylinder          3    6*pi*R^2*L     Compute the flux of the vector field through the surface , which is a closed cylinder of radius centered on the -axis, with , and oriented outward.    (a number)  Flux          Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r4p-helicoid",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-helicoid",
  "type": "Exercise",
  "number": "7",
  "title": "Flux Through a Helicoid.",
  "body": " Flux Through a Helicoid       w\/2    (w\/2)*(sin(u)-cos(u)+v)    (w\/2)*(2+pi\/2)    (w\/2)*(cos(u)-sin(u)-v)     Evaluate , where the vector field and the parametrized surface is the helicoid   oriented upward.  First compute the integrand (as an expression in and ):              Correct.       Incorrect.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r4p-paraboloid-updisk",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-paraboloid-updisk",
  "type": "Exercise",
  "number": "8",
  "title": "Flux Through a Paraboloid, Directly.",
  "body": " Flux Through a Paraboloid, Directly          R^2    2*a*(x^2+y^2)    pi*a*R^4     Compute the flux of the vector field through the surface , which is the part of the surface above the disk of radius centered at the origin, oriented upward .  Writing , we have , so (as an expression in and )    Flux          Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "fig-r4p-parallelogram",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#fig-r4p-parallelogram",
  "type": "Figure",
  "number": "4.14.1",
  "title": "",
  "body": " The parallelogram of , with its orientation. Note the direction of the arrows.   A parallelogram anchored at the origin with arrows showing its boundary orientation.            (0,0)    (x_0,0)    (x_0,y_0)    (2x_0,y_0)                "
},
{
  "id": "ex-r4p-parallelogram",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-parallelogram",
  "type": "Exercise",
  "number": "9",
  "title": "Work Around a Parallelogram.",
  "body": " Work Around a Parallelogram                A    x0*y0    -A*x0*y0    A*x0*y0     Use Green's Theorem to evaluate the work done by in moving an object around the boundary of the parallelogram in ( note the orientation ), with and . Assume that the object circulates only once around the boundary and that its motion begins at the origin and ends at the same point.  With , first compute (a number):    The area of the parallelogram is .  Work          Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.       Incorrect.      "
},
{
  "id": "ex-r4p-three-fields",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-three-fields",
  "type": "Exercise",
  "number": "10",
  "title": "Three Gradient Fields and the Unit Circle.",
  "body": " Three Gradient Fields and the Unit Circle             a1*x*y    a3*sqrt(x^2+y^2)    0    -2*pi*a2    2*pi*a2     (a) Each of the vector fields   is a gradient vector field on some domain (not necessarily the whole plane). Find potential functions for and , choosing the constant so that the potential is at the origin; and find the constant for the potential of .  For :    For : with    For :    (b) Find the line integrals of , , around the curve given to be the unit circle in the -plane, centered at the origin, and traversed counterclockwise.    ,  ,    (c) For which of the three vector fields can Green's Theorem be used to calculate the line integral in part (b)? Type the letters of all that apply, with no spaces (for example fg ):    (Be sure that you are able to explain why or why not.)         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.       Incorrect.         Correct.       Incorrect.       f   Correct.     fgh   Incorrect.     .*   Incorrect.      "
},
{
  "id": "ex-r4p-rect-circulation",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-rect-circulation",
  "type": "Exercise",
  "number": "11",
  "title": "Circulation Around a Rectangle.",
  "body": " Circulation Around a Rectangle             -a*x    -a*x0^2*y0\/2    a*x     Use Green's Theorem to calculate the circulation of around the rectangle , , oriented counterclockwise.  With , first compute (as an expression in and ):    circulation          Correct.       Incorrect.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r4p-circle-green",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-circle-green",
  "type": "Exercise",
  "number": "12",
  "title": "Circulation Around a Circle.",
  "body": " Circulation Around a Circle                   c2+(2*u-1)*d0       (2*u-1)*d0    (2*u-1)*d0*pi*m^2     Calculate , where is the circular path with center and radius , oriented counterclockwise. Use Green's Theorem.  With , first compute (a number):              Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r4p-radial-power",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-radial-power",
  "type": "Exercise",
  "number": "13",
  "title": "Divergence of a Family of Radial Fields.",
  "body": " Divergence of a Family of Radial Fields          -2+pp    -2-qq    2+A    A    -2     Let and consider the vector field , where and is a constant. has no -component and is independent of .  (a) Find , and show that it can be written in the form . As expressions in :    , and  .  (b) For what values of is positive, negative, or zero?   is positive for  , negative for  , and zero for  .  (c) Suppose that . What is the sign of the flux out of a small sphere centered at ? Type positive or negative :   If instead , what is the sign of the flux out of a small sphere centered at ?    (Be sure you can say how your answers in part (c) would change if the question were about a small sphere centered at .)         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.         Correct.       Incorrect.       positive   Correct.     .*   Incorrect.       negative   Correct.     .*   Incorrect.      "
},
{
  "id": "ex-r4p-cylinder-band",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-cylinder-band",
  "type": "Exercise",
  "number": "14",
  "title": "Flux Through a Slanted Cylinder Band.",
  "body": " Flux Through a Slanted Cylinder Band       R^2          z0+dz    2*pi*R^2*dz     Compute the flux of through the surface of the cylinder bounded below by the plane , above by the plane , and oriented away from the -axis . Note that we are only interested in the flux through the curved surface of the cylinder.  On the cylinder,  (a number).  Flux          Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r4p-cone",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-cone",
  "type": "Exercise",
  "number": "15",
  "title": "Flux Out of a Closed Cone.",
  "body": " Flux Out of a Closed Cone                2*a*y    a*r^4*pi\/2     Find the flux of out of the closed cone , with .    (an expression in , , )  flux          Correct.       Incorrect.         Correct.       Incorrect.      "
},
{
  "id": "ex-r4p-tetrahedron",
  "level": "2",
  "url": "sec-exercises-review4-practice.html#ex-r4p-tetrahedron",
  "type": "Exercise",
  "number": "16",
  "title": "Flux Through the Surface of a Tetrahedron.",
  "body": " Flux Through the Surface of a Tetrahedron             1+x    a*b*c*(a+4)\/24    a*b*c\/6     Use the Divergence Theorem to calculate the flux of across , where and is the surface of the tetrahedron enclosed by the coordinate planes and the plane     (an expression in , , )            Correct.       Incorrect.         Correct.       Incorrect.       Incorrect.      "
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
