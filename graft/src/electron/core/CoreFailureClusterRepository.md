# src/electron/core/CoreFailureClusterRepository.ts

- Any · type · L5-L5 — type Any = any;
- CoreFailureClusterRepository · class · L7-L160 — class CoreFailureClusterRepository
- constructor · method · L8-L8 — constructor(private readonly db: Database.Database)
- create · method · L10-L39 — create(input: Omit<CoreFailureCluster, "id"> & { id?: string }): CoreFailureCluster
- findById · method · L41-L44 — findById(id: string): CoreFailureCluster | undefined
- findByFingerprint · method · L46-L61 — findByFingerprint( profileId: string, workspaceId: string | undefined, fingerprint: string, ): CoreFailureCluster | undefined
- list · method · L63-L88 — list(request: ListCoreFailureClustersRequest = {}): CoreFailureCluster[]
- update · method · L90-L121 — update(id: string, updates: Partial<CoreFailureCluster>): CoreFailureCluster | undefined
- addMember · method · L123-L131 — addMember(clusterId: string, failureRecordId: string, createdAt = Date.now()): void
- listMemberIds · method · L133-L140 — listMemberIds(clusterId: string): string[]
- mapRow · method · L142-L159 — private mapRow(row: Any): CoreFailureCluster
