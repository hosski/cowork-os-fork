# src/renderer/utils/task-selection-generation.ts

- TaskSelectionIdentity · interface · L1-L7 — interface TaskSelectionIdentity
- TaskSelectionGenerationToken · interface · L9-L12 — interface TaskSelectionGenerationToken
- normalizeTaskSelectionIdentity · function · L14-L24 — function normalizeTaskSelectionIdentity( identity: TaskSelectionIdentity, ): TaskSelectionIdentity
- taskSelectionIdentityEquals · function · L26-L38 — function taskSelectionIdentityEquals( left: TaskSelectionIdentity | null | undefined, right: TaskSelectionIdentity | null | undefined, ): boolean
- TaskSelectionGeneration · class · L41-L68 — class TaskSelectionGeneration
- switchTo · method · L45-L49 — switchTo(identity: TaskSelectionIdentity): TaskSelectionGenerationToken
- capture · method · L51-L56 — capture(): TaskSelectionGenerationToken
- getGeneration · method · L58-L60 — getGeneration(): number
- isCurrent · method · L62-L67 — isCurrent(token: TaskSelectionGenerationToken): boolean
- isTaskSelectionCurrent · function · L70-L80 — function isTaskSelectionCurrent( current: TaskSelectionGenerationToken | null | undefined, token: TaskSelectionGenerationToken | null | undefined, ): boolean
