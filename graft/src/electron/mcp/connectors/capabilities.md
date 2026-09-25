# src/electron/mcp/connectors/capabilities.ts

- IntegrationAuthMethod · type · L4-L4 — type IntegrationAuthMethod = "api_key" | "oauth";
- ConnectorCapabilityId · type · L6-L22 — type ConnectorCapabilityId = | "salesforce" | "jira" | "hubspot" | "zendesk" | "servicenow" | "linear" | "asana" | "okta" | "resend" | "google-workspace" | "figma" | "vercel" | "monday" | "rhino" | "blender" | "comfyui";
- Tier1IntegrationProvider · type · L24-L32 — type Tier1IntegrationProvider = | "resend" | "google-workspace" | "jira" | "linear" | "hubspot" | "salesforce" | "zendesk" | "servicenow";
- IntegrationLinkSet · interface · L34-L40 — interface IntegrationLinkSet
- IntegrationInputHint · interface · L42-L49 — interface IntegrationInputHint
- ConnectorCapability · interface · L51-L64 — interface ConnectorCapability
- getConnectorCapability · function · L407-L412 — function getConnectorCapability(id: string): ConnectorCapability | undefined
- listConnectorCapabilities · function · L414-L416 — function listConnectorCapabilities(): ConnectorCapability[]
- listTier1ConnectorCapabilities · function · L418-L420 — function listTier1ConnectorCapabilities(): ConnectorCapability[]
- getKnownConnectorIds · function · L422-L424 — function getKnownConnectorIds(): string[]
- detectConnectorCapabilityId · function · L426-L445 — function detectConnectorCapabilityId( server: Pick<MCPServerConfig, "name" | "args">, ): ConnectorCapabilityId | null
- hasEnvValue · function · L447-L449 — function hasEnvValue(env: Record<string, string> | undefined, key: string): boolean
- evaluateRequirements · function · L451-L472 — function evaluateRequirements( env: Record<string, string> | undefined, requirements: string[][], ): { configured: boolean; missing: string[]; missingFromBestGroup: string[] }
- evaluateConnectorReadiness · function · L474-L525 — function evaluateConnectorReadiness(params: { capability: ConnectorCapability; env?: Record<string, string>; authMethod?: IntegrationAuthMethod | "auto"; }): { configured: boolean; selectedAuthMethod: IntegrationAuthMethod; missingInputs: string[]; }
- resolveRequirements · function · L485-L487 — resolveRequirements = (method: IntegrationAuthMethod): string[][]
- isConnectorConfiguredByCapability · function · L527-L534 — function isConnectorConfiguredByCapability( connectorId: string, env: Record<string, string> | undefined, ): boolean
