# src/renderer/utils/task-working-state.ts

- isBotChatConversation · function · L27-L29 — function isBotChatConversation(task: Task): boolean
- hasCompletedBotChatTurn · function · L39-L67 — function hasCompletedBotChatTurn(task: Task, events: TaskEvent[]): boolean
- isBotChatActiveWorkSignal · function · L75-L88 — function isBotChatActiveWorkSignal(event: TaskEvent, effectiveType: string): boolean
- isActiveWorkSignal · function · L90-L105 — function isActiveWorkSignal(event: TaskEvent, effectiveType: string): boolean
- isTaskActivelyWorking · function · L107-L173 — function isTaskActivelyWorking( task: Task | null | undefined, events: TaskEvent[], hasActiveChildren: boolean, now = Date.now(), ): boolean
