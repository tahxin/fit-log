import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-40 text-center px-4">
      <h1 className="text-8xl font-black text-lime-400 mb-4">404</h1>
      <h2 className="text-3xl font-black uppercase mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist. Maybe you took a wrong turn at the squat rack.
      </p>
      <Link
        href="/"
        className="btn bg-lime-400 text-black rounded-full border-none font-bold px-6"
      >
        Back to Workouts
      </Link>
    </div>
  );
}
