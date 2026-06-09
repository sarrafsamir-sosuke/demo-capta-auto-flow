# Arquitetura futura — Capta Auto Flow

Este documento descreve como a demo visual pode evoluir para um sistema funcional para operações automotivas.

## Objetivo da versão funcional

Transformar o Capta Auto Flow em um sistema real para acompanhar atendimento, clientes, veículos, leads, orçamentos, follow-up, equipe e indicadores de gestão.

## Stack sugerida

- Frontend: React, Vite e TailwindCSS.
- Backend: Node.js com API REST simples.
- Banco: Supabase/Postgres.
- Autenticação: Supabase Auth ou autenticação própria simples no MVP.
- Automação: n8n para follow-up, webhooks e notificações.
- WhatsApp: WhatsApp Business API ou provedor homologado.
- IA/SDR: OpenAI API para qualificação, resumo e sugestão de próxima ação.

## Modelos de dados sugeridos

### clients

- id
- name
- phone
- email
- origin
- profile
- notes
- created_at
- updated_at

### vehicles

- id
- client_id
- model
- year
- plate
- km
- last_visit
- notes
- created_at
- updated_at

### leads

- id
- client_id
- vehicle_id
- service_id
- source
- status
- priority
- responsible_user_id
- next_action
- observation
- created_by_ai
- created_at
- updated_at

### services

- id
- name
- category
- description
- base_price
- average_time
- notes
- active

### quotes

- id
- lead_id
- total
- status
- expires_at
- items
- approved_at
- created_at
- updated_at

### followups

- id
- lead_id
- client_id
- responsible_user_id
- channel
- due_at
- reason
- message
- status
- sent_at
- created_at
- updated_at

### users

- id
- name
- email
- role
- area
- active
- created_at
- updated_at

### events

- id
- lead_id
- client_id
- user_id
- type
- title
- description
- metadata
- created_at

## Fluxo funcional sugerido

1. Lead entra por WhatsApp, site, Instagram, indicação ou cadastro manual.
2. Sistema cria cliente, veículo e atendimento.
3. IA/SDR pode qualificar o lead e sugerir prioridade.
4. Equipe assume o atendimento e cria orçamento.
5. Cliente recebe orçamento.
6. Follow-up automático ou semi-automático agenda retorno.
7. Status avança até agendado, em execução, finalizado ou perdido.
8. Eventos ficam registrados no histórico.
9. Gestor acompanha conversão, orçamento aberto, gargalos e oportunidades em risco.

## Integração com WhatsApp

Possibilidades:

- Manual: equipe copia mensagem sugerida e envia pelo WhatsApp.
- Semi-automático: sistema prepara mensagem e abre link `wa.me`.
- Automático: integração com WhatsApp Business API ou provedor homologado.

Credenciais necessárias na versão real:

- token do provedor;
- número oficial;
- webhook de entrada;
- webhook de status de mensagem;
- variáveis em `.env`, nunca no código.

## Automação com n8n

Fluxos possíveis:

- Novo lead recebido por webhook.
- Follow-up de orçamento sem resposta.
- Notificação interna para lead quente.
- Registro de pagamento ou sinal.
- Aviso ao gestor quando oportunidade ficar parada.

Nodes esperados:

- Webhook Trigger.
- HTTP Request.
- Supabase/Postgres.
- WhatsApp provider.
- Telegram ou email para alerta interno.
- IF/Switch para regras de status.
- Error Trigger para falhas.

## IA/SDR real

Uso sugerido:

- resumir conversa;
- extrair nome, telefone, veículo, placa, serviço e urgência;
- sugerir prioridade;
- sugerir próxima ação;
- gerar mensagem de follow-up;
- apontar risco comercial.

Regras:

- IA não deve aprovar orçamento sozinha.
- IA não deve prometer preço sem base.
- IA deve registrar incertezas.
- Atendimento humano assume etapas comerciais importantes.

## Painel do dono

Métricas reais possíveis:

- leads por origem;
- taxa de conversão por status;
- orçamento aberto;
- valor aprovado;
- tempo médio de resposta;
- follow-ups vencidos;
- serviços mais vendidos;
- desempenho por responsável.

## Checklist de transição de demo para MVP

- Definir cliente real e nicho.
- Confirmar fluxo manual, semi-automático ou automático.
- Mapear status e responsáveis reais.
- Criar banco Supabase/Postgres.
- Criar `.env.example`.
- Implementar API de leads, clientes, veículos, serviços, orçamentos, follow-ups e eventos.
- Adicionar autenticação simples.
- Conectar frontend à API.
- Criar seed com dados de demonstração.
- Testar responsividade, permissões e fluxo principal.
- Documentar instalação, deploy e credenciais necessárias.
