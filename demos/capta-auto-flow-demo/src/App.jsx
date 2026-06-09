import { useMemo, useState } from "react";
import {
  AlertTriangle,
  BadgeCheck,
  Banknote,
  CalendarCheck,
  ClipboardList,
  Clock3,
  GaugeCircle,
  PhoneCall,
  TimerReset,
  Wrench,
} from "lucide-react";
import AssistantChat from "./components/AssistantChat";
import FollowUpCard from "./components/FollowUpCard";
import Header from "./components/Header";
import LeadDetailDrawer from "./components/LeadDetailDrawer";
import LeadTable from "./components/LeadTable";
import MetricCard from "./components/MetricCard";
import OwnerDashboard from "./components/OwnerDashboard";
import ServiceCard from "./components/ServiceCard";
import ServiceOrders from "./components/ServiceOrders";
import SettingsPanel from "./components/SettingsPanel";
import Sidebar from "./components/Sidebar";
import { branding } from "./config/branding";
import {
  dashboardAlerts,
  dashboardMetrics,
  getActiveServiceNames,
  getFollowUpRecords,
  getLeadRecords,
  getServiceOrderRecords,
  leads,
  operationSummary,
  recentEvents,
  services,
  statusFlow,
  teamMembers,
} from "./data/mockData";
import { formatCurrency } from "./utils/formatters";

const metricIcons = [
  PhoneCall,
  GaugeCircle,
  Banknote,
  CalendarCheck,
  Wrench,
  TimerReset,
  ClipboardList,
  Clock3,
];

const sectionCopy = {
  dashboard: {
    kicker: "Painel do dia",
    title: branding.copy.dashboardTitle,
    description: branding.copy.dashboardSubtitle,
  },
  crm: {
    kicker: "CRM operacional",
    title: "Atendimentos com cliente, veículo, orçamento e próxima ação",
    description:
      "A equipe acompanha status, responsável, origem, prioridade e risco de cada atendimento da oficina.",
  },
  servicos: {
    kicker: "Base de Serviços",
    title: "Serviços da Êxito organizados para orçamento e execução",
    description:
      "Base mockada de serviços automotivos com categoria, preço inicial, tempo médio e observações técnicas.",
  },
  ordens: {
    kicker: "Ordens de Serviço",
    title: "Execução acompanhada do atendimento até a entrega",
    description:
      "OS com cliente, veículo, placa, técnico responsável, previsão de entrega, valor e observações internas.",
  },
  ia: {
    kicker: "IA no WhatsApp",
    title: "IA no WhatsApp em operação",
    description:
      "A IA atende, coleta dados, entende o serviço desejado, qualifica o cliente, registra no CRM e encaminha para a equipe.",
  },
  followup: {
    kicker: "Retornos",
    title: "Fila de follow-up para orçamento, aprovação e revisão futura",
    description:
      "Retornos claros para quem recebeu orçamento, precisa confirmar agendamento, finalizou serviço ou deve voltar no futuro.",
  },
  dono: {
    kicker: "Visão gerencial",
    title: "Controle simples para o Victor enxergar a operação",
    description:
      "Indicadores demonstrativos para acompanhar orçamento aberto, OS em execução, IA no WhatsApp e oportunidades em risco.",
  },
  configuracoes: {
    kicker: "Configurações",
    title: "Marca, dados e operação preparados para personalização",
    description:
      "Painel para deixar claro como a demo vira uma primeira versão real com banco, WhatsApp via n8n e IA integrada.",
  },
};

const initialFilters = {
  status: "Todos",
  servico: "Todos",
  responsavel: "Todos",
  prioridade: "Todos",
};

