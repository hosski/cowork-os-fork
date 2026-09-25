# src/electron/supervisor/protocol.ts

- ParsedSupervisorProtocolMessage · interface · L17-L24 — interface ParsedSupervisorProtocolMessage
- sanitizeForPrompt · function · L32-L40 — function sanitizeForPrompt(text: string): string
- getSupervisorMarker · function · L42-L44 — function getSupervisorMarker(intent: SupervisorProtocolIntent): string
- parseSupervisorProtocolMessage · function · L46-L80 — function parseSupervisorProtocolMessage( text: string, config: Pick<DiscordSupervisorConfig, "peerBotUserIds" | "strictMode">, ): ParsedSupervisorProtocolMessage | null
- formatPeerSupervisorMessage · function · L82-L95 — function formatPeerSupervisorMessage( peerUserId: string, intent: SupervisorProtocolIntent, body: string, options?: { exchangeId?: string }, ): string
