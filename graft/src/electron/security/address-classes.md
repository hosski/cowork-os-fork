# src/electron/security/address-classes.ts

- normalizeHostname · function · L27-L34 — function normalizeHostname(hostname: string): string
- ipv6ToBytes · function · L44-L76 — function ipv6ToBytes(address: string): number[] | null
- toGroups · function · L61-L62 — toGroups = (part: string)
- mappedIpv4Address · function · L83-L89 — function mappedIpv4Address(address: string): string | null
- isLoopbackAddress · function · L91-L103 — function isLoopbackAddress(address: string): boolean
- isPrivateIpv4Address · function · L105-L118 — function isPrivateIpv4Address(address: string): boolean
- isPrivateIpv6Address · function · L120-L140 — function isPrivateIpv6Address(address: string): boolean
- isPrivateOrLoopbackAddress · function · L142-L148 — function isPrivateOrLoopbackAddress(address: string): boolean
- isBlockedInternalHost · function · L158-L167 — function isBlockedInternalHost(host: string, allowLoopback = false): boolean
- assertResolvedHostAllowed · function · L186-L222 — async function assertResolvedHostAllowed(host: string): Promise<void>
