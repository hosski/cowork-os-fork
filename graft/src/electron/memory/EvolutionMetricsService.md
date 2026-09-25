# src/electron/memory/EvolutionMetricsService.ts

- EvolutionSnapshot · interface · L25-L36 — interface EvolutionSnapshot
- EvolutionMetric · interface · L38-L51 — interface EvolutionMetric
- EvolutionMetricsService · class · L59-L384 — class EvolutionMetricsService
- computeSnapshot · method · L65-L105 — static async computeSnapshot(workspaceId: string): Promise<EvolutionSnapshot>
- formatForBriefing · method · L110-L125 — static formatForBriefing(snapshot: EvolutionSnapshot): string
- computeCorrectionRate · method · L133-L182 — private static computeCorrectionRate(workspaceId: string): EvolutionMetric
- computeAdaptationVelocity · method · L187-L215 — private static computeAdaptationVelocity(): EvolutionMetric
- computeKnowledgeGrowth · method · L220-L243 — private static async computeKnowledgeGrowth(workspaceId: string): Promise<EvolutionMetric>
- computeTaskSuccessRate · method · L248-L289 — private static computeTaskSuccessRate(workspaceId: string): EvolutionMetric
- computeStyleAlignment · method · L296-L345 — private static computeStyleAlignment(): EvolutionMetric
- computeOverallScore · method · L352-L383 — private static computeOverallScore(metrics: EvolutionMetric[]): number
