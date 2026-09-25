# src/electron/agent/tools/notion-tools.ts

- NotionAction · type · L6-L23 — type NotionAction = | "search" | "list_users" | "get_user" | "get_page" | "get_page_property" | "get_database" | "get_block" | "get_block_children" | "update_block" | "delete_block" | "create_page" | "update_page" | "append_blocks" | "query_data_source" | "get_data_source" | "create_data_source" | "update_data_source";
- NotionActionInput · interface · L25-L50 — interface NotionActionInput
- NotionTools · class · L52-L371 — class NotionTools
- constructor · method · L53-L57 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L59-L61 — setWorkspace(workspace: Workspace): void
- isEnabled · method · L63-L65 — static isEnabled(): boolean
- requireApproval · method · L67-L78 — private async requireApproval(summary: string, details: Record<string, unknown>): Promise<void>
- buildPagination · method · L80-L85 — private buildPagination(input: NotionActionInput): Record<string, Any>
- buildTitle · method · L87-L92 — private buildTitle(title?: string): Array<{ text: { content: string } }> | undefined
- buildParent · method · L94-L102 — private buildParent(input: NotionActionInput): Record<string, string>
- executeAction · method · L104-L370 — async executeAction(input: NotionActionInput): Promise<Any>
