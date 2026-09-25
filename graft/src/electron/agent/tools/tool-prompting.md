# src/electron/agent/tools/tool-prompting.ts

- normalizeText · function · L13-L17 — function normalizeText(value: unknown): string
- truncateText · function · L19-L24 — function truncateText(value: string, maxChars: number): string
- joinText · function · L26-L31 — function joinText(...parts: Array<string | undefined>): string
- resolvePromptMetadata · function · L33-L46 — function resolvePromptMetadata( tool: LLMTool, context: LLMToolPromptRenderContext, ): LLMToolPromptRenderResult
- renderToolDescription · function · L48-L57 — function renderToolDescription(tool: LLMTool, context: LLMToolPromptRenderContext): string
- renderCompactToolDescription · function · L59-L71 — function renderCompactToolDescription( tool: LLMTool, context: LLMToolPromptRenderContext, ): string
- renderToolForContext · function · L73-L78 — function renderToolForContext(tool: LLMTool, context: LLMToolPromptRenderContext): LLMTool
- createPromptMetadata · function · L80-L87 — function createPromptMetadata( render: NonNullable<LLMToolPromptMetadata["render"]>, ): LLMToolPromptMetadata
- withToolPromptMetadata · function · L247-L254 — function withToolPromptMetadata(tool: LLMTool): LLMTool
- withToolPromptMetadataList · function · L256-L258 — function withToolPromptMetadataList(tools: LLMTool[]): LLMTool[]
