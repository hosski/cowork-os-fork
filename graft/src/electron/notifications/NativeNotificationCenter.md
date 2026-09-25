# src/electron/notifications/NativeNotificationCenter.ts

- NativeNotificationInput · interface · L4-L10 — interface NativeNotificationInput
- NativeNotificationCenter · class · L12-L92 — class NativeNotificationCenter
- getInstance · method · L18-L23 — static getInstance(): NativeNotificationCenter
- constructor · method · L25-L25 — private constructor()
- setOnClick · method · L27-L29 — setOnClick(callback: (notificationId: string, taskId?: string) => void): void
- show · method · L31-L81 — show(notification: NativeNotificationInput, onFailed?: () => void): boolean
- releaseReference · function · L46-L49 — releaseReference = ()
- reportFailure · function · L51-L60 — reportFailure = ()
- pruneRetainedNotifications · method · L83-L91 — private pruneRetainedNotifications(): void
