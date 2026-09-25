# src/electron/memory/MemoryPressureService.ts

- FilesystemReadGuard · type · L5-L5 — type FilesystemReadGuard = (candidatePath: string) => boolean;
- canReadPath · function · L7-L14 — function canReadPath(readGuard: FilesystemReadGuard | undefined, candidatePath: string): boolean
- MemoryPressureFileStatus · interface · L16-L26 — interface MemoryPressureFileStatus
- MemoryPressureReport · interface · L28-L32 — interface MemoryPressureReport
- normalizeLine · function · L36-L42 — function normalizeLine(line: string): string
- duplicateLineCount · function · L44-L54 — function duplicateLineCount(markdown: string): number
- levelForPressure · function · L56-L60 — function levelForPressure(pressure: number): MemoryPressureFileStatus["level"]
- MemoryPressureService · class · L62-L152 — class MemoryPressureService
- analyze · method · L63-L75 — static async analyze( workspacePath: string, readGuard?: FilesystemReadGuard, ): Promise<MemoryPressureReport>
- analyzeFile · method · L77-L137 — static async analyzeFile( workspacePath: string, file: MemoryPressureFileStatus["file"], readGuard?: FilesystemReadGuard, ): Promise<MemoryPressureFileStatus>
- buildCompactionInstructions · method · L139-L151 — static buildCompactionInstructions(report: MemoryPressureReport): string
