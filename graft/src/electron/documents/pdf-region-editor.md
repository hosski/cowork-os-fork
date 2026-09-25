# src/electron/documents/pdf-region-editor.ts

- PdfRegionEditInput · type · L5-L12 — type PdfRegionEditInput = { sourcePath: string; destPath: string; pageIndex: number; bbox: { x: number; y: number; w: number; h: number }; instruction: string; selectionText?: string; };
- ExtractedTextItem · type · L14-L18 — type ExtractedTextItem = { str: string; x: number; y: number; };
- TextLine · type · L20-L23 — type TextLine = { text: string; y: number; };
- normalizeWhitespace · function · L25-L27 — function normalizeWhitespace(value: string): string
- normalizeLineText · function · L29-L31 — function normalizeLineText(value: string): string
- inferFontStyle · function · L33-L41 — function inferFontStyle(instruction: string): "regular" | "italic" | "bold" | "bold-italic"
- inferReplacementText · function · L43-L63 — function inferReplacementText(instruction: string, selectionText?: string): string
- loadPdfJs · function · L65-L68 — async function loadPdfJs()
- groupTextLines · function · L70-L88 — function groupTextLines(items: ExtractedTextItem[]): string
- wrapParagraph · function · L90-L114 — function wrapParagraph(paragraph: string, font: Any, fontSize: number, maxWidth: number): string[]
- wrapTextToBox · function · L116-L127 — function wrapTextToBox(text: string, font: Any, fontSize: number, maxWidth: number): string[]
- measureWrappedTextHeight · function · L129-L132 — function measureWrappedTextHeight(fontSize: number, lineCount: number): number
- chooseFontSize · function · L134-L159 — function chooseFontSize( text: string, font: Any, maxWidth: number, maxHeight: number, ): { size: number; lines: string[] }
- extractSelectionText · function · L161-L214 — async function extractSelectionText( sourceBytes: Uint8Array, pageIndex: number, bbox: { x: number; y: number; w: number; h: number }, ): Promise<string>
- editPdfRegion · function · L216-L280 — async function editPdfRegion(input: PdfRegionEditInput): Promise<void>
