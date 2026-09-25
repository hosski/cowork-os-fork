# src/electron/memory/__tests__/DreamingService.test.ts

- FakeDreamingRepository · class · L13-L73 — class FakeDreamingRepository
- createRun · method · L17-L27 — createRun( input: Omit<DreamingRun, "id" | "createdAt"> & { id?: string; createdAt?: number }, ): DreamingRun
- updateRun · method · L29-L35 — updateRun(id: string, patch: Partial<DreamingRun>): DreamingRun | undefined
- bulkCreateCandidates · method · L37-L51 — bulkCreateCandidates( inputs: Array< Omit<DreamingCandidate, "id" | "createdAt"> & { id?: string; createdAt?: number } >, ): DreamingCandidate[]
- findCandidateById · method · L53-L55 — findCandidateById(id: string): DreamingCandidate | undefined
- reviewCandidate · method · L57-L72 — reviewCandidate(input: { id: string; status: DreamingCandidate["status"]; resolution?: string; }): DreamingCandidate | undefined
- observation · function · L79-L101 — function observation( overrides: Partial<MemoryObservationSearchResult> = {}, ): MemoryObservationSearchResult
- curated · function · L103-L118 — function curated(overrides: Partial<CuratedMemoryEntry> = {}): CuratedMemoryEntry
