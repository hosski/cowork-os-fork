# src/electron/updater/release-signature.ts

- isReleaseSignatureEnforced · function · L30-L32 — function isReleaseSignatureEnforced(): boolean
- ReleaseSignatureStatus · type · L44-L44 — type ReleaseSignatureStatus = "verified" | "unverified" | "failed";
- ReleaseSignatureResult · interface · L46-L49 — interface ReleaseSignatureResult
- verifyReleaseArtifact · function · L57-L102 — async function verifyReleaseArtifact( artifactPath: string, signatureBase64: string | undefined, ): Promise<ReleaseSignatureResult>
- fetchArtifactSignature · function · L108-L118 — async function fetchArtifactSignature(artifactUrl: string): Promise<string | undefined>
