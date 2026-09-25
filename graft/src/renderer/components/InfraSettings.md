# src/renderer/components/InfraSettings.tsx

- SetupStep · type · L4-L4 — type SetupStep = "idle" | "setting_up" | "done" | "error";
- InfraSettings · function · L8-L611 — function InfraSettings()
- handleSetup · function · L41-L57 — handleSetup = async ()
- handleReset · function · L59-L76 — handleReset = async ()
- handleSettingChange · function · L78-L90 — handleSettingChange = async <K extends keyof InfraSettingsType>( key: K, value: InfraSettingsType[K], )
- handleNestedChange · function · L92-L111 — handleNestedChange = async ( section: "e2b" | "domains" | "wallet" | "payments" | "enabledCategories", key: string, value: Any, )
- handleWalletCoinbaseChange · function · L113-L131 — handleWalletCoinbaseChange = async (key: string, value: Any)
- copyAddress · function · L133-L139 — copyAddress = ()
- truncateAddress · function · L141-L144 — truncateAddress = (addr: string)
- getProviderDot · function · L146-L157 — getProviderDot = (providerStatus?: string)
