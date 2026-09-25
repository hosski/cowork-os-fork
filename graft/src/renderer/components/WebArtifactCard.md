# src/renderer/components/WebArtifactCard.tsx

- WebArtifactCardProps · type · L6-L10 — type WebArtifactCardProps = { filePath: string; workspacePath?: string; onOpenViewer?: (path: string) => void; };
- getFileName · function · L12-L14 — function getFileName(filePath: string): string
- WebArtifactCard · function · L16-L183 — function WebArtifactCard({ filePath, workspacePath, onOpenViewer }: WebArtifactCardProps)
- handlePointerDown · function · L27-L31 — handlePointerDown = (event: PointerEvent)
- updateMenuPosition · function · L41-L51 — updateMenuPosition = ()
- handleKeyDown · function · L63-L65 — handleKeyDown = (event: KeyboardEvent)
- handleOpenViewer · function · L70-L77 — handleOpenViewer = ()
- handleOpenBrowser · function · L79-L82 — handleOpenBrowser = ()
- handleShowInFinder · function · L84-L87 — handleShowInFinder = ()
- handleCopyPath · function · L89-L92 — handleCopyPath = ()
