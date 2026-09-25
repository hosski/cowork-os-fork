# native/healthkit-bridge/Package.swift

- package · variable · L4-L19 — let package = Package( name: "HealthKitBridge", platforms: [.macOS(.v13)], products: [ .executable(name: "HealthKitBridge", targets: ["HealthKitBridge"]), ], targets: [ .executableTarget( name: "HealthKitBridge", path: "Sources/HealthKitBridge", swiftSettings: [ .unsafeFlags(["-parse-as-library"]) ] ), ] )
