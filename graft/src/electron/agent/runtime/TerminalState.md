# src/electron/agent/runtime/TerminalState.ts

- TerminalKind · type · L3-L12 — type TerminalKind = | "success" | "partial_success" | "timed_out" | "needs_user_action" | "awaiting_verification" | "cancelled" | "external_completed" | "deterministic_handled" | "failed";
- TerminalState · interface · L14-L21 — interface TerminalState
- TerminalStateInput · type · L23-L25 — type TerminalStateInput = Partial<Omit<TerminalState, "terminalKind" | "terminalStatus">> & { terminalStatus?: Task["terminalStatus"]; };
- createTerminalState · function · L27-L41 — function createTerminalState( terminalKind: TerminalKind, input: TerminalStateInput = {}, ): TerminalState
- projectTerminalState · function · L43-L52 — function projectTerminalState( terminalState?: TerminalState, ): Pick<TerminalState, "terminalKind" | "terminalStatus" | "failureClass"> | undefined
- resolveTerminalStatus · function · L54-L75 — function resolveTerminalStatus( terminalKind: TerminalKind, override?: Task["terminalStatus"], ): NonNullable<Task["terminalStatus"]>
- resolveFailureClass · function · L77-L101 — function resolveFailureClass( terminalKind: TerminalKind, terminalStatus: Task["terminalStatus"], override?: Task["failureClass"], ): Task["failureClass"] | undefined
