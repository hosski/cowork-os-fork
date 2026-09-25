# src/electron/control-plane/registerControlPlaneCoreMethods.ts

- requireString · function · L6-L12 — function requireString(value: unknown, field: string): string
- optionalString · function · L14-L17 — function optionalString(value: unknown): string | undefined
- optionalNumber · function · L19-L21 — function optionalNumber(value: unknown): number | undefined
- registerControlPlaneCoreMethods · function · L23-L406 — function registerControlPlaneCoreMethods(options: { server: ControlPlaneServer; db: Database.Database; requireScope: (client: Any, scope: "admin" | "read" | "write" | "operator") => void; }): void
