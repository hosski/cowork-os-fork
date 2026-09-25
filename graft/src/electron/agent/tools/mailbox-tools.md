# src/electron/agent/tools/mailbox-tools.ts

- MailboxAction · type · L12-L25 — type MailboxAction = | "sync" | "list_threads" | "get_thread" | "summarize_thread" | "generate_draft" | "extract_commitments" | "propose_cleanup" | "propose_followups" | "schedule_reply" | "research_contact" | "apply_action" | "review_bulk_action" | "create_compose_frame";
- MailboxActionInput · interface · L27-L59 — interface MailboxActionInput
- normalizeComposeMode · function · L71-L73 — function normalizeComposeMode(mode: MailboxActionInput["mode"]): MailboxComposeMode
- normalizeRecipientInput · function · L75-L94 — function normalizeRecipientInput(value: unknown): MailboxRecipientInput[] | undefined
- providerForAccount · function · L96-L101 — function providerForAccount( accountId: string, accounts: Array<{ id: string; provider: MailboxProvider }>, ): MailboxProvider
- MailboxTools · class · L103-L264 — class MailboxTools
- constructor · method · L106-L113 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, db: Database.Database, )
- setWorkspace · method · L115-L117 — setWorkspace(workspace: Workspace): void
- isAvailable · method · L119-L121 — isAvailable(): boolean
- executeAction · method · L123-L263 — async executeAction(input: MailboxActionInput): Promise<Any>
