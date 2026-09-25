# src/electron/database/__tests__/TaskLabelRepository.test.ts

- MockTaskLabelRepository · class · L27-L115 — class MockTaskLabelRepository
- create · method · L28-L49 — create(request: CreateTaskLabelRequest): TaskLabel
- findById · method · L51-L54 — findById(id: string): TaskLabel | undefined
- findByName · method · L56-L63 — findByName(workspaceId: string, name: string): TaskLabel | undefined
- list · method · L65-L73 — list(query: TaskLabelListQuery): TaskLabel[]
- update · method · L75-L84 — update(id: string, request: UpdateTaskLabelRequest): TaskLabel | undefined
- delete · method · L86-L88 — delete(id: string): boolean
- deleteByWorkspace · method · L90-L103 — deleteByWorkspace(workspaceId: string): number
- getByIds · method · L105-L114 — getByIds(ids: string[]): TaskLabel[]
