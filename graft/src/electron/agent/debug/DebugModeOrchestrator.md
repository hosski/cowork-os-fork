# src/electron/agent/debug/DebugModeOrchestrator.ts

- DebugTimelineEmit · type · L9-L9 — type DebugTimelineEmit = (type: string, payload: Record<string, unknown>) => void;
- makeEvidenceRef · function · L11-L19 — function makeEvidenceRef(line: string): EvidenceRef
- startDebugModeSession · function · L24-L71 — async function startDebugModeSession( taskId: string, emit: DebugTimelineEmit, ): Promise<{ ingestUrl: string }>
- endDebugModeSession · function · L73-L75 — function endDebugModeSession(taskId: string): void
