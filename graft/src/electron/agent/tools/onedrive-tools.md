# src/electron/agent/tools/onedrive-tools.ts

- OneDriveAction · type · L12-L19 — type OneDriveAction = | "get_drive" | "search" | "list_children" | "get_item" | "create_folder" | "upload_file" | "delete_item";
- OneDriveActionInput · interface · L21-L31 — interface OneDriveActionInput
- OneDriveTools · class · L33-L216 — class OneDriveTools
- constructor · method · L34-L38 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L40-L42 — setWorkspace(workspace: Workspace): void
- isEnabled · method · L44-L46 — static isEnabled(): boolean
- requireApproval · method · L48-L59 — private async requireApproval(summary: string, details: Record<string, unknown>): Promise<void>
- resolveFilePath · method · L61-L79 — private async resolveFilePath(inputPath: string): Promise<string>
- getDrivePrefix · method · L81-L85 — private getDrivePrefix(inputDriveId?: string): string
- executeAction · method · L87-L215 — async executeAction(input: OneDriveActionInput): Promise<Any>
