# src/electron/agent/llm/local-inference-admission.ts

- Release · type · L5-L5 — type Release = () => void;
- QueuedWaiter · type · L6-L11 — type QueuedWaiter = { signal?: AbortSignal; resolve: (release: Release) => void; reject: (error: Error) => void; onAbort?: () => void; };
- cancellationError · function · L13-L17 — function cancellationError(): Error
- LocalInferenceAdmission · class · L23-L97 — class LocalInferenceAdmission
- constructor · method · L28-L33 — constructor( readonly resourceKey: string, capacity = DEFAULT_LOCAL_INFERENCE_CAPACITY, )
- activeCount · method · L35-L37 — get activeCount(): number
- queuedCount · method · L39-L41 — get queuedCount(): number
- acquire · method · L43-L64 — async acquire(signal?: AbortSignal): Promise<Release>
- remove · function · L52-L55 — remove = ()
- onAbort · function · L56-L59 — onAbort = ()
- run · method · L66-L73 — async run<T>(signal: AbortSignal | undefined, operation: () => Promise<T>): Promise<T>
- createRelease · method · L75-L83 — private createRelease(): Release
- drain · method · L85-L96 — private drain(): void
- getLocalInferenceAdmission · function · L101-L107 — function getLocalInferenceAdmission(resourceKey: string): LocalInferenceAdmission
- clearLocalInferenceAdmissionsForTests · function · L109-L111 — function clearLocalInferenceAdmissionsForTests(): void
- wrapProviderWithLocalInferenceAdmission · function · L113-L128 — function wrapProviderWithLocalInferenceAdmission( provider: LLMProvider, resourceKey?: string, ): LLMProvider
- createMessage · method · L121-L123 — createMessage(request: LLMRequest): Promise<LLMResponse>
