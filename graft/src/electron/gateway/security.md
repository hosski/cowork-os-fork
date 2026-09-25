# src/electron/gateway/security.ts

- AccessCheckResult · interface · L22-L31 — interface AccessCheckResult
- PairingResult · interface · L33-L37 — interface PairingResult
- SecurityManager · class · L39-L431 — class SecurityManager
- constructor · method · L47-L51 — constructor(db: Database.Database)
- getContextPolicyManager · method · L56-L58 — getContextPolicyManager(): ContextPolicyManager
- checkAccess · method · L64-L170 — async checkAccess( channel: Channel, message: IncomingMessage, isGroup?: boolean, ): Promise<AccessCheckResult>
- generatePairingCode · method · L177-L203 — generatePairingCode(channel: Channel, _userId?: string, _displayName?: string): string
- verifyPairingCode · method · L210-L247 — async verifyPairingCode(channel: Channel, userId: string, code: string): Promise<PairingResult>
- doVerifyPairingCode · method · L257-L360 — private async doVerifyPairingCode( channel: Channel, userId: string, code: string, ): Promise<PairingResult>
- revokeAccess · method · L365-L370 — revokeAccess(channelId: string, userId: string): void
- grantAccess · method · L375-L388 — grantAccess(channelId: string, userId: string, displayName?: string): void
- getChannelUsers · method · L394-L398 — getChannelUsers(channelId: string): ChannelUser[]
- cleanupExpiredPending · method · L405-L407 — cleanupExpiredPending(channelId: string): number
- getAllowedUsers · method · L412-L414 — getAllowedUsers(channelId: string): ChannelUser[]
- createPairingCode · method · L421-L430 — private createPairingCode(): string
