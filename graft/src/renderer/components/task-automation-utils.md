# src/renderer/components/task-automation-utils.ts

- TaskAutomationRunMode · type · L6-L6 — type TaskAutomationRunMode = "chat" | "local" | "worktree";
- TaskAutomationTargetMode · type · L7-L7 — type TaskAutomationTargetMode = "new_task" | "thread_follow_up";
- TaskAutomationSchedulePreset · type · L8-L14 — type TaskAutomationSchedulePreset = | "every30m" | "hourly" | "daily" | "weekdays" | "weekly" | "custom";
- TaskAutomationSchedule · type · L16-L19 — type TaskAutomationSchedule = | { kind: "at"; atMs: number } | { kind: "every"; everyMs: number; anchorMs?: number } | { kind: "cron"; expr: string; tz?: string };
- TaskRoutineTriggerPreset · type · L21-L21 — type TaskRoutineTriggerPreset = TaskAutomationSchedulePreset | "manual";
- TaskRoutineCreatePayload · interface · L23-L55 — interface TaskRoutineCreatePayload
- TaskAutomationTemplate · interface · L57-L63 — interface TaskAutomationTemplate
- buildTaskAutomationSchedule · function · L116-L137 — function buildTaskAutomationSchedule( preset: TaskAutomationSchedulePreset, customCron: string, ): TaskAutomationSchedule | null
- buildTaskAutomationPrompt · function · L139-L148 — function buildTaskAutomationPrompt(prompt: string, task: Task, deeplink: string): string
- buildTaskRoutineCreate · function · L150-L209 — function buildTaskRoutineCreate({ task, workspace, name, prompt, runMode, targetMode = "new_task", triggerPreset, schedule, deeplink, }: BuildTaskRoutineCreateParams): TaskRoutineCreatePayload
- BuildTaskAutomationCronJobCreateParams · interface · L211-L220 — interface BuildTaskAutomationCronJobCreateParams
- BuildTaskRoutineCreateParams · interface · L222-L232 — interface BuildTaskRoutineCreateParams
- buildTaskAutomationCronJobCreate · function · L234-L271 — function buildTaskAutomationCronJobCreate({ task, workspace, name, prompt, runMode, targetMode = "new_task", schedule, deeplink, }: BuildTaskAutomationCronJobCreateParams)
