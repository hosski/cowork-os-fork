# src/electron/infra/providers/wallet-provider.ts

- WalletProviderKind · type · L3-L3 — type WalletProviderKind = "local" | "coinbase_agentic";
- X402ResourceInfo · interface · L5-L10 — interface X402ResourceInfo
- X402PaymentRequirement · interface · L12-L21 — interface X402PaymentRequirement
- X402PaymentRequired · interface · L24-L29 — interface X402PaymentRequired
- X402EvmAuthorization · interface · L31-L38 — interface X402EvmAuthorization
- X402PaymentPayload · interface · L40-L49 — interface X402PaymentPayload
- X402PaymentDetails · interface · L55-L64 — interface X402PaymentDetails extends X402PaymentRequired
- X402CheckResult · interface · L66-L70 — interface X402CheckResult
- X402FetchRequest · interface · L72-L79 — interface X402FetchRequest
- X402FetchResult · interface · L81-L89 — interface X402FetchResult
- X402PaymentPolicyEnvelope · interface · L91-L100 — interface X402PaymentPolicyEnvelope
- X402PaymentChallenge · interface · L102-L106 — interface X402PaymentChallenge
- X402PaymentApprovalHandler · type · L108-L110 — type X402PaymentApprovalHandler = ( challenge: X402PaymentChallenge, ) => Promise<boolean> | boolean;
- WalletProviderStatus · interface · L112-L118 — interface WalletProviderStatus
- WalletProvider · interface · L120-L132 — interface WalletProvider
