# src/electron/hooks/types.ts

- HooksConfig · interface · L11-L21 — interface HooksConfig
- GmailHooksConfig · interface · L23-L46 — interface GmailHooksConfig
- ResendHooksConfig · interface · L48-L51 — interface ResendHooksConfig
- HookMappingConfig · interface · L55-L89 — interface HookMappingConfig
- HookMessageChannel · type · L91-L91 — type HookMessageChannel = ChannelType | "last";
- HookMappingResolved · interface · L95-L124 — interface HookMappingResolved
- HookMappingTransformResolved · interface · L126-L129 — interface HookMappingTransformResolved
- WakeHookPayload · interface · L133-L136 — interface WakeHookPayload
- AgentHookPayload · interface · L138-L157 — interface AgentHookPayload
- TaskMessageHookPayload · interface · L159-L163 — interface TaskMessageHookPayload
- ApprovalRespondHookPayload · interface · L165-L168 — interface ApprovalRespondHookPayload
- HookAction · type · L172-L221 — type HookAction = | { kind: "wake"; text: string; mode: "now" | "next-heartbeat"; } | { kind: "agent"; message: string; name?: string; wakeMode: "now" | "next-heartbeat"; sessionKey?: string; deliver?: boolean; allowUnsafeExternalContent?: boolean; channel?: HookMessageChannel; to?: string; workspaceId?: string; agentConfig?: AgentConfig; model?: string; thinking?: string; timeoutSeconds?: number; metadata?: Record<string, string>; response?: { statusCode?: number; message?: string; includeTaskId?: boolean; }; } | { kind: "task_message"; taskId: string; workspaceId?: string; message: string; response?: { statusCode?: number; message?: string; includeTaskId?: boolean; }; } | { kind: "workflow"; routineId: string; payload: Record<string, unknown>; metadata?: Record<string, string>; response?: { statusCode?: number; message?: string; includeTaskId?: boolean; }; };
- HookMappingResult · type · L223-L226 — type HookMappingResult = | { ok: true; action: HookAction } | { ok: true; action: null; skipped: true } | { ok: false; error: string };
- HookMappingContext · interface · L230-L235 — interface HookMappingContext
- HooksConfigResolved · interface · L239-L245 — interface HooksConfigResolved
- GmailHookRuntimeConfig · interface · L249-L270 — interface GmailHookRuntimeConfig
- HookServerEvent · interface · L274-L281 — interface HookServerEvent
