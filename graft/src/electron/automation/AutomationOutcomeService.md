# src/electron/automation/AutomationOutcomeService.ts

- canonicalize · function · L12-L22 — function canonicalize(value: unknown): unknown
- canonicalizeEvidenceRefs · function · L24-L28 — function canonicalizeEvidenceRefs(input: CreateAutomationRunOutcomeInput): unknown[]
- deriveChangeHash · function · L30-L42 — function deriveChangeHash(input: CreateAutomationRunOutcomeInput): string
- deriveNotificationKey · function · L44-L59 — function deriveNotificationKey(input: CreateAutomationRunOutcomeInput): string
- deriveNotificationScope · function · L61-L72 — function deriveNotificationScope( outcome: Pick< AutomationRunOutcome, "workspaceId" | "companyId" | "agentRoleId" | "taskId" | "source" >, ): string
- AutomationOutcomeServiceDeps · interface · L74-L77 — interface AutomationOutcomeServiceDeps
- AutomationOutcomeService · class · L79-L140 — class AutomationOutcomeService
- constructor · method · L80-L80 — constructor(private readonly deps: AutomationOutcomeServiceDeps)
- record · method · L82-L122 — async record(input: CreateAutomationRunOutcomeInput): Promise<AutomationRunOutcome>
- retryNotification · method · L125-L139 — async retryNotification(outcomeId: string): Promise<AutomationRunOutcome>
