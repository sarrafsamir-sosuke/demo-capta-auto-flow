export default function MetricCard({ icon: Icon, label, value, note, dark = false }) {
  return (
    <article
      className={
        dark
          ? "rounded-lg border border-graphite-900 bg-graphite-950 p-4 text-white shadow-panel"
          : "panel p-4"
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className={dark ? "text-xs font-semibold text-graphite-300" : "text-xs font-semibold text-graphite-500"}>
            {label}
          </p>
          <strong className="mt-2 block text-3xl font-black leading-none">{value}</strong>
        </div>
        {Icon ? (
          <span
            className={
              dark
                ? "icon-box border-white/10 bg-white/5 text-graphite-200"
                : "icon-box"
            }
          >
            <Icon size={16} strokeWidth={2} />
          </span>
        ) : null}
      </div>
      <p className={dark ? "mt-4 text-xs leading-5 text-graphite-300" : "mt-4 text-xs leading-5 text-graphite-500"}>
        {note}
      </p>
    </article>
  );
}
