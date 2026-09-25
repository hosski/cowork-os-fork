# native/healthkit-bridge/Sources/HealthKitBridge/BridgeModels.swift

- BridgeErrorPayload · struct · L3-L7 — struct BridgeErrorPayload: Codable
- BridgeEnvelope · struct · L9-L21 — struct BridgeEnvelope<T: Codable>: Codable
- success · method · L14-L16 — static func success(_ data: T) -> BridgeEnvelope<T>
- failure · method · L18-L20 — static func failure(code: String, message: String, details: String? = nil) -> BridgeEnvelope<T>
- BridgeRequest · struct · L23-L31 — struct BridgeRequest: Codable
- PermissionSnapshot · struct · L33-L36 — struct PermissionSnapshot: Codable
- StatusData · struct · L38-L46 — struct StatusData: Codable
- AuthorizationData · struct · L48-L54 — struct AuthorizationData: Codable
- MetricPayload · struct · L56-L62 — struct MetricPayload: Codable
- RecordPayload · struct · L64-L71 — struct RecordPayload: Codable
- SyncData · struct · L73-L81 — struct SyncData: Codable
- WritebackItem · struct · L83-L92 — struct WritebackItem: Codable
- WriteResult · struct · L94-L97 — struct WriteResult: Codable
