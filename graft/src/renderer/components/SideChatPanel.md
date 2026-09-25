# src/renderer/components/SideChatPanel.tsx

- SideChatPanelProps · type · L9-L26 — type SideChatPanelProps = { parentTask?: Task | null; sideTask?: Task | null; events: TaskEvent[]; loading?: boolean; sending?: boolean; onSendMessage: (message: string) => void | boolean | Promise<void | boolean>; draftValue?: string; draftRevision?: number; draftSnapshot?: ComposerDraft | null; onDraftValueChange?: (value: string) => ComposerDraft | void; onDraftAccepted?: ( revision: number, submittedDraft?: ComposerDraft | null, ) => void | boolean | Promise<void | boolean>; onClose: () => void; onOpenSideTask?: (taskId: string) => void; };
- SideChatMessage · type · L28-L33 — type SideChatMessage = { id: string; role: "user" | "assistant"; text: string; timestamp: number; };
- getEventMessage · function · L35-L41 — function getEventMessage(event: TaskEvent): string
- isForkedParentTranscriptEvent · function · L43-L49 — function isForkedParentTranscriptEvent(event: TaskEvent): boolean
- deriveMessages · function · L51-L67 — function deriveMessages(events: TaskEvent[]): SideChatMessage[]
- getTaskStatusLabel · function · L69-L92 — function getTaskStatusLabel(task?: Task | null): string
- formatSideChatTime · function · L94-L97 — function formatSideChatTime(timestamp: number): string
- submit · function · L138-L156 — submit = ()
