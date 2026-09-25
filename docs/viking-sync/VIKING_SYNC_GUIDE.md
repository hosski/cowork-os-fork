# OpenViking Sync: Bot Actions → Audit Trail
**2 hours to build. Reusable forever.**

---

## Architecture

```
CoWork OS                    OpenViking
  │                            │
  ├─ task_events table  ────→  Memory tree
  │  (every action)            (audit + search)
  │
  ├─ Executor calls    ────→  Viking "bot_action"
  │  (getPositions, etc)       (what agent did + when)
  │
  └─ Results logged    ────→  "execution_log"
     (success/fail)             (outcome + trace)
```

**Goal:** Every task execution, order placed, position change → OpenViking memory. Searchable later.

---

## Step 1: Export CoWork Task Events (30 min)

CoWork stores all actions in `task_events` table:
- `id` — unique event ID
- `task_id` — which task
- `timestamp` — when
- `type` — what (e.g., "task_started", "tool_called", "task_completed")
- `payload` — full data (JSON)

**Create export script:**

```typescript
// export-task-events.ts
import Database from 'better-sqlite3';
import * as fs from 'fs';
import * as path from 'path';

const dbPath = path.join(process.env.HOME, '.cowork-os', 'cowork-os.db');
const db = new Database(dbPath);

// Export all task events since timestamp
export function exportTaskEventsSince(sinceSec: number) {
  const rows = db.prepare(`
    SELECT 
      id, task_id, timestamp, type, payload,
      actor, status, step_id
    FROM task_events
    WHERE timestamp > ?
    ORDER BY timestamp DESC
    LIMIT 1000
  `).all(sinceSec) as Array<{
    id: string;
    task_id: string;
    timestamp: number;
    type: string;
    payload: string;
    actor?: string;
    status?: string;
    step_id?: string;
  }>;

  return rows.map(row => ({
    id: row.id,
    task_id: row.task_id,
    timestamp_sec: Math.floor(row.timestamp / 1000),
    type: row.type,
    actor: row.actor || 'cowork-bot',
    status: row.status,
    payload: JSON.parse(row.payload),
  }));
}

// Run export
const lastExportFile = path.join(process.env.HOME, '.cowork-os', 'last-viking-export.txt');
const lastExport = fs.existsSync(lastExportFile)
  ? parseInt(fs.readFileSync(lastExportFile, 'utf-8'))
  : Math.floor(Date.now() / 1000) - 86400; // Default: last 24h

const events = exportTaskEventsSince(lastExport);
console.log(JSON.stringify(events, null, 2));

// Update last export time
fs.writeFileSync(lastExportFile, Math.floor(Date.now() / 1000).toString());
```

**Usage:**
```bash
npx ts-node export-task-events.ts > /tmp/cowork-events.json
```

---

## Step 2: Transform to Viking Memory Format (30 min)

Viking expects structured memory entries. Format each task event as:

```markdown
## Bot Action: [task_id] [type]
**Timestamp:** 2026-09-25T14:30:00Z
**Actor:** cowork-bot (or "executor" for Executor calls)
**Status:** [success | pending | failed]

### Action Details
- **Type:** task_started | tool_called | task_completed
- **Task ID:** {task_id}
- **Step:** {step_id}
- **Payload:** {full data}

### Context
- **Workable in:** CoWork OS
- **Traced by:** Executor → OpenViking sync
- **Next action:** [if applicable]

---
```

**Transform script:**

```typescript
// transform-to-viking.ts
interface TaskEvent {
  id: string;
  task_id: string;
  timestamp_sec: number;
  type: string;
  actor: string;
  status?: string;
  payload: Record<string, unknown>;
}

function toVikingMemory(event: TaskEvent): string {
  const date = new Date(event.timestamp_sec * 1000).toISOString();
  const typeLabel = event.type.replace(/_/g, ' ').toUpperCase();

  return `## Bot Action: ${event.task_id} ${typeLabel}
**Timestamp:** ${date}
**Actor:** ${event.actor}
**Status:** ${event.status || 'unknown'}

