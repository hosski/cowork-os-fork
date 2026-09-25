# src/electron/gateway/router-rules.ts

- RouterRuleResult · type · L14-L20 — type RouterRuleResult = | { action: "pass" } | { action: "ignore"; reason?: string } | { action: "reply"; text: string; parseMode?: "markdown" } | { action: "rewrite"; text: string } | { action: "set_workspace"; workspaceId: string; text?: string } | { action: "set_agent"; agentRoleId: string; workspaceId?: string; text?: string };
- CachedFile · type · L40-L40 — type CachedFile = { mtimeMs: number; code: string; hash: string };
- summarizeAttachments · function · L43-L52 — function summarizeAttachments(attachments?: MessageAttachment[]): Any[]
- normalizeRuleResult · function · L54-L93 — function normalizeRuleResult(raw: unknown): RouterRuleResult | null
- loadRulesCode · function · L95-L114 — async function loadRulesCode(workspacePath: string): Promise<CachedFile | null>
- evaluateWorkspaceRouterRules · function · L116-L178 — async function evaluateWorkspaceRouterRules(args: { workspace: Workspace; channelType: ChannelType; sessionId: string; message: IncomingMessage; contextType?: "dm" | "group"; taskId?: string | null; limits?: MontyResourceLimits; }): Promise<RouterRuleResult | null>
