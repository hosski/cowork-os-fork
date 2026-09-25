# src/electron/tunnels/TunnelSupervisor.ts

- SecureMcpTunnelSupervisor · class · L14-L132 — class SecureMcpTunnelSupervisor extends EventEmitter
- getInstance · method · L20-L25 — static getInstance(): SecureMcpTunnelSupervisor
- startEnabledTunnels · method · L27-L39 — async startEnabledTunnels(): Promise<void>
- startTunnel · method · L41-L60 — async startTunnel(tunnelId: string): Promise<SecureMcpTunnelStatus>
- stopTunnel · method · L62-L73 — async stopTunnel(tunnelId: string): Promise<SecureMcpTunnelStatus | null>
- stopAll · method · L75-L79 — async stopAll(): Promise<void>
- getStatuses · method · L81-L101 — getStatuses(): SecureMcpTunnelStatus[]
- getStatus · method · L103-L105 — getStatus(tunnelId: string): SecureMcpTunnelStatus | undefined
- getAuditEvents · method · L107-L116 — getAuditEvents(tunnelId?: string): SecureMcpTunnelAuditEvent[]
- setupClientHandlers · method · L118-L131 — private setupClientHandlers(config: SecureMcpTunnelConfig, client: TunnelClient): void
