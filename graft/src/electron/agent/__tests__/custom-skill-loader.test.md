# src/electron/agent/__tests__/custom-skill-loader.test.ts

- getFilename · function · L13-L13 — getFilename = (p: string): string
- normalizePath · function · L14-L16 — function normalizePath(p: string): string
- mockExists · function · L18-L27 — function mockExists(p: string): boolean
- mockRead · function · L29-L35 — function mockRead(p: string): string
- mockReaddir · function · L37-L41 — function mockReaddir(): string[]
- mockStat · function · L43-L48 — function mockStat(p: string): { isDirectory: () => boolean }
- createTestSkill · function · L75-L96 — function createTestSkill(overrides: Partial<CustomSkill> = {}): CustomSkill
