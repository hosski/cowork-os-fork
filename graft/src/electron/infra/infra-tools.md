# src/electron/infra/infra-tools.ts

- InfraTools · class · L32-L768 — class InfraTools
- constructor · method · L33-L37 — constructor( private workspace: Workspace, private daemon: AgentDaemon, private taskId: string, )
- setWorkspace · method · L39-L41 — setWorkspace(workspace: Workspace): void
- getToolDefinitions · method · L43-L300 — static getToolDefinitions(settings?: InfraSettings): LLMTool[]
- executeTool · method · L305-L528 — async executeTool(toolName: string, args: Record<string, Any>): Promise<Any>
- getCategoryError · method · L530-L545 — private getCategoryError(toolName: string, settings: InfraSettings): string | null
- extractPreflightAmount · method · L547-L562 — private extractPreflightAmount(preflight: Any, settings: InfraSettings): bigint | null
- resolveEffectiveHardLimit · method · L564-L573 — private resolveEffectiveHardLimit(settings: InfraSettings): number
- createX402PaymentPolicy · method · L575-L597 — private createX402PaymentPolicy( settings: InfraSettings, preflight: X402CheckResult, opts: { approvedPaymentDetails?: X402PaymentDetails; effectiveHardLimit: number; }, ): X402PaymentPolicyEnvelope
- approveX402PaymentChallenge · method · L599-L667 — private async approveX402PaymentChallenge( challenge: X402PaymentChallenge, settings: InfraSettings, opts: { effectiveHardLimit: number; preflightPaymentDetails?: X402PaymentDetails; approvedPaymentDetails?: X402PaymentDetails; preflightApprovedWithoutExactDetails: boolean; }, ): Promise<boolean>
- validateX402PaymentChallenge · method · L669-L713 — private validateX402PaymentChallenge( challenge: X402PaymentChallenge, settings: InfraSettings, effectiveHardLimit: number, ): void
- extractPaymentDetailsAmount · method · L715-L718 — private extractPaymentDetailsAmount(details: X402PaymentDetails | undefined): bigint | null
- getPaymentDetailsMismatch · method · L720-L725 — private getPaymentDetailsMismatch( approved: X402PaymentDetails, actual: X402PaymentDetails, ): string | null
- formatPaymentApprovalMessage · method · L727-L742 — private formatPaymentApprovalMessage( challenge: X402PaymentChallenge, amount: bigint | null, ): string
- getHostAllowlistError · method · L744-L767 — private getHostAllowlistError(url: string, settings: InfraSettings): string | null
