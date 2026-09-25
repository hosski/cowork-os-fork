# src/renderer/utils/pause-banner-summary.ts

- PauseBannerPreview · type · L5-L9 — type PauseBannerPreview = { summary: string; showDetails: boolean; fullText: string; };
- collapseWhitespace · function · L11-L13 — function collapseWhitespace(value: string): string
- truncateWithEllipsis · function · L15-L18 — function truncateWithEllipsis(value: string, maxChars: number): string
- buildSentenceSummary · function · L20-L39 — function buildSentenceSummary(paragraph: string, maxChars: number): string
- buildPauseBannerPreview · function · L41-L62 — function buildPauseBannerPreview( message: string, maxChars: number = DEFAULT_PAUSE_BANNER_SUMMARY_CHARS, ): PauseBannerPreview
