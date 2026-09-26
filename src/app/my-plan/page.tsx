'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import ExerciseType from '@/types/workoutdatatypes';

export default function MyPlan() {
  const [exercise, setExercise] = useState<ExerciseType | null>(null);

  useEffect(() => {
    fetch('https://api.abcz.workers.dev/api/fitlog')
      .then(response => response.json())
      .then(data => {
        setExercise(data[0]);
      });
  }, []);

  if (!exercise) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row gap-10">
        
        <div className="relative w-full md:w-1/2 h-96">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-black uppercase mb-4">
            {exercise.name}
          </h1>
          <p className="text-gray-400 mb-4">{exercise.description}</p>

          <div className="flex gap-2 mb-6">
            {exercise.muscleGroups.map((tag, index) => (
              <div key={index} className="badge badge-lg bg-lime-400 text-black font-bold uppercase">
                {tag}
              </div>
            ))}
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-gray-400">Equipment</td>
                  <td className="text-right">{exercise.equipment}</td>
                </tr>
                <tr>
                  <td className="text-gray-400">Difficulty</td>
                  <td className="text-right">{exercise.difficulty}</td>
                </tr>
                <tr>
                  <td className="text-gray-400">Sets</td>
                  <td className="text-right">{exercise.sets}</td>
                </tr>
                <tr>
                  <td className="text-gray-400">Reps</td>
                  <td className="text-right">{exercise.reps}</td>
                </tr>
                <tr>
                  <td className="text-gray-400">Duration</td>
                  <td className="text-right">{exercise.duration} min</td>
                </tr>
                <tr>
                  <td className="text-gray-400">Calories</td>
                  <td className="text-right">{exercise.caloriesBurned} kcal</td>
                </tr>
                <tr>
                  <td className="text-gray-400">Rating</td>
                  <td className="text-right">{exercise.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold uppercase mb-4">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-8">
            {exercise.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <div className="flex gap-4">
            <button className="btn bg-lime-400 text-black rounded-full">
              Add to today&apos;s plan
            </button>
            <button className="btn btn-outline rounded-full">
              Save for later
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}