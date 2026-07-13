<?xml version="1.0" encoding="UTF-8"?>
<!-- Custom LaTeX/PDF conversion: render <exercises> divisions (homework) without a number -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:import href="./core/pretext-latex.xsl"/>

  <xsl:template match="exercises" mode="serial-number"/>
  <xsl:template match="exercises" mode="number"/>
</xsl:stylesheet>
