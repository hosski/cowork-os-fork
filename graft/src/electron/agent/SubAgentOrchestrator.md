# src/electron/agent/SubAgentOrchestrator.ts

- OrchestratorDeps · interface · L26-L30 — interface OrchestratorDeps
- OrchestratorEvent · type · L32-L37 — type OrchestratorEvent = | { type: "task_spawned"; nodeId: string; taskId: string } | { type: "task_completed"; nodeId: string; taskId: string; output: string } | { type: "task_failed"; nodeId: string; taskId: string; error: string } | { type: "run_completed"; runId: string; succeeded: number; failed: number } | { type: "run_failed"; runId: string; reason: string };
- SubAgentOrchestrator · class · L39-L384 — class SubAgentOrchestrator extends EventEmitter
- constructor · method · L43-L49 — constructor( private db: Database.Database, private deps: OrchestratorDeps, )
- start · method · L55-L71 — async start(tasks: Omit<OrchestrationTask, "status">[]): Promise<OrchestrationRun>
- resume · method · L77-L81 — async resume(runId: string): Promise<void>
- notifyTaskCompleted · method · L88-L90 — notifyTaskCompleted(): void
- waitForTaskCompletion · method · L92-L104 — private waitForTaskCompletion(timeoutMs: number): Promise<void>
- executeRun · method · L106-L150 — private async executeRun(run: OrchestrationRun): Promise<void>
- getReadyTasks · method · L155-L162 — getReadyTasks(run: OrchestrationRun): OrchestrationTask[]
- spawnTask · method · L164-L284 — private async spawnTask( run: OrchestrationRun, task: OrchestrationTask, ): Promise<OrchestrationRun>
- buildPromptWithContext · method · L289-L299 — private buildPromptWithContext(task: OrchestrationTask, run: OrchestrationRun): string
- waitForTask · method · L301-L331 — private async waitForTask( taskId: string, timeoutSeconds: number, ): Promise<{ success: boolean; output?: string; error?: string }>
- waitForRemoteTask · method · L333-L363 — private async waitForRemoteTask( acpAgentId: string, remoteTaskId: string, timeoutSeconds: number, ): Promise<{ success: boolean; output?: string; error?: string }>
- updateTask · method · L365-L374 — private updateTask( run: OrchestrationRun, nodeId: string, updates: Partial<OrchestrationTask>, ): OrchestrationRun
- setRunStatus · method · L376-L383 — private setRunStatus( run: OrchestrationRun, status: OrchestrationRun["status"], ): OrchestrationRun
- sleep · function · L386-L388 — function sleep(ms: number): Promise<void>
