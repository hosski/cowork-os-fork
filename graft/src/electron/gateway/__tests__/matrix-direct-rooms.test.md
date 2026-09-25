# src/electron/gateway/__tests__/matrix-direct-rooms.test.ts

- MockMatrixClient · interface · L15-L17 — interface MockMatrixClient
- createMockMatrixAdapter · function · L20-L74 — function createMockMatrixAdapter()
- client · method · L28-L30 — get client()
- client · method · L31-L33 — set client(c: MockMatrixClient | null)
- directRooms · method · L35-L37 — get directRooms()
- directRooms · method · L38-L40 — set directRooms(rooms: Set<string> | null)
- getDirectRooms · method · L45-L65 — async getDirectRooms(): Promise<Set<string> | null>
- determineIsGroup · method · L67-L72 — determineIsGroup(roomId: string, directRoomsSet: Set<string> | null): boolean | undefined
- createMatrixMessage · function · L201-L218 — function createMatrixMessage( eventId: string, roomId: string, sender: string, body: string, isGroup?: boolean, )
