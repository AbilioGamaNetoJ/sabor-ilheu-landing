# PRD — Product Requirements Document

## Landing Page: Sabor Ilhéu Bar & Restaurante

---

## 1. Visão Geral do Produto

| Campo | Detalhe |
|---|---|
| **Cliente** | Sabor Ilhéu Bar & Restaurante |
| **Proprietário** | Daniel Souza da Conceição |
| **Localização** | Rua Amaro Coelho, Barra da Lagoa, Florianópolis - SC |
| **Fundação** | Setembro de 2016 (quase 10 anos) |
| **Segmento** | Gastronomia — Frutos do Mar / Cozinha Nativa Manezinha |
| **Slogan** | "Ilhéu, um sabor à beira-mar" |
| **Faixa de preço** | R\$40 a R\$120 por pessoa (\$\$) |
| **Horário** | Todos os dias, das 10h às 18h |
| **Projeto** | Landing Page institucional |

### 1.1 Problema

O Sabor Ilhéu não possui site próprio. Toda sua presença digital depende exclusivamente de redes sociais (Instagram: ~910 seguidores, Facebook: ~707 seguidores) e do Google Meu Negócio (4.3★, 97 avaliações, porém marcado como "Permanentemente fechado" — informação desatualizada).

### 1.2 Solução Proposta

Criar uma **landing page one-page** institucional que:

- Consolide todas as informações do restaurante em um único lugar
- Transmita a identidade rústica, nativa e à beira-mar da marca
- Converta visitantes em clientes via WhatsApp e telefone
- Seja encontrável via SEO local
- Funcione perfeitamente em dispositivos móveis (maioria dos acessos virá de celulares na praia)

---

## 2. Objetivos

### 2.1 Objetivo de Negócio

Aumentar o fluxo de clientes presenciais e facilitar o contato direto (reservas, informações) através de um canal digital próprio.

### 2.2 Objetivos Específicos (SMART)

| # | Objetivo | Métrica |
|---|---|---|
| 1 | Ranquear no Google para buscas locais | Top 3 para "restaurante frutos do mar Barra da Lagoa" e "restaurante Barra da Lagoa" em até 3 meses |
| 2 | Gerar contatos via WhatsApp | Mínimo 30 cliques/mês no botão de WhatsApp |
| 3 | Centralizar informações do restaurante | Reduzir em 100% a dependência exclusiva de redes sociais para informação institucional |
| 4 | Corrigir percepção de "fechado" no digital | Landing page ranqueando acima do card do Google com status desatualizado |

---

## 3. Público-Alvo

### Segmento 1 — Turistas e Veranistas (Primário)
- Visitantes de Florianópolis, principalmente na alta temporada (dezembro a março)
- Turistas internacionais (Argentina, Uruguai, Chile)
- Famílias e casais buscando experiência gastronômica à beira-mar
- **Comportamento:** buscam no Google "restaurante perto de mim", "frutos do mar Barra da Lagoa" pelo celular

### Segmento 2 — Moradores Locais (Secundário)
- Residentes da Barra da Lagoa e bairros próximos (Lagoa da Conceição, Praia Mole)
- Surfistas e frequentadores da praia
- Trabalhadores da região para almoço
- **Comportamento:** já conhecem o local, usam o site para ver cardápio e horário

### Perfil Demográfico
- Idade: 25 a 55 anos
- Classes B e C
- Interesse em gastronomia, praia, natureza e cultura local
- Usuários ativos de Instagram e WhatsApp

---

## 4. Estrutura da Página (One-Page)

### Mapa da Landing Page

```
┌─────────────────────────────────────┐
│ 1. NAVBAR (fixa, transparente → sólida ao scroll) │
│    Logo | Links das seções | CTA WhatsApp │
├─────────────────────────────────────┤
│ 2. HERO SECTION (full-screen)      │
│    Foto de fundo | Slogan | 2 CTAs │
├─────────────────────────────────────┤
│ 3. SOBRE NÓS                       │
│    História + Diferenciais          │
├─────────────────────────────────────┤
│ 4. CARDÁPIO DIGITAL                │
│    Destaques | Categorias           │
├─────────────────────────────────────┤
│ 5. GALERIA DE FOTOS                │
│    Grid/Masonry | Ambiente + Pratos │
├─────────────────────────────────────┤
│ 6. LOCALIZAÇÃO                     │
│    Google Maps | Endereço | Pontos de referência │
├─────────────────────────────────────┤
│ 7. AVALIAÇÕES                      │
│    Google Reviews | Destaques       │
├─────────────────────────────────────┤
│ 8. HORÁRIO & CONTATO               │
│    Horário | WhatsApp | Telefone | Redes Sociais │
├─────────────────────────────────────┤
│ 9. FOOTER                          │
│    Logo | Links | Social | Copyright │
└─────────────────────────────────────┘
```

