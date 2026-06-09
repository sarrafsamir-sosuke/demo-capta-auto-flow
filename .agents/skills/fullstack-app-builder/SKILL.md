---
name: fullstack-app-builder
description: Use when Codex needs to build or extend functional Capta web systems, CRMs, dashboards, APIs, backends, internal tools, database-backed apps, simple SaaS products, payment-enabled systems, lead capture apps, or production-ready fullstack projects.
---

# Fullstack App Builder

## Objetivo

Criar sistemas web funcionais, CRMs, dashboards, APIs, backends e aplicacoes internas.

## Use quando

- O usuario pedir CRM.
- O usuario pedir sistema interno.
- O usuario pedir dashboard funcional.
- O usuario pedir API.
- O usuario pedir sistema com banco.
- O usuario pedir SaaS simples.

## Regras

- Comecar com MVP funcional.
- Separar frontend, backend e banco quando necessario.
- Criar models e entidades claras.
- Usar `.env.example` quando houver variaveis sensiveis ou configuracao externa.
- Nunca colocar credenciais reais no codigo.
- Criar README com instalacao, uso, teste e deploy.
- Criar dados seed ou fake quando util.
- Criar rotas simples e testaveis.
- Se houver autenticacao, manter simples no MVP.
- Priorizar clareza e manutencao.
- Evitar overengineering e abstracoes prematuras.

## Processo

1. Inspecionar o projeto existente antes de escolher stack, estrutura ou padroes.
2. Definir entidades, fluxos, permissoes, integracoes e alvo de deploy.
3. Implementar o MVP funcional primeiro.
4. Criar frontend, backend e banco separados somente quando isso ajudar a entrega.
5. Criar rotas, telas e funcoes com nomes claros e comportamento testavel.
6. Adicionar dados fake, seed ou fixtures quando acelerarem teste e apresentacao.
7. Documentar variaveis em `.env.example`.
8. Criar README e checklist de entrega.
9. Rodar testes, build ou verificacao manual adequada ao projeto.

## Padroes

Leads devem ter:

- Nome
- Contato
- Origem
- Status
- Interesse
- Observacoes
- Data

Status padrao:

- novo
- interessado
- em atendimento
- proposta enviada
- fechado
- perdido

Dashboards devem mostrar metricas uteis, como:

- Total de leads
- Leads por status
- Origem dos leads
- Conversoes
- Atendimentos pendentes
- Receita ou potencial de receita quando aplicavel

Sistemas comerciais devem indicar o proximo passo de venda ou upsell.

## Saida esperada

Ao criar sistema funcional, entregar:

- Aplicacao funcionando
- README
- `.env.example`, quando necessario
- Models, rotas e entidades claras
- Dados seed ou fake, quando util
- Instrucoes de instalacao, uso, teste e deploy
- Checklist de QA
- Sugestoes de upsell ou evolucao
