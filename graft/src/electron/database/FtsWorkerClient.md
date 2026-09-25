# src/electron/database/FtsWorkerClient.ts

- PromptRecallWorkerResult · type · L5-L8 — type PromptRecallWorkerResult = MemorySearchResult & { source: "db"; content?: string; };
- PendingRequest · interface · L10-L14 — interface PendingRequest
- FtsWorkerClient · class · L20-L159 — class FtsWorkerClient
- constructor · method · L30-L33 — constructor(dbPath: string)
- spawnWorker · method · L35-L57 — private spawnWorker(): void
- handleWorkerCrash · method · L59-L77 — private handleWorkerCrash(): void
- request · method · L79-L93 — private request(method: string, args: unknown[]): Promise<unknown>
- search · method · L95-L107 — async search( workspaceId: string, query: string, limit: number, includePrivate: boolean, ): Promise<MemorySearchResult[]>
- searchImportedGlobal · method · L109-L119 — async searchImportedGlobal( query: string, limit: number, includePrivate: boolean, ): Promise<MemorySearchResult[]>
- searchLocalForPromptRecall · method · L121-L131 — async searchLocalForPromptRecall( workspaceId: string, query: string, limit: number, ): Promise<PromptRecallWorkerResult[]>
- searchByContentMarker · method · L133-L143 — async searchByContentMarker( workspaceId: string, marker: string, limit: number, ): Promise<MemorySearchResult[]>
- destroy · method · L145-L158 — destroy(): void
