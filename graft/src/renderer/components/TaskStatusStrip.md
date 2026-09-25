# src/renderer/components/TaskStatusStrip.tsx

- TaskStatusStripProps · interface · L21-L29 — interface TaskStatusStripProps
- InlineMarkdownNodeProps · type · L31-L33 — type InlineMarkdownNodeProps = { children?: ReactNode; };
- createInlinePlanMarkdownComponents · function · L35-L48 — function createInlinePlanMarkdownComponents(markdownComponents: unknown)
- TaskStatusPlanStepDescription · function · L50-L69 — function TaskStatusPlanStepDescription({ description, markdownComponents, }: { description: string; markdownComponents?: unknown; })
- StatusIcon · function · L71-L82 — function StatusIcon({ model }: { model: TaskStatusStripViewModel })
- shouldAnnounce · function · L84-L92 — function shouldAnnounce(model: TaskStatusStripViewModel): boolean
- TaskStatusStrip · function · L94-L292 — function TaskStatusStrip({ model, activityGroups, outcomeMetrics, replay = false, telemetryEnabled = false, onOpenOutput, markdownComponents, }: TaskStatusStripProps)
- scrollToGroup · function · L136-L142 — scrollToGroup = (groupId: string | undefined)
- handleDrawerKeyDown · function · L144-L150 — handleDrawerKeyDown = (event: KeyboardEvent<HTMLDivElement>)
