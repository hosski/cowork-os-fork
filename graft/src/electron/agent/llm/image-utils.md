# src/electron/agent/llm/image-utils.ts

- guessImageMimeType · function · L23-L33 — function guessImageMimeType(filePath: string): LLMImageMimeType | null
- isSupportedImageFile · function · L36-L38 — function isSupportedImageFile(filePath: string): boolean
- getProviderImageCaps · function · L41-L49 — function getProviderImageCaps(providerType: LLMProviderType): LLMProviderImageCaps
- validateImageForProvider · function · L55-L73 — function validateImageForProvider( image: LLMImageContent, providerType: LLMProviderType, ): string | null
- loadImageFromFile · function · L78-L90 — async function loadImageFromFile(filePath: string): Promise<LLMImageContent>
- createImageContent · function · L95-L106 — function createImageContent( base64Data: string, mimeType: LLMImageMimeType, ): LLMImageContent
- estimateImageTokens · function · L116-L123 — function estimateImageTokens(image: LLMImageContent, providerType?: string): number
- imageToTextFallback · function · L128-L132 — function imageToTextFallback(image: LLMImageContent): string
- stripImagesForUnsupportedProvider · function · L139-L156 — function stripImagesForUnsupportedProvider( messages: LLMMessage[], providerType: LLMProviderType, ): LLMMessage[]
