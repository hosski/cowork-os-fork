# src/electron/core/CoreMemoryCandidateRepository.ts

- Any · type · L9-L9 — type Any = any;
- CoreMemoryCandidateRepository · class · L11-L140 — class CoreMemoryCandidateRepository
- constructor · method · L12-L12 — constructor(private readonly db: Database.Database)
- create · method · L14-L50 — create( input: Omit<CoreMemoryCandidate, "id" | "createdAt"> & { id?: string; createdAt?: number }, ): CoreMemoryCandidate
- bulkCreate · method · L52-L61 — bulkCreate( inputs: Array< Omit<CoreMemoryCandidate, "id" | "createdAt"> & { id?: string; createdAt?: number } >, ): CoreMemoryCandidate[]
- findById · method · L63-L66 — findById(id: string): CoreMemoryCandidate | undefined
- list · method · L68-L101 — list(request: ListCoreMemoryCandidatesRequest = {}): CoreMemoryCandidate[]
- listForTrace · method · L103-L105 — listForTrace(traceId: string): CoreMemoryCandidate[]
- review · method · L107-L117 — review(request: ReviewCoreMemoryCandidateRequest): CoreMemoryCandidate | undefined
- mapRow · method · L119-L139 — private mapRow(row: Any): CoreMemoryCandidate
