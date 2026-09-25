# src/renderer/components/CollaborativeAgentLines.tsx

- CollaborativeAgentLinesProps · interface · L17-L27 — interface CollaborativeAgentLinesProps
- AgentLine · interface · L29-L39 — interface AgentLine
- AgentLineStatusKind · type · L41-L41 — type AgentLineStatusKind = "completed" | "failed" | "warning" | "running" | "pending";
- isToolBatchSummaryEvent · function · L61-L66 — function isToolBatchSummaryEvent(event: TaskEvent): boolean
- isStageBoundaryEvent · function · L68-L84 — function isStageBoundaryEvent(event: TaskEvent): boolean
- formatStepLabel · function · L87-L100 — function formatStepLabel(type: string, desc: string): string
- humanize · function · L93-L93 — humanize = (s: string)
- getStepLabelFromEvent · function · L102-L128 — function getStepLabelFromEvent(event: TaskEvent): string
- sanitize · function · L106-L106 — sanitize = (v: unknown)
- getFailureLabel · function · L130-L136 — function getFailureLabel(taskId: string, childEvents: TaskEvent[]): string | null
- getTerminalTaskLabel · function · L138-L166 — function getTerminalTaskLabel(taskId: string, childEvents: TaskEvent[], task: Task): string | null
- getLatestStepLabel · function · L168-L204 — function getLatestStepLabel( taskId: string, childEvents: TaskEvent[], task: Task | null, isStreaming: boolean, ): string
- getAgentLineStatusKind · function · L206-L229 — function getAgentLineStatusKind( task: Task | null, status: string, isStreaming: boolean, ): AgentLineStatusKind
- getAgentLineStatusLabel · function · L231-L237 — function getAgentLineStatusLabel(kind: AgentLineStatusKind, task: Task | null): string
- getSummaryPart · function · L239-L241 — function getSummaryPart(count: number, label: string): string | null
- formatAgentSummary · function · L243-L253 — function formatAgentSummary(counts: Record<AgentLineStatusKind, number>): string
- CollaborativeAgentLines · function · L255-L523 — function CollaborativeAgentLines({ collaborativeRun, childTasks, childEvents = [], onOpenAgent, onShowAllAgents, onWrapUp, isWrappingUp, mainTaskCompleted = false, }: CollaborativeAgentLinesProps)
