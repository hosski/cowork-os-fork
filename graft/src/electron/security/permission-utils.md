# src/electron/security/permission-utils.ts

- normalizePermissionPath · function · L4-L8 — function normalizePermissionPath(input: string): string
- normalizeCommandPrefix · function · L10-L14 — function normalizeCommandPrefix(input: string): string
- normalizeServerName · function · L16-L20 — function normalizeServerName(input: string): string
- normalizePermissionScope · function · L22-L56 — function normalizePermissionScope(scope: PermissionRuleScope): PermissionRuleScope
- permissionScopeFingerprint · function · L58-L80 — function permissionScopeFingerprint(scope: PermissionRuleScope): string
- permissionRuleFingerprint · function · L82-L84 — function permissionRuleFingerprint(rule: Pick<PermissionRule, "effect" | "scope">): string
- summarizePermissionScope · function · L86-L109 — function summarizePermissionScope(scope: PermissionRuleScope): string
- getPermissionScopeSpecificity · function · L111-L131 — function getPermissionScopeSpecificity(scope: PermissionRuleScope): number
