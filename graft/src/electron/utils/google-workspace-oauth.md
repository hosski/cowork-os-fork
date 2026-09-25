# src/electron/utils/google-workspace-oauth.ts

- GoogleWorkspaceOAuthRequest · interface · L11-L18 — interface GoogleWorkspaceOAuthRequest
- GoogleWorkspaceOAuthResult · interface · L20-L27 — interface GoogleWorkspaceOAuthResult
- getElectronShell · function · L35-L46 — function getElectronShell(): Any | null
- openExternalUrl · function · L48-L54 — async function openExternalUrl(url: string): Promise<void>
- base64Url · function · L56-L58 — function base64Url(buffer: Buffer): string
- createCodeVerifier · function · L60-L62 — function createCodeVerifier(): string
- createCodeChallenge · function · L64-L67 — function createCodeChallenge(verifier: string): string
- parseJsonSafe · function · L69-L77 — function parseJsonSafe(text: string): Any | undefined
- parseScopeList · function · L79-L85 — function parseScopeList(scope?: string): string[] | undefined
- fetchOAuthAccountEmail · function · L87-L100 — async function fetchOAuthAccountEmail(accessToken: string): Promise<string | undefined>
- startOAuthCallbackServer · function · L102-L199 — async function startOAuthCallbackServer(timeoutMs = DEFAULT_TIMEOUT_MS): Promise<{ redirectUri: string; state: string; waitForCode: () => Promise<{ code: string; state: string }>; }>
- resolveCode · function · L112-L112 — resolveCode: (value: { code: string; state: string }) => void = ()
- rejectCode · function · L113-L113 — rejectCode: (error: Error) => void = ()
- startGoogleWorkspaceOAuthGetLink · function · L212-L312 — async function startGoogleWorkspaceOAuthGetLink( request: GoogleWorkspaceOAuthRequest, onComplete: (result: GoogleWorkspaceOAuthResult) => void, onError: (error: Error) => void, ): Promise<string>
- startGoogleWorkspaceOAuth · function · L314-L402 — async function startGoogleWorkspaceOAuth( request: GoogleWorkspaceOAuthRequest, ): Promise<GoogleWorkspaceOAuthResult>
