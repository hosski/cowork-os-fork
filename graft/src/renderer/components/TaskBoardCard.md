# src/renderer/components/TaskBoardCard.tsx

- Task · interface · L4-L15 — interface Task
- TaskBoardCardProps · interface · L17-L24 — interface TaskBoardCardProps
- formatTimeAgo · function · L34-L43 — function formatTimeAgo(timestamp: number): string
- formatDueDate · function · L45-L64 — function formatDueDate(timestamp: number): { text: string; isOverdue: boolean }
- TaskBoardCard · function · L66-L357 — function TaskBoardCard({ task, labels, agents, onPriorityChange, onSelect, isDragging, }: TaskBoardCardProps)
- handleDragStart · function · L81-L84 — handleDragStart = (e: React.DragEvent)
