# src/renderer/hooks/useVirtualList.ts

- VirtualItem · interface · L16-L21 — interface VirtualItem<T>
- UseVirtualListOptions · interface · L23-L42 — interface UseVirtualListOptions<T>
- UseVirtualListResult · interface · L44-L59 — interface UseVirtualListResult<T>
- shouldAutoScrollOnItemsChange · function · L61-L73 — function shouldAutoScrollOnItemsChange(options: { itemCountChanged: boolean; enabled: boolean; suppressAutoScrollOnItemsChange: boolean; isAtBottom: boolean; }): boolean
- computeOffsets · function · L79-L90 — function computeOffsets( count: number, getHeight: (index: number) => number, ): { offsets: number[]; totalHeight: number }
- findStartIndex · function · L96-L107 — function findStartIndex(offsets: number[], scrollTop: number): number
- useVirtualList · function · L113-L344 — function useVirtualList<T>(options: UseVirtualListOptions<T>): UseVirtualListResult<T>
- onScroll · function · L159-L174 — onScroll = ()
