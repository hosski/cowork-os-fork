# src/electron/agent/__tests__/conversation-snapshot.test.ts

- ConversationMessage · interface · L17-L20 — interface ConversationMessage
- SnapshotPayload · interface · L23-L30 — interface SnapshotPayload
- restoreFromSnapshot · function · L33-L72 — function restoreFromSnapshot(events: TaskEvent[]): { restored: boolean; conversationHistory: ConversationMessage[]; systemPrompt: string; }
- buildLegacySummary · function · L75-L161 — function buildLegacySummary( events: TaskEvent[], taskTitle: string, taskPrompt: string, ): ConversationMessage[]
- rebuildConversationFromEvents · function · L164-L183 — function rebuildConversationFromEvents( events: TaskEvent[], taskTitle: string, taskPrompt: string, ): { conversationHistory: ConversationMessage[]; restoredFromSnapshot: boolean }
- createMockEvent · function · L186-L194 — function createMockEvent(type: string, payload: Any, timestamp?: number): TaskEvent
- createSnapshotEvent · function · L197-L214 — function createSnapshotEvent( conversationHistory: ConversationMessage[], systemPrompt: string, timestamp?: number, ): TaskEvent
- findSnapshotsToDelete · function · L525-L530 — function findSnapshotsToDelete(snapshots: Array<{ id: string; timestamp: number }>): string[]
- serializeTracker · function · L576-L586 — function serializeTracker(state: { readFiles: Map<string, Any>; createdFiles: Map<string, string>; directories: Map<string, Any>; }): { readFiles: string[]; createdFiles: string[]; directories: string[] }
- buildPlanContextSummary · function · L636-L660 — function buildPlanContextSummary(planSummary: { description?: string; completedSteps?: string[]; failedSteps?: { description: string; error?: string }[]; }): string
- serializeWithSizeLimit · function · L701-L740 — function serializeWithSizeLimit(history: ConversationMessage[]): Any[]
