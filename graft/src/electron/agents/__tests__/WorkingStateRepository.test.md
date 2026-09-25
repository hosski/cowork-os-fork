# src/electron/agents/__tests__/WorkingStateRepository.test.ts

- MockWorkingStateRepository · class · L26-L227 — class MockWorkingStateRepository
- findById · method · L27-L30 — findById(id: string): AgentWorkingState | undefined
- getCurrent · method · L32-L55 — getCurrent(query: WorkingStateQuery): AgentWorkingState | undefined
- getAllCurrent · method · L57-L69 — getAllCurrent(agentRoleId: string, workspaceId: string): AgentWorkingState[]
- update · method · L71-L114 — update(request: UpdateWorkingStateRequest): AgentWorkingState
- getHistory · method · L116-L128 — getHistory(query: WorkingStateHistoryQuery): AgentWorkingState[]
- listForTask · method · L130-L138 — listForTask(taskId: string): AgentWorkingState[]
- restore · method · L140-L177 — restore(id: string): AgentWorkingState | undefined
- delete · method · L179-L181 — delete(id: string): boolean
- deleteByAgentAndWorkspace · method · L183-L196 — deleteByAgentAndWorkspace(agentRoleId: string, workspaceId: string): number
- deleteByTask · method · L198-L211 — deleteByTask(taskId: string): number
- mapRowToState · method · L213-L226 — private mapRowToState(row: Any): AgentWorkingState
