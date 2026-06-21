# Sabor Ilhéu Landing Page — Code Conventions

<!-- Canonical source of code conventions for AI agents. -->

| Field | Value |
|---|---|
| **Response language** | PT (português) |
| **Code language** | EN (inglês — nomes de variáveis, funções, comentários) |
| **Content language** | PT-BR (textos da interface, meta tags) |
| **Last updated** | 2026-06-20 |

## Naming

| Element | Convention | Example |
|---|---|---|
| Files (components) | kebab-case | `hero-section.tsx` |
| Files (utils) | kebab-case | `format-phone.ts` |
| Components | PascalCase | `HeroSection` |
| Functions | camelCase | `scrollToSection()` |
| Constants | UPPER_SNAKE | `WHATSAPP_NUMBER` |
| Environment variables | UPPER_SNAKE | `NEXT_PUBLIC_SITE_URL` |
| Git branches | kebab-case | `feat/hero-section` |
| Commits | conventional | `feat(ui): add hero section` |

## Imports

```typescript
// ✅ CORRECT: Path aliases
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/hero-section";

// ❌ WRONG: Long relative paths
import { Button } from "../../../components/ui/button";
```

## Typing

```typescript
// ✅ CORRECT: Strong typing for props
interface SectionProps {
  title: string;
  description: string;
  imageUrl?: string;
}

// ✅ CORRECT: Type for menu items, contact data, etc.
interface MenuItem {
  name: string;
  description: string;
  price?: string;
  image: string;
  category: "pratos" | "porcoes" | "bebidas";
}

// ❌ WRONG: Weak typing
const data: any = { ... };
```

## Error Handling

Como é uma landing page estática sem API routes, o tratamento de erro se resume a:

```typescript
// ✅ CORRECT: Fallback para imagens quebradas
<img src={imageUrl} onError={(e) => { e.currentTarget.src = "/fallback.jpg" }} />

// ✅ CORRECT: Dados default para conteúdo que depende do cliente
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "5500000000000";
```

## Environment Variables

```typescript
// ✅ CORRECT: Client-side (public)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP;
const googleMapsEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL;

// ❌ WRONG: Não há secrets — tudo é público em SSG
```

## Commits

```
type(scope): short description in English

feat(sections): add hero section with CTA
feat(seo): add schema.org Restaurant structured data
fix(header): fix mobile menu scroll lock
style(colors): update color palette to match brand
```

| Type | When to use |
|---|---|
| `feat` | New feature / section |
| `fix` | Bug fix |
| `refactor` | Code change without feat/fix |
| `docs` | Documentation only |
| `style` | Formatting, CSS changes |
| `test` | Add/update tests |
| `chore` | Build, deps, tooling |

## Component Structure

```typescript
// ✅ CORRECT: Co-located section data
// src/components/sections/about-section.tsx
const ABOUT_CONTENT = {
  title: "Nossa História",
  description: "...",
  highlights: [ ... ]
};

export function AboutSection() {
  return ( /* ... */ );
}
```

## Textos da Interface

- Todo texto visível ao usuário em **português (PT-BR)**
- Meta tags e SEO em português
- Nomes de variáveis, funções, arquivos em inglês
- Comentários de código em inglês

---

> **Note for AIs:** These conventions apply to ALL generated code. Follow them strictly. Interface text in PT-BR, code identifiers in EN.
