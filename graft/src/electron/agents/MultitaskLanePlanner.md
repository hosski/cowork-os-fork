# src/electron/agents/MultitaskLanePlanner.ts

- MultitaskLane · interface · L16-L19 — interface MultitaskLane
- MultitaskLanePlannerOptions · interface · L21-L30 — interface MultitaskLanePlannerOptions
- normalizeLaneCount · function · L68-L74 — function normalizeLaneCount(value?: number): number
- cleanLaneText · function · L76-L78 — function cleanLaneText(value: string): string
- parseExplicitLanes · function · L80-L97 — function parseExplicitLanes(prompt: string, laneCount: number): MultitaskLane[] | null
- parseJsonLanes · function · L99-L128 — function parseJsonLanes(text: string, laneCount: number): MultitaskLane[] | null
- fallbackLanes · function · L130-L135 — function fallbackLanes(prompt: string, laneCount: number): MultitaskLane[]
- buildJevLaneQuestions · function · L139-L153 — function buildJevLaneQuestions(): Record<string, JevNoulQuestion>
- readJevNoulAnswer · function · L155-L159 — function readJevNoulAnswer(answers: Record<string, JevAnswer>, id: string): number | null
- MultitaskLanePlanner · class · L161-L308 — class MultitaskLanePlanner
- plan · method · L162-L191 — static async plan( prompt: string, options: MultitaskLanePlannerOptions = {}, ): Promise<MultitaskLane[]>
- planWithJev · method · L193-L259 — private static async planWithJev( prompt: string, laneCount: number, provider: DecisionProvider, model: string, decisionService?: DecisionService, ): Promise<MultitaskLane[] | null>
- planWithLLM · method · L261-L307 — private static async planWithLLM( prompt: string, laneCount: number, provider: LLMProvider, modelId: string, ): Promise<MultitaskLane[] | null>
