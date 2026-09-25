# src/electron/notifications/NotificationOverlayWindow.ts

- OverlayNotification · interface · L12-L18 — interface OverlayNotification
- ActiveOverlay · interface · L20-L25 — interface ActiveOverlay
- NotificationOverlayManager · class · L37-L457 — class NotificationOverlayManager
- getInstance · method · L46-L51 — static getInstance(): NotificationOverlayManager
- constructor · method · L53-L53 — private constructor()
- setAnchorBoundsProvider · method · L60-L62 — setAnchorBoundsProvider(fn: () => Rectangle | null): void
- setOnClick · method · L64-L66 — setOnClick(callback: (notificationId: string, taskId?: string) => void): void
- show · method · L68-L87 — show(notification: OverlayNotification): void
- dismiss · method · L89-L109 — dismiss(id: string): void
- dismissAll · method · L111-L115 — dismissAll(): void
- destroy · method · L117-L126 — destroy(): void
- createOverlayWindow · method · L128-L179 — private createOverlayWindow(notification: OverlayNotification): BrowserWindow
- getPosition · method · L181-L197 — private getPosition(stackIndex: number): { x: number; y: number }
- repositionOverlays · method · L199-L214 — private repositionOverlays(): void
- escapeHtml · method · L216-L223 — private escapeHtml(str: string): string
- getHtml · method · L225-L456 — private getHtml(notification: OverlayNotification): string
