# src/shared/timeline-events.ts

- TimelinePhase · type · L19-L25 — type TimelinePhase = | "intake" // Initial task intake, context loading | "plan" // Goal decomposition, planning | "explore" // Read-heavy codebase / web research | "execute" // Write / edit / shell / browser actions | "verify" // Tests, lint, validation | "complete";
- SemanticTimelineStatus · type · L31-L36 — type SemanticTimelineStatus = | "running" // Currently in progress (spinner) | "success" // Finished without error | "error" // Finished with error | "waiting" // Waiting for approval or user input | "blocked";
- CanonicalActionKind · type · L42-L61 — type CanonicalActionKind = | "file.read" | "file.write" | "file.edit" | "file.delete" | "search.code" | "search.web" | "shell.run" | "browser.action" | "approval.request" | "approval.resolve" | "artifact.create" | "memory.read" | "memory.write" | "agent.start" | "agent.stop" | "agent.message" | "task.complete" | "step.update" | "generic";
- TimelineEvidence · type · L67-L107 — type TimelineEvidence = | { type: "file"; path: string; lines?: string; operation?: "read" | "write" | "edit" | "delete"; } | { type: "command"; label: string; command: string; output?: string; } | { type: "query"; label: string; query: string; } | { type: "artifact"; label: string; path: string; mimeType?: string; } | { type: "approval"; label: string; risk?: "low" | "medium" | "high"; reason?: string; } | { type: "url"; label: string; url: string; } | { type: "runtime_log"; label: string; message: string; source?: string; };
- SummaryUiEvent · interface · L114-L130 — interface SummaryUiEvent
- ApprovalUiEvent · interface · L133-L146 — interface ApprovalUiEvent
- AgentUiEvent · interface · L149-L164 — interface AgentUiEvent
- UiTimelineEvent · type · L166-L166 — type UiTimelineEvent = SummaryUiEvent | ApprovalUiEvent | AgentUiEvent;
- NormalizerInputEvent · interface · L173-L188 — interface NormalizerInputEvent
- NormalizerOptions · interface · L191-L196 — interface NormalizerOptions
