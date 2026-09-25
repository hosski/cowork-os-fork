# src/electron/infra/providers/local-wallet-provider.ts

- LocalWalletProvider · class · L13-L101 — class LocalWalletProvider implements WalletProvider
- initialize · method · L17-L20 — async initialize(): Promise<void>
- applySettings · method · L22-L24 — async applySettings(_settings: InfraSettings): Promise<void>
- hasWallet · method · L26-L28 — async hasWallet(): Promise<boolean>
- getAddress · method · L30-L32 — async getAddress(): Promise<string | null>
- getNetwork · method · L34-L36 — async getNetwork(): Promise<string>
- getBalanceUsdc · method · L38-L40 — async getBalanceUsdc(): Promise<string>
- getStatus · method · L42-L65 — async getStatus(): Promise<WalletProviderStatus>
- ensureWallet · method · L67-L72 — async ensureWallet(): Promise<void>
- x402Check · method · L74-L76 — async x402Check(url: string): Promise<X402CheckResult>
- x402Fetch · method · L78-L89 — async x402Fetch(req: X402FetchRequest): Promise<X402FetchResult>
- configureX402Client · method · L91-L100 — private configureX402Client(): void
