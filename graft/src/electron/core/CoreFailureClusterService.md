# src/electron/core/CoreFailureClusterService.ts

- CoreFailureClusterService · class · L5-L69 — class CoreFailureClusterService
- constructor · method · L6-L9 — constructor( private readonly failureRepo: CoreFailureRecordRepository, private readonly clusterRepo: CoreFailureClusterRepository, )
- clusterFailures · method · L11-L23 — clusterFailures(profileId?: string, workspaceId?: string): CoreFailureCluster[]
- upsertClusterForRecord · method · L25-L62 — upsertClusterForRecord(record: CoreFailureRecord): CoreFailureCluster
- mergeRootCause · method · L64-L68 — private mergeRootCause(existing: string, incoming: string): string
