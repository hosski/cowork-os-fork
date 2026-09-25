# src/electron/workspaces/WorkContextService.ts

- normalizeName · function · L14-L18 — function normalizeName(value: unknown): string
- normalizeId · function · L20-L24 — function normalizeId(value: unknown, label: string): string
- WorkContextService · class · L26-L183 — class WorkContextService
- constructor · method · L30-L33 — constructor(private readonly db: Database.Database)
- list · method · L35-L40 — list( options: { workspaceId?: string; includeArchived?: boolean; limit?: number } = {}, ): WorkContext[]
- get · method · L42-L44 — get(contextId: string): WorkContext | undefined
- create · method · L46-L67 — create(input: WorkContextCreateInput): WorkContext
- update · method · L69-L89 — update(input: WorkContextUpdateInput): WorkContext | undefined
- addMember · method · L91-L104 — addMember(input: WorkContextMemberInput): WorkContext | undefined
- ensureForTask · method · L106-L116 — ensureForTask(task: Pick<Task, "id" | "title" | "workspaceId">): WorkContext
- ensureForManagedSession · method · L118-L134 — ensureForManagedSession( session: Pick<ManagedSession, "id" | "title" | "workspaceId">, ): WorkContext
- attachForkedTask · method · L136-L147 — attachForkedTask( task: Pick<Task, "id" | "title" | "workspaceId">, sourceTaskId?: string, ): WorkContext
- assertWorkspace · method · L149-L152 — private assertWorkspace(workspaceId: string): void
- assertMemberExists · method · L154-L165 — private assertMemberExists(taskId?: string, managedSessionId?: string): void
- assertTaskWorkspace · method · L167-L173 — private assertTaskWorkspace(workspaceId: string, taskId: string): void
- assertManagedSessionWorkspace · method · L175-L182 — private assertManagedSessionWorkspace(workspaceId: string, managedSessionId: string): void
