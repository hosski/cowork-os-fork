# src/renderer/components/SessionDashboardCard.tsx

- SessionDashboardCardProps · interface · L32-L40 — interface SessionDashboardCardProps
- Metric · function · L42-L65 — function Metric({ icon, label, value, detail, }: { icon: React.ReactNode; label: string; value: string; detail?: string; })
- SessionDashboardCard · function · L67-L581 — function SessionDashboardCard({ task, events, refreshKey, showSummary = true, onSelectTask, onOpenFile, workspacePath, }: SessionDashboardCardProps)
- refreshCredentialRequests · function · L181-L195 — refreshCredentialRequests = async ()
- startPreview · function · L234-L251 — startPreview = async ()
- stopPreview · function · L253-L264 — stopPreview = async ()
- restartPreview · function · L266-L277 — restartPreview = async ()
- openPreview · function · L279-L291 — openPreview = async ()
- fulfillCredential · function · L293-L313 — fulfillCredential = async (request: ProtectedCredentialRequestSummary)
- denyCredential · function · L315-L329 — denyCredential = async (request: ProtectedCredentialRequestSummary)
