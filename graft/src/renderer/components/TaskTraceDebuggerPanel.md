# src/renderer/components/TaskTraceDebuggerPanel.tsx

- TaskTraceDebuggerPanelProps · interface · L33-L36 — interface TaskTraceDebuggerPanelProps
- MarkdownInline · function · L63-L71 — function MarkdownInline({ text }: { text: string })
- MarkdownBlock · function · L73-L81 — function MarkdownBlock({ text }: { text: string })
- formatRelativeTime · function · L83-L92 — function formatRelativeTime(timestamp: number): string
- formatMetricNumber · function · L94-L98 — function formatMetricNumber(value: number): string
- formatRuntime · function · L100-L106 — function formatRuntime(ms: number): string
- shortenSessionId · function · L108-L110 — function shortenSessionId(sessionId: string): string
- rowToneClass · function · L112-L119 — function rowToneClass(row: TaskTraceRow): string
- isTaskActive · function · L121-L123 — function isTaskActive(status: string | undefined): boolean
- TaskTraceDebuggerPanel · function · L125-L646 — function TaskTraceDebuggerPanel({ workspaceId: initialWorkspaceId, onOpenTask, }: TaskTraceDebuggerPanelProps)
