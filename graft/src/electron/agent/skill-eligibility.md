# src/electron/agent/skill-eligibility.ts

- sanitizeBinaryName · function · L26-L46 — function sanitizeBinaryName(bin: string): string | null
- SkillEligibilityChecker · class · L48-L317 — class SkillEligibilityChecker
- constructor · method · L52-L54 — constructor(config?: SkillsConfig)
- checkBinary · method · L59-L82 — async checkBinary(bin: string): Promise<boolean>
- checkAllBinaries · method · L87-L99 — async checkAllBinaries(bins: string[]): Promise<{ found: string[]; missing: string[] }>
- checkAnyBinary · method · L104-L118 — async checkAnyBinary(bins: string[]): Promise<{ found: string[]; missing: string[] }>
- checkEnvVar · method · L123-L126 — checkEnvVar(envVar: string): boolean
- checkAllEnvVars · method · L131-L144 — checkAllEnvVars(envVars: string[]): { found: string[]; missing: string[] }
- checkConfigPath · method · L149-L153 — checkConfigPath(_configPath: string): boolean
- checkAllConfigPaths · method · L158-L171 — checkAllConfigPaths(configPaths: string[]): { found: string[]; missing: string[] }
- checkOS · method · L176-L185 — checkOS(requiredOS: string[]): { matches: boolean; current: string; missing: string[] }
- isBlockedByList · method · L190-L204 — isBlockedByList(skillId: string): boolean
- checkEligibility · method · L209-L272 — async checkEligibility(skill: CustomSkill): Promise<SkillEligibility>
- buildStatusEntry · method · L277-L295 — async buildStatusEntry(skill: CustomSkill): Promise<SkillStatusEntry>
- buildStatusEntries · method · L300-L302 — async buildStatusEntries(skills: CustomSkill[]): Promise<SkillStatusEntry[]>
- clearCache · method · L307-L309 — clearCache(): void
- updateConfig · method · L314-L316 — updateConfig(config: SkillsConfig): void
- getSkillEligibilityChecker · function · L322-L329 — function getSkillEligibilityChecker(config?: SkillsConfig): SkillEligibilityChecker
