# src/electron/agent/orchestration/QueryOrchestrator.ts

- QueryContextSelection · interface · L10-L14 — interface QueryContextSelection
- QueryOrchestrator · class · L16-L74 — class QueryOrchestrator
- constructor · method · L17-L17 — constructor(private readonly features: MemoryFeaturesSettings)
- buildRetrievalQuery · method · L19-L25 — buildRetrievalQuery(taskPrompt: string, followUpMessage?: string): string
- selectContext · method · L27-L62 — async selectContext(params: { workspacePath: string; taskId: string; taskPrompt: string; followUpMessage?: string; readGuard?: TranscriptReadGuard; }): Promise<QueryContextSelection>
- buildExecutionPrompt · method · L64-L73 — async buildExecutionPrompt( params: BuildExecutionPromptParams & { transcriptContext?: string }, ): Promise<BuildExecutionPromptResult>
