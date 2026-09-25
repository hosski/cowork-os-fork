# src/electron/database/__tests__/repositories-agent.test.ts

- MockTaskRepository · class · L24-L189 — class MockTaskRepository
- create · method · L60-L84 — create(task: Omit<Task, "id" | "createdAt" | "updatedAt">): Task
- update · method · L86-L121 — update(id: string, updates: Partial<Task>): void
- findById · method · L123-L127 — findById(id: string): Task | undefined
- togglePin · method · L129-L137 — togglePin(id: string): Task | undefined
- findByParentId · method · L139-L149 — findByParentId(parentTaskId: string): Task[]
- mapStoredToTask · method · L151-L188 — private mapStoredToTask(stored: Any): Task
