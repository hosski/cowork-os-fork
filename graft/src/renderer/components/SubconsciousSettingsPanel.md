# src/renderer/components/SubconsciousSettingsPanel.tsx

- formatTimestamp · function · L17-L20 — function formatTimestamp(value?: number): string
- formatOutcome · function · L22-L24 — function formatOutcome(value?: string): string
- isUsefulOutcome · function · L26-L28 — function isUsefulOutcome(value?: string): boolean
- formatPercent · function · L30-L33 — function formatPercent(value?: number): string
- runImpactLabel · function · L35-L44 — function runImpactLabel(run?: SubconsciousRun): string
- Md · function · L48-L57 — function Md({ text }: { text: string })
- SubconsciousSettingsPanel · function · L59-L846 — function SubconsciousSettingsPanel(props?: { initialWorkspaceId?: string; onOpenTask?: (taskId: string) => void; })
- load · function · L127-L153 — load = async ()
- loadTargetDetail · function · L155-L158 — loadTargetDetail = async (targetKey: string)
- saveSettings · function · L160-L191 — saveSettings = async (updates: Partial<SubconsciousSettings>)
- runNow · function · L193-L206 — runNow = async (targetKey?: string)
- refresh · function · L208-L221 — refresh = async ()
- dismissTarget · function · L223-L235 — dismissTarget = async ()
- resetHistory · function · L237-L260 — resetHistory = async ()
