# Sabor Ilhéu Landing Page — Vision & Goals

<!--
  This file is the canonical source of project context for AI AGENTS.
  README.md is the entry point for HUMAN DEVELOPERS.
  Keep this file concise and objective — the AI needs to parse it quickly.
-->

| Field | Value |
|---|---|
| **Name** | Sabor Ilhéu Landing Page |
| **Type** | Landing Page institucional (one-page, estática) |
| **Target audience** | Turistas (Argentina, Uruguai, Chile, Brasil) e moradores da Barra da Lagoa, Florianópolis — 25 a 55 anos, classes B e C |
| **Status** | Planejamento |

## Purpose

Criar presença digital própria para o Sabor Ilhéu Bar & Restaurante (quase 10 anos de história, cozinha 100% nativa manezinha de frutos do mar), que hoje depende exclusivamente de redes sociais. A landing page deve consolidar informações, ranquear em buscas locais e converter visitantes em clientes via WhatsApp.

## Goals (OKRs)

| # | Goal | Key Result | Deadline |
|---|---|---|---|
| 1 | Marcar presença digital própria | Landing page publicada em domínio próprio com HTTPS | Sprint 1 |
| 2 | Ranquear em buscas locais | Top 3 para "restaurante frutos do mar Barra da Lagoa" e "restaurante Barra da Lagoa" | +3 meses |
| 3 | Gerar contatos via WhatsApp | Mínimo 30 cliques/mês no botão de WhatsApp | +1 mês após lançamento |
| 4 | Corrigir percepção de "fechado" | Landing page ranqueando acima do card do Google com status desatualizado | +2 meses |
| 5 | Performance e qualidade | Lighthouse Score ≥ 90 nos 4 critérios (Performance, A11y, Best Practices, SEO) | Lançamento |

## Differentiators

- Cozinha 100% nativa manezinha — identidade autêntica, não é restaurante genérico de praia
- Localização privilegiada à beira-mar na Barra da Lagoa (5 min a pé da praia)
- Ambiente rústico e acolhedor — comida caseira, atendimento familiar (Chef Carol)
- Preço acessível (R$40-R$120) versus concorrentes premium da região
- Pesca local garantindo frescor dos ingredientes

## Constraints

| Constraint | Type | Impact |
|---|---|---|
| Orçamento enxuto — solução simples, sem backend, sem CMS | Technical | Stack enxuta: SSG estático, Vercel free tier, sem banco de dados |
| Fotos dependem do cliente fornecer | Business | Placeholders temporários podem ser necessários; fotos do Instagram como fallback |
| Domínio precisa ser adquirido | Business | Bloqueante para deploy final; pode-se usar domínio Vercel temporário |
| Sem formulários — contato 100% via WhatsApp | Technical | Simplifica implementação, sem necessidade de backend para envio de e-mail |
| Prazo curto | Deadline | 1-2 semanas para MVP; escopo reduzido ao essencial |

## Stakeholders

| Role | Name | Responsibility |
|---|---|---|
| Product Owner / Cliente | Daniel Souza da Conceição | Aprovação final, fornecimento de fotos e dados de contato |
| Tech Lead | IA / Dev | Implementação, deploy, SEO |

---

> **Note for AIs:** This file defines WHAT and WHY. For HOW, see [codebase/ARCHITECTURE.md](../codebase/ARCHITECTURE.md) and [IMPLEMENTATION_PLAN.md](../../IMPLEMENTATION_PLAN.md). For current progress, see [STATE.md](./STATE.md).
