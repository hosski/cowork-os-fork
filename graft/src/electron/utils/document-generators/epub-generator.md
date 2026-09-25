# src/electron/utils/document-generators/epub-generator.ts

- EpubChapter · interface · L5-L8 — interface EpubChapter
- EpubOptions · interface · L10-L17 — interface EpubOptions
- generateEPUB · function · L19-L137 — async function generateEPUB( outputPath: string, options: EpubOptions, ): Promise<{ success: boolean; path: string; size: number; chapterCount: number }>
- renderXhtmlDocument · function · L139-L152 — function renderXhtmlDocument(title: string, body: string): string
- markdownToXhtml · function · L154-L169 — function markdownToXhtml(md: string): string
- escapeHtml · function · L171-L177 — function escapeHtml(str: string): string
- escapeAttribute · function · L179-L181 — function escapeAttribute(str: string): string
- createUuid · function · L183-L189 — function createUuid(): string
