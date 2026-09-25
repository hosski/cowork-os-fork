# src/renderer/components/TaskBoard.tsx

- Task · interface · L14-L25 — interface Task
- TaskBoardProps · interface · L27-L30 — interface TaskBoardProps
- TaskBoard · function · L40-L475 — function TaskBoard({ workspaceId, onTaskSelect }: TaskBoardProps)
- handleTaskMove · function · L146-L154 — handleTaskMove = async (taskId: string, column: ColumnType)
- handleTaskPriorityChange · function · L156-L163 — handleTaskPriorityChange = async (taskId: string, priority: number)
- handleTaskSelect · function · L165-L168 — handleTaskSelect = (task: Task)
- handleSetDueDate · function · L170-L181 — handleSetDueDate = async (dueDate: number | null)
- handleSetEstimate · function · L183-L198 — handleSetEstimate = async (minutes: number | null)
- handleAddLabel · function · L200-L212 — handleAddLabel = async (labelId: string)
- handleRemoveLabel · function · L214-L226 — handleRemoveLabel = async (labelId: string)
- handleAssignAgent · function · L228-L243 — handleAssignAgent = async (agentRoleId: string | null)
