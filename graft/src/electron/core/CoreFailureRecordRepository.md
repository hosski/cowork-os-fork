# src/electron/core/CoreFailureRecordRepository.ts

- Any · type · L5-L5 — type Any = any;
- CoreFailureRecordRepository · class · L7-L138 — class CoreFailureRecordRepository
- constructor · method · L8-L8 — constructor(private readonly db: Database.Database)
- create · method · L10-L40 — create(input: Omit<CoreFailureRecord, "id"> & { id?: string }): CoreFailureRecord
- findById · method · L42-L45 — findById(id: string): CoreFailureRecord | undefined
- findByTraceId · method · L47-L52 — findByTraceId(traceId: string): CoreFailureRecord[]
- list · method · L54-L83 — list(request: ListCoreFailureRecordsRequest = {}): CoreFailureRecord[]
- update · method · L85-L117 — update(id: string, updates: Partial<CoreFailureRecord>): CoreFailureRecord | undefined
- mapRow · method · L119-L137 — private mapRow(row: Any): CoreFailureRecord
