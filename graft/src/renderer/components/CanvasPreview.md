# src/renderer/components/CanvasPreview.tsx

- CanvasPreviewProps · interface · L6-L11 — interface CanvasPreviewProps
- SnapshotHistoryEntry · interface · L13-L17 — interface SnapshotHistoryEntry
- ConsoleLogEntry · interface · L19-L23 — interface ConsoleLogEntry
- RefreshRate · type · L26-L26 — type RefreshRate = 1000 | 2000 | 5000 | 0;
- withTimeout · function · L51-L67 — function withTimeout<T>(promise: Promise<T>, timeoutMs: number, errorMessage: string): Promise<T>
- simpleHash · function · L70-L78 — function simpleHash(str: string): string
- CanvasImageProps · interface · L81-L89 — interface CanvasImageProps
- formatTime · function · L100-L103 — formatTime = (timestamp: number)
- CanvasPreview · function · L143-L1457 — function CanvasPreview({ session, onClose, forceSnapshot = false, onOpenBrowser, }: CanvasPreviewProps)
- handleMouseMove · function · L488-L495 — handleMouseMove = (e: MouseEvent)
- handleMouseUp · function · L497-L499 — handleMouseUp = ()
- handleKeyDown · function · L712-L808 — handleKeyDown = (e: KeyboardEvent)
- getStatusIndicator · function · L825-L842 — getStatusIndicator = ()
- formatHistoryTime · function · L860-L863 — formatHistoryTime = (timestamp: number)
- LoadingSkeleton · function · L866-L880 — LoadingSkeleton = ()
