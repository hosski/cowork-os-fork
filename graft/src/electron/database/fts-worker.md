# src/electron/database/fts-worker.ts

- FtsRequest · interface · L10-L18 — interface FtsRequest
- FtsResponse · interface · L20-L24 — interface FtsResponse
- truncateToSnippet · function · L29-L32 — function truncateToSnippet(text: string, maxLen: number): string
- search · function · L34-L76 — function search( workspaceId: string, query: string, limit: number, includePrivate: boolean, ): unknown[]
- searchImportedGlobal · function · L78-L116 — function searchImportedGlobal(query: string, limit: number, includePrivate: boolean): unknown[]
- searchLocalForPromptRecall · function · L118-L154 — function searchLocalForPromptRecall(workspaceId: string, query: string, limit: number): unknown[]
- searchByContentMarker · function · L156-L203 — function searchByContentMarker(workspaceId: string, marker: string, limit: number): unknown[]
