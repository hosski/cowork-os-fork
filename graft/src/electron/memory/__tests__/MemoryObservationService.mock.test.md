# src/electron/memory/__tests__/MemoryObservationService.mock.test.ts

- MockStatement · type · L5-L9 — type MockStatement = { all: (...args: unknown[]) => unknown[]; get: (...args: unknown[]) => unknown; run: (...args: unknown[]) => { changes: number }; };
- createMockDb · function · L11-L22 — function createMockDb(prepare: (sql: string) => Partial<MockStatement>)
- prepare · method · L13-L20 — prepare(sql: string): MockStatement
- metadataRow · function · L24-L53 — function metadataRow(overrides: Record<string, unknown> = {}): Record<string, unknown>
