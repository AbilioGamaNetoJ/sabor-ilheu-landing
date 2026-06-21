# Sabor Ilhéu Landing Page — External Integrations

<!-- External APIs and services consumed by the project. -->

| Field | Value |
|---|---|
| **Last updated** | 2026-06-20 |

## External Services

### Google Maps Embed

| Field | Value |
|---|---|
| Purpose | Exibir mapa interativo com a localização do restaurante na seção "Onde Estamos" |
| Type | iframe embed |
| Auth | Nenhuma (gratuito, sem API key) |
| Env var | `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` (URL do embed) |
| Location | `src/components/sections/location-section.tsx` |
| Docs | https://developers.google.com/maps/documentation/embed |

**Used endpoints:**

| Method | Endpoint | Purpose |
|---|---|---|
| iframe | `https://www.google.com/maps/embed?pb=...` | Mapa embed com pin no endereço |

### WhatsApp (wa.me)

| Field | Value |
|---|---|
| Purpose | Contato direto via WhatsApp — reservas, informações, cardápio completo |
| Type | Link direto (URL scheme) |
| Auth | Nenhuma |
| Env var | `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| Location | `src/components/ui/whatsapp-button.tsx`, `src/components/sections/contact-section.tsx` |
| Docs | https://faq.whatsapp.com/5913398998672934 |

**Used endpoints:**

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `https://wa.me/55XXXXXXXXXXX?text=Olá!%20Vim%20pelo%20site` | Abre conversa no WhatsApp |

### Instagram / Facebook

| Field | Value |
|---|---|
| Purpose | Links para redes sociais (sem integração de API/feed) |
| Type | Links externos |
| Auth | Nenhuma |
| Env var | `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_FACEBOOK_URL` |
| Location | `src/components/sections/footer-section.tsx`, `src/components/sections/contact-section.tsx` |

### Google Analytics (P1 — pós-MVP)

| Field | Value |
|---|---|
| Purpose | Métricas de visitação, comportamento do usuário, conversões |
| Type | Script client-side (gtag.js) |
| Auth | Measurement ID |
| Env var | `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| Location | `src/app/layout.tsx` (Script component do Next.js) |
| Docs | https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries |

## Webhooks (incoming)

Nenhum — landing page estática não recebe webhooks.

## Dependências de Fontes

| Service | Type | Location | Notes |
|---|---|---|---|
| Google Fonts | `next/font/google` | `src/app/layout.tsx` | Playfair Display + Lato — baixadas e self-hosted no build (sem requests externos em runtime) |

## Agentes e Skills Relevantes

| Agente/Skill | Relevância |
|---|---|
| `seo-specialist` / `seo-fundamentals` | Schema.org, meta tags, sitemap |
| `frontend-specialist` / `frontend-design` | UI/UX da landing page |
| `performance-optimizer` | Lighthouse score, Core Web Vitals |

---

> **Note for AIs:** API keys in `.env.example`. Never hard-code URLs. Integrações são mínimas — a maioria é apenas links externos, sem chamadas de API.
