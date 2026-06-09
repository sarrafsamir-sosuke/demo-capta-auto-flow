import { CheckCircle2, ClipboardList, History, X } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { statusTone } from "../data/mockData";
import { formatCurrency } from "../utils/formatters";

const priorityTone = {
  Alta: "high",
  Média: "medium",
  Baixa: "low",
};

export default function LeadDetailDrawer({ lead, onClose, onForward, onAdvanceStatus }) {
  if (!lead) return null;

  return (
    <div className="fixed inset-0 z-50 bg-graphite-950/35 backdrop-blur-sm">
      <aside className="ml-auto flex h-full w-full max-w-2xl flex-col bg-[#f7f8f8] shadow-lift">
        <header className="border-b border-graphite-200 bg-white p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="section-kicker">Ficha operacional</p>
              <h3 className="mt-1 text-2xl font-black text-graphite-950">{lead.nome}</h3>
              <p className="mt-1 text-sm text-graphite-500">
                {lead.veiculo} · {lead.placa} · {lead.telefone}
              </p>
            </div>
            <button
              className="grid h-9 w-9 place-items-center rounded-md border border-graphite-200 text-graphite-600 transition hover:bg-graphite-50"
              type="button"
              onClick={onClose}
              aria-label="Fechar detalhes"
            >
              <X size={17} />
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <StatusBadge label={lead.status} tone={statusTone[lead.status]} />
            <StatusBadge
              label={`Prioridade ${lead.prioridade}`}
              tone={priorityTone[lead.prioridade]}
            />
            {lead.createdByAi ? <StatusBadge label="IA/SDR" tone="ai" /> : null}
            {lead.forwarded ? <StatusBadge label="Equipe acionada" tone="forwarded" /> : null}
          </div>
        </header>

        <div className="grid gap-4 overflow-y-auto p-5">
          <section className="panel-flat p-4">
            <p className="section-kicker">Observações internas</p>
            <p className="mt-2 text-sm leading-6 text-graphite-700">{lead.observacao}</p>
          </section>

          <div className="grid gap-4 md:grid-cols-2">
            <section className="panel-flat p-4">
              <p className="section-kicker">Cliente</p>
              <div className="mt-4 grid gap-3 text-sm">
                <InfoLine label="Perfil" value={lead.customer?.profile} />
                <InfoLine label="Origem" value={lead.origem} />
                <InfoLine label="Último contato" value={lead.customer?.lastContact} />
                <InfoLine label="Observação" value={lead.customer?.notes} />
              </div>
            </section>

            <section className="panel-flat p-4">
              <p className="section-kicker">Veículo</p>
              <div className="mt-4 grid gap-3 text-sm">
                <InfoLine label="Modelo" value={lead.vehicle?.model} />
                <InfoLine label="Ano" value={lead.vehicle?.year} />
                <InfoLine label="Placa" value={lead.vehicle?.plate} />
                <InfoLine label="KM" value={lead.vehicle?.km} />
                <InfoLine label="Histórico" value={lead.vehicle?.lastVisit} />
              </div>
            </section>
          </div>

          <section className="panel-flat p-4">
            <div className="flex items-start gap-3">
              <span className="icon-box">
                <ClipboardList size={16} />
              </span>
              <div>
                <p className="section-kicker">Serviço solicitado</p>
                <h4 className="mt-1 text-lg font-black text-graphite-950">{lead.servico}</h4>
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <InfoLine label="Categoria" value={lead.categoria} />
              <InfoLine
                label="Orçamento"
                value={lead.orcamento > 0 ? formatCurrency(lead.orcamento) : "A definir"}
              />
              <InfoLine label="Status do orçamento" value={lead.quote?.status || "Não gerado"} />
              <InfoLine label="Validade" value={lead.quote?.expiresAt || "A definir"} />
              <InfoLine label="Responsável" value={`${lead.responsavel} · ${lead.responsavelNome}`} />
              <InfoLine label="Próxima ação" value={lead.proximaAcao} />
            </div>
            {lead.quote?.items?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {lead.quote.items.map((item) => (
                  <StatusBadge key={item} label={item} tone="neutral" />
                ))}
              </div>
            ) : null}
          </section>

          <section className="panel-flat p-4">
            <div className="flex items-center gap-2">
              <History size={16} className="text-graphite-500" />
              <p className="section-kicker">Histórico do atendimento</p>
            </div>
            <div className="mt-4 grid gap-3">
              {lead.history.map((event) => (
                <div key={event.id} className="border-l border-graphite-200 pl-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-sm text-graphite-950">{event.title}</strong>
                    <span className="text-xs font-semibold text-graphite-500">{event.time}</span>
                  </div>
                  <p className="mt-1 text-xs font-bold uppercase text-graphite-500">
                    {event.actor}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-graphite-600">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className="mt-auto grid gap-3 border-t border-graphite-200 bg-white p-5 sm:grid-cols-2">
          <button className="btn-primary" type="button" onClick={() => onForward(lead)}>
            <CheckCircle2 size={16} />
            Encaminhar para equipe
          </button>
          <button className="btn-secondary" type="button" onClick={() => onAdvanceStatus(lead.id)}>
            Avançar status
          </button>
        </footer>
      </aside>
    </div>
  );
}

function InfoLine({ label, value }) {
  return (
    <div className="data-row">
      <span className="text-graphite-500">{label}</span>
      <strong className="max-w-[280px] text-right text-graphite-900">{value || "-"}</strong>
    </div>
  );
}
