import { Check, ChevronDown } from "lucide-react";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const completed = [4, 5, 7, 2];
const today = 10;

export function StreakCalendarCard() {
  const cells = Array.from({ length: 31 }, (_, i) => i + 1);
  const leading = 2; // October 2025 starts Wednesday

  return (
    <section className="card-glow rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground">STREAK CALENDAR</h2>
        <button className="flex items-center gap-1 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground">
          October 2025 <ChevronDown className="size-3.5 text-muted-foreground" />
        </button>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-y-2 text-center text-[10px] tracking-[0.1em] text-muted-foreground">
        {days.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-y-2 text-center text-sm">
        {Array.from({ length: leading }, (_, i) => (
          <span key={`pad-${i}`} />
        ))}
        {cells.map((n) => {
          const isDone = completed.includes(n) || (n < today && n % 3 === 0);
          const isToday = n === today;
          return (
            <div key={n} className="grid place-items-center">
              <span
                className={`grid size-8 place-items-center rounded-full text-xs ${
                  isToday
                    ? "border border-primary text-primary shadow-[var(--glow-primary)]"
                    : isDone
                      ? "bg-primary/12 text-primary"
                      : "text-muted-foreground"
                }`}
              >
                {isDone && !isToday ? <Check className="size-4" /> : n}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="grid size-4 place-items-center rounded-full bg-primary/15 text-primary">
            <Check className="size-3" />
          </span>
          Completed
        </span>
        <span className="flex items-center gap-2">
          <span className="size-4 rounded-full border border-primary" /> Today
        </span>
        <span className="flex items-center gap-2">
          <span className="size-4 rounded-full border border-border" /> Missed
        </span>
      </div>
    </section>
  );
}
