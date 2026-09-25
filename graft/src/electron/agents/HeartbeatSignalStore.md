# src/electron/agents/HeartbeatSignalStore.ts

- SubmitHeartbeatSignalInput · interface · L14-L28 — interface SubmitHeartbeatSignalInput
- PersistedSignalStoreState · interface · L30-L34 — interface PersistedSignalStoreState
- stableHash · function · L67-L70 — function stableHash(input: string): string
- makeDeferredKey · function · L72-L74 — function makeDeferredKey(agentRoleId: string, workspaceId?: string): string
- HeartbeatSignalStore · class · L76-L239 — class HeartbeatSignalStore
- filePath · method · L80-L82 — private get filePath(): string
- load · method · L84-L99 — private load(): void
- save · method · L101-L111 — private save(): void
- prune · method · L113-L120 — private prune(now = Date.now()): void
- submit · method · L122-L186 — submit(input: SubmitHeartbeatSignalInput): { signal: HeartbeatSignal; merged: boolean }
- listAgentSignals · method · L188-L194 — listAgentSignals(agentRoleId: string, now = Date.now()): HeartbeatSignal[]
- removeSignals · method · L196-L210 — removeSignals( agentRoleId: string, signalSnapshots: Array<Pick<HeartbeatSignal, "id" | "lastSeenAt" | "mergedCount">>, ): void
- clearAgent · method · L212-L221 — clearAgent(agentRoleId: string): void
- getDeferredState · method · L223-L226 — getDeferredState(agentRoleId: string, workspaceId?: string): HeartbeatDeferredState | undefined
- setDeferredState · method · L228-L232 — setDeferredState(agentRoleId: string, state: HeartbeatDeferredState, workspaceId?: string): void
- clearDeferredState · method · L234-L238 — clearDeferredState(agentRoleId: string, workspaceId?: string): void
