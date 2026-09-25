# src/electron/infra/providers/e2b-sandbox.ts

- SandboxEntry · interface · L11-L14 — interface SandboxEntry
- E2BSandboxProvider · class · L16-L187 — class E2BSandboxProvider
- setApiKey · method · L20-L22 — setApiKey(key: string): void
- hasApiKey · method · L24-L26 — hasApiKey(): boolean
- create · method · L31-L55 — async create(opts?: { name?: string; timeoutMs?: number; envs?: Record<string, string>; }): Promise<InfraSandboxInfo>
- exec · method · L60-L81 — async exec( sandboxId: string, command: string, opts?: { timeoutMs?: number; background?: boolean }, ): Promise<{ stdout: string; stderr: string; exitCode: number }>
- writeFile · method · L86-L89 — async writeFile(sandboxId: string, filePath: string, content: string): Promise<void>
- readFile · method · L94-L97 — async readFile(sandboxId: string, filePath: string): Promise<string>
- listFiles · method · L102-L106 — async listFiles(sandboxId: string, dirPath: string): Promise<string[]>
- getUrl · method · L111-L115 — getUrl(sandboxId: string, port: number): string
- list · method · L120-L122 — list(): InfraSandboxInfo[]
- delete · method · L127-L138 — async delete(sandboxId: string): Promise<void>
- isRunning · method · L143-L151 — async isRunning(sandboxId: string): Promise<boolean>
- cleanup · method · L156-L161 — async cleanup(): Promise<void>
- getOrReconnect · method · L166-L186 — private async getOrReconnect(sandboxId: string): Promise<SandboxEntry>
