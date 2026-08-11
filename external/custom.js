/* ------------------------------------------------------------------ *
 * Floating Socratic AI tutor for the assignment pages.                 *
 *                                                                      *
 * On each of the ten assignment pages of "Assignments and Review       *
 * Problems" (URL starts with "sec-exercises-hw") this adds a chat      *
 * bubble fixed to the lower-right corner. Opening it loads             *
 * external/gemini-tutor.html in a panel that stays in place as the     *
 * student scrolls. The page's exercise STATEMENTS (never the           *
 * solutions, and never the answer-checking data Runestone embeds in    *
 * <script> tags) are harvested before MathJax typesets them — so the   *
 * raw \( ... \) LaTeX is intact — and handed to the tutor via          *
 * postMessage so it knows every problem on the page. The review        *
 * problem sets ("sec-exercises-review...") are left alone.             *
 * ------------------------------------------------------------------ */
(function () {
    var page = window.location.pathname.split("/").pop() || "";
    if (page.indexOf("sec-exercises-hw") !== 0) return;
    var articles = document.querySelectorAll("article.exercise");
    if (!articles.length) return;

    // Harvest statements now, while the DOM still holds raw LaTeX.
    // The <script type="application/json"> blobs inside each Runestone
    // exercise carry the answer patterns and feedback, so scripts are
    // stripped along with the solutions; the answer <input> boxes have
    // no text content, so each is replaced by a visible "___" blank.
    function clean(el) {
        var c = el.cloneNode(true);
        c.querySelectorAll(
            ".solutions, .solution, .hint, .answer, .autopermalink, .knowl-output, iframe, script, style"
        ).forEach(function (n) { n.remove(); });
        c.querySelectorAll("input").forEach(function (n) {
            n.replaceWith(document.createTextNode(" ___ "));
        });
        return c.textContent.replace(/\s+/g, " ").trim();
    }
    var exercises = [];
    articles.forEach(function (a) {
        var heading = a.querySelector(".heading");
        var label = heading ? clean(heading).replace(/\s*\.$/, "") : "Problem";
        var body = a.cloneNode(true);
        var h = body.querySelector(".heading");
        if (h) h.remove();
        exercises.push({ label: label, text: clean(body) });
    });
    var sectionHeading = document.querySelector("section .heading .title");
    var context = {
        type: "math14-exercises",
        section: sectionHeading ? sectionHeading.textContent.trim() : document.title,
        exercises: exercises,
    };

    // Build the bubble + panel.
    var fab = document.createElement("button");
    fab.id = "m14-tutor-fab";
    fab.type = "button";
    fab.setAttribute("aria-label", "Open the AI tutor");
    fab.innerHTML = "&#127891; Tutor";

    var panel = document.createElement("div");
    panel.id = "m14-tutor-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Socratic AI tutor");
    panel.innerHTML =
        '<div id="m14-tutor-bar">' +
        '<span>Socratic tutor &mdash; hints, never answers</span>' +
        '<button type="button" id="m14-tutor-min" aria-label="Minimize">&#8211;</button>' +
        "</div>";
    var frame = null;

    function openPanel() {
        if (!frame) {
            frame = document.createElement("iframe");
            frame.id = "m14-tutor-frame";
            frame.src = "external/gemini-tutor.html";
            frame.addEventListener("load", function () {
                frame.contentWindow.postMessage(context, "*");
            });
            panel.appendChild(frame);
        }
        panel.classList.add("m14-open");
        fab.style.display = "none";
        try { localStorage.setItem("math14-tutor-open", "1"); } catch (e) {}
    }
    function closePanel() {
        panel.classList.remove("m14-open");
        fab.style.display = "";
        try { localStorage.setItem("math14-tutor-open", "0"); } catch (e) {}
    }

    fab.addEventListener("click", openPanel);
    panel.querySelector("#m14-tutor-min").addEventListener("click", closePanel);

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    var wasOpen = false;
    try { wasOpen = localStorage.getItem("math14-tutor-open") === "1"; } catch (e) {}
    if (wasOpen) openPanel();

    // First visit only: pulse the button twice so new students notice it,
    // then never again on this browser.
    try {
        if (!wasOpen && !localStorage.getItem("math14-tutor-seen")) {
            localStorage.setItem("math14-tutor-seen", "1");
            setTimeout(function () {
                fab.classList.add("m14-pulse");
                fab.addEventListener("animationend", function () {
                    fab.classList.remove("m14-pulse");
                }, { once: true });
            }, 900);
        }
    } catch (e) {}
})();
