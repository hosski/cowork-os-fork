# src/electron/agent/__tests__/executor-parallel-batch.test.ts

- ParallelExecutorFixture · type · L6-L9 — type ParallelExecutorFixture = { executor: Any; events: Array<{ type: string; payload: Any }>; };
- createParallelExecutorFixture · function · L11-L91 — function createParallelExecutorFixture( overrides: Record<string, unknown> = {}, ): ParallelExecutorFixture
- makeToolUse · function · L93-L100 — function makeToolUse(id: string, name: string, input: Record<string, unknown>): Any
- makeParallelParams · function · L102-L119 — function makeParallelParams(responseContent: Any[]): Record<string, unknown>
