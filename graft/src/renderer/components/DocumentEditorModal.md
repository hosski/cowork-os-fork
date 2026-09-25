# src/renderer/components/DocumentEditorModal.tsx

- DocumentEditorModalProps · type · L14-L18 — type DocumentEditorModalProps = { filePath: string; workspacePath?: string; onClose: () => void; };
- TaskFeedItem · type · L20-L23 — type TaskFeedItem = { text: string; kind: "log" | "tool" | "output" | "status"; };
- summarizeTaskEvent · function · L25-L52 — function summarizeTaskEvent(event: TaskEvent): TaskFeedItem | null
- isPdfSelection · function · L54-L56 — function isPdfSelection(selection: DocumentEditSelection | null): selection is PdfRegionSelection
- isDocxSelection · function · L58-L60 — function isDocxSelection(selection: DocumentEditSelection | null): selection is DocxBlockSelection
- DocumentEditorModal · function · L62-L392 — function DocumentEditorModal({ filePath, workspacePath, onClose, }: DocumentEditorModalProps)
- loadSession · function · L79-L94 — loadSession = async (targetPath = filePath)
- stopWatching · function · L120-L125 — stopWatching = ()
- pollTask · function · L135-L151 — pollTask = async ()
- handleSubmit · function · L184-L203 — handleSubmit = async ()
