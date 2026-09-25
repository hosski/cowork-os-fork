# src/renderer/components/InlineSpreadsheetPreview.tsx

- InlineSpreadsheetPreviewProps · type · L3-L7 — type InlineSpreadsheetPreviewProps = { filePath: string; workspacePath: string; onOpenViewer?: (path: string) => void; };
- ParsedSheet · type · L9-L12 — type ParsedSheet = { name: string; rows: string[][]; };
- columnLetter · function · L16-L24 — function columnLetter(index: number): string
- parseSheets · function · L26-L38 — function parseSheets(content: string): ParsedSheet[]
- InlineSpreadsheetPreview · function · L40-L251 — function InlineSpreadsheetPreview({ filePath, workspacePath, onOpenViewer, }: InlineSpreadsheetPreviewProps)
- run · function · L54-L79 — run = async ()
- handleOpenViewer · function · L92-L96 — handleOpenViewer = ()
- handleDownload · function · L98-L104 — handleDownload = async ()
