# src/electron/tunnels/protocol.ts

- parseTunnelRelayMessage · function · L6-L32 — function parseTunnelRelayMessage(raw: string): TunnelRelayMessage
- serializeTunnelClientMessage · function · L34-L36 — function serializeTunnelClientMessage(message: TunnelClientMessage): string
- validateJsonRpcRequest · function · L38-L49 — function validateJsonRpcRequest(payload: unknown): void
- getMcpToolName · function · L51-L65 — function getMcpToolName(payload: unknown): string | undefined
- enforceTunnelPolicy · function · L67-L94 — function enforceTunnelPolicy( policy: SecureMcpTunnelPolicy, payload: unknown, sizeBytes: number, ): { approved: true } | { approved: false; reason: string; toolName?: string }
- requireString · function · L96-L100 — function requireString(value: unknown, field: string): void
