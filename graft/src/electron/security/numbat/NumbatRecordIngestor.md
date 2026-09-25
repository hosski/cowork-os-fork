# src/electron/security/numbat/NumbatRecordIngestor.ts

- FileCursor · interface · L15-L19 — interface FileCursor
- NumbatIngestResult · interface · L21-L25 — interface NumbatIngestResult
- asRecord · function · L27-L31 — function asRecord(value: unknown): Record<string, unknown>
- stringValue · function · L33-L35 — function stringValue(record: Record<string, unknown>, key: string): string
- stringArray · function · L37-L40 — function stringArray(record: Record<string, unknown>, key: string): string[]
- safeTimestamp · function · L42-L45 — function safeTimestamp(value: string | undefined): number
- NumbatRecordIngestor · class · L47-L247 — class NumbatRecordIngestor
- constructor · method · L50-L55 — constructor( private readonly repository: AgentSecurityRepository, private readonly cursorDir?: string, )
- cursorPath · method · L57-L61 — private cursorPath(filePath: string): string | undefined
- loadCursor · method · L63-L83 — private loadCursor(filePath: string): FileCursor | undefined
- saveCursor · method · L85-L92 — private saveCursor(filePath: string, cursor: FileCursor): void
- forgetFile · method · L94-L98 — forgetFile(filePath: string): void
- ingestFile · method · L100-L187 — ingestFile(filePath: string, taskId?: string): NumbatIngestResult
- toFinding · method · L189-L221 — private toFinding(record: Record<string, unknown>, taskId?: string): AgentSecurityFinding | null
- toDecision · method · L223-L246 — private toDecision( record: Record<string, unknown>, taskId?: string, ): AgentSecurityEnforcement | null
