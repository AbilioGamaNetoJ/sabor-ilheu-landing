# Sabor Ilhéu Landing Page — Plano de Implementação

| Campo | Valor |
|---|---|
| **Status** | 🟡 Planejamento |
| **Versão do plano** | v1.0 |
| **Última atualização** | 2026-06-20 |
| **Responsável** | IA / Dev |

## Visão Geral

Landing Page one-page institucional para o Sabor Ilhéu Bar & Restaurante: aplicação estática para turistas e moradores da Barra da Lagoa, Florianópolis.

1. **Presença Digital** — Site próprio consolidando informações antes dispersas em redes sociais
2. **Conversão** — CTAs direcionando para WhatsApp (contato principal do público-alvo)
3. **SEO Local** — Ranqueamento para buscas como "restaurante frutos do mar Barra da Lagoa"

---

## Escopo

### ✅ Dentro do escopo

- Landing page one-page com 9 seções (Hero, Sobre, Cardápio, Galeria, Localização, Avaliações, Contato, Footer + Navbar)
- Navbar fixa com transição transparente → sólida e menu mobile hamburguer
- Hero section full-screen com slogan "Ilhéu, um sabor à beira-mar" e 2 CTAs
- Seção Sobre Nós com história (+10 anos) e 5 diferenciais em cards
- Cardápio digital resumido com cards (foto, nome, descrição curta)
- Galeria de fotos masonry/lightbox (8-12 fotos)
- Google Maps embed com endereço e pontos de referência
- Seção de avaliações com cards estáticos (Google Reviews, 4.3★, 97 avaliações)
- Horário de funcionamento (10h-18h, todos os dias) e contatos (WhatsApp, telefone, sociais)
- Footer com links, redes sociais e copyright
- Botão WhatsApp flutuante
- SEO completo: meta tags, Open Graph, schema.org Restaurant, sitemap.xml, robots.txt
- Design responsivo mobile-first
- Deploy na Vercel com domínio próprio

### 🚫 Fora do escopo

- Cardápio interativo com preços e filtros (v2)
- Formulário de reserva (contato só via WhatsApp)
- CMS para edição de conteúdo (conteúdo hardcoded)
- Blog ou página de notícias (backlog)
- Multi-idioma (backlog)
- Integração com feed do Instagram (backlog)
- Sistema de delivery (backlog)
- Dashboard administrativo
- Banco de dados
- Autenticação de qualquer tipo

---

## Decisões Confirmadas

| Decisão | Resposta |
|---|---|
| **Framework** | Next.js 14+ (App Router) |
| **Styling** | Tailwind CSS 4.x |
| **Database** | N/A (landing page 100% estática) |
| **Auth** | N/A (site público) |
| **Pagamentos** | N/A |
| **Upload** | N/A (imagens em `public/images/`) |
| **Frete/Maps** | Google Maps Embed (iframe gratuito) |
| **State** | N/A (sem estado complexo) |
| **Deploy** | Vercel (free tier) |

> [!IMPORTANT]
> **Variáveis de ambiente necessárias** (adicione no `.env`, veja `.env.example`):
> - `NEXT_PUBLIC_SITE_URL` — URL do site (ex: `https://saborilheu.com.br`)
> - `NEXT_PUBLIC_WHATSAPP_NUMBER` — Número do WhatsApp com DDD (ex: `5548999999999`)
> - `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` — URL do Google Maps embed
> - `NEXT_PUBLIC_INSTAGRAM_URL` — Link do Instagram
> - `NEXT_PUBLIC_FACEBOOK_URL` — Link do Facebook

---

## Categorias / Entidades Principais

| # | Nome | Tipo |
|---|---|---|
| 1 | SiteConfig | Constantes do site (endereço, telefone, horário, links) |
| 2 | MenuItem | Item do cardápio (nome, descrição, preço, imagem, categoria) |
| 3 | Review | Avaliação (nome, nota, texto, data) |
| 4 | GalleryImage | Imagem da galeria (src, alt, categoria) |
| 5 | NavLink | Link de navegação (label, href) |

---

