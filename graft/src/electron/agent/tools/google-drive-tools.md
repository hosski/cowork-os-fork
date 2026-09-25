# src/electron/agent/tools/google-drive-tools.ts

- GoogleDriveAction · type · L18-L24 — type GoogleDriveAction = | "get_current_user" | "list_files" | "get_file" | "create_folder" | "upload_file" | "delete_file";
- GoogleDriveActionInput · interface · L26-L36 — interface GoogleDriveActionInput
- GoogleDriveTools · class · L42-L228 — class GoogleDriveTools
- constructor · method · L43-L47 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L49-L51 — setWorkspace(workspace: Workspace): void
- isEnabled · method · L53-L62 — static isEnabled(): boolean
- requireApproval · method · L64-L75 — private async requireApproval(summary: string, details: Record<string, unknown>): Promise<void>
- resolveFilePath · method · L77-L95 — private async resolveFilePath(inputPath: string): Promise<string>
- executeAction · method · L97-L227 — async executeAction(input: GoogleDriveActionInput): Promise<Any>
