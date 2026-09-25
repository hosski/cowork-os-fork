# src/electron/security/permission-settings-manager.ts

- PermissionSettings · interface · L16-L26 — interface PermissionSettings
- PermissionSettingsInput · type · L38-L48 — type PermissionSettingsInput = Omit< Partial<PermissionSettingsData>, "accessProfiles" | "rules" | "migration" > & { version?: unknown; migration?: unknown; // Inputs can come from the permissive recoverable migration envelope. The // active normalizer validates and narrows these arrays before use. accessProfiles?: readonly unknown[]; rules?: readonly unknown[]; };
- PermissionSettingsManager · class · L60-L577 — class PermissionSettingsManager
- loadSettings · method · L63-L97 — static loadSettings(): PermissionSettings
- saveSettings · method · L99-L127 — static saveSettings(settings: PermissionSettingsInput): void
- appendRule · method · L129-L147 — static appendRule(rule: PermissionRule): PermissionSettings
- clearCache · method · L149-L151 — static clearCache(): void
- requiresMigrationWrite · method · L153-L187 — private static requiresMigrationWrite(source: PermissionSettingsInput): boolean
- sourceVersion · method · L189-L192 — private static sourceVersion(settings: PermissionSettingsInput): number
- normalizeSettings · method · L194-L399 — private static normalizeSettings(settings: PermissionSettingsInput): PermissionSettings
- normalizePermissionMode · method · L401-L405 — private static normalizePermissionMode(value: unknown): PermissionMode
- snapshotSettings · method · L407-L435 — private static snapshotSettings( settings: PermissionSettingsInput, ): PermissionSettingsMigrationSnapshot
- normalizeMigration · method · L437-L477 — private static normalizeMigration(value: unknown): PermissionSettingsMigration | undefined
- buildLegacyDefaultProfile · method · L479-L576 — private static buildLegacyDefaultProfile( mode: PermissionMode, shellEnabled: boolean, permissionAccess: "default" | "full", existingProfiles: readonly AccessProfileDefinition[], ): { id: AccessProfileId; profile?: AccessProfileDefinition; provenance: PermissionSettingsMigration["defaultProvenance"]; }
