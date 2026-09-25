# src/electron/chronicle/ChronicleMemoryService.ts

- ChronicleMemoryService · class · L12-L87 — class ChronicleMemoryService
- getInstance · method · L18-L23 — static getInstance(): ChronicleMemoryService
- applySettings · method · L25-L27 — applySettings(next: ChronicleSettings): void
- getLastGeneratedAt · method · L29-L31 — getLastGeneratedAt(): number | null
- notePromotedObservation · method · L33-L79 — async notePromotedObservation( workspacePath: string, observation: ChroniclePersistedObservation, ): Promise<Memory | null>
- shouldGenerate · method · L81-L86 — private shouldGenerate(observationId: string): boolean
