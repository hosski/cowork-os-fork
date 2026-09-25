# src/electron/security/numbat/AgentSecurityRepository.ts

- parseJsonObject · function · L13-L20 — function parseJsonObject(value: string): Record<string, unknown>
- parseStringArray · function · L22-L29 — function parseStringArray(value: string): string[]
- AgentSecurityRepository · class · L31-L350 — class AgentSecurityRepository
- constructor · method · L32-L32 — constructor(private readonly db: Database.Database)
- upsertFinding · method · L34-L69 — upsertFinding(finding: AgentSecurityFinding): void
- listFindings · method · L71-L100 — listFindings(query: AgentSecurityFindingQuery = {}): AgentSecurityFinding[]
- getFinding · method · L102-L107 — getFinding(findingId: string): AgentSecurityFinding | null
- updateFindingStatus · method · L109-L117 — updateFindingStatus( findingId: string, status: AgentSecurityFindingStatus, ): AgentSecurityFinding | null
- upsertDecision · method · L119-L150 — upsertDecision(decision: AgentSecurityEnforcement): void
- listDecisions · method · L152-L185 — listDecisions(taskId?: string, limit = 100): AgentSecurityEnforcement[]
- updateDecisionHostOutcome · method · L187-L194 — updateDecisionHostOutcome( decisionId: string, hostOutcome: NonNullable<AgentSecurityEnforcement["hostOutcome"]>, ): void
- addDiagnostic · method · L196-L218 — addDiagnostic(input: Omit<AgentSecurityDiagnostic, "id" | "createdAt">): AgentSecurityDiagnostic
- listDiagnostics · method · L220-L234 — listDiagnostics(limit = 100): AgentSecurityDiagnostic[]
- upsertInventory · method · L236-L266 — upsertInventory(agent: { agentId: string; present: boolean; wired: boolean; liveMode?: string; details: Record<string, unknown>; checkedAt: number; }): void
- listInventory · method · L268-L287 — listInventory(): Array<{ agentId: string; present: boolean; wired: boolean; liveMode?: string; details: Record<string, unknown>; checkedAt: number; }>
- prune · method · L289-L306 — prune(retentionDays: number): { findings: number; decisions: number; diagnostics: number; }
- listOpenFindingTaskIds · method · L308-L315 — listOpenFindingTaskIds(): string[]
- mapFinding · method · L317-L349 — private mapFinding(row: Record<string, unknown>): AgentSecurityFinding
