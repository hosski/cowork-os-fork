# src/electron/reports/DailyBriefingService.ts

- DailyBriefing · interface · L5-L18 — interface DailyBriefing
- DailyBriefingService · class · L24-L147 — class DailyBriefingService
- constructor · method · L25-L25 — constructor(private db: Database.Database)
- generate · method · L27-L121 — async generate(workspaceId: string): Promise<DailyBriefing>
- countTasks · method · L123-L133 — private countTasks(workspaceId: string, status: string, afterMs?: number): number
- countScheduledTasks · method · L135-L146 — private countScheduledTasks(workspaceId: string): number
