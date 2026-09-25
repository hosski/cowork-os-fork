# src/electron/improvement/ExperimentPromptBuilder.ts

- ImprovementPromptContext · interface · L13-L21 — interface ImprovementPromptContext
- loadImprovementProgram · function · L42-L97 — function loadImprovementProgram( workspace: Workspace, configuredPath?: string, ): ImprovementProgramConfig
- buildImprovementVariantPrompt · function · L99-L202 — function buildImprovementVariantPrompt( candidate: ImprovementCandidate, lane: ImprovementVariantLane, context: ImprovementPromptContext, ): string
- buildImprovementJudgeSummaryPrompt · function · L204-L229 — function buildImprovementJudgeSummaryPrompt(params: { candidate: ImprovementCandidate; variants: ImprovementVariantRun[]; replayCases: ImprovementReplayCase[]; holdoutEvidence: ImprovementEvidence[]; }): string
- pushEvidence · function · L231-L233 — function pushEvidence(lines: string[], evidence: ImprovementEvidence): void
- formatEvidence · function · L235-L240 — function formatEvidence(evidence: ImprovementEvidence): string[]
- inferDefaultMutablePaths · function · L242-L260 — function inferDefaultMutablePaths(instructions: string): string[]
- inferLikelyRelevantFiles · function · L262-L274 — function inferLikelyRelevantFiles(evidence: ImprovementEvidence[]): string[]
- inferLikelyVerificationCommands · function · L276-L293 — function inferLikelyVerificationCommands( evidence: ImprovementEvidence[], replayCases: ImprovementReplayCase[], ): string[]
