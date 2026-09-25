# src/electron/gateway/infrastructure.test.ts

- _createMockDatabase · function · L30-L67 — function _createMockDatabase()
- createMockAdapter · function · L70-L87 — function createMockAdapter(connected = true): ChannelAdapter
- canSend · function · L367-L367 — canSend = (adapter: ChannelAdapter)
- RateLimitState · interface · L403-L408 — interface RateLimitState
- checkAndRecordMessage · function · L415-L469 — function checkAndRecordMessage( state: RateLimitState, now: number, ): { allowed: boolean; state: RateLimitState }
- QueueItem · interface · L526-L532 — interface QueueItem
- shouldProcess · function · L534-L538 — function shouldProcess(item: QueueItem, now: number): boolean
- processItem · function · L540-L552 — function processItem(item: QueueItem, success: boolean): QueueItem
- ScheduledItem · interface · L650-L654 — interface ScheduledItem
- findDueMessages · function · L656-L658 — function findDueMessages(items: ScheduledItem[], now: number): ScheduledItem[]
