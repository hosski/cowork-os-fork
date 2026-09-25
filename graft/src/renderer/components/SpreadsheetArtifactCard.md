# src/renderer/components/SpreadsheetArtifactCard.tsx

- SpreadsheetArtifactCardProps · type · L10-L14 — type SpreadsheetArtifactCardProps = { filePath: string; workspacePath?: string; onOpenViewer?: (path: string) => void; };
- getFileName · function · L16-L18 — function getFileName(filePath: string): string
- SpreadsheetArtifactCard · function · L20-L203 — function SpreadsheetArtifactCard({ filePath, workspacePath, onOpenViewer, }: SpreadsheetArtifactCardProps)
- handlePointerDown · function · L37-L41 — handlePointerDown = (event: PointerEvent)
- updateMenuPosition · function · L52-L65 — updateMenuPosition = ()
- handleKeyDown · function · L78-L80 — handleKeyDown = (event: KeyboardEvent)
- handleOpenViewer · function · L85-L92 — handleOpenViewer = ()
- handleOpenWithApp · function · L94-L99 — handleOpenWithApp = (appName: string)
- handleShowInFinder · function · L101-L104 — handleShowInFinder = ()
