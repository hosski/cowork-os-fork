# src/electron/agent/orchestration/tier-computation.ts

- QoSClass · type · L18-L18 — type QoSClass = "userInteractive" | "utility" | "background" | "default";
- CoreHint · type · L19-L19 — type CoreHint = "p-core" | "e-core" | "balanced" | "auto";
- QoSHint · interface · L25-L30 — interface QoSHint
- TierMetadata · interface · L35-L42 — interface TierMetadata
- computeTierMetadata · function · L69-L157 — function computeTierMetadata(dag: TaskDAG): TierMetadata[]
- estimateDAGSpeedup · function · L170-L186 — function estimateDAGSpeedup(dag: TaskDAG): number
- summarizeParallelizationStrategy · function · L195-L218 — function summarizeParallelizationStrategy(dag: TaskDAG, metadata: TierMetadata[]): string
