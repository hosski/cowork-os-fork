# src/electron/utils/html-preview-assets.ts

- InlineHtmlPreviewAssetsOptions · type · L7-L14 — type InlineHtmlPreviewAssetsOptions = { htmlContent: string; htmlFilePath: string; workspaceRoot?: string; readTextFile?: (filePath: string) => Promise<string>; statFile?: (filePath: string) => Promise<{ size: number }>; realpathFile?: (filePath: string) => Promise<string>; };
- getAttributes · function · L20-L26 — function getAttributes(tag: string): Record<string, string>
- stripUrlDecorators · function · L28-L30 — function stripUrlDecorators(rawUrl: string): string
- shouldInlineAsset · function · L32-L38 — function shouldInlineAsset(rawUrl: string): boolean
- resolveAssetPath · function · L40-L48 — function resolveAssetPath(rawUrl: string, baseDir: string, workspaceRoot?: string): string | null
- escapeStyleContent · function · L50-L52 — function escapeStyleContent(content: string): string
- escapeScriptContent · function · L54-L56 — function escapeScriptContent(content: string): string
- escapeAttributeContent · function · L58-L60 — function escapeAttributeContent(content: string): string
- readInlineableAsset · function · L62-L88 — async function readInlineableAsset( assetPath: string, state: { totalBytes: number; workspaceRoot?: string; readTextFile: (filePath: string) => Promise<string>; statFile: (filePath: string) => Promise<{ size: number }>; realpathFile: (filePath: string) => Promise<string>; }, ): Promise<string | null>
- inlineLocalHtmlPreviewAssets · function · L90-L168 — async function inlineLocalHtmlPreviewAssets({ htmlContent, htmlFilePath, workspaceRoot, readTextFile = (filePath) => fs.readFile(filePath, "utf-8"), statFile = (filePath) => fs.stat(filePath), realpathFile = (filePath) => fs.realpath(filePath), }: InlineHtmlPreviewAssetsOptions): Promise<string>
