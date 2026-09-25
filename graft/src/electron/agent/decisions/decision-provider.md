# src/electron/agent/decisions/decision-provider.ts

- DecisionProvider · interface · L15-L19 — interface DecisionProvider
- HttpDecisionProviderOptions · interface · L21-L28 — interface HttpDecisionProviderOptions extends Omit< DecisionHttpClientOptions, "endpoint" | "providerName" >
- HttpDecisionProvider · class · L31-L84 — abstract class HttpDecisionProvider implements DecisionProvider
- constructor · method · L36-L40 — protected constructor(options: HttpDecisionProviderOptions)
- decide · method · L42-L46 — async decide(request: JevRequest, options?: DecisionRequestOptions): Promise<JevResponse>
- testConnection · method · L53-L79 — async testConnection(options?: DecisionRequestOptions): Promise<DecisionConnectionResult>
- health · method · L81-L83 — async health(options?: DecisionRequestOptions): Promise<DecisionConnectionResult>
