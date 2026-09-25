# src/electron/core/CoreFailureMiningService.ts

- hashParts · function · L12-L16 — function hashParts(parts: Array<string | undefined>): string
- classifyCategory · function · L18-L50 — function classifyCategory(text: string): CoreFailureCategory
- classifySeverity · function · L52-L58 — function classifySeverity(trace: CoreTrace, text: string): CoreFailureSeverity
- CoreFailureMiningService · class · L60-L159 — class CoreFailureMiningService
- constructor · method · L61-L64 — constructor( private readonly traceRepo: CoreTraceRepository, private readonly failureRepo: CoreFailureRecordRepository, )
- mineTrace · method · L66-L74 — mineTrace(traceId: string): CoreFailureRecord[]
- buildCandidates · method · L76-L158 — private buildCandidates( trace: CoreTrace, events: CoreTraceEvent[], ): Array<Omit<CoreFailureRecord, "id">>
