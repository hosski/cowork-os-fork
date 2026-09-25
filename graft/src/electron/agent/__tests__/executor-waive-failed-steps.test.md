# src/electron/agent/__tests__/executor-waive-failed-steps.test.ts

- getWaivableStepIds · function · L4-L24 — function getWaivableStepIds( steps: Array<{ id: string; description: string; status: string; kind?: string }>, opts?: { budgetConstrainedFailedStepIds?: string[]; blockingVerificationFailedStepIds?: string[]; nonBlockingVerificationFailedStepIds?: string[]; planCompletedEffectively?: boolean; }, ): string[]
