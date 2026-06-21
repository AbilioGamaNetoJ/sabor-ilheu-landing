# Changelog

Todas as mudanças relevantes deste kit de templates serão documentadas aqui.

Formato baseado em [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versões seguem [Versionamento Semântico](https://semver.org/): `MAJOR.MINOR.PATCH`
— `MAJOR` mudanças que quebram compatibilidade · `MINOR` novas funcionalidades · `PATCH` correções.

---

## [Não lançado]

> Mudanças prontas para a próxima versão entram aqui.

---

## [1.1.0] — 19/06/2026

### Adicionado

- `IMPLEMENTATION_PLAN.md` (renomeado de `implementation_plan.md`): tabela de metadados (status, versão, data, responsável), seção de escopo (dentro/fora), tabela de roadmap de fases com esforço e dependências, tabela de riscos e mitigações, checklist de Critérios de Conclusão e tabela de verificação de qualidade (Performance, Acessibilidade, SEO, Segurança).
- `README.md`: seções de Demonstração, Testes, Troubleshooting (com `<details>` recolhível), Roadmap, Contribuição e Licença. Adicionado placeholder de badge de CI e referência cruzada para `.agent/rules/GEMINI.md`.
- `GEMINI.md` (raiz): nota canônica marcando-o como fonte única de verdade para regras globais; referência cruzada para `.agent/rules/GEMINI.md` adicionada ao bloco de Referências.
- `.agent/rules/GEMINI.md`: referência cruzada de volta para o `GEMINI.md` raiz nas seções de Idioma e Clean Code.

### Alterado

- `implementation_plan.md` renomeado para `IMPLEMENTATION_PLAN.md` para seguir a convenção de maiúsculas dos demais docs raiz (`CLAUDE.md`, `GEMINI.md`, `AGENTS.md`, etc.).
- `IMPLEMENTATION_PLAN.md`: títulos restantes em inglês traduzidos para português (`Proposed Changes` → `Plano de Execução`, `Verification Plan` → `Plano de Verificação`, `[NEW]` → `[NOVO]`, `Definition of Done` → `Critérios de Conclusão`).
- `.agent/rules/GEMINI.md`: seções de Idioma e Clean Code passaram a referenciar o `GEMINI.md` raiz em vez de duplicar as regras.

### Corrigido

- `.agent/agents/backend-specialist.md`: removidas skills inexistentes `python-patterns`, `rust-pro`, `powershell-windows`.
- `.agent/agents/devops-engineer.md`: removidas skills inexistentes `server-management`, `powershell-windows`.
- `.agent/agents/orchestrator.md`: removida skill inexistente `powershell-windows`.
- `.agent/agents/security-auditor.md`: removida skill inexistente `red-team-tactics`.
- `.agent/agents/test-engineer.md`: removida skill inexistente `tdd-workflow`.
- `.agent/agents/debugger.md`: adicionados campos `tools` e `model` ausentes (único agente sem eles).
- `.agent/agents/explorer-agent.md`: substituídas ferramentas inexistentes no Claude Code (`ViewCodeItem`, `FindByName`) por `Read, Grep, Glob, Bash`.
- `.agent/skills/nextjs-react-expert/SKILL.md`: campo `name` corrigido de `react-best-practices` para `nextjs-react-expert`, alinhando com o nome do diretório.
- `.agent/workflows/caveman.md`: dois blocos de frontmatter YAML duplicados fundidos em um único bloco válido.
- `.agent/rules/GEMINI.md`: removido `game-developer` do Quick Reference (agente não existe no kit); removidos scripts fantasmas `dependency_analyzer.py` e `bundle_analyzer.py`; adicionados 6 scripts reais que estavam faltando (`api_validator.py`, `type_coverage.py`, `geo_checker.py`, `i18n_checker.py`, `react_performance_checker.py`, `convert_rules.py`); total atualizado de 12 para 16.

---

## [1.0.0] — 19/06/2026

### Adicionado

- Lançamento inicial do kit de templates de documentação com IA.
- Docs raiz: `README.md`, `CLAUDE.md`, `GEMINI.md`, `AGENTS.md`, `IMPLEMENTATION_GUIDE.md`, `implementation_plan.md`, `.env.example`, `.mcp.json`.
- Kit de agentes em `.agent/`: 15 agentes especialistas, 30 skills modulares, 12 workflows, ferramentas MCP compartilhadas, scripts de validação e documentação de arquitetura.

---

[Não lançado]: https://github.com/{seu-usuario}/{nome-do-repo}/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/{seu-usuario}/{nome-do-repo}/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/{seu-usuario}/{nome-do-repo}/releases/tag/v1.0.0
