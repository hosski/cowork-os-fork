# src/renderer/components/ImessageSettings.tsx

- ImessageSettingsProps · interface · L4-L6 — interface ImessageSettingsProps
- DmPolicy · type · L8-L8 — type DmPolicy = "open" | "allowlist" | "pairing" | "disabled";
- GroupPolicy · type · L9-L9 — type GroupPolicy = "open" | "allowlist" | "disabled";
- ImessageSettings · function · L11-L638 — function ImessageSettings({ onStatusChange }: ImessageSettingsProps)
- handleAddChannel · function · L92-L120 — handleAddChannel = async ()
- handleTestConnection · function · L122-L136 — handleTestConnection = async ()
- handleToggleEnabled · function · L138-L154 — handleToggleEnabled = async ()
- handleRemoveChannel · function · L156-L174 — handleRemoveChannel = async ()
- handleUpdateSecurityMode · function · L176-L189 — handleUpdateSecurityMode = async (mode: SecurityMode)
- handleUpdateConfig · function · L191-L203 — handleUpdateConfig = async (next: Record<string, unknown>)
- handleGeneratePairingCode · function · L205-L214 — handleGeneratePairingCode = async ()
- handleRevokeAccess · function · L216-L225 — handleRevokeAccess = async (userId: string)
