# src/electron/tunnels/McpTunnelForwarder.ts

- ForwardResult · interface · L10-L13 — interface ForwardResult
- McpTunnelForwarder · class · L15-L157 — class McpTunnelForwarder
- constructor · method · L16-L16 — constructor(private readonly config: SecureMcpTunnelConfig)
- forward · method · L18-L82 — async forward( payload: JSONRPCRequest, caller?: string, deadlineMs?: number, ): Promise<ForwardResult>
- forwardHttp · method · L84-L117 — private async forwardHttp( payload: JSONRPCRequest, deadlineMs?: number, ): Promise<JSONRPCResponse>
- getTargetUrl · method · L119-L128 — private getTargetUrl(): string
- getTargetAuthHeaders · method · L130-L139 — private getTargetAuthHeaders(): Record<string, string>
- buildAuditEvent · method · L141-L156 — private buildAuditEvent(input: { caller?: string; method: string; toolName?: string; approved: boolean; status: SecureMcpTunnelAuditEvent["status"]; durationMs?: number; error?: string; }): SecureMcpTunnelAuditEvent
- readResponseTextLimited · function · L159-L181 — async function readResponseTextLimited(response: Response, maxBytes: number): Promise<string>
- assertAllowedTargetUrl · function · L183-L201 — function assertAllowedTargetUrl(rawUrl: string): void
- buildJsonRpcError · function · L203-L216 — function buildJsonRpcError( id: JSONRPCRequest["id"], code: number, message: string, ): JSONRPCResponse
