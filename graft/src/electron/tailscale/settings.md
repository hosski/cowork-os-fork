# src/electron/tailscale/settings.ts

- TailscaleMode · type · L23-L23 — type TailscaleMode = "off" | "serve" | "funnel";
- TailscaleSettings · interface · L28-L39 — interface TailscaleSettings
- TailscaleSettingsManager · class · L52-L219 — class TailscaleSettingsManager
- initialize · method · L61-L72 — static initialize(): void
- migrateFromLegacyFile · method · L77-L124 — private static migrateFromLegacyFile(): void
- ensureInitialized · method · L129-L133 — private static ensureInitialized(): void
- loadSettings · method · L138-L166 — static loadSettings(): TailscaleSettings
- saveSettings · method · L171-L187 — static saveSettings(settings: TailscaleSettings): void
- updateSettings · method · L192-L197 — static updateSettings(updates: Partial<TailscaleSettings>): TailscaleSettings
- setMode · method · L202-L204 — static setMode(mode: TailscaleMode): TailscaleSettings
- clearCache · method · L209-L211 — static clearCache(): void
- getDefaults · method · L216-L218 — static getDefaults(): TailscaleSettings
