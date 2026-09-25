# src/electron/agent/runtime/tool-handler-registry.ts

- PredicateHandlerEntry · interface · L4-L8 — interface PredicateHandlerEntry
- DirectHandlerEntry · interface · L10-L13 — interface DirectHandlerEntry
- ToolHandlerRegistry · class · L15-L81 — class ToolHandlerRegistry
- register · method · L19-L28 — register( name: string, handler: ToolExecutionHandler, schedulerSpecResolver?: RuntimeToolSchedulerSpecResolver, ): void
- registerMany · method · L30-L36 — registerMany( entries: Array<[string, ToolExecutionHandler, RuntimeToolSchedulerSpecResolver?]>, ): void
- registerPredicate · method · L38-L44 — registerPredicate( matches: (name: string) => boolean, handler: ToolExecutionHandler, schedulerSpecResolver?: RuntimeToolSchedulerSpecResolver, ): void
- has · method · L46-L52 — has(name: string): boolean
- listNames · method · L54-L56 — listNames(): string[]
- resolveSchedulerSpec · method · L58-L69 — resolveSchedulerSpec(name: string, input: Any): ReturnType<RuntimeToolSchedulerSpecResolver>
- execute · method · L71-L80 — async execute(name: string, context: ToolExecutionContext): Promise<Any>
