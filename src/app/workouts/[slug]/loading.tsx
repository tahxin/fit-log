import React from 'react';

export default function WorkoutDetailLoading() {
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

          <div className="h-6 w-32 bg-neutral-900 rounded pt-2"></div>
          <div className="space-y-2">
            <div className="h-4 bg-neutral-900 rounded w-full"></div>
            <div className="h-4 bg-neutral-900 rounded w-4/5"></div>
            <div className="h-4 bg-neutral-900 rounded w-3/4"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <div className="h-12 w-full sm:w-44 bg-neutral-800 rounded-full"></div>
            <div className="h-12 w-full sm:w-36 bg-neutral-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
