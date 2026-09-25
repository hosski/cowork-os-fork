# src/electron/agent/llm/pi-provider.ts

- PiProvider · class · L52-L435 — class PiProvider implements LLMProvider
- constructor · method · L58-L76 — constructor(config: LLMProviderConfig)
- createMessage · method · L78-L167 — async createMessage(request: LLMRequest): Promise<LLMResponse>
- testConnection · method · L169-L195 — async testConnection(): Promise<{ success: boolean; error?: string }>
- getAvailableModels · method · L200-L216 — static async getAvailableModels( piProvider?: string, ): Promise<Array<{ id: string; name: string; description: string }>>
- getAvailableProviders · method · L221-L242 — static async getAvailableProviders(): Promise< Array<{ id: string; name: string; }> >
- resolveModel · method · L249-L264 — private async resolveModel(modelId: string): Promise<Model<Any>>
- convertMessagesToPiAi · method · L269-L374 — private convertMessagesToPiAi(messages: LLMMessage[]): PiAiMessage[]
- convertToolsToPiAi · method · L379-L385 — private convertToolsToPiAi(tools: LLMTool[]): PiAiTool[]
- convertPiAiResponse · method · L390-L434 — private convertPiAiResponse(response: PiAiAssistantMessage): LLMResponse
