# Capta Workbench

Ambiente operacional da Capta para transformar ideias comerciais em escopo, demos, sistemas, automacoes, documentacao, testes e entregas.

A Capta cria solucoes digitais e automacoes para negocios de qualquer nicho. Este workbench organiza o trabalho para que o Codex atue como executor principal: estruturar pedidos, criar prototipos, desenvolver sistemas, montar automacoes, revisar entregas e preparar materiais para clientes.

## Como usar este ambiente

Use este repositorio como base de operacao da agencia:

- `demos/`: guardar demos comerciais, prototipos, mockups, landing pages de validacao, prints e experiencias rapidas para vender uma ideia.
- `client-projects/`: guardar projetos reais de clientes, sistemas funcionais, CRMs, dashboards, APIs, apps internos e entregas contratadas.
- `templates/`: guardar modelos reutilizaveis, bases de frontend, checklists, propostas, estruturas de README, exemplos de automacao e boilerplates.
- `proposals/`: guardar propostas comerciais, escopos aprovados, precificacoes e documentos de venda.
- `docs/`: guardar documentacao interna, guias de processo, padroes da Capta e materiais de apoio.
- `.agents/skills/`: guardar as skills que orientam como o Codex deve trabalhar dentro da operacao da Capta.

## Estrutura

```text
capta-workbench/
|-- .agents/
|   `-- skills/
|       |-- project-architect/
|       |-- demo-builder/
|       |-- fullstack-app-builder/
|       |-- automation-builder/
|       `-- delivery-qa/
|-- demos/
|-- templates/
|-- client-projects/
|-- proposals/
|-- docs/
`-- README.md
```

## Como usar as skills

Use as skills como modos de trabalho para direcionar o Codex.

`project-architect`: usar quando uma ideia ainda esta baguncada ou quando for preciso transformar uma dor de cliente em escopo, arquitetura, tarefas, stack, riscos e proximos passos.

`demo-builder`: usar quando o objetivo for vender, impressionar um lead, validar uma ideia, criar um prototipo rapido ou gerar uma demo visual pronta para print, video ou link.

`fullstack-app-builder`: usar quando o projeto precisar virar sistema real: CRM, dashboard funcional, API, backend, banco de dados, SaaS simples ou ferramenta interna.

`automation-builder`: usar quando o pedido envolver n8n, webhooks, WhatsApp, Telegram, Google Sheets, CRM, pagamento, notificacoes, follow-up automatico ou integracao entre ferramentas.

`delivery-qa`: usar antes de enviar algo ao cliente, para revisar fluxo, botoes, links, responsividade, README, `.env.example`, deploy, dados sensiveis e mensagem de entrega.

## Onde colocar demos

Crie cada demo dentro de `demos/`, de preferencia com nome curto e claro:

```text
demos/
`-- crm-clinica-estetica-demo/
```

Toda demo deve ter:

- README proprio.
- Dados fake realistas.
- Indicacao clara do que e simulado.
- Instrucoes de teste.
- Mensagem curta para enviar ao lead.
- Proximo passo para transformar em sistema real.

## Onde colocar projetos de clientes

Crie cada projeto real dentro de `client-projects/`, separado por cliente ou oportunidade:

```text
client-projects/
`-- cliente-nome-projeto/
```

Todo projeto de cliente deve ter:

- README proprio.
- `.env.example` quando houver variaveis sensiveis.
- Checklist de entrega.
- Instrucoes de instalacao, uso, teste e deploy.
- Separacao clara entre escopo contratado e futuras evolucoes.
- Nenhuma credencial real no codigo.

## Onde colocar templates

Use `templates/` para guardar materiais reutilizaveis que aceleram vendas e entregas:

- Bases de landing page.
- Bases de CRM.
- Estruturas de README.
- Checklists de QA.
- Modelos de proposta.
- Exemplos de payload.
- Fluxos n8n reutilizaveis.
- Mensagens prontas para envio ao cliente.

Templates nao devem conter credenciais reais nem dados sensiveis de clientes.

## Regras gerais da Capta

- Priorizar solucoes simples, vendaveis e rapidas.
- Evitar complexidade sem necessidade.
- Separar demo comercial de sistema funcional real.
- Nao usar tokens, senhas ou credenciais reais no codigo.
- Usar `.env.example` quando houver variaveis sensiveis.
- Criar README em todo projeto dentro de `demos/` e `client-projects/`.
- Pensar sempre em dor do cliente, solucao, escopo, entrega, prazo e proximo upsell.
- Quando for frontend simples, preparar para Vercel.
- Quando for automacao, explicar fluxo, nodes, credenciais e teste.
- Quando for CRM, pensar em leads, status, origem, follow-up, dashboard e historico.
- Quando for integracao de pagamento, separar manual, semi-automatico e automatico.
- Sempre criar checklist de entrega.

## Fluxo padrao de trabalho

```text
ideia -> escopo -> demo -> sistema -> automacao -> entrega
```

1. Ideia: entender a dor do cliente, o publico, o resultado esperado e o prazo.
2. Escopo: usar `project-architect` para definir MVP, fora de escopo, stack, tarefas e riscos.
3. Demo: usar `demo-builder` quando for necessario vender, validar ou apresentar antes de construir o sistema real.
4. Sistema: usar `fullstack-app-builder` quando o projeto virar entrega funcional com app, banco, API, CRM ou dashboard.
5. Automacao: usar `automation-builder` para fluxos n8n, webhooks, bots, pagamentos, planilhas e follow-up.
6. Entrega: usar `delivery-qa` para revisar, testar, documentar e preparar a mensagem final para o cliente.

Nem todo projeto precisa passar por todas as etapas. Uma demanda pequena pode ir direto de escopo para automacao e entrega. Uma venda consultiva pode precisar primeiro de demo. O criterio principal e entregar valor rapido sem confundir prototipo com sistema real.

## Checklist base antes de entregar

- Escopo definido.
- Fora de escopo definido.
- Demo ou sistema real identificado.
- README criado.
- `.env.example` criado quando necessario.
- Nenhum segredo real no codigo.
- Fluxo principal testado.
- Responsividade verificada quando houver frontend.
- Instrucoes de deploy documentadas.
- Mensagem de entrega preparada.
- Proximos upsells listados.
