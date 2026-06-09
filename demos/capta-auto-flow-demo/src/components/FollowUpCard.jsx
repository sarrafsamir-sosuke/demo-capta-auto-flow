import { CheckCircle2, Clipboard, Send, Timer } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { statusTone } from "../data/mockData";

export default function FollowUpCard({ followUp, onSend, prepared = false }) {
  const urgent = !prepared && followUp.retorno.includes("Hoje");

  async function copyMessage() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(followUp.message);
      }
    } catch {
      // A demo continua funcionando mesmo se o navegador bloquear clipboard.
    }
  }

  return (
    <article
      className={`panel-flat grid gap-4 p-4 ${prepared ? "border-emerald-200 bg-emerald-50/40" : ""} ${
        urgent ? "border-red-200" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-black text-graphite-950">{followUp.nome}</h3>
          <p className="mt-1 text-sm text-graphite-500">
            {followUp.veiculo} · {followUp.placa}
          </p>
        </div>
        <span className="inline-flex min-h-6 items-center gap-2 rounded-full border border-graphite-200 bg-white px-2 text-[11px] font-semibold text-graphite-700">
          {prepared ? <CheckCircle2 size={13} /> : <Timer size={13} />}
          {prepared ? "Feito" : followUp.retorno}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <StatusBadge label={followUp.status} tone={statusTone[followUp.status]} />
        <StatusBadge label={followUp.channel} tone="neutral" />
        {urgent ? <StatusBadge label="Atenção hoje" tone="risk" /> : null}
      </div>

      <div className="grid gap-2 rounded-md border border-graphite-100 bg-graphite-50/70 p-3">
        <span className="field-label">Motivo do retorno</span>
        <strong className="text-sm text-graphite-900">{followUp.motivo}</strong>
        <span className="text-xs text-graphite-500">Responsável: {followUp.responsavel}</span>
      </div>

      <blockquote className="rounded-md border border-graphite-200 bg-white px-4 py-3 text-sm leading-6 text-graphite-700">
        {followUp.message}
      </blockquote>

      <div className="grid gap-2 sm:grid-cols-2">
        <button className="btn-secondary" type="button" onClick={copyMessage}>
          <Clipboard size={15} />
          Copiar mensagem
        </button>
        <button
          className={prepared ? "btn-muted" : "btn-primary"}
          type="button"
          onClick={() => onSend(followUp)}
        >
          {prepared ? <CheckCircle2 size={15} /> : <Send size={15} />}
          {prepared ? "Retorno feito" : "Marcar como feito"}
        </button>
      </div>
    </article>
  );
}
