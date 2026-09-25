# src/electron/extensions/pack-installer.ts

- InstallProgress · interface · L37-L43 — interface InstallProgress
- InstallProgressCallback · type · L45-L45 — type InstallProgressCallback = (progress: InstallProgress) => void;
- InstallResult · interface · L47-L56 — interface InstallResult
- UninstallResult · interface · L58-L62 — interface UninstallResult
- sanitizePackId · function · L67-L85 — function sanitizePackId(packId: string): string | null
- getUserExtensionsDir · function · L90-L95 — function getUserExtensionsDir(): string
- ensureExtensionsDir · function · L100-L106 — function ensureExtensionsDir(): string
- buildTempInstallDir · function · L111-L115 — function buildTempInstallDir(extensionsDir: string, hint: string): string
- toInstallOutcome · function · L117-L135 — function toInstallOutcome(report?: { verdict: "clean" | "warning" | "quarantined"; summary: string; }): InstallSecurityOutcome | undefined
- findInstalledPackDirByManifestName · function · L141-L174 — function findInstalledPackDirByManifestName( extensionsDir: string, safeManifestName: string, ): string | null
- isGitAvailable · function · L179-L186 — async function isGitAvailable(): Promise<boolean>
- parseGitUrl · function · L197-L229 — function parseGitUrl(input: string): { url: string; name: string } | null
- installFromGit · function · L234-L407 — async function installFromGit( gitUrl: string, onProgress?: InstallProgressCallback, ): Promise<InstallResult>
- notify · function · L238-L245 — notify = (partial: Partial<InstallProgress>)
- installFromUrl · function · L412-L534 — async function installFromUrl( url: string, onProgress?: InstallProgressCallback, ): Promise<InstallResult>
- notify · function · L416-L423 — notify = (partial: Partial<InstallProgress>)
- uninstallPack · function · L542-L572 — async function uninstallPack(packName: string): Promise<UninstallResult>
- listInstalledPacks · function · L577-L605 — function listInstalledPacks(): { name: string; path: string; manifest?: PluginManifest }[]
