# src/renderer/utils/task-impact-metrics.ts

- MetricRegistryEntry · interface · L10-L14 — interface MetricRegistryEntry
- asObject · function · L76-L80 — function asObject(value: unknown): Record<string, unknown>
- isTaskMetricKind · function · L82-L84 — function isTaskMetricKind(value: unknown): value is TaskMetricKind
- normalizeMetric · function · L86-L122 — function normalizeMetric(value: unknown, fallbackEvent: TaskEvent): TaskImpactMetric | null
- eventOrder · function · L124-L126 — function eventOrder(event: TaskEvent, index: number): number
- metricFromCount · function · L128-L150 — function metricFromCount(args: { taskId: string; kind: TaskMetricKind; value: number; sourceEventIds: string[]; updatedAt: number; status: "active" | "final"; provenance?: TaskImpactMetric["provenance"]; }): TaskImpactMetric | null
- deriveTaskImpactMetrics · function · L156-L336 — function deriveTaskImpactMetrics(args: { events: TaskEvent[]; outputSummary?: TaskOutputSummary | null; taskStatus?: string; }): TaskImpactMetric[]
- selectTaskStatusMetricSlots · function · L338-L405 — function selectTaskStatusMetricSlots( metrics: TaskImpactMetric[], limit = 2, ): TaskStatusMetricSlot[]
- codingRank · function · L361-L366 — codingRank = (kind: TaskMetricKind)
- formatTaskImpactMetric · function · L407-L409 — function formatTaskImpactMetric(metric: TaskImpactMetric): string
