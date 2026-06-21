# Sabor Ilhéu Landing Page — Current State (Memory)

<!--
  LIVING FILE — updated CONSTANTLY by the AI during development.

  Purpose: maintain context between sessions. The AI must read this file
  at the start of each session and update it at the end.

  This is NOT documentation — it's working memory.
-->

| Field | Value |
|---|---|
| **Last session** | 2026-06-20 |
| **Last agent** | AI Assistant |
| **Current branch** | N/A (projeto não inicializado) |

---

## Recorded Decisions

<!--
  Record important technical decisions with rationale.
  Format: [DATE] Decision → Rationale
-->

| Date | Decision | Rationale | Impact |
|---|---|---|---|
| 2026-06-20 | Next.js 14+ com SSG (`output: 'export'`) em vez de PHP | Landing page 100% estática, sem necessidade de servidor. Next.js oferece SSG nativo, otimização de imagens, SEO built-in, Vercel free tier. PHP seria overkill — servidor para conteúdo estático é desperdício. | Stack definida: sem backend, sem banco |
| 2026-06-20 | Tailwind CSS + paleta customizada (PRD seção 6.2) | Produtividade, design system consistente, sem dependência de biblioteca de componentes pesada | Configurar `tailwind.config.ts` com cores da marca |
| 2026-06-20 | Contato apenas via WhatsApp (sem formulário) | Simplifica implementação, evita backend para envio de e-mail, alinhado com comportamento do público-alvo (praia → celular → WhatsApp) | Sem API routes, sem validação server-side |
| 2026-06-20 | Playfair Display (títulos) + Lato (corpo) | Direção criativa do PRD: serif rústico/praiano para títulos + sans-serif limpo para legibilidade | Configurar `next/font` com Google Fonts |

---

## Active Blockers

<!--
  Blockers preventing progress.
  Remove when resolved.
-->

| # | Blocker | Severity | Details |
|---|---|---|---|
| 1 | Fotos reais do restaurante não fornecidas | High | Necessário para Hero, Galeria e Cardápio. Fallback: fotos do Instagram (@saborilheu.restaurante). Sem fotos, a página perde impacto visual. |
| 2 | Número de WhatsApp não confirmado | Medium | Necessário para botões de CTA. Usar placeholder até confirmação. |
| 3 | Domínio não definido/adquirido | Medium | Bloqueia deploy final. Pode usar `*.vercel.app` temporariamente. |

---

## Lessons Learned

<!--
  Technical learnings worth keeping. Do not remove — this is useful history.
-->

| Date | Lesson | Context |
|---|---|---|
| 2026-06-20 | O documento Perfil_Sabor_Ilheu.docx revelou que o Google Meu Negócio está marcado como "Permanentemente fechado" — corrigir isso é tão importante quanto criar o site | Análise de presença digital |
| 2026-06-20 | Landing pages de restaurante de praia precisam ser mobile-first: maioria dos acessos vem de celulares na praia, com 4G | Decisão de design responsivo |

---

## Tasks In Progress

<!--
  What is actively being worked on RIGHT NOW.
  Update status throughout the session.
-->

| # | Task | Status | Started |
|---|---|---|---|
| 1 | Preenchimento da documentação `.specs/` e `IMPLEMENTATION_PLAN.md` | Concluído | 2026-06-20 |

---

## Deferred Ideas (Parking Lot)

<!--
  Good ideas that don't fit the current moment.
  Review periodically — some mature over time.
-->

| # | Idea | Deferred on | Reason |
|---|---|---|---|
| 1 | Cardápio interativo completo com preços e categorias | 2026-06-20 | MVP é cardápio resumido estático; cliente precisa fornecer cardápio completo |
| 2 | Sistema de reservas via WhatsApp automatizado (API) | 2026-06-20 | Pós-MVP; requer WhatsApp Business API |
| 3 | Integração com feed do Instagram (últimos posts) | 2026-06-20 | Pós-MVP; adiciona dinamismo mas não é essencial |
| 4 | Multi-idioma (PT/EN/ES) para turistas | 2026-06-20 | P3; turismo internacional justifica, mas MVP é só PT-BR |
| 5 | Blog sobre gastronomia local e cultura manezinha | 2026-06-20 | P3; conteúdo para SEO de longo prazo |

---

## Pre-Session Checklist (for AI)

Before starting work:

- [ ] Read [PROJECT.md](./PROJECT.md) — vision & goals
- [ ] Read [ROADMAP.md](./ROADMAP.md) — features & milestones
- [ ] Read this file — decisions, blockers, live context
- [ ] Check [codebase/](../codebase/) — stack, architecture, conventions
- [ ] Check [codebase/CONCERNS.md](../codebase/CONCERNS.md) — known risks & fragilities
- [ ] Check [features/](../features/) — active specs
- [ ] Consultant `.agent/` agents and skills as needed

---

> **Updated by AI automatically.** Do not edit manually unless you know what you're doing.
