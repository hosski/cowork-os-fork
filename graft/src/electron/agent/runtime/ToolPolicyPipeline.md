# src/electron/agent/runtime/ToolPolicyPipeline.ts

- ToolPolicyPipelineOptions · interface · L22-L64 — interface ToolPolicyPipelineOptions
- ToolPolicyPipelineResult · interface · L66-L72 — interface ToolPolicyPipelineResult
- toStageDecision · function · L74-L85 — function toStageDecision( decision: "allow" | "deny" | "defer" | "require_approval" | "skip" | "ask" | "pass", ): "allow" | "deny" | "defer" | "require_approval" | "skip"
- evaluateToolPolicyPipeline · function · L87-L365 — async function evaluateToolPolicyPipeline( opts: ToolPolicyPipelineOptions, ): Promise<ToolPolicyPipelineResult>
