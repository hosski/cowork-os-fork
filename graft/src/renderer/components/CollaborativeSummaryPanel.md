# src/renderer/components/CollaborativeSummaryPanel.tsx

- truncate · function · L23-L26 — function truncate(str: string, maxLen: number): string
- TimelineEntry · type · L28-L41 — type TimelineEntry = | { kind: "strategic"; id: string; content: string; ts: number } | { kind: "spawn_header"; id: string; count: number; ts: number } | { kind: "spawn"; id: string; title: string; description: string; taskId: string | null; icon?: string; ts: number; } | { kind: "status"; id: string; label: string; ts: number } | { kind: "thought"; id: string; thought: AgentThought; ts: number };
- CollaborativeSummaryPanelProps · interface · L43-L54 — interface CollaborativeSummaryPanelProps
- CollaborativeSummaryPanel · function · L56-L542 — function CollaborativeSummaryPanel({ collaborativeRun, childTasks, childEvents = [], userPrompt, onSelectChildTask, onOpenChildAgentSidebar, onWrapUp, isWrappingUp, mainTaskCompleted = false, }: CollaborativeSummaryPanelProps)
- isErrorLike · function · L355-L356 — isErrorLike = (text: string)
