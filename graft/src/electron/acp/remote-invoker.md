# src/electron/acp/remote-invoker.ts

- RemoteInvocationResult · interface · L12-L17 — interface RemoteInvocationResult
- isLoopbackHostname · function · L21-L24 — function isLoopbackHostname(hostname: string): boolean
- isPrivateIpAddress · function · L26-L46 — function isPrivateIpAddress(hostname: string): boolean
- validateRemoteAgentEndpoint · function · L48-L70 — function validateRemoteAgentEndpoint(endpoint: string): URL
- buildHeaders · function · L72-L85 — function buildHeaders(agent: ACPAgentCard): Record<string, string>
- normalizeRemoteResult · function · L87-L120 — function normalizeRemoteResult( result: A2ARemoteTaskResult | Record<string, unknown>, ): RemoteInvocationResult
- RemoteAgentInvoker · class · L122-L208 — class RemoteAgentInvoker
- sendRequest · method · L123-L166 — private async sendRequest<T>( agent: ACPAgentCard, method: A2AJsonRpcRequest["method"], params: Record<string, unknown>, ): Promise<T>
- invoke · method · L168-L193 — async invoke(agent: ACPAgentCard, task: ACPTaskCreateParams): Promise<RemoteInvocationResult>
- pollStatus · method · L195-L200 — async pollStatus(agent: ACPAgentCard, remoteTaskId: string): Promise<RemoteInvocationResult>
- cancel · method · L202-L207 — async cancel(agent: ACPAgentCard, remoteTaskId: string): Promise<RemoteInvocationResult>
