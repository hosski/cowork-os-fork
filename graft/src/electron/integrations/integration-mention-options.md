# src/electron/integrations/integration-mention-options.ts

- BuiltinIntegrationSettings · type · L32-L40 — type BuiltinIntegrationSettings = { notion?: NotionSettingsData; box?: BoxSettingsData; oneDrive?: OneDriveSettingsData; googleWorkspace?: GoogleWorkspaceSettingsData; agentMail?: AgentMailSettingsData; dropbox?: DropboxSettingsData; sharePoint?: SharePointSettingsData; };
- IntegrationMentionOptionsState · type · L42-L49 — type IntegrationMentionOptionsState = { builtins?: BuiltinIntegrationSettings; channels?: ChannelData[]; mcp?: { settings: Pick<MCPSettings, "servers" | "toolNamePrefix">; statuses?: MCPServerStatus[]; }; };
- hasText · function · L329-L331 — function hasText(value: unknown): value is string
- optionFromBuiltin · function · L333-L346 — function optionFromBuiltin(def: (typeof BUILTIN_DEFS)[number]): IntegrationMentionOption
- buildBuiltinOptions · function · L348-L379 — function buildBuiltinOptions(settings: BuiltinIntegrationSettings): IntegrationMentionOption[]
- buildGatewayOptions · function · L381-L413 — function buildGatewayOptions(channels: ChannelData[] = []): IntegrationMentionOption[]
- toolNamesWithPrefix · function · L415-L417 — function toolNamesWithPrefix(prefix: string, tools: MCPTool[] = []): string[]
- rawToolNames · function · L419-L421 — function rawToolNames(tools: MCPTool[] = []): string[]
- buildMcpOptions · function · L423-L462 — function buildMcpOptions(mcp?: IntegrationMentionOptionsState["mcp"]): IntegrationMentionOption[]
- splitMcpServerOptions · function · L464-L527 — function splitMcpServerOptions(input: { serverId: string; serverName: string; capabilityId: string | null; status: "configured" | "connected"; exactTools: string[]; rawToolNames: string[]; }): IntegrationMentionOption[]
- toTitle · function · L529-L535 — function toTitle(value: string): string
- slugify · function · L537-L542 — function slugify(value: string): string
- dedupeOptions · function · L544-L584 — function dedupeOptions(options: IntegrationMentionOption[]): IntegrationMentionOption[]
- buildIntegrationMentionOptionsFromState · function · L586-L598 — function buildIntegrationMentionOptionsFromState( state: IntegrationMentionOptionsState, ): IntegrationMentionOption[]
- listIntegrationMentionOptions · function · L600-L630 — function listIntegrationMentionOptions( channels: ChannelData[] = [], ): IntegrationMentionOption[]
