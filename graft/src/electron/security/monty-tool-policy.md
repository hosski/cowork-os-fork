# src/electron/security/monty-tool-policy.ts

- ToolPolicyDecision · type · L12-L15 — type ToolPolicyDecision = { decision: "pass" | "deny" | "require_approval"; reason?: string; };
- CachedPolicyFile · type · L39-L39 — type CachedPolicyFile = { mtimeMs: number; code: string; hash: string };
- loadPolicyCode · function · L43-L67 — async function loadPolicyCode(workspacePath: string): Promise<CachedPolicyFile | null>
- normalizeDecision · function · L69-L80 — function normalizeDecision(raw: unknown): ToolPolicyDecision | null
- evaluateMontyToolPolicy · function · L82-L164 — async function evaluateMontyToolPolicy(args: { workspace: Workspace; toolName: string; toolInput: unknown; gatewayContext?: GatewayContextType; limits?: MontyResourceLimits; }): Promise<ToolPolicyDecision>
- unavailable · function · L92-L95 — unavailable = (): ToolPolicyDecision
