/**
 * Grill-Tab Engine: Preflight interrogation + brief synthesis
 *
 * Pure, failure-safe interrogation engine for task planning:
 * 1. Ask one high-leverage decision at a time (with recommended answer)
 * 2. Walk the decision tree only for settled prerequisites
 * 3. Synthesize a faithful execution brief before sending
 *
 * Ported from: Hermes grill-tab plugin (Python → TypeScript)
 * No external dependencies. Deterministic. Failure-safe.
 */

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface InterrogateResponse {
  done: boolean;
  reason: string | null;
  question: string | null;
  recommended: string | null;
  options: string[];
  category: "goal" | "deliverable" | "scope" | "verification" | "architecture" | null;
  settled_from_recommendation: boolean;
  source: string;
  progress?: { current: number; estimated_max: number };
  latency_ms?: number;
  model?: string;
}

export interface BriefResponse {
  brief: string;
  source: "model" | "template";
  latency_ms?: number;
  model?: string;
}

export interface GrillPayload {
  text: string; // Original intent/draft
  ladder?: Array<{ question?: string; answer?: string; category?: string; recommended?: string }>; // Completed rungs
  cwd?: string; // Current working directory (for project context)
  profile?: string; // User profile (for memory context)
  force?: boolean; // Force another rung (ignore done=true from last model call)
  attachments?: Array<{ name?: string; kind?: string; content?: string; data_url?: string; path?: string }>; // Attached files/media
  session_history?: Array<{ role?: string; content?: string }>; // Prior conversation
}

// ============================================================================
// Constants
// ============================================================================

