import { Bell, Home, LogOut, Trophy, User } from "lucide-react";

const tabs = [
  { label: "Home", icon: Home, active: true },
  { label: "Leaderboard", icon: Trophy, active: false },
  { label: "Profile", icon: User, active: false },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-primary/15 text-primary">
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
              <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight">Streak</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {tabs.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`relative flex items-center gap-2 py-5 text-sm transition-colors ${
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`size-4 ${active ? "text-primary" : ""}`} />
              {label}
              {active && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary shadow-[var(--glow-primary)]" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative text-muted-foreground transition-colors hover:text-foreground">
            <Bell className="size-5" />
            <span className="absolute -right-1.5 -top-1.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              3
            </span>
          </button>
          <span className="grid size-9 place-items-center rounded-full bg-accent/30 ring-2 ring-primary/70">
            <User className="size-4 text-foreground" />
          </span>
          <button className="text-muted-foreground transition-colors hover:text-primary">
            <LogOut className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
