# src/renderer/components/PlaywrightQAPanel.tsx

- Any · type · L21-L21 — type Any = any;
- QAIssue · interface · L23-L35 — interface QAIssue
- QACheck · interface · L37-L45 — interface QACheck
- QAInteractionStep · interface · L47-L57 — interface QAInteractionStep
- QARun · interface · L59-L77 — interface QARun
- QAEvent · interface · L79-L91 — interface QAEvent
- PlaywrightQAPanelProps · interface · L93-L96 — interface PlaywrightQAPanelProps
- PlaywrightQAPanel · function · L128-L670 — function PlaywrightQAPanel({ taskId, workspaceId }: PlaywrightQAPanelProps)
- toggleCheck · function · L251-L258 — toggleCheck = (checkType: string)
- toggleSection · function · L260-L267 — toggleSection = (section: string)
- SectionHeader · function · L674-L715 — function SectionHeader({ title, count, expanded, onToggle, }: { title: string; count: number; expanded: boolean; onToggle: () => void; })
- IssueRow · function · L717-L785 — function IssueRow({ issue }: { issue: QAIssue })
