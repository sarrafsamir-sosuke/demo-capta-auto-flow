import { cn } from "../utils/formatters";

const tones = {
  neutral: "border-graphite-200 bg-white text-graphite-600",
  warning: "border-amber-200 bg-amber-50/70 text-amber-800",
  info: "border-graphite-300 bg-graphite-100 text-graphite-700",
  risk: "border-red-200 bg-red-50/80 text-red-700",
  success: "border-emerald-200 bg-emerald-50/80 text-emerald-700",
  active: "border-signal/30 bg-signal/10 text-signalDark",
  closed: "border-graphite-800 bg-graphite-900 text-white",
  high: "border-red-200 bg-red-50/80 text-red-700",
  medium: "border-amber-200 bg-amber-50/70 text-amber-800",
  low: "border-graphite-200 bg-white text-graphite-600",
  ai: "border-graphite-300 bg-graphite-100 text-graphite-700",
  forwarded: "border-emerald-200 bg-emerald-50/80 text-emerald-700",
};

export default function StatusBadge({ label, tone = "neutral" }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-6 items-center rounded-full border px-2 text-[11px] font-semibold",
        tones[tone] || tones.neutral,
      )}
    >
      {label}
    </span>
  );
}
