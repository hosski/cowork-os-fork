# src/electron/agent/llm/__tests__/moa-provider.test.ts

- textResponse · function · L6-L12 — function textResponse(text: string, usage?: LLMResponse["usage"]): LLMResponse
- makeProvider · function · L14-L20 — function makeProvider(createMessage = vi.fn<LLMProvider["createMessage"]>()): LLMProvider
- makeRequest · function · L22-L30 — function makeRequest(overrides: Partial<LLMRequest> = {}): LLMRequest
- makePreset · function · L32-L44 — function makePreset(overrides: Partial<MoaPreset> = {}): MoaPreset
