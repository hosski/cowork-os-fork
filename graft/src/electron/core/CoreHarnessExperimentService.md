# src/electron/core/CoreHarnessExperimentService.ts

- CoreHarnessExperimentService · class · L13-L138 — class CoreHarnessExperimentService
- constructor · method · L14-L18 — constructor( private readonly clusterRepo: CoreFailureClusterRepository, private readonly experimentRepo: CoreHarnessExperimentRepository, private readonly automationProfileRepo: AutomationProfileRepository, )
- listExperiments · method · L20-L22 — listExperiments(request: ListCoreExperimentsRequest = {})
- proposeExperimentsForCluster · method · L24-L56 — proposeExperimentsForCluster(clusterId: string): CoreHarnessExperiment[]
- buildProposal · method · L58-L137 — private buildProposal( cluster: CoreFailureCluster, profile: AutomationProfile, ): { changeKind: CoreExperimentChangeKind; proposal: Record<string, unknown>; summary: string; } | null
