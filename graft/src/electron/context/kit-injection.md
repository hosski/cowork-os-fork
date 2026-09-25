# src/electron/context/kit-injection.ts

- InjectionContext · interface · L11-L18 — interface InjectionContext
- RenderedKitSection · interface · L20-L27 — interface RenderedKitSection
- HeartbeatTask · interface · L29-L34 — interface HeartbeatTask
- hasScope · function · L36-L38 — function hasScope(target: KitScope[], active: KitScope[]): boolean
- shouldIncludeContract · function · L40-L44 — function shouldIncludeContract(contract: KitContract, ctx: InjectionContext): boolean
- renderSection · function · L46-L58 — function renderSection( parsed: ParsedKitDoc, contract: KitContract, relPath: string, includeWarnings = false, ): string
- buildWorkspaceKitSections · function · L60-L91 — function buildWorkspaceKitSections(ctx: InjectionContext): RenderedKitSection[]
- buildOrderedKitPrompt · function · L93-L98 — function buildOrderedKitPrompt(ctx: InjectionContext): string
- buildRoleKitSection · function · L100-L121 — function buildRoleKitSection( workspacePath: string, roleDir: string, file: (typeof ROLE_KIT_FILES)[number], ): RenderedKitSection | null
- parseHeartbeatChecklist · function · L123-L148 — function parseHeartbeatChecklist(body: string): HeartbeatTask[]
- renderHeartbeatPrompt · function · L150-L162 — function renderHeartbeatPrompt(tasks: HeartbeatTask[]): string
