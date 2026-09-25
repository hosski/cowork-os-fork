# src/electron/memory/DreamingRepository.ts

- Any · type · L11-L11 — type Any = any;
- parseJson · function · L13-L20 — function parseJson<T>(value: string | null | undefined, fallback: T): T
- DreamingRepository · class · L22-L260 — class DreamingRepository
- constructor · method · L23-L23 — constructor(private readonly db: Database.Database)
- createRun · method · L25-L61 — createRun( input: Omit<DreamingRun, "id" | "createdAt"> & { id?: string; createdAt?: number }, ): DreamingRun
- updateRun · method · L63-L102 — updateRun( id: string, patch: Partial< Pick< DreamingRun, "status" | "summary" | "evidenceCount" | "candidateCount" | "error" | "completedAt" > >, ): DreamingRun | undefined
- findRunById · method · L104-L107 — findRunById(id: string): DreamingRun | undefined
- listRuns · method · L109-L130 — listRuns(request: ListDreamingRunsRequest = {}): DreamingRun[]
- createCandidate · method · L132-L164 — createCandidate( input: Omit<DreamingCandidate, "id" | "createdAt"> & { id?: string; createdAt?: number }, ): DreamingCandidate
- bulkCreateCandidates · method · L166-L175 — bulkCreateCandidates( inputs: Array< Omit<DreamingCandidate, "id" | "createdAt"> & { id?: string; createdAt?: number } >, ): DreamingCandidate[]
- findCandidateById · method · L177-L180 — findCandidateById(id: string): DreamingCandidate | undefined
- listCandidates · method · L182-L207 — listCandidates(request: ListDreamingCandidatesRequest = {}): DreamingCandidate[]
- reviewCandidate · method · L209-L219 — reviewCandidate(request: ReviewDreamingCandidateRequest): DreamingCandidate | undefined
- mapRun · method · L221-L240 — private mapRun(row: Any): DreamingRun
- mapCandidate · method · L242-L259 — private mapCandidate(row: Any): DreamingCandidate
