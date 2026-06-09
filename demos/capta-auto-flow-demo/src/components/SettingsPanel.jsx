import { CheckCircle2, Palette, Settings, Wrench } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function SettingsPanel({ branding, teamMembers, services }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
      <section className="panel p-5">
        <div className="flex items-start gap-3">
          <span className="icon-box">
            <Settings size={16} />
          </span>
          <div>
            <p className="section-kicker">Configuração de marca</p>
            <h2 className="mt-1 text-2xl font-black text-graphite-950">
              Produto-base pronto para personalização
            </h2>
            <p className="mt-2 text-sm leading-6 text-graphite-600">
              A demo foi estruturada para trocar identidade, serviços e dados sem reescrever a
              interface.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 text-sm">
          {[
            ["Produto", branding.productName],
            ["Cliente demo", branding.demoClientName],
            ["Segmento", branding.segment],
            ["Slogan", branding.slogan],
            ["Objetivo operacional", branding.mockOperation.mainGoal],
          ].map(([label, value]) => (
            <div key={label} className="data-row">
              <span className="text-graphite-500">{label}</span>
              <strong className="max-w-[360px] text-right text-graphite-950">{value}</strong>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-md border border-graphite-200 bg-graphite-50/70 p-4">
          <p className="text-sm font-black text-graphite-950">Como adaptar para outro cliente</p>
          <p className="mt-2 text-sm leading-6 text-graphite-700">
            Troque textos e cores em <strong>src/config/branding.js</strong>. Troque clientes,
            veículos, serviços, orçamentos e histórico em <strong>src/data/mockData.js</strong>.
          </p>
        </div>
      </section>

      <section className="grid gap-5">
        <div className="panel-flat p-5">
          <div className="flex items-center gap-3">
            <span className="icon-box">
              <Palette size={16} />
            </span>
            <div>
              <p className="section-kicker">Direção visual</p>
              <h3 className="mt-1 text-xl font-black text-graphite-950">
                Automotivo premium, minimalista e técnico
              </h3>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <ColorGroup title="Cores principais" colors={branding.visualDirection.primaryColors} />
            <ColorGroup
              title="Cores secundárias"
              colors={branding.visualDirection.secondaryColors}
            />
            <ColorGroup title="Acentos" colors={branding.visualDirection.accentColors} />
            <div className="rounded-md border border-graphite-200 bg-white p-3">
              <span className="field-label">Evitar</span>
              <p className="mt-2 text-sm leading-6 text-graphite-600">
                {branding.visualDirection.avoid}
              </p>
            </div>
          </div>
        </div>

        <div className="panel-flat p-5">
          <div className="flex items-center gap-3">
            <span className="icon-box">
              <Wrench size={16} />
            </span>
            <div>
              <p className="section-kicker">Serviços e equipe</p>
              <h3 className="mt-1 text-xl font-black text-graphite-950">
                Base demonstrativa ativa
              </h3>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {services.map((service) => (
              <StatusBadge key={service.id} label={service.nome} tone="neutral" />
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {teamMembers.map((member) => (
              <div key={member.id} className="rounded-md border border-graphite-200 bg-white p-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={15} />
                  <div>
                    <strong className="text-sm text-graphite-950">{member.role}</strong>
                    <p className="mt-1 text-xs leading-5 text-graphite-500">
                      {member.name} · {member.area}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ColorGroup({ title, colors }) {
  return (
    <div className="rounded-md border border-graphite-200 bg-white p-3">
      <span className="field-label">{title}</span>
      <div className="mt-3 flex flex-wrap gap-2">
        {colors.map((color) => (
          <span
            key={color}
            className="inline-flex min-h-8 items-center gap-2 rounded-full border border-graphite-200 bg-white px-2.5 text-xs font-semibold text-graphite-700"
          >
            <span
              className="h-4 w-4 rounded-full border border-graphite-200"
              style={{ backgroundColor: color }}
            />
            {color}
          </span>
        ))}
      </div>
    </div>
  );
}
