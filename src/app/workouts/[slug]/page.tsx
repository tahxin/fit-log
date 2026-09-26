'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ExerciseType from '@/types/workoutdatatypes';
import { useWorkout } from '@/context/WorkoutContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function WorkOutDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [exercise, setExercise] = useState<ExerciseType | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToPlan, saveForLater, isInPlan, isSaved, isPlanFull, setActiveTab } = useWorkout();

  useEffect(() => {
    fetch(`https://api.abcz.workers.dev/api/fitlog/${slug}`)
      .then(response => response.json())
      .then((data: ExerciseType) => {
        setExercise(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 animate-pulse">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 bg-neutral-900 rounded-2xl shrink-0"></div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="h-10 bg-neutral-900 rounded-lg w-3/4"></div>
            <div className="h-4 bg-neutral-900 rounded w-full"></div>
            <div className="h-4 bg-neutral-900 rounded w-5/6"></div>
            <div className="flex gap-2 py-2">
              <div className="h-7 w-20 bg-neutral-800 rounded-full"></div>
              <div className="h-7 w-24 bg-neutral-800 rounded-full"></div>
            </div>
            <div className="border border-neutral-800 rounded-xl p-4 space-y-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex justify-between items-center py-1">
                  <div className="h-4 w-24 bg-neutral-900 rounded"></div>
                  <div className="h-4 w-16 bg-neutral-800 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="flex flex-col items-center justify-center py-40 text-center">
        <h2 className="text-3xl font-black uppercase mb-2">Workout Not Found</h2>
        <p className="text-gray-400 mb-6">This exercise doesn&apos;t exist in the library.</p>
      </div>
    );
  }

  const alreadyInPlan = isInPlan(exercise.id);
  const alreadySaved = isSaved(exercise.id);

  const handleAddToPlan = () => {
    if (alreadyInPlan) {
      toast.warning(`${exercise.name} is already in today's plan.`, {
        icon: false,
        className: 'bg-neutral-900 text-white border border-yellow-500',
        progressClassName: 'bg-yellow-500',
      });
      return;
    }
    const success = addToPlan(exercise);
    if (success) {
      toast.success(`${exercise.name} added to today's plan!`, {
        icon: false,
        className: 'bg-neutral-900 text-white border border-lime-400',
        progressClassName: 'bg-lime-400',
      });
    } else {
      toast.error('Plan is full! Max 5 exercises per day.', {
        icon: false,
        className: 'bg-neutral-900 text-white border border-red-500',
        progressClassName: 'bg-red-500',
      });
    }
  };

  const handleSaveForLater = () => {
    if (alreadySaved) {
      setActiveTab('saved');
      router.push('/my-plan?tab=saved');
      return;
    }
    const success = saveForLater(exercise);
    if (success) {
      toast.info(`${exercise.name} saved for later.`, {
        icon: false,
        className: 'bg-neutral-900 text-white border border-neutral-700',
        progressClassName: 'bg-lime-400',
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <ToastContainer theme="dark" position="top-right" />

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        
        <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-96 shrink-0">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 sm:mb-4">
            {exercise.name}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">{exercise.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {exercise.muscleGroups.map((tag, index) => (
              <div key={index} className="badge badge-md sm:badge-lg bg-lime-400 text-black font-bold uppercase">
                {tag}
              </div>
            ))}
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-gray-400 text-sm">Equipment</td>
                  <td className="text-right text-sm">{exercise.equipment}</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-sm">Difficulty</td>
                  <td className="text-right text-sm">{exercise.difficulty}</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-sm">Sets</td>
                  <td className="text-right text-sm">{exercise.sets}</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-sm">Reps</td>
                  <td className="text-right text-sm">{exercise.reps}</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-sm">Duration</td>
                  <td className="text-right text-sm">{exercise.duration} min</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-sm">Calories</td>
                  <td className="text-right text-sm">{exercise.caloriesBurned} kcal</td>
                </tr>
                <tr>
                  <td className="text-gray-400 text-sm">Rating</td>
                  <td className="text-right text-sm">{exercise.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg sm:text-xl font-bold uppercase mb-4">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-8 text-sm sm:text-base">
            {exercise.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              className={`btn rounded-full w-full sm:w-auto ${
                alreadyInPlan || isPlanFull
                  ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                  : 'bg-lime-400 text-black hover:bg-lime-300'
              }`}
              onClick={handleAddToPlan}
              disabled={alreadyInPlan || isPlanFull}
            >
              {alreadyInPlan ? 'Already in plan' : isPlanFull ? 'Plan is full (5/5)' : "Add to today's plan"}
            </button>
            <button
              className={`btn rounded-full w-full sm:w-auto ${
                alreadySaved
                  ? 'bg-neutral-800 text-lime-400 border border-neutral-700 hover:bg-neutral-700'
                  : 'btn-outline hover:bg-neutral-800'
              }`}
              onClick={handleSaveForLater}
            >
              {alreadySaved ? '✓ Saved (Go to Saved)' : 'Save for later'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}