# src/electron/agent/__tests__/skill-registry.test.ts

- normalizePath · function · L15-L21 — function normalizePath(value: string): string
- parentDir · function · L23-L30 — function parentDir(value: string): string
- ensureDir · function · L32-L43 — function ensureDir(value: string): void
- movePath · function · L45-L77 — function movePath(source: string, destination: string): void
- pathExists · function · L79-L82 — function pathExists(value: string): boolean
- removeMockPath · function · L84-L104 — function removeMockPath(target: string): void
- listDirEntries · function · L106-L126 — function listDirEntries(dir: string): Array<{ name: string; isDirectory: boolean }>
- managedPath · function · L128-L130 — function managedPath(fileName: string): string
- createMockSkill · function · L375-L385 — function createMockSkill(overrides: Partial<CustomSkill> = {}): CustomSkill
- createMockRegistryEntry · function · L388-L397 — function createMockRegistryEntry(overrides: Partial<SkillRegistryEntry> = {}): SkillRegistryEntry
