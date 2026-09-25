# src/renderer/components/CouncilSettings.tsx

- GatewayChannel · type · L14-L20 — type GatewayChannel = { id: string; type: string; name: string; enabled: boolean; status: string; };
- CouncilDraft · type · L22-L33 — type CouncilDraft = { workspaceId: string; name: string; enabled: boolean; scheduleExpr: string; participants: CouncilParticipant[]; judgeSeatIndex: number; rotatingIdeaSeatIndex: number; sourceBundle: CouncilConfig["sourceBundle"]; deliveryConfig: CouncilConfig["deliveryConfig"]; executionPolicy: CouncilConfig["executionPolicy"]; };
- createDefaultParticipant · function · L37-L44 — function createDefaultParticipant(index: number): CouncilParticipant
- createDraft · function · L46-L69 — function createDraft(workspaceId: string): CouncilDraft
- draftFromConfig · function · L71-L99 — function draftFromConfig(config: CouncilConfig): CouncilDraft
- formatDateTime · function · L101-L104 — function formatDateTime(value?: number): string
- buildPayload · function · L106-L135 — function buildPayload(draft: CouncilDraft): CreateCouncilConfigRequest
- CouncilSettings · function · L137-L1165 — function CouncilSettings({ workspaceId, onOpenTask, }: { workspaceId?: string; onOpenTask?: (taskId: string) => void; })
- loadRunsAndMemo · function · L172-L179 — loadRunsAndMemo = async (councilId: string)
- loadCouncils · function · L181-L211 — loadCouncils = async (targetWorkspaceId: string, preferredCouncilId?: string | null)
- loadInitial · function · L215-L239 — loadInitial = async ()
- selectCouncil · function · L246-L261 — selectCouncil = async (councilId: string | null)
- updateParticipant · function · L263-L274 — updateParticipant = ( index: number, key: keyof CouncilParticipant, value: string | LLMProviderType, )
- validateDraft · function · L276-L301 — validateDraft = (): string | null
- handleSave · function · L303-L341 — handleSave = async ()
- handleDelete · function · L343-L355 — handleDelete = async ()
- handleRunNow · function · L357-L369 — handleRunNow = async ()
- handleWorkspaceChange · function · L371-L378 — handleWorkspaceChange = async (nextWorkspaceId: string)
