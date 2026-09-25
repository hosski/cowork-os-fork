# src/electron/voice/voice-settings-manager.ts

- LegacyVoiceSettingsFile · interface · L31-L52 — interface LegacyVoiceSettingsFile
- LegacySecureKeys · interface · L54-L58 — interface LegacySecureKeys
- VoiceSettingsManager · class · L60-L435 — class VoiceSettingsManager
- initialize · method · L69-L79 — static initialize(db?: Database.Database): void
- setRepository · method · L84-L92 — static setRepository(db: Database.Database): void
- loadSettings · method · L97-L125 — static loadSettings(): VoiceSettings
- saveSettings · method · L130-L150 — static saveSettings(settings: VoiceSettings): VoiceSettings
- updateSettings · method · L155-L159 — static updateSettings(partial: Partial<VoiceSettings>): VoiceSettings
- clearCache · method · L164-L166 — static clearCache(): void
- resetSettings · method · L171-L182 — static resetSettings(): void
- hasElevenLabsKey · method · L187-L190 — static hasElevenLabsKey(): boolean
- hasOpenAIKey · method · L195-L198 — static hasOpenAIKey(): boolean
- hasAzureKey · method · L203-L206 — static hasAzureKey(): boolean
- migrateFromLegacyFiles · method · L213-L314 — private static migrateFromLegacyFiles(): void
- loadLegacySecureKeys · method · L319-L335 — private static loadLegacySecureKeys(legacyKeysPath: string): LegacySecureKeys
- cleanupLegacyFiles · method · L340-L359 — private static cleanupLegacyFiles(): void
- resolveRepository · method · L361-L377 — private static resolveRepository(db?: Database.Database): SecureSettingsRepository | null
- validateSettings · method · L381-L434 — private static validateSettings(settings: VoiceSettings): VoiceSettings
