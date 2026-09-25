# src/electron/security/access-profile-resolver.ts

- EffectiveAccessProfile · interface · L28-L46 — interface EffectiveAccessProfile
- applyDefaultAccessProfile · function · L55-L60 — function applyDefaultAccessProfile( agentConfig: AgentConfig | undefined, settings: PermissionSettingsData, ): AgentConfig | undefined
- ResolveAccessProfileInput · interface · L62-L67 — interface ResolveAccessProfileInput
- getRequestedProfileId · function · L78-L97 — function getRequestedProfileId( task: ResolveAccessProfileInput["task"], settings: PermissionSettingsData, ): AccessProfileId
- getLegacyMode · function · L99-L102 — function getLegacyMode(task: ResolveAccessProfileInput["task"]): PermissionMode | undefined
- chooseAdminFallbackMode · function · L104-L116 — function chooseAdminFallbackMode( requested: PermissionMode, policies: AdminPolicies | undefined, ): PermissionMode
- profileForMode · function · L118-L133 — function profileForMode(mode: PermissionMode): AccessProfileDefinition
- unavailableProfileForId · function · L135-L153 — function unavailableProfileForId( profileId: AccessProfileId, status: "missing" | "invalid", ): AccessProfileDefinition
- resolveEffectiveAccessProfile · function · L155-L312 — function resolveEffectiveAccessProfile( input: ResolveAccessProfileInput = {}, ): EffectiveAccessProfile
- resolveProfilePath · function · L314-L320 — function resolveProfilePath(workspacePath: string, value: string): string
- applyAccessProfileToWorkspace · function · L322-L407 — function applyAccessProfileToWorkspace( workspace: Workspace, profile: EffectiveAccessProfile, ): Workspace
- legacyAccessProfileIdForSettings · function · L409-L418 — function legacyAccessProfileIdForSettings( settings: Pick<PermissionSettingsData, "defaultAccessProfileId" | "defaultPermissionAccess">, ): AccessProfileId
- profileSummary · function · L420-L425 — function profileSummary(profile: EffectiveAccessProfile): string
- getProfileForAgentConfig · function · L427-L439 — function getProfileForAgentConfig( agentConfig: AgentConfig | undefined, settings: PermissionSettingsData, workspace: Workspace, adminPolicies?: AdminPolicies, ): EffectiveAccessProfile
