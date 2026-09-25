# src/electron/cron/schedule.ts

- computeNextRunAtMs · function · L12-L41 — function computeNextRunAtMs(schedule: CronSchedule, nowMs: number): number | undefined
- computeNextCronRun · function · L55-L107 — function computeNextCronRun(expr: string, now: Date, tz?: string): number | undefined
- CronDateParts · type · L109-L115 — type CronDateParts = { month: number; day: number; dow: number; hour: number; minute: number; };
- getCronDateParts · function · L128-L172 — function getCronDateParts(date: Date, timeZone?: string): CronDateParts | null
- parseField · function · L178-L240 — function parseField(field: string, min: number, max: number): Set<number> | null
- validateCronExpression · function · L246-L259 — function validateCronExpression(expr: string): boolean
