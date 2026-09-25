# src/renderer/components/MCPRegistryBrowser.tsx

- MCPInstallMethod · type · L4-L4 — type MCPInstallMethod = "npm" | "pip" | "binary" | "docker" | "manual";
- MCPTransportType · type · L5-L5 — type MCPTransportType = "stdio" | "sse" | "websocket" | "streamable-http";
- MCPRegistryEntry · interface · L7-L30 — interface MCPRegistryEntry
- MCPRegistryBrowserProps · interface · L32-L35 — interface MCPRegistryBrowserProps
- MCPRegistryBrowser · function · L37-L415 — function MCPRegistryBrowser({ onInstall, installedServerIds = [], }: MCPRegistryBrowserProps)
- loadRegistry · function · L59-L75 — loadRegistry = async ()
- searchServers · function · L77-L96 — searchServers = async ()
- handleInstall · function · L98-L111 — handleInstall = async (entry: MCPRegistryEntry)
- isInstalled · function · L113-L120 — isInstalled = (entry: MCPRegistryEntry): boolean
- normalizeAuthor · function · L122-L126 — normalizeAuthor = (author?: string): string
