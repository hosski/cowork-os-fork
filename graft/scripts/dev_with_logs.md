# scripts/dev_with_logs.mjs

- parseBoolean · function · L20-L26 — function parseBoolean(value)
- prefixedLogLine · function · L28-L30 — function prefixedLogLine(message)
- resolveCaptureEnabled · function · L32-L46 — function resolveCaptureEnabled()
- createStructuredDevLogWriter · function · L48-L97 — function createStructuredDevLogWriter({ runId, textStreams, jsonlStreams })
- emitLine · function · L56-L71 — emitLine = (line, stream = "stdout", overrides = {})
- write · method · L75-L82 — write(chunk, stream = "stdout")
- flush · method · L83-L88 — flush()
- line · method · L89-L95 — line(message, overrides = {})
- endStream · function · L99-L103 — function endStream(stream)
- spawnDev · function · L105-L116 — function spawnDev(startWithCapture)
- finalize · function · L187-L218 — finalize = (exitCode, signal)
