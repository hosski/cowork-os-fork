# src/electron/agent/skills/presentation.ts

- PresentationSlideType · type · L6-L20 — type PresentationSlideType = | "cover" | "content" | "image" | "quote" | "timeline" | "comparison" | "process" | "chart" | "table" | "section" | "product" | "metric" | "closing" | "blank";
- SlideContent · interface · L22-L52 — interface SlideContent
- PresentationOptions · interface · L54-L75 — interface PresentationOptions
- PresentationBuilder · class · L81-L173 — class PresentationBuilder
- constructor · method · L82-L82 — constructor(private workspace: Workspace)
- create · method · L84-L145 — async create( outputPath: string, slides: SlideContent[], options: PresentationOptions = {}, ): Promise<void>
- createMarkdownSlides · method · L150-L172 — private async createMarkdownSlides(outputPath: string, slides: SlideContent[]): Promise<void>
