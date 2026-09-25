# src/renderer/utils/session-dashboard.ts

- SessionDashboardMetrics · interface · L3-L13 — interface SessionDashboardMetrics
- eventType · function · L15-L22 — function eventType(event: TaskEvent): string
- payload · function · L24-L28 — function payload(event: TaskEvent): Record<string, unknown>
- pathForEvent · function · L30-L33 — function pathForEvent(event: TaskEvent): string | undefined
- automationKey · function · L35-L41 — function automationKey(event: TaskEvent): string
- buildSessionDashboardMetrics · function · L43-L104 — function buildSessionDashboardMetrics( task: Task, progress: SessionProgressState, events: TaskEvent[], options: { artifactCount?: number; memberCount?: number } = {}, ): SessionDashboardMetrics
