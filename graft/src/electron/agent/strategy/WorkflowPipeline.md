# src/electron/agent/strategy/WorkflowPipeline.ts

- WorkflowPipelineDeps · interface · L13-L24 — interface WorkflowPipelineDeps
- WorkflowPipelineState · interface · L26-L35 — interface WorkflowPipelineState
- WorkflowPipelineOptions · interface · L40-L43 — interface WorkflowPipelineOptions
- WorkflowPipeline · class · L45-L206 — class WorkflowPipeline extends EventEmitter
- constructor · method · L50-L67 — constructor( rootTaskId: string, workspaceId: string, phases: WorkflowPhase[], deps: WorkflowPipelineDeps, options?: WorkflowPipelineOptions, )
- getState · method · L69-L71 — getState(): WorkflowPipelineState
- execute · method · L76-L177 — async execute(): Promise<WorkflowPipelineState>
- waitForTask · method · L182-L198 — private async waitForTask(taskId: string): Promise<{ status: string; resultSummary?: string }>
- resolveWorkerRoleForPhase · method · L200-L205 — private resolveWorkerRoleForPhase(phaseType: WorkflowPhase["phaseType"]): WorkerRoleKind
- sleep · function · L208-L210 — function sleep(ms: number): Promise<void>
