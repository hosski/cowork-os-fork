# src/renderer/components/PresentationArtifactCard.tsx

- PresentationArtifactCardProps · type · L9-L13 — type PresentationArtifactCardProps = { filePath: string; workspacePath?: string; onOpenViewer?: (path: string) => void; };
- getFileName · function · L15-L17 — function getFileName(filePath: string): string
- PresentationArtifactCard · function · L19-L195 — function PresentationArtifactCard({ filePath, workspacePath, onOpenViewer, }: PresentationArtifactCardProps)
- handlePointerDown · function · L34-L38 — handlePointerDown = (event: PointerEvent)
- updateMenuPosition · function · L48-L58 — updateMenuPosition = ()
- handleKeyDown · function · L70-L72 — handleKeyDown = (event: KeyboardEvent)
- handleOpenViewer · function · L77-L84 — handleOpenViewer = ()
- handleOpenWithApp · function · L86-L91 — handleOpenWithApp = (appName: string)
- handleShowInFinder · function · L93-L96 — handleShowInFinder = ()
