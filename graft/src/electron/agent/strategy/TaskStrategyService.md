# src/electron/agent/strategy/TaskStrategyService.ts

- DerivedTaskStrategy · interface · L15-L35 — interface DerivedTaskStrategy
- TaskStrategyService · class · L42-L803 — class TaskStrategyService
- hasTextToImageGenerationIntent · method · L43-L54 — private static hasTextToImageGenerationIntent(lower: string): boolean
- imageGenerationNeedsPromptGrounding · method · L56-L63 — private static imageGenerationNeedsPromptGrounding(lower: string): boolean
- isTerminalImageGenerationTask · method · L65-L74 — private static isTerminalImageGenerationTask(text: string): boolean
- isSimpleImageGenerationTask · method · L76-L94 — private static isSimpleImageGenerationTask(text: string): boolean
- inferArtifactKindFromTaskText · method · L96-L111 — private static inferArtifactKindFromTaskText( text: string, ): "none" | "canvas" | "document" | "file"
- inferRequiresMutationFromTaskText · method · L113-L118 — private static inferRequiresMutationFromTaskText(text: string): boolean
- isStrictConstraintArtifactTask · method · L120-L139 — private static isStrictConstraintArtifactTask(taskText: string): boolean
- deriveLlmProfile · method · L141-L181 — static deriveLlmProfile( strategy: Pick<DerivedTaskStrategy, "executionMode" | "preflightRequired">, taskContext: { intent?: IntentRoute["intent"]; isVerificationTask?: boolean; strictConstraintArtifactTask?: boolean; } = {}, ): LlmProfile
- derive · method · L183-L414 — static derive( route: IntentRoute, existing?: AgentConfig, taskContext?: { title?: string; prompt?: string; lastProgressScore?: number }, ): DerivedTaskStrategy
- deriveDirectResponseMode · method · L416-L428 — private static deriveDirectResponseMode(params: { intent: IntentRoute["intent"]; answerFirst: boolean; executionMode: ExecutionMode; }): DirectResponseMode
- applyToAgentConfig · method · L430-L521 — static applyToAgentConfig( existing: AgentConfig | undefined, strategy: DerivedTaskStrategy, ): AgentConfig
- applyResearchWorkflowDefaults · method · L527-L554 — static applyResearchWorkflowDefaults(config: AgentConfig): void
- decoratePrompt · method · L556-L702 — static decoratePrompt( prompt: string, route: IntentRoute, strategy: DerivedTaskStrategy, relationshipContext: string, ): string
- getRelevantToolSet · method · L710-L802 — static getRelevantToolSet(intent: string, domain: TaskDomain = "auto"): Set<string>
