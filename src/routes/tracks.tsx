import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Award, FileCheck, Hexagon, Sparkles } from "lucide-react";
import { TopNav } from "@/components/streak/TopNav";
import { foundations, tracks } from "@/components/streak/roadmap-data";
import { getSelectedTrack, setSelectedTrack } from "@/hooks/use-selected-track";

export const Route = createFileRoute("/tracks")({
  head: () => ({
    meta: [
      { title: "Choose Your Career Track — Streak" },
      {
        name: "description",
        content:
          "Pick a tech career track — software, data, AI/ML, DevOps, security or product — and jump into its detailed skill roadmap.",
      },
      { property: "og:title", content: "Choose Your Career Track — Streak" },
      {
        property: "og:description",
        content: "Branching tech career tree: select a track and open its full skill roadmap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TracksPage,
});

function TracksPage() {
  const left = tracks.slice(0, 3);
  const right = tracks.slice(3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <main className="mx-auto max-w-6xl px-5 py-8">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-3.5" /> Back to dashboard
        </Link>

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Select Your Career Track</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Every track grows from the same roots. Choose a branch to open its detailed roadmap.
          </p>
        </div>

        {/* Stage rail */}
        <div className="mb-10 grid grid-cols-3 gap-3 text-center text-[10px] tracking-[0.18em] text-muted-foreground">
          {["CAREER ENTRY", "MID-LEVEL", "SENIOR LEADERSHIP"].map((s) => (
            <div key={s}>
              <div className="mb-2 h-px w-full bg-border" />
              {s}
            </div>
          ))}
        </div>

        {/* Tree */}
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="space-y-4">
            {left.map((t) => (
              <TrackCard key={t.id} track={t} align="right" />
            ))}
          </div>

          <div className="mx-auto flex size-32 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-center shadow-[var(--glow-primary)]">
            <div>
              <Hexagon className="mx-auto mb-1 size-5 text-primary" />
              <p className="text-xs font-bold leading-tight">
                TECH
                <br />
                CAREER
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {right.map((t) => (
              <TrackCard key={t.id} track={t} align="left" />
            ))}
          </div>
        </div>

        {/* Roots */}
        <section className="mt-12">
          <p className="mb-3 text-center text-[10px] tracking-[0.18em] text-muted-foreground">GLOBAL FOUNDATIONS</p>
          <div className="flex flex-wrap justify-center gap-2">
            {foundations.map((f) => (
              <span key={f} className="rounded-lg border border-border bg-secondary/40 px-3 py-2 text-xs">
                {f}
              </span>
            ))}
          </div>
          <div className="mt-6 grid gap-3 rounded-2xl border border-border bg-card/60 p-5 sm:grid-cols-3">
            {[
              { icon: Sparkles, label: "Foundational Skills" },
              { icon: Award, label: "Certifications" },
              { icon: FileCheck, label: "Project Experience" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Icon className="size-4 text-primary" /> {label}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function TrackCard({ track, align }: { track: (typeof tracks)[number]; align: "left" | "right" }) {
  return (
    <Link
      to="/roadmap"
      search={{ track: track.id }}
      className={`group block rounded-2xl border bg-card/70 p-4 transition-all hover:-translate-y-0.5 ${
        align === "right" ? "lg:text-right" : ""
      }`}
      style={{ borderColor: `color-mix(in oklab, ${track.color} 55%, transparent)` }}
    >
      <div className={`flex items-center gap-3 ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
        <span
          className="size-3 shrink-0 rounded-full"
          style={{ backgroundColor: track.color, boxShadow: `0 0 12px ${track.color}` }}
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{track.label}</p>
          <p className="text-[11px] text-muted-foreground">
            {track.nodes.length} milestones · {track.progress}% complete
          </p>
        </div>
        <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
      <div className="mt-3 h-1 w-full rounded-full bg-secondary">
        <div
          className="h-full rounded-full"
          style={{ width: `${track.progress}%`, backgroundColor: track.color }}
        />
      </div>
    </Link>
  );
}
