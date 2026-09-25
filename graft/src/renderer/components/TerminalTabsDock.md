# src/renderer/components/TerminalTabsDock.tsx

- TerminalHandle · type · L10-L15 — type TerminalHandle = { terminal: Terminal; fitAddon: FitAddon; disposables: Array<{ dispose: () => void }>; opened: boolean; };
- uniqueTabs · function · L17-L23 — function uniqueTabs(tabs: ShellSessionInfo[]): ShellSessionInfo[]
- getTabLabel · function · L25-L27 — function getTabLabel(tab: ShellSessionInfo, workspace: Workspace): string
- readCssVar · function · L29-L32 — function readCssVar(name: string, fallback: string): string
- buildTerminalTheme · function · L34-L41 — function buildTerminalTheme()
