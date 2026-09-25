# src/electron/agent/orchestration/task-dag.ts

- TaskType · enum · L12-L18 — enum TaskType
- TaskStatus · enum · L20-L26 — enum TaskStatus
- TaskPriority · enum · L28-L33 — enum TaskPriority
- TaskNode · interface · L39-L64 — interface TaskNode
- TaskDAG · class · L77-L370 — class TaskDAG
- constructor · method · L104-L125 — constructor( id: string, title: string, description: string, teamId: string = "default", domain: string = "", createdBy: string = "", )
- addNode · method · L130-L135 — addNode(node: TaskNode): void
- addEdge · method · L140-L149 — addEdge(fromId: string, toId: string): void
- computeTiers · method · L161-L228 — computeTiers(): string[][]
- getCriticalPathDuration · method · L236-L255 — getCriticalPathDuration(): number
- toJSON · method · L260-L304 — toJSON()
- fromJSON · method · L309-L354 — static fromJSON(data: any): TaskDAG
- stringify · method · L359-L361 — stringify(): string
- parse · method · L366-L369 — static parse(jsonStr: string): TaskDAG