## Stack Técnica

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14+ (App Router + SSG) |
| Linguagem | TypeScript 5.x |
| UI | Tailwind CSS 4.x + paleta customizada |
| Autenticação | N/A |
| Banco de dados | N/A |
| ORM | N/A |
| Pagamentos | N/A |
| Upload | N/A |
| Estado local | N/A |
| Deploy | Vercel |

---

## Roadmap de Fases

| # | Fase | Esforço | Depende de | Status |
|---|---|---|---|:---:|
| 1 | Inicialização do Projeto | P | — | ⬜ |
| 2 | Dados Estáticos e Tipos | P | Fase 1 | ⬜ |
| 3 | Layout (Navbar + Footer) | M | Fase 2 | ⬜ |
| 4 | Hero Section | P | Fase 2 | ⬜ |
| 5 | Sobre Nós | P | Fase 2 | ⬜ |
| 6 | Cardápio Digital | M | Fase 2 | ⬜ |
| 7 | Localização + Contato + Horário | M | Fase 2 | ⬜ |
| 8 | Galeria de Fotos + Avaliações | M | Fase 2 | ⬜ |
| 9 | SEO (meta tags, schema, sitemap, robots) | M | Fase 3-8 | ⬜ |
| 10 | Deploy Vercel + Domínio | P | Fase 9 | ⬜ |

> Effort: **P** (≤ 2h) · **M** (meio dia) · **G** (1 dia ou mais).
> Status: ⬜ pendente · 🟡 em andamento · ✅ concluído.

---

## Riscos e Mitigações

| Risco | Impacto | Probabilidade | Mitigação |
|---|:---:|:---:|---|
| Fotos reais não fornecidas | Alto | Média | Usar fotos do Instagram (@saborilheu.restaurante) como fallback |
| WhatsApp/telefone não confirmados | Médio | Média | Placeholder; confirmar depois com cliente |
| Status "fechado" no Google conflita com site | Alto | Baixa | Instruir cliente a corrigir; site ajuda a contrapor |
| Domínio não registrado | Médio | Média | Domínio Vercel (*.vercel.app) como provisório |

---

## Plano de Execução

### Fase 1 — Inicialização do Projeto

#### [NOVO] Projeto e dependências

```bash
bunx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack
```

Dependências:
```bash
bun add lucide-react
bun add -d @types/node
```

#### [NOVO] Configuração do Next.js para SSG

`next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Necessário para `output: export`
  },
};

export default nextConfig;
```

#### [NOVO] Configuração do Tailwind

`tailwind.config.ts` — adicionar cores da marca:
```typescript
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "azul-mar": "#1B5E6B",
        "verde-agua": "#2D8F8F",
        "areia": "#F5EFE6",
        "terracota": "#D4744A",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
```

#### [NOVO] Estrutura de diretórios

```
src/
├── app/
│   ├── layout.tsx                # Root layout (metadata, fonts, globals)
│   ├── page.tsx                  # Home page (one-page, todas as seções)
│   ├── globals.css               # Tailwind + custom utilities
│   ├── sitemap.ts                # sitemap.xml estático
│   └── robots.ts                 # robots.txt
├── components/
│   ├── sections/                 # Seções da landing page
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── menu-section.tsx
│   │   ├── gallery-section.tsx
│   │   ├── location-section.tsx
│   │   ├── reviews-section.tsx
│   │   ├── contact-section.tsx
│   │   └── footer-section.tsx
│   ├── ui/                       # Componentes base reutilizáveis
│   │   ├── button.tsx
│   │   ├── section-heading.tsx
│   │   ├── whatsapp-button.tsx
│   │   └── image-lightbox.tsx
│   └── layout/                   # Componentes de layout
│       ├── navbar.tsx
│       └── mobile-menu.tsx
├── lib/
│   ├── constants.ts              # Dados estáticos
│   ├── menu-data.ts              # Cardápio
│   ├── reviews-data.ts           # Avaliações
│   └── utils.ts                  # Helpers
└── types/
    └── index.ts                  # Tipos TypeScript
```

---

### Fase 2 — Dados Estáticos e Tipos

#### [NOVO] `src/types/index.ts`

```typescript
export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  image: string;
  category: "pratos" | "porcoes" | "bebidas";
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: "ambiente" | "pratos" | "praia";
}

export interface NavLink {
  label: string;
  href: string;
}
```