---

## 5. Especificação das Seções

### 5.1 Navbar

| Propriedade | Especificação |
|---|---|
| **Comportamento** | Fixa no topo. Fundo transparente na Hero → sólido (branco/off-white) ao scrollar |
| **Logo** | Nome "Sabor Ilhéu" à esquerda (texto ou logotipo se existir) |
| **Links** | Links âncora para cada seção (Sobre, Cardápio, Galeria, Contato) |
| **CTA** | Botão "Fale Conosco" via WhatsApp (ícone + texto) — destaque visual |
| **Mobile** | Menu hamburguer com os mesmos links + CTA |

### 5.2 Hero Section

| Propriedade | Especificação |
|---|---|
| **Layout** | Full-screen (100vh), overlay escuro sobre imagem de fundo |
| **Imagem de fundo** | Foto real do restaurante: mesa com prato de frutos do mar, vista do mar ao fundo, ou fachada rústica. **NÃO usar placeholder/stock genérico** |
| **Título (H1)** | "Ilhéu, um sabor à beira-mar" |
| **Subtítulo** | "Restaurante 100% nativo especializado em frutos do mar — Barra da Lagoa, Florianópolis" |
| **CTAs** | 2 botões: "Ver Cardápio" (scroll para seção) + "Falar no WhatsApp" (link externo) |
| **Animação leve** | Fade-in do texto ao carregar |

### 5.3 Sobre Nós

| Propriedade | Especificação |
|---|---|
| **Título (H2)** | "Nossa História" |
| **Texto** | Parágrafo sobre quase 10 anos de história (fundado em set/2016), cozinha 100% nativa manezinha, Chef Carol, proposta de comida caseira com frutos do mar frescos |
| **Destaques** | Cards/ícones com os 5 diferenciais competitivos: |
| | 🐟 Cozinha 100% nativa — identidade manezinha autêntica |
| | 📍 Localização privilegiada à beira-mar |
| | 🏡 Ambiente rústico e acolhedor |
| | 👨‍👩‍👧 Atendimento familiar e personalizado (Chef Carol) |
| | 🎣 Pesca local garantindo frescor dos ingredientes |

### 5.4 Cardápio Digital

| Propriedade | Especificação |
|---|---|
| **Título (H2)** | "Nosso Cardápio" |
| **Categorias** | Pratos, Porções, Bebidas/Drinks |
| **Formato** | Cards com foto + nome + descrição curta + preço (se definido) |
| **Observação** | "Consulte o cardápio completo no restaurante ou via WhatsApp" — botão CTA |
| **Nota importante** | As fotos devem ser REAIS dos pratos do restaurante. Fotos de banco de imagem são proibidas. |

### 5.5 Galeria de Fotos

| Propriedade | Especificação |
|---|---|
| **Título (H2)** | "Conheça o Ilhéu" |
| **Layout** | Grid masonry (desktop) / carrossel swipe (mobile) |
| **Categorias de imagem** | Ambiente interno/externo, pratos, praia próxima, momentos/eventos |
| **Interação** | Lightbox ao clicar |
| **Quantidade** | 8 a 12 fotos inicialmente |
| **Origem** | Fotos reais fornecidas pelo cliente ou do Instagram (@saborilheu.restaurante) |

### 5.6 Localização

| Propriedade | Especificação |
|---|---|
| **Título (H2)** | "Onde Estamos" |
| **Mapa** | Google Maps embed com pin no endereço exato |
| **Endereço** | Rua Amaro Coelho, Barra da Lagoa, Florianópolis - SC |
| **Pontos de referência** | "A 5 minutos a pé da Praia da Barra da Lagoa", "Próximo à Rodovia SC-406" |
| **Botão** | "Como Chegar" → abre Google Maps com rota |

### 5.7 Avaliações

| Propriedade | Especificação |
|---|---|
| **Título (H2)** | "Quem Vem, Recomenda" |
| **Layout** | Cards com as melhores avaliações do Google |
| **Dados** | Nota 4.3★ | 97 avaliações no Google |
| **Integração** | Opcional: embed do Google Reviews via API ou estático com as melhores avaliações |
| **CTAs** | Link para "Ver todas as avaliações no Google" + "Deixe sua avaliação" |

### 5.8 Horário & Contato

| Propriedade | Especificação |
|---|---|
| **Título (H2)** | "Venha nos Visitar" |
| **Horário** | Destaque visual: "Todos os dias, das 10h às 18h" |
| **WhatsApp** | Botão grande com número e ícone — link wa.me/55XXXXXXXXXXX |
| **Telefone** | Número para ligações |
| **E-mail** | Se disponível |
| **Redes Sociais** | Ícones para Instagram (@saborilheu.restaurante) e Facebook |
| **Call to action** | "Faça sua reserva pelo WhatsApp!" |

