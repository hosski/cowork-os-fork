# src/electron/supervisor/SupervisorExchangeRepository.ts

- safeJsonParse · function · L13-L20 — function safeJsonParse<T>(raw: string | null | undefined, fallback: T): T
- CreateSupervisorExchangeRequest · type · L22-L28 — type CreateSupervisorExchangeRequest = Omit< SupervisorExchange, "id" | "createdAt" | "updatedAt" | "turnCount" | "status" > & { status?: SupervisorExchangeStatus; turnCount?: number; };
- AddSupervisorExchangeMessageRequest · type · L30-L30 — type AddSupervisorExchangeMessageRequest = Omit<SupervisorExchangeMessage, "id" | "createdAt">;
- SupervisorExchangeRepository · class · L32-L287 — class SupervisorExchangeRepository
- constructor · method · L33-L33 — constructor(private db: Database.Database)
- create · method · L35-L91 — create(request: CreateSupervisorExchangeRequest): SupervisorExchange
- update · method · L93-L144 — update(id: string, updates: Partial<SupervisorExchange>): SupervisorExchange | undefined
- push · function · L100-L103 — push = (field: string, value: unknown)
- findById · method · L146-L149 — findById(id: string): SupervisorExchange | undefined
- findBySourceMessageId · method · L151-L158 — findBySourceMessageId(sourceMessageId: string): SupervisorExchange | undefined
- findByDiscordMessageId · method · L160-L171 — findByDiscordMessageId(discordMessageId: string): SupervisorExchange | undefined
- list · method · L173-L191 — list(query: SupervisorExchangeListQuery): SupervisorExchange[]
- addMessage · method · L193-L229 — addMessage(request: AddSupervisorExchangeMessageRequest): SupervisorExchangeMessage | null
- listMessages · method · L231-L238 — listMessages(exchangeId: string): SupervisorExchangeMessage[]
- findMessageByDiscordMessageId · method · L240-L245 — findMessageByDiscordMessageId(discordMessageId: string): SupervisorExchangeMessage | undefined
- mapExchange · method · L247-L272 — private mapExchange(row: Any): SupervisorExchange
- mapMessage · method · L274-L286 — private mapMessage(row: Any): SupervisorExchangeMessage
