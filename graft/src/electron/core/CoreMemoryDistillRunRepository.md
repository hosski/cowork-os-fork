# src/electron/core/CoreMemoryDistillRunRepository.ts

- Any · type · L5-L5 — type Any = any;
- parseJson · function · L7-L14 — function parseJson<T>(value: string | null | undefined, fallback: T): T
- CoreMemoryDistillRunRepository · class · L16-L123 — class CoreMemoryDistillRunRepository
- constructor · method · L17-L17 — constructor(private readonly db: Database.Database)
- create · method · L19-L47 — create(input: Omit<CoreMemoryDistillRun, "id"> & { id?: string }): CoreMemoryDistillRun
- update · method · L49-L78 — update(id: string, updates: Partial<CoreMemoryDistillRun>): CoreMemoryDistillRun | undefined
- findById · method · L80-L85 — findById(id: string): CoreMemoryDistillRun | undefined
- list · method · L87-L104 — list(request: ListCoreMemoryDistillRunsRequest): CoreMemoryDistillRun[]
- mapRow · method · L106-L122 — private mapRow(row: Any): CoreMemoryDistillRun
