# src/shared/google-workspace.ts

- hasScope · function · L44-L46 — function hasScope(scopes: string[] | undefined, scope: string): boolean
- normalizeGoogleWorkspaceScopes · function · L48-L58 — function normalizeGoogleWorkspaceScopes(scopes: string[] | undefined): string[]
- mergeGoogleWorkspaceScopes · function · L60-L62 — function mergeGoogleWorkspaceScopes(scopes: string[] | undefined): string[]
- getMissingGoogleWorkspaceScopes · function · L64-L68 — function getMissingGoogleWorkspaceScopes(scopes: string[] | undefined): string[]
- mergeGoogleScopesForMode · function · L70-L76 — function mergeGoogleScopesForMode( scopes: string[] | undefined, mode: GoogleWorkspaceConnectionMode | undefined, ): string[]
- getMissingGoogleScopesForMode · function · L78-L86 — function getMissingGoogleScopesForMode( scopes: string[] | undefined, mode: GoogleWorkspaceConnectionMode | undefined, ): string[]
- inferGoogleWorkspaceConnectionMode · function · L88-L99 — function inferGoogleWorkspaceConnectionMode( explicitMode: GoogleWorkspaceConnectionMode | undefined, scopes: string[] | undefined, ): GoogleWorkspaceConnectionMode
- hasGoogleWorkspaceScopeCoverage · function · L101-L106 — function hasGoogleWorkspaceScopeCoverage( scopes: string[] | undefined, mode: GoogleWorkspaceConnectionMode | undefined, ): boolean
- normalizeGoogleAccountEmail · function · L108-L111 — function normalizeGoogleAccountEmail(email: string | undefined): string | undefined
- getActiveGoogleWorkspaceAccount · function · L113-L129 — function getActiveGoogleWorkspaceAccount( settings: GoogleWorkspaceSettingsData, requestedEmail?: string, ): GoogleWorkspaceAccount | undefined
- getGoogleWorkspaceSettingsForAccount · function · L131-L147 — function getGoogleWorkspaceSettingsForAccount( settings: GoogleWorkspaceSettingsData, requestedEmail?: string, ): GoogleWorkspaceSettingsData
- hasGoogleWorkspaceTokens · function · L149-L155 — function hasGoogleWorkspaceTokens(settings: GoogleWorkspaceSettingsData): boolean
- upsertGoogleWorkspaceAccount · function · L157-L194 — function upsertGoogleWorkspaceAccount( settings: GoogleWorkspaceSettingsData, account: GoogleWorkspaceAccount, ): GoogleWorkspaceSettingsData
- removeGoogleWorkspaceAccount · function · L196-L217 — function removeGoogleWorkspaceAccount( settings: GoogleWorkspaceSettingsData, email: string, ): GoogleWorkspaceSettingsData
