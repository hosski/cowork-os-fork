# src/electron/utils/graceful-shutdown.ts

- ShutdownStep · interface · L1-L6 — interface ShutdownStep
- ShutdownRunResult · interface · L8-L12 — interface ShutdownRunResult
- QuitEvent · interface · L14-L16 — interface QuitEvent
- QuitApp · interface · L18-L21 — interface QuitApp
- runShutdownSteps · function · L28-L68 — async function runShutdownSteps( steps: readonly ShutdownStep[], reportError: (step: string, error: unknown) => void, stepTimeoutMs = 10_000, ): Promise<ShutdownRunResult>
- installGracefulShutdown · function · L71-L92 — function installGracefulShutdown( app: QuitApp, steps: readonly ShutdownStep[], reportError: (step: string, error: unknown) => void, stepTimeoutMs = 10_000, ): void