### Action Details
- **Type:** ${event.type}
- **Task ID:** ${event.task_id}
- **Payload:** \`\`\`json\n${JSON.stringify(event.payload, null, 2)}\n\`\`\`

### Context
- **Execution ID:** ${event.id}
- **Traced by:** CoWork → OpenViking Sync
---
`;
}

// Main
const fs = require('fs');
const input = fs.readFileSync('/tmp/cowork-events.json', 'utf-8');
const events: TaskEvent[] = JSON.parse(input);
const markdown = events.map(toVikingMemory).join('\n');

fs.writeFileSync('/tmp/viking-memory.md', markdown);
console.log(`Wrote ${events.length} events to /tmp/viking-memory.md`);
```

---

## Step 3: Send to OpenViking (20 min)

Use `viking_remember()` or push directly via REST:

**Option A: Programmatic (Hermes skill)**

```typescript
// In your CoWork sync script
import { viking_remember } from 'hermes-tools';

async function syncToViking(events: TaskEvent[]) {
  const markdown = events.map(toVikingMemory).join('\n');
  
  await viking_remember({
    content: markdown,
    // Optional:
    // scope: 'bot_actions_cowork',
    // tags: ['executor', 'cowork-os', 'trading-bot'],
  });
}
```

**Option B: Direct REST (if Viking exposes it)**

```bash
curl -X POST http://viking-api/remember \
  -H "Content-Type: application/json" \
  -d @viking-memory.json
```

---

## Step 4: Schedule Nightly Sync (20 min)

Use CoWork's scheduler or macOS `launchd`:

**CoWork scheduler (in Automation Studio):**

```
Trigger: Daily @ 2am
Task: Run export → transform → upload
Retry: 3x on failure
Log: ~/cowork-viking-sync.log
```

**Or macOS launchd:**

```bash
# ~/.config/launchd/com.cowork.viking-sync.plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.cowork.viking-sync</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/env</string>
    <string>node</string>
    <string>/Users/hosski/.cowork-os/sync-viking.js</string>
  </array>
  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key>
    <integer>2</integer>
    <key>Minute</key>
    <integer>0</integer>
  </dict>
  <key>StandardErrorPath</key>
  <string>/Users/hosski/.cowork-os/viking-sync.log</string>
  <key>StandardOutPath</key>
  <string>/Users/hosski/.cowork-os/viking-sync.log</string>
</dict>
</plist>
```

Enable:
```bash
launchctl load ~/.config/launchd/com.cowork.viking-sync.plist
```

---

## Step 5: Query in OpenViking (Bonus)

Later, search your bot actions:

```bash
viking_search('BTC position change Sep 25', mode='deep')
# Returns: all bot actions mentioning BTC positions that day
```

---

## What You Get

✅ **Audit trail:** Every bot action logged + searchable  
✅ **Decision trail:** Why did the bot cancel that order?  
✅ **Compliance:** "On Sep 25 at 14:30, bot placed 0.1 BTC → succeeded"  
✅ **Learning:** Find patterns in failures  
✅ **Integrates with Fruvisi:** QA can query bot decisions  

---

## Files to Create

1. **`export-task-events.ts`** — reads CoWork database
2. **`transform-to-viking.ts`** — formats for Viking
3. **`sync-viking.js`** — combined script (calls both)
4. **`com.cowork.viking-sync.plist`** — launchd schedule

Total: ~200 lines of TypeScript. One-time setup.

---

## Gotchas

- **Timestamp format:** CoWork uses milliseconds, Viking expects ISO strings (handled in transform)
- **Payload size:** Large payloads get truncated by Viking; consider storing as reference only
- **Rate limit:** Viking may throttle writes; implement exponential backoff
- **DB lock:** CoWork may lock database during sync; retry logic needed

---

## Next: Try It

1. Export a day of task events
2. Transform to markdown
3. Push to Viking manually
4. Search Viking for "BTC" or "Executor"
5. Got results? Schedule nightly sync

Then: **DAG wiring (#2).**
