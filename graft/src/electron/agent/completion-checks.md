# src/electron/agent/completion-checks.ts

- LoopGuardrailConfig · interface · L3-L11 — interface LoopGuardrailConfig
- getLoopGuardrailConfig · function · L53-L59 — function getLoopGuardrailConfig(domain: TaskDomain | undefined): LoopGuardrailConfig
- shouldRequireExecutionEvidenceForDomain · function · L61-L63 — function shouldRequireExecutionEvidenceForDomain(domain: TaskDomain | undefined): boolean
- DomainCompletionInput · interface · L65-L73 — interface DomainCompletionInput
- DomainCompletionResult · interface · L75-L78 — interface DomainCompletionResult
- extractExpectedLiteralFromContext · function · L102-L122 — function extractExpectedLiteralFromContext(input: DomainCompletionInput): string | null
- contextIndicatesDirectResult · function · L124-L128 — function contextIndicatesDirectResult(input: DomainCompletionInput): boolean
- shouldAllowConciseDirectResult · function · L130-L145 — function shouldAllowConciseDirectResult(input: DomainCompletionInput, normalized: string): boolean
- evaluateDomainCompletion · function · L147-L244 — function evaluateDomainCompletion(input: DomainCompletionInput): DomainCompletionResult
