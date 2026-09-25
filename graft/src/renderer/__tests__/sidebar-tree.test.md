# src/renderer/__tests__/sidebar-tree.test.ts

- TaskTreeNode · interface · L11-L15 — interface TaskTreeNode
- buildTaskTree · function · L17-L44 — function buildTaskTree(tasks: Task[]): TaskTreeNode[]
- buildNode · function · L32-L39 — function buildNode(task: Task, depth: number): TaskTreeNode
- flattenTree · function · L46-L55 — function flattenTree(nodes: TaskTreeNode[]): TaskTreeNode[]
- getAgentBadge · function · L57-L66 — function getAgentBadge(agentType?: AgentType): string
- getModelIndicator · function · L68-L75 — function getModelIndicator(task: Task): string
- createTask · function · L78-L89 — function createTask(overrides: Partial<Task> = {}): Task
