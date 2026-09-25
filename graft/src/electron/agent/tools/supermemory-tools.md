# src/electron/agent/tools/supermemory-tools.ts

- SupermemoryTools · class · L6-L321 — class SupermemoryTools
- constructor · method · L7-L11 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L13-L15 — setWorkspace(workspace: Workspace): void
- isEnabled · method · L17-L19 — static isEnabled(): boolean
- getToolDefinitions · method · L21-L134 — static getToolDefinitions(): LLMTool[]
- profile · method · L136-L169 — async profile(input: { query?: string; containerTag?: string; threshold?: number }): Promise<{ containerTag: string; staticFacts: string[]; dynamicFacts: string[]; results: Array<{ id?: string; text: string; similarity?: number; updatedAt?: string; metadata?: Record<string, unknown>; }>; total: number; }>
- search · method · L171-L213 — async search(input: { query: string; containerTag?: string; limit?: number; threshold?: number; rerank?: boolean; searchMode?: "hybrid" | "memories"; }): Promise<{ containerTag: string; results: Array<{ id?: string; text: string; similarity?: number; updatedAt?: string; metadata?: Record<string, unknown>; }>; total: number; timingMs?: number; }>
- remember · method · L215-L286 — async remember(input: { content: string; containerTag?: string }): Promise<{ success: boolean; containerTag: string; memoryIds: string[]; staged?: boolean; pendingId?: string; blocked?: boolean; error?: string; message?: string; }>
- forget · method · L288-L320 — async forget(input: { memoryId?: string; content?: string; containerTag?: string; reason?: string; }): Promise<{ success: boolean; containerTag: string; id?: string; forgotten: boolean }>
