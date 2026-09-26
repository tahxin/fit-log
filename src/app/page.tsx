import React from "react";
import Herosection from "@/components/herosection";
import WorkOutCards from "@/components/workout/workoutcards";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <Herosection />
      <div id="library" className="text-left py-8 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1 text-white">THE LIBRARY</h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div>
        <WorkOutCards />
      </div>
    </div>
  );
}
