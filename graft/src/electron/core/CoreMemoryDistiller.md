# src/electron/core/CoreMemoryDistiller.ts

- CoreMemoryDistiller · class · L18-L252 — class CoreMemoryDistiller
- constructor · method · L19-L27 — constructor( private readonly traceRepo: CoreTraceRepository, private readonly candidateRepo: CoreMemoryCandidateRepository, private readonly distillRunRepo: CoreMemoryDistillRunRepository, private readonly scopeStateRepo: CoreMemoryScopeStateRepository, private readonly automationProfileRepo: AutomationProfileRepository, private readonly workspaceRepo: WorkspaceRepository, private readonly scopeResolver: CoreMemoryScopeResolver, )
- runHotPath · method · L29-L83 — async runHotPath(traceId: string): Promise<CoreMemoryDistillRun | undefined>
- runOffline · method · L85-L150 — async runOffline(request: RunCoreMemoryDistillNowRequest): Promise<CoreMemoryDistillRun>
- listRuns · method · L152-L154 — listRuns(profileId: string, workspaceId?: string, limit?: number)
- mergeCandidates · method · L156-L171 — private mergeCandidates(candidates: CoreMemoryCandidate[]): CoreMemoryCandidate[]
- writeCandidateMemory · method · L173-L215 — private async writeCandidateMemory(candidate: CoreMemoryCandidate)
- mapCandidateToMemoryType · method · L217-L234 — private mapCandidateToMemoryType(candidate: CoreMemoryCandidate)
- mapCandidateToCuratedKind · method · L236-L251 — private mapCandidateToCuratedKind(candidate: CoreMemoryCandidate)
