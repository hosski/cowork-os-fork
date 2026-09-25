# resources/skills/llm-wiki/scripts/wiki-import.mjs

- parseArgs · function · L23-L57 — function parseArgs(argv)
- fetchRemoteSource · function · L59-L72 — async function fetchRemoteSource(source)
- resolveTitle · function · L74-L88 — function resolveTitle(args, source, kind)
- buildRepoTree · function · L90-L100 — function buildRepoTree(rootPath)
- copyOptionalReadme · function · L102-L111 — function copyOptionalReadme(sourceDir, targetDir)
- writeTextCapture · function · L113-L124 — function writeTextCapture(targetDir, baseName, extension, body, metadata)
- importStructuredSource · function · L126-L208 — async function importStructuredSource({ vaultPath, kind, source, title, bodyFile })
- importImageSource · function · L210-L258 — async function importImageSource({ vaultPath, kind, source, title })
- main · function · L260-L297 — async function main()
