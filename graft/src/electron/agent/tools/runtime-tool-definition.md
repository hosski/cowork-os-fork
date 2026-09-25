# src/electron/agent/tools/runtime-tool-definition.ts

- inferCapabilityTags · function · L129-L139 — function inferCapabilityTags(toolName: string): RuntimeToolCapabilityTag[]
- inferConcurrencyClass · function · L141-L165 — function inferConcurrencyClass(toolName: string): RuntimeToolConcurrencyClass
- inferReadOnly · function · L167-L189 — function inferReadOnly(toolName: string, concurrencyClass: RuntimeToolConcurrencyClass): boolean
- inferInterruptBehavior · function · L191-L195 — function inferInterruptBehavior(toolName: string, readOnly: boolean): RuntimeToolInterruptBehavior
- inferApprovalKind · function · L197-L216 — function inferApprovalKind(toolName: string, readOnly: boolean): RuntimeToolApprovalKind
- inferSideEffectLevel · function · L218-L230 — function inferSideEffectLevel(toolName: string, readOnly: boolean): RuntimeToolSideEffectLevel
- inferResultKind · function · L232-L268 — function inferResultKind(toolName: string): RuntimeToolResultKind
- getDefaultRuntimeToolMetadata · function · L270-L288 — function getDefaultRuntimeToolMetadata(toolName: string): RuntimeToolMetadata
- withRuntimeToolMetadata · function · L290-L302 — function withRuntimeToolMetadata( tool: LLMTool, overrides?: Partial<RuntimeToolMetadata>, ): LLMTool
- withRuntimeToolMetadataList · function · L304-L306 — function withRuntimeToolMetadataList(tools: LLMTool[]): LLMTool[]
- isRuntimeToolParallelEligible · function · L308-L314 — function isRuntimeToolParallelEligible(tool: Pick<LLMTool, "name" | "runtime">): boolean
