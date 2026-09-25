# src/electron/agent/content/ContentBuilder.ts

- BuildExecutionPromptParams · interface · L13-L47 — interface BuildExecutionPromptParams
- BuildExecutionPromptResult · interface · L49-L59 — interface BuildExecutionPromptResult
- toSystemBlock · function · L61-L71 — function toSystemBlock(section: PromptSection): LLMSystemBlock | null
- makeSection · function · L73-L98 — function makeSection( key: string, text: string | undefined, maxTokens: number | undefined, options?: { required?: boolean; dropPriority?: number; layerKind?: PromptSection["layerKind"]; cacheScope?: PromptSection["cacheScope"]; stableInputHash?: string; }, ): PromptSection
- ContentBuilder · class · L100-L348 — class ContentBuilder
- buildExecutionPrompt · method · L101-L347 — static async buildExecutionPrompt( params: BuildExecutionPromptParams, ): Promise<BuildExecutionPromptResult>
