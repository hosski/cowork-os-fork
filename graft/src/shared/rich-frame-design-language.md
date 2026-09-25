# src/shared/rich-frame-design-language.ts

- RichFrameTheme · type · L17-L17 — type RichFrameTheme = "light" | "dark";
- RichFrameDesignOptions · type · L18-L21 — type RichFrameDesignOptions = { theme?: RichFrameTheme; hostBackground?: string; };
- sanitizeCssColor · function · L23-L31 — function sanitizeCssColor(value: string | undefined, fallback: string): string
- buildRichFrameDesignCss · function · L308-L318 — function buildRichFrameDesignCss(theme: RichFrameTheme, hostBackground?: string): string
- normalizeRichFrameTheme · function · L322-L324 — function normalizeRichFrameTheme(theme?: RichFrameTheme): RichFrameTheme
- applyRichFrameDesignLanguage · function · L326-L356 — function applyRichFrameDesignLanguage( htmlContent: string, options: RichFrameDesignOptions = {}, ): string
