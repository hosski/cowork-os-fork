# src/electron/core/CoreRegressionGateRepository.ts

- Any · type · L5-L5 — type Any = any;
- parseJson · function · L7-L14 — function parseJson<T>(value: string | null | undefined, fallback: T): T
- CoreRegressionGateRepository · class · L16-L69 — class CoreRegressionGateRepository
- constructor · method · L17-L17 — constructor(private readonly db: Database.Database)
- create · method · L19-L41 — create(input: Omit<CoreRegressionGateResult, "id"> & { id?: string }): CoreRegressionGateResult
- findById · method · L43-L48 — findById(id: string): CoreRegressionGateResult | undefined
- findByExperimentRunId · method · L50-L55 — findByExperimentRunId(experimentRunId: string): CoreRegressionGateResult | undefined
- mapRow · method · L57-L68 — private mapRow(row: Any): CoreRegressionGateResult
