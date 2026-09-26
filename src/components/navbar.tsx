'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '@/../public/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWorkout } from '@/context/WorkoutContext';

const Navbar = () => {
    const { planCount, savedCount } = useWorkout();
    const pathname = usePathname();

    const isWorkouts = pathname === '/' || pathname.startsWith('/workouts');
    const isMyPlan = pathname === '/my-plan';

    return (
        <section className="flex justify-between items-center p-4">
            <Link href="/" className="flex items-center gap-2">
                <Image src={Logo} alt="Logo" width={28} height={28} />
                <h2 className="text-xl font-oswald">FITLOG</h2>
            </Link>
            <div className="flex gap-4">
                <Link
                    href="/"
                    className={`rounded-full px-4 py-2 transition-colors ${
                        isWorkouts
                            ? 'bg-[#1A2312] text-[#C2F800]'
                            : 'text-gray-400 hover:text-white'
                    }`}
                >
                    Workouts
                </Link>
                <Link
                    href="/my-plan"
                    className={`rounded-full px-4 py-2 transition-colors ${
                        isMyPlan
                            ? 'bg-[#1A2312] text-[#C2F800]'
                            : 'text-gray-400 hover:text-white'
                    }`}
                >
                    My Plan
                </Link>
            </div>
            <div className="flex gap-4 items-center">
                <Link href="/my-plan" className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors">
                    Plan
                    <span className="bg-[#C2F800] text-black text-xs font-bold rounded-full w-6 h-6 inline-flex items-center justify-center">
                        {planCount}
                    </span>
                </Link>
                <Link href="/my-plan" className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors">
                    Saved
                    <span className="border border-gray-500 text-gray-300 text-xs font-bold rounded-full w-6 h-6 inline-flex items-center justify-center">
                        {savedCount}
                    </span>
                </Link>
            </div>
        </section>
    );
};

export default Navbar;