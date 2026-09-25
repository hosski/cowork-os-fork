# src/electron/ipc/image-viewer-ocr.ts

- sanitizeOcrOutput · function · L17-L26 — sanitizeOcrOutput = (text: string): string
- isTesseractInstalled · function · L28-L48 — isTesseractInstalled = async (): Promise<boolean>
- resolveImageOcrChars · function · L50-L56 — resolveImageOcrChars = (rawMaxChars: number | undefined): number
- shouldRunImageOcr · function · L58-L69 — shouldRunImageOcr = (options: { enableImageOcr?: boolean; extension: string; fileSizeBytes: number; }): boolean
- runOcrFromImagePath · function · L71-L97 — runOcrFromImagePath = async (imagePath: string, maxChars: number): Promise<string | null>
- resetOcrBinaryCache · function · L99-L103 — resetOcrBinaryCache = ()
