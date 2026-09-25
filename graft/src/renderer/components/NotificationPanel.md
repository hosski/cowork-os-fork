# src/renderer/components/NotificationPanel.tsx

- AppNotification · interface · L10-L31 — interface AppNotification
- NotificationEvent · interface · L33-L37 — interface NotificationEvent
- NotificationPanelProps · interface · L39-L41 — interface NotificationPanelProps
- BellIcon · function · L236-L251 — BellIcon = ({ color = "#6b7280" }: { color?: string })
- NotificationMarkdownPreview · function · L374-L391 — function NotificationMarkdownPreview({ text, style, }: { text: string; style?: React.CSSProperties; })
- formatRelativeTime · function · L393-L406 — function formatRelativeTime(timestamp: number): string
- stripLeadingEmoji · function · L408-L410 — function stripLeadingEmoji(text: string): string
- humanizeStatus · function · L413-L426 — function humanizeStatus(value: string): string
- formatNotificationTitle · function · L429-L454 — function formatNotificationTitle(title: string): { primary: string; badge?: string; }
- NotificationPanel · function · L456-L688 — function NotificationPanel({ onNotificationClick }: NotificationPanelProps)
- loadNotifications · function · L466-L475 — loadNotifications = async ()
- handleClickOutside · function · L508-L512 — handleClickOutside = (e: MouseEvent)
- handleMarkAllRead · function · L519-L525 — handleMarkAllRead = async ()
- handleDeleteAll · function · L527-L533 — handleDeleteAll = async ()
- handleNotificationClick · function · L535-L549 — handleNotificationClick = async (notification: AppNotification)
- handleDelete · function · L551-L558 — handleDelete = async (e: React.MouseEvent, id: string)
