# src/electron/agent/sandbox/security-utils.ts

- createSecureTempFile · function · L23-L63 — function createSecureTempFile( extension: string, content: string, ): { filePath: string; cleanup: () => void }
- cleanup · function · L52-L60 — cleanup = ()
- validateAndResolvePath · function · L73-L120 — function validateAndResolvePath( targetPath: string, allowedBasePaths: string[], ): string | null
- escapeSandboxProfileString · function · L129-L146 — function escapeSandboxProfileString(input: string): string
- validatePathForSandboxProfile · function · L155-L172 — function validatePathForSandboxProfile(pathToValidate: string): boolean
- escapeDockerEnvValue · function · L181-L197 — function escapeDockerEnvValue(value: string): string
- validateEnvVarName · function · L205-L229 — function validateEnvVarName(name: string): boolean
- buildSafeEnvironment · function · L237-L255 — function buildSafeEnvironment(requestedVars: string[]): Record<string, string | undefined>
