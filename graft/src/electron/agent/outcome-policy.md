# src/electron/agent/outcome-policy.ts

- OutcomeDecisionInput · interface · L10-L18 — interface OutcomeDecisionInput
- OutcomeDecision · interface · L20-L24 — interface OutcomeDecision
- hasTaskOutputs · function · L26-L28 — function hasTaskOutputs(summary?: TaskOutputSummary | null): boolean
- hasUsableSummary · function · L30-L32 — function hasUsableSummary(summary?: string | null, minChars = 80): boolean
- hasSubstantiveOutcomeEvidence · function · L34-L44 — function hasSubstantiveOutcomeEvidence(input: { resultSummary?: string | null; outputSummary?: TaskOutputSummary | null; bestKnownOutcome?: TaskBestKnownOutcome; }): boolean
- buildBestKnownOutcome · function · L46-L80 — function buildBestKnownOutcome(params: { resultSummary?: string; outputSummary?: TaskOutputSummary; completedStepIds?: string[]; blockingIssues?: string[]; terminalStatus?: TaskTerminalStatus; failureClass?: StepFailureClass; confidence?: "low" | "medium" | "high"; }): TaskBestKnownOutcome | undefined
- mergeBestKnownOutcome · function · L82-L115 — function mergeBestKnownOutcome( previous?: TaskBestKnownOutcome, incoming?: TaskBestKnownOutcome, ): TaskBestKnownOutcome | undefined
- isHardFailureWithoutRecovery · function · L117-L119 — function isHardFailureWithoutRecovery(failureClass?: StepFailureClass): boolean
- decideTaskOutcome · function · L121-L206 — function decideTaskOutcome(input: OutcomeDecisionInput): OutcomeDecision
- getTaskBestKnownOutcome · function · L208-L212 — function getTaskBestKnownOutcome( task?: Pick<Task, "bestKnownOutcome"> | null, ): TaskBestKnownOutcome | undefined
