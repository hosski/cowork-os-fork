# src/renderer/components/timeline/ParallelGroupFeed.tsx

- ParallelGroupLane · type · L9-L9 — type ParallelGroupLane = ParallelGroupProjection["lanes"][number];
- ParallelGroupFeedProps · interface · L11-L20 — interface ParallelGroupFeedProps
- buildIndicatorForStatus · function · L22-L57 — function buildIndicatorForStatus(status: TimelineEventStatus): TimelineIndicatorSpec
- laneTone · function · L59-L64 — function laneTone(status: TimelineEventStatus): "neutral" | "active" | "success" | "error"
- isActiveStatus · function · L66-L68 — function isActiveStatus(status: TimelineEventStatus): boolean
- isActiveImageGenerationLane · function · L70-L72 — function isActiveImageGenerationLane(lane: ParallelGroupLane): boolean
- hasActiveImageGenerationLane · function · L74-L76 — function hasActiveImageGenerationLane(group: ParallelGroupProjection): boolean
- isBrowserToolGroup · function · L78-L80 — function isBrowserToolGroup(group: ParallelGroupProjection): boolean
- ImageGenerationFramePreview · function · L82-L94 — function ImageGenerationFramePreview()
- buildParallelGroupTitle · function · L96-L140 — function buildParallelGroupTitle(group: ParallelGroupProjection, isActive: boolean): string
- ParallelGroupFeed · function · L142-L226 — function ParallelGroupFeed({ group, timeLabel, formatTime: _formatTime, showConnectorAbove = false, showConnectorBelow = false, expanded = false, onToggle, replay = false, }: ParallelGroupFeedProps)
