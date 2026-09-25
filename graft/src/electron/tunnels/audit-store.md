# src/electron/tunnels/audit-store.ts

- SecureMcpTunnelAuditStore · class · L13-L60 — class SecureMcpTunnelAuditStore
- append · method · L14-L23 — static append(event: SecureMcpTunnelAuditEvent): void
- rotateIfNeeded · method · L25-L34 — private static rotateIfNeeded(filePath: string): void
- list · method · L36-L55 — static list(tunnelId?: string, limit = 100): SecureMcpTunnelAuditEvent[]
- getAuditPath · method · L57-L59 — private static getAuditPath(): string
