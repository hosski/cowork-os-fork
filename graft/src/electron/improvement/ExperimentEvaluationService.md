# src/electron/improvement/ExperimentEvaluationService.ts

- ExperimentEvaluationService · class · L15-L201 — class ExperimentEvaluationService
- constructor · method · L20-L24 — constructor(private readonly db: Database.Database)
- snapshot · method · L26-L28 — snapshot(windowDays: number): EvalBaselineMetrics
- evaluateVariant · method · L30-L140 — evaluateVariant(params: { variant: ImprovementVariantRun; baselineMetrics: EvalBaselineMetrics; evalWindowDays: number; replayCases: ImprovementReplayCase[]; maxPatchFiles?: number; }): ImprovementVariantEvaluation
- evaluateCampaign · method · L142-L200 — evaluateCampaign(params: { campaign: ImprovementCampaign; variants: ImprovementVariantRun[]; evalWindowDays: number; }): { verdict: ImprovementJudgeVerdict; outcomeMetrics: EvalBaselineMetrics; winner?: ImprovementVariantEvaluation; evaluations: ImprovementVariantEvaluation[]; }
- collectRegressionSignals · function · L203-L230 — function collectRegressionSignals( task: Task | undefined, verificationFailed: boolean, reviewFailed: boolean, reproductionEvidenceFound: boolean, verificationEvidenceFound: boolean, prReadinessEvidenceFound: boolean, ): string[]
- collectSafetySignals · function · L232-L250 — function collectSafetySignals( artifactSummary: ImprovementVariantArtifactSummary, diffSizePenalty: number, maxPatchFiles: number, ): string[]
- computeReplayPassRate · function · L252-L270 — function computeReplayPassRate( replayCases: ImprovementReplayCase[], task: Task | undefined, regressionSignals: string[], ): number
- estimateDiffSizePenalty · function · L272-L278 — function estimateDiffSizePenalty(task: Task | undefined): number
- extractArtifactSummary · function · L280-L336 — function extractArtifactSummary( task: Task | undefined, maxPatchFiles: number, ): ImprovementVariantArtifactSummary
