# src/renderer/components/ContactIdentitySettings.tsx

- ContactIdentitySettingsProps · interface · L10-L12 — interface ContactIdentitySettingsProps
- statCard · function · L14-L33 — function statCard(label: string, value: number)
- actionButtonStyle · function · L35-L45 — function actionButtonStyle(kind: "default" | "danger" = "default"): CSSProperties
- ContactIdentitySettings · function · L57-L634 — function ContactIdentitySettings({ workspaceId }: ContactIdentitySettingsProps)
- load · function · L72-L85 — load = async ()
- runAction · function · L91-L99 — runAction = async (id: string, action: () => Promise<unknown>)
- runManualAction · function · L101-L112 — runManualAction = async (id: string, action: () => Promise<unknown>)
- runManualSearch · function · L114-L130 — runManualSearch = async (query: string)
- handleManualLink · function · L132-L147 — handleManualLink = async (result: ContactIdentitySearchResult)
