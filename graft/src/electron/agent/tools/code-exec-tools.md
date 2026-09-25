# src/electron/agent/tools/code-exec-tools.ts

- CodeExecInput · interface · L17-L24 — interface CodeExecInput
- CodeExecResult · interface · L26-L33 — interface CodeExecResult
- CodeExecTools · class · L40-L178 — class CodeExecTools
- constructor · method · L43-L43 — constructor(private workspace: Workspace)
- getSandbox · method · L45-L53 — private async getSandbox(): Promise<ISandbox>
- assertNetworkExecutionAllowed · method · L55-L73 — private assertNetworkExecutionAllowed(input: CodeExecInput): void
- executeCode · method · L75-L115 — async executeCode(input: CodeExecInput): Promise<CodeExecResult>
- executeScriptInSandbox · method · L117-L136 — private async executeScriptInSandbox( sandbox: ISandbox, language: "python" | "javascript", code: string, options: SandboxOptions, )
- cleanup · method · L138-L141 — cleanup(): void
- getToolDefinitions · method · L143-L177 — static getToolDefinitions(): LLMTool[]
