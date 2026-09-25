# src/electron/agent/task-title-generator.ts

- compactText · function · L14-L16 — function compactText(value: unknown): string
- truncateAtWordBoundary · function · L18-L27 — function truncateAtWordBoundary(value: string, maxLength: number): string
- extractStructuredTitle · function · L29-L54 — function extractStructuredTitle(value: string): string
- looksLikeRefusalOrMetaCommentary · function · L56-L60 — function looksLikeRefusalOrMetaCommentary(value: string): boolean
- sanitizeGeneratedTaskTitle · function · L66-L87 — function sanitizeGeneratedTaskTitle(value: unknown): string
- buildTitleSource · function · L89-L93 — function buildTitleSource(prompt: string): string
- extractTextContent · function · L95-L101 — function extractTextContent(response: LLMResponse): string
- TaskTitleGenerationOptions · interface · L103-L105 — interface TaskTitleGenerationOptions
- generateTaskTitleFromProvider · function · L108-L150 — async function generateTaskTitleFromProvider( provider: Pick<LLMProvider, "createMessage">, model: string, prompt: string, options?: TaskTitleGenerationOptions, ): Promise<string | null>
- generateTaskTitle · function · L156-L172 — async function generateTaskTitle( prompt: string, agentConfig?: AgentConfig, options?: TaskTitleGenerationOptions, ): Promise<string | null>
