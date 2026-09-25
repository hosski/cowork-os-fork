# src/renderer/components/BotDetailsRail.tsx

- BotDetailsRailProps · interface · L18-L25 — interface BotDetailsRailProps
- HostComputerStatusSnapshot · interface · L27-L33 — interface HostComputerStatusSnapshot
- isHostComputerReady · function · L35-L41 — function isHostComputerReady( status: HostComputerStatusSnapshot | null | undefined, ): boolean
- getHostComputerStatusLabel · function · L43-L52 — function getHostComputerStatusLabel( activeTaskId: string | null | undefined, currentTaskId: string, ready = true, ): string
- getBotStatusTone · function · L58-L71 — function getBotStatusTone(status: TaskStatus | string): "busy" | "good" | "bad" | "idle"
- BotDetailsRail · function · L73-L377 — function BotDetailsRail({ task, workspace, onEdit, onOpenHistory, onOpenComputerSettings, onClose, }: BotDetailsRailProps)
- updatePolicy · function · L147-L166 — updatePolicy = async ( patch: Partial<Pick<BotNotificationPolicy, "onFinish" | "onInputRequired">>, )
- refreshComputerStatus · function · L168-L177 — refreshComputerStatus = async ()
- copyBotLink · function · L179-L189 — copyBotLink = async ()
