# src/electron/agent/tools/email-imap-tools.ts

- asNonEmptyString · function · L9-L13 — function asNonEmptyString(value: unknown): string | null
- asNumber · function · L15-L17 — function asNumber(value: unknown): number | null
- asBoolean · function · L19-L21 — function asBoolean(value: unknown): boolean | null
- EmailImapTools · class · L23-L248 — class EmailImapTools
- constructor · method · L26-L32 — constructor( private db: Database.Database, private daemon: AgentDaemon, private taskId: string, )
- isAvailable · method · L34-L58 — isAvailable(): boolean
- getToolDefinitions · method · L60-L89 — static getToolDefinitions(): LLMTool[]
- listUnread · method · L91-L247 — async listUnread(input: { limit?: unknown; mailbox?: unknown; max_body_chars?: unknown; }): Promise<Any>
- getLoomAccessToken · function · L134-L134 — getLoomAccessToken = ()
