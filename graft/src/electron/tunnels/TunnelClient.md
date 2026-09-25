# src/electron/tunnels/TunnelClient.ts

- TunnelClientEvents · interface · L17-L20 — interface TunnelClientEvents
- TunnelClient · class · L22-L232 — class TunnelClient extends EventEmitter
- constructor · method · L33-L36 — constructor(private readonly config: SecureMcpTunnelConfig)
- getStatus · method · L38-L51 — getStatus(): SecureMcpTunnelStatus
- start · method · L53-L125 — async start(): Promise<void>
- stop · method · L127-L147 — async stop(): Promise<void>
- handleRawMessage · method · L149-L188 — private async handleRawMessage(raw: string): Promise<void>
- scheduleReconnect · method · L190-L204 — private scheduleReconnect(): void
- sendError · method · L206-L208 — private sendError(requestId: string, error: string): void
- send · method · L210-L215 — private send(message: Parameters<typeof serializeTunnelClientMessage>[0]): void
- setState · method · L217-L220 — private setState(state: SecureMcpTunnelConnectionState): void
- emitStatus · method · L222-L224 — private emitStatus(): void
- getTargetDescription · method · L226-L231 — private getTargetDescription(): string
- buildRelayConnectUrl · function · L234-L240 — function buildRelayConnectUrl(relayUrl: string, tunnelId: string): string
- assertAllowedRelayUrl · function · L242-L255 — function assertAllowedRelayUrl(relayUrl: string): void
