# src/renderer/components/InlineDocumentPreview.tsx

- InlineDocumentPreviewProps · type · L5-L9 — type InlineDocumentPreviewProps = { filePath: string; workspacePath: string; onOpenViewer?: (path: string) => void; };
- SupportedDocumentType · type · L11-L11 — type SupportedDocumentType = "pdf" | "docx" | "document" | "markdown" | "latex" | "text" | "code";
- formatFileSize · function · L23-L30 — function formatFileSize(bytes: number): string
- isDocumentType · function · L32-L42 — function isDocumentType(type: string): type is SupportedDocumentType
- htmlToText · function · L44-L52 — function htmlToText(html: string): string
- getTypeLabel · function · L54-L71 — function getTypeLabel(type: SupportedDocumentType): string
- getPreviewText · function · L73-L86 — function getPreviewText(data: { fileType: SupportedDocumentType; content: string | null; htmlContent?: string; documentPreview?: { text: string; htmlContent?: string }; }): string
- InlineDocumentPreview · function · L88-L283 — function InlineDocumentPreview({ filePath, workspacePath, onOpenViewer, }: InlineDocumentPreviewProps)
- run · function · L104-L148 — run = async ()
- handleOpen · function · L175-L185 — handleOpen = async ()
