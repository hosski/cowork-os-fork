# src/electron/agent/skills/organizer.ts

- FolderOrganizer · class · L15-L182 — class FolderOrganizer
- constructor · method · L16-L20 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- validatePath · method · L26-L35 — private validatePath(relativePath: string): string
- assertProfilePathAllowed · method · L37-L48 — private assertProfilePathAllowed( absolutePath: string, operation: "read" | "write" | "delete", ): void
- enforceProjectAccess · method · L50-L68 — private async enforceProjectAccess(absolutePath: string): Promise<void>
- organize · method · L70-L91 — async organize( relativePath: string, strategy: "by_type" | "by_date" | "custom", rules?: Any, ): Promise<number>
- organizeByType · method · L93-L144 — private async organizeByType(folderPath: string): Promise<number>
- organizeByDate · method · L146-L175 — private async organizeByDate(folderPath: string): Promise<number>
- organizeCustom · method · L177-L181 — private async organizeCustom(_folderPath: string, _rules: Any): Promise<number>
