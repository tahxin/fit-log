import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Herosection from "@/components/herosection";
import WorkOutCards from "@/components/workout/workoutcards";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <div className="text-left p-4 md:p-8 lg:p-12">
        <h2 className="text-2xl font-bold mb-1">THE LIBRARY</h2>
        <p className="text-gray-400">Twelve lifts covering every major muscle group.</p>
      </div>
      <WorkOutCards />
      <Footer />
    </div>

  );
}
