# src/electron/agentmail/AgentMailRealtimeService.ts

- asObject · function · L11-L13 — function asObject(value: unknown): Record<string, unknown> | null
- asString · function · L15-L17 — function asString(value: unknown): string | undefined
- RuntimeState · type · L19-L22 — type RuntimeState = Pick< AgentMailStatus, "realtimeConnected" | "connectionState" | "lastEventAt" | "error" >;
- AgentMailRealtimeService · class · L24-L335 — class AgentMailRealtimeService
- constructor · method · L36-L39 — constructor( private readonly db: Database.Database, private readonly mailboxService: MailboxService, )
- getRuntimeStatus · method · L41-L66 — getRuntimeStatus(): RuntimeState
- persistRuntimeState · method · L68-L89 — private persistRuntimeState(next: RuntimeState): void
- loadSubscribedInboxIds · method · L91-L96 — private loadSubscribedInboxIds(): string[]
- start · method · L98-L106 — start(): void
- stop · method · L108-L129 — stop(): void
- refreshSubscriptions · method · L131-L147 — refreshSubscriptions(): void
- scheduleReconnect · method · L149-L157 — private scheduleReconnect(): void
- connect · method · L159-L220 — private connect(): void
- sendSubscription · method · L222-L242 — private sendSubscription(inboxIds: string[]): void
- handleMessage · method · L244-L334 — private async handleMessage(raw: string): Promise<void>
