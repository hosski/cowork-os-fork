# src/renderer/components/PersonalitySettings.tsx

- TabId · type · L10-L10 — type TabId = "identity" | "memory" | "personality" | "instructions" | "style" | "advanced";
- PersonalitySettingsProps · interface · L12-L14 — interface PersonalitySettingsProps
- PersonalitySettings · function · L16-L226 — function PersonalitySettings({ onSettingsChanged }: PersonalitySettingsProps)
- loadData · function · L57-L82 — loadData = async ()
- handleUpdate · function · L84-L90 — handleUpdate = (updates: Partial<PersonalityConfigV2>)
- handleSave · function · L92-L124 — handleSave = async ()
- showToast · function · L126-L129 — showToast = (msg: string)
