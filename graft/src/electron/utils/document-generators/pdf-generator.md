# src/electron/utils/document-generators/pdf-generator.ts

- PDFSection · interface · L11-L14 — interface PDFSection
- PDFOptions · interface · L16-L23 — interface PDFOptions
- which · function · L25-L32 — function which(command: string): string | undefined
- resolveBrowserExecutable · function · L34-L97 — function resolveBrowserExecutable(): string | undefined
- generatePDF · function · L103-L152 — async function generatePDF( outputPath: string, options: PDFOptions, ): Promise<{ success: boolean; path: string; size: number }>
- buildHTML · function · L154-L205 — function buildHTML(options: PDFOptions): string
- markdownToHtml · function · L208-L240 — function markdownToHtml(md: string): string
- escapeHtml · function · L242-L248 — function escapeHtml(str: string): string
