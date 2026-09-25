# src/electron/agent/runtime/turn-kernel.ts

- TurnKernelStopReason · type · L4-L12 — type TurnKernelStopReason = | LoopBudgetStopReason | "max_empty_responses" | "context_capacity_exhausted" | "cancelled" | "cancelled_or_completed" | "wrap_up_requested" | "step_feedback_skip" | "step_feedback_retry";
- TurnKernelMode · type · L14-L14 — type TurnKernelMode = "step" | "follow_up";
- TurnKernelInput · interface · L16-L24 — interface TurnKernelInput
- TurnKernelIterationState · interface · L26-L32 — interface TurnKernelIterationState
- TurnKernelPreparedResponse · interface · L34-L38 — interface TurnKernelPreparedResponse
- TurnKernelRecoveredResponse · interface · L40-L43 — interface TurnKernelRecoveredResponse
- TurnKernelStoppedResponse · interface · L45-L49 — interface TurnKernelStoppedResponse
- TurnKernelDecision · interface · L51-L56 — interface TurnKernelDecision
- TurnKernelPolicy · interface · L58-L74 — interface TurnKernelPolicy
- TurnKernelOutcome · interface · L76-L82 — interface TurnKernelOutcome
- TurnKernel · class · L84-L205 — class TurnKernel
- constructor · method · L85-L88 — constructor( private readonly input: TurnKernelInput, private readonly policy: TurnKernelPolicy, )
- run · method · L90-L204 — async run(): Promise<TurnKernelOutcome>
- isTurnKernelRecoveredResponse · function · L207-L211 — function isTurnKernelRecoveredResponse( prepared: TurnKernelPreparedResponse | TurnKernelRecoveredResponse | TurnKernelStoppedResponse, ): prepared is TurnKernelRecoveredResponse
- isTurnKernelStoppedResponse · function · L213-L217 — function isTurnKernelStoppedResponse( prepared: TurnKernelPreparedResponse | TurnKernelRecoveredResponse | TurnKernelStoppedResponse, ): prepared is TurnKernelStoppedResponse
