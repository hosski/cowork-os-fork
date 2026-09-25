# src/renderer/components/SkillParameterModal.tsx

- SkillParameterFormValue · type · L4-L4 — type SkillParameterFormValue = string | number | boolean;
- SkillParameterFormValues · type · L5-L5 — type SkillParameterFormValues = Record<string, SkillParameterFormValue>;
- SkillParameterModalProps · interface · L7-L12 — interface SkillParameterModalProps
- normalizeTemplateDefault · function · L16-L19 — function normalizeTemplateDefault(value: unknown): unknown
- collectSkillParameterValues · function · L21-L47 — function collectSkillParameterValues( skill: CustomSkill, values: SkillParameterFormValues, touched: Record<string, boolean> = {}, ): SkillParameterFormValues
- expandSkillPrompt · function · L49-L61 — function expandSkillPrompt(skill: CustomSkill, values: SkillParameterFormValues): string
- SkillParameterModal · function · L63-L257 — function SkillParameterModal({ skill, onSubmit, onAskInChat, onCancel, }: SkillParameterModalProps)
- handleEscape · function · L103-L107 — handleEscape = (e: KeyboardEvent)
- handleChange · function · L112-L115 — handleChange = (name: string, value: string | number | boolean)
- handleSubmit · function · L117-L120 — handleSubmit = (e: React.FormEvent)
- handleAskInChat · function · L122-L125 — handleAskInChat = ()
- isValid · function · L127-L144 — isValid = ()
- renderInput · function · L146-L209 — renderInput = (param: SkillParameter, index: number)
