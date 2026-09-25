# src/electron/agent/tools/memory-tools.ts

- MemoryTools · class · L15-L395 — class MemoryTools
- constructor · method · L16-L20 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L22-L24 — setWorkspace(workspace: Workspace): void
- getToolDefinitions · method · L26-L145 — static getToolDefinitions(): LLMTool[]
- save · method · L147-L246 — async save(input: { content: string; type: "observation" | "decision" | "error" | "insight"; }): Promise<{ success: boolean; memoryId?: string; staged?: boolean; pendingId?: string; message?: string; error?: string; }>
- curate · method · L248-L319 — async curate(input: { action: "add" | "replace" | "remove"; target: "user" | "workspace"; id?: string; kind?: | "identity" | "preference" | "constraint" | "workflow_rule" | "project_fact" | "active_commitment"; content?: string; match?: string; reason?: string; }): Promise<{ success: boolean; entryId?: string; updatedFile?: ".cowork/USER.md" | ".cowork/MEMORY.md"; staged?: boolean; pendingId?: string; message?: string; error?: string; }>
- filesystemReadGuard · function · L279-L281 — filesystemReadGuard = (candidatePath: string): boolean
- filesystemWriteGuard · function · L282-L284 — filesystemWriteGuard = (candidatePath: string): boolean
- isExternalMemoryMirrorAllowed · method · L321-L328 — private isExternalMemoryMirrorAllowed(): boolean
- readCurated · method · L330-L394 — async readCurated(input: { target?: "user" | "workspace" | "all"; kind?: | "identity" | "preference" | "constraint" | "workflow_rule" | "project_fact" | "active_commitment"; limit?: number; }): Promise<{ entries: Array<{ id: string; target: string; kind: string; content: string; confidence: number; updatedAt: string; }>; totalFound: number; }>
