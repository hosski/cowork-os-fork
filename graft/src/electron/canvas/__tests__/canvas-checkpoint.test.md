# src/electron/canvas/__tests__/canvas-checkpoint.test.ts

- CheckpointStore · class · L24-L113 — class CheckpointStore
- saveCheckpoint · method · L28-L68 — async saveCheckpoint( sessionDir: string, sessionId: string, label?: string, ): Promise<CanvasCheckpoint>
- restoreCheckpoint · method · L70-L92 — async restoreCheckpoint( sessionDir: string, sessionId: string, checkpointId: string, ): Promise<CanvasCheckpoint>
- listCheckpoints · method · L94-L99 — listCheckpoints(sessionId: string): CanvasCheckpoint[]
- deleteCheckpoint · method · L101-L108 — deleteCheckpoint(sessionId: string, checkpointId: string): boolean
- clear · method · L110-L112 — clear(): void
- constructor · method · L176-L179 — constructor()
