# src/electron/memory/DailyLogService.ts

- DailyLogSource · type · L14-L14 — type DailyLogSource = "user" | "assistant" | "system" | "tool";
- DailyLogCategory · type · L15-L15 — type DailyLogCategory = "task" | "feedback" | "decision" | "observation";
- DailyLogEntry · interface · L17-L24 — interface DailyLogEntry
- DailyLogService · class · L26-L109 — class DailyLogService
- resolveDailyLogPath · method · L27-L29 — static resolveDailyLogPath(workspacePath: string, dayIso: string): string
- resolveLogDir · method · L31-L33 — static resolveLogDir(workspacePath: string): string
- appendEntry · method · L35-L50 — static async appendEntry(workspacePath: string, entry: DailyLogEntry): Promise<void>
- readDay · method · L52-L70 — static async readDay( workspacePath: string, dayIso: string, readGuard?: (candidatePath: string) => boolean, ): Promise<string | null>
- listRecentDays · method · L76-L108 — static async listRecentDays( workspacePath: string, maxDays = 7, readGuard?: (candidatePath: string) => boolean, ): Promise<string[]>
