# src/renderer/components/ExtensionsSettings.tsx

- ExtensionType · type · L6-L6 — type ExtensionType = "channel" | "tool" | "provider" | "integration";
- ExtensionState · type · L7-L7 — type ExtensionState = "loading" | "loaded" | "registered" | "active" | "error" | "disabled";
- ExtensionsSettings · function · L9-L549 — function ExtensionsSettings()
- loadExtensions · function · L27-L37 — loadExtensions = async ()
- loadTunnelStatus · function · L39-L46 — loadTunnelStatus = async ()
- handleSelectExtension · function · L48-L50 — handleSelectExtension = (name: string)
- handleEnableExtension · function · L52-L67 — handleEnableExtension = async (name: string)
- handleDisableExtension · function · L69-L84 — handleDisableExtension = async (name: string)
- handleReloadExtension · function · L86-L101 — handleReloadExtension = async (name: string)
- handleDiscoverExtensions · function · L103-L114 — handleDiscoverExtensions = async ()
- handleStartTunnel · function · L116-L135 — handleStartTunnel = async ()
- handleStopTunnel · function · L137-L152 — handleStopTunnel = async ()
- getStateColor · function · L154-L168 — getStateColor = (state: ExtensionState): string
- getTypeIcon · function · L170-L184 — getTypeIcon = (type: ExtensionType): ReactNode
- normalizeAuthor · function · L186-L191 — normalizeAuthor = (author?: string): string | undefined
