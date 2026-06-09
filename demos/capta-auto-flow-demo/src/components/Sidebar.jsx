import {
  Bot,
  CalendarClock,
  ClipboardList,
  Gauge,
  Menu,
  PanelLeftClose,
  Settings,
  ShieldCheck,
  UsersRound,
  Wrench,
} from "lucide-react";
import { cn } from "../utils/formatters";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: Gauge },
  { id: "crm", label: "CRM de atendimentos", icon: UsersRound },
  { id: "servicos", label: "Base de Serviços", icon: Wrench },
  { id: "ordens", label: "Ordens de Serviço", icon: ClipboardList },
  { id: "ia", label: "IA WhatsApp", icon: Bot },
  { id: "followup", label: "Retornos", icon: CalendarClock },
  { id: "dono", label: "Visão do Victor", icon: ShieldCheck },
  { id: "configuracoes", label: "Configurações", icon: Settings },
];

export default function Sidebar({ activeSection, onNavigate, open, onToggle, branding }) {
  return (
    <>
      <button
        className="fixed left-4 top-4 z-50 grid h-10 w-10 place-items-center rounded-md border border-graphite-200 bg-white text-graphite-900 shadow-panel lg:hidden"
        type="button"
        onClick={onToggle}
        aria-label="Abrir navegação"
      >
        <Menu size={18} />
      </button>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-[286px] flex-col border-r border-graphite-200 bg-white px-3 py-4 text-graphite-900 transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between gap-3 px-2 py-1">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-graphite-950 text-xs font-black text-white">
              {branding.logoText}
            </div>
            <div className="min-w-0">
              <strong className="block truncate text-sm font-black">{branding.demoClientName}</strong>
              <span className="text-xs text-graphite-500">Painel operacional</span>
            </div>
          </div>
          <button
            className="grid h-9 w-9 place-items-center rounded-md text-graphite-500 hover:bg-graphite-100 hover:text-graphite-900 lg:hidden"
            type="button"
            onClick={onToggle}
            aria-label="Fechar navegação"
          >
            <PanelLeftClose size={17} />
          </button>
        </div>

        <div className="mt-6 border-y border-graphite-100 px-2 py-4">
          <p className="section-kicker">Fluxo principal</p>
          <p className="mt-2 text-sm leading-6 text-graphite-600">
            WhatsApp com IA, orçamento, OS, execução e retorno em uma rotina acompanhável.
          </p>
        </div>

        <nav className="mt-4 grid gap-1" aria-label="Navegação da demo">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.id === activeSection;
            return (
              <button
                key={item.id}
                className={cn(
                  "flex min-h-10 items-center gap-3 rounded-md px-2.5 text-left text-sm font-semibold transition",
                  active
                    ? "bg-graphite-950 text-white"
                    : "text-graphite-600 hover:bg-graphite-50 hover:text-graphite-950",
                )}
                type="button"
                onClick={() => onNavigate(item.id)}
              >
                <Icon size={16} strokeWidth={2} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-graphite-100 px-2 pt-4">
          <p className="section-kicker">Demo comercial</p>
          <p className="mt-2 text-sm font-semibold text-graphite-900">Sem backend real.</p>
          <p className="mt-1 text-xs leading-5 text-graphite-500">
            Solução demonstrativa implementável pela Capta.
          </p>
        </div>
      </aside>
    </>
  );
}
