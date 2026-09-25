# src/electron/agent/skills/SkillEvalService.ts

- SkillEvalCase · interface · L7-L13 — interface SkillEvalCase
- SkillEvalCaseResult · interface · L15-L22 — interface SkillEvalCaseResult
- SkillEvalReport · interface · L24-L31 — interface SkillEvalReport
- normalize · function · L35-L37 — function normalize(text: string): string
- includesSignal · function · L39-L41 — function includesSignal(text: string, signal: string): boolean
- scoreCase · function · L43-L78 — function scoreCase(proposal: SkillProposalRecord, testCase: SkillEvalCase): SkillEvalCaseResult
- SkillEvalService · class · L80-L116 — class SkillEvalService
- constructor · method · L81-L81 — constructor(private readonly workspacePath: string)
- runProposalEval · method · L83-L102 — async runProposalEval( proposal: SkillProposalRecord, cases: SkillEvalCase[], ): Promise<SkillEvalReport>
- writeReport · method · L104-L115 — private async writeReport(report: SkillEvalReport): Promise<void>
