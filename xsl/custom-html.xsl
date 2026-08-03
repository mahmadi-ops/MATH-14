<?xml version="1.0" encoding="UTF-8"?>
<!-- Custom HTML conversion:                                                -->
<!--   * render <exercises> divisions (homework) without a number           -->
<!--   * cross-references to figures holding an annotated PreFigure diagram -->
<!--     are plain links, not knowls (see the comment below)                -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:pf="https://prefigure.org"
                version="1.0">
  <xsl:import href="./core/pretext-html.xsl"/>

  <!-- Equation-entry palette for the dynamic exercises.  PreTeXt emits   -->
  <!-- one <script> at the foot of each page from $html.js.extra; the     -->
  <!-- file lives in assets/ and is copied to output as external/.  It    -->
  <!-- targets specific exercises by id and is inert on every other page. -->
  <xsl:param name="html.js.extra" select="'external/math-input-palette.js'"/>

  <xsl:template match="exercises" mode="serial-number"/>
  <xsl:template match="exercises" mode="number"/>

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

</xsl:stylesheet>
