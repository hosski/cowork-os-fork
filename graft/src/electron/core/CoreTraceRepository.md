# src/electron/core/CoreTraceRepository.ts

- Any · type · L5-L5 — type Any = any;
- parseJson · function · L7-L14 — function parseJson<T>(value: string | null | undefined, fallback: T): T
- CoreTraceRepository · class · L16-L216 — class CoreTraceRepository
- constructor · method · L17-L17 — constructor(private readonly db: Database.Database)
- create · method · L19-L52 — create( input: Omit<CoreTrace, "id" | "createdAt"> & { id?: string; createdAt?: number }, ): CoreTrace
- update · method · L54-L85 — update(id: string, updates: Partial<CoreTrace>): CoreTrace | undefined
- findById · method · L87-L90 — findById(id: string): CoreTrace | undefined
- list · method · L92-L121 — list(request: ListCoreTracesRequest = {}): CoreTrace[]
- listByProfile · method · L123-L125 — listByProfile(profileId: string, limit = 50): CoreTrace[]
- findOpenTrace · method · L127-L154 — findOpenTrace(params: { profileId: string; sourceSurface: CoreTrace["sourceSurface"]; targetKey?: string; heartbeatRunId?: string; subconsciousRunId?: string; }): CoreTrace | undefined
- appendEvent · method · L156-L180 — appendEvent( input: Omit<CoreTraceEvent, "id" | "createdAt"> & { id?: string; createdAt?: number }, ): CoreTraceEvent
- listEvents · method · L182-L195 — listEvents(traceId: string): CoreTraceEvent[]
- mapTrace · method · L197-L215 — private mapTrace(row: Any): CoreTrace
