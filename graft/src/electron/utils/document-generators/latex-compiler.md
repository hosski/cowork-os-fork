# src/electron/utils/document-generators/latex-compiler.ts

- LatexEngine · type · L8-L8 — type LatexEngine = "tectonic" | "latexmk" | "xelatex" | "lualatex" | "pdflatex";
- LatexEngineInput · type · L9-L9 — type LatexEngineInput = "auto" | LatexEngine;
- ExecFileLike · type · L11-L15 — type ExecFileLike = ( file: string, args: string[], options: { cwd?: string; timeout?: number; maxBuffer?: number }, ) => Promise<{ stdout?: string | Buffer; stderr?: string | Buffer }>;
- CompileLatexParams · type · L17-L25 — type CompileLatexParams = { workspacePath: string; sourcePath: string; outputPath?: string; engine?: LatexEngineInput; /** Set only after the caller has separately approved each external path. */ allowExternalPaths?: boolean; execFileImpl?: ExecFileLike; };
- CompileLatexResult · type · L27-L36 — type CompileLatexResult = { success: boolean; sourcePath: string; pdfPath: string; logPath: string; engine?: LatexEngine; diagnostic: string; size?: number; error?: string; };
- isPathInsideWorkspace · function · L43-L46 — function isPathInsideWorkspace(targetPath: string, workspacePath: string): boolean
- resolveWorkspacePath · function · L48-L65 — function resolveWorkspacePath( workspacePath: string, requestedPath: string, label: string, allowExternalPaths = false, ): string
- stringifyOutput · function · L67-L70 — function stringifyOutput(value: unknown): string
- trimDiagnostic · function · L72-L76 — function trimDiagnostic(value: string): string
- createDiagnostic · function · L78-L82 — function createDiagnostic(stdout?: unknown, stderr?: unknown): string
- commandExists · function · L84-L92 — async function commandExists(command: string, execImpl: ExecFileLike): Promise<boolean>
- findLatexEngine · function · L94-L105 — async function findLatexEngine( requested: LatexEngineInput | undefined, execImpl: ExecFileLike = execFile, ): Promise<LatexEngine | null>
- buildLatexCommand · function · L107-L141 — function buildLatexCommand(engine: LatexEngine, sourcePath: string, outputDir: string): string[]
- compileLatex · function · L143-L265 — async function compileLatex(params: CompileLatexParams): Promise<CompileLatexResult>
