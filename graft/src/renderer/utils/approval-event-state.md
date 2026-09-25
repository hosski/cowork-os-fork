# src/renderer/utils/approval-event-state.ts

- asObject · function · L4-L7 — function asObject(value: unknown): Record<string, unknown>
- getApprovalCorrelationId · function · L9-L19 — function getApprovalCorrelationId(event: TaskEvent): string
- isApprovalRequestResolvedAtEmission · function · L21-L34 — function isApprovalRequestResolvedAtEmission(event: TaskEvent): boolean
- markSessionAutoResolvingApproval · function · L41-L59 — function markSessionAutoResolvingApproval( event: TaskEvent, sessionAutoApproveAll: boolean, ): TaskEvent
- OrderedApprovalEvent · interface · L61-L64 — interface OrderedApprovalEvent
- compareApprovalEventOrder · function · L66-L72 — function compareApprovalEventOrder(a: OrderedApprovalEvent, b: OrderedApprovalEvent): number
- approvalKey · function · L74-L76 — function approvalKey(event: TaskEvent, approvalId: string): string
- ApprovalEventState · interface · L78-L81 — interface ApprovalEventState
- deriveApprovalEventState · function · L88-L150 — function deriveApprovalEventState(events: TaskEvent[]): ApprovalEventState
