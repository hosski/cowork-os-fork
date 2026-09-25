# src/renderer/components/mission-control/MCOpsTab.tsx

- MCOpsTabProps · interface · L11-L13 — interface MCOpsTabProps
- MCOpsTab · function · L25-L161 — function MCOpsTab({ data }: MCOpsTabProps)
- OpsHarnessProps · interface · L163-L170 — interface OpsHarnessProps
- OpsHarness · function · L172-L291 — function OpsHarness({ failures, clusters, evalCases, experiments, learnings, formatRelativeTime, }: OpsHarnessProps)
- OpsOverview · function · L294-L318 — function OpsOverview({ company, summary }: { company: any; summary: any })
- OpsAutomation · function · L320-L435 — function OpsAutomation({ outcomes, summary, formatRelativeTime, setDetailPanel, retryAutomationOutcome, }: { outcomes: any[]; summary: any; formatRelativeTime: (t?: number) => string; setDetailPanel: (panel: any) => void; retryAutomationOutcome: MissionControlData["retryAutomationOutcome"]; })
- retry · function · L337-L348 — retry = async (outcomeId: string)
- OpsOperators · function · L438-L476 — function OpsOperators({ operators, formatRelativeTime, }: { operators: any[]; formatRelativeTime: (t?: number) => string; })
- OpsOutputs · function · L479-L599 — function OpsOutputs({ outputs, reviewQueue, setSelectedIssueId, setDetailPanel, formatRelativeTime, selectedIssueId, }: any)
- OpsExecutionMap · function · L602-L649 — function OpsExecutionMap({ executionMap, setSelectedIssueId, setDetailPanel, selectedIssueId, }: any)
- OpsPlanner · function · L652-L981 — function OpsPlanner({ config, runs, running, saving, loading, selectedRunId, setSelectedRunId, selectedRun, runIssues, workspaces, agents, onConfigChange, onRun, setSelectedIssueId, setDetailPanel, formatRelativeTime, selectedIssueId, symphonyConfig, symphonyStatus, symphonySaving, symphonyRunning, onSymphonyConfigChange, onRunSymphony, }: any)
