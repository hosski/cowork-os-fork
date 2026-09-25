# src/electron/agent/tools/dropbox-tools.ts

- DropboxAction · type · L12-L20 — type DropboxAction = | "get_current_user" | "list_folder" | "list_folder_continue" | "search" | "get_metadata" | "create_folder" | "delete_item" | "upload_file";
- DropboxActionInput · interface · L22-L31 — interface DropboxActionInput
- DropboxTools · class · L33-L229 — class DropboxTools
- constructor · method · L34-L38 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L40-L42 — setWorkspace(workspace: Workspace): void
- isEnabled · method · L44-L46 — static isEnabled(): boolean
- requireApproval · method · L48-L59 — private async requireApproval(summary: string, details: Record<string, unknown>): Promise<void>
- resolveFilePath · method · L61-L79 — private async resolveFilePath(inputPath: string): Promise<string>
- normalizeDropboxPath · method · L81-L85 — private normalizeDropboxPath(pathValue: string): string
- executeAction · method · L87-L228 — async executeAction(input: DropboxActionInput): Promise<Any>
