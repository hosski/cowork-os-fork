# src/electron/utils/document-preview.ts

- CommandRunner · type · L14-L18 — type CommandRunner = ( command: string, args: string[], options?: { cwd?: string }, ) => Promise<{ stdout: string; stderr: string }>;
- BuildDocumentPreviewOptions · type · L20-L22 — type BuildDocumentPreviewOptions = { runCommand?: CommandRunner; };
- decodeXmlText · function · L24-L31 — function decodeXmlText(text: string): string
- stripXmlTags · function · L33-L37 — function stripXmlTags(xml: string): string
- htmlToText · function · L39-L43 — function htmlToText(html: string): string
- stripRtfToText · function · L45-L56 — function stripRtfToText(rtf: string): string
- extractOdtTextFromXml · function · L58-L68 — function extractOdtTextFromXml(xml: string): string
- buildDocxLikePreview · function · L70-L99 — async function buildDocxLikePreview(filePath: string, format: string): Promise<DocumentPreview>
- buildOdtPreview · function · L101-L122 — async function buildOdtPreview(filePath: string, format: string): Promise<DocumentPreview>
- convertDocWithTextutil · function · L124-L136 — async function convertDocWithTextutil( filePath: string, runCommand: CommandRunner, ): Promise<string | null>
- convertDocWithSoffice · function · L138-L163 — async function convertDocWithSoffice( filePath: string, runCommand: CommandRunner, ): Promise<string | null>
- buildDocPreview · function · L165-L192 — async function buildDocPreview( filePath: string, format: string, runCommand: CommandRunner, ): Promise<DocumentPreview>
- buildDocumentPreviewFromFile · function · L194-L252 — async function buildDocumentPreviewFromFile( filePath: string, options: BuildDocumentPreviewOptions = {}, ): Promise<DocumentPreview>
