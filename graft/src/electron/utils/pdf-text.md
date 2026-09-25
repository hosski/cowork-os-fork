# src/electron/utils/pdf-text.ts

- PdfTextExtractionMode · type · L7-L7 — type PdfTextExtractionMode = "pdf-parse" | PdfReviewExtractionMode;
- ExtractPdfTextOptions · type · L9-L16 — type ExtractPdfTextOptions = { minChars?: number; minWords?: number; maxFallbackPages?: number; maxFallbackCharsPerPage?: number; maxFallbackOcrPages?: number; includeOcr?: boolean; };
- PdfTextData · type · L18-L26 — type PdfTextData = { text: string; pageCount: number; extractionMode: PdfTextExtractionMode; usedFallback: boolean; previewLimited: boolean; extractionStatus: "complete" | "recovered" | "ocr" | "preview" | "empty"; extractionNote: string; };
- normalizeWhitespace · function · L36-L44 — function normalizeWhitespace(value: string): string
- countWords · function · L46-L50 — function countWords(text: string): number
- countMatches · function · L52-L54 — function countMatches(value: string, pattern: RegExp): number
- isSuspiciousPdfText · function · L56-L98 — function isSuspiciousPdfText(text: string): boolean
- isMeaningfulText · function · L100-L111 — function isMeaningfulText(text: string, options: ExtractPdfTextOptions): boolean
- scoreText · function · L113-L117 — function scoreText(text: string): number
- extractTextFromReview · function · L119-L136 — function extractTextFromReview(review: PdfReviewData): string
- choosePreferredText · function · L138-L157 — function choosePreferredText( primary: string, fallback: string, ): { text: string; source: "primary" | "fallback" }
- extractPdfText · function · L159-L258 — async function extractPdfText( pdfPath: string, options: ExtractPdfTextOptions = {}, ): Promise<PdfTextData>
