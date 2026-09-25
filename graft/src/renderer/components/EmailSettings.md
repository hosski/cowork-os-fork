# src/renderer/components/EmailSettings.tsx

- EmailSettingsProps · interface · L10-L12 — interface EmailSettingsProps
- EmailProvider · type · L16-L25 — type EmailProvider = | "gmail" | "microsoft365" | "outlook" | "yahoo" | "icloud" | "fastmail" | "protonmail" | "custom" | "loom";
- EmailAuthMethod · type · L27-L27 — type EmailAuthMethod = "password" | "oauth";
- EmailTestResult · type · L28-L28 — type EmailTestResult = { success: boolean; error?: string; message?: string };
- EmailProviderDef · interface · L30-L39 — interface EmailProviderDef
- EmailProviderModalProps · interface · L264-L309 — interface EmailProviderModalProps
- EmailSettings · function · L313-L838 — function EmailSettings({ onStatusChange }: EmailSettingsProps)
- handleAddChannel · function · L414-L506 — handleAddChannel = async ()
- handleMicrosoftOAuthConnect · function · L508-L582 — handleMicrosoftOAuthConnect = async (options?: { persistToChannel?: boolean })
- handleTestConnection · function · L584-L598 — handleTestConnection = async ()
- handleToggleEnabled · function · L600-L616 — handleToggleEnabled = async ()
- handleRemoveChannel · function · L618-L635 — handleRemoveChannel = async ()
- handleProviderCardClick · function · L637-L663 — handleProviderCardClick = (def: EmailProviderDef)
- handleEmailInputChange · function · L665-L670 — handleEmailInputChange = (value: string)
- handleOauthClientIdChange · function · L672-L677 — handleOauthClientIdChange = (value: string)
- handleOauthTenantChange · function · L679-L684 — handleOauthTenantChange = (value: string)
- EmailProviderModal · function · L842-L1229 — function EmailProviderModal({ def, channelName, setChannelName, email, setEmail, emailAuthMethod, password, setPassword, emailOauthClientId, setEmailOauthClientId, emailOauthClientSecret, setEmailOauthClientSecret, emailOauthTenant, setEmailOauthTenant, imapHost, setImapHost, imapPort, setImapPort, smtpHost, setSmtpHost, smtpPort, setSmtpPort, displayName, setDisplayName, subjectFilter, setSubjectFilter, loomBaseUrl, setLoomBaseUrl, loomAccessToken, setLoomAccessToken, loomIdentity, setLoomIdentity, loomMailboxFolder, setLoomMailboxFolder, loomPollInterval, setLoomPollInterval, saving, testResult, oauthBusy, oauthError, oauthConnected, onConnectMicrosoftOAuth, onClose, onSubmit, }: EmailProviderModalProps)
