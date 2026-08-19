import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, Lock, Search } from "lucide-react";
import { TopNav } from "@/components/streak/TopNav";
import { NodeDetailPanel } from "@/components/streak/NodeDetailPanel";
import { foundations, tracks, type RoadmapNode, type Track } from "@/components/streak/roadmap-data";

export const Route = createFileRoute("/roadmap")({
  validateSearch: (search: Record<string, unknown>) => ({
    track: typeof search["track"] === "string" ? (search["track"] as string) : undefined,
  }),

  head: () => ({

    meta: [
      { title: "Career Roadmap — Streak" },
      {
        name: "description",
        content:
          "Explore branching tech career tracks, unlock skills and roles, and see prerequisites, tools and projects for every milestone.",
      },
      { property: "og:title", content: "Career Roadmap — Streak" },
      {
        property: "og:description",
        content: "Branching career tracks with skills, roles, certifications and project paths.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoadmapPage,
});

function NodeChip({
  node,
  color,
  active,
  onClick,
}: {
  node: RoadmapNode;
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  const isRole = node.level.includes("Role");
  return (
    <button
      onClick={onClick}
      className={`relative shrink-0 rounded-xl border px-4 py-2.5 text-left transition-all ${
        active ? "shadow-[var(--glow-primary)]" : "hover:-translate-y-0.5"
      }`}
      style={{
        borderColor: node.state === "locked" ? "var(--border)" : color,
        backgroundColor:
          node.state === "current"
            ? `color-mix(in oklab, ${color} 22%, transparent)`
            : "color-mix(in oklab, var(--card) 90%, transparent)",
      }}
    >
      {node.state === "current" && (
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-primary bg-background px-2 py-0.5 text-[10px] text-primary">
          You are here
        </span>
      )}
      <span className="flex items-center gap-2 text-xs font-semibold">
        {node.state === "completed" && <Check className="size-3.5 text-success" />}
        {node.state === "locked" && <Lock className="size-3 text-muted-foreground" />}
        {node.label}
      </span>
      {isRole && <span className="mt-0.5 block text-[10px] text-muted-foreground">{node.level}</span>}
    </button>
  );
}

function RoadmapPage() {
  const { track } = Route.useSearch();
  const [selected, setSelected] = useState<{ node: RoadmapNode; track: Track } | null>(null);
  const [activeTrack, setActiveTrack] = useState<string>(track ?? "software");


  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <div className="flex flex-col lg:h-[calc(100vh-4rem)] lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full shrink-0 border-b border-border bg-card/60 p-5 lg:w-64 lg:border-b-0 lg:border-r">
          <Link to="/" className="mb-5 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary">
            <ArrowLeft className="size-3.5" /> Back to dashboard
          </Link>
          <h2 className="mb-3 text-[10px] tracking-[0.16em] text-muted-foreground">CAREER TRACKS</h2>
          <ul className="space-y-1">
            {tracks.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => setActiveTrack(t.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm transition-colors ${
                    activeTrack === t.id ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span
                    className="size-4 shrink-0 rounded-full border-2"
                    style={{ borderColor: t.color, boxShadow: `0 0 10px ${t.color}` }}
                  />
                  {t.label}
                </button>
              </li>
            ))}
          </ul>

          <h2 className="mb-3 mt-6 text-[10px] tracking-[0.16em] text-muted-foreground">SKILL LEVELS</h2>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {["Beginner", "Entry", "Mid", "Senior"].map((l) => (
              <li key={l} className="flex items-center gap-2">
                <span className="size-3 rounded-sm border border-border bg-secondary" />
                {l}
              </li>
            ))}
          </ul>
        </aside>

        {/* Canvas */}
        <main className="flex-1 overflow-hidden">
          <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3">
            <h1 className="text-sm font-semibold tracking-tight">Roadmap</h1>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground">
              <Search className="size-3.5" /> Search
            </div>
          </div>

          <div className="h-[70vh] overflow-auto p-6 lg:h-[calc(100%-8rem)]">
            <div className="flex min-w-[900px] gap-8">
              {/* Global foundations */}
              <div className="w-52 shrink-0">
                <p className="mb-3 text-[10px] tracking-[0.16em] text-muted-foreground">GLOBAL FOUNDATIONS</p>
                <div className="space-y-3 border-l border-border pl-4">
                  {foundations.map((f) => (
                    <div key={f} className="rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-xs">
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Track lanes */}
              <div className="flex-1 space-y-8">
                {tracks.map((t) => (
                  <div
                    key={t.id}
                    className={`transition-opacity ${activeTrack === t.id ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                  >
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setActiveTrack(t.id)}
                        className="w-52 shrink-0 rounded-xl px-4 py-3 text-left text-sm font-semibold"
                        style={{ backgroundColor: t.color, color: "oklch(0.16 0.012 285)" }}
                      >
                        {t.label}
                        <span className="mt-0.5 block text-[10px] opacity-80">{t.progress}% complete</span>
                      </button>
                      <div className="h-0.5 flex-1" style={{ backgroundColor: t.color, boxShadow: `0 0 12px ${t.color}` }} />
                    </div>

                    {activeTrack === t.id && (
                      <div className="mt-6 flex flex-wrap items-start gap-3 pl-56">
                        {t.nodes.map((n) => (
                          <NodeChip
                            key={n.id}
                            node={n}
                            color={t.color}
                            active={selected?.node.id === n.id}
                            onClick={() => setSelected({ node: n, track: t })}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border px-5 py-3">
            <p className="mb-2 text-[11px] text-muted-foreground">Global Progress: 35%</p>
            <div className="h-1.5 w-full rounded-full bg-secondary">
              <div className="h-full w-[35%] rounded-full bg-primary shadow-[var(--glow-primary)]" />
            </div>
          </div>
        </main>

        {selected && (
          <NodeDetailPanel node={selected.node} track={selected.track} onClose={() => setSelected(null)} />
        )}
      </div>
    </div>
  );
}
