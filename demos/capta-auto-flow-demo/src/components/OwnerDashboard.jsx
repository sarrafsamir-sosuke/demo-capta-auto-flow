import { AlertTriangle, Banknote, BarChart3, Bot, CircleDollarSign, UsersRound, Wrench } from "lucide-react";
import MetricCard from "./MetricCard";
import { formatCurrency } from "../utils/formatters";
import { ownerBars, riskItems } from "../data/mockData";

function BarList({ title, items }) {
  return (
    <div className="panel-flat p-4">
      <h3 className="text-base font-black text-graphite-950">{title}</h3>
      <div className="mt-4 grid gap-4">
        {items.map(([label, value]) => (
          <div key={label} className="grid gap-2">
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="font-semibold text-graphite-700">{label}</span>
              <strong className="text-graphite-950">{value}%</strong>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-graphite-100">
              <div className="h-full rounded-full bg-graphite-950" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OwnerDashboard({ leads, branding }) {
  const abertas = leads.filter((lead) => lead.status !== "Finalizado");
  const semRetorno = leads.filter((lead) => lead.status === "Aguardando retorno").length;
  const valorAberto = abertas.reduce((sum, lead) => sum + lead.orcamento, 0);

  return (
    <div className="grid gap-5">
      <section className="panel overflow-hidden">
        <div className="grid gap-4 border-b border-graphite-200 p-5 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="section-kicker">Leitura gerencial</p>
            <h2 className="mt-1 text-2xl font-black text-graphite-950">
              Agora eu consigo enxergar minha operação.
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-graphite-600">
              {branding.productName} conecta atendimento, orçamento, veículo, responsável e
              follow-up para mostrar onde existe venda, risco e gargalo.
            </p>
          </div>
          <div className="rounded-md border border-graphite-200 bg-graphite-50/70 p-4">
            <p className="text-sm text-graphite-500">Potencial de faturamento em aberto</p>
            <strong className="mt-2 block text-3xl font-black text-graphite-950">
              {formatCurrency(valorAberto)}
            </strong>
            <p className="mt-2 text-xs leading-5 text-graphite-500">
              Valor demonstrativo baseado nos orçamentos da fila atual.
            </p>
          </div>
        </div>

        <div className="grid gap-3 p-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          <MetricCard
            icon={UsersRound}
            label="Clientes em atendimento"
            value={String(abertas.length)}
            note="Operação ativa na visão gerencial"
          />
          <MetricCard
            icon={Banknote}
            label="Orçamentos em aberto"
            value="12"
            note="Acompanhar antes do fim do dia"
          />
          <MetricCard
            icon={AlertTriangle}
            label="Clientes sem retorno"
            value={String(semRetorno)}
            note="Risco de perda por atraso"
          />
          <MetricCard
            icon={Wrench}
            label="Serviços em execução"
            value="4"
            note="OS em andamento na oficina"
          />
          <MetricCard
            icon={Bot}
            label="Atendidos pela IA"
            value="28"
            note="Triagem inicial no WhatsApp"
          />
          <MetricCard
            icon={CircleDollarSign}
            label="Potencial em aberto"
            value={formatCurrency(valorAberto)}
            note="Estimativa demonstrativa"
          />
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        <BarList title="Serviços mais procurados" items={ownerBars.servicos} />
        <BarList title="Origem dos leads" items={ownerBars.origens} />
        <BarList title="Atendimentos por responsável" items={ownerBars.responsaveis} />
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="panel-flat p-5">
          <p className="section-kicker">Oportunidades em risco</p>
          <h3 className="mt-1 text-xl font-black text-graphite-950">Atenção do gestor</h3>
          <div className="mt-5 grid gap-3">
            {riskItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-md border border-red-100 bg-red-50/50 p-3 text-sm text-graphite-800"
              >
                <AlertTriangle className="text-red-600" size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="panel-flat p-5">
          <div className="flex items-start gap-3">
            <span className="icon-box">
              <BarChart3 size={16} />
            </span>
            <div>
              <p className="section-kicker">Acompanhamento comercial</p>
              <h3 className="mt-1 text-xl font-black text-graphite-950">
                Gestão simples para decidir o próximo passo
              </h3>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-graphite-600">
            A tela evita relatório pesado e mostra o que importa no dia: quem está em atendimento,
            qual orçamento está aberto, onde há retorno pendente e qual responsável precisa agir.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Controle", "Transparência", "Agilidade"].map((item) => (
              <div key={item} className="rounded-md border border-graphite-200 bg-white p-3">
                <strong className="text-sm text-graphite-950">{item}</strong>
                <p className="mt-1 text-xs leading-5 text-graphite-500">
                  Indicador visível para orientar a próxima ação.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
