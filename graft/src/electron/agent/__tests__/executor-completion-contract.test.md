# src/electron/agent/__tests__/executor-completion-contract.test.ts

- HarnessOptions · type · L16-L24 — type HarnessOptions = { prompt: string; rawPrompt?: string; title?: string; lastOutput: string; createdFiles?: string[]; planStepDescription?: string; source?: "manual" | "cron" | "hook" | "api"; };
- createExecuteHarness · function · L26-L123 — function createExecuteHarness(options: HarnessOptions)
