# src/electron/core/CoreMemoryCandidateService.ts

- clamp · function · L7-L9 — function clamp(value: number, min: number, max: number): number
- CoreMemoryCandidateService · class · L11-L202 — class CoreMemoryCandidateService
- constructor · method · L12-L16 — constructor( private readonly traceRepo: CoreTraceRepository, private readonly candidateRepo: CoreMemoryCandidateRepository, private readonly scopeResolver: CoreMemoryScopeResolver, )
- extractFromTrace · method · L18-L165 — extractFromTrace( traceId: string, params?: { target?: SubconsciousTargetRef; sourceRunId?: string }, ): CoreMemoryCandidate[]
- pushCandidate · function · L33-L56 — pushCandidate = ( candidateType: CoreMemoryCandidateType, summary: string, details: string, confidence: number, noveltyScore: number, stabilityScore: number, )
- autoAcceptHighSignalCandidates · method · L167-L181 — autoAcceptHighSignalCandidates(traceId: string): CoreMemoryCandidate[]
- dedupeCandidates · method · L183-L201 — private dedupeCandidates( candidates: Array<Omit<CoreMemoryCandidate, "id" | "createdAt">>, ): Array<Omit<CoreMemoryCandidate, "id" | "createdAt">>
