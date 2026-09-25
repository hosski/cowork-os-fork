# src/shared/security/task-entrypoint.ts

- TaskCreationAccessSettings · type · L9-L9 — type TaskCreationAccessSettings = Pick<PermissionSettingsData, "defaultAccessProfileId">;
- NormalizedTaskAgentConfig · interface · L11-L14 — interface NormalizedTaskAgentConfig
- normalizeTaskAgentConfigForCreation · function · L25-L63 — function normalizeTaskAgentConfigForCreation( agentConfig: AgentConfig | undefined, settings: TaskCreationAccessSettings, ): NormalizedTaskAgentConfig
- taskAgentConfigForCreation · function · L66-L71 — function taskAgentConfigForCreation( agentConfig: AgentConfig | undefined, settings: TaskCreationAccessSettings, ): AgentConfig | undefined
