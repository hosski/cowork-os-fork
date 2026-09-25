# src/electron/memory/PlaybookSkillPromoter.ts

- PromotionCandidate · interface · L27-L36 — interface PromotionCandidate
- PromotionResult · interface · L38-L43 — interface PromotionResult
- extractTaskDescription · function · L64-L78 — function extractTaskDescription(snippet: string): string
- extractTools · function · L83-L90 — function extractTools(snippet: string): string[]
- extractRequest · function · L95-L99 — function extractRequest(snippet: string): string
- generateSkillId · function · L104-L113 — function generateSkillId(description: string): string
- generatePromptTemplate · function · L118-L139 — function generatePromptTemplate(candidate: PromotionCandidate): string
- PlaybookSkillPromoter · class · L143-L303 — class PlaybookSkillPromoter
- maybePropose · method · L153-L184 — static async maybePropose(workspaceId: string, workspacePath: string): Promise<PromotionResult>
- findCandidates · method · L189-L250 — static findCandidates( workspaceId: string, threshold = DEFAULT_PROMOTION_THRESHOLD, ): PromotionCandidate[]
- proposeSkill · method · L255-L302 — private static async proposeSkill( candidate: PromotionCandidate, proposalService: SkillProposalService, ): Promise<PromotionResult>
