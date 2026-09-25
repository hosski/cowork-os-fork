# src/electron/agent/runtime/ToolExecutionCoordinator.ts

- CoordinatedToolExecutionResult · interface · L6-L13 — interface CoordinatedToolExecutionResult
- ToolExecutionCoordinator · class · L15-L125 — class ToolExecutionCoordinator
- constructor · method · L16-L16 — constructor(private readonly toolRegistry: ToolRegistry)
- getModelReminder · method · L18-L22 — private getModelReminder(result: unknown): string | undefined
- executeTool · method · L24-L124 — async executeTool( toolName: string, input: Any, context: ToolInvocationContext, toolUseId = `${toolName}:${Date.now()}`, ): Promise<CoordinatedToolExecutionResult>
