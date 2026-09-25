# src/electron/agent/__tests__/queue-manager.test.ts

- shouldBypassQueue · function · L16-L20 — function shouldBypassQueue(task: Pick<Task, "parentTaskId" | "agentConfig">): boolean
- canStartImmediately · function · L22-L24 — function canStartImmediately(runningCount: number, maxConcurrent: number): boolean
- enqueueLogic · function · L26-L41 — function enqueueLogic( task: Pick<Task, "id" | "parentTaskId" | "agentConfig">, runningCount: number, maxConcurrent: number, ): "start_immediately" | "queue"
- createMockTask · function · L44-L53 — function createMockTask( overrides: Partial<Task> = {}, ): Pick<Task, "id" | "parentTaskId" | "agentConfig" | "title" | "status">
