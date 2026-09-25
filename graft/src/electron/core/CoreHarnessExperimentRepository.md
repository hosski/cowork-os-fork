# src/electron/core/CoreHarnessExperimentRepository.ts

- Any · type · L9-L9 — type Any = any;
- parseJson · function · L11-L18 — function parseJson<T>(value: string | null | undefined, fallback: T): T
- CoreHarnessExperimentRepository · class · L20-L234 — class CoreHarnessExperimentRepository
- constructor · method · L21-L21 — constructor(private readonly db: Database.Database)
- createExperiment · method · L23-L51 — createExperiment( input: Omit<CoreHarnessExperiment, "id"> & { id?: string }, ): CoreHarnessExperiment
- findExperimentById · method · L53-L58 — findExperimentById(id: string): CoreHarnessExperiment | undefined
- listExperiments · method · L60-L85 — listExperiments(request: ListCoreExperimentsRequest = {}): CoreHarnessExperiment[]
- updateExperiment · method · L87-L122 — updateExperiment( id: string, updates: Partial<CoreHarnessExperiment>, ): CoreHarnessExperiment | undefined
- createRun · method · L124-L150 — createRun( input: Omit<CoreHarnessExperimentRun, "id"> & { id?: string }, ): CoreHarnessExperimentRun
- updateRun · method · L152-L186 — updateRun( id: string, updates: Partial<CoreHarnessExperimentRun>, ): CoreHarnessExperimentRun | undefined
- findRunById · method · L188-L193 — findRunById(id: string): CoreHarnessExperimentRun | undefined
- listRunsForExperiment · method · L195-L202 — listRunsForExperiment(experimentId: string): CoreHarnessExperimentRun[]
- mapExperiment · method · L204-L218 — private mapExperiment(row: Any): CoreHarnessExperiment
- mapRun · method · L220-L233 — private mapRun(row: Any): CoreHarnessExperimentRun
