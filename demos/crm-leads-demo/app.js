const statusLabels = [
  "novo",
  "interessado",
  "em atendimento",
  "proposta enviada",
  "fechado",
  "perdido",
];

const leadNames = [
  ["Ana Prado", "Prado Estetica"],
  ["Marcos Vieira", "Vieira Auto Center"],
  ["Bianca Torres", "BT Consultoria"],
  ["Rafael Lima", "Lima Odonto"],
  ["Camila Nunes", "Nunes Fit"],
  ["Diego Rocha", "Rocha Imoveis"],
];

const interests = [
  "CRM de leads",
  "Automacao de WhatsApp",
  "Dashboard comercial",
  "Landing page de captacao",
  "Follow-up automatico",
  "Funil de vendas",
];

const sources = ["Instagram", "WhatsApp", "Landing Page", "Indicacao", "Google Ads"];

let leads = [
  {
    id: 101,
    name: "Mariana Costa",
    company: "Costa Odonto",
    contact: "(11) 98820-1402",
    source: "Instagram",
    status: "novo",
    interest: "CRM de leads",
    notes: "Quer centralizar leads que chegam pelo direct e WhatsApp.",
    date: "2026-06-08",
    nextContact: "Hoje, 15:30",
    value: 1800,
  },
  {
    id: 102,
    name: "Bruno Martins",
    company: "Martins Energia Solar",
    contact: "(31) 97743-5601",
    source: "Landing Page",
    status: "interessado",
    interest: "Dashboard comercial",
    notes: "Precisa acompanhar propostas por consultor.",
    date: "2026-06-07",
    nextContact: "Amanha, 10:00",
    value: 2600,
  },
  {
    id: 103,
    name: "Paula Ribeiro",
    company: "Ribeiro Pilates",
    contact: "(21) 99112-8840",
    source: "WhatsApp",
    status: "em atendimento",
    interest: "Follow-up automatico",
    notes: "Perde muitos contatos depois da primeira mensagem.",
    date: "2026-06-07",
    nextContact: "Hoje, 17:00",
    value: 1450,
  },
  {
    id: 104,
    name: "Felipe Araujo",
    company: "Araujo Seguros",
    contact: "(41) 99621-4488",
    source: "Google Ads",
    status: "proposta enviada",
    interest: "Funil de vendas",
    notes: "Aguardando retorno sobre proposta de MVP.",
    date: "2026-06-06",
    nextContact: "Quarta, 09:30",
    value: 3200,
  },
  {
    id: 105,
    name: "Luiza Campos",
    company: "Campos Arquitetura",
    contact: "(51) 98452-7781",
    source: "Indicacao",
    status: "fechado",
    interest: "Landing page de captacao",
    notes: "Fechou demo com evolucao para site completo.",
    date: "2026-06-05",
    nextContact: "Kickoff marcado",
    value: 2200,
  },
  {
    id: 106,
    name: "Renato Alves",
    company: "Alves Cursos",
    contact: "(85) 98110-4320",
    source: "Instagram",
    status: "perdido",
    interest: "Automacao de WhatsApp",
    notes: "Sem verba neste mes, retomar no proximo trimestre.",
    date: "2026-06-04",
    nextContact: "Retomar em 30 dias",
    value: 1200,
  },
  {
    id: 107,
    name: "Helena Duarte",
    company: "Duarte Clinica",
    contact: "(19) 98976-2309",
    source: "Landing Page",
    status: "em atendimento",
    interest: "CRM de leads",
    notes: "Equipe precisa de pipeline simples para recepcao.",
    date: "2026-06-08",
    nextContact: "Hoje, 16:20",
    value: 2100,
  },
  {
    id: 108,
    name: "Gustavo Freitas",
    company: "Freitas Contabil",
    contact: "(47) 99704-6620",
    source: "WhatsApp",
    status: "interessado",
    interest: "Dashboard comercial",
    notes: "Quer visualizar origem dos leads e taxa de fechamento.",
    date: "2026-06-06",
    nextContact: "Amanha, 14:00",
    value: 2800,
  },
];

let events = [
  {
    time: "Agora",
    title: "Lead novo captado",
    body: "Mariana Costa entrou pelo Instagram e foi adicionada ao status novo.",
  },
  {
    time: "10 min",
    title: "Follow-up agendado",
    body: "Paula Ribeiro recebeu prioridade para contato ainda hoje.",
  },
  {
    time: "25 min",
    title: "Proposta registrada",
    body: "Felipe Araujo esta em proposta enviada com potencial de R$ 3.200.",
  },
];

let selectedLeadId = leads[0].id;

