# src/cli/format.ts

- WorkspaceLike · interface · L3-L7 — interface WorkspaceLike
- TaskLike · interface · L9-L14 — interface TaskLike
- ApprovalLike · interface · L16-L23 — interface ApprovalLike
- printJson · function · L25-L27 — function printJson(value: unknown): void
- formatWorkspace · function · L29-L34 — function formatWorkspace(workspace: WorkspaceLike): string
- formatTask · function · L36-L41 — function formatTask(task: TaskLike): string
- formatApproval · function · L43-L49 — function formatApproval(approval: ApprovalLike): string
- buildTaskTitle · function · L51-L55 — function buildTaskTitle(prompt: string): string
- extractArrayPayload · function · L57-L62 — function extractArrayPayload<T>(payload: unknown, key: string): T[]
- formatTaskEventFrame · function · L64-L99 — function formatTaskEventFrame(frame: ControlPlaneFrame): string | null
- isTerminalTaskFrame · function · L101-L118 — function isTerminalTaskFrame(frame: ControlPlaneFrame, taskId?: string): boolean
- matchesTask · function · L120-L131 — function matchesTask(frame: ControlPlaneFrame, taskId?: string): boolean
- stringValue · function · L133-L135 — function stringValue(value: unknown): string | undefined
