# src/electron/agent/step-intent-alignment.ts

- tokenize · function · L49-L56 — function tokenize(text: string): string[]
- scoreStepIntentOverlap · function · L59-L69 — function scoreStepIntentOverlap(stepDescription: string, taskText: string): number
- StepIntentScoreRow · interface · L71-L75 — interface StepIntentScoreRow
- scorePlanStepIntentAlignment · function · L77-L102 — function scorePlanStepIntentAlignment( plan: Plan, taskText: string, ): { rows: StepIntentScoreRow[]; lowAlignmentStepIds: string[]; minScore: number; }
