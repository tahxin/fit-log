'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useWorkout } from '@/context/WorkoutContext';
import Exercise from '@/types/workoutdatatypes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Tab = 'plan' | 'saved';
type SortKey = 'duration' | 'calories' | 'rating';

function MyPlanPage() {
  const {
    todayPlan,
    saved,
    removeFromPlan,
    removeFromSaved,
    toggleComplete,
    isCompleted,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState<Tab>('plan');
  const [sortKey, setSortKey] = useState<SortKey>('duration');
  const [search, setSearch] = useState('');

  const currentList = activeTab === 'plan' ? todayPlan : saved;

  const sortedList = useMemo(() => {
    let filtered = currentList;
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = currentList.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.muscleGroups.some((g) => g.toLowerCase().includes(q))
      );
    }
    const copy = [...filtered];
    copy.sort((a, b) => {
      switch (sortKey) {
        case 'duration':
          return a.duration - b.duration;
        case 'calories':
          return a.caloriesBurned - b.caloriesBurned;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
    return copy;
  }, [currentList, sortKey, search]);

  const handleRemove = (exercise: Exercise) => {
    if (activeTab === 'plan') {
      removeFromPlan(exercise.id);
    } else {
      removeFromSaved(exercise.id);
    }
    toast.error(`${exercise.name} removed.`, {
      icon: false,
      className: 'bg-neutral-900 text-white border border-red-500',
      progressClassName: 'bg-red-500',
    });
  };

  const handleToggleComplete = (exercise: Exercise) => {
    const wasCompleted = isCompleted(exercise.id);
    toggleComplete(exercise.id);
    if (!wasCompleted) {
      toast.success(`${exercise.name} marked as done!`, {
        icon: false,
        className: 'bg-neutral-900 text-white border border-lime-400',
        progressClassName: 'bg-lime-400',
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
      <ToastContainer theme="dark" position="top-right" />

      <h1 className="text-4xl font-black uppercase mb-2">My Plan</h1>
      <p className="text-gray-400 mb-8">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="grid grid-cols-3 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mb-8">
        <div>
          <p className="text-gray-400 text-sm mb-1">Exercises</p>
          <p className="text-3xl font-black text-lime-400">{currentList.length}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-1">Minutes</p>
          <p className="text-3xl font-black">{currentList.reduce((sum, e) => sum + e.duration, 0)}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-1">Calories</p>
          <p className="text-3xl font-black">{currentList.reduce((sum, e) => sum + e.caloriesBurned, 0)}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="tabs tabs-boxed bg-neutral-900">
          <button
            className={`tab ${
              activeTab === 'plan'
                ? 'bg-white text-black font-bold'
                : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('plan')}
          >
            Today&apos;s Plan
          </button>
          <button
            className={`tab ${
              activeTab === 'saved'
                ? 'bg-white text-black font-bold'
                : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('saved')}
          >
            Saved
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by name or tag..."
            className="input input-bordered bg-neutral-900 border-neutral-700 text-sm flex-1 md:w-60"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Sort By</span>
            <select
              className="select select-bordered bg-neutral-900 border-neutral-700"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      {sortedList.length === 0 ? (
        <div className="border border-neutral-800 rounded-2xl flex flex-col items-center justify-center py-24 text-center">
          <h2 className="text-2xl font-black uppercase mb-2">
            Nothing Here Yet
          </h2>
          <p className="text-gray-400 mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="btn bg-lime-400 text-black rounded-full border-none"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedList.map((exercise: Exercise) => {
            const completed =
              activeTab === 'plan' && isCompleted(exercise.id);

            return (
              <div
                key={exercise.id}
                className={`flex items-center gap-4 bg-neutral-900 border rounded-2xl p-4 transition-all ${
                  completed
                    ? 'border-lime-400/40 opacity-60'
                    : 'border-neutral-800'
                }`}
              >
                <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={exercise.image}
                    alt={exercise.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-lg font-bold uppercase ${
                      completed ? 'line-through text-gray-500' : 'text-white'
                    }`}
                  >
                    {exercise.name}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    {exercise.equipment}
                  </p>
                  <div className="flex gap-4 text-neutral-300 text-sm mt-1">
                    <span>⏱ {exercise.duration} min</span>
                    <span>🔥 {exercise.caloriesBurned} kcal</span>
                    <span>⭐ {exercise.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/workouts/${exercise.id}`}
                    className="btn btn-outline btn-sm rounded-full"
                  >
                    View Details
                  </Link>

                  {activeTab === 'plan' && (
                    <button
                      className={`btn btn-sm rounded-full ${
                        completed
                          ? 'bg-green-700 text-white border-green-700'
                          : 'bg-lime-400 text-black border-lime-400 hover:bg-lime-300'
                      }`}
                      onClick={() => handleToggleComplete(exercise)}
                    >
                      ✓ {completed ? 'Done' : 'Mark as Done'}
                    </button>
                  )}

                  <button
                    className="btn btn-ghost btn-sm text-neutral-500 hover:text-red-400"
                    onClick={() => handleRemove(exercise)}
                    aria-label="Remove"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MyPlanPage;