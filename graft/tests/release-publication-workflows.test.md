# tests/release-publication-workflows.test.ts

- Step · type · L7-L14 — type Step = { id?: string; run?: string; if?: string; env?: Record<string, string>; with?: Record<string, string>; "continue-on-error"?: boolean; };
- Job · type · L15-L15 — type Job = { steps: Step[]; needs?: string[]; if?: string; env: Record<string, string> };
- Workflow · type · L16-L19 — type Workflow = { jobs: Record<string, Job>; concurrency: { group: string; "cancel-in-progress": boolean }; };
- read · function · L20-L21 — read = (name: string)
- commands · function · L24-L24 — commands = (job: Job)
