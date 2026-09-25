# src/electron/briefing/briefing-scheduler.ts

- normalizeScheduleTime · function · L8-L15 — function normalizeScheduleTime(scheduleTime?: string): string
- toDailyCronExpr · function · L17-L21 — function toDailyCronExpr(scheduleTime?: string): string
- syncDailyBriefingCronJob · function · L23-L76 — async function syncDailyBriefingCronJob( cronService: CronService | null, workspaceId: string, config: BriefingConfig, ): Promise<void>
