# src/electron/agent/__tests__/executor-step-failures.test.ts

- toolUseResponse · function · L35-L47 — function toolUseResponse(name: string, input: Record<string, Any>): LLMResponse
- multiToolUseResponse · function · L49-L61 — function multiToolUseResponse( calls: Array<{ name: string; input: Record<string, Any> }>, ): LLMResponse
- textResponse · function · L63-L73 — function textResponse(text: string): LLMResponse
- applyExecutorFieldDefaults · function · L75-L153 — function applyExecutorFieldDefaults(executor: Any): void
- createExecutorWithStubs · function · L155-L298 — function createExecutorWithStubs(responses: LLMResponse[], toolResults: Record<string, Any>)
- createExecutorWithLLMHandler · function · L300-L385 — function createExecutorWithLLMHandler(handler: (messages: Any[]) => LLMResponse)