function DashboardView({ leadRecords, onNavigate }) {
  const potential = leadRecords.reduce((sum, lead) => sum + lead.orcamento, 0);
  const riskLeads = leadRecords
    .filter(
      (lead) =>
        lead.prioridade === "Alta" ||
        lead.status === "Retorno pendente" ||
        lead.status === "Aguardando aprovação",
    )
    .slice(0, 3);
  const nextReturns = leadRecords
    .filter((lead) => ["Retorno pendente", "Aguardando aprovação", "Orçamento enviado"].includes(lead.status))
    .slice(0, 3);

  return (
    <div className="grid gap-5">
      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-8">
        {dashboardMetrics.map((metric, index) => (
          <MetricCard
            key={metric.label}
            icon={metricIcons[index]}
            label={metric.label}
            value={metric.value}
            note={metric.note}
          />
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="panel overflow-hidden">
          <div className="flex flex-col gap-4 border-b border-graphite-200 p-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="section-kicker">Resumo da operação do dia</p>
              <h2 className="mt-1 text-2xl font-black text-graphite-950">
                Visão clara dos atendimentos, orçamentos e retornos da operação.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-graphite-600">
                A Êxito enxerga WhatsApp, orçamento, OS, execução e retorno em um painel único.
              </p>
            </div>
            <button className="btn-primary" type="button" onClick={() => onNavigate("crm")}>
              Ver atendimentos
            </button>
          </div>

          <div className="grid divide-y divide-graphite-100">
            {operationSummary.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm text-graphite-500">{item.label}</span>
                <strong className="text-sm text-graphite-950">{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="grid gap-4 border-t border-graphite-200 bg-graphite-50/70 p-5 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-md border border-graphite-200 bg-white p-4">
              <p className="text-sm text-graphite-500">Potencial em orçamento demonstrativo</p>
              <strong className="mt-2 block text-3xl font-black text-graphite-950">
                {formatCurrency(potential)}
              </strong>
              <p className="mt-2 text-xs leading-5 text-graphite-500">
                Soma dos orçamentos e oportunidades abertas nesta simulação.
              </p>
            </div>
            <div className="rounded-md border border-red-100 bg-white p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} className="text-red-600" />
                <p className="text-sm font-black text-graphite-950">Oportunidades em risco</p>
              </div>
              <div className="mt-3 grid gap-2">
                {riskLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-graphite-600">{lead.nome}</span>
                    <strong className="max-w-[240px] text-right text-graphite-950">
                      {lead.proximaAcao}
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="grid gap-5">
          <div className="panel p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="section-kicker">Próximos retornos</p>
                <h2 className="mt-1 text-xl font-black text-graphite-950">Fila de aprovação</h2>
              </div>
              <Clock3 size={17} className="text-graphite-500" />
            </div>
            <div className="mt-4 grid gap-3">
              {nextReturns.map((lead) => (
                <button
                  key={lead.id}
                  className="rounded-md border border-graphite-200 bg-white p-3 text-left transition hover:border-graphite-400 hover:bg-graphite-50"
                  type="button"
                  onClick={() => onNavigate("followup")}
                >
                  <span className="block text-sm font-black text-graphite-950">{lead.nome}</span>
                  <span className="mt-1 block text-xs text-graphite-500">{lead.veiculo}</span>
                  <span className="mt-2 block text-xs font-semibold text-graphite-700">
                    {lead.proximaAcao}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="panel p-5">
            <p className="section-kicker">Alertas operacionais</p>
            <div className="mt-4 grid gap-2">
              {dashboardAlerts.map((alert) => (
                <div
                  key={alert}
                  className="rounded-md border border-graphite-200 bg-white px-3 py-2 text-sm font-semibold text-graphite-700"
                >
                  {alert}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="panel p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="section-kicker">Eventos recentes</p>
            <h2 className="mt-1 text-xl font-black text-graphite-950">Histórico operacional</h2>
          </div>
          <div className="grid flex-1 gap-3 lg:max-w-4xl lg:grid-cols-2">
            {recentEvents.map((event) => (
              <div
                key={event}
                className="flex gap-3 rounded-md border border-graphite-200 bg-white p-3 text-sm leading-6 text-graphite-700"
              >
                <BadgeCheck className="mt-0.5 shrink-0 text-emerald-700" size={16} />
                <span>{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionIntro({ section }) {
  const copy = sectionCopy[section];
  return (
    <div className="flex flex-col gap-2">
      <p className="section-kicker">{copy.kicker}</p>
      <h2 className="text-2xl font-black text-graphite-950 md:text-3xl">{copy.title}</h2>
      <p className="max-w-3xl text-sm leading-6 text-graphite-600">{copy.description}</p>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [leadData, setLeadData] = useState(leads);
  const [filters, setFilters] = useState(initialFilters);
  const [selectedLeadId, setSelectedLeadId] = useState(null);
  const [toast, setToast] = useState("Demonstração pronta para apresentação");
  const [aiLeadCreated, setAiLeadCreated] = useState(false);
  const [preparedFollowUps, setPreparedFollowUps] = useState([]);
  const leadRecords = useMemo(() => getLeadRecords(leadData), [leadData]);
  const followUpRecords = useMemo(() => getFollowUpRecords(leadData), [leadData]);
  const serviceOrderRecords = useMemo(() => getServiceOrderRecords(), []);
  const serviceOptions = useMemo(() => getActiveServiceNames(), []);
  const responsibleOptions = useMemo(() => teamMembers.map((member) => member.role), []);

  const filteredLeads = useMemo(() => {
    return leadRecords.filter((lead) => {
      return (
        (filters.status === "Todos" || lead.status === filters.status) &&
        (filters.servico === "Todos" || lead.servico === filters.servico) &&
        (filters.responsavel === "Todos" || lead.responsavel === filters.responsavel) &&
        (filters.prioridade === "Todos" || lead.prioridade === filters.prioridade)
      );
    });
  }, [filters, leadRecords]);

  const selectedLead = selectedLeadId
    ? leadRecords.find((lead) => lead.id === selectedLeadId)
    : null;

  function navigate(section) {
    setActiveSection(section);
    setSidebarOpen(false);
  }

  function changeFilter(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function openLead(lead) {
    setSelectedLeadId(lead.id);
  }

  function forwardLead(lead) {
    setLeadData((current) =>
      current.map((item) => {
        if (item.id !== lead.id) return item;
        const shouldMoveToBudget = item.status === "Novo atendimento";
        return {
          ...item,
          forwarded: true,
          status: shouldMoveToBudget ? "Aguardando diagnóstico" : item.status,
          nextAction: `Equipe acionada: ${lead.responsavel} assume o próximo contato`,
        };
      }),
    );
    setSelectedLeadId(lead.id);
    setToast(`${lead.nome} encaminhado para ${lead.responsavel}`);
  }

  function advanceStatus(leadId) {
    const currentLead = leadRecords.find((lead) => lead.id === leadId);
    if (!currentLead) return;

    const currentIndex = statusFlow.indexOf(currentLead.status);
    const nextStatus = statusFlow[Math.min(currentIndex + 1, statusFlow.length - 1)];

    setLeadData((current) =>
      current.map((lead) => {
        if (lead.id !== leadId) return lead;
        return {
          ...lead,
          status: nextStatus,
          nextAction:
            nextStatus === "Finalizado"
              ? "Atendimento finalizado"
              : "Registrar próximo passo da equipe no histórico",
        };
      }),
    );
    setToast(`${currentLead.nome} avançou para ${nextStatus}`);
  }

  function createAiLead() {
    setAiLeadCreated(true);
    setLeadData((current) =>
      current.map((lead) => {
        if (lead.id !== "lead-lucas") return lead;
        return {
          ...lead,
          createdByAi: true,
          source: "WhatsApp IA",
          priority: "Alta",
          status: "Aguardando orçamento",
          nextAction: "Equipe enviar orçamento completo ainda hoje",
          observation:
            "Lead qualificado pela IA: pneus, alinhamento e balanceamento para Corolla 2018.",
        };
      }),
    );
    setFilters(initialFilters);
    setToast("Lucas Almeida destacado no CRM como lead criado pela IA no WhatsApp");
    setActiveSection("crm");
    setSelectedLeadId("lead-lucas");
  }

  function createAttendance() {
    setLeadData((current) =>
      current.map((lead) => {
        if (lead.id !== "lead-lucas") return lead;
        return {
          ...lead,
          status: "Aguardando diagnóstico",
          priority: "Alta",
          forwarded: true,
          nextAction: "Recepção confirmar placa, km e melhor horário para diagnóstico",
        };
      }),
    );
    setFilters(initialFilters);
    setToast("Atendimento técnico criado para Lucas Almeida");
    setActiveSection("crm");
    setSelectedLeadId("lead-lucas");
  }

  function markFollowUpReady(followUp) {
    setPreparedFollowUps((current) =>
      current.includes(followUp.id) ? current : [...current, followUp.id],
    );
    setToast(`Retorno de ${followUp.nome} marcado como feito`);
  }

  return (
    <div className="min-h-screen bg-[#f7f8f8]">
      <div className="grid lg:grid-cols-[286px_minmax(0,1fr)]">
        <Sidebar
          activeSection={activeSection}
          onNavigate={navigate}
          open={sidebarOpen}
          onToggle={() => setSidebarOpen((open) => !open)}
          branding={branding}
        />

        <main className="min-w-0">
          <Header toast={toast} branding={branding} />

          <div className="grid gap-6 px-5 py-6 lg:px-8">
            <SectionIntro section={activeSection} />

            {activeSection === "dashboard" ? (
              <DashboardView leadRecords={leadRecords} onNavigate={navigate} />
            ) : null}

            {activeSection === "crm" ? (
              <LeadTable
                leads={filteredLeads}
                filters={filters}
                options={{
                  status: statusFlow,
                  servicos: serviceOptions,
                  responsaveis: responsibleOptions,
                }}
                onFilterChange={changeFilter}
                onSelectLead={openLead}
                onForwardLead={forwardLead}
                onCreateAttendance={createAttendance}
              />
            ) : null}

            {activeSection === "servicos" ? (
              <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </section>
            ) : null}

            {activeSection === "ordens" ? <ServiceOrders orders={serviceOrderRecords} /> : null}

            {activeSection === "ia" ? (
              <AssistantChat
                onCreateLead={createAiLead}
                created={aiLeadCreated}
                branding={branding}
                onForwardLead={() => {
                  createAiLead();
                  setToast("Atendimento da IA encaminhado para a equipe");
                }}
              />
            ) : null}

            {activeSection === "followup" ? (
              <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-4">
                {followUpRecords.map((followUp) => (
                  <FollowUpCard
                    key={followUp.id}
                    followUp={followUp}
                    onSend={markFollowUpReady}
                    prepared={preparedFollowUps.includes(followUp.id)}
                  />
                ))}
              </section>
            ) : null}

            {activeSection === "dono" ? (
              <OwnerDashboard leads={leadRecords} branding={branding} />
            ) : null}

            {activeSection === "configuracoes" ? (
              <SettingsPanel
                branding={branding}
                teamMembers={teamMembers}
                services={services}
              />
            ) : null}

            <footer className="flex flex-col gap-2 border-t border-graphite-200 py-5 text-xs text-graphite-500 sm:flex-row sm:items-center sm:justify-between">
              <span>{branding.copy.demoNotice}</span>
              <span>{branding.copy.footer}</span>
            </footer>
          </div>
        </main>
      </div>

      <LeadDetailDrawer
        lead={selectedLead}
        onClose={() => setSelectedLeadId(null)}
        onForward={forwardLead}
        onAdvanceStatus={advanceStatus}
      />
    </div>
  );
}