### 5.9 Footer

| Propriedade | Especificação |
|---|---|
| **Conteúdo** | Logo/Nome, endereço resumido, links rápidos, ícones sociais |
| **Copyright** | "© 2026 Sabor Ilhéu Bar & Restaurante. Todos os direitos reservados." |
| **Crédito** | "Desenvolvido por [nome]" (opcional) |

---

## 6. Identidade Visual / Design System

### 6.1 Direção Criativa

> A landing page deve transmitir a essência do Sabor Ilhéu: um lugar **autêntico, rústico, à beira-mar**, onde se come bem, com comida caseira e frutos do mar frescos, em um ambiente familiar e acolhedor. A experiência digital deve ser tão convidativa quanto o próprio restaurante.

### 6.2 Paleta de Cores

| Cor | Hex (sugestão) | Uso |
|---|---|---|
| **Azul-mar primário** | `#1B5E6B` | Títulos, botões CTA, navbar sólida |
| **Verde-água** | `#2D8F8F` | Elementos de destaque, hover, links |
| **Areia/Bege** | `#F5EFE6` | Fundo de seções alternadas |
| **Off-white** | `#FAFAFA` | Fundo principal |
| **Texto escuro** | `#2D2D2D` | Texto corrido |
| **Laranja/terracota** | `#D4744A` | CTA secundário, detalhes |

### 6.3 Tipografia

| Elemento | Fonte (sugestão) | Peso |
|---|---|---|
| **Títulos (H1-H3)** | Playfair Display (serif, remete ao rústico/praiano) | Bold / Regular |
| **Corpo** | Lato ou Open Sans (sans-serif, boa legibilidade) | Regular 400 / 700 |
| **Destaques** | Mesma fonte do corpo em bold | 700 |

### 6.4 Elementos Gráficos

- Ícones lineares (estilo feather) para diferenciais e contato
- Separadores de seção ondulados (remetendo a ondas do mar)
- Cantos levemente arredondados nos cards
- Sombras suaves para profundidade

---

## 7. Requisitos Técnicos

### 7.1 Stack Tecnológica Recomendada

| Camada | Tecnologia | Justificativa |
|---|---|---|
| **Framework** | Next.js 14+ ou Astro | Performance, SEO, SSG para landing page estática |
| **Estilização** | Tailwind CSS | Produtividade, design system consistente |
| **Hospedagem** | Vercel (gratuito) ou Netlify | Deploy simples, SSL, CDN global |
| **Domínio** | A definir (ex: saborilheu.com.br) | Necessário adquirir |
| **Mapa** | Google Maps Embed API | Gratuito para embed |
| **WhatsApp** | Link wa.me | Sem dependência de API |
| **Formulário** | Sem formulário (nesta versão) | Contato direto via WhatsApp |

### 7.2 Requisitos Não-Funcionais

| Requisito | Meta |
|---|---|
| **Performance** | Lighthouse Score ≥ 90 (Performance, Accessibility, Best Practices, SEO) |
| **Mobile-first** | Design e desenvolvimento priorizando viewport mobile (< 428px) |
| **Tempo de carregamento** | LCP < 2.5s, FID < 100ms, CLS < 0.1 |
| **SEO** | HTML semântico, meta tags completas, Open Graph, Schema.org (Restaurant) |
| **Acessibilidade** | WCAG 2.1 AA, contraste adequado, navegação por teclado |
| **Compatibilidade** | Chrome, Safari, Firefox (últimas 2 versões) + iOS Safari + Android Chrome |

---

## 8. SEO — Otimização para Buscadores

### 8.1 Palavras-Chave Alvo

| Palavra-chave | Tipo |
|---|---|
| restaurante frutos do mar Barra da Lagoa | Principal |
| restaurante Barra da Lagoa | Principal |
| frutos do mar Florianópolis | Secundária |
| comida caseira Barra da Lagoa | Long-tail |
| restaurante beira mar Floripa | Long-tail |
| restaurante nativo manezinho | Long-tail |

### 8.2 Meta Tags Base

```html
<title>Sabor Ilhéu | Restaurante de Frutos do Mar — Barra da Lagoa, Floripa</title>
<meta name="description" content="Restaurante 100% nativo especializado em frutos do mar à beira-mar na Barra da Lagoa, Florianópolis. Comida caseira, atendimento familiar, quase 10 anos de tradição. Das 10h às 18h." />
```

### 8.3 Dados Estruturados (Schema.org)

