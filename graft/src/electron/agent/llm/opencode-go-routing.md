# src/electron/agent/llm/opencode-go-routing.ts

- isOpenCodeGoBaseUrl · function · L1-L9 — function isOpenCodeGoBaseUrl(baseUrl: string): boolean
- isOpenCodeZenBaseUrl · function · L11-L23 — function isOpenCodeZenBaseUrl(baseUrl: string): boolean
- isOpenCodeBaseUrl · function · L25-L27 — function isOpenCodeBaseUrl(baseUrl: string): boolean
- OpenCodeModelTransport · type · L29-L29 — type OpenCodeModelTransport = "responses" | "chat_completions" | "messages";
- OpenCodeProduct · type · L30-L30 — type OpenCodeProduct = "zen" | "go";
- withoutOpenCodePrefix · function · L32-L38 — function withoutOpenCodePrefix(model: string): string
- normalizeOpenCodeGoModelId · function · L40-L50 — function normalizeOpenCodeGoModelId(model: string): string
- isOpenCodeAnthropicMessagesModel · function · L52-L62 — function isOpenCodeAnthropicMessagesModel(model: string, product: OpenCodeProduct): boolean
- isOpenCodeGoAnthropicMessagesModel · function · L64-L66 — function isOpenCodeGoAnthropicMessagesModel(model: string): boolean
- isOpenCodeResponsesModel · function · L68-L75 — function isOpenCodeResponsesModel(model: string): boolean
- getOpenCodeModelTransport · function · L77-L84 — function getOpenCodeModelTransport( model: string, product: OpenCodeProduct, ): OpenCodeModelTransport
- normalizeOpenCodeGoAnthropicBaseUrl · function · L86-L95 — function normalizeOpenCodeGoAnthropicBaseUrl(baseUrl: string): string
