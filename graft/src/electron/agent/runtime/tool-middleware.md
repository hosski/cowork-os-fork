# src/electron/agent/runtime/tool-middleware.ts

- ToolExecutionRequest · interface · L1-L5 — interface ToolExecutionRequest
- ToolExecutionContext · interface · L7-L9 — interface ToolExecutionContext
- ToolExecutionHandler · type · L11-L11 — type ToolExecutionHandler = (context: ToolExecutionContext) => Promise<Any>;
- ToolExecutionMiddleware · type · L12-L15 — type ToolExecutionMiddleware = ( context: ToolExecutionContext, next: ToolExecutionHandler, ) => Promise<Any>;
- composeToolMiddleware · function · L17-L25 — function composeToolMiddleware( handler: ToolExecutionHandler, middlewares: ToolExecutionMiddleware[], ): ToolExecutionHandler
