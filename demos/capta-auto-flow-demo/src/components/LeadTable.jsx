import { ArrowUpRight, CheckCircle2, PlusCircle, SlidersHorizontal } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { formatCurrency } from "../utils/formatters";
import { statusTone } from "../data/mockData";

const priorityTone = {
  Alta: "high",
  Média: "medium",
  Baixa: "low",
};

export default function LeadTable({
  leads,
  filters,
  options,
  onFilterChange,
  onSelectLead,
  onForwardLead,
  onCreateAttendance,
}) {
  return (
    <section className="panel overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-graphite-200 p-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="section-kicker">CRM de atendimentos</p>
          <h2 className="mt-1 text-xl font-black text-graphite-950">
            Clientes, veículos, serviços e aprovações
          </h2>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="btn-muted pointer-events-none justify-start">
            <SlidersHorizontal size={15} />
            {leads.length} registros
          </div>
          <button className="btn-primary" type="button" onClick={onCreateAttendance}>
            <PlusCircle size={15} />
            Criar atendimento
          </button>
        </div>
      </div>

      <div className="grid gap-3 border-b border-graphite-200 bg-graphite-50/70 p-5 md:grid-cols-2 xl:grid-cols-4">
        <FilterSelect
          label="Status"
          value={filters.status}
          options={options.status}
          allLabel="Todos"
          onChange={(value) => onFilterChange("status", value)}
        />
        <FilterSelect
          label="Serviço"
          value={filters.servico}
          options={options.servicos}
          allLabel="Todos"
          onChange={(value) => onFilterChange("servico", value)}
        />
        <FilterSelect
          label="Responsável"
          value={filters.responsavel}
          options={options.responsaveis}
          allLabel="Todos"
          onChange={(value) => onFilterChange("responsavel", value)}
        />
        <FilterSelect
          label="Prioridade"
          value={filters.prioridade}
          options={["Alta", "Média", "Baixa"]}
          allLabel="Todas"
          onChange={(value) => onFilterChange("prioridade", value)}
        />
      </div>

      {leads.length === 0 ? (
        <div className="grid min-h-[240px] place-items-center p-6 text-center">
          <div>
            <p className="section-kicker">Sem registros</p>
            <h3 className="mt-2 text-xl font-black text-graphite-950">
              Nenhum atendimento encontrado nesse filtro
            </h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-graphite-500">
              Ajuste os filtros ou crie um atendimento simulado para demonstrar a entrada de lead.
            </p>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[1420px] w-full border-collapse text-left">
            <thead className="border-b border-graphite-200 bg-white text-[11px] uppercase text-graphite-500">
              <tr>
                <th className="px-5 py-3 font-bold">Cliente</th>
                <th className="px-4 py-3 font-bold">Telefone</th>
                <th className="px-4 py-3 font-bold">Veículo do cliente</th>
                <th className="px-4 py-3 font-bold">Placa</th>
                <th className="px-4 py-3 font-bold">Serviço solicitado</th>
                <th className="px-4 py-3 font-bold">Status</th>
                <th className="px-4 py-3 font-bold">Valor/orçamento</th>
                <th className="px-4 py-3 font-bold">Responsável</th>
                <th className="px-4 py-3 font-bold">Próxima ação</th>
                <th className="px-4 py-3 font-bold">Origem</th>
                <th className="px-4 py-3 font-bold">Prioridade</th>
                <th className="px-5 py-3 font-bold">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-graphite-100">
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className={`align-top transition hover:bg-graphite-50/80 ${
                    lead.createdByAi || lead.forwarded ? "bg-graphite-50/50" : ""
                  }`}
                >
                  <td className="px-5 py-4">
                    <button
                      className="text-left"
                      type="button"
                      onClick={() => onSelectLead(lead)}
                    >
                      <strong className="block text-sm font-black text-graphite-950">
                        {lead.nome}
                      </strong>
                      <span className="mt-2 flex flex-wrap gap-1.5">
                        {lead.createdByAi ? <StatusBadge label="IA WhatsApp" tone="ai" /> : null}
                        {lead.forwarded ? (
                          <StatusBadge label="Equipe acionada" tone="forwarded" />
                        ) : null}
                      </span>
                    </button>
                  </td>
                  <td className="px-4 py-4 text-sm font-semibold text-graphite-700">
                    {lead.telefone}
                  </td>
                  <td className="px-4 py-4 text-sm text-graphite-700">
                    <strong className="block font-semibold text-graphite-950">{lead.veiculo}</strong>
                  </td>
                  <td className="px-4 py-4 text-sm font-semibold text-graphite-700">
                    {lead.placa}
                  </td>
                  <td className="px-4 py-4 text-sm text-graphite-600">
                    <strong className="block font-semibold text-graphite-800">{lead.servico}</strong>
                    <span className="mt-1 block text-xs text-graphite-500">{lead.categoria}</span>
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge label={lead.status} tone={statusTone[lead.status]} />
                  </td>
                  <td className="px-4 py-4 text-sm font-black text-graphite-950">
                    {lead.orcamento > 0 ? formatCurrency(lead.orcamento) : "A definir"}
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-semibold text-graphite-800">
                      {lead.responsavel}
                    </span>
                    <span className="mt-1 block text-xs text-graphite-500">{lead.responsavelNome}</span>
                  </td>
                  <td className="px-4 py-4 text-sm leading-6 text-graphite-600">
                    {lead.proximaAcao}
                  </td>
                  <td className="px-4 py-4 text-sm font-semibold text-graphite-700">
                    {lead.origem}
                  </td>
                  <td className="px-4 py-4">
                    <StatusBadge label={lead.prioridade} tone={priorityTone[lead.prioridade]} />
                  </td>
                  <td className="px-5 py-4">
                    <button
                      className={lead.forwarded ? "btn-muted" : "btn-secondary"}
                      type="button"
                      onClick={() => onForwardLead(lead)}
                    >
                      {lead.forwarded ? <CheckCircle2 size={15} /> : <ArrowUpRight size={15} />}
                      {lead.forwarded ? "Equipe acionada" : "Encaminhar"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function FilterSelect({ label, value, options, allLabel, onChange }) {
  return (
    <label className="grid gap-1.5">
      <span className="field-label">{label}</span>
      <select className="control" value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="Todos">{allLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
