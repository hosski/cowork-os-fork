# scripts/qa/skills-content-lib.mjs

- isNonEmptyString · function · L14-L16 — function isNonEmptyString(value)
- normalizeText · function · L18-L24 — function normalizeText(value)
- tokenize · function · L26-L30 — function tokenize(value)
- jaccardSimilarity · function · L32-L42 — function jaccardSimilarity(aText, bText)
- inferComplexity · function · L44-L48 — function inferComplexity(promptLength)
- resolveSkillBaseDirForValidation · function · L50-L82 — function resolveSkillBaseDirForValidation(skillPath, skillId, prompt = "")
- validateSkillManifest · function · L84-L219 — function validateSkillManifest(skillPath, skill, options = {})
- collectSkills · function · L221-L233 — function collectSkills(skillsDir)
- validateSkillsContent · function · L235-L299 — function validateSkillsContent({ skillsDir, enforcePaths = false })
- printValidationSummary · function · L301-L316 — function printValidationSummary(result)
