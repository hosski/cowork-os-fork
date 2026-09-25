# src/electron/security/recurring-approval-service.ts

- safeCanonicalize · function · L17-L47 — function safeCanonicalize(value: unknown, key?: string, hashSensitiveValues = false): unknown
- RecurringApprovalFingerprintInput · interface · L49-L59 — interface RecurringApprovalFingerprintInput
- RecurringApprovalCreateInput · interface · L61-L68 — interface RecurringApprovalCreateInput extends RecurringApprovalFingerprintInput
- RecurringApprovalMatch · interface · L70-L73 — interface RecurringApprovalMatch
- canonicalizeRecurringApprovalOperation · function · L75-L91 — function canonicalizeRecurringApprovalOperation( input: RecurringApprovalFingerprintInput, ): string
- fingerprintRecurringApprovalOperation · function · L93-L117 — function fingerprintRecurringApprovalOperation( input: RecurringApprovalFingerprintInput, ): string
- RecurringApprovalService · class · L119-L249 — class RecurringApprovalService
- constructor · method · L120-L120 — constructor(private readonly db: Database.Database)
- fingerprint · method · L122-L134 — fingerprint(input: RecurringApprovalFingerprintInput): { fingerprint: string; operationJson: string; policyVersion: string; }
- findActive · method · L136-L149 — findActive( input: RecurringApprovalFingerprintInput, now = Date.now(), ): RecurringApprovalMatch | null
- create · method · L151-L194 — create(input: RecurringApprovalCreateInput, now = Date.now()): RecurringApprovalRuleSummary
- list · method · L196-L214 — list( options: { workspaceId?: string; includeRevoked?: boolean } = {}, ): RecurringApprovalRuleSummary[]
- revoke · method · L216-L223 — revoke(id: string, now = Date.now()): boolean
- mapRow · method · L225-L230 — private mapRow(row: Record<string, unknown>): RecurringApprovalMatch
- mapSummary · method · L232-L248 — private mapSummary(row: Record<string, unknown>): RecurringApprovalRuleSummary
