# src/electron/memory/MemoryConsolidator.ts

- MemoryConsolidationPhase · type · L7-L7 — type MemoryConsolidationPhase = "orient" | "gather_signal" | "consolidate" | "prune_index";
- MemoryConsolidationResult · interface · L9-L17 — interface MemoryConsolidationResult
- todayIso · function · L19-L21 — function todayIso(): string
- MemoryConsolidator · class · L23-L150 — class MemoryConsolidator
- run · method · L24-L149 — static async run(params: { workspaceId: string; workspacePath: string; taskId?: string; taskPrompt: string; readGuard?: MarkdownMemoryReadGuard; writeGuard?: (candidatePath: string) => boolean; }): Promise<MemoryConsolidationResult>
- canWrite · function · L33-L40 — canWrite = (candidatePath: string): boolean
