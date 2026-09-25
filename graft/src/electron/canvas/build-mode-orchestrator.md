# src/electron/canvas/build-mode-orchestrator.ts

- BuildPhase · type · L11-L11 — type BuildPhase = "concept" | "plan" | "scaffold" | "iterate" | "complete";
- BuildSession · interface · L13-L22 — interface BuildSession
- BuildModeOrchestrator · class · L34-L157 — class BuildModeOrchestrator
- constructor · method · L37-L37 — constructor(private canvasManager: CanvasManager)
- start · method · L42-L61 — start( sessionId: string, taskId: string, workspaceId: string, idea: string, tech = "vanilla HTML/CSS/JS", ): BuildSession
- completePhase · method · L66-L83 — async completePhase(taskId: string): Promise<CanvasCheckpoint | null>
- revertToPhase · method · L88-L107 — async revertToPhase(taskId: string, phase: BuildPhase): Promise<CanvasCheckpoint | null>
- getSession · method · L112-L114 — getSession(taskId: string): BuildSession | undefined
- getPhaseTimeline · method · L119-L131 — getPhaseTimeline( taskId: string, ): Array<{ phase: BuildPhase; label: string; checkpointId?: string; isCurrent: boolean }>
- diffPhases · method · L136-L149 — diffPhases( taskId: string, fromPhase: BuildPhase, toPhase: BuildPhase, ): { added: string[]; removed: string[]; modified: string[] } | null
- remove · method · L154-L156 — remove(taskId: string): void
