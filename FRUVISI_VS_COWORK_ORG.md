# Fruvisi vs CoWork OS Organization: Feature Comparison

## Summary
**CoWork OS ALREADY HAS ORG CHART VISUALIZATION. DO NOT ADD FRUVISI REDUNDANCY.**

---

## What CoWork OS Already Provides

### Location
**Settings → Companies → Org Builder tab** (`src/renderer/components/CompaniesPanel.tsx`, 1,723 lines)

### Features (Lines 803–902)

#### 1. **Structure Panel** (Tree View)
- Displays desired-state company graph from imported packages
- Hierarchical tree view: Company → Teams → Agents → Projects → Tasks
- Click to select and view details
- Parent-child relationships visualized

#### 2. **Org Chart Panel** (Visual Org Chart)
- Renders agent reporting lines
- Shows agent hierarchy with parent-child connections
- Visual org chart layout with all imported agent roles
- Clickable nodes to select and view metadata

#### 3. **Runtime Lanes** (Projects & Tasks)
- Lists all projects from the organization
- Lists starter tasks
- Chip-based navigation (click to select)
- Shows active work streams

#### 4. **Company Management**
- Import company packages from library
- Manage multiple companies
- Create new companies
- Link teams, agents, projects, tasks
- Sync state tracking (in_sync, diverged, local_override)

---

## What Fruvisi Adds (GitHub: Fruxano/fruvisi)

Fruvisi is **primarily an org-chart dashboard plugin for Hermes** (the AI agent orchestrator), designed to:

1. **Visual org-chart layout** (which CoWork OS already has)
2. **Agent role visualization** (which CoWork OS already has)
3. **Multi-team coordination** (minimal additional value here)
4. **Hermes-specific features** (company/team/agent lifecycle tied to Hermes)

---

## Feature-by-Feature Comparison

| Feature | CoWork OS | Fruvisi | Verdict |
|---------|-----------|---------|---------|
| **Org chart visualization** | ✅ Yes (Org Builder) | ✅ Yes | **Redundant** |
| **Agent hierarchy display** | ✅ Yes | ✅ Yes | **Redundant** |
| **Company graph import** | ✅ Yes (from packages) | ✅ Yes | **Redundant** |
| **Project/task linking** | ✅ Yes | Partial | **CoWork wins** |
| **Drag-drop reordering** | Unclear | ✅ Yes | *Minor value* |
| **Real-time collaboration** | Unclear | Partial | *Minor value* |
| **Hermes-specific features** | No | ✅ Yes | *Not needed here* |

---

## Decision: DO NOT ADD FRUVISI

### Why
1. **CoWork OS already has Org Builder** with full org chart visualization
2. **Same capability** — both display agent hierarchies, companies, teams, projects
3. **Data duplication** — maintaining two org charts would diverge
4. **No additional value** — Fruvisi's Hermes-specific features don't apply to CoWork OS workflows
5. **Integration complexity** — Fruvisi is designed for Hermes, not CoWork OS

### What You Have Right Now
Settings → Companies tab → "Org Builder" gives you:
- ✅ Visual org chart with agent reporting lines
- ✅ Company structure from imported packages
- ✅ Team, agent, project, and task hierarchies
- ✅ Searchable/filterable interface
- ✅ Multi-company management

---

## If You Later Need More Visual Features

Instead of adding Fruvisi, enhance CoWork OS's **Org Builder**:
- Add drag-drop reordering
- Add visual customization (colors, shapes, layouts)
- Add live collaboration features
- Add export to Miro/Figma

But these are **enhancements to existing CoWork OS features**, not external integrations.

---

## Current Usage: Fruvisi in Your Fork

**Only used as:** QA validator for DAG workflows (`fruvisi-validator.ts`)
- Validates task outputs
- Decides on retry vs. failure
- Can call remote Fruvisi SaaS or use local heuristics

This does NOT overlap with organization visualization.

---

## Final Recommendation

✅ **Keep using:** CoWork OS's built-in Org Builder (Settings → Companies)
❌ **Do not add:** Fruvisi org-chart integration (redundant)
✅ **Keep using:** Fruvisi-validator for QA (non-redundant, different purpose)

Your system is clean, cohesive, and avoids duplicate functionality.
