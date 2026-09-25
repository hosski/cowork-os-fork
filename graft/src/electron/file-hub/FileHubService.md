# src/electron/file-hub/FileHubService.ts

- FileHubService · class · L54-L250 — class FileHubService
- constructor · method · L59-L63 — constructor(deps: FileHubServiceDeps, db?: Any)
- listFiles · method · L67-L77 — async listFiles(options: FileHubListOptions): Promise<UnifiedFile[]>
- listLocalFiles · method · L79-L117 — private listLocalFiles(options: FileHubListOptions): UnifiedFile[]
- listArtifacts · method · L119-L131 — private listArtifacts(options: FileHubListOptions): UnifiedFile[]
- searchFiles · method · L135-L155 — async searchFiles(query: string, sources?: FileHubSource[]): Promise<FileHubSearchResult[]>
- getRecentFiles · method · L159-L186 — async getRecentFiles(limit = 20): Promise<UnifiedFile[]>
- trackAccess · method · L188-L216 — trackAccess(file: UnifiedFile): void
- getAvailableSources · method · L220-L224 — getAvailableSources(): FileHubSource[]
- ensureSchema · method · L228-L249 — private ensureSchema(): void
