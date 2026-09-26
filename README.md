# 💪 FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Pick a lift, lock it into today's plan, and watch the week's work add up.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8?logo=daisyui)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

---

## 📖 Description

FitLog is a workout library web application where users can browse through 12 exercises covering every major muscle group. Each exercise has detailed instructions, key specs, and illustrations. Users can add exercises to their daily plan (capped at 5), save them for later, mark them as done, and track their session stats in real-time — all within a sleek dark-themed interface.

---

## 🛠️ Technologies Used

| Technology       | Purpose                                    |
| ---------------- | ------------------------------------------ |
| **Next.js 16**   | React framework with App Router            |
| **React 19**     | Component-based UI library                 |
| **TypeScript**   | Type-safe development                      |
| **Tailwind CSS 4** | Utility-first responsive styling         |
| **DaisyUI 5**    | Pre-built UI components (tabs, badges, etc.) |
| **React Toastify** | Toast notifications                      |
| **React Context API** | Global state management (useContext)  |

---

## ✨ Key Features

1. **📚 Workout Library** — Browse 12 exercises in a responsive 3-column grid with category tags, duration, calories, and ratings displayed on each card.

2. **📋 Today's Plan** — Add up to 5 exercises to your daily workout plan. Track total exercises, minutes, and calories in real-time via a live stats dashboard.

3. **🔖 Save for Later** — Bookmark exercises to a "Saved" list, separate from your daily plan, so you can come back to them anytime.

4. **✅ Mark as Done & Remove** — Mark individual exercises as completed (with visual strikethrough feedback) or remove them from your plan/saved list. Every action triggers a toast notification.

5. **🔍 Sort & Filter** — Sort your plan or saved list by Duration, Calories, or Rating using the sort dropdown.

6. **📱 Fully Responsive** — Optimized layout for mobile, tablet, and desktop. The grid collapses, the hero stacks, and the navbar stays usable across all screen sizes.

7. **🔗 Dynamic Routing** — Each workout has its own detail page (`/workouts/:id`) fetched from the API, with full specs, instructions, and action buttons.

8. **🌙 Dark Theme** — A premium dark UI with lime-green accents (#C2F800) designed for a gym-focused aesthetic.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone <your-repo-url>
cd fit-log

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navbar, Footer, Provider
│   ├── page.tsx            # Home page (Hero + Library)
│   ├── not-found.tsx       # Custom 404 page
│   ├── my-plan/
│   │   └── page.tsx        # My Plan page (stats, tabs, sort)
│   └── workouts/
│       └── [slug]/
│           └── page.tsx    # Workout detail page
├── components/
│   ├── navbar.tsx          # Navigation bar with active links & badges
│   ├── footer.tsx          # Footer component
│   ├── herosection.tsx     # Hero/banner section
│   ├── button.tsx          # Reusable button component
│   └── workout/
│       ├── workoutcard.tsx  # Individual workout card
│       └── workoutcards.tsx # Workout cards grid with loading state
├── context/
│   └── WorkoutContext.tsx   # React Context for global state (useContext)
└── types/
    └── workoutdatatypes.tsx # TypeScript interface for Exercise
```

---

## 🌐 API Endpoints

- **All Workouts:** `GET https://api.abcz.workers.dev/api/fitlog`
- **Single Workout:** `GET https://api.abcz.workers.dev/api/fitlog/:id`

---

## 📝 License

© 2026 FitLog — Workout Library. Train hard, log honest.
