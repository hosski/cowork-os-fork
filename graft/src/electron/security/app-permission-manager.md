# src/electron/security/app-permission-manager.ts

- AppAccessLevel · type · L17-L17 — type AppAccessLevel = "full_control" | "click_only" | "view_only" | "denied";
- AppPermission · interface · L19-L25 — interface AppPermission
- AppPermissionRequest · interface · L27-L32 — interface AppPermissionRequest
- levelRank · function · L54-L67 — function levelRank(level: AppAccessLevel): number
- accessLevelSatisfies · function · L70-L74 — function accessLevelSatisfies(granted: AppAccessLevel, needed: AppAccessLevel): boolean
- AppPermissionManager · class · L76-L218 — class AppPermissionManager extends EventEmitter
- constructor · method · L87-L90 — constructor(sessionId?: string)
- getSessionId · method · L93-L95 — getSessionId(): string
- permissionKey · method · L97-L101 — private permissionKey(appName: string, bundleId?: string): string
- isToolAllowed · method · L106-L124 — isToolAllowed(appName: string, toolName: string, bundleId?: string): boolean
- requestPermission · method · L131-L168 — async requestPermission( appName: string, bundleId: string | undefined, requestedLevel: AppAccessLevel, reason: string, ): Promise<AppAccessLevel>
- getPermission · method · L173-L175 — getPermission(appName: string, bundleId?: string): AppPermission | undefined
- getActivePermissions · method · L180-L182 — getActivePermissions(): AppPermission[]
- revoke · method · L187-L195 — revoke(appName: string, bundleId?: string): void
- revokeAll · method · L200-L207 — revokeAll(): void
- startSession · method · L212-L217 — startSession(sessionId?: string): string
