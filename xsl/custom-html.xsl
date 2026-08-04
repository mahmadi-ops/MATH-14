<?xml version="1.0" encoding="UTF-8"?>
<!-- Custom HTML conversion:                                                -->
<!--   * render <exercises> divisions (homework) without a number           -->
<!--   * cross-references to figures holding an annotated PreFigure diagram -->
<!--     are plain links, not knowls (see the comment below)                -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:pf="https://prefigure.org"
                exclude-result-prefixes="pf"
                version="1.0">
  <xsl:import href="./core/pretext-html.xsl"/>

  <!-- Equation-entry palette for the dynamic exercises.  PreTeXt emits   -->
  <!-- one <script> at the foot of each page from $html.js.extra; the     -->
  <!-- file lives in assets/ and is copied to output as external/.  It    -->
  <!-- targets specific exercises by id and is inert on every other page. -->
  <xsl:param name="html.js.extra" select="'external/math-input-palette.js'"/>

  <xsl:template match="exercises" mode="serial-number"/>
  <xsl:template match="exercises" mode="number"/>

  <!-- In "Review Problems with Solutions" the solution is printed straight   -->
  <!-- below its problem instead of being hidden behind a knowl.  PreTeXt     -->
  <!-- has a publisher switch for this (knowl/@example-solution), but that    -->
  <!-- is global: it would also unfold the solutions of every worked example  -->
  <!-- in the text.  These two templates are the core's own "born visible"    -->
  <!-- branch, restricted to that one chapter.                                -->
  <!-- The problems themselves are born visible too, so the chapter reads   -->
  <!-- as a worked-solutions document rather than a page of knowl links.    -->
  <xsl:template match="problem[ancestor::chapter[@xml:id = 'ch-review-solutions' or
                                                 @xml:id = 'ch-assignment-solutions']]"
                mode="is-hidden">
    <xsl:text>false</xsl:text>
  </xsl:template>

  <xsl:template match="problem[ancestor::chapter[@xml:id = 'ch-review-solutions' or
                                                 @xml:id = 'ch-assignment-solutions']]/solution"
                mode="is-hidden">
    <xsl:text>false</xsl:text>
  </xsl:template>

  <xsl:template match="problem[ancestor::chapter[@xml:id = 'ch-review-solutions' or
                                                 @xml:id = 'ch-assignment-solutions']]/solution"
                mode="heading-birth">
    <xsl:apply-templates select="." mode="heading-non-singleton-number"/>
  </xsl:template>

  <!-- A PreFigure diagram carrying <annotations> is not emitted as an     -->
  <!-- <img>: PreTeXt emits an empty <div class="ChemAccess-element"> that -->
  <!-- the diagcess JS library fills in, and that library only scans the   -->
  <!-- document once, at page load (diagcess.Base.init() in the footer).   -->
  <!-- Knowl content is fetched later, on click, so the container is never -->
  <!-- populated and the reader sees the caption with an empty box where   -->
  <!-- the diagram should be.  Rendering these cross-references as plain   -->
  <!-- links instead sends the reader to the figure itself, in context,    -->
  <!-- where the diagram is present and fully explorable.  Every other     -->
  <!-- cross-reference (equations, examples, unannotated figures, TikZ     -->
  <!-- figures) keeps its knowl.                                           -->
  <!-- The match is on any target containing such a diagram, not just on    -->
  <!-- "figure": an example or task whose solution holds one has the same   -->
  <!-- problem when its own knowl is opened.                                -->
  <xsl:template match="*[.//pf:prefigure/pf:diagram/pf:annotations]"
                mode="xref-as-knowl">
    <xsl:param name="link" select="/.."/>
    <xsl:value-of select="false()"/>
  </xsl:template>

  <!-- Every GeoGebra applet gets GeoGebra's own fullscreen button.        -->
  <!-- The core slate template writes the applet-parameter object inline   -->
  <!-- and offers no hook for extra parameters, so instead of copying the  -->
  <!-- whole template we emit a small shim first and then defer to it via  -->
  <!-- apply-imports.  The shim wraps window.GGBApplet so that any         -->
  <!-- parameter object passing through it picks up                        -->
  <!-- showFullscreenButton: true (unless the author set it).  deployggb   -->
  <!-- loads synchronously in the head, so GGBApplet exists by the time    -->
  <!-- this body script runs; the setter branch covers it loading later.   -->
  <xsl:template match="slate[@surface='geogebra']">
    <script>
<![CDATA[(function () {
  if (window.ggbFullscreenShim) { return; }
  window.ggbFullscreenShim = true;
  var Real = window.GGBApplet || null;
  Object.defineProperty(window, 'GGBApplet', {
    configurable: true,
    get: function () {
      if (!Real) { return undefined; }
      return function (params, b) {
        if (params && typeof params === 'object' &&
            !('showFullscreenButton' in params)) {
          params.showFullscreenButton = true;
        }
        return new Real(params, b);
      };
    },
    set: function (v) { Real = v; }
  });
})();]]>
    </script>
    <xsl:apply-imports/>
  </xsl:template>

  <!-- The applet lives inside an iframe page, and the fullscreen request  -->
  <!-- made by GeoGebra's button is only honoured when the embedding       -->
  <!-- iframe carries the allowfullscreen permission.  This is the core    -->
  <!-- template with that one attribute added.                             -->
  <!-- This is the core template with two attributes added.  Every attribute -->
  <!-- must be written before any content: an <xsl:apply-templates> in a     -->
  <!-- mode that has no matching template falls back to the built-in rule,   -->
  <!-- which copies the element's text into the iframe, and a later          -->
  <!-- <xsl:attribute> then fails with "Cannot add attributes to an element  -->
  <!-- if children have been already added".                                 -->
  <xsl:template match="interactive[@platform]" mode="iframe-interactive">
    <iframe>
      <xsl:attribute name="allowfullscreen"/>
      <xsl:attribute name="allow">
        <xsl:text>fullscreen</xsl:text>
      </xsl:attribute>
      <xsl:apply-templates select="." mode="html-id-attribute"/>
      <xsl:apply-templates select="." mode="interactive-sizing-style-attribute"/>
      <xsl:attribute name="src">
        <xsl:apply-templates select="." mode="iframe-filename"/>
      </xsl:attribute>
      <!-- title attribute for accessibility -->
      <xsl:choose>
        <xsl:when test="not(string(shortdescription) = '')">
          <xsl:attribute name="title">
            <xsl:apply-templates select="shortdescription"/>
          </xsl:attribute>
        </xsl:when>
        <xsl:when test="description">
          <xsl:attribute name="title">
            <xsl:text>described in detail following the image</xsl:text>
          </xsl:attribute>
          <xsl:attribute name="aria-describedby">
            <xsl:apply-templates select="." mode="describedby-id"/>
          </xsl:attribute>
        </xsl:when>
      </xsl:choose>
      <xsl:apply-templates select="." mode="iframe-dark-mode-attribute"/>
    </iframe>
    <!-- possibly give a long description -->
    <xsl:apply-templates select="." mode="description"/>
  </xsl:template>

</xsl:stylesheet>
