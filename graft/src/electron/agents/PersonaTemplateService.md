# src/electron/agents/PersonaTemplateService.ts

- PersonaTemplateServiceConfig · interface · L17-L19 — interface PersonaTemplateServiceConfig
- isPackagedElectronApp · function · L21-L29 — function isPackagedElectronApp(): boolean
- PersonaTemplateService · class · L43-L323 — class PersonaTemplateService
- constructor · method · L48-L59 — constructor( private agentRoleRepo: AgentRoleRepository, config?: PersonaTemplateServiceConfig, )
- initialize · method · L61-L69 — async initialize(): Promise<void>
- loadTemplates · method · L71-L101 — private loadTemplates(): void
- validateTemplate · method · L103-L120 — private validateTemplate(template: PersonaTemplate): boolean
- listTemplates · method · L125-L138 — listTemplates(filter?: { category?: PersonaTemplateCategory; tag?: string }): PersonaTemplate[]
- getTemplate · method · L143-L145 — getTemplate(id: string): PersonaTemplate | undefined
- getCategories · method · L150-L163 — getCategories(): Array<{ id: PersonaTemplateCategory; label: string; count: number }>
- previewActivation · method · L168-L183 — previewActivation(templateId: string): { roleName: string; displayName: string; skills: PersonaTemplateSkillRef[]; proactiveTasks: Array<never>; } | null
- activate · method · L188-L270 — activate(request: ActivatePersonaTemplateRequest): PersonaTemplateActivationResult
- buildSoulData · method · L275-L298 — private buildSoulData(template: PersonaTemplate): Record<string, unknown>
- generateRoleName · method · L303-L322 — private generateRoleName(templateId: string, companyId?: string): string
- getPersonaTemplateService · function · L328-L339 — function getPersonaTemplateService( agentRoleRepo?: AgentRoleRepository, config?: PersonaTemplateServiceConfig, ): PersonaTemplateService
