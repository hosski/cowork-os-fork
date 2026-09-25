# src/electron/utils/env-migration.ts

- MigrationResult · interface · L19-L23 — interface MigrationResult
- EnvSettingsImportMode · type · L25-L25 — type EnvSettingsImportMode = "merge" | "overwrite";
- ImportProcessEnvOptions · interface · L27-L29 — interface ImportProcessEnvOptions
- getElectronAppPath · function · L31-L44 — function getElectronAppPath(): string | null
- normalizeEnvValue · function · L46-L50 — function normalizeEnvValue(value: unknown): string | undefined
- shouldWriteValue · function · L52-L61 — function shouldWriteValue( existing: unknown, next: string | undefined, mode: EnvSettingsImportMode, ): boolean
- isProviderConfigured · function · L63-L111 — function isProviderConfigured(providerType: LLMProviderType, settings: Any): boolean
- pickProviderFromSettings · function · L113-L147 — function pickProviderFromSettings(settings: Any): LLMProviderType | null
- validateProviderType · function · L149-L169 — function validateProviderType(raw: string | undefined): LLMProviderType | null
- parseEnvFile · function · L174-L204 — function parseEnvFile(content: string): Record<string, string>
- migrateEnvToSettings · function · L209-L401 — async function migrateEnvToSettings(): Promise<MigrationResult>
- importProcessEnvToSettings · function · L415-L678 — async function importProcessEnvToSettings( options: ImportProcessEnvOptions = {}, ): Promise<MigrationResult>
