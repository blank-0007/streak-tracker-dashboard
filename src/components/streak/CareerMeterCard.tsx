import { ArrowRight, Check, Lock, Package } from "lucide-react";

const stages = [
  { label: "Foundations", pct: "100%", state: "done" as const },
  { label: "Skills", pct: "100%", state: "done" as const },
  { label: "Projects", pct: "68%", state: "current" as const },
  { label: "Experience", pct: "25%", state: "locked" as const },
  { label: "Mastery", pct: "0%", state: "locked" as const },
];

export function CareerMeterCard() {
  return (
    <section className="card-glow rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground">CAREER CHANCE METER</h2>
        <button className="flex items-center gap-1 text-xs font-medium text-primary hover:underline">
          Roadmap <ArrowRight className="size-3.5" />
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-end justify-between gap-2">
        <h3 className="text-3xl font-bold tracking-tight">MLOps Engineer</h3>
        <div className="text-right">
          <p className="text-3xl font-bold text-primary">68%</p>
          <p className="text-[11px] text-muted-foreground">Overall Progress</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        You're making <span className="text-success">great progress</span>. Keep building!
      </p>

      <div className="relative mt-8">
        <div className="absolute left-6 right-6 top-6 h-px bg-border" />
        <div className="absolute left-6 top-6 h-px w-[45%] bg-primary" />
        <div className="relative grid grid-cols-5 gap-1 text-center">
          {stages.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <span
                className={`grid size-12 place-items-center rounded-full border ${
                  s.state === "done"
                    ? "border-primary/60 bg-primary/12 text-primary"
                    : s.state === "current"
                      ? "border-primary bg-primary/20 text-primary shadow-[var(--glow-primary)]"
                      : "border-border bg-secondary text-muted-foreground"
                }`}
              >
                {s.state === "done" && <Check className="size-5" />}
                {s.state === "current" && <Package className="size-5" />}
                {s.state === "locked" && <Lock className="size-4" />}
              </span>
              <span className="text-[11px] text-muted-foreground">{s.label}</span>
              <span
                className={`text-xs font-semibold ${s.state === "locked" ? "text-muted-foreground" : "text-foreground"}`}
              >
                {s.pct}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
