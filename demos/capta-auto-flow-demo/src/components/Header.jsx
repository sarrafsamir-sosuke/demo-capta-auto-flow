import { Bell, Clock3, Factory } from "lucide-react";

export default function Header({ toast, branding }) {
  return (
    <header className="border-b border-graphite-200 bg-white/90 px-5 py-4 backdrop-blur lg:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="pl-12 lg:pl-0">
          <p className="section-kicker">{branding.copy.headerKicker}</p>
          <h1 className="mt-1 text-2xl font-black text-graphite-950 md:text-[28px]">
            {branding.productName}
          </h1>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-graphite-600">
            {branding.subtitle}
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[500px]">
          <HeaderPill icon={Factory} label="Operação" value={branding.mockOperation.unit} />
          <HeaderPill icon={Clock3} label="Turno" value={branding.mockOperation.dayShift} />
          <div className="rounded-md border border-graphite-200 bg-graphite-950 px-3 py-2 text-white">
            <span className="flex items-center gap-2 text-[11px] font-bold uppercase text-graphite-300">
              <Bell size={13} /> Status
            </span>
            <strong className="mt-1 block truncate text-sm font-semibold">
              {toast || "Operação estável"}
            </strong>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeaderPill({ icon: Icon, label, value }) {
  return (
    <div className="rounded-md border border-graphite-200 bg-white px-3 py-2">
      <span className="flex items-center gap-2 text-[11px] font-bold uppercase text-graphite-500">
        <Icon size={13} /> {label}
      </span>
      <strong className="mt-1 block truncate text-sm font-semibold text-graphite-950">{value}</strong>
    </div>
  );
}
