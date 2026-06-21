# Sabor Ilhéu Landing Page — Concerns

<!-- Tech debt, known risks, fragilities. -->

| Field | Value |
|---|---|
| **Last updated** | 2026-06-20 |

## Tech Debt

<!-- Não há tech debt — projeto ainda não iniciado -->

| # | Item | Severity | Estimated effort |
|---|---|---|---|
| 1 | Nenhum débito técnico acumulado (projeto novo) | — | — |

## Known Risks

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| Fotos reais não fornecidas a tempo | Alto — landing page de restaurante sem fotos perde propósito | Média | Usar fotos do Instagram como fallback temporário; implementar placeholder visualmente aceitável |
| Cliente não responde com dados de contato (WhatsApp, telefone) | Médio — CTAs ficam inoperantes | Média | Usar dados extraídos do perfil do Google/Facebook; confirmar depois |
| Status "Permanentemente fechado" no Google Meu Negócio | Alto — usuários podem achar que o restaurante fechou | Baixa (corrigível) | Instruir cliente a atualizar o Google Meu Negócio; site próprio ajuda a contrapor essa informação |
| Domínio não registrado | Médio — bloqueia deploy final | Média | Usar domínio Vercel (`*.vercel.app`) como provisório; funcional, só não é ideal para SEO |
| Conteúdo do cardápio desatualizado | Médio — informações erradas geram frustração | Baixa | Cardápio resumido no MVP com disclaimer "consulte cardápio completo via WhatsApp" |

## Fragilities

<!-- Partes do código que requerem cuidado extra ao modificar -->

| Area | File | Reason |
|---|---|---|
| Schema.org | `src/app/layout.tsx` | Dados estruturados JSON-LD precisam estar corretos — erro de sintaxe quebra rich results |
| next.config.ts | `next.config.ts` | `output: 'export'` — se removido, o build espera servidor Node.js e quebra |

## Known Limitations

- Sem CMS — alterações de conteúdo exigem modificar código e re-deploy
- Google Maps embed pode não funcionar em países com restrições ao Google (ex: China)
- Sem analytics no MVP — decisões de melhoria serão baseadas em intuição, não dados
- Conteúdo apenas em PT-BR no MVP — turistas internacionais podem ter barreira de idioma
- Sem otimização de imagens automática além do `next/image` — fotos muito grandes precisam ser redimensionadas manualmente antes de commit

## Security

- [x] Secrets out of code — sem secrets, landing page é 100% pública
- [x] Input validated — sem formulários, sem input do usuário
- [x] Auth on protected routes — sem rotas protegidas
- [x] CSRF protection — sem formulários, sem estado mutável
- [x] Rate limiting — sem API routes
- [ ] Dependencies up to date (`bun pm untrusted`)

## Agent Kit Health

- [x] `.agent/` agents and skills up to date
- [x] No orphaned references to non-existent skills/agents
- [x] `GEMINI.md` and `CLAUDE.md` aligned with `.agent/rules/GEMINI.md`

---

> **Note for AIs:** Consult this file BEFORE modifying sensitive areas. Report new concerns at the end of the session. Update `.agent/` references if agents/skills change.
