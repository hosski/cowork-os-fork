# src/electron/subconscious/SubconsciousMigrationService.ts

- Any · type · L19-L19 — type Any = any;
- hasTable · function · L21-L26 — function hasTable(db: Database.Database, name: string): boolean
- codeWorkspaceTarget · function · L28-L35 — function codeWorkspaceTarget(workspaceId: string): SubconsciousTargetRef
- SubconsciousMigrationService · class · L37-L159 — class SubconsciousMigrationService
- constructor · method · L43-L48 — constructor(private readonly db: Database.Database)
- runOnce · method · L50-L62 — runOnce(): void
- isComplete · method · L64-L67 — private isComplete(): boolean
- markComplete · method · L69-L74 — private markComplete(): void
- migrateCandidates · method · L76-L110 — private migrateCandidates(): void
- migrateCampaigns · method · L112-L158 — private migrateCampaigns(): void
