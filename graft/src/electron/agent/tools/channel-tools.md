# src/electron/agent/tools/channel-tools.ts

- ChannelHistoryDirection · type · L9-L9 — type ChannelHistoryDirection = "incoming" | "outgoing" | "both";
- isValidDiscordSnowflake · function · L13-L15 — function isValidDiscordSnowflake(id: string): boolean
- parseDurationMs · function · L17-L51 — function parseDurationMs(input: string): number | null
- parseAttachments · function · L53-L73 — function parseAttachments( raw: unknown, ): Array<{ type: string; url?: string; fileName?: string }> | undefined
- ChannelTools · class · L75-L621 — class ChannelTools
- constructor · method · L78-L84 — constructor( private db: Database.Database, private daemon: AgentDaemon, private taskId: string, )
- getToolDefinitions · method · L86-L214 — static getToolDefinitions(): LLMTool[]
- listChats · method · L216-L344 — async listChats(input: { channel: unknown; limit?: unknown; since?: unknown }): Promise<Any>
- channelHistory · method · L346-L491 — async channelHistory(input: { channel: unknown; chat_id: unknown; limit?: unknown; since?: unknown; direction?: unknown; }): Promise<Any>
- fetchDiscordMessages · method · L493-L551 — async fetchDiscordMessages(input: { chat_id: unknown; limit?: unknown }): Promise<Any>
- downloadDiscordAttachment · method · L553-L620 — async downloadDiscordAttachment(input: { chat_id: unknown; message_id: unknown }): Promise<Any>
