# src/electron/briefing/workspace-briefing-context.ts

- getLocalDateStamp · function · L6-L11 — function getLocalDateStamp(now: Date): string
- readText · function · L13-L23 — function readText(absPath: string): string | null
- parseBulletsUnderHeading · function · L25-L45 — function parseBulletsUnderHeading(markdown: string, heading: string): string[]
- readWorkspacePriorities · function · L47-L51 — function readWorkspacePriorities(workspacePath?: string): string | null
- readWorkspaceCompanyProfile · function · L53-L57 — function readWorkspaceCompanyProfile(workspacePath?: string): string | null
- readWorkspaceKpis · function · L59-L63 — function readWorkspaceKpis(workspacePath?: string): string | null
- readWorkspaceOpenLoops · function · L65-L71 — function readWorkspaceOpenLoops(workspacePath?: string, now = new Date()): string[]
