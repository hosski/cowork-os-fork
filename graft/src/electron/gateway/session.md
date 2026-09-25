# src/electron/gateway/session.ts

- SessionManager · class · L10-L136 — class SessionManager
- constructor · method · L13-L15 — constructor(db: Database.Database)
- getOrCreateSession · method · L20-L47 — async getOrCreateSession( channel: Channel, chatId: string, userId?: string, defaultWorkspaceId?: string, ): Promise<ChannelSession>
- getSession · method · L52-L54 — getSession(sessionId: string): ChannelSession | undefined
- getSessionByTaskId · method · L59-L61 — getSessionByTaskId(taskId: string): ChannelSession | undefined
- updateSessionState · method · L66-L71 — updateSessionState(sessionId: string, state: "idle" | "active" | "waiting_approval"): void
- linkSessionToTask · method · L76-L82 — linkSessionToTask(sessionId: string, taskId: string): void
- unlinkSessionFromTask · method · L87-L93 — unlinkSessionFromTask(sessionId: string): void
- setSessionWorkspace · method · L98-L103 — setSessionWorkspace(sessionId: string, workspaceId: string): void
- updateSessionContext · method · L108-L117 — updateSessionContext(sessionId: string, context: Record<string, unknown>): void
- getActiveSessions · method · L122-L124 — getActiveSessions(channelId: string): ChannelSession[]
- cleanupOldSessions · method · L129-L135 — cleanupOldSessions(maxAgeMs: number = 24 * 60 * 60 * 1000): void
