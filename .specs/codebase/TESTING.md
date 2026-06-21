# Sabor Ilhéu Landing Page — Testing

<!-- Testing strategy and coverage for AI agents. -->

| Field | Value |
|---|---|
| **Framework** | N/A — testes automatizados não planejados para MVP (landing page estática) |
| **Last updated** | 2026-06-20 |

## Strategy

| Type | Scope | Location | Command |
|---|---|---|---|
| N/A | N/A | N/A | N/A |

## Rationale

A landing page do Sabor Ilhéu é uma página 100% estática:
- Sem formulários (sem validação para testar)
- Sem API routes (sem lógica de backend para testar)
- Sem banco de dados (sem queries para testar)
- Sem autenticação (sem fluxos de login para testar)
- Sem estado complexo (sem stores para testar)

O custo/benefício de escrever testes unitários para componentes puramente visuais não se justifica no MVP.

## Verificação Alternativa (MVP)

| O que verificar | Como |
|---|---|
| Build | `bun run build` — TypeScript + Next.js compilam sem erros |
| Lint | `bun run lint` — sem warnings de ESLint |
| Lighthouse | Lighthouse no Chrome DevTools ou PageSpeed Insights |
| Responsividade | Teste manual em Chrome DevTools (device toolbar): iPhone SE, iPhone 12, iPad, Desktop 1920px |
| Links | Verificação manual de todos os links (WhatsApp, Instagram, Facebook, Google Maps) |
| Schema.org | Google Rich Results Test |
| Cross-browser | Verificação manual em Chrome, Safari e Firefox |
| Imagens | Verificação visual de que todas as imagens carregam, sem broken links |
| Performance | `npx lighthouse` CLI ou Vercel Analytics |

## Testes Futuros (pós-MVP)

Se a landing page evoluir para ter funcionalidades interativas (ex.: formulário de reserva, cardápio interativo com filtros):

| Type | Scope | Location | Command |
|---|---|---|---|
| Unit | Funções utilitárias (`src/lib/utils.ts`) | `__tests__/` | `npx vitest run` |
| Component | Componentes com estado (`<MenuFilter />`, `<ReservationForm />`) | `__tests__/` | `npx vitest run` |
| E2E | Fluxo completo de reserva | `e2e/` | `npx playwright test` |

## Target Coverage (futuro)

| Metric | Target |
|---|---|
| Lines | 60% |
| Functions | 70% |
| Branches | 50% |

---

> **Note for AIs:** Sem testes automatizados no MVP. Foco em verificação manual + Lighthouse + build/lint passando. Adicionar testes se o escopo expandir.
