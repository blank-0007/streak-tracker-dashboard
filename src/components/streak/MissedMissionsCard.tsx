import { Box, Clock, List, MoreVertical } from "lucide-react";

const missions = [
  { icon: Clock, name: "Time complexity 2", date: "10/10/2025" },
  { icon: Box, name: "Array 1", date: "08/10/2025" },
  { icon: List, name: "Array 2", date: "07/10/2025" },
];

export function MissedMissionsCard() {
  return (
    <section className="card-glow rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground">MISSED MISSIONS</h2>
        <button className="text-xs font-medium text-primary hover:underline">View all</button>
      </div>

      <ul className="mt-5 flex flex-col gap-3">
        {missions.map(({ icon: Icon, name, date }) => (
          <li
            key={name}
            className="flex flex-wrap items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3"
          >
            <span className="grid size-9 place-items-center rounded-lg bg-primary/12 text-primary">
              <Icon className="size-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{name}</p>
              <p className="text-[11px] text-muted-foreground">Missed on {date}</p>
            </div>
            <button className="rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-shadow hover:shadow-[var(--glow-primary)]">
              Today
            </button>
            <button className="rounded-lg border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-foreground hover:border-primary/50">
              Tomorrow
            </button>
            <button className="text-muted-foreground hover:text-foreground">
              <MoreVertical className="size-4" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
