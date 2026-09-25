# src/electron/extensions/loader.ts

- getElectronApp · function · L29-L36 — function getElectronApp(): { isPackaged?: boolean } | null
- getUserExtensionsDir · function · L38-L40 — function getUserExtensionsDir(): string
- normalizeLegacyAuthor · function · L42-L47 — function normalizeLegacyAuthor(author?: string): string | undefined
- normalizeManifestBranding · function · L49-L54 — function normalizeManifestBranding(manifest: PluginManifest): PluginManifest
- getDefaultExtensionsDirs · function · L57-L95 — getDefaultExtensionsDirs = (): string[]
- validateManifest · function · L100-L158 — function validateManifest(manifest: unknown): manifest is PluginManifest
- validateConfigSchema · function · L163-L182 — function validateConfigSchema(schema: PluginConfigSchema): void
- discoverPlugins · function · L187-L245 — async function discoverPlugins(dirs?: string[]): Promise<PluginDiscoveryResult[]>
- loadPlugin · function · L250-L361 — async function loadPlugin(pluginPath: string): Promise<PluginLoadResult>
- ensureExtensionsDirectory · function · L366-L374 — function ensureExtensionsDirectory(): string
- getPluginDataPath · function · L379-L387 — function getPluginDataPath(pluginName: string): string
- isPluginCompatible · function · L392-L424 — function isPluginCompatible(manifest: PluginManifest, coworkVersion: string): boolean
- parse · function · L399-L405 — parse = (version: string): [number, number, number] | null
- generateManifestTemplate · function · L429-L462 — function generateManifestTemplate( name: string, type: "channel" | "tool" | "provider" | "integration" = "channel", ): PluginManifest
- writeManifestTemplate · function · L467-L474 — function writeManifestTemplate(pluginDir: string, manifest: PluginManifest): void
