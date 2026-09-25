# src/electron/context/kit-revisions.ts

- KitRevisionMeta · interface · L5-L11 — interface KitRevisionMeta
- KitRevisionPathGuard · type · L13-L13 — type KitRevisionPathGuard = (absPath: string, operation: "read" | "write") => void;
- sha · function · L15-L17 — function sha(text: string): string
- getKitSnapshotRoot · function · L19-L21 — function getKitSnapshotRoot(absPath: string): string
- getKitRevisionCount · function · L23-L34 — function getKitRevisionCount(absPath: string): number
- writeKitFileWithSnapshot · function · L36-L84 — function writeKitFileWithSnapshot( absPath: string, content: string, changedBy: KitRevisionMeta["changedBy"], reason?: string, pathGuard?: KitRevisionPathGuard, ): void
