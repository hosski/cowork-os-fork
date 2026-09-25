# src/electron/core/CoreTraceService.ts

- CoreTraceService · class · L11-L98 — class CoreTraceService
- constructor · method · L12-L15 — constructor( private readonly traceRepo: CoreTraceRepository, private readonly candidateRepo: CoreMemoryCandidateRepository, )
- startTrace · method · L17-L31 — startTrace( input: Omit<CoreTrace, "id" | "createdAt"> & { id?: string; createdAt?: number }, ): CoreTrace
- appendPhaseEvent · method · L33-L47 — appendPhaseEvent( traceId: string, phase: CoreTracePhase, eventType: string, summary: string, details?: Record<string, unknown>, ): CoreTraceEvent
- attachHeartbeatRun · method · L49-L51 — attachHeartbeatRun(traceId: string, heartbeatRunId: string): CoreTrace | undefined
- attachSubconsciousRun · method · L53-L55 — attachSubconsciousRun(traceId: string, subconsciousRunId: string): CoreTrace | undefined
- attachTask · method · L57-L59 — attachTask(traceId: string, taskId: string): CoreTrace | undefined
- completeTrace · method · L61-L71 — completeTrace( traceId: string, status: Exclude<CoreTraceStatus, "running">, summary?: string, ): CoreTrace | undefined
- failTrace · method · L73-L79 — failTrace(traceId: string, error: string): CoreTrace | undefined
- getTrace · method · L81-L89 — getTrace(id: string)
- list · method · L91-L93 — list(request: ListCoreTracesRequest = {})
- listByProfile · method · L95-L97 — listByProfile(profileId: string, limit?: number)
