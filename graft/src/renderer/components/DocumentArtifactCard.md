# src/renderer/components/DocumentArtifactCard.tsx

- DocumentArtifactCardProps · type · L10-L14 — type DocumentArtifactCardProps = { filePath: string; workspacePath?: string; onOpenViewer?: (path: string) => void; };
- getFileName · function · L16-L18 — function getFileName(filePath: string): string
- getDocumentIconLabel · function · L20-L27 — function getDocumentIconLabel(filePath: string): string
- DocumentArtifactCard · function · L29-L202 — function DocumentArtifactCard({ filePath, workspacePath, onOpenViewer, }: DocumentArtifactCardProps)
- handlePointerDown · function · L45-L49 — handlePointerDown = (event: PointerEvent)
- updateMenuPosition · function · L59-L69 — updateMenuPosition = ()
- handleKeyDown · function · L81-L83 — handleKeyDown = (event: KeyboardEvent)
- handleOpenViewer · function · L88-L95 — handleOpenViewer = ()
- handleOpenWithApp · function · L97-L102 — handleOpenWithApp = (appName: string)
- handleShowInFinder · function · L104-L107 — handleShowInFinder = ()
