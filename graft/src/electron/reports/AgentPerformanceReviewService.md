# src/electron/reports/AgentPerformanceReviewService.ts

- clampRating · function · L10-L17 — function clampRating(raw: number): AgentReviewRating
- safeJsonParse · function · L19-L26 — function safeJsonParse<T>(raw: string | null, fallback: T): T
- AgentPerformanceReviewService · class · L28-L295 — class AgentPerformanceReviewService
- constructor · method · L29-L29 — constructor(private db: Database.Database)
- generate · method · L31-L231 — generate(request: AgentReviewGenerateRequest): AgentPerformanceReview
- getLatest · method · L233-L244 — getLatest(workspaceId: string, agentRoleId: string): AgentPerformanceReview | undefined
- list · method · L246-L271 — list(workspaceId: string, agentRoleId?: string, limit: number = 30): AgentPerformanceReview[]
- delete · method · L273-L278 — delete(reviewId: string): boolean
- mapRow · method · L280-L294 — private mapRow(row: Any): AgentPerformanceReview
