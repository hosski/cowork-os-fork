# src/electron/chronicle/ChronicleObservationRepository.ts

- normalizeText · function · L15-L20 — function normalizeText(value: unknown): string
- scoreObservation · function · L22-L32 — function scoreObservation(record: ChroniclePersistedObservation, query: string): number
- ensureWorkspaceDirs · function · L34-L43 — async function ensureWorkspaceDirs(workspacePath: string): Promise<{ observationsDir: string; assetsDir: string; }>
- readObservationFile · function · L45-L58 — async function readObservationFile( filePath: string, ): Promise<ChroniclePersistedObservation | null>
- readObservationFileSync · function · L60-L71 — function readObservationFileSync(filePath: string): ChroniclePersistedObservation | null
- shouldPersistDurably · function · L73-L89 — function shouldPersistDurably(workspaceId: string): boolean
- listObservationFiles · function · L91-L101 — async function listObservationFiles(workspacePath: string): Promise<string[]>
- listObservationFilesSync · function · L103-L113 — function listObservationFilesSync(workspacePath: string): string[]
- ChronicleObservationRepository · class · L115-L244 — class ChronicleObservationRepository
- promote · method · L116-L155 — static async promote( workspacePath: string, input: { workspaceId: string; taskId: string; query: string; observation: ChronicleResolvedContext; destinationHints?: string[]; }, ): Promise<ChroniclePersistedObservation | null>
- list · method · L157-L164 — static async list(workspacePath: string, limit = 50): Promise<ChroniclePersistedObservation[]>
- listSync · method · L166-L172 — static listSync(workspacePath: string, limit = 50): ChroniclePersistedObservation[]
- listByTaskSync · method · L174-L176 — static listByTaskSync(workspacePath: string, taskId: string): ChroniclePersistedObservation[]
- search · method · L178-L190 — static async search( workspacePath: string, query: string, limit = 20, ): Promise<ChroniclePersistedObservation[]>
- searchSync · method · L192-L203 — static searchSync( workspacePath: string, query: string, limit = 20, ): ChroniclePersistedObservation[]
- attachMemoryLink · method · L205-L221 — static async attachMemoryLink( workspacePath: string, observationId: string, memoryId: string, memoryGeneratedAt = Date.now(), ): Promise<boolean>
- deleteObservation · method · L223-L231 — static async deleteObservation(workspacePath: string, observationId: string): Promise<boolean>
- clearWorkspace · method · L233-L243 — static async clearWorkspace(workspacePath: string): Promise<void>
