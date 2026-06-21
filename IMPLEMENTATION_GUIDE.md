# Implementation Guide — Standard AI Workflow

> This document defines the **standard workflow** that AI agents MUST follow when implementing features, fixing bugs, or making any code changes in this project.
> All AI tools (Claude Code, Gemini, Antigravity, OpenCode, Cursor) must adhere to this guide.

---

## 1. Pre-Implementation Checklist

Before writing any code, the AI **MUST** complete these steps:

### 1.1 Read Project Context

| Step | File | Purpose |
|---|---|---|
| 1 | `README.md` | Project overview for human devs |
| 2 | `GEMINI.md` | Global behavior rules |
| 3 | `AGENTS.md` | Available agents and skills |
| 4 | `.specs/project/PROJECT.md` | Vision, goals, constraints (AI context) |
| 5 | `.specs/project/STATE.md` | Memory: decisions, blockers, lessons |
| 6 | `.specs/codebase/STACK.md` | Canonical tech stack |
| 7 | `.specs/codebase/ARCHITECTURE.md` | Architecture decisions (ADR) |
| 8 | `.specs/codebase/CONVENTIONS.md` | Code conventions |
| 9 | `.env.example` | Required environment variables |

> **IA must also check:** `.specs/codebase/CONCERNS.md` for known risks before modifying sensitive areas.

### 1.2 Understand the Request

- [ ] Clarify ambiguous requirements (ask questions)
- [ ] Identify which files will be affected
- [ ] Check for dependencies and side effects
- [ ] Determine the right agent/skill for the task

### 1.3 Read Before Edit

**NEVER modify a file without reading it first.** For every file you plan to change:

1. Read the entire file (or relevant sections)
2. Understand imports, exports, and dependencies
3. Note existing patterns (naming, structure, style)
4. Identify other files that depend on this file

---

## 2. Implementation Phases

For new projects or major features, follow this phase order:

### Phase 0 — Discovery & Planning

- Understand requirements via Socratic questioning
- Create implementation plan (use `/plan` workflow)
- Define file structure and architecture
- **NO CODE** in this phase

### Phase 1 — Project Initialization

- Set up project with framework CLI
- Install dependencies
- Configure environment variables (`.env` from `.env.example`)
- Initialize ORM and database connection

### Phase 2 — Database Schema

- Define schema using project ORM
- Create seed data
- Run migrations
- Verify schema in database

### Phase 3 — Authentication & Authorization

- Configure auth provider
- Set up webhook sync (if applicable)
- Implement role-based access control
- Protect routes/endpoints

### Phase 4 — Core UI & Components

- Build design system / component library
- Create layouts (public, admin, etc.)
- Implement responsive design
- Follow the project's styling approach

### Phase 5 — Business Logic & API

- Create API routes/endpoints
- Implement business logic
- Connect to external services
- Handle errors consistently

### Phase 6 — Integrations

- Payment gateway
- File upload
- Email/notifications
- Maps/geolocation
- Any third-party APIs

### Phase 7 — Testing & Verification

- Run automated tests
- Manual testing of critical flows
- Performance audit (Lighthouse/PageSpeed)
- Security audit (OWASP basics)

---

## 3. Code Standards

### 3.1 TypeScript

```typescript
// ✅ DO: Strong typing
interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

// ❌ DON'T: Weak typing
const user: any = { ... };
```

### 3.2 Imports

```typescript
// ✅ DO: Use path aliases
import { Button } from "@/components/ui/button";
import { db } from "@/db";

// ❌ DON'T: Use relative paths
import { Button } from "../../../components/ui/button";
```

### 3.3 Naming Conventions

| Element | Convention | Example |
|---|---|---|
| Files (components) | kebab-case | `product-card.tsx` |
| Files (utils) | kebab-case | `format-price.ts` |
| Components | PascalCase | `ProductCard` |
| Functions | camelCase | `calculateTotal()` |
| Constants | UPPER_SNAKE | `MAX_RETRIES` |
| DB tables | snake_case | `order_items` |
| DB columns | snake_case | `created_at` |
| Env vars | UPPER_SNAKE | `DATABASE_URL` |

### 3.4 Error Handling

```typescript
// ✅ DO: Consistent error responses in API routes
export async function POST(request: Request) {
  try {
    // ... logic
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    console.error("[API_NAME]", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

### 3.5 Environment Variables

```typescript
// ✅ DO: Server-side only
const apiKey = process.env.API_SECRET_KEY;

// ✅ DO: Client-side (public)
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

