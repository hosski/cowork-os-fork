# src/electron/utils/process.ts

- CommandResult · interface · L12-L16 — interface CommandResult
- RunCommandOptions · interface · L18-L22 — interface RunCommandOptions
- checkBinaryExists · function · L27-L35 — async function checkBinaryExists(binary: string): Promise<boolean>
- runCommand · function · L40-L99 — async function runCommand( command: string, args: string[], options: RunCommandOptions = {}, ): Promise<CommandResult>
- runShellCommand · function · L104-L124 — async function runShellCommand( command: string, options: RunCommandOptions = {}, ): Promise<CommandResult>
