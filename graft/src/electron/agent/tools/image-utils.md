# src/electron/agent/tools/image-utils.ts

- DownscaleResult · interface · L9-L12 — interface DownscaleResult
- DownscaleOptions · interface · L14-L19 — interface DownscaleOptions
- downscaleImage · function · L26-L63 — async function downscaleImage( buffer: Buffer, mimeType: string, options?: DownscaleOptions, ): Promise<DownscaleResult>
- downscaleWithSips · function · L65-L98 — async function downscaleWithSips( inputPath: string, outputPath: string, maxDim: number, ): Promise<DownscaleResult>
- downscaleWithConvert · function · L100-L117 — async function downscaleWithConvert( inputPath: string, outputPath: string, maxDim: number, ): Promise<DownscaleResult>
- downscaleWithNativeImage · function · L119-L142 — async function downscaleWithNativeImage( inputPath: string, outputPath: string, maxDim: number, ): Promise<DownscaleResult>
