# src/electron/everyday-agent/__tests__/EverydayAgentService.test.ts

- createPolicies · function · L5-L38 — createPolicies = ()
- Row · type · L53-L53 — type Row = Record<string, unknown>;
- FakeStatement · class · L55-L72 — class FakeStatement
- constructor · method · L56-L59 — constructor( private db: FakeDb, private sql: string, )
- get · method · L61-L63 — get(...args: unknown[])
- all · method · L65-L67 — all(...args: unknown[])
- run · method · L69-L71 — run(...args: unknown[])
- FakeDb · class · L74-L426 — class FakeDb
- exec · method · L103-L103 — exec()
- prepare · method · L105-L107 — prepare(sql: string)
- transaction · method · L109-L111 — transaction<T extends (...args: unknown[]) => unknown>(fn: T): T
- get · method · L113-L188 — get(sql: string, args: unknown[]): Row | undefined
- all · method · L190-L216 — all(sql: string, args: unknown[]): Row[]
- run · method · L218-L416 — run(sql: string, args: unknown[])
- deleteRows · method · L418-L425 — private deleteRows(rows: Row[], predicate: (row: Row) => boolean): { changes: number }
- normalizeSql · function · L428-L430 — function normalizeSql(sql: string): string