Implementar `schema.org/Restaurant` com:
- Nome, endereço, telefone
- Horário de funcionamento
- Faixa de preço
- Avaliação agregada (4.3★, 97 avaliações)
- Coordenadas geográficas
- Links para redes sociais

### 8.4 Open Graph

```html
<meta property="og:title" content="Sabor Ilhéu — Um sabor à beira-mar" />
<meta property="og:description" content="Restaurante 100% nativo de frutos do mar na Barra da Lagoa, Floripa." />
<meta property="og:image" content="[URL da imagem de capa]" />
<meta property="og:type" content="restaurant" />
```

---

## 9. Funcionalidades

### 9.1 Funcionalidades da V1 (MVP)

| ID | Funcionalidade | Prioridade |
|---|---|---|
| F01 | Hero section com foto real e CTA para WhatsApp | P0 |
| F02 | Seção Sobre Nós com diferenciais | P0 |
| F03 | Cardápio digital resumido com fotos | P0 |
| F04 | Google Maps com localização | P0 |
| F05 | Horário de funcionamento destacado | P0 |
| F06 | Botão WhatsApp fixo (flutuante) | P0 |
| F07 | Links para Instagram e Facebook | P0 |
| F08 | Galeria de fotos com lightbox | P1 |
| F09 | Seção de avaliações do Google | P1 |
| F10 | SEO completo (meta tags, schema, sitemap) | P0 |
| F11 | Design responsivo mobile-first | P0 |
| F12 | Google Analytics ou Plausible | P1 |

### 9.2 Funcionalidades Futuras (pós-MVP)

| ID | Funcionalidade | Prioridade |
|---|---|---|
| F13 | Cardápio completo interativo com preços | P2 |
| F14 | Sistema de reservas via WhatsApp automatizado | P2 |
| F15 | Integração com Instagram feed (últimos posts) | P2 |
| F16 | Multi-idioma (PT/EN/ES) | P3 |
| F17 | Blog com conteúdo sobre gastronomia local | P3 |

---

## 10. Conteúdo Necessário (do Cliente)

Para a execução, serão necessários os seguintes materiais do cliente:

| Item | Formato | Status |
|---|---|---|
| Fotos profissionais dos pratos | JPEG/PNG (alta resolução) | ⬜ Pendente |
| Fotos do ambiente (interno/externo) | JPEG/PNG | ⬜ Pendente |
| Foto da fachada | JPEG/PNG | ⬜ Pendente |
| Logotipo (se existir) | SVG ou PNG | ⬜ Pendente |
| Número de WhatsApp | — | ⬜ Pendente |
| Número de telefone fixo | — | ⬜ Pendente |
| E-mail de contato | — | ⬜ Pendente |
| Cardápio completo com preços | PDF/Texto | ⬜ Pendente |
| Texto de história/apresentação | Texto | ⬜ Parcial (extraído do doc) |

---

## 11. Premissas e Restrições

### 11.1 Premissas
- O cliente fornecerá fotos reais em alta resolução
- O cliente definirá e adquirirá o domínio (ou delegará a compra)
- O restaurante continua operando normalmente (status "fechado" no Google é um erro a ser corrigido)
- O WhatsApp Business é o canal principal de contato

### 11.2 Restrições
- Orçamento enxuto (solução simples, sem backend complexo)
- Sem necessidade de login ou área restrita
- Conteúdo estático (sem CMS nesta fase)
- Prazo ideal: 1-2 semanas para MVP

---

## 12. Critérios de Aceite

- [ ] Landing page publicada em domínio próprio com HTTPS
- [ ] Todas as seções do item 4 implementadas
- [ ] Design responsivo funcional em mobile, tablet e desktop
- [ ] Lighthouse Score ≥ 90 nos 4 critérios
- [ ] Schema.org Restaurant implementado e validado (Google Rich Results Test)
- [ ] Botão de WhatsApp funcional com link correto
- [ ] Google Maps exibindo localização correta
- [ ] Meta tags e Open Graph implementados
- [ ] Compatível com Chrome, Safari e Firefox
- [ ] Tempo de carregamento < 3s em 4G (Lighthouse)

---

## 13. Referências

| Fonte | Link / Observação |
|---|---|
| Instagram | @saborilheu.restaurante |
| Facebook | Sabor Ilheu Bar E Restaurante (~707 seguidores, 78% recomendação) |
| Google Meu Negócio | 4.3★ (97 avaliações) — Status: **precisa ser corrigido** |
| Documento base | Perfil_Sabor_Ilheu.docx (junho/2026) |

---

> **Versão do documento:** 1.0  
> **Data:** 20 de junho de 2026  
> **Status:** Aguardando revisão do cliente  
