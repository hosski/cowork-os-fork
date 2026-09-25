# src/electron/ipc/plugin-pack-handlers.ts

- PluginPackData · interface · L12-L42 — interface PluginPackData
- ActiveContextData · interface · L47-L50 — interface ActiveContextData
- titleFromSkillId · function · L52-L62 — function titleFromSkillId(id: string): string
- listManifestSkills · function · L64-L97 — function listManifestSkills(manifest: { skills?: Array<{ id: string; name: string; description: string; icon?: string; enabled?: boolean; }>; skillDirectories?: Array<{ id: string; name?: string; description?: string; icon?: string; enabled?: boolean; path: string; }>; }): PluginPackData["skills"]
- resolveConnectorIcon · function · L146-L156 — function resolveConnectorIcon(server: { id: string; name: string }): string
- setupPluginPackHandlers · function · L161-L400 — function setupPluginPackHandlers(): void
- ensureRegistryInitialized · function · L163-L165 — ensureRegistryInitialized = async (): Promise<void>