#### [NOVO] `src/lib/constants.ts`

Dados estáticos do restaurante:
- Endereço: Rua Amaro Coelho, Barra da Lagoa, Florianópolis - SC
- Horário: Todos os dias, 10h às 18h
- WhatsApp, telefone, e-mail (placeholders)
- Links para Instagram e Facebook
- URL do Google Maps Embed

#### [NOVO] `src/lib/menu-data.ts`

Array de itens do cardápio agrupados por categoria (pratos, porções, bebidas). Inicialmente com placeholders; preencher com dados reais do cliente.

#### [NOVO] `src/lib/reviews-data.ts`

Array estático com as melhores avaliações do Google (4-5 estrelas). Extrair do Google Meu Negócio ou do Facebook.

---

### Fase 3 — Layout (Navbar + Footer)

#### [NOVO] `src/components/layout/navbar.tsx`

- Fixa no topo
- Fundo transparente quando no topo da página → sólido ao scrollar
- Logo "Sabor Ilhéu" à esquerda
- Links âncora: Sobre, Cardápio, Galeria, Contato
- Botão WhatsApp na direita (ícone + texto)
- Mobile: menu hamburguer com os mesmos links + CTA

#### [NOVO] `src/components/layout/mobile-menu.tsx`

- Overlay cobrindo a tela
- Links empilhados verticalmente
- Botão WhatsApp destacado
- Animação de entrada (slide/fade)

#### [NOVO] `src/components/sections/footer-section.tsx`

- Nome/logotipo do restaurante
- Endereço resumido
- Links rápidos (âncora)
- Ícones de redes sociais (Instagram, Facebook)
- Copyright "© 2026 Sabor Ilhéu Bar & Restaurante"

---

### Fase 4 — Hero Section

#### [NOVO] `src/components/sections/hero-section.tsx`

