# src/electron/agent/runtime/runtime-tool-scheduler-spec.ts

- ToolExecutionScopeKey · interface · L9-L12 — interface ToolExecutionScopeKey
- RuntimeToolSchedulerPostExecutionEffectArgs · interface · L14-L24 — interface RuntimeToolSchedulerPostExecutionEffectArgs
- RuntimeToolSchedulerSpec · interface · L26-L36 — interface RuntimeToolSchedulerSpec
- RuntimeToolSchedulerSpecContext · interface · L38-L42 — interface RuntimeToolSchedulerSpecContext
- RuntimeToolSchedulerSpecOverride · type · L44-L44 — type RuntimeToolSchedulerSpecOverride = Partial<RuntimeToolSchedulerSpec> | undefined;
- RuntimeToolSchedulerSpecResolver · type · L46-L48 — type RuntimeToolSchedulerSpecResolver = ( args: RuntimeToolSchedulerSpecContext, ) => RuntimeToolSchedulerSpecOverride;
- resolveDefaultRuntimeToolSchedulerSpec · function · L145-L157 — function resolveDefaultRuntimeToolSchedulerSpec( args: RuntimeToolSchedulerSpecContext, ): RuntimeToolSchedulerSpec
- resolveRuntimeToolSchedulerSpec · function · L159-L171 — function resolveRuntimeToolSchedulerSpec( args: RuntimeToolSchedulerSpecContext, override?: RuntimeToolSchedulerSpecOverride, ): RuntimeToolSchedulerSpec
- createStaticRuntimeToolSchedulerSpecResolver · function · L173-L177 — function createStaticRuntimeToolSchedulerSpecResolver( override: Partial<RuntimeToolSchedulerSpec>, ): RuntimeToolSchedulerSpecResolver
- resolveToolExecutionScopeKeys · function · L179-L193 — function resolveToolExecutionScopeKeys(args: { spec: RuntimeToolSchedulerSpec; toolName: string; input: Any; runtime?: RuntimeToolMetadata; }): ToolExecutionScopeKey[]
- serializeToolExecutionScopeKey · function · L195-L197 — function serializeToolExecutionScopeKey(scopeKey: ToolExecutionScopeKey): string
- inferSchedulerConcurrencyClass · function · L199-L230 — function inferSchedulerConcurrencyClass( toolName: string, runtime?: RuntimeToolMetadata, ): RuntimeToolConcurrencyClass
- inferSchedulerReadOnly · function · L232-L252 — function inferSchedulerReadOnly( toolName: string, concurrencyClass: RuntimeToolConcurrencyClass, runtime?: RuntimeToolMetadata, ): boolean
- inferSchedulerIdempotent · function · L254-L273 — function inferSchedulerIdempotent(toolName: string, readOnly: boolean): boolean
- inferSchedulerScopeKeys · function · L275-L316 — function inferSchedulerScopeKeys(toolName: string, input: Any): ToolExecutionScopeKey[]
- extractPathScopeKeys · function · L318-L335 — function extractPathScopeKeys(input: Any): string[]
- normalizeScopePath · function · L337-L343 — function normalizeScopePath(raw: string): string
- getExternalServiceScope · function · L345-L351 — function getExternalServiceScope(toolName: string): string
