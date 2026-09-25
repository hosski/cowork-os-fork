# src/electron/memory/MemoryNudgeService.ts

- MemoryNudgeResult · interface · L6-L11 — interface MemoryNudgeResult
- MemoryNudgeRequest · interface · L13-L22 — interface MemoryNudgeRequest
- nudgeKey · function · L27-L29 — function nudgeKey(request: Pick<MemoryNudgeRequest, "workspaceId" | "taskId">): string
- hasMemorySignal · function · L31-L35 — function hasMemorySignal(text: string): boolean
- MemoryNudgeService · class · L37-L94 — class MemoryNudgeService
- resetForTests · method · L38-L40 — static resetForTests(): void
- maybeRun · method · L42-L93 — static async maybeRun(request: MemoryNudgeRequest): Promise<MemoryNudgeResult>
