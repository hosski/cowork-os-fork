# src/electron/agents/HeartbeatRunRepository.ts

- CreateHeartbeatRunInput · interface · L10-L22 — interface CreateHeartbeatRunInput
- FinishHeartbeatRunInput · interface · L24-L31 — interface FinishHeartbeatRunInput
- parseJson · function · L33-L40 — function parseJson<T>(value: string | null | undefined, fallback: T): T
- HeartbeatRunRepository · class · L42-L299 — class HeartbeatRunRepository
- constructor · method · L46-L46 — constructor(private db?: Database.Database)
- create · method · L48-L99 — create(input: CreateHeartbeatRunInput): HeartbeatRun
- finish · method · L101-L141 — finish(runId: string, input: FinishHeartbeatRunInput): HeartbeatRun | undefined
- attachTask · method · L143-L154 — attachTask(runId: string, taskId: string): void
- recordEvent · method · L156-L175 — recordEvent(runId: string, type: string, payload: Record<string, unknown>): void
- reconcileInterruptedAgentRuns · method · L177-L214 — reconcileInterruptedAgentRuns( errorMessage = "Heartbeat service restarted before run completed", ): number
- get · method · L216-L220 — get(runId: string): HeartbeatRun | undefined
- listRecentDispatches · method · L222-L237 — listRecentDispatches(agentRoleId: string, sinceMs: number): HeartbeatRun[]
- getLatestRun · method · L239-L254 — getLatestRun(agentRoleId: string, runType: HeartbeatRunType): HeartbeatRun | undefined
- hasInFlightDispatch · method · L256-L275 — hasInFlightDispatch(agentRoleId: string, workspaceId?: string): boolean
- mapRun · method · L277-L298 — private mapRun(row: Any): HeartbeatRun