const INTERROGATE_TIMEOUT = 25000; // ms
const BRIEF_TIMEOUT = 35000; // ms
const INTERROGATE_MAX_TOKENS = 2048;
const BRIEF_MAX_TOKENS = 4096;
const CATEGORIES = ["goal", "deliverable", "scope", "verification", "architecture"] as const;
const DEFERRAL_RE = /\b(you decide|your call|which is simplest|what's|what is simplest|simplest|not sure|unsure|whatever you recommend|up to you)\b/i;

const INTERROGATE_SYSTEM = `You are the Grill preflight engine: before an autonomous agent starts on the user's draft, you surface the one decision most likely to change the outcome.
The draft may be anything — research, writing, planning, operations, design, analysis, personal errands, or code. Do not assume software.
Model the intent as a decision tree. Ask exactly one decision from the current frontier: only a decision whose prerequisites are already known.
Every question must include a short recommended answer and, where natural, 2–4 short options.
Facts are the agent's job: do not ask for facts that can be inspected or looked up. Ask decisions only.
Skip-if-same-plan rule: if every plausible answer leads to the same work, do not ask. Hyper-specific questions that don't reshape the plan (e.g. "What color?" when color is not a strategic choice) are also skip-eligible.
If the prior answer is a question, hesitation, "you decide", or asks which is simplest, treat the prior recommendation as settled. Do not re-ask or rephrase it; set settled_from_recommendation true.
Trivial greetings, thanks, and tiny underspecified intents must return done=true immediately with a one-line reason; do not manufacture questions.
Strongest-leverage-first: always prioritize the highest-leverage unanswered category: goal (the outcome that makes this worthwhile) → deliverable (shape, medium, audience) → scope (what is in and out) → verification (how to know it is right) → architecture (only when clearly code-oriented). Ask only the frontier decision that would reshape downstream work most. Do not repeat a category unless the user explicitly opened a new branch.
After 25+ rungs or if every major category (goal, deliverable, scope, verification, architecture) has received at least one answer, return done=true. The user has provided enough direction to execute.
Analyze attached media/files using their supplied descriptions or previews, and build directly on prior conversation context instead of re-asking settled information.
Never ask generic checklist questions (tone, length, language, tests, error handling) unless the answer would fundamentally change the plan or the user explicitly asked. Questions must be 18 words or fewer, in the user's language.
Return JSON only, with exactly: done (boolean), reason (string or null), question (string or null), recommended (string or null), options (array), category (goal|deliverable|scope|verification|architecture|null), settled_from_recommendation (boolean).`;

const BRIEF_SYSTEM = `Turn the original intent and the completed ladder into an execution brief for an autonomous agent. Return markdown only.
Fidelity comes first. The brief is a faithful restatement of what the user asked for and decided, not an improved version of it:
- Goal restates the user's original intent as an outcome, in the user's own terms and at the user's stated ambition. Do not enlarge it.
- Settled means: stated in the original intent, answered in the ladder, or a recommendation the user accepted (including by deferring with "you decide" or similar). Nothing else is settled.
- Do not add deliverables, steps, audiences, channels, features, or polish the user did not ask for. Do not change the medium, tone, length, or language of what they asked for.
- Every line under Settled decisions must trace to a settled item. Write it as a directive, not as question and answer.
- Anything the work still needs that is not settled goes under Assumptions, phrased conservatively: pick the least surprising, smallest option, never the most ambitious one.
- Never invent facts, numbers, names, or constraints that were not given.
- Background about the user (memory, project notes, prior conversation) is context, not a decision. Use it only to phrase things in the user's terms. Never promote it into Goal, Settled decisions, or Constraints, and never use it to guess a target (repository, folder, file, account, brand) the user did not name — an unnamed target is an Assumption: the current working directory, or the item the user pointed at.
Use these sections, with these exact headings, only when they have content: ## Goal, ## Success criteria, ## Deliverable, ## Scope & non-goals, ## Settled decisions, ## Constraints, ## Verify before reporting done, ## Assumptions to make explicitly (do not ask), ## Directive.
Constraints holds only limits the user stated. Success criteria must be observable by the user. Verify steps must be things the agent can actually check before reporting.
Use plain, domain-appropriate language; do not use software vocabulary (architecture, tests, deploy, implementation) unless the intent itself is about code.
Write the body in the language the user wrote in; the headings stay in English.
Be concise — most briefs fit in 150–250 words — but never drop a settled decision to save space.
Analyze attached media/files using their supplied descriptions or previews, and treat prior conversation context as established context.
The Directive must say: Work autonomously. Do not re-ask anything above. Ask only if blocked by something outside this brief.`;

// ============================================================================
// Utility Functions
// ============================================================================

function cleanText(value: any): string {
  return typeof value === "string" ? value.trim() : "";
}

function stripThinking(text: string): string {
  if (typeof text !== "string") return "";
  return text.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
}

function normalizeCategory(cat: any): string {
  const val = cleanText(cat).toLowerCase();
  if (!val) return "goal";

  // Direct match
  const validCategories: Array<"goal" | "deliverable" | "scope" | "verification" | "architecture"> = [
    "goal",
    "deliverable",
    "scope",
    "verification",
    "architecture",
  ];

  if (validCategories.includes(val as any)) return val;

  // Word-boundary matching
  for (const canonical of validCategories) {
    if (new RegExp(`\\b${canonical}\\b`).test(val)) return canonical;
  }

  // Prefix matching
  for (const canonical of validCategories) {
    if (new RegExp(`\\b${canonical.slice(0, 4)}[a-z]*\\b`).test(val)) return canonical;
  }

  // Semantic mapping
  if (/\b(outcome|purpose|target|vision|objective)\b/.test(val)) return "goal";
  if (/\b(output|format|surface|artifact|product)\b/.test(val)) return "deliverable";
  if (/\b(scope|boundary|constraint|limit|time|budget)\b/.test(val)) return "scope";
  if (/\b(test|qa|check|validation|verify|metric|signal)\b/.test(val)) return "verification";
  if (/\b(tech|stack|code|infra|database|backend|arch)\b/.test(val)) return "architecture";

  return "goal";
}

function jsonObject(text: string): Record<string, any> | null {
  if (typeof text !== "string") return null;
  const cleaned = stripThinking(text);

  // 1. Direct JSON parse
  try {
    const val = JSON.parse(cleaned);
    if (typeof val === "object" && val !== null) return val;
  } catch {
    // Continue to next strategy
  }

  // 2. Markdown fence ```json ... ```
  const fenceMatch = cleaned.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/i);
  if (fenceMatch) {
    try {
      const val = JSON.parse(fenceMatch[1]);
      if (typeof val === "object" && val !== null) return val;
    } catch {
      // Continue
    }
  }

  // 3. Scan for first valid JSON object
  const regex = /\{/g;
  let match;
  while ((match = regex.exec(cleaned)) !== null) {
    try {
      const val = JSON.parse(cleaned.slice(match.index));
      if (typeof val === "object" && val !== null) {
        // Prefer if it looks like grill schema
        if ("question" in val || "done" in val || "recommended" in val) return val;
      }
    } catch {
      // Continue to next {
    }
  }

  return null;
}

function emptyInterrogate(reason: string = "engine unavailable"): InterrogateResponse {
  return {
    done: true,
    reason,
    question: null,
    recommended: null,
    options: [],
    category: null,
    settled_from_recommendation: false,
    source: "fallback",
  };
}

function forcedQuestion(): InterrogateResponse {
  return {
    done: false,
    reason: null,
    question: "What outcome would make this worthwhile?",
    recommended: "Choose the simplest useful outcome.",
    options: ["A useful result", "A decision-ready result", "Other"],
    category: "goal",
    settled_from_recommendation: false,
    source: "fallback",
  };
}

function parseInterrogateResponse(text: string): InterrogateResponse {
  const raw = jsonObject(text);
  if (!raw || typeof raw !== "object") {
    return emptyInterrogate("engine returned an unusable response");
  }

  const doneVal = raw.done;
  const question = cleanText(raw.question);

  // Explicit done=true, or done is not False and there is no question
  if (doneVal === true || (doneVal !== false && !question)) {
    const reason = cleanText(raw.reason) || "Nothing critical left.";
    return {
      ...emptyInterrogate(reason),
      settled_from_recommendation: Boolean(raw.settled_from_recommendation),
      source: "model",
    };
  }

  if (!question) {
    return emptyInterrogate("engine returned an unusable response");
  }

  // Enforce 18-word limit
  const words = question.split(/\s+/);
  const finalQuestion = words.slice(0, 18).join(" ");

  // Clean options
  let cleanOptions: string[] = [];
  if (Array.isArray(raw.options)) {
    cleanOptions = raw.options.map((item: any) => cleanText(item)).filter((item) => item);
  }
  cleanOptions = cleanOptions.slice(0, 3); // Cap at 3 to leave room for "Other"
  if (!cleanOptions.includes("Other")) {
    cleanOptions.push("Other");
  }

  let recommended = cleanText(raw.recommended);
  if (!recommended && cleanOptions.length > 0) {
    recommended = cleanOptions[0];
  }
  if (!recommended) {
    recommended = "Choose the simplest useful outcome.";
  }

  const category = normalizeCategory(raw.category) as
    | "goal"
    | "deliverable"
    | "scope"
    | "verification"
    | "architecture";

  return {
    done: false,
    reason: null,
    question: finalQuestion,
    recommended,
    options: cleanOptions,
    category,
    settled_from_recommendation: Boolean(raw.settled_from_recommendation),
    source: "model",
  };
}

function parseBriefResponse(text: string): string {
  if (typeof text !== "string") return "";

  let clean = stripThinking(text);
  // Remove markdown fence
  clean = clean.replace(/^```(?:markdown|md)?\s*|```\s*$/gi, "").trim();

  // Normalize Goal heading
  clean = clean.replace(/^#+\s+Goal\b/im, "## Goal");

  if (!clean.includes("## Goal")) {
    return "";
  }

  // Ensure Directive is present
  if (!/^##\s+Directive\b/im.test(clean)) {
    clean += "\n\n## Directive\nWork autonomously. Do not re-ask anything above. Ask only if blocked by something outside this brief.";
  }

  return clean.slice(0, 12000).trim();
}

function renderRungs(ladder: any): Array<{ question: string; answer: string; category: string; recommended: string }> {
  if (!Array.isArray(ladder)) return [];

  const result: Array<{ question: string; answer: string; category: string; recommended: string }> = [];
  for (const rung of ladder) {
    if (typeof rung !== "object" || rung === null) continue;

    const question = cleanText(rung.question);
    const answer = cleanText(rung.answer);
    const category = cleanText(rung.category);
    const recommended = cleanText(rung.recommended);

    if (question || answer) {
      result.push({ question, answer, category, recommended });
    }
  }

  return result;
}

function renderAnswer(rung: any): string {
  const answer = cleanText(rung.answer || "");
  const recommended = cleanText(rung.recommended || "");

  if (recommended && (!answer || DEFERRAL_RE.test(answer))) {
    return `${recommended} (recommendation accepted by the user${answer ? `: ${JSON.stringify(answer)}` : ""})`;
  }

  return answer;
}

function isDeferral(rungs: Array<any>): boolean {
  return rungs.length > 0 && DEFERRAL_RE.test(cleanText(rungs[rungs.length - 1].answer || ""));
}

function renderSessionHistory(sessionHistory: any): string | null {
  if (!Array.isArray(sessionHistory)) return null;

  const messages: string[] = [];
  for (const item of sessionHistory) {
    if (typeof item !== "object" || item === null) continue;

    const role = cleanText(item.role).toLowerCase();
    const content = cleanText(item.content);

    if (["user", "assistant"].includes(role) && content) {
      messages.push(`${role.charAt(0).toUpperCase() + role.slice(1)}: ${content.slice(0, 2000)}`);
    }
  }

  return messages.length > 0 ? messages.join("\n") : null;
}

function renderAttachmentDescription(attachment: any): string | null {
  const name = cleanText(attachment.name) || "unnamed attachment";
  const kind = cleanText(attachment.kind).toLowerCase();

  if (!["image", "file"].includes(kind)) return null;

  let preview = "";
  const content = cleanText(attachment.content);

  if (content) {
    preview = content.slice(0, 2000);
  } else {
    const dataUrl = cleanText(attachment.data_url);
    if (dataUrl.startsWith("data:")) {
      const mediaType = dataUrl.slice(5).split(";")[0].split(",")[0] || "unknown";
      preview = `data URL (${mediaType})`;
    } else {
      const path = cleanText(attachment.path);
      preview = path ? `path: ${path}` : "no preview supplied";
    }
  }

  return `${name} (${kind}): ${preview}`;
}

function renderAttachments(attachments: any): string | null {
  if (!Array.isArray(attachments)) return null;

  const descriptions: string[] = [];
  for (const item of attachments) {
    if (typeof item !== "object" || item === null) continue;
    const desc = renderAttachmentDescription(item);
    if (desc) descriptions.push(`- ${desc}`);
  }

  return descriptions.length > 0 ? descriptions.join("\n") : null;
}

function contextMessage(
  text: string,
  ladder: any,
  cwd: any,
  profile: any,
  attachments?: any,
  sessionHistory?: any,
): string {
  const parts: string[] = [];

  // Today's date
  const today = new Date().toISOString().split("T")[0];
  parts.push(`Today: ${today}`);

  // Project context (simplified — no filesystem access)
  // In real implementation, this would detect git repo, pyproject.toml, etc.
  if (typeof cwd === "string" && cwd.trim()) {
    parts.push(`Project hint: ${cwd}`);
  }

  // Memories (simplified — no filesystem access)
  // In real CoWork implementation, this would read MEMORY.md, USER.md from storage

  // Prior conversation context
  const history = renderSessionHistory(sessionHistory);
  if (history) {
    parts.push(`Prior conversation context:\n${history}`);
  }

  // Attached media/files
  const attachmentsText = renderAttachments(attachments);
  if (attachmentsText) {
    parts.push(`Attached media/files:\n${attachmentsText}`);
  }

  // Original intent
  parts.push(`Original intent:\n${cleanText(text) || "(empty)"}`);

  // Completed ladder
  const rungs = renderRungs(ladder);
  if (rungs.length > 0) {
    const rendered = rungs
      .map((r) => `- [${r.category || "unknown"}] Q: ${r.question}\n  A: ${renderAnswer(r)}`)
      .join("\n");
    parts.push(`Completed ladder:\n${rendered}`);
  }

  // Deferral flag
  if (isDeferral(rungs)) {
    parts.push("The last answer is a deferral. Adopt the prior recommendation as settled and set settled_from_recommendation=true.");
  }

  return parts.join("\n\n");
}

// ============================================================================
// Public API: Build Messages, Interrogate, Brief
// ============================================================================

export function buildInterrogateMessages(
  text: string,
  ladder?: any,
  cwd?: any,
  profile?: string,
  force: boolean = false,
  attachments?: any,
  sessionHistory?: any,
): Array<{ role: string; content: string }> {
  const rungs = renderRungs(ladder);
  const rungCount = rungs.length;

  let instruction: string;
  if (rungCount >= 20) {
    instruction = "STOP. You have received 20+ answers. Return done=true with reason 'Sufficient decisions made to execute.'";
  } else if (force) {
    instruction = "The user forced another rung. Return a question, never done=true.";
  } else {
    instruction = "Return the next frontier decision.";
  }

  const userContent = `${contextMessage(text, ladder, cwd, profile, attachments, sessionHistory)}\n\n${instruction}`;

  return [
    { role: "system", content: INTERROGATE_SYSTEM },
    { role: "user", content: userContent },
  ];
}

export function buildBriefMessages(
  text: string,
  ladder?: any,
  cwd?: any,
  profile?: string,
  attachments?: any,
  sessionHistory?: any,
): Array<{ role: string; content: string }> {
  return [
    { role: "system", content: BRIEF_SYSTEM },
    { role: "user", content: contextMessage(text, ladder, cwd, profile, attachments, sessionHistory) },
  ];
}

export function localTemplateBrief(
  text: string,
  ladder?: any,
  attachments?: any,
  sessionHistory?: any,
): string {
  const rungs = renderRungs(ladder);
  const decisions =
    rungs
      .filter((r) => r.answer)
      .map((r) => `- ${r.category || "Decision"}: ${r.answer}`)
      .join("\n") || "- No decisions were settled before launch.";

  const contextNotes: string[] = [];
  const attachmentsText = renderAttachments(attachments);
  if (attachmentsText) {
    contextNotes.push(`Attached media/files to analyze:\n${attachmentsText}`);
  }
  if (renderSessionHistory(sessionHistory)) {
    contextNotes.push("Prior conversation context was provided and should guide the work.");
  }
  const constraints = contextNotes.length > 0 ? contextNotes.map((n) => `- ${n}`).join("\n") : "- None stated.";

  return `## Goal
${(cleanText(text) || "Produce the requested outcome.").trim()}

## Success criteria
- The result directly addresses the stated intent.

## Deliverable
- Choose the smallest useful deliverable shape and state where it lands.

## Scope & non-goals
- Limit work to the stated intent; do not expand scope without evidence.

## Settled decisions
${decisions}

## Constraints
${constraints}

## Verify before reporting done
- Check the deliverable against the stated success criteria.

## Assumptions to make explicitly (do not ask)
- Make the smallest reversible assumptions needed to proceed.

## Directive
Work autonomously. Do not re-ask anything above. Ask only if blocked by something outside this brief.`;
}

export type LLMInvoker = (options: {
  messages: Array<{ role: string; content: string }>;
  temperature: number;
  max_tokens: number;
  timeout: number;
  is_json?: boolean;
}) => Promise<string | { content?: string; text?: string; model?: string }>;

/**
 * Interrogate: Ask one preflight decision, handling all failures gracefully.
 *
 * @param payload - User intent + ladder + context
 * @param llm - LLM invoker function (or null to use stubbed responses)
 * @returns Interrogate response with question or done=true
 */
export async function interrogate(payload: GrillPayload | any, llm?: LLMInvoker | null): Promise<InterrogateResponse> {
  const started = Date.now();
  const data: GrillPayload = (typeof payload === "object" && payload !== null ? payload : {}) as GrillPayload;
  const text = cleanText(data.text);
  const force = Boolean(data.force);

  let response: InterrogateResponse;

  try {
    if (!text) {
      response = emptyInterrogate("empty intent");
    } else {
      const messages = buildInterrogateMessages(text, data.ladder, data.cwd, data.profile, force, data.attachments, data.session_history);

      if (!llm) {
        // Stubbed response for testing/demo
        response = forcedQuestion();
      } else {
        const result = await llm({
          messages,
          temperature: 0.2,
          max_tokens: INTERROGATE_MAX_TOKENS,
          timeout: INTERROGATE_TIMEOUT,
          is_json: true,
        });

        const rawText = typeof result === "string" ? result : result?.content || result?.text || "";
        response = parseInterrogateResponse(rawText);

        // Check for deferral
        const rungs = renderRungs(data.ladder);
        if (isDeferral(rungs) && !response.done) {
          response.settled_from_recommendation = true;
        }
      }
    }
  } catch (error) {
    response = force ? forcedQuestion() : emptyInterrogate("engine unavailable");
  }

  // Progress tracking
  const rungs = renderRungs(data.ladder);
  const currentRung = rungs.length;
  const estimatedMax = 25;

  return {
    ...response,
    progress: { current: currentRung, estimated_max: estimatedMax },
    latency_ms: Date.now() - started,
    model: "grill-tab/1.0",
  };
}

/**
 * Brief: Synthesize an execution brief from intent + ladder.
 * Falls back to local template if LLM fails.
 *
 * @param payload - User intent + ladder + context
 * @param llm - LLM invoker function (or null to use template)
 * @returns Brief markdown + source (model or template)
 */
export async function brief(payload: GrillPayload | any, llm?: LLMInvoker | null): Promise<BriefResponse> {
  const started = Date.now();
  const data: GrillPayload = (typeof payload === "object" && payload !== null ? payload : {}) as GrillPayload;
  const text = cleanText(data.text);

  let result: BriefResponse;

  try {
    if (!text) {
      throw new Error("empty intent");
    }

    if (!llm) {
      throw new Error("no LLM provided");
    }

    const messages = buildBriefMessages(text, data.ladder, data.cwd, data.profile, data.attachments, data.session_history);
    const llmResult = await llm({
      messages,
      temperature: 0.2,
      max_tokens: BRIEF_MAX_TOKENS,
      timeout: BRIEF_TIMEOUT,
      is_json: false,
    });

    const rawText = typeof llmResult === "string" ? llmResult : llmResult?.content || llmResult?.text || "";
    const parsed = parseBriefResponse(rawText);

    if (!parsed) {
      throw new Error("unusable brief");
    }

    result = { brief: parsed, source: "model" };
  } catch (error) {
    // Fallback to local template
    result = {
      brief: localTemplateBrief(text, data.ladder, data.attachments, data.session_history),
      source: "template",
    };
  }

  return {
    ...result,
    latency_ms: Date.now() - started,
    model: "grill-tab/1.0",
  };
}
