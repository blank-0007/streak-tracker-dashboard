import { CheckCircle2, Flame, Star } from "lucide-react";

const stats = [
  { icon: Star, label: "TOTAL POINTS", value: "2,450", sub: "+120 today" },
  { icon: CheckCircle2, label: "MISSIONS COMPLETED", value: "34", sub: "+4 this week" },
  { icon: Flame, label: "CURRENT STREAK", value: "12 DAYS", sub: "Best: 28 days" },
];

function StreakRing({ days, progress }: { days: number; progress: number }) {
  const size = 176;
  const stroke = 12;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  return (
    <div className="relative grid place-items-center">
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.2 295)" />
            <stop offset="100%" stopColor="oklch(0.72 0.19 52)" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} className="stroke-secondary" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          strokeWidth={stroke}
          stroke="url(#ringGrad)"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
          style={{ filter: "drop-shadow(0 0 10px oklch(0.72 0.19 52 / 0.6))" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <Flame className="size-6 text-primary" />
        <span className="text-5xl font-bold leading-none">{days}</span>
        <span className="mt-1 text-xs tracking-[0.2em] text-muted-foreground">DAYS</span>
      </div>
    </div>
  );
}

export function OverviewCard() {
  return (
    <section className="card-glow rounded-2xl border border-border bg-card p-6">
      <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground">OVERVIEW</h2>
      <div className="mt-6 flex flex-col items-center gap-8 sm:flex-row sm:items-center">
        <div className="flex flex-col items-center gap-3">
          <p className="text-[11px] tracking-[0.18em] text-muted-foreground">DAILY STREAK</p>
          <StreakRing days={12} progress={0.72} />
          <p className="text-xs font-semibold tracking-[0.18em] text-primary">KEEP IT UP!</p>
        </div>

        <div className="flex w-full flex-1 flex-col gap-3">
          {stats.map(({ icon: Icon, label, value, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                <Icon className="size-4" />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] tracking-[0.14em] text-muted-foreground">{label}</p>
                <p className="text-xl font-bold leading-tight">{value}</p>
                <p className="text-[11px] text-primary">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
