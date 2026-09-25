# src/electron/utils/runtime-mode.ts

- getEnvFlag · function · L3-L7 — function getEnvFlag(name: string): boolean
- hasArgFlag · function · L9-L11 — function hasArgFlag(flag: string): boolean
- getArgValue · function · L13-L27 — function getArgValue(flag: string): string | undefined
- isHeadlessMode · function · L29-L31 — function isHeadlessMode(): boolean
- shouldEnableControlPlaneFromArgsOrEnv · function · L33-L35 — function shouldEnableControlPlaneFromArgsOrEnv(): boolean
- shouldPrintControlPlaneTokenFromArgsOrEnv · function · L37-L41 — function shouldPrintControlPlaneTokenFromArgsOrEnv(): boolean
- shouldImportEnvSettingsFromArgsOrEnv · function · L43-L45 — function shouldImportEnvSettingsFromArgsOrEnv(): boolean
- shouldUseManagedDeploymentModeFromEnv · function · L47-L49 — function shouldUseManagedDeploymentModeFromEnv(): boolean
- ControlPlaneBindContext · type · L51-L51 — type ControlPlaneBindContext = "host" | "container";
- getControlPlaneBindContextFromEnv · function · L53-L58 — function getControlPlaneBindContextFromEnv(): ControlPlaneBindContext
- shouldAllowInsecureControlPlanePublicBindFromEnv · function · L60-L62 — function shouldAllowInsecureControlPlanePublicBindFromEnv(): boolean
- shouldTrustControlPlaneProxyFromEnv · function · L64-L66 — function shouldTrustControlPlaneProxyFromEnv(): boolean
- getControlPlaneAllowedOriginsFromEnv · function · L68-L76 — function getControlPlaneAllowedOriginsFromEnv(): string[] | undefined
- EnvSettingsImportMode · type · L78-L78 — type EnvSettingsImportMode = "merge" | "overwrite";
- getEnvSettingsImportModeFromArgsOrEnv · function · L80-L90 — function getEnvSettingsImportModeFromArgsOrEnv(): EnvSettingsImportMode
