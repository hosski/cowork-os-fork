# src/electron/agent/runtime/tool-batch-executor.ts

- getLatestAssistantToolUseIds · function · L4-L16 — function getLatestAssistantToolUseIds(messages: LLMMessage[]): string[]
- orderToolResultsByToolUseIds · function · L18-L44 — function orderToolResultsByToolUseIds( toolUseIds: readonly string[], toolResults: readonly LLMToolResult[], ): LLMToolResult[]
- ToolBatchExecutionResult · interface · L46-L51 — interface ToolBatchExecutionResult
- ToolBatchExecutorParams · interface · L53-L56 — interface ToolBatchExecutorParams
- ToolBatchExecutor · class · L58-L115 — class ToolBatchExecutor
- execute · method · L59-L65 — async execute(params: ToolBatchExecutorParams): Promise<ToolBatchExecutionResult>
- appendOrderedToolResults · method · L67-L114 — appendOrderedToolResults( messages: LLMMessage[], toolResults: LLMToolResult[], trailingUserMessage?: string, ): LLMMessage[]
