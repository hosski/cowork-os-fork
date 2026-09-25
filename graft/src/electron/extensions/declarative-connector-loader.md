# src/electron/extensions/declarative-connector-loader.ts

- expandTemplate · function · L24-L29 — function expandTemplate(template: string, input: Record<string, unknown>): string
- shellEscape · function · L35-L37 — function shellEscape(value: string): string
- expandShellTemplate · function · L43-L49 — function expandShellTemplate(template: string, input: Record<string, unknown>): string
- isAllowedUrl · function · L54-L61 — function isAllowedUrl(url: string): boolean
- validateConnector · function · L67-L100 — function validateConnector(connector: DeclarativeConnector): string | null
- createToolFromConnector · function · L105-L128 — function createToolFromConnector( connector: DeclarativeConnector, pluginName: string, ): RegisterToolOptions
- createConnectorHandler · function · L130-L144 — function createConnectorHandler( connector: DeclarativeConnector, _pluginName: string, ): (input: Record<string, unknown>) => Promise<unknown>
- createHttpHandler · function · L146-L188 — function createHttpHandler( connector: DeclarativeConnector, ): (input: Record<string, unknown>) => Promise<unknown>
- createShellHandler · function · L210-L231 — function createShellHandler( connector: DeclarativeConnector, ): (input: Record<string, unknown>) => Promise<unknown>
- createScriptHandler · function · L233-L255 — function createScriptHandler( connector: DeclarativeConnector, ): (input: Record<string, unknown>) => Promise<unknown>
