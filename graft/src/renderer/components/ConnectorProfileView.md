# src/renderer/components/ConnectorProfileView.tsx

- MCPConnectionStatus · type · L8-L8 — type MCPConnectionStatus = "disconnected" | "connecting" | "connected" | "reconnecting" | "error";
- MCPServerConfig · type · L10-L23 — type MCPServerConfig = { id: string; name: string; description?: string; enabled: boolean; command?: string; args?: string[]; env?: Record<string, string>; url?: string; version?: string; author?: string; homepage?: string; repository?: string; };
- MCPServerStatus · type · L25-L31 — type MCPServerStatus = { id: string; name: string; status: MCPConnectionStatus; error?: string; tools: Array<{ name: string }>; };
- ConnectorDefinition · interface · L33-L41 — interface ConnectorDefinition
- getStatusColor · function · L43-L55 — function getStatusColor(status: MCPConnectionStatus): string
- getStatusText · function · L57-L70 — function getStatusText(status: MCPConnectionStatus): string
- MCPRegistryEntry · type · L72-L86 — type MCPRegistryEntry = { id: string; name: string; description: string; version: string; author: string; homepage?: string; repository?: string; license?: string; tools: Array<{ name: string; description?: string }>; tags: string[]; category?: string; verified?: boolean; featured?: boolean; };
- MCPUpdateInfo · type · L88-L93 — type MCPUpdateInfo = { serverId: string; currentVersion: string; latestVersion: string; registryEntry: MCPRegistryEntry; };
- ConnectorProfileViewProps · interface · L95-L119 — interface ConnectorProfileViewProps
- ConnectorProfileView · function · L121-L512 — function ConnectorProfileView({ connector, config, status, installingId, connectingServer, connectionErrors, onClose, onInstall, onConnect, onDisconnect, onOpenSetup, onOpenEnvModal, onUpdate, }: ConnectorProfileViewProps)
- handleConnectClick · function · L191-L201 — handleConnectClick = async ()
- getConnectButtonLabel · function · L203-L211 — getConnectButtonLabel = ()
- handleUpdate · function · L213-L223 — handleUpdate = async ()
- handleCopyUrl · function · L225-L227 — handleCopyUrl = ()
