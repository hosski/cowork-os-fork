# src/electron/security/PrincipalCapabilityMiddleware.ts

- PrincipalCapabilityMiddleware · class · L23-L226 — class PrincipalCapabilityMiddleware
- constructor · method · L29-L37 — constructor( private readonly db: Database.Database, private readonly memberships: SessionMembershipService = new SessionMembershipService(db), )
- membership · method · L39-L41 — get membership(): SessionMembershipService
- bindClient · method · L43-L49 — bindClient(clientId: number, principalId: string, source: "trusted" | "invite" = "trusted")
- principalForClient · method · L51-L57 — principalForClient(clientId: number, options?: { trustedPrincipalId?: string }): string
- authorizeTask · method · L59-L65 — authorizeTask( taskId: string, capability: SessionHumanCapability, principalId: string, ): { contextId: string; actor: SessionActionAttribution }
- authorizeContext · method · L67-L73 — authorizeContext( contextId: string, capability: SessionHumanCapability, principalId: string, ): SessionActionAttribution
- authorizeApproval · method · L75-L80 — authorizeApproval(approvalId: string, capability: SessionHumanCapability, principalId: string)
- authorizeInputRequest · method · L82-L91 — authorizeInputRequest( requestId: string, capability: SessionHumanCapability, principalId: string, )
- authorizeArtifact · method · L93-L98 — authorizeArtifact(artifactId: string, capability: SessionHumanCapability, principalId: string)
- authorizeManagedSession · method · L100-L108 — authorizeManagedSession( sessionId: string, capability: SessionHumanCapability, principalId: string, )
- authorizeTaskIds · method · L110-L126 — authorizeTaskIds( taskIds: string[], capability: SessionHumanCapability, principalId: string, ): string[]
- filterTasks · method · L128-L143 — filterTasks<T extends { id: string }>( tasks: T[], capability: SessionHumanCapability, principalId: string, ): T[]
- filterAndPaginateTasks · method · L152-L203 — filterAndPaginateTasks<T extends { id: string }>( loadPage: (limit: number, offset: number) => T[], capability: SessionHumanCapability, principalId: string, limit: number, offset: number, ): { tasks: T[]; total?: number }
- authorizeSessionRequest · method · L205-L217 — authorizeSessionRequest( request: SessionMembersRequest, capability: SessionHumanCapability, principalId: string, ): SessionActionAttribution
- authorizeGlobalManage · method · L220-L225 — authorizeGlobalManage(principalId: string): void
- getRequestPrincipalId · function · L228-L234 — function getRequestPrincipalId( middleware: PrincipalCapabilityMiddleware, clientId: number, trustedPrincipalId?: string, ): string
