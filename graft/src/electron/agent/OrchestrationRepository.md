# src/electron/agent/OrchestrationRepository.ts

- OrchestrationTask · interface · L12-L29 — interface OrchestrationTask
- OrchestrationRun · interface · L31-L39 — interface OrchestrationRun
- safeJsonParse · function · L41-L48 — function safeJsonParse<T>(value: string | null, fallback: T): T
- RunRow · interface · L50-L58 — interface RunRow
- rowToRun · function · L60-L70 — function rowToRun(row: RunRow): OrchestrationRun
- OrchestrationRepository · class · L72-L161 — class OrchestrationRepository
- constructor · method · L73-L73 — constructor(private db: Database.Database)
- create · method · L75-L101 — create( input: Omit<OrchestrationRun, "id" | "createdAt"> & { id?: string; createdAt?: number }, ): OrchestrationRun
- update · method · L103-L128 — update( id: string, updates: Partial<Pick<OrchestrationRun, "tasks" | "status" | "completedAt">>, ): void
- findById · method · L130-L135 — findById(id: string): OrchestrationRun | undefined
- findByRootTaskId · method · L137-L144 — findByRootTaskId(rootTaskId: string): OrchestrationRun | undefined
- findRunning · method · L146-L151 — findRunning(): OrchestrationRun[]
- list · method · L153-L160 — list(workspaceId: string, limit = 50): OrchestrationRun[]
