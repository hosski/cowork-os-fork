# src/electron/agent/tools/edit-tools.ts

- hasStableFileIdentity · function · L17-L20 — function hasStableFileIdentity(left: fs.Stats, right: fs.Stats): boolean
- EditTools · class · L26-L358 — class EditTools
- constructor · method · L27-L31 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L36-L38 — setWorkspace(workspace: Workspace): void
- getToolDefinitions · method · L43-L78 — static getToolDefinitions(): LLMTool[]
- editFile · method · L83-L321 — async editFile(input: { file_path: string; old_string: string; new_string: string; replace_all?: boolean; }): Promise<{ success: boolean; file_path: string; replacements: number; error?: string; }>
- countOccurrences · method · L326-L338 — private countOccurrences(content: string, searchString: string): number
- writeFileThroughDescriptor · method · L340-L357 — private writeFileThroughDescriptor( realPath: string, content: string, expectedIdentity: fs.Stats, ): void
