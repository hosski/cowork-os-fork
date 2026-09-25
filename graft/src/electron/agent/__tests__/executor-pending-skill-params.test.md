# src/electron/agent/__tests__/executor-pending-skill-params.test.ts

- createRuntimeState · function · L15-L32 — function createRuntimeState(initialPending: PendingSkillParameterCollection | null)
- pending · method · L28-L30 — get pending()
- createExecutorHarness · function · L34-L69 — function createExecutorHarness(pending: PendingSkillParameterCollection): TaskExecutor & { emitEvent: ReturnType<typeof vi.fn>; appendConversationHistory: ReturnType<typeof vi.fn>; saveConversationSnapshot: ReturnType<typeof vi.fn>; executeSkillInvocation: ReturnType<typeof vi.fn>; daemon: { updateTask: ReturnType<typeof vi.fn> }; __runtime: ReturnType<typeof createRuntimeState>; }
