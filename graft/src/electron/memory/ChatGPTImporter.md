# src/electron/memory/ChatGPTImporter.ts

- ChatGPTMessage · interface · L36-L42 — interface ChatGPTMessage
- ChatGPTMappingNode · interface · L44-L49 — interface ChatGPTMappingNode
- ChatGPTConversation · interface · L51-L57 — interface ChatGPTConversation
- ChatGPTImportProgress · interface · L61-L68 — interface ChatGPTImportProgress
- ChatGPTImportResult · interface · L70-L77 — interface ChatGPTImportResult
- ChatGPTImportOptions · interface · L79-L94 — interface ChatGPTImportOptions
- containsSensitiveData · function · L125-L127 — function containsSensitiveData(text: string): boolean
- ChatGPTImporter · class · L133-L651 — class ChatGPTImporter
- onProgress · method · L140-L143 — static onProgress(callback: (progress: ChatGPTImportProgress) => void): () => void
- import · method · L148-L160 — static async import(options: ChatGPTImportOptions): Promise<ChatGPTImportResult>
- runImport · method · L162-L430 — private static async runImport(options: ChatGPTImportOptions): Promise<ChatGPTImportResult>
- extractMessages · method · L437-L473 — private static extractMessages( convo: ChatGPTConversation, ): Array<{ role: string; text: string }>
- buildTranscript · method · L479-L502 — private static buildTranscript( title: string, messages: Array<{ role: string; text: string }>, ): string
- distilConversation · method · L507-L646 — private static async distilConversation( transcript: string, _title: string, distillProvider?: string, distillModel?: string, ): Promise<Array<{ type: string; content: string }>>
- emitProgress · method · L648-L650 — private static emitProgress(progress: ChatGPTImportProgress): void
