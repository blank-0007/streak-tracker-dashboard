import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/streak/TopNav";
import { OverviewCard } from "@/components/streak/OverviewCard";
import { CareerMeterCard } from "@/components/streak/CareerMeterCard";
import { StreakCalendarCard } from "@/components/streak/StreakCalendarCard";
import { TodaysTargetsCard } from "@/components/streak/TodaysTargetsCard";
import { MissedMissionsCard } from "@/components/streak/MissedMissionsCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Streak — Career Streak & Mission Dashboard" },
      {
        name: "description",
        content:
          "Track daily streaks, career readiness and missed missions in one dark-mode gamified dashboard built for aspiring engineers.",
      },
      { property: "og:title", content: "Streak — Career Streak & Mission Dashboard" },
      {
        property: "og:description",
        content: "Daily streaks, career chance meter and mission tracking in one gamified dashboard.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <main className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6">
        <h1 className="sr-only">Streak dashboard</h1>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_1fr] xl:grid-cols-[1.05fr_1.1fr_0.95fr]">
          <OverviewCard />
          <CareerMeterCard />
          <StreakCalendarCard />
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <TodaysTargetsCard />
          <MissedMissionsCard />
        </div>
      </main>
    </div>
  );
}
