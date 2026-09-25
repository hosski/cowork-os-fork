# src/renderer/components/timeline/__tests__/action-block-summary.test.ts

- toolEvent · function · L8-L17 — function toolEvent(id: string, tool: string, timestamp: number): TaskEvent
- toolOutcomeEvent · function · L19-L30 — function toolOutcomeEvent( id: string, type: "tool_result" | "tool_error", tool: string, timestamp: number, result: Record<string, unknown> = { success: true }, ): TaskEvent
- event · function · L32-L46 — function event( id: string, type: string, timestamp: number, payload: Record<string, unknown> = {}, ): TaskEvent
