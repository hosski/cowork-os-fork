# src/renderer/utils/task-replay-state.ts

- asRecord · function · L22-L26 — function asRecord(value: unknown): Record<string, unknown>
- getReplayTerminalStatus · function · L28-L50 — function getReplayTerminalStatus( task: Task, status: TaskStatus, terminalEvent: TaskEvent | null, ): TaskTerminalStatus | undefined
- getReplayError · function · L52-L57 — function getReplayError(task: Task, terminalEvent: TaskEvent | null): string | null | undefined
- stripFinalTaskFields · function · L59-L82 — function stripFinalTaskFields(task: Task, status: TaskStatus, updatedAt: number): Task
- deriveReplayTaskSnapshot · function · L84-L123 — function deriveReplayTaskSnapshot( task: Task | undefined, replayEvents: TaskEvent[], ): Task | undefined
