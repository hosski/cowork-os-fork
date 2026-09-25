# src/electron/memory/ExternalMemoryProvider.ts

- ExternalMemoryTurnContext · interface · L4-L11 — interface ExternalMemoryTurnContext
- ExternalMemoryPrefetchResult · interface · L13-L17 — interface ExternalMemoryPrefetchResult
- ExternalMemorySyncTurnInput · interface · L19-L23 — interface ExternalMemorySyncTurnInput extends ExternalMemoryTurnContext
- ExternalMemoryExtractSessionInput · interface · L25-L27 — interface ExternalMemoryExtractSessionInput extends ExternalMemoryTurnContext
- ExternalMemoryProvider · interface · L29-L40 — interface ExternalMemoryProvider
- SupermemoryExternalProvider · class · L42-L109 — class SupermemoryExternalProvider implements ExternalMemoryProvider
- isEnabled · method · L45-L47 — isEnabled(): boolean
- prefetch · method · L49-L60 — async prefetch(context: ExternalMemoryTurnContext): Promise<ExternalMemoryPrefetchResult | null>
- syncTurn · method · L62-L79 — async syncTurn(input: ExternalMemorySyncTurnInput): Promise<void>
- extractSession · method · L81-L95 — async extractSession(input: ExternalMemoryExtractSessionInput): Promise<void>
- forget · method · L97-L108 — async forget(scope: { workspace: Pick<Workspace, "id" | "name">; memoryId?: string; text?: string; }): Promise<void>
- ExternalMemoryProviderRegistry · class · L111-L128 — class ExternalMemoryProviderRegistry
- constructor · method · L114-L116 — constructor(providers: ExternalMemoryProvider[] = [new SupermemoryExternalProvider()])
- listEnabled · method · L118-L120 — listEnabled(): ExternalMemoryProvider[]
- prefetchAll · method · L122-L127 — async prefetchAll(context: ExternalMemoryTurnContext): Promise<ExternalMemoryPrefetchResult[]>
