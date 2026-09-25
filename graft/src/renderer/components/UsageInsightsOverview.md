# src/renderer/components/UsageInsightsOverview.tsx

- RequestDayRow · interface · L3-L10 — interface RequestDayRow
- OverviewProps · interface · L12-L17 — interface OverviewProps
- HeatmapMode · type · L19-L19 — type HeatmapMode = "daily" | "weekly" | "cumulative";
- formatBigNumber · function · L41-L46 — function formatBigNumber(n: number): string
- formatShortDuration · function · L48-L57 — function formatShortDuration(ms: number | null): string
- parseDateKey · function · L59-L64 — function parseDateKey(dateKey: string): Date | null
- toKey · function · L66-L70 — function toKey(d: Date): string
- HeatmapCell · interface · L72-L78 — interface HeatmapCell
- MonthLabel · interface · L80-L84 — interface MonthLabel
- tokenCount · function · L86-L88 — function tokenCount(row: RequestDayRow): number
- buildHeatmap · function · L90-L174 — function buildHeatmap( requestsByDay: RequestDayRow[], mode: HeatmapMode, ): { weeks: HeatmapCell[][]; max: number; months: MonthLabel[] }
- buildMonthLabels · function · L176-L192 — function buildMonthLabels(weeks: HeatmapCell[][]): MonthLabel[]
- computeStreaks · function · L194-L234 — function computeStreaks(requestsByDay: RequestDayRow[]): { activeDays: number; currentStreak: number; longestStreak: number; }
- pickBookComparison · function · L236-L254 — function pickBookComparison(totalTokens: number): string | null
- heatmapTitle · function · L256-L266 — function heatmapTitle(cell: HeatmapCell, mode: HeatmapMode): string
- UsageInsightsOverview · function · L268-L368 — function UsageInsightsOverview(props: OverviewProps)
- StatCard · function · L370-L387 — function StatCard({ label, value, valueClass, }: { label: string; value: string; valueClass?: string; })
