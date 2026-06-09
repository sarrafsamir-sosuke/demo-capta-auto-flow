# CRM Leads Demo

Demo comercial simples de um CRM generico para captacao de leads.

## Objetivo

Mostrar, em poucos segundos, como um negocio pode visualizar leads captados, acompanhar status comerciais, organizar um pipeline em kanban e registrar eventos simulados de follow-up.

## Escopo da demo

- Dashboard com metricas comerciais.
- Tabela de leads com filtros por busca, status e origem.
- Kanban de status.
- Painel de eventos simulados.
- Acoes visuais para criar lead fake, simular follow-up, avancar status e gerar proposta.
- Dados fake realistas em JavaScript.

## Fora de escopo

- Backend real.
- Banco de dados.
- Login ou autenticacao.
- Integracao real com WhatsApp, Telegram, email, CRM externo ou pagamento.
- Persistencia de dados depois de recarregar a pagina.

## Arquivos

- `index.html`: estrutura da demo.
- `styles.css`: layout responsivo e visual.
- `app.js`: dados fake, filtros, metricas, kanban e eventos simulados.
- `README.md`: instrucoes da demo.

## Como testar localmente

Abra `index.html` no navegador.

Tambem pode servir a pasta com qualquer servidor estatico, por exemplo:

```bash
npx serve .
```

Depois acesse a URL local exibida pelo comando.

## Fluxo de teste

1. Abrir a demo.
2. Conferir o dashboard com metricas.
3. Filtrar leads por busca, status e origem.
4. Clicar em um lead na tabela ou no kanban.
5. Clicar em `Novo lead fake`.
6. Clicar em `Simular follow-up`.
7. Clicar em `Avancar status`.
8. Clicar em `Simular proposta`.
9. Conferir se o painel de eventos recebeu novas atividades.
10. Testar em tela menor para validar responsividade.

## Deploy na Vercel

Esta demo e estatica e nao usa backend. Para publicar na Vercel:

1. Enviar esta pasta para um repositorio Git.
2. Criar novo projeto na Vercel apontando para `demos/crm-leads-demo`.
3. Manter build command vazio.
4. Manter output directory como raiz do projeto.

## Mensagem para enviar ao lead

Segue uma demo visual de um CRM simples para captacao de leads. Ela mostra dashboard, lista de contatos, pipeline por status e historico de eventos simulados, para validar rapidamente como ficaria uma primeira versao do sistema antes de integrar backend, automacoes e canais reais.

## Proximos upsells

- Integrar formulario de landing page.
- Integrar WhatsApp ou Telegram.
- Criar backend com banco de dados.
- Criar login por equipe.
- Criar historico real de follow-up.
- Criar dashboard com metricas de conversao.
