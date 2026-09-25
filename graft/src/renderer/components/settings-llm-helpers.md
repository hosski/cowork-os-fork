# src/renderer/components/settings-llm-helpers.ts

- ClaudeCredentialInput · interface · L3-L7 — interface ClaudeCredentialInput
- isClaudeSubscriptionToken · function · L9-L11 — function isClaudeSubscriptionToken(value?: string | null): boolean
- resolveClaudeAuthMethod · function · L13-L23 — function resolveClaudeAuthMethod( anthropic?: LLMSettingsData["anthropic"], ): "api_key" | "subscription"
- buildClaudeCredentialInput · function · L25-L46 — function buildClaudeCredentialInput( anthropic?: LLMSettingsData["anthropic"] | null, ): ClaudeCredentialInput | undefined
- selectClaudeModelKey · function · L48-L57 — function selectClaudeModelKey( providerModels: Array<{ key: string }>, currentModelKey?: string, ): string
- resolveOpenAIReasoningEffort · function · L59-L71 — function resolveOpenAIReasoningEffort( openai?: LLMSettingsData["openai"] | null, ): OpenAIReasoningEffort
- resolveOpenAITextVerbosity · function · L73-L78 — function resolveOpenAITextVerbosity( openai?: LLMSettingsData["openai"] | null, ): LLMTextVerbosity
