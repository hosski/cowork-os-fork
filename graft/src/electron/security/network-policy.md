# src/electron/security/network-policy.ts

- NetworkPolicyDecision · interface · L6-L14 — interface NetworkPolicyDecision
- NetworkPolicyRequest · interface · L16-L22 — interface NetworkPolicyRequest
- normalizeDomainPattern · function · L24-L28 — function normalizeDomainPattern(pattern: string): string
- domainMatches · function · L30-L52 — function domainMatches(hostname: string, pattern: string): boolean
- toLogSafeNetworkPolicyUrl · function · L54-L61 — function toLogSafeNetworkPolicyUrl(url: URL): string
- evaluateNetworkPolicy · function · L63-L234 — function evaluateNetworkPolicy(request: NetworkPolicyRequest): NetworkPolicyDecision
- assertNetworkPolicyAllowed · function · L236-L242 — function assertNetworkPolicyAllowed(request: NetworkPolicyRequest): NetworkPolicyDecision
- assertNetworkDestinationAllowed · function · L258-L270 — async function assertNetworkDestinationAllowed( request: NetworkPolicyRequest, ): Promise<NetworkPolicyDecision>
