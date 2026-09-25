# src/electron/agent/tools/git-tools.ts

- GitTools · class · L11-L238 — class GitTools
- constructor · method · L12-L16 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L18-L20 — setWorkspace(workspace: Workspace): void
- gitStatus · method · L25-L42 — async gitStatus(): Promise<string>
- gitDiff · method · L47-L79 — async gitDiff(input: { staged?: boolean; file?: string }): Promise<string>
- gitCommit · method · L84-L117 — async gitCommit(input: { message: string; add_all?: boolean }): Promise<string>
- gitMergeToBase · method · L122-L177 — async gitMergeToBase(): Promise<string>
- getToolDefinitions · method · L179-L237 — static getToolDefinitions(): LLMTool[]
