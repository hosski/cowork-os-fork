# src/electron/memory/DailyLogSummarizer.ts

- estimateTokens · function · L25-L27 — function estimateTokens(text: string): number
- fingerprint · function · L29-L31 — function fingerprint(text: string): string
- DailyLogSummarizer · class · L33-L160 — class DailyLogSummarizer
- resolveSummaryPath · method · L34-L36 — static resolveSummaryPath(workspacePath: string, dayIso: string): string
- resolveSummaryDir · method · L38-L40 — static resolveSummaryDir(workspacePath: string): string
- writeSummary · method · L46-L69 — static async writeSummary( workspacePath: string, dayIso: string, summaryContent: string, writeGuard?: (candidatePath: string) => boolean, ): Promise<void>
- getRecentSummaryFragments · method · L75-L127 — static getRecentSummaryFragments( workspacePath: string, _taskPrompt: string, maxDays = 7, readGuard?: (candidatePath: string) => boolean, ): MemoryFragment[]
- countRecentSummaries · method · L133-L159 — static countRecentSummaries( workspacePath: string, days = 7, readGuard?: (candidatePath: string) => boolean, ): number
