# src/renderer/components/ComputerUseSettings.tsx

- ScreenStatus · type · L4-L4 — type ScreenStatus = "granted" | "denied" | "not-determined" | "unknown";
- ComputerUseStatus · interface · L6-L15 — interface ComputerUseStatus
- statusLabel · function · L17-L19 — function statusLabel(ok: boolean): string
- screenStatusLabel · function · L21-L32 — function screenStatusLabel(s: ScreenStatus): string
- ComputerUseSettings · function · L34-L242 — function ComputerUseSettings()
- openAccessibility · function · L72-L78 — openAccessibility = async ()
- openScreen · function · L80-L86 — openScreen = async ()
- endSession · function · L88-L98 — endSession = async ()
