# src/renderer/components/SignalSettings.tsx

- SignalSettingsProps · interface · L4-L6 — interface SignalSettingsProps
- DmPolicy · type · L8-L8 — type DmPolicy = "open" | "allowlist" | "pairing" | "disabled";
- GroupPolicy · type · L9-L9 — type GroupPolicy = "open" | "allowlist" | "disabled";
- TrustMode · type · L10-L10 — type TrustMode = "tofu" | "always" | "manual";
- SignalMode · type · L11-L11 — type SignalMode = "native" | "daemon";
- SignalSettings · function · L13-L702 — function SignalSettings({ onStatusChange }: SignalSettingsProps)
- handleAddChannel · function · L91-L126 — handleAddChannel = async ()
- handleTestConnection · function · L128-L142 — handleTestConnection = async ()
- handleToggleEnabled · function · L144-L160 — handleToggleEnabled = async ()
- handleRemoveChannel · function · L162-L180 — handleRemoveChannel = async ()
- handleUpdateSecurityMode · function · L182-L195 — handleUpdateSecurityMode = async (newMode: SecurityMode)
- handleUpdateConfig · function · L197-L224 — handleUpdateConfig = async ()
- handleGeneratePairingCode · function · L226-L235 — handleGeneratePairingCode = async ()
- handleRevokeAccess · function · L237-L246 — handleRevokeAccess = async (userId: string)
