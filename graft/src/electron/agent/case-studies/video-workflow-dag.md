# src/electron/agent/case-studies/video-workflow-dag.ts

- createTaskNode · function · L20-L46 — function createTaskNode( id: string, title: string, description: string, role: string, estimatedHours: number, successCriteria: string ): TaskNode
- buildVideoWorkflowDAG · function · L57-L243 — function buildVideoWorkflowDAG(): TaskDAG
- analyzeVideoWorkflow · function · L248-L275 — function analyzeVideoWorkflow(dag: TaskDAG)
- serializeVideoWorkflowDAG · function · L280-L303 — function serializeVideoWorkflowDAG(dag: TaskDAG): string
