# src/cli/terminal-ui.ts

- WelcomeScreenOptions · interface · L19-L26 — interface WelcomeScreenOptions
- renderWelcomeScreen · function · L28-L88 — function renderWelcomeScreen(options: WelcomeScreenOptions = {}): string
- renderPromptLine · function · L90-L97 — function renderPromptLine( width = process.stdout.columns ?? 100, color = shouldColor(), ): string
- promptMarker · function · L99-L101 — function promptMarker(color = shouldColor()): string
- renderShortcutFooter · function · L103-L108 — function renderShortcutFooter(width: number, color: boolean): string
- formatCwd · function · L110-L114 — function formatCwd(cwd: string): string
- center · function · L116-L121 — function center(input: string, width: number): string
- padVisible · function · L123-L126 — function padVisible(input: string, width: number): string
- truncateVisible · function · L128-L133 — function truncateVisible(input: string, width: number): string
- visibleLength · function · L135-L137 — function visibleLength(input: string): number
- stripAnsi · function · L139-L141 — function stripAnsi(input: string): string
- styled · function · L143-L145 — function styled(input: string, code: string, color: boolean): string
- shouldColor · function · L147-L151 — function shouldColor(): boolean
