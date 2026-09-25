# src/electron/gateway/__tests__/context-policy.test.ts

- MockContextPolicyManager · class · L23-L205 — class MockContextPolicyManager
- getPolicy · method · L24-L30 — getPolicy(channelId: string, contextType: ContextType): ContextPolicy
- getPolicyForChat · method · L32-L35 — getPolicyForChat(channelId: string, _chatId: string, isGroup: boolean): ContextPolicy
- findPolicy · method · L37-L44 — findPolicy(channelId: string, contextType: ContextType): ContextPolicy | null
- getPoliciesForChannel · method · L46-L54 — getPoliciesForChannel(channelId: string): ContextPolicy[]
- create · method · L56-L82 — create(options: { channelId: string; contextType: ContextType; securityMode?: SecurityMode; toolRestrictions?: string[]; }): ContextPolicy
- update · method · L84-L103 — update( id: string, options: { securityMode?: SecurityMode; toolRestrictions?: string[] }, ): ContextPolicy | null
- updateByContext · method · L105-L123 — updateByContext( channelId: string, contextType: ContextType, options: { securityMode?: SecurityMode; toolRestrictions?: string[] }, ): ContextPolicy
- delete · method · L125-L127 — delete(id: string): boolean
- deleteByChannel · method · L129-L142 — deleteByChannel(channelId: string): number
- isToolAllowed · method · L144-L166 — isToolAllowed( channelId: string, contextType: ContextType, toolName: string, toolGroups: string[], ): boolean
- getDeniedTools · method · L168-L171 — getDeniedTools(channelId: string, contextType: ContextType): string[]
- createDefaultPolicies · method · L173-L176 — createDefaultPolicies(channelId: string): void
- createDefaultPolicy · method · L178-L192 — private createDefaultPolicy(channelId: string, contextType: ContextType): ContextPolicy
- mapRowToPolicy · method · L194-L204 — private mapRowToPolicy(row: Any): ContextPolicy
