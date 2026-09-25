# src/electron/agent/llm/openai-compatible.ts

- OpenAICompatibleToolArgumentParseResult · interface · L21-L27 — interface OpenAICompatibleToolArgumentParseResult
- isToolArgumentObject · function · L29-L31 — function isToolArgumentObject(value: unknown): value is Record<string, Any>
- parseOpenAICompatibleToolArguments · function · L38-L90 — function parseOpenAICompatibleToolArguments( value: unknown, ): OpenAICompatibleToolArgumentParseResult
- OpenAICompatibleMessageOptions · interface · L92-L98 — interface OpenAICompatibleMessageOptions
- hashToolCallId · function · L100-L102 — function hashToolCallId(id: string): string
- createToolCallIdMapper · function · L104-L138 — function createToolCallIdMapper(maxLength?: number): (id: string) => string
- sanitizeToolCallHistory · function · L140-L142 — function sanitizeToolCallHistory(messages: LLMMessage[]): LLMMessage[]
- buildOpenAICompatibleSystemMessages · function · L144-L157 — function buildOpenAICompatibleSystemMessages( system?: string, systemBlocks?: LLMSystemBlock[], ): Array<{ role: "system"; content: string }>
- toOpenAICompatibleMessages · function · L159-L310 — function toOpenAICompatibleMessages( messages: LLMMessage[], system?: string, options?: OpenAICompatibleMessageOptions, ): Array<{ role: string; content: Any; tool_call_id?: string; tool_calls?: Any[] }>
- OpenAICompatibleToolOptions · interface · L312-L314 — interface OpenAICompatibleToolOptions
- toOpenAICompatibleTools · function · L316-L337 — function toOpenAICompatibleTools( tools: LLMTool[], options?: OpenAICompatibleToolOptions, ): Array<{ type: "function"; function: { name: string; description: string; parameters: Any; strict?: boolean; }; }>
- fromOpenAICompatibleResponse · function · L339-L389 — function fromOpenAICompatibleResponse(response: Any): LLMResponse
- mapStopReason · function · L391-L404 — function mapStopReason(finishReason?: string): LLMResponse["stopReason"]
