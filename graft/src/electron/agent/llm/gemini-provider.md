# src/electron/agent/llm/gemini-provider.ts

- GeminiProvider · class · L25-L459 — class GeminiProvider implements LLMProvider
- constructor · method · L30-L40 — constructor(config: LLMProviderConfig)
- createMessage · method · L42-L89 — async createMessage(request: LLMRequest): Promise<LLMResponse>
- testConnection · method · L91-L105 — async testConnection(): Promise<{ success: boolean; error?: string }>
- convertMessages · method · L107-L154 — private convertMessages(messages: LLMMessage[]): Content[]
- getToolNameFromId · method · L160-L162 — private getToolNameFromId(toolUseId: string): string
- getThoughtSignatureFromId · method · L164-L166 — private getThoughtSignatureFromId(toolUseId: string): string | undefined
- sanitizeSchemaForGemini · method · L172-L227 — private sanitizeSchemaForGemini(schema: Any): Any
- convertTools · method · L229-L251 — private convertTools(tools: LLMTool[]): Tool[]
- convertResponse · method · L253-L301 — private convertResponse(response: Any): LLMResponse
- mapStopReason · method · L303-L317 — private mapStopReason(finishReason?: string): LLMResponse["stopReason"]
- getAvailableModels · method · L322-L420 — async getAvailableModels(): Promise< Array<{ name: string; displayName: string; description: string }> >
- isTextModel · function · L367-L377 — isTextModel = (modelName: string): boolean
- extractVersion · function · L395-L402 — extractVersion = (name: string): number
- getTypeScore · function · L403-L408 — getTypeScore = (name: string): number
- getDefaultModels · method · L425-L458 — private getDefaultModels(): Array<{ name: string; displayName: string; description: string }>
