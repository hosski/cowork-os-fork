# src/electron/gateway/__tests__/security-pending.test.ts

- createMockSecurityManager · function · L26-L132 — function createMockSecurityManager()
- createPairingCode · method · L30-L37 — createPairingCode(): string
- generatePairingCode · method · L39-L64 — async generatePairingCode(channel: { id: string; securityConfig: { pairingCodeTTL?: number }; }): Promise<{ code: string; expiresAt: number; }>
- verifyPairingCode · method · L66-L130 — async verifyPairingCode( channel: { id: string }, message: { userId: string; userName: string }, code: string, ): Promise<{ success: boolean; error?: string; user?: Any }>
