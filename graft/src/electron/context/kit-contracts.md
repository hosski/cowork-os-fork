# src/electron/context/kit-contracts.ts

- KitScope · type · L1-L1 — type KitScope = "task" | "main-session" | "role" | "company-ops" | "heartbeat" | "bootstrap";
- KitMutability · type · L3-L3 — type KitMutability = "system_locked" | "user_owned" | "agent_suggested" | "agent_maintained";
- KitParser · type · L5-L11 — type KitParser = | "freeform" | "sectioned" | "kv-lines" | "checklist" | "decision-log" | "design-system";
- KitContract · interface · L13-L24 — interface KitContract
- getKitContract · function · L360-L362 — function getKitContract(file: string): KitContract | undefined
- isRoleKitFile · function · L364-L366 — function isRoleKitFile(file: string): boolean
