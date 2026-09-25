# src/electron/core/CoreMemoryScopeStateRepository.ts

- Any · type · L4-L4 — type Any = any;
- CoreMemoryScopeStateRepository · class · L6-L91 — class CoreMemoryScopeStateRepository
- constructor · method · L7-L7 — constructor(private readonly db: Database.Database)
- get · method · L9-L14 — get(scopeKind: CoreMemoryScopeKind, scopeRef: string): CoreMemoryScopeState | undefined
- upsert · method · L16-L39 — upsert(input: CoreMemoryScopeState): CoreMemoryScopeState
- touchTrace · method · L41-L52 — touchTrace(scopeKind: CoreMemoryScopeKind, scopeRef: string, at: number): CoreMemoryScopeState
- touchDistill · method · L54-L65 — touchDistill(scopeKind: CoreMemoryScopeKind, scopeRef: string, at: number): CoreMemoryScopeState
- touchPrune · method · L67-L78 — touchPrune(scopeKind: CoreMemoryScopeKind, scopeRef: string, at: number): CoreMemoryScopeState
- mapRow · method · L80-L90 — private mapRow(row: Any): CoreMemoryScopeState