const tableEl = document.getElementById("leadsTable");
const kanbanEl = document.getElementById("kanbanBoard");
const eventListEl = document.getElementById("eventList");
const detailEl = document.getElementById("leadDetail");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const sourceFilter = document.getElementById("sourceFilter");
const lastUpdate = document.getElementById("lastUpdate");

const formatCurrency = (value) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);

function slugStatus(status) {
  return status.replace(/\s+/g, "-");
}

function addEvent(title, body) {
  events.unshift({ time: "Agora", title, body });
  events = events.slice(0, 6);
  lastUpdate.textContent = "Atualizado agora";
  renderEvents();
}

function getFilteredLeads() {
  const search = searchInput.value.trim().toLowerCase();
  const selectedStatus = statusFilter.value;
  const selectedSource = sourceFilter.value;

  return leads.filter((lead) => {
    const searchText = `${lead.name} ${lead.company} ${lead.interest}`.toLowerCase();
    const matchesSearch = !search || searchText.includes(search);
    const matchesStatus = selectedStatus === "all" || lead.status === selectedStatus;
    const matchesSource = selectedSource === "all" || lead.source === selectedSource;
    return matchesSearch && matchesStatus && matchesSource;
  });
}

function renderOptions() {
  statusLabels.forEach((status) => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;
    statusFilter.appendChild(option);
  });

  sources.forEach((source) => {
    const option = document.createElement("option");
    option.value = source;
    option.textContent = source;
    sourceFilter.appendChild(option);
  });
}

function renderMetrics() {
  const total = leads.length;
  const active = leads.filter((lead) =>
    ["novo", "interessado", "em atendimento"].includes(lead.status),
  ).length;
  const proposals = leads.filter((lead) => lead.status === "proposta enviada").length;
  const value = leads
    .filter((lead) => lead.status !== "perdido")
    .reduce((sum, lead) => sum + lead.value, 0);

  document.getElementById("totalLeads").textContent = total;
  document.getElementById("activeLeads").textContent = active;
  document.getElementById("proposalLeads").textContent = proposals;
  document.getElementById("pipelineValue").textContent = formatCurrency(value);
}

function renderTable() {
  const filteredLeads = getFilteredLeads();
  tableEl.innerHTML = "";

  if (!filteredLeads.length) {
    tableEl.innerHTML = `
      <tr>
        <td class="empty-state" colspan="5">Nenhum lead encontrado com os filtros atuais.</td>
      </tr>
    `;
    return;
  }

  filteredLeads.forEach((lead) => {
    const row = document.createElement("tr");
    row.className = lead.id === selectedLeadId ? "selected" : "";
    row.tabIndex = 0;
    row.innerHTML = `
      <td>
        <div class="lead-cell">
          <strong>${lead.name}</strong>
          <span>${lead.company} - ${lead.contact}</span>
        </div>
      </td>
      <td><span class="source-pill">${lead.source}</span></td>
      <td><span class="status-pill status-${slugStatus(lead.status)}">${lead.status}</span></td>
      <td>${lead.interest}</td>
      <td><span class="muted">${lead.nextContact}</span></td>
    `;
    row.addEventListener("click", () => selectLead(lead.id));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectLead(lead.id);
      }
    });
    tableEl.appendChild(row);
  });
}

function renderDetail() {
  const lead = leads.find((item) => item.id === selectedLeadId) || leads[0];
  selectedLeadId = lead.id;

  detailEl.innerHTML = `
    <div class="detail-card">
      <div>
        <h3>${lead.name}</h3>
        <p class="muted">${lead.company}</p>
      </div>
      <div class="detail-row">
        <span>Status</span>
        <strong>${lead.status}</strong>
      </div>
      <div class="detail-row">
        <span>Origem</span>
        <strong>${lead.source}</strong>
      </div>
      <div class="detail-row">
        <span>Interesse</span>
        <strong>${lead.interest}</strong>
      </div>
      <div class="detail-row">
        <span>Contato</span>
        <strong>${lead.contact}</strong>
      </div>
      <div class="detail-row">
        <span>Potencial</span>
        <strong>${formatCurrency(lead.value)}</strong>
      </div>
      <p class="muted">${lead.notes}</p>
    </div>
  `;
}

