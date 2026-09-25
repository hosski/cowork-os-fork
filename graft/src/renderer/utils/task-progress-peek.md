# src/renderer/utils/task-progress-peek.ts

- TaskProgressPeekStatus · type · L4-L12 — type TaskProgressPeekStatus = | "working" | "completed" | "failed" | "cancelled" | "paused" | "blocked" | "waiting" | "idle";
- TaskProgressPeekStep · interface · L14-L20 — interface TaskProgressPeekStep
- TaskProgressPeekActivity · interface · L22-L27 — interface TaskProgressPeekActivity
- TaskProgressPeekModel · interface · L29-L38 — interface TaskProgressPeekModel
- DeriveTaskProgressPeekModelParams · interface · L40-L48 — interface DeriveTaskProgressPeekModelParams
- cleanInlineText · function · L52-L63 — function cleanInlineText(value: string): string
- capitalize · function · L65-L67 — function capitalize(value: string): string
- humanizeProgressStepDescription · function · L69-L94 — function humanizeProgressStepDescription(description: string): string
- formatRelativeTime · function · L96-L106 — function formatRelativeTime(timestamp: number, now: number): string
- formatStepDuration · function · L108-L123 — function formatStepDuration(step: PlanStep): string | null
- getStepFromPayload · function · L125-L131 — function getStepFromPayload(event: TaskEvent): Record<string, unknown>
- getPayloadString · function · L133-L137 — function getPayloadString(event: TaskEvent, key: string): string
- truncateActivityLabel · function · L139-L142 — function truncateActivityLabel(label: string): string
- isUserFacingProgressMessage · function · L144-L151 — function isUserFacingProgressMessage(message: string): boolean
- getActivityForEvent · function · L153-L213 — function getActivityForEvent( event: TaskEvent, now: number, ): Omit<TaskProgressPeekActivity, "id"> | null
- deriveStatus · function · L215-L233 — function deriveStatus( task: Task | null | undefined, isTaskWorking: boolean, ): TaskProgressPeekStatus
- getStatusLabel · function · L235-L253 — function getStatusLabel(status: TaskProgressPeekStatus): string
- deriveTaskProgressPeekModel · function · L255-L322 — function deriveTaskProgressPeekModel({ task, events, planSteps, label, isTaskWorking, maxRecentActivity = 8, now = Date.now(), }: DeriveTaskProgressPeekModelParams): TaskProgressPeekModel
