# src/renderer/components/DispatchedAgentsPanel.tsx

- AgentRoleInfo · interface · L17-L22 — interface AgentRoleInfo
- DispatchedAgentsPanelProps · interface · L24-L30 — interface DispatchedAgentsPanelProps
- resolveRosterName · function · L35-L40 — function resolveRosterName(taskTitle: string, roleDisplayName?: string): string
- safeMarkdownUrlTransform · function · L44-L56 — function safeMarkdownUrlTransform(url: string): string
- StreamEventType · type · L71-L80 — type StreamEventType = | "assistant_message" | "step_started" | "progress_update" | "step_completed" | "step_failed" | "plan_created" | "task_completed" | "task_cancelled" | "error";
- StreamItem · interface · L89-L99 — interface StreamItem
- isCompactStreamEventType · function · L101-L103 — function isCompactStreamEventType(type: StreamEventType): boolean
- buildTaskCompletionStreamText · function · L105-L115 — function buildTaskCompletionStreamText(payload: TaskEvent["payload"]): string
- formatEventContent · function · L118-L156 — function formatEventContent( type: StreamEventType, payload: TaskEvent["payload"], task?: Task | null, ): string
- sanitize · function · L126-L127 — sanitize = (value: unknown): string
- StreamBubble · function · L158-L255 — function StreamBubble({ item, isCompactEvent }: { item: StreamItem; isCompactEvent: boolean })
- DispatchPhaseIndicator · function · L257-L293 — function DispatchPhaseIndicator({ childTasks }: { childTasks: Task[] })
- DispatchedAgentsPanel · function · L295-L529 — function DispatchedAgentsPanel({ parentTaskId: _parentTaskId, childTasks, childEvents, onSelectChildTask, onOpenChildAgentSidebar, }: DispatchedAgentsPanelProps)
- onScroll · function · L344-L348 — onScroll = ()
