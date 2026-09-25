# src/electron/tray/QuickInputWindow.ts

- QuickInputWindow · class · L14-L659 — class QuickInputWindow
- constructor · method · L23-L25 — constructor()
- setOnSubmit · method · L30-L32 — setOnSubmit(callback: (task: string, workspaceId?: string) => void): void
- setOnOpenMain · method · L37-L39 — setOnOpenMain(callback: () => void): void
- updateResponse · method · L44-L86 — updateResponse(text: string, isComplete: boolean = false): void
- showLoading · method · L91-L125 — showLoading(): void
- getCurrentQuestion · method · L130-L132 — getCurrentQuestion(): string
- expandWindow · method · L137-L160 — private expandWindow(): void
- collapseWindow · method · L165-L189 — private collapseWindow(): void
- show · method · L194-L208 — show(): void
- hide · method · L213-L225 — hide(): void
- toggle · method · L230-L236 — toggle(): void
- createWindow · method · L241-L534 — private createWindow(): void
- resetForNewTask · method · L539-L560 — private resetForNewTask(): void
- copyResponse · method · L565-L595 — private async copyResponse(): Promise<void>
- submitFromWindow · method · L600-L627 — private async submitFromWindow(): Promise<void>
- setupIpcHandlers · method · L632-L648 — private setupIpcHandlers(): void
- destroy · method · L653-L658 — destroy(): void
