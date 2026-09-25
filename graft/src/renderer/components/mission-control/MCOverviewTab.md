# src/renderer/components/mission-control/MCOverviewTab.tsx

- MCOverviewTabProps · interface · L4-L6 — interface MCOverviewTabProps
- itemTone · function · L17-L22 — function itemTone(item: MissionControlItem): string
- BriefItem · function · L24-L55 — function BriefItem({ item, formatRelativeTime, onOpenTask, }: { item: MissionControlItem; formatRelativeTime: MissionControlData["formatRelativeTime"]; onOpenTask: (taskId: string) => void; })
- BriefSection · function · L57-L92 — function BriefSection({ title, items, empty, formatRelativeTime, onOpenTask, }: { title: string; items: MissionControlItem[]; empty: string; formatRelativeTime: MissionControlData["formatRelativeTime"]; onOpenTask: (taskId: string) => void; })
- formatRuntimeQueueValue · function · L94-L106 — function formatRuntimeQueueValue( state: MissionControlData["queueStatusState"], running: number, waiting: number, maxConcurrent: number, ): string
- RuntimeTaskList · function · L108-L162 — function RuntimeTaskList({ title, taskIds, tasks, formatRelativeTime, onOpenTask, }: { title: string; taskIds: string[]; tasks: MissionControlData["runtimeRunningTasks"]; formatRelativeTime: MissionControlData["formatRelativeTime"]; onOpenTask: (taskId: string) => void; })
- MCOverviewTab · function · L164-L384 — function MCOverviewTab({ data }: MCOverviewTabProps)
- openTask · function · L197-L197 — openTask = (taskId: string)
- focusRuntimeQueue · function · L205-L210 — focusRuntimeQueue = ()
