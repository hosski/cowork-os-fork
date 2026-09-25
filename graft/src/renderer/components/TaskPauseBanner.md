# src/renderer/components/TaskPauseBanner.tsx

- TaskPauseBannerProps · type · L8-L15 — type TaskPauseBannerProps = { message?: string | null; reasonCode?: string | null; markdownComponents?: Any; onStopTask?: (() => void) | undefined; onOpenAccessProfilePicker?: (() => void | Promise<void>) | undefined; onContinueWithoutCommands?: (() => void | Promise<void>) | undefined; };
- isLowSignalPauseMessage · function · L32-L37 — function isLowSignalPauseMessage(message: string, reasonCode?: string | null): boolean
- hasConcreteDecisionRequest · function · L39-L53 — function hasConcreteDecisionRequest(message: string): boolean
- getPauseBannerCopy · function · L55-L104 — function getPauseBannerCopy( reasonCode?: string | null, displayMessage: string = "", ): { title: string; instruction: string }
- buildInlineMarkdownComponents · function · L106-L120 — function buildInlineMarkdownComponents(markdownComponents?: Any): Any
- TaskPauseBannerDetailsContent · function · L122-L136 — function TaskPauseBannerDetailsContent({ message, markdownComponents, }: { message: string; markdownComponents?: Any; })
- TaskPauseBanner · function · L138-L306 — function TaskPauseBanner({ message, reasonCode, markdownComponents, onStopTask, onOpenAccessProfilePicker, onContinueWithoutCommands, }: TaskPauseBannerProps)
- handleKeyDown · function · L183-L187 — handleKeyDown = (event: KeyboardEvent)
- runBannerAction · function · L193-L204 — runBannerAction = async ( action: "switch_access_profile" | "continue_without_commands", handler?: (() => void | Promise<void>) | undefined, )
