# src/renderer/components/InlineImagePreview.tsx

- InlineImagePreviewProps · type · L5-L9 — type InlineImagePreviewProps = { filePath: string; workspacePath: string; onOpenViewer?: (path: string) => void; };
- formatFileSize · function · L11-L18 — formatFileSize = (bytes: number): string
- InlineImagePreview · function · L20-L133 — function InlineImagePreview({ filePath, workspacePath, onOpenViewer, }: InlineImagePreviewProps)
- run · function · L40-L64 — run = async ()
- handleOpen · function · L77-L87 — handleOpen = async ()
