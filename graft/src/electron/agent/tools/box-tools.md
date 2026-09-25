# src/electron/agent/tools/box-tools.ts

- BoxAction · type · L12-L21 — type BoxAction = | "get_current_user" | "search" | "get_file" | "get_folder" | "list_folder_items" | "create_folder" | "delete_file" | "delete_folder" | "upload_file";
- BoxActionInput · interface · L23-L43 — interface BoxActionInput
- BoxTools · class · L47-L241 — class BoxTools
- constructor · method · L48-L52 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L54-L56 — setWorkspace(workspace: Workspace): void
- isEnabled · method · L58-L60 — static isEnabled(): boolean
- requireApproval · method · L62-L73 — private async requireApproval(summary: string, details: Record<string, unknown>): Promise<void>
- resolveFilePath · method · L75-L93 — private async resolveFilePath(inputPath: string): Promise<string>
- executeAction · method · L95-L240 — async executeAction(input: BoxActionInput): Promise<Any>
