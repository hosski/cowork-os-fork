# src/electron/agent/qa/types.ts

- QARunStatus · type · L9-L19 — type QARunStatus = | "idle" | "starting_server" | "launching_browser" | "navigating" | "testing" | "analyzing" | "fixing" | "retesting" | "completed" | "failed";
- QASeverity · type · L21-L21 — type QASeverity = "critical" | "major" | "minor" | "info";
- QACheckType · type · L23-L30 — type QACheckType = | "visual_snapshot" | "console_errors" | "network_errors" | "interaction_test" | "responsive_check" | "accessibility_check" | "performance_check";
- QAIssue · interface · L32-L58 — interface QAIssue
- QACheck · interface · L60-L72 — interface QACheck
- QAInteractionStep · interface · L74-L86 — interface QAInteractionStep
- QARunConfig · interface · L88-L113 — interface QARunConfig
- QARun · interface · L115-L133 — interface QARun
- QAEvent · interface · L135-L146 — interface QAEvent
