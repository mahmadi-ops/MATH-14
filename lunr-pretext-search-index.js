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
  "id": "chapter-coming-soon",
  "level": "1",
  "url": "chapter-coming-soon.html",
  "type": "Chapter",
  "number": "1",
  "title": "Course Materials",
  "body": " Course Materials  The sections, the assignments, and the review problem sets appear here as we reach them during the quarter. Nothing has been posted yet please check back after our first class meeting.  "
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
