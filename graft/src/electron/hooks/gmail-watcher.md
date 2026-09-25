# src/electron/hooks/gmail-watcher.ts

- GmailWatcherStartResult · interface · L23-L26 — interface GmailWatcherStartResult
- isGogAvailable · function · L31-L33 — async function isGogAvailable(): Promise<boolean>
- resolveGmailRuntimeConfig · function · L38-L104 — function resolveGmailRuntimeConfig( config: HooksConfig, ): { ok: true; value: GmailHookRuntimeConfig } | { ok: false; error: string }
- buildWatchStartArgs · function · L109-L123 — function buildWatchStartArgs( cfg: Pick<GmailHookRuntimeConfig, "account" | "label" | "topic">, ): string[]
- buildWatchServeArgs · function · L128-L158 — function buildWatchServeArgs(cfg: GmailHookRuntimeConfig): string[]
- startGmailWatch · function · L163-L182 — async function startGmailWatch( cfg: Pick<GmailHookRuntimeConfig, "account" | "label" | "topic">, ): Promise<boolean>
- spawnGogServe · function · L187-L238 — function spawnGogServe(cfg: GmailHookRuntimeConfig): ChildProcess
- startGmailWatcher · function · L244-L306 — async function startGmailWatcher(config: HooksConfig): Promise<GmailWatcherStartResult>
- stopGmailWatcher · function · L311-L343 — async function stopGmailWatcher(): Promise<void>
- isGmailWatcherRunning · function · L348-L350 — function isGmailWatcherRunning(): boolean
- getGmailRuntimeConfig · function · L355-L357 — function getGmailRuntimeConfig(): GmailHookRuntimeConfig | null
