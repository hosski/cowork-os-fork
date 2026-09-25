# src/electron/agents/role-persona.ts

- RolePersonaOptions · interface · L9-L12 — interface RolePersonaOptions
- RolePersonaInput · interface · L14-L19 — interface RolePersonaInput
- clampSection · function · L21-L24 — function clampSection(text: string, maxChars: number): string
- sanitizePersonaText · function · L26-L29 — function sanitizePersonaText(text: string): string
- slugifyRoleName · function · L31-L38 — function slugifyRoleName(input: string): string
- normalizeRoleFolderName · function · L40-L50 — function normalizeRoleFolderName(input: string): string
- getRoleFolderCandidates · function · L52-L81 — function getRoleFolderCandidates(role: RolePersonaInput): string[]
- summarizeSoulFromDb · function · L83-L115 — function summarizeSoulFromDb(soul?: string | null): string | null
- add · function · L91-L95 — add = (label: string, value: unknown)
- buildRoleProfileFromFiles · function · L117-L145 — function buildRoleProfileFromFiles(role: RolePersonaInput, workspacePath?: string | null): string
- buildRolePersonaPrompt · function · L147-L167 — function buildRolePersonaPrompt( role: RolePersonaInput, workspacePath?: string | null, options: RolePersonaOptions = {}, ): string
