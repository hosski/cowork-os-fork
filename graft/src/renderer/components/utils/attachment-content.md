# src/renderer/components/utils/attachment-content.ts

- shouldRequestImageOcr · function · L24-L27 — shouldRequestImageOcr = (prompt: string, fileName: string): boolean
- stripHtmlForText · function · L29-L38 — stripHtmlForText = (value: string): string
- truncateTextForTaskPrompt · function · L40-L43 — truncateTextForTaskPrompt = (value: string): string
- truncatePdfExcerpt · function · L45-L53 — truncatePdfExcerpt = (value: string, maxChars = PDF_ATTACHMENT_EXCERPT_MAX_CHARS): string
- inferPdfExtractionStatus · function · L55-L70 — inferPdfExtractionStatus = (summary: PdfReviewSummary): string
- buildPdfAttachmentContent · function · L72-L120 — buildPdfAttachmentContent = (params: { fileName: string; relativePath: string; summary: PdfReviewSummary; }): string
- stripStrategyContextBlock · function · L122-L126 — stripStrategyContextBlock = (value: string): string
- stripPptxBubbleContent · function · L128-L180 — stripPptxBubbleContent = (value: string): string
- extractAttachmentNames · function · L182-L233 — extractAttachmentNames = (value: string): string[]
- buildImageAttachmentViewerOptions · function · L235-L242 — buildImageAttachmentViewerOptions = (inputText: string, fileName: string)
