import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-4">
      <span className="loading loading-spinner loading-lg text-[#C2F800]"></span>
      <p className="text-gray-400 mt-4 text-sm font-medium tracking-wide uppercase">
        Loading FitLog…
      </p>
    </div>
  );
}
