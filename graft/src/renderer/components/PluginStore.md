# src/renderer/components/PluginStore.tsx

- PackRegistryEntry · interface · L5-L20 — interface PackRegistryEntry
- PluginStoreProps · interface · L22-L25 — interface PluginStoreProps
- installMessage · function · L27-L33 — function installMessage(outcome: InstallSecurityOutcome | undefined, fallback: string): string
- PluginStore · function · L35-L838 — function PluginStore({ onClose, onInstalled }: PluginStoreProps)
- loadCategories · function · L64-L71 — async function loadCategories()
- doSearch · function · L79-L98 — async function doSearch()
- handleInstall · function · L107-L147 — handleInstall = async (entry: PackRegistryEntry)
- handleUrlInstall · function · L149-L191 — handleUrlInstall = async ()
- handleScaffold · function · L193-L229 — handleScaffold = async ()
- normalizeAuthor · function · L232-L236 — normalizeAuthor = (author?: string): string
