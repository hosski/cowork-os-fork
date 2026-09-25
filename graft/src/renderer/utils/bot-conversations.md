# src/renderer/utils/bot-conversations.ts

- isBotConversation · function · L8-L10 — function isBotConversation(task: Pick<Task, "agentConfig"> | null | undefined): boolean
- hasVisibleBotMessage · function · L14-L26 — function hasVisibleBotMessage(task: Task): boolean
- selectLatestBotConversation · function · L29-L47 — function selectLatestBotConversation(tasks: Task[], agentRoleId?: string): Task | undefined
- createBotConversationOptions · function · L49-L62 — function createBotConversationOptions(agentRoleId: string): CreateTaskOptions
- getConversationActionLabels · function · L64-L76 — function getConversationActionLabels(botConversation: boolean)
- matchesBotConversation · function · L78-L89 — function matchesBotConversation( task: Task, workspaceId: string, agentRoleId: string, ): boolean
