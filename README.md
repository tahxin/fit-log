# FitLog - Workout Tracker & Library

A web application to browse exercises, schedule workouts for the day, and track exercise metrics.

## Overview

FitLog is a gym companion application designed to help users browse exercise routines, plan daily workout sessions with a 5-exercise cap, and keep track of completed lifts. The interface calculates workout duration and calories in real time and retains user progress across page reloads.

## Technologies Used

| Technology | Purpose |
| --- | --- |
| Next.js 16 (App Router) | React framework and page routing |
| React 19 | UI rendering and component state |
| TypeScript | Type definitions and validation |
| Tailwind CSS & DaisyUI | Layout styling and UI elements |
| React Toastify | User feedback notifications |
| React Context API | Shared state management for plan and saved lists |

## Features

1. **Exercise Library**: Browse 12 exercises covering major muscle groups with tags for difficulty, target muscles, duration, calories burned, and user ratings.
2. **Daily Plan with 5-Exercise Cap**: Add exercises directly into Today's Plan. The add action is disabled once the 5-lift cap is reached.
3. **Saved Workouts**: Bookmark exercises into a dedicated Saved list to review or add later.
4. **Live Summary Metrics**: Real-time counters calculate total exercises, estimated workout minutes, and calories burned for the current list.
5. **Mark as Done & Remove**: Toggle completed status for individual exercises and remove items from the plan or saved list with toast feedback.
6. **Search & Sorting**: Search workouts by exercise name or target muscle group, and sort the list by duration, calories, or rating.
7. **LocalStorage Persistence**: Plan, saved routines, and completion states persist in browser storage across sessions and refreshes.
8. **Workout Details**: Dedicated pages for each exercise (`/workouts/[slug]`) displaying equipment requirements, step-by-step instructions, and key specifications.
9. **Responsive Design**: Mobile-friendly layout adapting across mobile, tablet, and desktop screens.
10. **Custom 404 Route**: Dedicated not-found page for handling invalid links.

## Getting Started

### Prerequisites

Node.js 18+ and npm installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/tahxin/fit-log
cd fit-log

# Install packages
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout with global context and navigation
│   ├── page.tsx              # Home view with hero and exercise library
│   ├── not-found.tsx         # 404 error page
│   ├── my-plan/
│   │   └── page.tsx          # My Plan dashboard with metrics, tabs, and search
│   └── workouts/
│       └── [slug]/
│           └── page.tsx      # Individual exercise details page
├── components/
│   ├── navbar.tsx            # Top navigation bar with active states and badges
│   ├── footer.tsx            # Footer component
│   ├── herosection.tsx       # Landing banner with scroll anchor
│   └── workout/
│       ├── workoutcard.tsx   # Exercise item card
│       └── workoutcards.tsx  # Grid view with fetch loading state
├── context/
│   └── WorkoutContext.tsx    # State store for plan, saved items, and storage sync
└── types/
    └── workoutdatatypes.tsx  # Exercise type definitions
```

## API Reference

- All Workouts: `GET https://api.abcz.workers.dev/api/fitlog`
- Single Workout: `GET https://api.abcz.workers.dev/api/fitlog/:id`

## 📝 License

© 2026 FitLog — Workout Library. Train hard, log honest.

Made by Shahjalal Ahmed Nishat
