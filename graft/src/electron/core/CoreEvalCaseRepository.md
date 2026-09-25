# src/electron/core/CoreEvalCaseRepository.ts

- Any · type · L5-L5 — type Any = any;
- parseJson · function · L7-L14 — function parseJson<T>(value: string | null | undefined, fallback: T): T
- CoreEvalCaseRepository · class · L16-L169 — class CoreEvalCaseRepository
- constructor · method · L17-L17 — constructor(private readonly db: Database.Database)
- create · method · L19-L46 — create(input: Omit<CoreEvalCase, "id"> & { id?: string }): CoreEvalCase
- findById · method · L48-L51 — findById(id: string): CoreEvalCase | undefined
- findByClusterId · method · L53-L58 — findByClusterId(clusterId: string): CoreEvalCase | undefined
- list · method · L60-L85 — list(request: ListCoreEvalCasesRequest = {}): CoreEvalCase[]
- update · method · L87-L118 — update(id: string, updates: Partial<CoreEvalCase>): CoreEvalCase | undefined
- recordRun · method · L120-L151 — recordRun( caseId: string, params: { passed: boolean; summary: string; details?: Record<string, unknown> }, ): void
- mapRow · method · L153-L168 — private mapRow(row: Any): CoreEvalCase
