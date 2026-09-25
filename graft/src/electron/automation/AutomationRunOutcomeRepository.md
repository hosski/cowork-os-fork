# src/electron/automation/AutomationRunOutcomeRepository.ts

- parseJson · function · L10-L17 — function parseJson<T>(value: unknown, fallback: T): T
- AutomationRunOutcomeRepository · class · L19-L320 — class AutomationRunOutcomeRepository
- constructor · method · L20-L22 — constructor(private readonly db: Database.Database)
- create · method · L24-L85 — create(input: CreateAutomationRunOutcomeInput): AutomationRunOutcome
- findLatestByNotificationKey · method · L87-L124 — findLatestByNotificationKey( notificationKey: string, scopeKey?: string, ): AutomationRunOutcome | null
- findById · method · L126-L131 — findById(id: string): AutomationRunOutcome | null
- list · method · L133-L167 — list(request: AutomationRunOutcomeListRequest = {}): AutomationRunOutcome[]
- summarize · method · L169-L215 — summarize( input: { from?: number; to?: number; companyId?: string; workspaceId?: string } = {}, ): AutomationRunOutcomeSummary
- markNotificationDelivered · method · L217-L223 — markNotificationDelivered(id: string, timestamp = Date.now()): void
- markNotificationSkipped · method · L225-L231 — markNotificationSkipped(id: string, reason: string, timestamp = Date.now()): void
- ensureSchema · method · L233-L286 — private ensureSchema(): void
- mapRow · method · L288-L319 — private mapRow(row: Record<string, unknown>): AutomationRunOutcome
