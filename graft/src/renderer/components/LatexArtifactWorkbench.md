# src/renderer/components/LatexArtifactWorkbench.tsx

- LatexArtifactWorkbenchProps · type · L5-L10 — type LatexArtifactWorkbenchProps = { sourcePath: string; pdfPath: string; workspacePath: string; onOpenViewer?: (path: string) => void; };
- ActiveTab · type · L12-L12 — type ActiveTab = "summary" | "source" | "pdf";
- fileName · function · L14-L16 — function fileName(filePath: string): string
- formatFileSize · function · L18-L24 — function formatFileSize(bytes: number | undefined): string
- LatexArtifactWorkbench · function · L26-L248 — function LatexArtifactWorkbench({ sourcePath, pdfPath, workspacePath, onOpenViewer, }: LatexArtifactWorkbenchProps)
- run · function · L44-L63 — run = async ()
- run · function · L73-L98 — run = async ()
- openPath · function · L110-L116 — openPath = (targetPath: string)
- showPath · function · L118-L120 — showPath = (targetPath: string)
