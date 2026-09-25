# src/electron/database/WorkSessionOperationalMetricsRepository.ts

- DbRow · type · L5-L5 — type DbRow = Record<string, unknown>;
- optionalId · function · L18-L21 — function optionalId(value: unknown): string | undefined
- bounded · function · L23-L26 — function bounded(value: unknown, max: number): string | undefined
- parseDimensions · function · L28-L58 — function parseDimensions(value: unknown): Record<string, string>
- WorkSessionOperationalMetricInput · interface · L60-L69 — interface WorkSessionOperationalMetricInput
- WorkSessionOperationalMetricsRepository · class · L75-L285 — class WorkSessionOperationalMetricsRepository
- constructor · method · L79-L88 — constructor( private readonly db: Database.Database, options?: { now?: () => number; retentionPerScope?: number }, )
- record · method · L90-L130 — record(input: WorkSessionOperationalMetricInput): WorkSessionOperationalMetric
- list · method · L132-L170 — list(options?: { sessionId?: string; workspaceId?: string; name?: string; limit?: number; since?: number; }): WorkSessionOperationalMetric[]
- summarize · method · L172-L199 — summarize(options?: { sessionId?: string; workspaceId?: string; since?: number }): Array<{ name: string; count: number; sum: number; min: number; max: number; }>
- prune · method · L201-L244 — prune(sessionId?: string, workspaceId?: string): number
- findByIdempotency · method · L246-L257 — private findByIdempotency( sessionId: string, idempotencyKey: string, ): WorkSessionOperationalMetric | undefined
- map · method · L259-L284 — private map(row: DbRow): WorkSessionOperationalMetric
