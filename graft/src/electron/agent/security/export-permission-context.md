# src/electron/agent/security/export-permission-context.ts

- toDisplayPath · function · L11-L18 — function toDisplayPath(workspace: Workspace | undefined, absolutePath: string): string
- extractDomainFromUrl · function · L20-L27 — function extractDomainFromUrl(value: unknown): string | null
- extractUrlFromToolInput · function · L29-L37 — function extractUrlFromToolInput(toolInput: unknown): string | null
- extractPathFromToolInput · function · L39-L48 — function extractPathFromToolInput(toolInput: unknown): string | null
- buildSensitiveSourceRefForPath · function · L50-L64 — function buildSensitiveSourceRefForPath( workspace: Workspace | undefined, absolutePath: string, ): SensitiveSourceRef
- provenanceRecordToSensitiveSourceRef · function · L66-L78 — function provenanceRecordToSensitiveSourceRef( record: FileProvenanceRecord, workspace?: Workspace, ): SensitiveSourceRef
- buildUntrustedContentBanner · function · L80-L93 — function buildUntrustedContentBanner(source: SensitiveSourceRef): string
- isUntrustedExternalSource · function · L95-L99 — function isUntrustedExternalSource(source: SensitiveSourceRef | null | undefined): boolean
- buildExportTargetRef · function · L101-L125 — function buildExportTargetRef( toolName: string, toolInput: unknown, ): ExportTargetRef | undefined
- buildPermissionSecurityContext · function · L127-L158 — function buildPermissionSecurityContext(args: { workspace?: Workspace; toolName: string; toolInput: unknown; recentSensitiveSources?: SensitiveSourceRef[]; }): PermissionSecurityContext | undefined
