# src/electron/infra/providers/x402-policy.ts

- isRecord · function · L15-L16 — isRecord = (value: unknown): value is Record<string, unknown>
- isAtomicAmount · function · L18-L20 — function isAtomicAmount(value: unknown): value is string
- parseAtomicAmount · function · L22-L29 — function parseAtomicAmount(value: unknown): bigint | null
- formatAtomicUsdc · function · L31-L38 — function formatAtomicUsdc(value: bigint | string): string
- usdToAtomic · function · L41-L47 — function usdToAtomic(value: number): bigint | null
- isAddress · function · L49-L51 — function isAddress(value: unknown): value is string
- isResourceInfo · function · L53-L55 — function isResourceInfo(value: unknown): value is X402ResourceInfo
- isPaymentRequirement · function · L57-L69 — function isPaymentRequirement(value: unknown): value is X402PaymentRequirement
- isCanonicalPaymentDetails · function · L71-L73 — function isCanonicalPaymentDetails(value: unknown): value is X402PaymentDetails
- normalizePaymentDetails · function · L76-L127 — function normalizePaymentDetails( value: unknown, expectedNetwork?: string, expectedAsset?: string, ): X402PaymentDetails | null
- getExpectedBaseNetwork · function · L129-L131 — function getExpectedBaseNetwork(network: "base-mainnet" | "base-sepolia"): string
- getExpectedBaseAsset · function · L133-L135 — function getExpectedBaseAsset(network: "base-mainnet" | "base-sepolia"): string
- isSupportedExactRequirement · function · L137-L158 — function isSupportedExactRequirement( requirement: X402PaymentRequirement, expectedNetwork: string, expectedAsset: string, ): boolean
- getSupportedRequirement · function · L160-L173 — function getSupportedRequirement( details: X402PaymentDetails, expectedNetwork: string, expectedAsset: string, ): X402PaymentRequirement | null
- getPaymentIdentity · function · L175-L183 — function getPaymentIdentity(details: X402PaymentDetails): unknown
- getCanonicalPaymentMismatch · function · L185-L210 — function getCanonicalPaymentMismatch( expected: X402PaymentDetails, actual: X402PaymentDetails, ): string | null
- isResourceForRequest · function · L212-L220 — function isResourceForRequest(resource: X402ResourceInfo, requestUrl: string): boolean
- deepEqual · function · L222-L239 — function deepEqual(left: unknown, right: unknown): boolean
