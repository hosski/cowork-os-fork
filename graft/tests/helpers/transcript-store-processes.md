# tests/helpers/transcript-store-processes.ts

- WorkerMessage · interface · L10-L13 — interface WorkerMessage
- WriterParams · interface · L15-L22 — interface WriterParams
- workerEnvironment · function · L24-L29 — function workerEnvironment(lockRoot?: string): NodeJS.ProcessEnv
- buildWorker · function · L31-L126 — async function buildWorker(workspacePath: string): Promise<string>
- setup · method · L108-L121 — setup(builder)
- readWorkerStderr · function · L128-L134 — function readWorkerStderr(child: ChildProcess): { read: () => string }
- waitForMessage · function · L136-L175 — function waitForMessage( child: ChildProcess, expectedKind: WorkerMessage["kind"], stderr: { read: () => string }, ): Promise<WorkerMessage>
- cleanup · function · L148-L153 — cleanup = ()
- onMessage · function · L154-L162 — onMessage = (message: WorkerMessage)
- onError · function · L163-L166 — onError = (error: Error)
- onExit · function · L167-L170 — onExit = (code: number | null, signal: NodeJS.Signals | null)
- waitForExit · function · L177-L190 — function waitForExit(child: ChildProcess, stderr: { read: () => string }): Promise<void>
- waitForTermination · function · L192-L195 — function waitForTermination(child: ChildProcess): Promise<void>
- spawnWriter · function · L197-L221 — function spawnWriter( workerPath: string, params: WriterParams, ): { child: ChildProcess; stderr: { read: () => string }; }
- runConcurrentCheckpointWriters · function · L223-L259 — async function runConcurrentCheckpointWriters( params: Omit<WriterParams, "content" | "sourceTimestamp" | "barrierPath"> & { contents: string[]; sourceTimestamp?: number; sourceTimestamps?: Array<number | undefined>; }, ): Promise<void>
- runCheckpointWriter · function · L261-L277 — async function runCheckpointWriter(params: WriterParams): Promise<void>
- killCheckpointWriterMidFilesystemWrite · function · L279-L307 — async function killCheckpointWriterMidFilesystemWrite( params: WriterParams & { releasePath: string }, ): Promise<void>
