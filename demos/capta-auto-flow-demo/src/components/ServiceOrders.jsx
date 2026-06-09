import { ClipboardList } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { statusTone } from "../data/mockData";
import { formatCurrency } from "../utils/formatters";

export default function ServiceOrders({ orders }) {
  return (
    <section className="panel overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-graphite-200 p-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="section-kicker">Ordens de Serviço</p>
          <h2 className="mt-1 text-xl font-black text-graphite-950">
            Execução técnica acompanhada por status
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-graphite-600">
            Cada OS mostra cliente, veículo, placa, serviço, responsável, entrada, previsão e
            observações internas para a equipe manter o cliente atualizado.
          </p>
        </div>
        <div className="btn-muted pointer-events-none justify-start">
          <ClipboardList size={15} />
          {orders.length} ordens mockadas
        </div>
      </div>

      <div className="grid gap-4 p-5 xl:grid-cols-3">
        {orders.map((order) => (
          <article key={order.id} className="panel-flat grid gap-4 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker">{order.number}</p>
                <h3 className="mt-1 text-lg font-black text-graphite-950">{order.cliente}</h3>
                <p className="mt-1 text-sm text-graphite-500">
                  {order.veiculo} · {order.placa}
                </p>
              </div>
              <StatusBadge label={order.status} tone={statusTone[order.status]} />
            </div>

            <div className="grid gap-3 text-sm">
              <InfoLine label="Serviço" value={order.servico} />
              <InfoLine label="Responsável" value={`${order.responsavel} · ${order.responsavelNome}`} />
              <InfoLine label="Entrada" value={order.entryAt} />
              <InfoLine label="Previsão" value={order.dueAt} />
              <InfoLine label="Valor" value={formatCurrency(order.value)} />
            </div>

            <div className="rounded-md border border-graphite-200 bg-graphite-50/70 p-3">
              <span className="field-label">Observações internas</span>
              <p className="mt-2 text-sm leading-6 text-graphite-700">{order.notes}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function InfoLine({ label, value }) {
  return (
    <div className="data-row">
      <span className="text-graphite-500">{label}</span>
      <strong className="max-w-[260px] text-right text-graphite-950">{value}</strong>
    </div>
  );
}
