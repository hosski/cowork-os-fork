# src/electron/utils/document-generators/pptx-generator.ts

- PresentationVisualMode · type · L20-L20 — type PresentationVisualMode = "work" | "editorial" | "playful" | "premium" | "technical";
- SlideType · type · L21-L35 — type SlideType = | "cover" | "content" | "image" | "quote" | "timeline" | "comparison" | "process" | "chart" | "table" | "section" | "product" | "metric" | "closing" | "blank";
- PresentationAsset · interface · L37-L42 — interface PresentationAsset
- SlideDataDefinition · interface · L44-L50 — interface SlideDataDefinition
- SlideDefinition · interface · L52-L74 — interface SlideDefinition
- PptxOptions · interface · L76-L104 — interface PptxOptions
- generatePPTX · function · L106-L127 — async function generatePPTX( outputPath: string, options: PptxOptions, ): Promise<{ success: boolean; path: string; size: number; slideCount: number }>
- generatePPTXWithArtifactTool · function · L129-L175 — async function generatePPTXWithArtifactTool( outputPath: string, options: PptxOptions, ): Promise<void>
- generatePPTXWithPptxGenJs · function · L811-L1158 — async function generatePPTXWithPptxGenJs(outputPath: string, options: PptxOptions): Promise<void>
- getItems · function · L843-L852 — getItems = (slideDef: SlideDefinition): string[]
- getSlideType · function · L854-L867 — getSlideType = (slideDef: SlideDefinition, index: number): SlideType
- addHeader · function · L869-L899 — addHeader = (slide: Any, slideDef: SlideDefinition, index: number): void
