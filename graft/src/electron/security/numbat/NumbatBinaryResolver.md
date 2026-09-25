# src/electron/security/numbat/NumbatBinaryResolver.ts

- NumbatTargetManifest · interface · L8-L11 — interface NumbatTargetManifest
- NumbatManifest · interface · L13-L19 — interface NumbatManifest
- ResolvedNumbatBinary · interface · L21-L28 — interface ResolvedNumbatBinary
- sha256File · function · L30-L69 — function sha256File(filePath: string): string
- assertSafeBinary · function · L71-L92 — function assertSafeBinary(filePath: string, expectedSha256: string): void
- assertSafeManifest · function · L94-L102 — function assertSafeManifest(manifestPath: string): void
- candidateManifestPaths · function · L104-L114 — function candidateManifestPaths(): string[]
- loadManifest · function · L116-L136 — function loadManifest(): { manifest: NumbatManifest; path: string }
- resolveNumbatBinary · function · L138-L207 — function resolveNumbatBinary(): ResolvedNumbatBinary
- materializeStableNumbatBinary · function · L209-L222 — function materializeStableNumbatBinary(binary: ResolvedNumbatBinary): ResolvedNumbatBinary