function renderKanban() {
  kanbanEl.innerHTML = "";

  statusLabels.forEach((status) => {
    const items = leads.filter((lead) => lead.status === status);
    const column = document.createElement("article");
    column.className = "kanban-column";
    column.innerHTML = `
      <div class="kanban-header">
        <strong>${status}</strong>
        <span class="kanban-count">${items.length}</span>
      </div>
      <div class="kanban-list">
        ${
          items
            .map(
              (lead) => `
                <button class="lead-card" type="button" data-id="${lead.id}">
                  <strong>${lead.name}</strong>
                  <small>${lead.company}</small>
                  <small>${formatCurrency(lead.value)} - ${lead.source}</small>
                </button>
              `,
            )
            .join("") || '<div class="empty-state">Sem leads</div>'
        }
      </div>
    `;
    kanbanEl.appendChild(column);
  });

  kanbanEl.querySelectorAll(".lead-card").forEach((card) => {
    card.addEventListener("click", () => selectLead(Number(card.dataset.id)));
  });
}

function renderEvents() {
  eventListEl.innerHTML = events
    .map(
      (event) => `
        <article class="event-item">
          <span class="event-time">${event.time}</span>
          <div class="event-copy">
            <strong>${event.title}</strong>
            <span class="muted">${event.body}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderAll() {
  renderMetrics();
  renderTable();
  renderDetail();
  renderKanban();
  renderEvents();
}

function selectLead(id) {
  selectedLeadId = id;
  renderTable();
  renderDetail();
}

function createFakeLead() {
  const [name, company] = leadNames[Math.floor(Math.random() * leadNames.length)];
  const source = sources[Math.floor(Math.random() * sources.length)];
  const interest = interests[Math.floor(Math.random() * interests.length)];
  const lead = {
    id: Date.now(),
    name,
    company,
    contact: `(11) 9${Math.floor(1000 + Math.random() * 8999)}-${Math.floor(
      1000 + Math.random() * 8999,
    )}`,
    source,
    status: "novo",
    interest,
    notes: "Lead fake criado para demonstrar entrada automatica no CRM.",
    date: "2026-06-08",
    nextContact: "Hoje",
    value: Math.floor(1200 + Math.random() * 3400),
  };

  leads.unshift(lead);
  selectedLeadId = lead.id;
  addEvent("Novo lead fake", `${lead.name} entrou por ${source} com interesse em ${interest}.`);
  renderAll();
}

function advanceSelectedLead() {
  const lead = leads.find((item) => item.id === selectedLeadId);
  const currentIndex = statusLabels.indexOf(lead.status);
  const nextStatus = statusLabels[Math.min(currentIndex + 1, statusLabels.length - 1)];

  if (lead.status === nextStatus) {
    addEvent("Lead no fim do pipeline", `${lead.name} ja esta em ${lead.status}.`);
    return;
  }

  lead.status = nextStatus;
  lead.nextContact = nextStatus === "fechado" ? "Projeto fechado" : "Revisar hoje";
  addEvent("Status atualizado", `${lead.name} avancou para ${nextStatus}.`);
  renderAll();
}

function simulateFollowUp() {
  const lead =
    leads.find((item) => ["novo", "interessado", "em atendimento"].includes(item.status)) ||
    leads[0];
  selectedLeadId = lead.id;
  lead.nextContact = "Agora";
  addEvent("Follow-up simulado", `${lead.name} recebeu uma tarefa de contato imediato.`);
  renderAll();
}

function simulateProposal() {
  const lead = leads.find((item) => item.id === selectedLeadId);
  lead.status = "proposta enviada";
  lead.nextContact = "Aguardar retorno";
  addEvent("Proposta simulada", `${lead.name} recebeu uma proposta comercial fake.`);
  renderAll();
}

function simulateGenericEvent() {
  const lead = leads[Math.floor(Math.random() * leads.length)];
  const samples = [
    ["Mensagem recebida", `${lead.name} respondeu pelo WhatsApp.`],
    ["Origem identificada", `${lead.company} veio de ${lead.source}.`],
    ["Observacao adicionada", `${lead.name} pediu retorno com opcoes de prazo.`],
    ["Atividade comercial", `Equipe atualizou o historico de ${lead.company}.`],
  ];
  const [title, body] = samples[Math.floor(Math.random() * samples.length)];
  selectedLeadId = lead.id;
  addEvent(title, body);
  renderAll();
}

document.getElementById("newLeadButton").addEventListener("click", createFakeLead);
document.getElementById("followUpButton").addEventListener("click", simulateFollowUp);
document.getElementById("advanceStatusButton").addEventListener("click", advanceSelectedLead);
document.getElementById("proposalButton").addEventListener("click", simulateProposal);
document.getElementById("eventButton").addEventListener("click", simulateGenericEvent);
document.getElementById("clearFiltersButton").addEventListener("click", () => {
  searchInput.value = "";
  statusFilter.value = "all";
  sourceFilter.value = "all";
  renderTable();
});

[searchInput, statusFilter, sourceFilter].forEach((input) => {
  input.addEventListener("input", renderTable);
  input.addEventListener("change", renderTable);
});

renderOptions();
renderAll();
