# scripts/package-linux-server.mjs

- run · function · L23-L37 — function run(command, args, options = {})
- exists · function · L39-L46 — async function exists(targetPath)
- copyIfPresent · function · L48-L57 — async function copyIfPresent(fromRelative, toRoot)
- getConnectorPackageNames · function · L59-L80 — function getConnectorPackageNames(pkg)
- copyConnectorRuntimeFiles · function · L82-L124 — async function copyConnectorRuntimeFiles(toRoot, connectorPackageNames)
- prunePackageJsonForServer · function · L126-L154 — function prunePackageJsonForServer(pkg)
- writeInstallNotes · function · L156-L181 — async function writeInstallNotes(packageRoot, version)
- assertRequiredBuildOutputs · function · L183-L198 — async function assertRequiredBuildOutputs()
- sha256File · function · L200-L207 — async function sha256File(filePath)
- main · function · L209-L300 — async function main()
