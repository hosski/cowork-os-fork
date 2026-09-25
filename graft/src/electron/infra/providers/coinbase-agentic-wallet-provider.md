# src/electron/infra/providers/coinbase-agentic-wallet-provider.ts

- CoinbaseWalletStatusResponse · interface · L25-L30 — interface CoinbaseWalletStatusResponse
- CoinbaseAgenticWalletProvider · class · L38-L266 — class CoinbaseAgenticWalletProvider implements WalletProvider
- initialize · method · L46-L48 — async initialize(): Promise<void>
- applySettings · method · L50-L55 — async applySettings(settings: InfraSettings): Promise<void>
- hasWallet · method · L57-L60 — async hasWallet(): Promise<boolean>
- getAddress · method · L62-L65 — async getAddress(): Promise<string | null>
- getNetwork · method · L67-L70 — async getNetwork(): Promise<string>
- getBalanceUsdc · method · L72-L75 — async getBalanceUsdc(): Promise<string>
- getStatus · method · L77-L94 — async getStatus(): Promise<WalletProviderStatus>
- ensureWallet · method · L96-L102 — async ensureWallet(): Promise<void>
- x402Check · method · L104-L121 — async x402Check(url: string): Promise<X402CheckResult>
- x402Fetch · method · L123-L143 — async x402Fetch(req: X402FetchRequest): Promise<X402FetchResult>
- fetchRemoteStatus · method · L145-L158 — private async fetchRemoteStatus(): Promise<CoinbaseWalletStatusResponse>
- ensureConfigured · method · L160-L167 — private ensureConfigured(): void
- normalizeEndpoint · method · L169-L173 — private normalizeEndpoint(value: string): string
- callJson · method · L175-L196 — private async callJson<T>( path: string, opts: { method: "GET" | "POST"; body?: Record<string, unknown> }, ): Promise<T>
- validateSignerPaymentResult · method · L198-L258 — private validateSignerPaymentResult( result: X402FetchResult, policy: X402PaymentPolicyEnvelope, requestUrl: string, ): void
- getPaymentDetailsMismatch · method · L260-L265 — private getPaymentDetailsMismatch( expected: X402PaymentDetails, actual: X402PaymentDetails, ): string | null
