import { ArrowRight, CheckCircle2, ClipboardPlus, Send } from "lucide-react";
import StatusBadge from "./StatusBadge";
import {
  aiCollectedFields,
  aiFlowSteps,
  aiMetrics,
  aiQualifiedLeads,
  aiServiceDistribution,
} from "../data/mockData";

export default function AssistantChat({ onCreateLead, onForwardLead, created, branding }) {
  const maxValue = Math.max(...aiServiceDistribution.map(([, value]) => value));

  return (
    <div className="grid gap-5">
      <section className="panel overflow-hidden">
        <div className="flex flex-col gap-4 border-b border-graphite-200 p-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="section-kicker">IA no WhatsApp em operação</p>
            <h2 className="mt-1 text-2xl font-black text-graphite-950">
              A IA atende, coleta dados e organiza o lead para a equipe
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-graphite-600">
              {branding.copy.leadMessage} A conversa deixa de ser só mensagem solta e vira um
              atendimento com dados, status e próxima ação.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <button className="btn-primary" type="button" onClick={onCreateLead}>
              <ClipboardPlus size={16} />
              {created ? "Lead atualizado no CRM" : "Criar lead no CRM"}
            </button>
            <button className="btn-secondary" type="button" onClick={onForwardLead}>
              <Send size={16} />
              Encaminhar para equipe
            </button>
          </div>
        </div>

        <div className="grid gap-3 p-5 md:grid-cols-2 xl:grid-cols-5">
          {aiMetrics.map((metric) => (
            <article key={metric.label} className="panel-flat p-4">
              <p className="text-xs font-semibold text-graphite-500">{metric.label}</p>
              <strong className="mt-2 block text-3xl font-black text-graphite-950">
                {metric.value}
              </strong>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="panel p-5">
          <p className="section-kicker">Atendimentos por serviço</p>
          <h3 className="mt-1 text-xl font-black text-graphite-950">
            Distribuição do WhatsApp automatizado
          </h3>
          <div className="mt-5 grid gap-4">
            {aiServiceDistribution.map(([label, value]) => (
              <div key={label} className="grid gap-2">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-semibold text-graphite-700">{label}</span>
                  <strong className="text-graphite-950">{value} atendimentos</strong>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-graphite-100">
                  <div
                    className="h-full rounded-full bg-graphite-950"
                    style={{ width: `${(value / maxValue) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-5">
          <p className="section-kicker">Dados que a IA coleta</p>
          <h3 className="mt-1 text-xl font-black text-graphite-950">
            Entrada organizada para o CRM
          </h3>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {aiCollectedFields.map((field) => (
              <div
                key={field}
                className="flex items-center gap-2 rounded-md border border-graphite-200 bg-white px-3 py-2 text-sm font-semibold text-graphite-700"
              >
                <CheckCircle2 size={15} className="text-emerald-700" />
                {field}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="panel p-5">
          <p className="section-kicker">Fluxo automatizado</p>
          <h3 className="mt-1 text-xl font-black text-graphite-950">
            Do WhatsApp ao acompanhamento da equipe
          </h3>
          <div className="mt-5 grid gap-2">
            {aiFlowSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-md border border-graphite-200 bg-white p-3"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-graphite-950 text-xs font-black text-white">
                  {index + 1}
                </span>
                <strong className="flex-1 text-sm text-graphite-950">{step}</strong>
                {index < aiFlowSteps.length - 1 ? (
                  <ArrowRight size={15} className="text-graphite-400" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-5">
          <p className="section-kicker">Últimos clientes qualificados pela IA</p>
          <h3 className="mt-1 text-xl font-black text-graphite-950">
            Atendimentos entregues prontos para ação
          </h3>
          <div className="mt-5 grid gap-3">
            {aiQualifiedLeads.map(([name, vehicle, service, status]) => (
              <article
                key={`${name}-${vehicle}`}
                className="rounded-md border border-graphite-200 bg-white p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <strong className="text-sm text-graphite-950">{name}</strong>
                    <p className="mt-1 text-xs text-graphite-500">
                      {vehicle} · {service}
                    </p>
                  </div>
                  <StatusBadge
                    label={status}
                    tone={status.toLowerCase().includes("alta") ? "high" : "neutral"}
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-md border border-graphite-200 bg-graphite-50/70 p-4">
            <p className="text-sm font-black text-graphite-950">Exemplo discreto de mensagem</p>
            <p className="mt-2 text-sm leading-6 text-graphite-600">
              “Perfeito, Lucas. Registrei seu Corolla 2018, pneus + alinhamento e urgência para
              hoje. A equipe vai montar o orçamento e te retornar.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
