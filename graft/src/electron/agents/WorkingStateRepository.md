# src/electron/agents/WorkingStateRepository.ts

- WorkingStateRepository · class · L14-L278 — class WorkingStateRepository
- constructor · method · L15-L15 — constructor(private db: Database.Database)
- findById · method · L20-L24 — findById(id: string): AgentWorkingState | undefined
- getCurrent · method · L29-L55 — getCurrent(query: WorkingStateQuery): AgentWorkingState | undefined
- getAllCurrent · method · L60-L68 — getAllCurrent(agentRoleId: string, workspaceId: string): AgentWorkingState[]
- update · method · L73-L126 — update(request: UpdateWorkingStateRequest): AgentWorkingState
- getHistory · method · L131-L144 — getHistory(query: WorkingStateHistoryQuery): AgentWorkingState[]
- listForTask · method · L149-L157 — listForTask(taskId: string): AgentWorkingState[]
- restore · method · L162-L192 — restore(id: string): AgentWorkingState | undefined
- delete · method · L197-L201 — delete(id: string): boolean
- deleteByAgentAndWorkspace · method · L206-L212 — deleteByAgentAndWorkspace(agentRoleId: string, workspaceId: string): number
- deleteByTask · method · L217-L221 — deleteByTask(taskId: string): number
- cleanupOldStates · method · L226-L259 — cleanupOldStates(keepCount: number = 50): number
- mapRowToState · method · L264-L277 — private mapRowToState(row: Any): AgentWorkingState
