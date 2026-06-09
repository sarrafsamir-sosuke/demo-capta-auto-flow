---
name: delivery-qa
description: Use when Codex needs to review, test, document, package, or prepare a Capta project for client delivery, including final review, pre-client checklist, demo handoff, app QA, automation QA, README review, Vercel or deploy readiness, and post-sale suggestions.
---

# Delivery QA

## Objetivo

Revisar, testar, documentar e preparar projetos para entrega ao cliente.

## Use quando

- O projeto estiver quase pronto.
- O usuario pedir revisao final.
- O usuario pedir para preparar entrega.
- O usuario pedir checklist antes de mandar para cliente.

## Regras

- Testar botoes, links, responsividade e fluxo principal.
- Verificar se nao ha textos errados, placeholders indevidos ou dados sensiveis.
- Verificar se o README esta claro.
- Verificar se `.env.example` existe quando necessario.
- Verificar se o projeto roda localmente.
- Verificar se esta pronto para Vercel ou deploy indicado.
- Criar uma mensagem curta de entrega para enviar ao cliente.
- Criar lista de alteracoes futuras e upsells possiveis.
- Quando encontrar problema, corrigir se estiver dentro do escopo e for seguro.

## Processo

1. Identificar o tipo de entrega: demo, sistema funcional, CRM, dashboard, automacao, bot, landing page ou integracao.
2. Rodar ou inspecionar o projeto localmente.
3. Testar fluxo principal, botoes, links, formularios e estados de erro.
4. Verificar responsividade e apresentacao visual em mobile e desktop quando houver frontend.
5. Procurar placeholders indevidos, textos errados, dados fake mal sinalizados e dados sensiveis.
6. Conferir README, `.env.example`, instrucoes de teste e instrucoes de deploy.
7. Aplicar correcoes pequenas e objetivas quando necessario.
8. Preparar mensagem de entrega e sugestoes de pos-venda.

## Saida esperada

Ao preparar uma entrega, responder com:

- Checklist de QA
- Problemas encontrados
- Correcoes feitas
- Como testar
- Mensagem de entrega
- Sugestoes de pos-venda

## Checklist base

- Projeto roda localmente.
- Build passa, quando houver build.
- README explica instalacao, uso, teste e deploy.
- `.env.example` existe quando necessario.
- Nenhum segredo real esta no codigo.
- Botoes e links principais funcionam.
- Layout funciona em desktop e mobile.
- Fluxo principal foi testado.
- Demo ou sistema funcional esta claramente identificado.
- Deploy indicado esta documentado.
- Limitacoes conhecidas estao registradas.
- Proximos upsells estao listados.
