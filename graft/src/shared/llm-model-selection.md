# src/shared/llm-model-selection.ts

- getLlmReasoningEffortOptions · function · L16-L32 — function getLlmReasoningEffortOptions( providerType: LLMProviderType | string, openaiAuthMethod?: "api_key" | "oauth", supportedEfforts?: readonly LLMReasoningEffort[], )
- OpenAIAuthMethod · type · L44-L44 — type OpenAIAuthMethod = "api_key" | "oauth";
- getLlmModelReasoningEfforts · function · L46-L79 — function getLlmModelReasoningEfforts( providerType: LLMProviderType | string | undefined, modelKey: string | undefined, openaiAuthMethod?: OpenAIAuthMethod, ): LLMReasoningEffort[]
- withLlmModelSelectionMetadata · function · L81-L94 — function withLlmModelSelectionMetadata<T extends LLMModelInfo>( providerType: LLMProviderType | string, models: T[], openaiAuthMethod?: OpenAIAuthMethod, ): Array<T & { reasoningEfforts?: LLMReasoningEffort[] }>
