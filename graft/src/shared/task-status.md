# src/shared/task-status.ts

- isActiveTaskStatus · function · L6-L8 — function isActiveTaskStatus(status: TaskStatus | undefined): boolean
- isTerminalTaskStatus · function · L10-L12 — function isTerminalTaskStatus(status: TaskStatus | undefined): boolean
- deriveCanonicalTaskStatus · function · L14-L54 — function deriveCanonicalTaskStatus( task: Pick<Task, "status" | "completedAt" | "terminalStatus">, ): TaskStatus
- normalizeTaskLifecycleState · function · L56-L64 — function normalizeTaskLifecycleState< T extends Pick<Task, "status" | "completedAt" | "terminalStatus">, >(task: T): T
- resolveTaskStatusUpdateFromEvent · function · L66-L77 — function resolveTaskStatusUpdateFromEvent< T extends Pick<Task, "status" | "completedAt" | "terminalStatus">, >(task: T, nextStatus: TaskStatus | undefined): TaskStatus | undefined
