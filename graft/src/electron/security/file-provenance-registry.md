# src/electron/security/file-provenance-registry.ts

- FileProvenanceRegistryState · type · L14-L16 — type FileProvenanceRegistryState = { records: Record<string, FileProvenanceRecord>; };
- normalizePath · function · L20-L22 — function normalizePath(filePath: string): string
- loadState · function · L24-L36 — function loadState(): FileProvenanceRegistryState
- persistState · function · L38-L41 — function persistState(state: FileProvenanceRegistryState): void
- pruneRecords · function · L43-L52 — function pruneRecords(state: FileProvenanceRegistryState): void
- FileProvenanceRegistry · class · L54-L108 — class FileProvenanceRegistry
- record · method · L55-L78 — static record(input: { path: string; workspaceId?: string; sourceKind: FileProvenanceSourceKind; trustLevel: FileTrustLevel; sourceLabel?: string; metadata?: Record<string, unknown>; }): FileProvenanceRecord
- recordMany · method · L80-L101 — static recordMany( filePaths: string[], input: { workspaceId?: string; sourceKind: FileProvenanceSourceKind; trustLevel: FileTrustLevel; sourceLabel?: string; metadata?: Record<string, unknown>; }, ): FileProvenanceRecord[]
- get · method · L103-L107 — static get(filePath: string): FileProvenanceRecord | null
