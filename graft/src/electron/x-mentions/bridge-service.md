# src/electron/x-mentions/bridge-service.ts

- XMentionBridgeServiceOptions · interface · L14-L16 — interface XMentionBridgeServiceOptions
- XMentionBridgeService · class · L18-L232 — class XMentionBridgeService
- constructor · method · L35-L42 — constructor(agentDaemon: AgentDaemon, options: XMentionBridgeServiceOptions = {})
- start · method · L44-L50 — start(): void
- stop · method · L52-L61 — stop(): void
- triggerNow · method · L63-L68 — triggerNow(): void
- schedulePoll · method · L70-L82 — private schedulePoll(delayMs: number): void
- getCurrentPollIntervalMs · method · L84-L88 — private getCurrentPollIntervalMs(): number
- getFailureBackoffMs · method · L90-L106 — private getFailureBackoffMs(code: XMentionFailureCode, baseIntervalMs: number): number
- pollOnce · method · L108-L192 — private async pollOnce(): Promise<void>
- resetFailureLogSuppression · method · L194-L197 — private resetFailureLogSuppression(): void
- logPollFailure · method · L199-L231 — private logPollFailure( failure: ReturnType<typeof classifyXMentionFailure>, nextDelayMs: number, ): void
- initializeXMentionBridgeService · function · L236-L244 — function initializeXMentionBridgeService( agentDaemon: AgentDaemon, options: XMentionBridgeServiceOptions = {}, ): XMentionBridgeService
- getXMentionBridgeService · function · L246-L248 — function getXMentionBridgeService(): XMentionBridgeService | null
