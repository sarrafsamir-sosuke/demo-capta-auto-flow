import { Clock, ReceiptText } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function ServiceCard({ service }) {
  return (
    <article className="panel-flat flex h-full flex-col p-4 transition hover:border-graphite-300">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <StatusBadge label={service.categoria} tone="neutral" />
          <h3 className="mt-3 text-base font-black text-graphite-950">{service.nome}</h3>
        </div>
        <span className="icon-box">
          <ReceiptText size={16} />
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-6 text-graphite-600">{service.descricao}</p>

      <div className="mt-4 grid gap-2 border-t border-graphite-100 pt-4">
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="text-graphite-500">Preço inicial</span>
          <strong className="text-graphite-950">{service.preco}</strong>
        </div>
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 text-graphite-500">
            <Clock size={14} /> Tempo médio
          </span>
          <strong className="text-graphite-950">{service.tempo}</strong>
        </div>
      </div>

      <p className="mt-3 rounded-md border border-graphite-100 bg-graphite-50/70 p-3 text-xs leading-5 text-graphite-600">
        {service.observacao}
      </p>
    </article>
  );
}
