# src/electron/agent/llm/atomic-chat-provider.ts

- readTimeoutOverride · function · L13-L16 — function readTimeoutOverride(name: string, fallback: number): number
- AtomicChatProviderOptions · type · L18-L26 — type AtomicChatProviderOptions = Omit< OpenAICompatibleProviderOptions, "type" | "providerName" | "baseUrl" > & { baseUrl?: string; providerName?: string; backendVersion?: string; template?: string; };
- AtomicChatProvider · class · L34-L92 — class AtomicChatProvider extends OpenAICompatibleProvider
- constructor · method · L39-L56 — constructor(options: AtomicChatProviderOptions)
- getCapabilityProfile · method · L58-L66 — getCapabilityProfile(modelId: string): ModelCapabilityProfile
- observeResponse · method · L68-L91 — protected override observeResponse(model: string, request: LLMRequest, data: Any): void
- normalizeCapabilityEndpoint · function · L94-L106 — function normalizeCapabilityEndpoint(baseUrl: string): string
