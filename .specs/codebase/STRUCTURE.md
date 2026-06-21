# Sabor Ilhéu Landing Page — Directory Structure

<!-- Navigable map of the project for AI agents. -->

| Field | Value |
|---|---|
| **Root** | `src/` |
| **Last updated** | 2026-06-20 |

## Directory Tree

```
sabor-ilheu-landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout (metadata, fonts, globals)
│   │   ├── page.tsx                  # Home page (one-page, todas as seções)
│   │   ├── globals.css               # Tailwind + custom utilities
│   │   ├── sitemap.ts                # sitemap.xml estático
│   │   └── robots.ts                 # robots.txt
│   ├── components/
│   │   ├── sections/                 # Seções da landing page
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── menu-section.tsx
│   │   │   ├── gallery-section.tsx
│   │   │   ├── location-section.tsx
│   │   │   ├── reviews-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   └── footer-section.tsx
│   │   ├── ui/                       # Componentes base reutilizáveis
│   │   │   ├── button.tsx
│   │   │   ├── section-heading.tsx
│   │   │   ├── whatsapp-button.tsx
│   │   │   └── image-lightbox.tsx
│   │   └── layout/                   # Componentes de layout
│   │       ├── navbar.tsx
│   │       └── mobile-menu.tsx
│   ├── lib/
│   │   ├── constants.ts              # Dados estáticos (endereço, horário, links)
│   │   ├── menu-data.ts              # Dados do cardápio (itens, categorias)
│   │   ├── reviews-data.ts           # Avaliações (estáticas)
│   │   └── utils.ts                  # Funções utilitárias
│   └── types/
│       └── index.ts                  # TypeScript types (MenuItem, Review, etc.)
├── public/
│   ├── images/                       # Imagens do restaurante
│   │   ├── hero-bg.jpg
│   │   ├── gallery/                  # Fotos da galeria
│   │   └── menu/                     # Fotos dos pratos
│   └── favicon.ico
├── .specs/                           # AI agent documentation
│   ├── project/                      # Vision, roadmap, state
│   ├── codebase/                     # Stack, architecture, conventions
│   ├── features/                     # Feature specs
│   └── quick/                        # Ad-hoc tasks
├── .agent/                           # AI agent kit
├── .env.example                      # Variáveis de ambiente de exemplo
├── PRD_Landing_Page_Ilheu.md         # PRD completo
├── IMPLEMENTATION_PLAN.md            # Plano de implementação
├── README.md                         # Documentação para devs humanos
├── AGENTS.md                         # Agent system inventory
├── next.config.ts                    # Next.js config (output: 'export')
├── tailwind.config.ts                # Tailwind config (cores, fontes)
├── tsconfig.json
└── package.json
```

## Where to Find

| What | Where |
|---|---|
| Página principal | `src/app/page.tsx` |
| Seções da landing | `src/components/sections/` |
| Componentes base | `src/components/ui/` |
| Layout (navbar, footer) | `src/components/layout/` |
| Dados estáticos | `src/lib/` |
| Tipos TypeScript | `src/types/` |
| Imagens | `public/images/` |
| Configuração de build | `next.config.ts` |
| AI agent resources | `.agent/` |
| AI project context | `.specs/` |

## Notas Importantes

- **Sem `src/app/api/`** — landing page 100% estática, sem API routes
- **Sem `src/db/`** — sem banco de dados
- **Sem `src/stores/`** — sem state management complexo
- **Sem `(public)/` ou `(dashboard)/` route groups** — site público único
- Build: `output: 'export'` no `next.config.ts` para SSG puro

---

> **Note for AIs:** Use this map to navigate the code. For architectural details, see [ARCHITECTURE.md](./ARCHITECTURE.md). For agent kit details, see [AGENTS.md](../../AGENTS.md).
