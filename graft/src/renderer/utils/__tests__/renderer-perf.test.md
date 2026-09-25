# src/renderer/utils/__tests__/renderer-perf.test.ts

- TestWindow · type · L15-L18 — type TestWindow = Window & typeof globalThis & { __coworkRendererPerfState__?: unknown; };
- TestGlobal · type · L20-L22 — type TestGlobal = typeof globalThis & { window?: TestWindow; };
- RendererPerfTestState · type · L24-L27 — type RendererPerfTestState = { metrics: Map<string, { samples: number[] }>; counters: Map<string, { value: number; windowValue?: number }>; };
- ensureTestWindow · function · L29-L35 — function ensureTestWindow(): TestWindow
- makeEvent · function · L37-L49 — function makeEvent( overrides: Partial<TaskEvent> & Pick<TaskEvent, "id" | "taskId" | "type">, ): TaskEvent
