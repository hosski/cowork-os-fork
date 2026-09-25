# src/shared/interaction-mode.ts

- AdvancedExecutionMode · type · L3-L3 — type AdvancedExecutionMode = Exclude<ExecutionMode, "chat">;
- InteractionModeSelection · type · L4-L6 — type InteractionModeSelection = | { mode: "smart"; executionOverride?: AdvancedExecutionMode } | { mode: "chat" };
- isChatActionShortcut · function · L8-L13 — function isChatActionShortcut( selection: InteractionModeSelection | undefined, prompt: string, ): boolean
- getInteractionModeSelection · function · L16-L29 — function getInteractionModeSelection( config?: AgentConfig, ): InteractionModeSelection | undefined
- prepareInteractionMode · function · L32-L52 — function prepareInteractionMode( config: AgentConfig | undefined, selection: InteractionModeSelection, ): AgentConfig
