# src/electron/agent/tools/voice-call-tools.ts

- VoiceCallAction · type · L11-L11 — type VoiceCallAction = "list_agents" | "list_phone_numbers" | "initiate_call";
- VoiceCallActionInput · interface · L13-L32 — interface VoiceCallActionInput
- VoiceCallTools · class · L34-L333 — class VoiceCallTools
- constructor · method · L35-L39 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L41-L43 — setWorkspace(workspace: Workspace): void
- isEnabled · method · L45-L47 — static isEnabled(): boolean
- isSensitiveKey · method · L53-L65 — private static isSensitiveKey(key: string): boolean
- redactSensitive · method · L67-L86 — private redactSensitive(value: unknown, depth = 0, seen = new WeakSet<object>()): unknown
- getApiKey · method · L88-L98 — private getApiKey(): string
- ensureDomainAllowed · method · L100-L118 — private async ensureDomainAllowed(url: string): Promise<void>
- requestApproval · method · L120-L131 — private async requestApproval(summary: string, details: Record<string, unknown>): Promise<void>
- buildConversationInitiationClientData · method · L133-L179 — private buildConversationInitiationClientData( input: VoiceCallActionInput, ): Record<string, unknown> | undefined
- elevenLabsRequest · method · L181-L227 — private async elevenLabsRequest(params: { method: "GET" | "POST"; path: string; query?: Record<string, string | number | boolean | undefined>; body?: Record<string, unknown>; }): Promise<Any>
- executeAction · method · L229-L332 — async executeAction(input: VoiceCallActionInput): Promise<Any>
