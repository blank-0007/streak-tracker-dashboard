# Streak Tracker Dashboard

Role: Act as a Senior Frontend UI/UX Developer and Web Designer specializing in modern, dark-mode dashboards and data visualization platforms.

Project Goal: Build the frontend for a dark-mode career-tracking and gamification web application called "Streak," heavily inspired by the layout and components of the reference image (image_24.png).

Aesthetic & Styling (Crucial):

Theme: Deep dark-mode (#0F0F13 or similar).

Accent Color: Electric Orange (#FF7F00).

Typography: Clean, modern sans-serif.

Layout: Use a grid-based card layout. All cards should have a dark background, subtle rounded corners, and potentially a slight glow effect on hover.

Dashboard Component Breakdown (Rebuild these exactly):

Top Navigation:

Left: "Streak" logo/text.

Center: Top tabs: "Home", "Leaderboard", "Profile" (with icons). "Home" is active.

Right: Notification bell icon, User profile avatar (e.g., a small photo), Logout icon.

Main Dashboard Grid (Top Row):

Card 1 (Gamification Overview - Left):

Title: "OVERVIEW".

Left side: A large, circular progress bar (gradient of orange/purple). Center of circle: "12" (large number) and "DAYS" (text). Below circle: "KEEP IT UP!".

Right side:

"TOTAL POINTS" section: "2,450" (number), "+120 today" (small text), with a star icon.

"MISSIONS COMPLETED" section: "34" (number), "+4 this week" (small text), with a checkmark icon.

"CURRENT STREAK" section: "12 DAYS" (text), "Best: 28 days" (small text), with a flame icon.

Card 2 (Career Chance Meter - Center):

Title: "CAREER CHANCE METER".

Subtitle: "MLOps Engineer" (large, bold text).

Below that: "You're making great progress. Keep building!"

Progress stages (horizontal line): Five circular stages. "Foundations", "Skills", "Projects", "Experience", "Mastery". Orange checkmark icons on first two. A glowing orange milestone icon on the third ("Projects - 68%"). Padlock icons on the last two.

Percentages below stages: "100%", "100%", "68%", "25%", "0%".

Card 3 (Streak Calendar - Right):

Title: "STREAK CALENDAR".

Dropdown: "October 2025".

Calendar grid (Sun-Sat): Dates with numbers.

Visual markers: Orange checkmarks for completed days. A glowing orange circle around today's date (e.g., 10). Blank circles for missed.

Legend at bottom: "Completed" (orange check), "Today" (orange circle), "Missed" (blank circle).

Main Dashboard Grid (Bottom Row):

Card 4 (Today's Targets - Left):

Title: "TODAY'S TARGETS".

Right side: "+ Add Task" (button).

Content: Input field with calendar icon, labeled "Connect your Google Calendar".

Below that: A text area/input for a new goal (e.g., "e.g. Read 10 pages, workout, DSA problem...").

Bottom: "Add Time" (button) and a large "Add Target" (orange button).

Card 5 (Missed Missions - Right):

Title: "MISSED MISSIONS".

Right side: "View all" (button).

List of 3 items. Each has: an icon (e.g., clock, cube, list), mission name (e.g., "Time complexity 2"), "Missed on [Date]", and two buttons: "Today" (orange) and "Tomorrow" (grey).

Important Technical Notes for AI Generation:

Use React, TypeScript, and Tailwind CSS.

Structure the code with components for each card.

Make the calendar and progress circles visually dynamic (mock data for now is fine).

Ensure responsiveness for different screen sizes.

Replicate the exact spacing, margins, and font sizes from the reference image as closely as possible.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/81b8bc6c-ed99-4251-be28-90d8f19d0b33).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
