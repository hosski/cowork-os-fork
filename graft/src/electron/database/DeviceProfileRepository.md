# src/electron/database/DeviceProfileRepository.ts

- DeviceProfile · interface · L3-L12 — interface DeviceProfile
- DeviceProfileRepository · class · L14-L98 — class DeviceProfileRepository
- constructor · method · L15-L15 — constructor(private db: Database.Database)
- upsert · method · L17-L57 — upsert(deviceId: string, data: Partial<Omit<DeviceProfile, "deviceId" | "createdAt">>): void
- get · method · L59-L65 — get(deviceId: string): DeviceProfile | null
- list · method · L67-L72 — list(): DeviceProfile[]
- updateCustomName · method · L74-L78 — updateCustomName(deviceId: string, name: string): void
- updateLastSeen · method · L80-L84 — updateLastSeen(deviceId: string, timestamp: number): void
- mapRow · method · L86-L97 — private mapRow(row: any): DeviceProfile
