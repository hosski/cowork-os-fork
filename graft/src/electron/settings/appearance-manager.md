# src/electron/settings/appearance-manager.ts

- AppearanceManager · class · L43-L359 — class AppearanceManager
- initialize · method · L51-L58 — static initialize(): void
- migrateFromLegacyFile · method · L63-L121 — private static migrateFromLegacyFile(): void
- loadSettings · method · L126-L235 — static loadSettings(): AppearanceSettings
- recoverLegacyLifecycleSettings · method · L237-L279 — private static recoverLegacyLifecycleSettings( settings: AppearanceSettings, ): AppearanceSettings | null
- saveSettings · method · L284-L351 — static saveSettings(settings: Partial<AppearanceSettings>): void
- clearCache · method · L356-L358 — static clearCache(): void
- getDevLogCaptureEnabled · function · L361-L378 — function getDevLogCaptureEnabled(): boolean
- isValidThemeMode · function · L380-L382 — function isValidThemeMode(value: unknown): value is ThemeMode
- isValidVisualTheme · function · L384-L386 — function isValidVisualTheme(value: unknown): value is VisualTheme
- isValidAccentColor · function · L388-L401 — function isValidAccentColor(value: unknown): value is AccentColor
- isValidUiDensity · function · L403-L405 — function isValidUiDensity(value: unknown): value is UiDensity
- isValidTimelineVerbosity · function · L407-L409 — function isValidTimelineVerbosity(value: unknown): value is TimelineVerbosity
- isValidCommandOutputStyle · function · L411-L413 — function isValidCommandOutputStyle(value: unknown): value is CommandOutputStyle
- syncDevLogSettingsFile · function · L415-L437 — function syncDevLogSettingsFile(captureEnabled: boolean): void
