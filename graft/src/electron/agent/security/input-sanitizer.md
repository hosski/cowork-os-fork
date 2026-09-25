# src/electron/agent/security/input-sanitizer.ts

- EncodedContentResult · interface · L15-L19 — interface EncodedContentResult
- ImpersonationResult · interface · L21-L25 — interface ImpersonationResult
- ContentInjectionResult · interface · L27-L31 — interface ContentInjectionResult
- CodeInjectionResult · interface · L33-L37 — interface CodeInjectionResult
- SanitizationReport · interface · L39-L45 — interface SanitizationReport
- InputSanitizer · class · L47-L371 — class InputSanitizer
- analyze · method · L113-L138 — static analyze(input: string): SanitizationReport
- detectEncodedContent · method · L143-L195 — static detectEncodedContent(input: string): EncodedContentResult
- detectImpersonation · method · L200-L212 — static detectImpersonation(input: string): ImpersonationResult
- detectContentInjection · method · L217-L224 — static detectContentInjection(input: string): ContentInjectionResult
- sanitizeCodeForReview · method · L230-L248 — static sanitizeCodeForReview(code: string): CodeInjectionResult
- addSecurityContext · method · L254-L279 — static addSecurityContext(input: string, report: SanitizationReport): string
- containsInjectionPatterns · method · L284-L286 — private static containsInjectionPatterns(text: string): boolean
- sanitizeMemoryContent · method · L292-L314 — static sanitizeMemoryContent(memory: string): string
- validateSkillGuidelines · method · L319-L370 — static validateSkillGuidelines(guidelines: string): { valid: boolean; issues: string[]; sanitized: string; }
