# src/electron/core/CoreLearningsRepository.ts

- Any · type · L5-L5 — type Any = any;
- CoreLearningsRepository · class · L7-L71 — class CoreLearningsRepository
- constructor · method · L8-L8 — constructor(private readonly db: Database.Database)
- append · method · L10-L33 — append(input: Omit<CoreLearningsEntry, "id"> & { id?: string }): CoreLearningsEntry
- list · method · L35-L70 — list(request: ListCoreLearningsRequest = {}): CoreLearningsEntry[]