// ❌ DON'T: Expose secrets to client
const secret = process.env.NEXT_PUBLIC_SECRET_KEY; // WRONG!
```

---

## 4. File Modification Protocol

### 4.1 The Read-Understand-Preserve-Test Cycle

```
READ the file → UNDERSTAND context → PRESERVE patterns → MODIFY → TEST impact
```

### 4.2 What to Preserve

- **Imports order**: Keep existing import grouping
- **Naming patterns**: Match existing variable/function naming
- **Code style**: Match indentation, quotes, semicolons
- **Comments**: Don't remove existing documentation comments
- **Error handling**: Match existing error patterns

### 4.3 What to Check After Modification

- [ ] File still compiles (`npx tsc --noEmit`)
- [ ] No circular dependency introduced
- [ ] Dependent files still work
- [ ] Tests still pass

---

## 5. Testing & Verification Protocol

### 5.1 Automated Checks

```bash
# TypeScript compilation
npx tsc --noEmit

# Lint check
npm run lint

# Build check
npm run build

# Run tests
npm test
```

### 5.2 Manual Verification

For UI changes:
- [ ] Responsive on mobile, tablet, desktop
- [ ] Accessibility (keyboard navigation, screen reader)
- [ ] Cross-browser (Chrome, Firefox, Safari)

For API changes:
- [ ] All endpoints return correct status codes
- [ ] Error cases handled gracefully
- [ ] Auth/permissions enforced

For database changes:
- [ ] Schema migrations run cleanly
- [ ] Existing data not corrupted
- [ ] Indexes added for frequent queries

### 5.3 Performance Audit

Use the shared PageSpeed MCP tool or browser DevTools:

```bash
# Via MCP (if configured)
# The pagespeed tool in .agent/tools/ can analyze any URL

# Via browser
# Chrome DevTools > Lighthouse > Run audit
```

### 5.4 Validation Scripts

```bash
# Quick audit during development
python .agent/scripts/checklist.py .

# Full verification before deploy
python .agent/scripts/verify_all.py . --url http://localhost:3000
```

---

## 6. Commit Message Convention

Use conventional commits:

```
type(scope): description

feat(auth): add role-based access control
fix(cart): resolve quantity update race condition
refactor(api): extract validation into middleware
docs(readme): update environment variables section
style(ui): fix button alignment on mobile
chore(deps): update next.js to 16.x
```

### Types

| Type | When to Use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `docs` | Documentation only |
| `style` | Formatting, missing semi colons, etc. |
| `test` | Adding or updating tests |
| `chore` | Build process, dependencies, tooling |
| `perf` | Performance improvement |

---

## 7. Definition of Done

A task is **only complete** when ALL of these are true:

- [ ] Code compiles without errors (`npm run build`)
- [ ] TypeScript has no type errors (`npx tsc --noEmit`)
- [ ] Lint passes (`npm run lint`)
- [ ] Project patterns maintained (imports, naming, style)
- [ ] Sensitive variables not exposed (check `.env.example`)
- [ ] Affected tests pass
- [ ] Response to user in the project's primary language
- [ ] All files read before modification
- [ ] Cross-references between files updated

---

## Quick Reference Card

```
┌───────────────────────────────────────────────────────┐
│             AI IMPLEMENTATION WORKFLOW                 │
├───────────────────────────────────────────────────────┤
│                                                       │
│  1. READ    → GEMINI.md + AGENTS.md + .specs/         │
│  2. CHECK   → .specs/project/STATE.md (decisions,     │
│               blockers, lessons from past sessions)    │
│  3. PLAN    → Clarify requirements, ask Qs            │
│  4. READ    → All files before editing                 │
│  5. CODE    → Follow .specs/codebase/CONVENTIONS.md   │
│  6. TEST    → Compile + lint + build + manual         │
│  7. VERIFY  → Definition of Done checklist             │
│  8. UPDATE  → .specs/project/STATE.md with decisions,  │
│               lessons, and deferred ideas              │
│                                                       │
│  ⚠️  NEVER: Skip reading, expose secrets,             │
│            use `any`, write raw SQL                    │
│                                                       │
└───────────────────────────────────────────────────────┘
```

---

> **References:**
> - [README.md](./README.md) — Project documentation (for human devs)
> - [.specs/project/PROJECT.md](./.specs/project/PROJECT.md) — Vision & goals (for AI)
> - [.specs/project/STATE.md](./.specs/project/STATE.md) — Memory: decisions, blockers, lessons
> - [.specs/project/ROADMAP.md](./.specs/project/ROADMAP.md) — Features & milestones
> - [.specs/codebase/](./.specs/codebase/) — Stack, architecture, conventions
> - [AGENTS.md](./AGENTS.md) — Agent system inventory
> - [GEMINI.md](./GEMINI.md) — Global AI rules
> - [CLAUDE.md](./CLAUDE.md) — Claude Code instructions
> - [.env.example](./.env.example) — Environment variables template
