# src/electron/agent/RuntimeVisibilityService.ts

- RecallRepositories · type · L24-L29 — type RecallRepositories = { taskRepo: TaskRepository; eventRepo: TaskEventRepository; activityRepo: ActivityRepository; workspaceRepo: WorkspaceRepository; };
- normalizeText · function · L31-L33 — function normalizeText(value: unknown): string
- truncate · function · L35-L38 — function truncate(text: string, max = 240): string
- asObject · function · L40-L43 — function asObject(value: unknown): Record<string, unknown>
- getTaskSnippet · function · L45-L47 — function getTaskSnippet(task: Task): string
- getMessageText · function · L49-L52 — function getMessageText(payload: unknown): string
- sourceWeight · function · L54-L73 — function sourceWeight(sourceType: UnifiedRecallSourceType): number
- recencyBoost · function · L75-L79 — function recencyBoost(timestamp: number): number
- rankFrom · function · L81-L83 — function rankFrom(sourceType: UnifiedRecallSourceType, timestamp: number, base = 0): number
- RuntimeVisibilityService · class · L85-L524 — class RuntimeVisibilityService
- buildLearningProgress · method · L86-L217 — static buildLearningProgress(input: { task: Task; outcome: "success" | "failure" | "reinforced" | "pending_review" | "noop"; summary: string; memoryCaptured: boolean; playbookReinforced: boolean; skillProposal?: { proposalId?: string; proposalStatus?: "pending" | "approved" | "rejected"; reason: string; }; evidenceRefs?: EvidenceRef[]; nextAction?: string; sourceEventId?: string; }): TaskLearningProgress
- collectUnifiedRecall · method · L219-L491 — static collectUnifiedRecall( deps: RecallRepositories, query: UnifiedRecallQuery & { workspacePath?: string }, ): UnifiedRecallResponse
- sourceAllowed · function · L228-L229 — sourceAllowed = (source: UnifiedRecallSourceType): boolean
- matchesQuery · function · L234-L235 — matchesQuery = (text: string): boolean
- addResult · function · L237-L242 — addResult = (result: UnifiedRecallResult): void
- buildRoutingState · method · L493-L523 — static buildRoutingState( settings: LLMSettings, options?: { task?: Pick<Task, "title" | "prompt" | "agentConfig" | "source" | "status">; isVerificationTask?: boolean; }, ): LLMRoutingRuntimeState
