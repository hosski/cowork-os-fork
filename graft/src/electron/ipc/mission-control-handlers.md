# src/electron/ipc/mission-control-handlers.ts

- hasInvalidCoreMemoryCandidateScope · function · L88-L95 — function hasInvalidCoreMemoryCandidateScope(request: unknown): boolean
- Any · type · L96-L96 — type Any = any;
- getMainWindow · function · L101-L103 — function getMainWindow(): BrowserWindow | null
- checkRateLimit · function · L108-L112 — function checkRateLimit(channel: string): void
- requireString · function · L114-L120 — function requireString(value: unknown, fieldName: string): string
- optionalString · function · L122-L125 — function optionalString(value: unknown): string | undefined
- optionalNumber · function · L127-L129 — function optionalNumber(value: unknown): number | undefined
- optionalUuid · function · L131-L136 — function optionalUuid(value: unknown, fieldName: string): string | undefined
- getOutputContract · function · L138-L180 — function getOutputContract(metadata: unknown): CompanyOutputContract | null
- getCompletionNextStep · function · L182-L190 — function getCompletionNextStep(metadata: unknown): string | undefined
- getIssueOrigin · function · L192-L208 — function getIssueOrigin(metadata: unknown): { origin: "planner" | "inbox" | "manual"; label?: string; }
- getLatestLoopForOperator · function · L210-L215 — function getLatestLoopForOperator( outputs: CompanyOutputFeedItem[], operatorRoleId: string, ): CompanyOperatorStatus["activeLoop"]
- MissionControlDeps · interface · L220-L238 — interface MissionControlDeps
- setupMissionControlHandlers · function · L243-L1539 — function setupMissionControlHandlers(deps: MissionControlDeps): void
- requirePlannerService · function · L261-L267 — requirePlannerService = (): StrategicPlannerService
- requireSymphonyService · function · L268-L274 — requireSymphonyService = (): SymphonyService
- pushOutput · function · L969-L989 — pushOutput = (item: CompanyOutputFeedItem): void
