# Sabor Ilhéu Landing Page — Architecture

<!-- Architectural overview of the project for AI agents. -->

| Field | Value |
|---|---|
| **Last updated** | 2026-06-20 |
| **Architectural pattern** | SSG (Static Site Generation) — Next.js App Router com `output: 'export'` |

## Conceptual Diagram

```
BUILD TIME:
  src/lib/*.ts (data)  →  src/components/sections/*.tsx  →  src/app/page.tsx
       ↓                            ↓                              ↓
  Dados estáticos          Componentes React              Página montada
  (constantes, menu,       (renderizados uma vez          (todas as seções
   reviews, endereço)       no build)                      compostas juntas)
                                      ↓
                              next build (SSG)
                                      ↓
  RUNTIME:
  CDN (Vercel)  →  HTML/CSS/JS estático  →  Navegador do usuário
                                                    ↓
                                         Google Maps Embed (iframe)
                                         WhatsApp (link wa.me)
```

## Layers

### Dados (src/lib/)

- **Responsibility:** Conter todos os dados estáticos da landing page — cardápio, avaliações, constantes de contato, endereço
- **Location:** `src/lib/`
- **Depends on:** Nada (dados hardcoded ou importados de JSON)
- **Files:**
  - `constants.ts` — Endereço, telefone, WhatsApp, horários, links sociais
  - `menu-data.ts` — Array de itens do cardápio com nome, descrição, preço, imagem, categoria
  - `reviews-data.ts` — Array estático das melhores avaliações do Google
  - `utils.ts` — Funções helpers (formatar telefone, URL do WhatsApp, etc.)

### Tipos (src/types/)

- **Responsibility:** Definições TypeScript compartilhadas
- **Location:** `src/types/index.ts`
- **Depends on:** Nada
- **Types:** `MenuItem`, `Review`, `SiteConfig`, `NavLink`, `GalleryImage`

### Componentes de Seção (src/components/sections/)

- **Responsibility:** Renderizar cada seção da landing page com dados recebidos via props ou importados diretamente
- **Location:** `src/components/sections/`
- **Depends on:** `src/lib/`, `src/types/`, `src/components/ui/`
- **Sections:** Hero, About, Menu, Gallery, Location, Reviews, Contact, Footer

### Componentes UI Base (src/components/ui/)

- **Responsibility:** Componentes reutilizáveis genéricos
- **Location:** `src/components/ui/`
- **Depends on:** Tailwind CSS, `lucide-react`
- **Components:** Button, SectionHeading, WhatsAppButton, ImageLightbox

### Componentes de Layout (src/components/layout/)

- **Responsibility:** Navbar fixa, menu mobile
- **Location:** `src/components/layout/`
- **Depends on:** `src/components/ui/`, `lucide-react`

### Página (src/app/page.tsx)

- **Responsibility:** Composição final — importa e renderiza todas as seções em ordem
- **Location:** `src/app/page.tsx`
- **Depends on:** Todos os componentes de seção

### Layout Raiz (src/app/layout.tsx)

- **Responsibility:** HTML shell, metadados globais, fontes, favicon
- **Location:** `src/app/layout.tsx`
- **Depends on:** `next/font`, arquivos de fonte, `globals.css`

## Data Flow

```
Dados estáticos (src/lib/*.ts)
         │
         ▼
Componentes de Seção (src/components/sections/*.tsx)
         │
         ▼
Página (src/app/page.tsx) — composição
         │
         ▼
next build — Static Site Generation
         │
         ▼
Arquivos HTML/CSS/JS estáticos  ────  CDN (Vercel)
         │
         ▼
Usuário no navegador
    ├── Google Maps embed carrega via iframe (client-side only)
    └── WhatsApp link abre app nativo (href: wa.me/...)
```

## Routes

| Route group | URL pattern | Auth | Purpose |
|---|---|---|---|
| Root | `/` | No | Landing page completa (one-page) |
| Sitemap | `/sitemap.xml` | No | Sitemap estático para SEO |
| Robots | `/robots.txt` | No | Robots para SEO |

## Arquitetura de CSS

```
globals.css
  ├── @tailwind base
  ├── @tailwind components
  │    └── Classes utilitárias customizadas (ex: .section-padding)
  └── @tailwind utilities
       └── Cores customizadas via tailwind.config.ts
            ├── azul-mar: #1B5E6B
            ├── verde-agua: #2D8F8F
            ├── areia: #F5EFE6
            └── terracota: #D4744A
```

## Architecture Decisions (ADR)

| ADR | Decision | Rationale | Date |
|---|---|---|---|
| 1 | SSG puro (`output: 'export'`) — sem servidor Node.js | Landing page é 100% estática. SSG gera HTML no build, servido por CDN. Custo zero, performance máxima, zero manutenção de servidor. | 2026-06-20 |
| 2 | Dados hardcoded em arquivos TypeScript (não JSON/MDX/CMS) | Sem CMS, sem banco. TypeScript dá type-safety nos dados. Editar cardápio é trocar uma linha no array. Suficiente para volume de dados pequeno. | 2026-06-20 |
| 3 | Google Maps via iframe embed (não API JavaScript) | API JavaScript requer chave, billing, e é overkill para um pin estático. iframe embed é gratuito, zero configuração, carrega só quando visível. | 2026-06-20 |
| 4 | Imagens locais em `public/images/` (não CDN externo) | Com `next/image` + imagens locais, o build gera webp, múltiplos tamanhos, blur placeholder. Sem dependência de serviço externo de imagem. | 2026-06-20 |
| 5 | Tipografia via `next/font` (Google Fonts) | Playfair Display + Lato hospedados localmente no build — sem requests externos para Google Fonts, melhor performance e privacidade. | 2026-06-20 |

## AI Agent Architecture

This project uses an [Agent Kit](../../.agent/) for AI-assisted development:

- **15 Specialist Agents** in `.agent/agents/` — domain-specific personas (frontend, backend, database, etc.)
- **30 Skills** in `.agent/skills/` — reusable knowledge modules
- **12 Workflows** in `.agent/workflows/` — slash-command procedures (`/create`, `/debug`, etc.)
- See [AGENTS.md](../../AGENTS.md) for full inventory and [.agent/ARCHITECTURE.md](../../.agent/ARCHITECTURE.md) for kit internals.

---

> **Note for AIs:** For folder structure, see [STRUCTURE.md](./STRUCTURE.md). For recent decisions, see [../project/STATE.md](../project/STATE.md).
