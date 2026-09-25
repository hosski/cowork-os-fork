# src/cli/config-store.ts

- CliProfile · interface · L5-L8 — interface CliProfile
- CliConfig · interface · L10-L13 — interface CliConfig
- ResolvedConnection · interface · L15-L19 — interface ResolvedConnection
- getConfigPath · function · L23-L26 — function getConfigPath(): string
- createDefaultConfig · function · L28-L37 — function createDefaultConfig(): CliConfig
- loadCliConfig · function · L39-L48 — function loadCliConfig(configPath = getConfigPath()): CliConfig
- saveCliConfig · function · L50-L63 — function saveCliConfig(config: CliConfig, configPath = getConfigPath()): void
- resolveConnection · function · L65-L79 — function resolveConnection(options: { config?: CliConfig; profile?: string; url?: string; token?: string; }): ResolvedConnection
- upsertProfile · function · L81-L101 — function upsertProfile( config: CliConfig, profileName: string, updates: Partial<CliProfile>, makeDefault: boolean, ): CliConfig
- removeProfileToken · function · L103-L115 — function removeProfileToken(config: CliConfig, profileName: string): CliConfig
- normalizeConfig · function · L117-L140 — function normalizeConfig(input: unknown): CliConfig
