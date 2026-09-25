# src/electron/agents/agent-dispatch.ts

- DispatchRole · type · L3-L9 — type DispatchRole = { displayName: string; description?: string | null; capabilities?: string[]; systemPrompt?: string | null; soul?: string | null; };
- DispatchParentTask · type · L11-L14 — type DispatchParentTask = { title: string; prompt: string; };
- DispatchPromptOptions · type · L16-L29 — type DispatchPromptOptions = { planSummary?: string; workspacePath?: string | null; includeRoleProfile?: boolean; /** * When false, omit role description/systemPrompt from the dispatch prompt. * This is useful when the runtime already injects role context via system prompt. */ includeRoleDetails?: boolean; /** Designated output directory for this agent to write files into. */ fileOwnershipZone?: string; /** Other agents' output zones (read-only for this agent). */ peerAgentZones?: Array<{ role: string; zone: string }>; };
- buildAgentDispatchPrompt · function · L31-L101 — buildAgentDispatchPrompt = ( role: DispatchRole, parentTask: DispatchParentTask, options?: DispatchPromptOptions, ): string
