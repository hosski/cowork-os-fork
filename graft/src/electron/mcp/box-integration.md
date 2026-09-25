# src/electron/mcp/box-integration.ts

- normalizeUrl · function · L11-L16 — function normalizeUrl(url?: string): string
- isBoxMcpServer · function · L18-L24 — function isBoxMcpServer(server: MCPServerConfig): boolean
- getBoxMcpServer · function · L26-L28 — function getBoxMcpServer(): MCPServerConfig | undefined
- buildBoxMcpAuth · function · L30-L42 — function buildBoxMcpAuth(settings: BoxSettingsData): MCPAuthConfig | undefined
- syncBoxMcpServerSettings · function · L49-L90 — function syncBoxMcpServerSettings(settings: BoxSettingsData): MCPServerConfig | null
- syncBoxMcpConnection · function · L92-L114 — async function syncBoxMcpConnection(settings: BoxSettingsData): Promise<{ serverId?: string; connected?: boolean; error?: string; }>
