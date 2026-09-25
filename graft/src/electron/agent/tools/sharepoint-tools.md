# src/electron/agent/tools/sharepoint-tools.ts

- SharePointAction · type · L12-L21 — type SharePointAction = | "get_current_user" | "search_sites" | "get_site" | "list_site_drives" | "list_drive_items" | "get_item" | "create_folder" | "upload_file" | "delete_item";
- SharePointActionInput · interface · L23-L34 — interface SharePointActionInput
- SharePointTools · class · L36-L248 — class SharePointTools
- constructor · method · L37-L41 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L43-L45 — setWorkspace(workspace: Workspace): void
- isEnabled · method · L47-L49 — static isEnabled(): boolean
- requireApproval · method · L51-L62 — private async requireApproval(summary: string, details: Record<string, unknown>): Promise<void>
- resolveFilePath · method · L64-L82 — private async resolveFilePath(inputPath: string): Promise<string>
- getSiteId · method · L84-L91 — private getSiteId(inputSiteId?: string): string
- getDriveId · method · L93-L100 — private getDriveId(inputDriveId?: string): string
- executeAction · method · L102-L247 — async executeAction(input: SharePointActionInput): Promise<Any>
