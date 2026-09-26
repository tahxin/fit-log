import React from "react";
import Herosection from "@/components/herosection";
import WorkOutCards from "@/components/workout/workoutcards";

export default function Home() {
  return (
    <div>
      <Herosection />
      <div id="library" className="text-left p-4 md:p-8 lg:p-12 scroll-mt-4">
        <h2 className="text-2xl font-bold mb-1">THE LIBRARY</h2>
        <p className="text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="m-6">
        <WorkOutCards />
      </div>
    </div>
  );
}
