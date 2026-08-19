import { CalendarDays, Clock, Plus } from "lucide-react";

export function TodaysTargetsCard() {
  return (
    <section className="card-glow flex flex-col rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-medium tracking-[0.18em] text-muted-foreground">TODAY'S TARGETS</h2>
        <button className="text-xs font-medium text-primary hover:underline">+ Add Task</button>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3">
        <span className="flex items-center gap-3 text-sm text-muted-foreground">
          <CalendarDays className="size-4" />
          Connect your Google Calendar
        </span>
        <CalendarDays className="size-4 text-muted-foreground" />
      </div>

      <input
        type="text"
        placeholder="e.g. Read 10 pages, workout, DSA problem..."
        className="mt-3 w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary/60"
      />

      <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/30 p-2 pl-4">
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="size-4" />
          Add Time
        </span>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[var(--glow-primary)]">
          <Plus className="size-4" />
          Add Target
        </button>
      </div>
    </section>
  );
}
