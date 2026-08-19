import { Award, Check, GitBranch, Lock, Square, Wrench, X } from "lucide-react";
import type { RoadmapNode, Track } from "./roadmap-data";

function CheckItem({ label, done }: { label: string; done: boolean }) {
  return (
    <li className="flex items-center gap-2 text-sm">
      {done ? (
        <Check className="size-4 text-success" />
      ) : (
        <Square className="size-4 text-muted-foreground" />
      )}
      <span className={done ? "text-foreground" : "text-muted-foreground"}>{label}</span>
    </li>
  );
}

export function NodeDetailPanel({
  node,
  track,
  onClose,
}: {
  node: RoadmapNode;
  track: Track;
  onClose: () => void;
}) {
  return (
    <aside className="flex h-full w-full flex-col overflow-hidden border-l border-border bg-card lg:w-[420px]">
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ backgroundColor: track.color, color: "oklch(0.16 0.012 285)" }}
      >
        <span className="text-sm font-semibold">{track.label}</span>
        <button onClick={onClose} aria-label="Close details">
          <X className="size-4" />
        </button>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto p-5">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-bold tracking-tight">{node.label}</h2>
          <span className="rounded-md bg-secondary px-2 py-1 text-[11px] text-muted-foreground">{node.level}</span>
        </div>

        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input type="checkbox" defaultChecked={node.state === "completed"} className="accent-[oklch(0.72_0.19_52)]" />
          Mark as Completed
        </label>

        {node.prerequisites.length > 0 && (
          <section>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Check className="size-4 text-primary" /> Prerequisites
            </h3>
            <ul className="space-y-1.5">
              {node.prerequisites.map((p) => (
                <CheckItem key={p.label} {...p} />
              ))}
            </ul>
          </section>
        )}

        {node.skills.length > 0 && (
          <section>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <GitBranch className="size-4 text-primary" /> Skills to Learn
            </h3>
            <ul className="space-y-1.5">
              {node.skills.map((s) => (
                <CheckItem key={s.label} {...s} />
              ))}
            </ul>
          </section>
        )}

        {node.tools.length > 0 && (
          <section>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Wrench className="size-4 text-primary" /> Important Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {node.tools.map((t) => (
                <span key={t} className="rounded-lg border border-border bg-secondary/50 px-3 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        {node.certifications.length > 0 && (
          <section>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Award className="size-4 text-primary" /> Certifications
            </h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {node.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        {node.projects.length > 0 && (
          <section>
            <h3 className="mb-2 text-sm font-semibold">Recommended Projects</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {node.projects.map((p) => (
                <div key={p.title} className="rounded-xl border border-border bg-secondary/40 p-3">
                  <div className="mb-2 h-20 rounded-lg bg-gradient-to-br from-primary/25 to-accent/25" />
                  <p className="text-sm font-medium">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {node.interview.length > 0 && (
          <section>
            <h3 className="mb-2 text-sm font-semibold">Interview Preparation</h3>
            <ul className="space-y-1.5">
              {node.interview.map((i) => (
                <CheckItem key={i} label={i} done={false} />
              ))}
            </ul>
          </section>
        )}

        {(node.prev || node.next || node.lateral) && (
          <section>
            <h3 className="mb-3 text-sm font-semibold">Career Path</h3>
            <div className="flex flex-wrap items-end gap-3">
              {node.prev && (
                <div>
                  <p className="mb-1 text-[10px] text-muted-foreground">Previous</p>
                  <span className="block rounded-lg bg-secondary px-3 py-2 text-xs">{node.prev}</span>
                </div>
              )}
              <div>
                <p className="mb-1 text-[10px] text-primary">You are here</p>
                <span className="block rounded-lg border border-primary bg-primary/15 px-3 py-2 text-xs text-primary shadow-[var(--glow-primary)]">
                  {node.label}
                </span>
              </div>
              {node.next && (
                <div>
                  <p className="mb-1 flex items-center gap-1 text-[10px] text-muted-foreground">
                    Next <Lock className="size-3" />
                  </p>
                  <span className="block rounded-lg bg-secondary px-3 py-2 text-xs">{node.next}</span>
                </div>
              )}
            </div>
            {node.lateral && (
              <div className="mt-3">
                <p className="mb-1 text-[10px] text-muted-foreground">Lateral Paths</p>
                <div className="flex flex-wrap gap-2">
                  {node.lateral.map((l) => (
                    <span key={l} className="rounded-lg bg-secondary px-3 py-2 text-xs">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </aside>
  );
}
