var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "intro",
  "level": "1",
  "url": "intro.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  This book covers the same vector calculus as a traditional printed text line integrals, multiple integrals, and the big theorems that tie them together but it was written from the start as an interactive, accessible web book rather than a printed page. This preface points out what that makes possible, and what you will find here that a conventional textbook cannot offer.   Special features of this book      Answer boxes that check your work instantly. The assignments and review problems are not just lists of exercises: each problem carries answer boxes that grade themselves the moment you press Check Me , as many times as you like. Each box is checked on its own, so you learn exactly which part of a long computation went wrong something no printed answer key in the back of a book can tell you.     Problems that draw their own numbers. Many problems build themselves from randomly chosen constants, so the numbers in front of you are not the numbers in front of the student beside you. Press Randomize and the same problem comes back with a fresh set of numbers, so you can practise a method until it is yours rather than memorizing one answer.     A Socratic tutor that will not tell you the answer. Every assignment page carries a tutor button in the corner. It knows the problems on that page and coaches you the way a good office hour does with questions and small hints, never with the answer handed over. It stays docked as you scroll, so you can read a problem and talk about it at the same time. See Using the AI Tutor , at the top of the Assignments and Review Problems chapter, for how to set it up. The review sets deliberately do not have it: those are rehearsal for exams, where you are on your own.     Questions while you read, not only at the end. Each section closes with a Concept Check , and worked questions sit inside the sections themselves, complete with answers. You find out whether you followed an idea while it is still in front of you, instead of discovering it days later on the homework.     Solutions that arrive where you need them. After each assignment's due date, a complete worked solution appears directly beneath every one of its problems on the same page where you worked them rather than in a separate solutions manual. The review problem sets get their solutions the same way.     A clickable map of the whole course. The big picture map in this front matter draws every integral of the course on one page, with arrows showing what builds on what and gold arrows marking the theorems that bridge the integral types. Every topic on the map is a link into the part of the book where it is covered.     Figures you can move. Many figures are live GeoGebra worksheets: you can rotate a solid of integration with your own hands, drag sliders to refine a Riemann sum box by box, and watch a region of integration change shape instead of staring at one frozen perspective drawing.     Ideas that move. More than forty short animations run through the book: a curve tracing itself out as its parameter runs, a Riemann partition refining, a region sweeping out in polar coordinates, a change of variables bending a grid. The proofs of Green's theorem, Stokes' theorem, and the divergence theorem get their own, showing internal boundaries cancelling the way an instructor would build it up at the board.     Nothing is a page-flip away. Every reference to a definition, theorem, equation, or figure opens where you are standing, so checking what a symbol meant never costs you your place. A search box on every page finds any word in the book.     Free, current, and everywhere. The book costs nothing, opens on a phone, a tablet, or a laptop, and can be corrected and improved continuously a fixed typo or a clearer example reaches every reader the same day, with no second edition to buy.       Accessibility  Accessibility is a design goal of this book, not an afterthought. The book is built with PreTeXt, which produces web pages designed to support diverse learners, including readers who use assistive technology:      Mathematics a screen reader can speak. Every formula is real mathematical notation, not a picture of one. Screen readers can read expressions aloud piece by piece, and readers can magnify or explore any formula without it turning into a blur.     Figures built to be described and touched. Diagrams are generated from descriptions of their mathematical content, so the same figure can carry text alternatives for screen readers and can be produced as tactile graphics for readers who are blind or have low vision.     Navigation without a mouse. The book has a consistent structure chapters, sections, and a table of contents on every page that can be traversed entirely from the keyboard.     Type and layout that adapt to the reader. Text reflows to fit any screen and any zoom level, so enlarging the type never forces sideways scrolling, and the reading experience is the same on a phone as on a desktop monitor.     If any part of this book does not work well with the tools you use to read it, please let the author know, so it can be fixed for you and for every reader after you.   "
},
{
  "id": "intro-3-2",
  "level": "2",
  "url": "intro.html#intro-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Concept Check "
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
  "body": " Parametrization of Curves     Describe the motion of a point in the plane with a pair of parametric equations and , and understand the parameter as recording when the point visits each place on the curve.    Sketch a parametric curve from its parametric equations, and indicate the direction of increasing in which the curve is traced.    Find parametric equations for common curves, such as lines, circles, and ellipses, and eliminate the parameter to recover a Cartesian equation when possible.    Distinguish the intersection points of two parametric curves from their collision points , where two moving objects reach the same place at the same time.    Write a space curve as a vector function , and parametrize the curve in which two surfaces meet.    Differentiate a vector function to get the tangent vector of a space curve, and write the equation of the tangent line at a point of the curve.      Imagine that you would like to describe the motion of an object whose motion is confined to a plane. If you know how its Cartesian coordinates, and , change as time passes, you will be able to draw a curve that represents the trajectory of its motion. Mathematically, we will need two equations to demonstrate how the and -coordinates evolve in time , which are known as the parametric equations. This section reviews that language and then extends it to curves in space, where it becomes the main tool for everything that follows.     Parametric Equations   Parametric Equations   If and are given as functions of a third variable , called a parameter , by   then the points trace out a curve in the plane, called a parametric curve . The equations and are the parametric equations of the curve.    As runs over its interval, the point moves, and the trail it leaves behind is the curve. The parameter therefore carries more information than the picture does: it also records when the moving point is at each place, as in .   The trajectory of a moving point whose coordinates are given by the parametric equations , . At the instant the point is at .   A curved trajectory in the plane with a marked point and dashed lines dropping to the two coordinate axes.   A smooth curve rises and falls across the first quadrant from a starting point A, reached at time t equals a, to an ending point B, reached at time t equals b. A single point on the curve is marked; dashed gray segments run from it straight down to the x axis, where the value is labeled f of t nought, and straight left to the y axis, where the value is labeled g of t nought. An arrow on the curve shows the direction of increasing t.     c(t) = (t, 2 + sin(t))  t0 = 2  P = c(t0)       C       A,\\ t=a     B,\\ t=b         \\left(f(t_0),g(t_0)\\right)    f(t_0)    g(t_0)                  As an example, consider and . Let us calculate some of the points .   Points on the curve ,                                   Plotting these points and connecting them, we recognize the parabola , traced from left to right as increases from to . See .   The curve , is the parabola . The marked points correspond to the integer values from , and the arrow shows the direction of increasing .   The parabola y equals x squared with seven marked points and an arrow showing that it is traced from left to right.   The parabola y equals x squared drawn on a coordinate grid for x between minus three and three. Seven dots on the curve mark the points obtained from the integer parameter values t equals minus three through three, namely minus three comma nine, minus two comma four, minus one comma one, the origin, one comma one, two comma four, and three comma nine. An arrowhead partway up the right branch shows that the curve is traced from left to right as t increases.     f(t) = (t, t^2)       y=x^2         t=-3    t=0    t=3                 As our second example, consider the equation of the circle centered at with unit radius,   Here, we would like to parametrize and in terms of a single parameter in such a way that by varying the value of , we can reconstruct the circle . Remember that , so one way to achieve our goal is to write   where . The parametrization is illustrated in .   Parametrizing the unit circle by , , . A generic point of the circle corresponds to the parameter value .   The unit circle traced counterclockwise, with the four quarter points marked and one generic point at parameter value t nought.   The unit circle on a coordinate grid, traced counterclockwise as indicated by an arrowhead. Four dots mark the points reached at t equals zero, at one comma zero; t equals pi over two, at zero comma one; t equals pi, at minus one comma zero; and t equals three pi over two, at zero comma minus one. A fifth dot part way around the first quadrant marks a generic point cosine t nought, sine t nought, joined to the origin by a segment that makes the angle t nought with the positive x axis.     c(t) = (cos(t), sin(t))  t0 = 0.9          t=0     t=\\pi\/2     t=\\pi     t=3\\pi\/2        \\left(\\cos t_0,\\ \\sin t_0\\right)    t_0                   Question   Can you think of another way to write a parametric form of the circle ?    Nothing forces the point to start at , to travel counterclockwise, or to go around exactly once.    For instance , , or , .    Taking and with gives the same circle, but starting at and traced clockwise . Taking and with also gives the same circle, traced counterclockwise but twice .       Some Examples of Parametrizing Curves   Parametrizing Curves   Find the parametric equations corresponding to the following curves.    The line segment connecting the two points and .    The ellipse .    The circle of radius centered at .       Part A. The segment lies on the line , so we may take   At we are at the point , and at we arrive at the point . See .   Part A: the segment , , , which starts at when and ends at when .   The straight segment from the point (0,1) down to the point (1,0), with an arrow pointing from the first to the second.   A straight segment on a coordinate grid joining the point zero comma one on the y axis to the point one comma zero on the x axis. Both endpoints are marked with dots and labeled with the parameter values t equals zero and t equals one, and an arrowhead on the segment points from the first toward the second.     s(t) = (t, 1-t)          (0,1),\\ t=0     (1,0),\\ t=1                  Part B. Guided by the unit circle , we take   To verify, note that   See .   Part B: the ellipse , , , traced counterclockwise.   An ellipse taller than it is wide, traced counterclockwise, with its four axis points marked.   An ellipse on a coordinate grid, two units wide in the x direction and three units tall in the y direction, centered at the origin. Four dots mark the points reached at t equals zero, at two comma zero; t equals pi over two, at zero comma three; t equals pi, at minus two comma zero; and t equals three pi over two, at zero comma minus three. An arrowhead shows that the ellipse is traced counterclockwise.     e(t) = (2*cos(t), 3*sin(t))          t=0     t=\\pi\/2     t=\\pi     t=3\\pi\/2                  Part C. The equation of such a circle in Cartesian coordinates is , so we shift the standard parametrization of a circle of radius by units in the -direction:   To verify, note that   See .   Part C: the circle , , , of radius centered at .   A circle of radius two centered at the point (2,0), passing through the origin, traced counterclockwise.   A circle of radius two on a coordinate grid, centered at the point two comma zero, which is marked with a cross. The circle passes through the origin on the left and through the point four comma zero on the right. A dot marks the starting point four comma zero, reached at t equals zero, and an arrowhead shows that the circle is traced counterclockwise.     k(t) = (2*cos(t)+2, 2*sin(t))          (2,0)     t=0                      Intersection Points versus Collision Points  A parametrization carries more information than the curve it traces: it also records when the moving point visits each place on the curve. Because of this, there are two different questions we can ask about two parametric curves   thought of as the trajectories of two particles.   Intersection Points and Collision Points   A point is an intersection point of the two curves if lies on both curves; that is, if there are parameter values and , not necessarily equal, with   A point is a collision point of the two particles if both particles are at at the same time; that is, if there is a single value of with     An intersection point is a statement about the two paths : they cross, like two roads on a map. A collision point is a statement about the two motions : the cars are at the crossroads at the same instant.   True or False   Decide whether each statement is true or false.    Every collision point of two particles is an intersection point of their paths.    Every intersection point of two paths is a collision point of the particles that travel along them.      (a) True. (b) False.    (a) True. If the two particles collide at , then certainly lies on both paths, so is an intersection point.  (b) False. The paths may cross at a point that the two particles visit at different times, as the next two examples show. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.     True or False   In practice the distinction dictates how we set up the equations. Decide whether each statement is true or false.    To find the intersection points of the curves and , give the two curves different parameter names and solve , for the pair .    To find the collision points of the two particles, eliminate the parameters and intersect the two Cartesian curves.      (a) True. (b) False.    (a) True. An intersection point only has to be visited by both curves, possibly at different times, so the two parameters are independent of each other. Alternatively, eliminate the parameters and intersect the two Cartesian curves.  (b) False. Eliminating the parameters forgets the schedules, so it finds the intersection points. A collision requires the same instant in both curves: use the same parameter in both and solve , for .      Two particles move in the plane with position vectors   Find all intersection points of their paths, and all collision points of the particles.     Paths. Eliminating the parameter, the first particle traces the parabola . For the second, and , so it traces the line . Setting gives , so the two paths intersect at the two points    Collisions. A collision requires a single with   The first equation forces , but then while . There is no solution, so the particles never collide.  We can see exactly how they miss each other. The first particle is at when , while the second particle arrives there only at . Similarly, the first particle reaches at , long after the second particle passed through it at . Each intersection point is visited twice, but never simultaneously. See .   The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.   A parabola and a line crossing at two points, each labeled with the two different times at which the particles pass through it.   The parabola y equals x squared and the line y equals x plus two drawn on the same coordinate grid, crossing at the points minus one comma one and two comma four. Each crossing is marked with a dot and labeled with two different parameter values: at minus one comma one the first particle arrives at t equals minus one and the second at t equals one, and at two comma four the first arrives at t equals two and the second at t equals minus two.     p(t) = (t, t^2)  l(t) = (-t, 2-t)        C_1       C_2         (-1,1)    C_1: t=-1    C_2: t=1      (2,4)    C_1: t=2    C_2: t=-2                      Keep the first particle, but re-schedule the second one:   Find the intersection points of the paths and the collision points of the particles.     Paths. For the second particle, and , so it travels along the very same line as before, only faster and in the opposite direction. The paths are therefore unchanged, and they still intersect at the points , and .   Collisions. Now a collision requires a single with   The first equation gives , and this value does satisfy the second equation, since . Hence the particles do collide, at   The other intersection point is not a collision point: the first particle passes through at , while the second particle passes through it at . Two intersection points, but only one collision. See .   The same two paths as in . The point is now a collision point, reached by both particles at , while remains an intersection point that is not a collision point.   The same parabola and line, with the crossing at (2,4) highlighted as a collision point reached by both particles at time t equals two.   The parabola y equals x squared and the line y equals x plus two crossing at minus one comma one and at two comma four. The point two comma four is drawn as a large highlighted dot and labeled as a collision point, reached by both particles at time t equals two, while the particles pass through minus one comma one at the different times t equals minus one and t equals one half.     p(t) = (t, t^2)  l(t) = (t, t+2)        C_1       C_2         (-1,1)    C_1: t=-1    C_2: t=\\tfrac12         (2,4)    \\text{collision}    \\text{at } t=2                       Keep . Find a parametrization of the line for which the two particles collide at both intersection points.     .    With the collision equations become and , that is, . Thus gives the collision at and gives the collision at : both intersection points are now collision points.       Curves in Space and Vector Functions  Assume that we are interested in describing the path of an object in space. To this aim, we can specify its location at each instant of time; that is, we can write its coordinates in as   Here is the time parameter, which varies from some initial time to some final time , that is, . Nothing has changed, except that where a plane curve needed the two equations , a space curve needs three.  There is a second, more compact way to look at , and it is the point of view we will use for the rest of the course. Instead of three separate coordinate equations, collect the coordinates into a single vector function  a function whose input is a real number and whose output is a vector:   Think of as the position vector of the moving object: an arrow drawn from the origin to the object's location at time . As increases, the arrow swings around and changes length, and its tip sweeps out the curve. So a parametrization can be read in two equivalent ways.     Coordinatewise. Three ordinary scalar functions , , of one variable, one for each coordinate, as in .     Vectorially. One vector-valued function of one variable, as in . The curve is the set of tips of the vectors .    The two descriptions carry exactly the same information, but the vector form is the more useful one: it lets us differentiate and integrate a whole motion at once, and its derivative will turn out to be the velocity of the moving object. The same device works in the plane, where ; the position vectors and of were already written this way.   A helix   Consider the object whose coordinates are parametrized by   Write the motion as a vector function and describe the path.    Collecting into a single vector function,   The first two coordinates satisfy , so the shadow of the path on the -plane is the unit circle, and as runs from to the angle runs from to : the shadow goes around exactly once. Meanwhile increases steadily, so the object climbs at a constant rate while circling. The path is therefore one full turn of a helix , shown in . The motion begins at at time and ends at at time , directly above the starting point.   One turn of the helix , . The violet arrow is the position vector at ; its tip rides along the curve as increases. The dashed gray circle is the shadow of the path on the plane .   One turn of a helix rising above the unit circle, with the position vector drawn from the origin to a point on the curve.   A three-dimensional coordinate box with x and y running from minus 1.3 to 1.3 and z from 0 to about 3.4. A thick blue curve spirals counterclockwise once around the vertical axis while climbing steadily, starting at a red point labeled (1,0,0) at time t equals zero on the floor of the box and ending at a red point labeled (1,0,pi) at time t equals pi, directly above the start. A dashed gray unit circle on the floor is the shadow of the path. A violet arrow labeled r of t runs from the origin to a point partway up the curve, illustrating the position vector whose tip traces the helix.        There are situations in which a curve in space arises as the intersection of two surfaces. In the next two examples we turn such a description into a vector function .   Where a plane cuts a cylinder   Find a vector function that represents the curve of intersection of the cylinder and the plane .    As shown in , the intersection of the two surfaces is an ellipse. Furthermore, its projection onto the -plane is the circle , and we already know its parametrization from :   Then we use the fact that and write in terms of :   Hence the vector function representing the intersection of and is   where . As a check, the four points , , and all satisfy both equations.   The cylinder , the plane , and the ellipse in which they meet. The violet arrow is the position vector of at .   A vertical cylinder cut by a slanted plane, with the ellipse where they meet drawn on the surfaces.   A three-dimensional plot showing a vertical circular cylinder of radius one standing on the xy-plane, and a slanted plane cutting through it. The two meet along a closed curve, an ellipse, drawn as a thick magenta loop and labeled C. Four points on the ellipse are marked, at (1,0,2), (0,1,1), (-1,0,2) and (0,-1,3). A violet arrow runs from the origin to a point on the ellipse, illustrating the position vector r of t.         Where two curved surfaces meet   Parametrize the intersection of the surfaces     On the intersection the two expressions for agree. Squaring both sides of   gives , that is,   Notice that has disappeared: equation describes the shadow of the intersection curve in the -plane, and it is an ellipse. Parametrizing it exactly as in ,   Plugging these into either of the two original equations, say , recovers the missing coordinate:   Hence the curve of intersection, shown in , is   for .   The upper sheet of (blue) and the dome (red) meet along the closed curve , drawn in black. Its shadow in the plane is the dashed ellipse .   A bowl-shaped surface and a dome overlapping, with the closed curve where they meet drawn on them.   A three-dimensional plot showing two surfaces. The first, in blue, is the upper sheet of a hyperboloid opening upward from its lowest point at height one above the origin. The second, in red, is a dome, the upper half of an ellipsoid, reaching height two above the origin. The two surfaces cross along a closed curve, drawn in black, which loops around the vertical axis at heights between about 1.26 and 1.58. A dashed ellipse on the floor of the box shows the shadow of that curve.                Tangent Lines to Curves in Space  Now that a curve in space is a vector function , we can ask the same question we asked about graphs in single-variable calculus: what is the tangent line at a point of the curve? The applet in shows how to find its direction. Fix a time , mark the point that the moving object occupies at that time, and let be a small change in time.   The tangent vector as the limit of a difference quotient. The gray curve is the helix , and the two blue arrows are the position vectors and , with . The pink arrow is their difference , the green arrow is the difference quotient , and the green line is the tangent line at .     Here is what the applet shows. The pink arrow joins the point of the curve at time to the point of the curve at time : it is a chord of the curve. Dividing it by gives the green arrow   which points along the same chord (or opposite to it, when ) but has been rescaled by , so it does not shrink to nothing as does. As the second point slides toward , the chord swings into the tangent line, and the green arrow becomes parallel to the tangent line at . Its limit is therefore a vector tangent to the curve at . We call it the tangent vector , or the velocity , of the path:   The limit in is taken one coordinate at a time, so if , then : to differentiate a vector function, differentiate each of its coordinates. The tangent vector at the time is   The tangent line at is the line through in the direction of . The point has position vector   so, using the vector equation of a line from MATH 13, the tangent line at is   Note that the parameter is used for the tangent line, whereas the parameter is used for the curve. The two are different motions: travels along the curve, while travels along the straight line, passing through at .   Tangent line to a helix   Find the tangent line to the path at the point .     Step 1. Find the time at which the path passes through the point. The third coordinate gives , and indeed , so the point corresponds to .   Step 2. The tangent vector to the path is given by differentiating each coordinate:    Step 3. The tangent vector at is    Step 4. By , the tangent line in vector form is    Step 5. Reading off the coordinates, the equation of the tangent line in parametric form is   This is the green line in .  The same construction, animated, is . Press Play for a guided tour, or drag toward and watch the green difference quotient turn onto the gold tangent line.   The tangent vector as a limit, animated. The helix for , the point with , the position vectors and (violet), the chord (pink), the difference quotient (green), and the tangent line at with the tangent vector (gold).       "
},
{
  "id": "sec-parametrization-2",
  "level": "2",
  "url": "sec-parametrization.html#sec-parametrization-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   Describe the motion of a point in the plane with a pair of parametric equations and , and understand the parameter as recording when the point visits each place on the curve.    Sketch a parametric curve from its parametric equations, and indicate the direction of increasing in which the curve is traced.    Find parametric equations for common curves, such as lines, circles, and ellipses, and eliminate the parameter to recover a Cartesian equation when possible.    Distinguish the intersection points of two parametric curves from their collision points , where two moving objects reach the same place at the same time.    Write a space curve as a vector function , and parametrize the curve in which two surfaces meet.    Differentiate a vector function to get the tangent vector of a space curve, and write the equation of the tangent line at a point of the curve.    "
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
  "body": " Question   Can you think of another way to write a parametric form of the circle ?    Nothing forces the point to start at , to travel counterclockwise, or to go around exactly once.    For instance , , or , .    Taking and with gives the same circle, but starting at and traced clockwise . Taking and with also gives the same circle, traced counterclockwise but twice .   "
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
  "id": "check-collision-vs-intersection",
  "level": "2",
  "url": "sec-parametrization.html#check-collision-vs-intersection",
  "type": "Checkpoint",
  "number": "1.1.12",
  "title": "True or False.",
  "body": " True or False   Decide whether each statement is true or false.    Every collision point of two particles is an intersection point of their paths.    Every intersection point of two paths is a collision point of the particles that travel along them.      (a) True. (b) False.    (a) True. If the two particles collide at , then certainly lies on both paths, so is an intersection point.  (b) False. The paths may cross at a point that the two particles visit at different times, as the next two examples show. Changing the parametrization of a curve does not move the curve, but it can create or destroy collisions.   "
},
{
  "id": "check-intersection-collision-equations",
  "level": "2",
  "url": "sec-parametrization.html#check-intersection-collision-equations",
  "type": "Checkpoint",
  "number": "1.1.13",
  "title": "True or False.",
  "body": " True or False   In practice the distinction dictates how we set up the equations. Decide whether each statement is true or false.    To find the intersection points of the curves and , give the two curves different parameter names and solve , for the pair .    To find the collision points of the two particles, eliminate the parameters and intersect the two Cartesian curves.      (a) True. (b) False.    (a) True. An intersection point only has to be visited by both curves, possibly at different times, so the two parameters are independent of each other. Alternatively, eliminate the parameters and intersect the two Cartesian curves.  (b) False. Eliminating the parameters forgets the schedules, so it finds the intersection points. A collision requires the same instant in both curves: use the same parameter in both and solve , for .   "
},
{
  "id": "ex-paths-cross-no-collision",
  "level": "2",
  "url": "sec-parametrization.html#ex-paths-cross-no-collision",
  "type": "Example",
  "number": "1.1.14",
  "title": "",
  "body": "  Two particles move in the plane with position vectors   Find all intersection points of their paths, and all collision points of the particles.     Paths. Eliminating the parameter, the first particle traces the parabola . For the second, and , so it traces the line . Setting gives , so the two paths intersect at the two points    Collisions. A collision requires a single with   The first equation forces , but then while . There is no solution, so the particles never collide.  We can see exactly how they miss each other. The first particle is at when , while the second particle arrives there only at . Similarly, the first particle reaches at , long after the second particle passed through it at . Each intersection point is visited twice, but never simultaneously. See .   The parabola and the line intersect at and . At each of these points the two particles arrive at different times, so neither point is a collision point.   A parabola and a line crossing at two points, each labeled with the two different times at which the particles pass through it.   The parabola y equals x squared and the line y equals x plus two drawn on the same coordinate grid, crossing at the points minus one comma one and two comma four. Each crossing is marked with a dot and labeled with two different parameter values: at minus one comma one the first particle arrives at t equals minus one and the second at t equals one, and at two comma four the first arrives at t equals two and the second at t equals minus two.     p(t) = (t, t^2)  l(t) = (-t, 2-t)        C_1       C_2         (-1,1)    C_1: t=-1    C_2: t=1      (2,4)    C_1: t=2    C_2: t=-2                   "
},
{
  "id": "ex-same-paths-collision",
  "level": "2",
  "url": "sec-parametrization.html#ex-same-paths-collision",
  "type": "Example",
  "number": "1.1.16",
  "title": "",
  "body": "  Keep the first particle, but re-schedule the second one:   Find the intersection points of the paths and the collision points of the particles.     Paths. For the second particle, and , so it travels along the very same line as before, only faster and in the opposite direction. The paths are therefore unchanged, and they still intersect at the points , and .   Collisions. Now a collision requires a single with   The first equation gives , and this value does satisfy the second equation, since . Hence the particles do collide, at   The other intersection point is not a collision point: the first particle passes through at , while the second particle passes through it at . Two intersection points, but only one collision. See .   The same two paths as in . The point is now a collision point, reached by both particles at , while remains an intersection point that is not a collision point.   The same parabola and line, with the crossing at (2,4) highlighted as a collision point reached by both particles at time t equals two.   The parabola y equals x squared and the line y equals x plus two crossing at minus one comma one and at two comma four. The point two comma four is drawn as a large highlighted dot and labeled as a collision point, reached by both particles at time t equals two, while the particles pass through minus one comma one at the different times t equals minus one and t equals one half.     p(t) = (t, t^2)  l(t) = (t, t+2)        C_1       C_2         (-1,1)    C_1: t=-1    C_2: t=\\tfrac12         (2,4)    \\text{collision}    \\text{at } t=2                    "
},
{
  "id": "check-collision-both-points",
  "level": "2",
  "url": "sec-parametrization.html#check-collision-both-points",
  "type": "Checkpoint",
  "number": "1.1.18",
  "title": "",
  "body": "  Keep . Find a parametrization of the line for which the two particles collide at both intersection points.     .    With the collision equations become and , that is, . Thus gives the collision at and gives the collision at : both intersection points are now collision points.   "
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
  "number": "1.1.19",
  "title": "A helix.",
  "body": " A helix   Consider the object whose coordinates are parametrized by   Write the motion as a vector function and describe the path.    Collecting into a single vector function,   The first two coordinates satisfy , so the shadow of the path on the -plane is the unit circle, and as runs from to the angle runs from to : the shadow goes around exactly once. Meanwhile increases steadily, so the object climbs at a constant rate while circling. The path is therefore one full turn of a helix , shown in . The motion begins at at time and ends at at time , directly above the starting point.   One turn of the helix , . The violet arrow is the position vector at ; its tip rides along the curve as increases. The dashed gray circle is the shadow of the path on the plane .   One turn of a helix rising above the unit circle, with the position vector drawn from the origin to a point on the curve.   A three-dimensional coordinate box with x and y running from minus 1.3 to 1.3 and z from 0 to about 3.4. A thick blue curve spirals counterclockwise once around the vertical axis while climbing steadily, starting at a red point labeled (1,0,0) at time t equals zero on the floor of the box and ending at a red point labeled (1,0,pi) at time t equals pi, directly above the start. A dashed gray unit circle on the floor is the shadow of the path. A violet arrow labeled r of t runs from the origin to a point partway up the curve, illustrating the position vector whose tip traces the helix.       "
},
{
  "id": "ex-cylinder-plane",
  "level": "2",
  "url": "sec-parametrization.html#ex-cylinder-plane",
  "type": "Example",
  "number": "1.1.21",
  "title": "Where a plane cuts a cylinder.",
  "body": " Where a plane cuts a cylinder   Find a vector function that represents the curve of intersection of the cylinder and the plane .    As shown in , the intersection of the two surfaces is an ellipse. Furthermore, its projection onto the -plane is the circle , and we already know its parametrization from :   Then we use the fact that and write in terms of :   Hence the vector function representing the intersection of and is   where . As a check, the four points , , and all satisfy both equations.   The cylinder , the plane , and the ellipse in which they meet. The violet arrow is the position vector of at .   A vertical cylinder cut by a slanted plane, with the ellipse where they meet drawn on the surfaces.   A three-dimensional plot showing a vertical circular cylinder of radius one standing on the xy-plane, and a slanted plane cutting through it. The two meet along a closed curve, an ellipse, drawn as a thick magenta loop and labeled C. Four points on the ellipse are marked, at (1,0,2), (0,1,1), (-1,0,2) and (0,-1,3). A violet arrow runs from the origin to a point on the ellipse, illustrating the position vector r of t.       "
},
{
  "id": "ex-two-surfaces",
  "level": "2",
  "url": "sec-parametrization.html#ex-two-surfaces",
  "type": "Example",
  "number": "1.1.23",
  "title": "Where two curved surfaces meet.",
  "body": " Where two curved surfaces meet   Parametrize the intersection of the surfaces     On the intersection the two expressions for agree. Squaring both sides of   gives , that is,   Notice that has disappeared: equation describes the shadow of the intersection curve in the -plane, and it is an ellipse. Parametrizing it exactly as in ,   Plugging these into either of the two original equations, say , recovers the missing coordinate:   Hence the curve of intersection, shown in , is   for .   The upper sheet of (blue) and the dome (red) meet along the closed curve , drawn in black. Its shadow in the plane is the dashed ellipse .   A bowl-shaped surface and a dome overlapping, with the closed curve where they meet drawn on them.   A three-dimensional plot showing two surfaces. The first, in blue, is the upper sheet of a hyperboloid opening upward from its lowest point at height one above the origin. The second, in red, is a dome, the upper half of an ellipsoid, reaching height two above the origin. The two surfaces cross along a closed curve, drawn in black, which loops around the vertical axis at heights between about 1.26 and 1.58. A dashed ellipse on the floor of the box shows the shadow of that curve.       "
},
{
  "id": "fig-tangent-vector-geogebra",
  "level": "2",
  "url": "sec-parametrization.html#fig-tangent-vector-geogebra",
  "type": "Figure",
  "number": "1.1.25",
  "title": "",
  "body": " The tangent vector as the limit of a difference quotient. The gray curve is the helix , and the two blue arrows are the position vectors and , with . The pink arrow is their difference , the green arrow is the difference quotient , and the green line is the tangent line at .    "
},
{
  "id": "subsec-tangent-line-space-curve-5",
  "level": "2",
  "url": "sec-parametrization.html#subsec-tangent-line-space-curve-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent vector velocity "
},
{
  "id": "ex-tangent-line-helix",
  "level": "2",
  "url": "sec-parametrization.html#ex-tangent-line-helix",
  "type": "Example",
  "number": "1.1.26",
  "title": "Tangent line to a helix.",
  "body": " Tangent line to a helix   Find the tangent line to the path at the point .     Step 1. Find the time at which the path passes through the point. The third coordinate gives , and indeed , so the point corresponds to .   Step 2. The tangent vector to the path is given by differentiating each coordinate:    Step 3. The tangent vector at is    Step 4. By , the tangent line in vector form is    Step 5. Reading off the coordinates, the equation of the tangent line in parametric form is   This is the green line in .  The same construction, animated, is . Press Play for a guided tour, or drag toward and watch the green difference quotient turn onto the gold tangent line.   The tangent vector as a limit, animated. The helix for , the point with , the position vectors and (violet), the chord (pink), the difference quotient (green), and the tangent line at with the tangent vector (gold).     "
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
