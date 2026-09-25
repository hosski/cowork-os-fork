# src/renderer/components/InlineVideoPreview.tsx

- InlineVideoPreviewProps · type · L5-L14 — type InlineVideoPreviewProps = { filePath: string; workspacePath: string; title?: string; posterPath?: string; muted?: boolean; loop?: boolean; className?: string; onOpenViewer?: (path: string) => void; };
- formatFileSize · function · L16-L23 — formatFileSize = (bytes: number): string
- InlineVideoPreview · function · L25-L236 — function InlineVideoPreview({ filePath, workspacePath, title, posterPath, muted = false, loop = false, className = "", onOpenViewer, }: InlineVideoPreviewProps)
- run · function · L50-L73 — run = async ()
- run · function · L89-L108 — run = async ()
- handleOpen · function · L141-L151 — handleOpen = async ()