- Full-screen (100vh)
- Imagem de fundo (foto real do restaurante)
- Overlay escuro para legibilidade do texto
- Título H1: "Ilhéu, um sabor à beira-mar"
- Subtítulo: "Restaurante 100% nativo especializado em frutos do mar — Barra da Lagoa, Florianópolis"
- 2 botões CTA: "Ver Cardápio" (scroll para #menu) + "Falar no WhatsApp" (link wa.me)
- Animação fade-in do texto ao carregar

---

### Fase 5 — Sobre Nós

#### [NOVO] `src/components/sections/about-section.tsx`

- Título: "Nossa História"
- Texto sobre quase 10 anos de história (fundado em set/2016)
- 5 cards/ícones com diferenciais:
  1. Cozinha 100% nativa — identidade manezinha
  2. Localização privilegiada à beira-mar
  3. Ambiente rústico e acolhedor
  4. Atendimento familiar e personalizado (Chef Carol)
  5. Pesca local garantindo frescor

---

### Fase 6 — Cardápio Digital

#### [NOVO] `src/components/sections/menu-section.tsx`

- Título: "Nosso Cardápio"
- Abas ou seções: Pratos | Porções | Bebidas
- Cards com foto + nome + descrição curta + preço (se disponível)
- Disclaimer: "Consulte o cardápio completo no restaurante ou via WhatsApp"
- Botão CTA para WhatsApp

---

### Fase 7 — Localização + Contato + Horário

#### [NOVO] `src/components/sections/location-section.tsx`

- Título: "Onde Estamos"
- Google Maps embed (iframe)
- Endereço: Rua Amaro Coelho, Barra da Lagoa, Florianópolis - SC
- Pontos de referência: "A 5 minutos a pé da Praia da Barra da Lagoa", "Próximo à Rodovia SC-406"
- Botão "Como Chegar" → abre Google Maps com rota

#### [NOVO] `src/components/sections/contact-section.tsx`

- Título: "Venha nos Visitar"
- Horário destacado: "Todos os dias, das 10h às 18h"
- Botão WhatsApp grande
- Telefone, e-mail (se disponível)
- Ícones para Instagram e Facebook
- CTA: "Faça sua reserva pelo WhatsApp!"

---

### Fase 8 — Galeria de Fotos + Avaliações

#### [NOVO] `src/components/sections/gallery-section.tsx`

- Título: "Conheça o Ilhéu"
- Grid masonry (desktop) / carrossel swipe (mobile)
- 8-12 fotos com lightbox ao clicar
- Categorias: ambiente, pratos, praia

#### [NOVO] `src/components/sections/reviews-section.tsx`

- Título: "Quem Vem, Recomenda"
- Cards com avaliações (nome, nota em estrelas, texto, data)
- Destaque: Nota 4.3★ | 97 avaliações no Google
- Links: "Ver todas as avaliações no Google" + "Deixe sua avaliação"

---

### Fase 9 — SEO (meta tags, schema, sitemap, robots)

#### [NOVO] `src/app/layout.tsx` — Metadados

```typescript
export const metadata: Metadata = {
  title: "Sabor Ilhéu | Restaurante de Frutos do Mar — Barra da Lagoa, Floripa",
  description: "Restaurante 100% nativo especializado em frutos do mar à beira-mar na Barra da Lagoa, Florianópolis. Comida caseira, atendimento familiar, quase 10 anos de tradição. Das 10h às 18h.",
  openGraph: {
    title: "Sabor Ilhéu — Um sabor à beira-mar",
    description: "Restaurante 100% nativo de frutos do mar na Barra da Lagoa, Floripa.",
    type: "website",
  },
};
```

#### [NOVO] Schema.org Restaurant (JSON-LD)

```typescript
// No layout.tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Sabor Ilhéu Bar & Restaurante",
  address: { /* ... */ },
  servesCuisine: "Frutos do Mar, Cozinha Manezinha",
  priceRange: "$$",
  openingHoursSpecification: { /* ... */ },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.3",
    reviewCount: "97",
  },
};
```

#### [NOVO] `src/app/sitemap.ts`

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://saborilheu.com.br",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
```

#### [NOVO] `src/app/robots.ts`

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
```

---

### Fase 10 — Deploy Vercel + Domínio

#### [NOVO] Deploy

1. Push do repositório para GitHub
2. Importar projeto na Vercel
3. Configurar variáveis de ambiente no dashboard da Vercel
4. Configurar domínio customizado (ex: `saborilheu.com.br`)
5. Verificar SSL ativo
6. Rodar Lighthouse e Google Rich Results Test

---

## Plano de Verificação

### Automatizado

1. `bun run build` — TypeScript + Next.js SSG compilam sem erros
2. `bun run lint` — Sem warnings de ESLint
3. `python .agent/scripts/checklist.py .` — Auditoria geral (opcional)

### Manual

1. **Todas as seções**: Verificar se as 9 seções renderizam corretamente
2. **Responsividade**: iPhone SE, iPhone 12, iPad, Desktop 1920px
3. **Links**: Todos os links (WhatsApp, Instagram, Facebook, Google Maps) abrem corretamente
4. **Imagens**: Nenhuma imagem quebrada, carregamento correto
5. **Schema.org**: Validar no [Google Rich Results Test](https://search.google.com/test/rich-results)
6. **Lighthouse**: Score ≥ 90 nos 4 critérios

### Qualidade e Conformidade

| Área | Ferramenta | Meta |
|---|---|---|
| **Performance** | Lighthouse / PageSpeed | ≥ 90 |
| **Acessibilidade** | Lighthouse / axe | ≥ 90 (WCAG AA) |
| **SEO** | Lighthouse | ≥ 90 |
| **Segurança** | Revisão de secrets, headers | Sem findings críticos |

---

## Critérios de Conclusão (Definition of Done)

- [ ] Todas as fases 1-10 marcadas como ✅ no roadmap
- [ ] `bun run build` e `bun run lint` passando sem erros
- [ ] Variáveis de ambiente documentadas no `.env.example`
- [ ] Sem secrets commitados no repositório
- [ ] Lighthouse ≥ 90 nos 4 critérios
- [ ] Schema.org Restaurant validado no Google Rich Results Test
- [ ] Design responsivo funcional em mobile, tablet e desktop
- [ ] Todos os CTAs de WhatsApp funcionais
- [ ] Google Maps exibindo localização correta
