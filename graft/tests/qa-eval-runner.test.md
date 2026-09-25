# tests/qa-eval-runner.test.ts

- RunnerResult · type · L12-L18 — type RunnerResult = { code: number | null; signal: NodeJS.Signals | null; stdout: string; stderr: string; durationMs: number; };
- EvalCaseSeed · type · L20-L25 — type EvalCaseSeed = { id: string; name?: string; sourceTaskId?: string | null; prompt?: string; };
- HookServer · type · L27-L32 — type HookServer = { origin: string; server: http.Server; triggerHits: number; approvalHits: number; };
- createTempDb · function · L34-L38 — function createTempDb(): string
- sqlLiteral · function · L40-L42 — function sqlLiteral(value: string): string
- runSql · function · L44-L46 — function runSql(dbPath: string, sql: string): void
- querySql · function · L48-L52 — function querySql(dbPath: string, sql: string): string
- seedEvalDb · function · L54-L101 — function seedEvalDb( dbPath: string, options: { suiteName?: string; suiteId?: string; caseIds: string[]; cases?: EvalCaseSeed[] }, ): void
- runRunner · function · L103-L130 — function runRunner(args: string[], env: Record<string, string> = {}): Promise<RunnerResult>
- startHookServer · function · L132-L190 — async function startHookServer( dbPath: string, options: { hangTrigger?: boolean; resolveApproval?: boolean } = {}, ): Promise<HookServer>
- triggerHits · method · L183-L185 — get triggerHits()
- approvalHits · method · L186-L188 — get approvalHits()
- stopHookServer · function · L192-L195 — async function stopHookServer(server: http.Server): Promise<void>
