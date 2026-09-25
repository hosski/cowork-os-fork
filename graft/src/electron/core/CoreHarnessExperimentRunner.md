# src/electron/core/CoreHarnessExperimentRunner.ts

- CoreHarnessExperimentRunner · class · L17-L184 — class CoreHarnessExperimentRunner
- constructor · method · L18-L26 — constructor( private readonly experimentRepo: CoreHarnessExperimentRepository, private readonly experimentService: CoreHarnessExperimentService, private readonly clusterRepo: CoreFailureClusterRepository, private readonly evalRepo: CoreEvalCaseRepository, private readonly automationProfileRepo: AutomationProfileRepository, private readonly gateService: CoreRegressionGateService, private readonly learnings: CoreLearningsService, )
- run · method · L28-L107 — run(request: RunCoreExperimentRequest): { experiment: CoreHarnessExperiment; run: CoreHarnessExperimentRun; gate: CoreRegressionGateResult; }
- review · method · L109-L129 — review(request: ReviewCoreExperimentRequest): CoreHarnessExperiment | undefined
- promote · method · L131-L168 — private promote(request: ReviewCoreExperimentRequest): CoreHarnessExperiment | undefined
- resolveExperiment · method · L170-L183 — private resolveExperiment(request: RunCoreExperimentRequest): CoreHarnessExperiment | undefined
