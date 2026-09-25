# src/electron/agent/runtime/ToolPolicyTrace.ts

- ToolPolicyTraceBuilder · class · L8-L35 — class ToolPolicyTraceBuilder
- constructor · method · L11-L11 — constructor(private readonly toolName: string)
- add · method · L13-L26 — add( stage: ToolPolicyStage, decision: ToolPolicyStageDecision, reason?: string, metadata?: Record<string, unknown>, ): void
- build · method · L28-L34 — build(finalDecision: Exclude<ToolPolicyStageDecision, "skip">): ToolPolicyTrace
