# src/daemon/main.ts

- StartedControlPlane · interface · L64-L67 — interface StartedControlPlane
- maybeBootstrapWorkspace · function · L69-L107 — async function maybeBootstrapWorkspace(agentDaemon: AgentDaemon): Promise<void>
- startControlPlane · function · L109-L224 — async function startControlPlane(options: { deps: { agentDaemon: AgentDaemon; dbManager: DatabaseManager; channelGateway: ChannelGateway; }; forceEnable: boolean; onEvent?: (evt: Any) => void; }): Promise<{ ok: boolean; skipped?: boolean; address?: { host: string; port: number; wsUrl: string }; error?: string; started?: StartedControlPlane; }>
- main · function · L226-L778 — async function main(): Promise<void>
- lookupUser · function · L468-L474 — lookupUser = (id: string)
- shutdown · function · L664-L763 — shutdown = (reason: string): Promise<void>
