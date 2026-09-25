# src/electron/utils/web-preview.ts

- PackageJsonShape · type · L8-L12 — type PackageJsonShape = { dependencies?: Record<string, unknown>; devDependencies?: Record<string, unknown>; scripts?: Record<string, unknown>; };
- pathExists · function · L14-L21 — async function pathExists(filePath: string): Promise<boolean>
- readPackageJson · function · L23-L29 — async function readPackageJson(packageJsonPath: string): Promise<PackageJsonShape | null>
- detectFramework · function · L31-L41 — function detectFramework(packageJson: PackageJsonShape | null): WebPagePreview["framework"]
- findReactProjectRoot · function · L43-L60 — async function findReactProjectRoot( startPath: string, workspaceRoot: string, ): Promise<string | null>
- findBuiltHtmlEntry · function · L62-L68 — async function findBuiltHtmlEntry(projectRoot: string): Promise<string | null>
- buildPreviewFromHtmlFile · function · L70-L94 — async function buildPreviewFromHtmlFile(args: { htmlPath: string; workspaceRoot: string; projectRoot?: string; framework?: WebPagePreview["framework"]; }): Promise<WebPagePreview>
- buildWebPagePreviewFromPath · function · L96-L156 — async function buildWebPagePreviewFromPath( sourcePath: string, workspaceRoot: string, ): Promise<WebPagePreview>
