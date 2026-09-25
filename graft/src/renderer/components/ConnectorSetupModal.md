# src/renderer/components/ConnectorSetupModal.tsx

- ConnectorProvider · type · L3-L3 — type ConnectorProvider = "salesforce" | "jira" | "hubspot" | "zendesk" | "google-workspace";
- ConnectorSetupModalProps · interface · L5-L12 — interface ConnectorSetupModalProps
- JiraResource · interface · L14-L19 — interface JiraResource
- ConnectorSetupModal · function · L21-L802 — function ConnectorSetupModal({ provider, serverId, serverName, initialEnv = {}, onClose, onSaved, }: ConnectorSetupModalProps)
- parseScopes · function · L106-L110 — parseScopes = (value: string)
- sanitizeEnv · function · L112-L122 — sanitizeEnv = (env: Record<string, string | undefined>): Record<string, string>
- reconnectServer · function · L124-L131 — reconnectServer = async ()
- saveEnv · function · L133-L146 — saveEnv = async (env: Record<string, string | undefined>)
- handleSalesforceOAuth · function · L148-L173 — handleSalesforceOAuth = async ()
- handleJiraOAuth · function · L175-L201 — handleJiraOAuth = async ()
- handleHubSpotOAuth · function · L203-L225 — handleHubSpotOAuth = async ()
- handleZendeskOAuth · function · L227-L253 — handleZendeskOAuth = async ()
- handleGoogleOAuth · function · L255-L275 — handleGoogleOAuth = async ()
- handleManualSave · function · L277-L315 — handleManualSave = async ()
- handleJiraOauthSave · function · L317-L332 — handleJiraOauthSave = async ()
