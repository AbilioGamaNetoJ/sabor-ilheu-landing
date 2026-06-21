# Sabor Ilhéu — Landing Page

> **Restaurante 100% nativo especializado em frutos do mar** — Cozinha caseira manezinha, ambiente rústico e acolhedor à beira-mar na Barra da Lagoa, Florianópolis.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Build](https://img.shields.io/badge/Build-passing-brightgreen)

---

## Sobre o Projeto

Landing page institucional one-page do **Sabor Ilhéu Bar & Restaurante**, quase 10 anos de história na Barra da Lagoa. O restaurante dependia exclusivamente de redes sociais e Google Meu Negócio (que estava marcado como "fechado permanentemente"). Esta landing page consolida a presença digital própria com:

1. **Identidade da marca** — Design rústico-praiano que reflete a cozinha nativa manezinha
2. **Conversão** — CTA direto para WhatsApp, principal canal de reservas e contato
3. **SEO local** — Ranquear para "restaurante frutos do mar Barra da Lagoa"
4. **Performance** — Site 100% estático (SSG), Lighthouse ≥ 90

### Diferenciais

- Cozinha 100% nativa manezinha — identidade autêntica, não é restaurante genérico de praia
- Localização privilegiada à beira-mar na Barra da Lagoa (5 min a pé da praia)
- Ambiente rústico e acolhedor — comida caseira, atendimento familiar (Chef Carol)
- Preço acessível (R$40–R$120) versus concorrentes premium da região
- Pesca local garantindo frescor dos ingredientes

---

## Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| Hero com tipografia dramática | Título "Ilhéu" em terracota (7rem) + slogan |
| Cardápio interativo | Abas por categoria com fade/stagger |
| Galeria masonry | Grid assimétrico com lightbox |
| Depoimentos em carrossel | Avaliações reais do Google com navegação |
| Mapa interativo | Google Maps embed com endereço e rotas |
| Contato via WhatsApp | Botões de CTA em toda a página |
| Scroll animations | Fade-up + scale com IntersectionObserver |
| Design responsivo | Mobile-first, adaptado para celular na praia |
| SEO | Schema.org JSON-LD, Open Graph, sitemap, robots |

---

## Tech Stack

### Core

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16 | Framework — SSG (`output: 'export'`) |
| [React](https://react.dev/) | 19 | Biblioteca de componentes |
| [TypeScript](https://typescriptlang.org/) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização utility-first |

### UI & Ferramentas

| Tecnologia | Uso |
|---|---|
| [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) | Font headings (serif rústico) |
| [Lato](https://fonts.google.com/specimen/Lato) | Font corpo (sans-serif limpo) |
| [Lucide React](https://lucide.dev/) | Ícones feather-style |
| [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | Fontes otimizadas |
| [next/image](https://nextjs.org/docs/app/building-your-application/optimizing/images) | Imagens otimizadas (webp, lazy loading) |

### Infraestrutura

| Serviço | Uso |
|---|---|
| Vercel | Deploy (free tier), SSL, CDN global |
| Google Maps Embed | Mapa interativo (iframe gratuito) |
| WhatsApp (wa.me) | Contato direto (link, sem API) |

---

## Estrutura do Projeto

```
sabor-ilheu-landing/
├── src/
│   ├── app/
│   │   ├── globals.css           # Estilos globais + textura de fundo
│   │   ├── layout.tsx            # Layout raiz (fonts, metadata, JSON-LD)
│   │   ├── page.tsx              # Página principal (one-page)
│   │   ├── robots.ts             # SEO — robots.txt
│   │   └── sitemap.ts            # SEO — sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx        # Navbar fixa com scroll detection
│   │   │   ├── mobile-menu.tsx   # Menu mobile slide-in
│   │   │   └── footer.tsx        # Footer com links e redes sociais
│   │   ├── sections/
│   │   │   ├── hero-section.tsx  # Hero com parallax e tipografia dramática
│   │   │   ├── about-section.tsx # História + diferenciais
│   │   │   ├── menu-section.tsx  # Cardápio com abas por categoria
│   │   │   ├── gallery-section.tsx # Galeria masonry com lightbox
│   │   │   ├── location-section.tsx # Mapa + endereço
│   │   │   ├── reviews-section.tsx # Carrossel de depoimentos
│   │   │   └── contact-section.tsx # WhatsApp, telefone, horários
│   │   ├── ui/
│   │   │   ├── button.tsx        # Botão multi-variante (primary/secondary/outline)
│   │   │   ├── section-heading.tsx # Título de seção com decoração
│   │   │   ├── scroll-reveal.tsx # Animação fade-up on scroll
│   │   │   ├── wave-divider.tsx   # Separador SVG ondulado
│   │   │   ├── image-lightbox.tsx # Lightbox para galeria
│   │   │   └── whatsapp-button.tsx # Botão flutuante do WhatsApp
│   ├── lib/
│   │   ├── constants.ts          # Configurações do site
│   │   ├── menu-data.ts          # Dados do cardápio
│   │   ├── reviews-data.ts       # Depoimentos
│   │   └── utils.ts              # Utilitários (formatação WhatsApp)
│   └── types/
│       └── index.ts              # Interfaces TypeScript
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg           # Background do hero
│   │   ├── gallery/              # Fotos da galeria (12 imagens)
│   │   └── menu/                 # Fotos do cardápio
│   └── icone-whatsapp.png        # Ícone do WhatsApp
├── .agent/                       # Kit de agentes IA
├── .specs/                       # Documentação do projeto (para IA)
├── AGENTS.md                     # Inventário de agentes e skills
├── CLAUDE.md                     # Instruções Claude Code
├── GEMINI.md                     # Regras Gemini/Antigravity
└── IMPLEMENTATION_GUIDE.md       # Guia de implementação
```

---

## Pré-requisitos

| Ferramenta | Versão | Como verificar |
|---|---|---|
| Node.js | 18.x+ | `node --version` |
| npm | 9.x+ | `npm --version` |
| Git | qualquer | `git --version` |

---

## Como Rodar

```bash
# Clone
git clone https://github.com/AbilioGamaNetoJ/sabor-ilheu-landing.git
cd sabor-ilheu-landing

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
npm run build
npm run start
```

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção (SSG) |
| `npm run start` | Servidor de produção |
| `npm run lint` | Verificação de lint |

---

## Variáveis de Ambiente

Veja o arquivo [.env.example](./.env.example).

```bash
cp .env.example .env
```

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (ex: `https://saborilheu.com.br`) |

---

## Design System

### Paleta de Cores

| Cor | HEX | Uso |
|---|---|---|
| Azul-mar | `#1B5E6B` | Títulos, botões primários, footer |
| Terracota | `#D4744A` | Detalhes, hover, ênfases |
| Verde-água | `#2D8F8F` | Acentos secundários |
| Areia | `#F5EFE6` | Fundo de seções alternadas |

### Tipografia

- **Headings:** Playfair Display (serif) — peso 700
- **Body:** Lato (sans-serif) — pesos 400, 700

### Animações

- Scroll reveal com fade-up + scale (IntersectionObserver)
- Hover com translateY e sombra em cards
- Stagger delays progressivos em grids
- `prefers-reduced-motion` respeitado

---

## Deploy

O deploy é feito na **Vercel** (free tier):

1. Conecte o repositório (`AbilioGamaNetoJ/sabor-ilheu-landing`) ao Vercel
2. Configure `NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente
3. Deploy automático a cada push na `main`

---

## Roadmap

- [x] MVP — Landing page one-page estática
- [ ] Domínio próprio (ex: saborilheu.com.br)
- [ ] Google Business Profile — corrigir status "fechado permanentemente"
- [ ] Analytics (Plausible ou Google Analytics)
- [ ] Cardápio completo com preços e categorias detalhadas
- [ ] Feed do Instagram integrado
- [ ] Multi-idioma (PT/EN/ES)

---

## Sistema de IA

Este projeto utiliza um kit de agentes IA em `.agent/` para desenvolvimento assistido.

| Arquivo | Propósito |
|---|---|
| [AGENTS.md](./AGENTS.md) | Inventário de 15 agentes, 30 skills, 12 workflows |
| [CLAUDE.md](./CLAUDE.md) | Instruções para Claude Code |
| [GEMINI.md](./GEMINI.md) | Regras para Gemini CLI / Antigravity |
| [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) | Workflow padrão de implementação |

---

## Licença

Todos os direitos reservados — Sabor Ilhéu Bar & Restaurante.
