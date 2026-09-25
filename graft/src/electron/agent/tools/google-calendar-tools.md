# src/electron/agent/tools/google-calendar-tools.ts

- CalendarAction · type · L11-L17 — type CalendarAction = | "list_calendars" | "list_events" | "get_event" | "create_event" | "update_event" | "delete_event";
- GoogleCalendarActionInput · interface · L19-L38 — interface GoogleCalendarActionInput
- buildAttendees · function · L40-L52 — function buildAttendees( attendees?: Array<string | { email: string }>, ): Array<{ email: string }> | undefined
- buildEventPayload · function · L54-L96 — function buildEventPayload(input: GoogleCalendarActionInput): Record<string, Any>
- buildDateField · function · L72-L85 — buildDateField = ( value: string | { dateTime?: string; date?: string; timeZone?: string }, )
- GoogleCalendarTools · class · L98-L282 — class GoogleCalendarTools
- constructor · method · L99-L103 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L105-L107 — setWorkspace(workspace: Workspace): void
- isEnabled · method · L109-L118 — static isEnabled(): boolean
- formatAuthError · method · L120-L134 — private formatAuthError(error: unknown): string | null
- requireApproval · method · L136-L147 — private async requireApproval(summary: string, details: Record<string, unknown>): Promise<void>
- executeAction · method · L149-L281 — async executeAction(input: GoogleCalendarActionInput): Promise<Any>
