# src/electron/sessions/__tests__/SessionRetentionService.test.ts

- insertWorkspace · function · L118-L127 — function insertWorkspace(): string
- createTask · function · L129-L137 — function createTask(status: "completed" | "executing", title: string)
- seedLlmUsage · function · L139-L161 — function seedLlmUsage( taskId: string, providerType: string, modelKey: string, inputTokens: number, outputTokens: number, cost: number, ): void
- findAll · function · L312-L319 — findAll = (limit: number, offset: number): Task[]
- makeService · function · L335-L403 — function makeService( tasks: Task[], events: TaskEvent[] = [], queuedAttachmentStore?: QueuedAttachmentStore, deleteError?: Error, findAllOverride?: (limit: number, offset: number) => Task[], ): SessionRetentionService
- makeTask · function · L405-L419 — function makeTask(overrides: Partial<Task>): Task
- makeEvent · function · L421-L431 — function makeEvent(taskId: string, payload: Record<string, unknown>): TaskEvent
- makeAttachmentEvent · function · L433-L448 — function makeAttachmentEvent(taskId: string, messageId: string, refs: unknown): TaskEvent
