# src/electron/tunnels/types.ts

- SecureMcpTunnelTargetType · type · L3-L3 — type SecureMcpTunnelTargetType = "cowork-host" | "http";
- SecureMcpTunnelConnectionState · type · L4-L9 — type SecureMcpTunnelConnectionState = | "stopped" | "connecting" | "connected" | "reconnecting" | "error";
- SecureMcpTunnelPolicy · interface · L11-L17 — interface SecureMcpTunnelPolicy
- SecureMcpTunnelConfig · interface · L19-L34 — interface SecureMcpTunnelConfig
- SecureMcpTunnelDisplayConfig · interface · L36-L42 — interface SecureMcpTunnelDisplayConfig extends Omit< SecureMcpTunnelConfig, "clientToken" | "callerToken" >
- SecureMcpTunnelSettings · interface · L44-L46 — interface SecureMcpTunnelSettings
- SecureMcpTunnelDisplaySettings · interface · L48-L50 — interface SecureMcpTunnelDisplaySettings
- SecureMcpTunnelStatus · interface · L52-L63 — interface SecureMcpTunnelStatus
- SecureMcpTunnelAuditEvent · interface · L65-L76 — interface SecureMcpTunnelAuditEvent
- TunnelClientMessage · type · L78-L107 — type TunnelClientMessage = | { type: "hello"; tunnelId: string; protocolVersion: 1; targetType: SecureMcpTunnelTargetType; policy: SecureMcpTunnelPolicy; } | { type: "pong"; tunnelId: string; timestamp: number; } | { type: "mcp_response"; tunnelId: string; requestId: string; payload: JSONRPCResponse; } | { type: "mcp_error"; tunnelId: string; requestId: string; error: string; } | { type: "audit_event"; tunnelId: string; event: SecureMcpTunnelAuditEvent; };
- TunnelRelayMessage · type · L109-L129 — type TunnelRelayMessage = | { type: "ready"; tunnelId: string; } | { type: "ping"; timestamp: number; } | { type: "mcp_request"; tunnelId: string; requestId: string; caller?: string; deadlineMs?: number; payload: JSONRPCRequest; } | { type: "error"; error: string; };
- SecureMcpTunnelCreateInput · interface · L131-L141 — interface SecureMcpTunnelCreateInput
- SecureMcpTunnelUpdateInput · interface · L143-L147 — interface SecureMcpTunnelUpdateInput extends Partial< Omit<SecureMcpTunnelCreateInput, "policy"> >
