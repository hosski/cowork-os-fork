# src/electron/agent/tools/scratchpad-tools.ts

- ScratchpadTools · class · L19-L202 — class ScratchpadTools
- constructor · method · L25-L40 — constructor( private taskId: string, workspacePathOrWorkspace?: string | Pick<Workspace, "path" | "permissions">, )
- setWorkspace · method · L43-L57 — setWorkspace(workspace: Pick<Workspace, "path" | "permissions">): void
- getToolDefinitions · method · L59-L101 — static getToolDefinitions(): LLMTool[]
- write · method · L103-L121 — write(input: { key: string; content: string }): { success: boolean; key: string; noteCount: number; }
- read · method · L123-L140 — read(input: { key?: string }): { notes: Array<{ key: string; content: string; timestamp: number }>; totalNotes: number; }
- getAll · method · L143-L145 — getAll(): Map<string, { content: string; timestamp: number }>
- flushToDisk · method · L148-L165 — private flushToDisk(): void
- restoreFromDisk · method · L168-L183 — private restoreFromDisk(): void
- canAccessCheckpoint · method · L185-L194 — private canAccessCheckpoint(operation: "read" | "write"): boolean
- getCheckpointPath · method · L196-L201 — private getCheckpointPath(workspacePath: string): string
