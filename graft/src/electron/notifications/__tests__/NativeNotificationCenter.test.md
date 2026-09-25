# src/electron/notifications/__tests__/NativeNotificationCenter.test.ts

- NotificationEventName · type · L3-L3 — type NotificationEventName = "click" | "close" | "failed";
- NotificationHandler · type · L4-L4 — type NotificationHandler = () => void;
- MockNotification · class · L20-L46 — class MockNotification
- constructor · method · L24-L36 — constructor(options: Record<string, unknown>)
- on · method · L38-L41 — on(event: NotificationEventName, handler: NotificationHandler): this
- show · method · L43-L45 — show(): void
- loadNotificationCenter · function · L64-L67 — async function loadNotificationCenter()
