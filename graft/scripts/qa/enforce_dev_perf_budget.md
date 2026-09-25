# scripts/qa/enforce_dev_perf_budget.mjs

- readBudget · function · L30-L33 — function readBudget(name, fallback)
- readOptionalBudget · function · L35-L38 — function readOptionalBudget(name)
- readOptionalNumberArg · function · L40-L45 — function readOptionalNumberArg(name)
- readNewestLogTimestampMs · function · L47-L64 — function readNewestLogTimestampMs(filePath)
- enforceFreshLog · function · L66-L86 — function enforceFreshLog(filePath)
- percentile · function · L88-L93 — function percentile(values, ratio)
- readJsonl · function · L95-L111 — function readJsonl(filePath)
- extractTrailingJson · function · L113-L121 — function extractTrailingJson(text, prefix)
- pushMetric · function · L123-L129 — function pushMetric(bucket, key, value)
- addFailure · function · L131-L136 — function addFailure(failures, label, values, limit, mode = "p95")
- requireSamples · function · L138-L142 — function requireSamples(failures, label, values)
