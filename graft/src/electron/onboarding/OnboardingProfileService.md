# src/electron/onboarding/OnboardingProfileService.ts

- formatUpdatedStamp · function · L36-L38 — function formatUpdatedStamp(now: Date): string
- buildKitFrontmatter · function · L40-L52 — function buildKitFrontmatter(fileName: string, updated: string): string
- withKitFrontmatter · function · L54-L70 — function withKitFrontmatter(relPath: string, content: string, updated: string): string
- sectionBlock · function · L72-L79 — function sectionBlock(marker: string, heading: string, body: string): string
- upsertAutoSection · function · L81-L108 — function upsertAutoSection( existing: string, marker: string, heading: string, body: string, ): string
- ensureDefaultMarkdown · function · L110-L125 — function ensureDefaultMarkdown(fileName: string): string
- providerLabel · function · L127-L156 — function providerLabel(data: OnboardingProfileData): string
- isLegacyOnboardingFact · function · L158-L186 — function isLegacyOnboardingFact(fact: UserFact): boolean
- writeManagedKitDoc · function · L188-L215 — async function writeManagedKitDoc( workspacePath: string, relPath: string, marker: string, heading: string, body: string, now: Date, ): Promise<void>
- OnboardingProfileService · class · L217-L348 — class OnboardingProfileService
- applyGlobalProfile · method · L218-L236 — static applyGlobalProfile(data: OnboardingProfileData): void
- applyWorkspaceProfile · method · L238-L347 — static async applyWorkspaceProfile( workspaceId: string, workspacePath: string, data: OnboardingProfileData, ): Promise<void>
