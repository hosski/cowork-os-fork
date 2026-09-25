# src/electron/agent/llm/xai-provider.ts

- isToolResult · function · L21-L22 — isToolResult = (item: LLMContent | LLMToolResult): item is LLMToolResult
- isToolUse · function · L23-L24 — isToolUse = (item: LLMContent | LLMToolResult): item is LLMToolUse
- isTextContent · function · L25-L26 — isTextContent = (item: LLMContent | LLMToolResult): item is LLMTextContent
- isImageContent · function · L27-L28 — isImageContent = (item: LLMContent | LLMToolResult): item is LLMImageContent
- XAIProvider · class · L30-L252 — class XAIProvider implements LLMProvider
- constructor · method · L39-L73 — constructor(config: LLMProviderConfig)
- createMessage · method · L75-L80 — createMessage(request: LLMRequest): Promise<LLMResponse>
- testConnection · method · L82-L92 — testConnection()
- getAvailableModels · method · L94-L102 — getAvailableModels()
- refreshOAuthIfNeeded · method · L104-L117 — private async refreshOAuthIfNeeded(): Promise<void>
- buildResponsesInput · method · L119-L182 — private buildResponsesInput(request: LLMRequest): Any[]
- toResponsesTools · method · L184-L191 — private toResponsesTools(tools: LLMTool[])
- convertResponsesResponse · method · L193-L231 — private convertResponsesResponse(response: Any): LLMResponse
- createResponsesMessage · method · L233-L251 — private async createResponsesMessage(request: LLMRequest): Promise<LLMResponse>
