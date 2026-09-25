# src/electron/mission-control/MissionControlRepository.ts

- Any · type · L10-L10 — type Any = any;
- UpsertMissionControlItemInput · interface · L12-L30 — interface UpsertMissionControlItemInput
- ReplaceMissionControlEvidenceInput · interface · L32-L39 — interface ReplaceMissionControlEvidenceInput
- parseJson · function · L41-L48 — function parseJson<T>(value: string | null | undefined, fallback: T): T
- normalizeScopeId · function · L50-L52 — function normalizeScopeId(value?: string | null): string | undefined
- MissionControlRepository · class · L54-L285 — class MissionControlRepository
- constructor · method · L55-L55 — constructor(private readonly db: Database.Database)
- upsertItem · method · L57-L113 — upsertItem(input: UpsertMissionControlItemInput): MissionControlItem
- replaceEvidence · method · L115-L138 — replaceEvidence(itemId: string, evidence: ReplaceMissionControlEvidenceInput[]): void
- listItems · method · L140-L181 — listItems(request: MissionControlListRequest = {}): MissionControlItem[]
- listEvidence · method · L183-L192 — listEvidence(itemId: string): MissionControlItemEvidence[]
- deleteTaskItemsNotIn · method · L194-L233 — deleteTaskItemsNotIn(args: { taskIds: string[]; workspaceId?: string; companyId?: string; }): void
- getItemByFingerprint · method · L235-L246 — private getItemByFingerprint(fingerprint: string): MissionControlItem | undefined
- mapItem · method · L248-L271 — private mapItem(row: Any): MissionControlItem
- mapEvidence · method · L273-L284 — private mapEvidence(row: Any): MissionControlItemEvidence
