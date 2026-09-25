# src/electron/security/numbat/NumbatEventAdapter.ts

- PlainObject · type · L65-L65 — type PlainObject = Record<string, unknown>;
- asObject · function · L67-L69 — function asObject(value: unknown): PlainObject
- firstString · function · L71-L77 — function firstString(input: PlainObject, keys: readonly string[]): string | undefined
- normalizeToolName · function · L79-L81 — function normalizeToolName(toolName: string): string
- parseMcpName · function · L83-L91 — function parseMcpName(toolName: string): { server?: string; tool?: string }
- inferToolClass · function · L93-L112 — function inferToolClass(toolName: string): AgentSecurityToolClass
- resolveFilePath · function · L114-L118 — function resolveFilePath(rawPath: string | undefined, workspacePath?: string): string | undefined
- inputKeys · function · L120-L124 — function inputKeys(input: PlainObject): string[]
- buildAgentSecurityAction · function · L126-L158 — function buildAgentSecurityAction( toolName: string, toolInput: unknown, workspacePath?: string, ): { toolClass: AgentSecurityToolClass; action: AgentSecurityAction }
- buildAgentSecurityHookPayload · function · L160-L219 — function buildAgentSecurityHookPayload(input: { hookEventName: AgentSecurityHookEventName; taskId: string; sessionId?: string; workspacePath?: string; toolCallId?: string; toolName?: string; toolInput?: unknown; actor?: "user" | "assistant" | "system" | "tool"; provider?: string; model?: string; permissionMode?: string; subAgent?: boolean; result?: AgentSecurityHookPayload["result"]; }): AgentSecurityHookPayload
- hookEventToLifecycle · function · L221-L242 — function hookEventToLifecycle(eventName: AgentSecurityHookEventName): string
