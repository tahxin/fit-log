import React from 'react';

export default function MyPlanLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 animate-pulse">
      <div className="h-10 w-48 bg-neutral-900 rounded-lg mb-2"></div>
      <div className="h-4 w-72 bg-neutral-900 rounded mb-8"></div>

      <div className="grid grid-cols-3 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-6 mb-8 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-16 bg-neutral-800 rounded"></div>
            <div className="h-8 w-12 bg-neutral-800 rounded"></div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="h-10 w-44 bg-neutral-900 rounded-xl"></div>
        <div className="h-10 w-full sm:w-64 bg-neutral-900 rounded-xl"></div>
      </div>

      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-neutral-800 rounded-xl shrink-0"></div>
              <div className="space-y-2">
                <div className="h-5 w-36 bg-neutral-800 rounded"></div>
                <div className="h-4 w-24 bg-neutral-800 rounded"></div>
                <div className="h-3 w-48 bg-neutral-800 rounded"></div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-24 bg-neutral-800 rounded-full"></div>
              <div className="h-8 w-28 bg-neutral-800 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
