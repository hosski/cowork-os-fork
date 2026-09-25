# src/electron/agent/runtime/ToolBatchPlanner.ts

- PlannedToolBatch · interface · L4-L7 — interface PlannedToolBatch
- ToolBatchPlanner · class · L9-L42 — class ToolBatchPlanner
- constructor · method · L10-L10 — constructor(private readonly toolLookup: (toolName: string) => LLMTool | undefined)
- getConcurrencyClass · method · L12-L19 — getConcurrencyClass( toolName: string, ): ReturnType<typeof getDefaultRuntimeToolMetadata>["concurrencyClass"]
- isParallelEligible · method · L21-L24 — isParallelEligible(toolName: string): boolean
- partition · method · L26-L41 — partition(calls: LLMToolUse[]): PlannedToolBatch[]
