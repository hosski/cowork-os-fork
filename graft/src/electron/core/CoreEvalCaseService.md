# src/electron/core/CoreEvalCaseService.ts

- CoreEvalCaseService · class · L10-L80 — class CoreEvalCaseService
- constructor · method · L11-L14 — constructor( private readonly clusterRepo: CoreFailureClusterRepository, private readonly evalRepo: CoreEvalCaseRepository, )
- syncEvalCasesForProfile · method · L16-L64 — syncEvalCasesForProfile(profileId: string, workspaceId?: string): CoreEvalCase[]
- listEvalCases · method · L66-L68 — listEvalCases(request: ListCoreEvalCasesRequest = {})
- reviewEvalCase · method · L70-L75 — reviewEvalCase(request: ReviewCoreEvalCaseRequest)
- shouldPromoteToEval · method · L77-L79 — shouldPromoteToEval(cluster: CoreFailureCluster): boolean
