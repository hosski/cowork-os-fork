# src/electron/workspaces/WorkContextRepository.ts

- Any · type · L11-L11 — type Any = any;
- parseState · function · L15-L26 — function parseState(value: unknown): WorkContextState
- WorkContextRepository · class · L28-L259 — class WorkContextRepository
- constructor · method · L29-L29 — constructor(private readonly db: Database.Database)
- create · method · L31-L74 — create(input: { id?: string; workspaceId: string; name: string; status?: WorkContextStatus; taskId?: string; managedSessionId?: string; }): WorkContext
- findById · method · L76-L79 — findById(id: string): WorkContext | undefined
- findByTaskId · method · L81-L94 — findByTaskId(taskId: string): WorkContext | undefined
- findByManagedSessionId · method · L96-L109 — findByManagedSessionId(managedSessionId: string): WorkContext | undefined
- list · method · L111-L136 — list( options: { workspaceId?: string; includeArchived?: boolean; limit?: number } = {}, ): WorkContext[]
- update · method · L138-L179 — update( id: string, updates: { name?: string; status?: WorkContextStatus; activeTaskId?: string | null; activeManagedSessionId?: string | null; state?: Partial<Omit<WorkContextState, "schemaVersion">>; }, ): WorkContext | undefined
- addMember · method · L181-L223 — addMember(input: WorkContextMemberInput): WorkContext | undefined
- mapRow · method · L225-L258 — private mapRow(row: Any): WorkContext
- workContextMemberRole · function · L261-L263 — function workContextMemberRole(value: unknown): WorkContextMemberRole
