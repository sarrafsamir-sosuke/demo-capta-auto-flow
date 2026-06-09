---
name: automation-builder
description: Use when Codex needs to design, document, build, or test Capta automations, n8n workflows, webhooks, WhatsApp or Telegram flows, Google Sheets or CRM integrations, payment webhooks, automatic follow-up, notifications, lead capture, or tool-to-tool business integrations.
---

# Automation Builder

## Objetivo

Criar automacoes, webhooks, fluxos n8n, integracoes com WhatsApp, Telegram, Google Sheets, CRM, pagamento e notificacoes.

## Use quando

- O usuario pedir automacao.
- O usuario pedir n8n.
- O usuario pedir fluxo.
- O usuario pedir integracao entre ferramentas.
- O usuario pedir WhatsApp ou Telegram.
- O usuario pedir follow-up automatico.
- O usuario pedir webhook de pagamento.

## Regras

- Sempre desenhar o fluxo antes de criar.
- Listar triggers, acoes, ferramentas e credenciais necessarias.
- Quando possivel, gerar JSON importavel para n8n.
- Usar placeholders para credenciais.
- Nunca colocar tokens reais.
- Explicar como importar e testar.
- Criar tratamento basico de erro.
- Separar fluxo manual, semi-automatico e automatico quando fizer sentido.
- Documentar quais pontos dependem de credenciais reais do cliente.

## Processo

1. Definir o evento de negocio que inicia a automacao.
2. Desenhar o fluxo em ordem: trigger, filtros, transformacoes, acoes, notificacoes e armazenamento.
3. Listar ferramentas envolvidas e credenciais necessarias.
4. Definir payload de entrada e payload de saida.
5. Criar nodes, webhooks ou codigo somente depois do fluxo aprovado.
6. Incluir tratamento basico de erro, duplicidade e falha de API.
7. Gerar JSON importavel para n8n quando a estrutura estiver clara e for viavel.
8. Explicar como importar, configurar credenciais e testar.

## Saida esperada

Ao criar automacao, entregar:

- Descricao do fluxo
- Lista de nodes e ferramentas
- Payload de entrada
- Payload de saida
- JSON importavel quando possivel
- Checklist de teste
- Pontos que precisam de credenciais reais
- Tratamento de erro
- Proximos upsells

## Padroes por tipo

Para n8n:

- Informar trigger node.
- Listar nodes em ordem.
- Usar nomes claros para cada node.
- Usar placeholders como `{{CREDENTIAL_NAME}}`, `{{WEBHOOK_URL}}` e `{{API_KEY}}`.
- Explicar como importar o JSON e configurar credenciais.

Para WhatsApp ou Telegram:

- Definir gatilho de entrada.
- Definir mensagens principais.
- Capturar nome, contato, interesse e proximo passo.
- Prever transferencia para humano.
- Evitar spam e repeticao excessiva.

Para pagamento:

- Manual: link ou confirmacao humana.
- Semi-automatico: webhook ou planilha com revisao humana.
- Automatico: webhook validado, reconciliacao e tratamento de falha.
