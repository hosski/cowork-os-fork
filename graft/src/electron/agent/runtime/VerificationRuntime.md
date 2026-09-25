# src/electron/agent/runtime/VerificationRuntime.ts

- VerificationRuntimeChildResult · interface · L10-L15 — interface VerificationRuntimeChildResult
- VerificationRuntimeDeps · interface · L17-L26 — interface VerificationRuntimeDeps
- VerificationRuntimeRequest · interface · L28-L36 — interface VerificationRuntimeRequest
- VerificationRuntimeResult · interface · L38-L46 — interface VerificationRuntimeResult
- VerificationRuntime · class · L48-L179 — class VerificationRuntime
- constructor · method · L49-L49 — constructor(private readonly deps: VerificationRuntimeDeps)
- shouldGateTask · method · L51-L65 — shouldGateTask(request: VerificationRuntimeRequest): boolean
- run · method · L67-L116 — async run(request: VerificationRuntimeRequest): Promise<VerificationRuntimeResult>
- isLikelyImplementationTask · method · L118-L128 — private isLikelyImplementationTask(task: Task, request: VerificationRuntimeRequest): boolean
- isHighRiskTask · method · L130-L140 — private isHighRiskTask(task: Task, request: VerificationRuntimeRequest): boolean
- getTaskText · method · L142-L147 — private getTaskText(task: Task, parentSummary?: string): string
- buildVerificationPrompt · method · L149-L178 — private buildVerificationPrompt(request: VerificationRuntimeRequest): string
- createVerificationRuntime · function · L181-L183 — function createVerificationRuntime(deps: VerificationRuntimeDeps): VerificationRuntime
- normalizeVerificationVerdict · function · L185-L187 — function normalizeVerificationVerdict(value: string): VerificationVerdict
