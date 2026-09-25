# src/renderer/components/DiscordSettings.tsx

- DiscordSettingsProps · interface · L5-L7 — interface DiscordSettingsProps
- parseCsvIds · function · L9-L14 — function parseCsvIds(value: string): string[]
- formatCsvIds · function · L16-L18 — function formatCsvIds(value?: string[]): string
- getSupervisorConfigError · function · L20-L41 — function getSupervisorConfigError(input: { enabled: boolean; coordinationChannelId: string; workerAgentRoleId: string; supervisorAgentRoleId: string; peerBotUserIds: string; }): string | null
- DiscordSettings · function · L43-L853 — function DiscordSettings({ onStatusChange }: DiscordSettingsProps)
- handleAddChannel · function · L137-L185 — handleAddChannel = async ()
- handleTestConnection · function · L187-L201 — handleTestConnection = async ()
- handleToggleEnabled · function · L203-L219 — handleToggleEnabled = async ()
- handleRemoveChannel · function · L221-L239 — handleRemoveChannel = async ()
- handleUpdateSecurityMode · function · L241-L254 — handleUpdateSecurityMode = async (mode: SecurityMode)
- handleGeneratePairingCode · function · L256-L265 — handleGeneratePairingCode = async ()
- handleRevokeAccess · function · L267-L276 — handleRevokeAccess = async (userId: string)
- handleSaveSupervisorSettings · function · L278-L310 — handleSaveSupervisorSettings = async ()
