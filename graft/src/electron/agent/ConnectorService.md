# src/electron/agent/ConnectorService.ts

- ConnectorResult · interface · L12-L18 — interface ConnectorResult<T = unknown>
- GitHubRepoFileOptions · interface · L20-L25 — interface GitHubRepoFileOptions
- NotionQueryOptions · interface · L27-L31 — interface NotionQueryOptions
- MCPClientLike · interface · L33-L36 — interface MCPClientLike
- ConnectorService · class · L38-L172 — class ConnectorService
- constructor · method · L39-L39 — constructor(private mcpClient?: MCPClientLike)
- githubFetchFile · method · L45-L108 — async githubFetchFile(options: GitHubRepoFileOptions): Promise<ConnectorResult<string>>
- notionQuery · method · L114-L171 — async notionQuery(options: NotionQueryOptions): Promise<ConnectorResult>
