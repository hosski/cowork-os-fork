# src/electron/agent/llm/opencode-go-provider.ts

- OpenCodeProviderOptions · interface · L13-L19 — interface OpenCodeProviderOptions
- OpenCodeProvider · class · L21-L88 — class OpenCodeProvider implements LLMProvider
- constructor · method · L29-L47 — constructor(options: OpenCodeProviderOptions)
- createMessage · method · L49-L69 — async createMessage(request: LLMRequest): Promise<LLMResponse>
- testConnection · method · L71-L80 — async testConnection(): Promise<{ success: boolean; error?: string }>
- getAvailableModels · method · L82-L87 — async getAvailableModels(): Promise<Array<{ id: string; name: string }>>
- OpenCodeGoProviderOptions · type · L92-L92 — type OpenCodeGoProviderOptions = OpenCodeProviderOptions;
