# native/location-helper-macos/Package.swift

- package · variable · L4-L19 — let package = Package( name: "CoWorkLocationHelper", platforms: [.macOS(.v13)], products: [ .executable(name: "CoWorkLocationHelper", targets: ["CoWorkLocationHelper"]), ], targets: [ .executableTarget( name: "CoWorkLocationHelper", path: "Sources/CoWorkLocationHelper", swiftSettings: [ .unsafeFlags(["-parse-as-library"]) ] ), ] )
