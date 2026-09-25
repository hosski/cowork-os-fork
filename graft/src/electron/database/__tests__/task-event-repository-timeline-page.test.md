# src/electron/database/__tests__/task-event-repository-timeline-page.test.ts

- Any · type · L4-L4 — type Any = any;
- insertEvent · function · L15-L40 — function insertEvent(input: { id: string; taskId?: string; timestamp?: number; seq?: number; legacyType?: string; payload?: unknown; }): void
- skipIfSqliteUnavailable · function · L227-L234 — function skipIfSqliteUnavailable(): boolean
- insertSqliteEvent · function · L236-L271 — function insertSqliteEvent(input: { id: string; timestamp?: number; seq?: number }): void
- FakeTaskEventRow · type · L291-L308 — type FakeTaskEventRow = { id: string; task_id: string; timestamp: number; type: string; payload: string; payload_bytes: number; schema_version: number; event_id: string; seq: number; ts: number; status: string; step_id: string | null; group_id: string | null; actor: string; legacy_type: string; timeline_order?: number; };
- FakeTaskEventDb · class · L310-L402 — class FakeTaskEventDb
- prepare · method · L314-L356 — prepare(sql: string): { all: (...args: unknown[]) => FakeTaskEventRow[]; get: (...args: unknown[]) => FakeTaskEventRow | undefined; }
- selectRows · method · L358-L401 — private selectRows(sql: string, args: unknown[]): FakeTaskEventRow[]
- countPlaceholders · function · L360-L363 — countPlaceholders = (pattern: RegExp): number
