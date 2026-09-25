# src/renderer/components/CliAgentFrame.tsx

- CliAgentFrameProps · interface · L21-L27 — interface CliAgentFrameProps
- FrameEvent · interface · L45-L51 — interface FrameEvent
- buildTaskCompletionLabel · function · L53-L64 — function buildTaskCompletionLabel(event: TaskEvent): string
- classifyEvent · function · L66-L316 — function classifyEvent(event: TaskEvent, agentName: string, task?: Task): FrameEvent | null
- sanitize · function · L72-L73 — sanitize = (value: unknown): string
- truncate · function · L318-L321 — function truncate(str: string, maxLen: number): string
- formatDuration · function · L323-L329 — function formatDuration(startMs: number, endMs: number): string
- EventIcon · function · L331-L354 — function EventIcon({ icon }: { icon: FrameEvent["icon"] })
- StatusChip · function · L356-L380 — function StatusChip({ status }: { status: Task["status"] })
- CliAgentFrame · function · L382-L491 — function CliAgentFrame({ task, events, agentType, defaultExpanded, onOpenAgent, }: CliAgentFrameProps)
