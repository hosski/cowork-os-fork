# src/electron/mailbox/MailboxAutomationHub.ts

- MailboxAutomationHubDeps · type · L9-L15 — type MailboxAutomationHubDeps = { triggerService?: EventTriggerService | null; heartbeatService?: HeartbeatService | null; resolveDefaultWorkspaceId?: () => string | undefined; emitMailboxEvent?: (event: MailboxEvent) => void; log?: (...args: unknown[]) => void; };
- MailboxSignalPlan · type · L17-L28 — type MailboxSignalPlan = { signalFamily: | "open_loop_pressure" | "suggestion_aging" | "maintenance" | "awareness_signal" | "memory_drift"; urgency: "low" | "medium" | "high" | "critical"; confidence: number; reason: string; fingerprint: string; };
- asString · function · L32-L36 — function asString(value: unknown): string | undefined
- asStringArray · function · L38-L42 — function asStringArray(value: unknown): string[]
- createMailboxTriggerEvent · function · L44-L68 — function createMailboxTriggerEvent(event: MailboxEvent): TriggerEvent
- buildSignalPlan · function · L70-L156 — function buildSignalPlan(event: MailboxEvent): MailboxSignalPlan | null
- buildMailboxFacts · function · L158-L170 — function buildMailboxFacts(event: MailboxEvent): string[]
- buildMailboxCommitments · function · L172-L177 — function buildMailboxCommitments(event: MailboxEvent): Array<{ text: string; dueAt?: number }>
- MailboxAutomationHub · class · L179-L262 — class MailboxAutomationHub
- configure · method · L182-L184 — static configure(deps: MailboxAutomationHubDeps): void
- reset · method · L186-L188 — static reset(): void
- handleMailboxEvent · method · L190-L261 — static handleMailboxEvent(event: MailboxEvent): void
