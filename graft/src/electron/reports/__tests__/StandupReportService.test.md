# src/electron/reports/__tests__/StandupReportService.test.ts

- MockStandupReportService · class · L22-L277 — class MockStandupReportService
- constructor · method · L25-L27 — constructor(deliverToChannel?: (report: StandupReport, config: Any) => Promise<void>)
- generateReport · method · L29-L62 — async generateReport(workspaceId: string, date: Date = new Date()): Promise<StandupReport>
- deliverReport · method · L64-L79 — async deliverReport( report: StandupReport, config: { channelType: string; channelId: string }, ): Promise<void>
- getLatest · method · L81-L93 — getLatest(workspaceId: string): StandupReport | undefined
- getByDate · method · L95-L102 — getByDate(workspaceId: string, reportDate: string): StandupReport | undefined
- list · method · L104-L126 — list(query: { workspaceId: string; limit?: number; startDate?: string; endDate?: string; }): StandupReport[]
- findById · method · L128-L131 — findById(id: string): StandupReport | undefined
- deleteOlderThan · method · L133-L147 — deleteOlderThan(workspaceId: string, daysToKeep: number): number
- formatReportMessage · method · L149-L189 — formatReportMessage(report: StandupReport, tasks: Map<string, Task>): string
- save · method · L191-L203 — private save(report: StandupReport): void
- getTasksByColumn · method · L205-L214 — private getTasksByColumn(workspaceId: string, column: string, updatedAfter?: number): Task[]
- getBlockedTasks · method · L216-L224 — private getBlockedTasks(workspaceId: string): Task[]
- buildSummary · method · L226-L244 — private buildSummary(completed: Task[], inProgress: Task[], blocked: Task[]): string
- formatDate · method · L246-L248 — private formatDate(date: Date): string
- mapRowToReport · method · L250-L262 — private mapRowToReport(row: Any): StandupReport
- mapRowToTask · method · L264-L276 — private mapRowToTask(row: Any): Task
- addTask · function · L280-L297 — function addTask( id: string, workspaceId: string, status: string, boardColumn: string, updatedAt?: number, )
