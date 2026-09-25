# src/electron/agent/llm/ollama-provider.ts

- supportsOllamaThinkingControl · function · L13-L19 — function supportsOllamaThinkingControl(model: string): boolean
- isUnsupportedThinkingResponse · function · L21-L28 — function isUnsupportedThinkingResponse(status: number, message: string): boolean
- OllamaProvider · class · L35-L371 — class OllamaProvider implements LLMProvider
- constructor · method · L40-L48 — constructor(config: LLMProviderConfig)
- createMessage · method · L50-L153 — async createMessage(request: LLMRequest): Promise<LLMResponse>
- testConnection · method · L155-L183 — async testConnection(): Promise<{ success: boolean; error?: string }>
- getAvailableModels · method · L188-L224 — async getAvailableModels(): Promise<Array<{ name: string; size: number; modified: string }>>
- convertMessages · method · L226-L283 — private convertMessages(messages: LLMMessage[], systemPrompt: string): OllamaMessage[]
- convertTools · method · L285-L294 — private convertTools(tools: LLMTool[]): OllamaTool[]
- convertResponse · method · L296-L370 — private convertResponse(response: OllamaChatResponse): LLMResponse
- OllamaMessage · interface · L374-L379 — interface OllamaMessage
- OllamaToolCall · interface · L381-L386 — interface OllamaToolCall
- OllamaTool · interface · L388-L399 — interface OllamaTool
- OllamaChatResponse · interface · L401-L418 — interface OllamaChatResponse
