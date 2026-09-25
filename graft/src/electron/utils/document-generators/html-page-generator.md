# src/electron/utils/document-generators/html-page-generator.ts

- LandingPageSection · interface · L3-L6 — interface LandingPageSection
- LandingPageOptions · interface · L8-L21 — interface LandingPageOptions
- buildLandingPageHTML · function · L23-L210 — function buildLandingPageHTML(options: LandingPageOptions): string
- generateLandingPage · function · L212-L220 — async function generateLandingPage( outputPath: string, options: LandingPageOptions, ): Promise<{ success: boolean; path: string; size: number }>
- markdownToHtml · function · L222-L241 — function markdownToHtml(md: string): string
- escapeHtml · function · L243-L249 — function escapeHtml(str: string): string
- escapeAttribute · function · L251-L253 — function escapeAttribute(str: string): string
- sanitizeHref · function · L255-L281 — function sanitizeHref(raw: string): string
- hexToRgb · function · L285-L307 — function hexToRgb(hex: string): string
