# src/renderer/components/OnboardingModal.tsx

- OnboardingModalProps · interface · L4-L10 — interface OnboardingModalProps
- OnboardingStep · type · L12-L12 — type OnboardingStep = "welcome" | "llm" | "channels";
- LLMProviderType · type · L15-L26 — type LLMProviderType = | "anthropic" | "openai" | "gemini" | "ollama" | "openrouter" | "bedrock" | "groq" | "xai" | "deepseek" | "kimi" | "nano-gpt";
- ProviderOption · interface · L28-L37 — interface ProviderOption
- ChannelType · type · L40-L40 — type ChannelType = "telegram" | "whatsapp" | "discord" | "slack" | "imessage" | "signal";
- ChannelOption · interface · L42-L49 — interface ChannelOption
- OnboardingModal · function · L406-L1026 — function OnboardingModal({ onComplete, themeMode, accentColor, onThemeChange, onAccentChange, }: OnboardingModalProps)
- checkOllamaAvailability · function · L429-L438 — checkOllamaAvailability = async ()
- handleProviderSelect · function · L440-L444 — handleProviderSelect = (provider: LLMProviderType)
- handleTestConnection · function · L446-L489 — handleTestConnection = async ()
- handleSaveLLMAndContinue · function · L491-L539 — handleSaveLLMAndContinue = async ()
- handleChannelToggle · function · L541-L551 — handleChannelToggle = (channel: ChannelType)
- handleFinish · function · L553-L557 — handleFinish = ()
- getDefaultModel · function · L559-L586 — getDefaultModel = (provider: LLMProviderType): string
- canProceedLLM · function · L588-L592 — canProceedLLM = ()
- getSetupBadgeClass · function · L596-L605 — getSetupBadgeClass = (level: "easy" | "moderate" | "advanced")
