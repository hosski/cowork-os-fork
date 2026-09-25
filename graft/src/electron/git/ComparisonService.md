# src/electron/git/ComparisonService.ts

- ComparisonService · class · L15-L267 — class ComparisonService
- constructor · method · L23-L31 — constructor( private db: Database.Database, private daemon: AgentDaemon, )
- getInstance · method · L33-L35 — static getInstance(): ComparisonService | null
- createSession · method · L41-L117 — async createSession(params: { title: string; prompt: string; workspaceId: string; agents: ComparisonAgentSpec[]; }): Promise<ComparisonSession>
- onTaskCompleted · method · L123-L179 — async onTaskCompleted(taskId: string): Promise<void>
- generateComparisonResult · method · L184-L231 — async generateComparisonResult(sessionId: string): Promise<ComparisonResult>
- cancelSession · method · L236-L252 — async cancelSession(sessionId: string): Promise<void>
- getSession · method · L257-L259 — getSession(sessionId: string): ComparisonSession | undefined
- listSessions · method · L264-L266 — listSessions(workspaceId: string): ComparisonSession[]
