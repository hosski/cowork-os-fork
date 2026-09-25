# src/electron/database/__tests__/task-event-repository-replay.test.ts

- ReplayRow · type · L5-L20 — type ReplayRow = { id: string; task_id: string; timestamp: number; type: string; payload: string; schema_version: number; event_id: string; seq: number; ts: number; status: string; step_id: null; group_id: null; actor: string; legacy_type: string; };
- FakeReplayDb · class · L22-L77 — class FakeReplayDb
- prepare · method · L26-L41 — prepare(sql: string): { all: (...args: unknown[]) => unknown[]; get: (...args: unknown[]) => unknown; }
- selectRows · method · L43-L76 — private selectRows(sql: string, args: unknown[]): ReplayRow[]
- insert · function · L88-L111 — function insert( id: string, timestamp: number, legacyType: string, payload = {}, seq = timestamp, ): void
