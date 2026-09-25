# src/renderer/hooks/useOnboardingFlow.ts

- OnboardingState · type · L14-L49 — type OnboardingState = | "dormant" | "awakening" | "greeting" | "ask_name" | "confirm_name" | "ask_assistant_traits" | "confirm_assistant_traits" | "ask_user_profile" | "confirm_user_profile" | "ask_time_drains" | "confirm_time_drains" | "ask_priorities" | "confirm_priorities" | "ask_tools" | "confirm_tools" | "ask_response_style" | "confirm_response_style" | "ask_additional_guidance" | "confirm_additional_guidance" | "ask_voice" | "confirm_voice" | "ask_work_style" | "reflect_style" | "ask_memory_trust" | "confirm_memory_trust" | "transition_setup" | "ollama_detected" | "llm_setup" | "llm_api_key" | "llm_testing" | "llm_confirmed" | "recap" | "final_try" | "completion" | "transitioning";
- UseOnboardingOptions · interface · L143-L146 — interface UseOnboardingOptions
- OnboardingData · interface · L148-L170 — interface OnboardingData
- RecapEditTarget · type · L172-L184 — type RecapEditTarget = | "name" | "assistant_traits" | "user_profile" | "time_drains" | "priorities" | "tools" | "response_style" | "guidance" | "voice" | "style" | "memory" | "model";
- OnboardingSaveResult · interface · L186-L189 — interface OnboardingSaveResult
- getFallbackTextForState · function · L217-L296 — getFallbackTextForState = ( state: OnboardingState, data: OnboardingData, greetingIndex: number, ): string
- getRequiredUiForState · function · L298-L305 — getRequiredUiForState = (state: OnboardingState)
- getOnboardingDefaultModel · function · L307-L334 — function getOnboardingDefaultModel(provider: LLMProviderType): string
- buildOnboardingLLMTestConfig · function · L336-L376 — function buildOnboardingLLMTestConfig( provider: LLMProviderType, apiKey: string, ollamaUrl: string, ): Record<string, unknown>
- clearResumeSnapshot · function · L378-L386 — clearResumeSnapshot = (): void
- useOnboardingFlow · function · L388-L1896 — function useOnboardingFlow({ onComplete, workspaceId }: UseOnboardingOptions)
- settle · function · L645-L667 — settle = ( models: Array<{ name: string; size: number; modified: string }> | null, )
