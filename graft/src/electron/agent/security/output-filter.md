# src/electron/agent/security/output-filter.ts

- ComplianceCheckResult · interface · L15-L20 — interface ComplianceCheckResult
- PromptLeakageResult · interface · L22-L26 — interface PromptLeakageResult
- OutputFilter · class · L28-L267 — class OutputFilter
- check · method · L130-L169 — static check(response: string): ComplianceCheckResult
- detectPromptLeakage · method · L174-L203 — static detectPromptLeakage(response: string): PromptLeakageResult
- sanitizeToolResult · method · L209-L244 — static sanitizeToolResult(toolName: string, result: string): string
- logSuspiciousOutput · method · L249-L266 — static logSuspiciousOutput( taskId: string, result: ComplianceCheckResult, responsePreview: string, ): void
