# src/electron/database/TaskLabelRepository.ts

- TaskLabelRepository · class · L15-L142 — class TaskLabelRepository
- constructor · method · L16-L16 — constructor(private db: Database.Database)
- create · method · L21-L39 — create(request: CreateTaskLabelRequest): TaskLabel
- findById · method · L44-L48 — findById(id: string): TaskLabel | undefined
- findByName · method · L53-L57 — findByName(workspaceId: string, name: string): TaskLabel | undefined
- list · method · L62-L68 — list(query: TaskLabelListQuery): TaskLabel[]
- update · method · L73-L98 — update(id: string, request: UpdateTaskLabelRequest): TaskLabel | undefined
- delete · method · L103-L107 — delete(id: string): boolean
- deleteByWorkspace · method · L112-L116 — deleteByWorkspace(workspaceId: string): number
- getByIds · method · L121-L128 — getByIds(ids: string[]): TaskLabel[]
- mapRowToLabel · method · L133-L141 — private mapRowToLabel(row: Any): TaskLabel
