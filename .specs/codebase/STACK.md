# Sabor Ilhéu Landing Page — Tech Stack

<!-- Canonical source of tech stack for AI agents. -->

| Field | Value |
|---|---|
| **Last updated** | 2026-06-20 |

## Core

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 14+ (App Router) | Framework principal — SSG (`output: 'export'`) |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Estilização utility-first |
| shadcn/ui | latest | Componentes base (opcional, se necessário) |

## Data & Backend

| Technology | Version | Purpose |
|---|---|---|
| N/A | — | Sem banco de dados — landing page 100% estática |
| N/A | — | Sem ORM — sem persistência server-side |
| N/A | — | Sem state management complexo — página estática |
| N/A | — | Sem validação server-side — sem formulários |

## Auth & Services

| Technology | Purpose |
|---|---|
| N/A | Sem autenticação — site público |

## Tools

| Technology | Purpose |
|---|---|
| lucide-react | Ícones (feather-style) |
| next/font | Fontes otimizadas (Playfair Display + Lato) |
| next/image | Otimização de imagens (webp, lazy loading, blur placeholder) |
| Google Analytics ou Plausible | Analytics (P1 — pós-MVP) |

## Infrastructure

| Technology | Purpose |
|---|---|
| Vercel | Deploy (free tier), SSL, CDN global |
| N/A | Sem CI/CD além do Vercel Git integration |
| N/A | Sem monitoring dedicado nesta fase |

## Integrações Externas

| Service | Purpose | Type |
|---|---|---|
| Google Maps Embed | Mapa interativo na seção de localização | iframe embed (gratuito) |
| WhatsApp (wa.me) | Contato direto, reservas | Link direto (sem API) |
| Instagram / Facebook | Links para redes sociais | Links externos |

## AI Agent Kit

| Resource | Location | Purpose |
|---|---|---|
| Specialist Agents | `.agent/agents/` | 15 domain-specific agents |
| Skills | `.agent/skills/` | 30 modular knowledge modules |
| Workflows | `.agent/workflows/` | 12 slash commands |
| MCP Tools | `.agent/tools/` | Shared tools (PageSpeed, etc.) |
| Validation Scripts | `.agent/scripts/` | Quality audits |

---

> **Note for AIs:** Stack minimalista — landing page estática sem backend, banco de dados, autenticação ou CMS. Exact versions in `package.json`. Additional dependencies in [INTEGRATIONS.md](./INTEGRATIONS.md). Agent kit details in [AGENTS.md](../../AGENTS.md).
