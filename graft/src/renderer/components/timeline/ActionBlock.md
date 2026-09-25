# src/renderer/components/timeline/ActionBlock.tsx

- ActionBlockIconKind · type · L25-L34 — type ActionBlockIconKind = | "explore" | "search" | "command" | "write" | "web" | "verify" | "approval" | "generate" | "work";
- ActionBlockSummary · interface · L36-L51 — interface ActionBlockSummary
- BuildActionBlockSummaryOptions · interface · L53-L58 — interface BuildActionBlockSummaryOptions
- asObject · function · L60-L64 — function asObject(value: unknown): Record<string, unknown>
- getToolName · function · L66-L69 — function getToolName(event: TaskEvent): string
- getLegacyEventType · function · L71-L77 — function getLegacyEventType(event: TaskEvent): string
- isToolOutcomeEvent · function · L79-L87 — function isToolOutcomeEvent(event: TaskEvent): boolean
- isSuccessfulToolOutcome · function · L89-L122 — function isSuccessfulToolOutcome(event: TaskEvent): boolean
- collectStepActionText · function · L124-L137 — function collectStepActionText(event: TaskEvent): string
- isGenerativeStepText · function · L139-L143 — function isGenerativeStepText(text: string): boolean
- buildActionBlockSummary · function · L150-L457 — function buildActionBlockSummary( events: TaskEvent[], allEventsForLookup?: TaskEvent[], options?: BuildActionBlockSummaryOptions, ): ActionBlockSummary
- formatDurationMs · function · L459-L472 — function formatDurationMs(ms: number): string
- formatTokenCount · function · L474-L480 — function formatTokenCount(count: number): string
- normalizeHeaderLabel · function · L482-L487 — function normalizeHeaderLabel(value: string): string
- resolveSecondaryHeaderLabel · function · L490-L494 — function resolveSecondaryHeaderLabel(label: string | undefined, primaryLabel: string): string
- ActionBlockProps · interface · L496-L519 — interface ActionBlockProps
- ActionBlock · function · L550-L709 — function ActionBlock({ blockId, summary, iconKind, stepCount, toolCallCount, durationMs, outputTokens, isActive, expanded, onToggle, showConnectorAbove = false, showConnectorBelow = false, lastStepLabel, startedAt, replay = false, minimal = false, compactLabel, children, }: ActionBlockProps)
