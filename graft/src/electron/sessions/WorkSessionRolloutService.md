# src/electron/sessions/WorkSessionRolloutService.ts

- WorkSessionRolloutTarget · interface · L7-L10 — interface WorkSessionRolloutTarget
- WorkSessionRolloutUpdate · interface · L12-L17 — interface WorkSessionRolloutUpdate
- id · function · L19-L23 — function id(value: unknown, label: string): string
- clampPercent · function · L25-L28 — function clampPercent(value: unknown): number
- WorkSessionRolloutService · class · L31-L147 — class WorkSessionRolloutService
- constructor · method · L32-L74 — constructor( private readonly db: Database.Database, private readonly now: () => number = Date.now, )
- getConfig · method · L76-L88 — getConfig(): WorkSessionRolloutConfig
- updateConfig · method · L90-L119 — updateConfig(update: WorkSessionRolloutUpdate): WorkSessionRolloutConfig
- setLegacyReadRollback · method · L121-L123 — setLegacyReadRollback(enabled: boolean): WorkSessionRolloutConfig
- cohortBucket · method · L125-L132 — cohortBucket(target: WorkSessionRolloutTarget): number
- isVNext · method · L134-L138 — isVNext(target: WorkSessionRolloutTarget): boolean
- readMode · method · L140-L142 — readMode(target: WorkSessionRolloutTarget): WorkSessionReadMode
- choose · method · L144-L146 — choose<T>(target: WorkSessionRolloutTarget, vnext: () => T, legacy: () => T): T
