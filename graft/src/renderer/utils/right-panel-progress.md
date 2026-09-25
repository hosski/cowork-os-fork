# src/renderer/utils/right-panel-progress.ts

- ProgressDisplayStep · type · L3-L7 — type ProgressDisplayStep = PlanStep & { isOverflow?: boolean; hiddenCount?: number; hiddenLabel?: string; };
- getQueueStatusSignature · function · L9-L18 — function getQueueStatusSignature(queueStatus: QueueStatus | null | undefined): string
- getPlanStepsSignature · function · L20-L24 — function getPlanStepsSignature(planSteps: PlanStep[]): string
- getTaskListSignature · function · L26-L28 — function getTaskListSignature(tasks: Task[]): string
- getProgressSectionMaterialSignature · function · L30-L46 — function getProgressSectionMaterialSignature(args: { expanded: boolean; planSteps: PlanStep[]; taskStatus?: Task["status"]; taskTerminalStatus?: Task["terminalStatus"]; hasActiveChildren: boolean; emptyHintText: string; }): string
- getQueueSectionMaterialSignature · function · L48-L62 — function getQueueSectionMaterialSignature(args: { expanded: boolean; runningTasks: Task[]; queuedTasks: Task[]; activeLabel: string; nextLabel: string; }): string
- makeProgressOverflowStep · function · L66-L102 — function makeProgressOverflowStep( startIndex: number, endIndex: number, hiddenSteps: PlanStep[], ): ProgressDisplayStep
- getVisibleProgressSteps · function · L104-L189 — function getVisibleProgressSteps(planSteps: PlanStep[]): ProgressDisplayStep[]
