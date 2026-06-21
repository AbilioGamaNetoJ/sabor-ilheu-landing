# Sabor Ilhéu Landing Page — Roadmap

<!-- Canonical source of planned features and milestones for AI agents. -->

| Field | Value |
|---|---|
| **Last updated** | 2026-06-20 |

## Current Version: v1.0 (MVP)

<!-- Landing Page One-Page institucional -->

| # | Feature | Status | Effort |
|---|---|---|---|
| 1 | Hero Section (full-screen, slogan, 2 CTAs) | ⬜ Pendente | M |
| 2 | Navbar fixa (transparente → sólida, mobile hamburguer) | ⬜ Pendente | P |
| 3 | Seção Sobre Nós (história + 5 diferenciais) | ⬜ Pendente | P |
| 4 | Cardápio Digital resumido (cards com foto, nome, descrição) | ⬜ Pendente | M |
| 5 | Galeria de Fotos (masonry/lightbox, 8-12 fotos) | ⬜ Pendente | M |
| 6 | Localização (Google Maps embed + endereço + pontos de referência) | ⬜ Pendente | P |
| 7 | Avaliações (cards com reviews do Google, nota 4.3★) | ⬜ Pendente | P |
| 8 | Horário & Contato (WhatsApp, telefone, redes sociais) | ⬜ Pendente | P |
| 9 | Footer (logo, links, social, copyright) | ⬜ Pendente | P |
| 10 | SEO completo (meta tags, schema.org Restaurant, sitemap, robots.txt) | ⬜ Pendente | M |
| 11 | Design responsivo mobile-first | ⬜ Pendente | M |
| 12 | Botão WhatsApp flutuante | ⬜ Pendente | P |
| 13 | Inicialização do projeto (Next.js + Tailwind + config) | ⬜ Pendente | P |
| 14 | Deploy Vercel + domínio | ⬜ Pendente | P |

> Effort: **P** (≤ 2h) · **M** (meio dia) · **G** (1 dia ou mais).

## Upcoming Versions

### v1.1 — Analytics & Melhorias

<!-- Melhorias pós-lançamento baseadas em dados reais -->

| # | Feature | Priority | Depends on |
|---|---|---|---|
| 1 | Google Analytics / Plausible para métricas de visitação | Medium | v1.0 |
| 2 | Otimização de imagens (compressão, next/image) | Medium | v1.0 |
| 3 | Ajustes de SEO baseados em Search Console | Low | v1.0 |

### v2.0 — Interatividade

<!-- Funcionalidades que adicionam dinamismo -->

| # | Feature | Priority | Depends on |
|---|---|---|---|
| 1 | Cardápio interativo completo com preços e categorias | High | Cliente fornecer cardápio |
| 2 | Integração com feed do Instagram (últimos posts) | Medium | v1.0 |
| 3 | Sistema de reservas via WhatsApp automatizado | Low | WhatsApp Business API |

### Backlog

<!-- Features for future versions (not yet prioritized) -->

- Multi-idioma (PT-BR / EN / ES) para turistas internacionais
- Blog com conteúdo sobre gastronomia local, cultura manezinha, receitas
- Tour virtual 360° do ambiente
- Integração com sistema de delivery (se aplicável)
- Página de eventos e promoções sazonais

## Milestones

| Milestone | Date | Deliverable |
|---|---|---|
| Documentação preenchida | 2026-06-20 | `.specs/` + `IMPLEMENTATION_PLAN.md` + `PRD_Landing_Page_Ilheu.md` |
| Projeto iniciado | TBD | `bunx create-next-app` + Tailwind config |
| MVP — seções core prontas | TBD | Hero, Sobre, Cardápio, Localização, Contato, Footer |
| MVP — galeria + avaliações | TBD | Galeria de fotos com lightbox, seção de avaliações |
| MVP — SEO + deploy | TBD | Schema.org, meta tags, sitemap, deploy Vercel |
| Lançamento v1.0 | TBD | Domínio próprio, todas as seções, Lighthouse ≥ 90 |

---

> **Note for AIs:** Active features have specs in [../features/](../features/). Ad-hoc tasks in [../quick/](../quick/). Decisions and blockers in [STATE.md](./STATE.md).
