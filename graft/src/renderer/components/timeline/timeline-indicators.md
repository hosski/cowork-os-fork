# src/renderer/components/timeline/timeline-indicators.ts

- TimelineIndicatorTone · type · L24-L24 — type TimelineIndicatorTone = "neutral" | "active" | "success" | "warning" | "error";
- TimelineIndicatorSpec · interface · L26-L31 — interface TimelineIndicatorSpec
- asObject · function · L33-L36 — function asObject(value: unknown): Record<string, unknown>
- resolveStage · function · L38-L42 — function resolveStage(payload: unknown): string
- resolveGroupLabel · function · L44-L48 — function resolveGroupLabel(payload: unknown): string
- isSkillReadToolEvent · function · L50-L75 — function isSkillReadToolEvent(event: TaskEvent): boolean
- resolveTimelineGroupId · function · L77-L86 — function resolveTimelineGroupId(event: TaskEvent): string | null
- shouldShowTimelineBranchStub · function · L88-L92 — function shouldShowTimelineBranchStub(event: TaskEvent): boolean
- ResolveTimelineIndicatorOptions · interface · L94-L97 — interface ResolveTimelineIndicatorOptions
- resolveTimelineIndicator · function · L99-L298 — function resolveTimelineIndicator( event: TaskEvent, options?: ResolveTimelineIndicatorOptions, ): TimelineIndicatorSpec
