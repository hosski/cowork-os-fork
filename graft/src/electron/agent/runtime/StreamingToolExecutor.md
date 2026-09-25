# src/electron/agent/runtime/StreamingToolExecutor.ts

- StreamingToolExecutionUpdate · interface · L6-L9 — interface StreamingToolExecutionUpdate
- StreamingToolExecutor · class · L11-L62 — class StreamingToolExecutor
- constructor · method · L17-L24 — constructor( private readonly coordinator: ToolExecutionCoordinator, private readonly context: ToolInvocationContext, private readonly resolveSchedulerSpec?: ( toolName: string, input: Any, ) => RuntimeToolSchedulerSpec, )
- discard · method · L26-L29 — discard(): void
- addToolUse · method · L31-L41 — addToolUse(toolUse: LLMToolUse): void
- flush · method · L43-L61 — async flush(): Promise<StreamingToolExecutionUpdate[]>
