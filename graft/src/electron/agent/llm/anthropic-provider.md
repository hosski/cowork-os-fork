# src/electron/agent/llm/anthropic-provider.ts

- AnthropicProvider · class · L30-L365 — class AnthropicProvider implements LLMProvider
- constructor · method · L38-L58 — constructor(config: LLMProviderConfig)
- createMessage · method · L60-L152 — async createMessage(request: LLMRequest): Promise<LLMResponse>
- testConnection · method · L154-L172 — async testConnection(): Promise<{ success: boolean; error?: string }>
- convertMessages · method · L174-L222 — private convertMessages(messages: LLMMessage[]): Anthropic.MessageParam[]
- createWithPromptCache · method · L224-L246 — private async createWithPromptCache( request: LLMRequest, promptCache: LLMRequest["promptCache"] | undefined, tools: Anthropic.Tool[] | undefined, ): Promise<Anthropic.Message>
- createWithStreaming · method · L248-L271 — private async createWithStreaming( request: LLMRequest, promptCache: LLMRequest["promptCache"] | undefined, tools: Anthropic.Tool[] | undefined, ): Promise<Anthropic.Message>
- buildSystemPayload · method · L273-L298 — private buildSystemPayload( request: Pick<LLMRequest, "system" | "systemBlocks">, promptCache: LLMRequest["promptCache"] | undefined, ): | string | Array<{ type: "text"; text: string; cache_control?: { type: "ephemeral"; ttl?: "1h" }; }>
- buildMessagesPayload · method · L300-L315 — private buildMessagesPayload( messages: LLMMessage[], promptCache: LLMRequest["promptCache"] | undefined, ): Anthropic.MessageParam[]
- convertTools · method · L317-L323 — private convertTools(tools: LLMTool[]): Anthropic.Tool[]
- convertResponse · method · L325-L349 — private convertResponse(response: Anthropic.Message): LLMResponse
- mapStopReason · method · L351-L364 — private mapStopReason(reason: Anthropic.Message["stop_reason"]): LLMResponse["stopReason"]
