# src/electron/canvas/canvas-store.ts

- CanvasStoreFile · interface · L11-L14 — interface CanvasStoreFile
- getCanvasDir · function · L20-L25 — function getCanvasDir(): string
- getCanvasStorePath · function · L27-L32 — function getCanvasStorePath(): string
- isValidSession · function · L40-L59 — function isValidSession(s: unknown): s is CanvasSession
- loadCanvasStore · function · L65-L92 — async function loadCanvasStore(storePath?: string): Promise<CanvasStoreFile>
- loadCanvasStoreSync · function · L97-L123 — function loadCanvasStoreSync(storePath?: string): CanvasStoreFile
- saveCanvasStore · function · L129-L159 — async function saveCanvasStore(store: CanvasStoreFile, storePath?: string): Promise<void>
- saveCanvasStoreSync · function · L164-L194 — function saveCanvasStoreSync(store: CanvasStoreFile, storePath?: string): void
