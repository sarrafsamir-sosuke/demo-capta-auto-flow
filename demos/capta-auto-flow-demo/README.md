# Êxito Auto Center — Painel Operacional

Demo visual navegável para apresentar ao Victor como a Êxito Auto Center pode organizar atendimento, WhatsApp com IA, CRM operacional, orçamentos, ordens de serviço, retornos e visão gerencial em um painel profissional.

Esta versão usa dados mockados. Não há backend, banco de dados, WhatsApp real, IA real ou credenciais.

## O que a demo mostra

- IA no WhatsApp atendendo e coletando dados do cliente.
- CRM de atendimentos com cliente, telefone, veículo, placa, serviço, status, orçamento, responsável, origem e prioridade.
- Base de serviços automotivos da oficina.
- Ordens de Serviço com status de execução, técnico responsável e previsão de entrega.
- Follow-ups para aprovação de orçamento, agendamento e revisão futura.
- Visão gerencial para o Victor acompanhar orçamento, OS, equipe, origem dos atendimentos e oportunidades em risco.

## Telas incluídas

- Dashboard
- CRM de atendimentos
- Base de Serviços
- Ordens de Serviço
- IA WhatsApp
- Retornos
- Visão do Victor
- Configurações

## Como rodar localmente

```bash
npm install
npm run dev
```

Se a porta padrão estiver ocupada:

```bash
npm run dev -- --port 5188 --strictPort
```

## Como gerar build

```bash
npm run build
```

O Vite gera a pasta:

```text
dist/
```

## Deploy na Vercel

- Framework preset: `Vite`
- Root directory: `demos/capta-auto-flow-demo`
- Build command: `npm run build`
- Output directory: `dist`

## Como personalizar

Identidade e textos:

- Edite `src/config/branding.js`.
- Troque nome, slogan, subtitle, unidade, serviços ativos e microcopy.

Dados mockados:

- Edite `src/data/mockData.js`.
- Ajuste clientes, veículos, serviços, orçamentos, ordens de serviço, follow-ups e métricas de IA.

Componentes principais:

- `src/components/AssistantChat.jsx`: visão operacional da IA no WhatsApp.
- `src/components/LeadTable.jsx`: CRM de atendimentos.
- `src/components/ServiceOrders.jsx`: ordens de serviço.
- `src/components/OwnerDashboard.jsx`: visão gerencial.

## Limites desta versão

- Não envia mensagens reais.
- Não conecta com WhatsApp Business API.
- Não usa IA real.
- Não usa banco de dados.
- Não tem autenticação.
- Não contém tokens, senhas ou credenciais reais.

## Checklist antes de enviar ao cliente

- Abrir todas as telas da sidebar.
- Testar filtros do CRM.
- Clicar em um atendimento e abrir a ficha lateral.
- Clicar em `Criar atendimento`.
- Clicar em `Encaminhar`.
- Abrir `IA WhatsApp` e clicar em `Criar lead no CRM`.
- Abrir `Retornos`, copiar mensagem e marcar retorno como feito.
- Rodar `npm run build`.

## Mensagem curta para apresentar

Victor, montei uma demonstração visual de como a Êxito pode organizar o WhatsApp com IA, registrar atendimentos no CRM, acompanhar orçamento, ordem de serviço, execução e retorno em um painel único. A demo ainda não tem integração real, mas mostra uma primeira versão implementável pela Capta.
