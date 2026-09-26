'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/../public/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useWorkout } from '@/context/WorkoutContext';

const Navbar = () => {
    const { planCount, savedCount, setActiveTab } = useWorkout();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [prevPathname, setPrevPathname] = useState(pathname);

    const isWorkouts = pathname === '/' || pathname.startsWith('/workouts');
    const isMyPlan = pathname === '/my-plan';

    if (prevPathname !== pathname) {
        setPrevPathname(pathname);
        setMobileMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-neutral-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <Image src={Logo} alt="Logo" width={28} height={28} priority />
                    <h2 className="text-xl font-bold font-oswald tracking-wide text-white">FITLOG</h2>
                </Link>

                <nav className="hidden md:flex items-center gap-2">
                    <Link
                        href="/"
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                            isWorkouts
                                ? 'bg-[#1A2312] text-[#C2F800]'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        Workouts
                    </Link>
                    <Link
                        href="/my-plan"
                        onClick={() => setActiveTab('plan')}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                            isMyPlan
                                ? 'bg-[#1A2312] text-[#C2F800]'
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        My Plan
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/my-plan?tab=plan"
                        onClick={() => setActiveTab('plan')}
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                        <span>Plan</span>
                        <span suppressHydrationWarning className="bg-[#C2F800] text-black text-xs font-bold rounded-full w-6 h-6 inline-flex items-center justify-center">
                            {planCount}
                        </span>
                    </Link>
                    <Link
                        href="/my-plan?tab=saved"
                        onClick={() => setActiveTab('saved')}
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                        <span>Saved</span>
                        <span suppressHydrationWarning className="border border-gray-500 text-gray-300 text-xs font-bold rounded-full w-6 h-6 inline-flex items-center justify-center">
                            {savedCount}
                        </span>
                    </Link>
                </div>

                <div className="flex md:hidden items-center gap-3">
                    <Link
                        href="/my-plan?tab=plan"
                        onClick={() => setActiveTab('plan')}
                        className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white"
                        aria-label="View Today's Plan"
                    >
                        <span className="hidden xs:inline">Plan</span>
                        <span suppressHydrationWarning className="bg-[#C2F800] text-black text-xs font-bold rounded-full w-6 h-6 inline-flex items-center justify-center">
                            {planCount}
                        </span>
                    </Link>
                    <Link
                        href="/my-plan?tab=saved"
                        onClick={() => setActiveTab('saved')}
                        className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white"
                        aria-label="View Saved Workouts"
                    >
                        <span className="hidden xs:inline">Saved</span>
                        <span suppressHydrationWarning className="border border-gray-500 text-gray-300 text-xs font-bold rounded-full w-6 h-6 inline-flex items-center justify-center">
                            {savedCount}
                        </span>
                    </Link>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none"
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
                    <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                            isWorkouts
                                ? 'bg-[#1A2312] text-[#C2F800]'
                                : 'text-gray-300 hover:bg-neutral-900 hover:text-white'
                        }`}
                    >
                        Workouts
                    </Link>
                    <Link
                        href="/my-plan"
                        onClick={() => {
                            setActiveTab('plan');
                            setMobileMenuOpen(false);
                        }}
                        className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                            isMyPlan
                                ? 'bg-[#1A2312] text-[#C2F800]'
                                : 'text-gray-300 hover:bg-neutral-900 hover:text-white'
                        }`}
                    >
                        My Plan
                    </Link>
                    
                    <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-around text-sm text-gray-300">
                        <Link
                            href="/my-plan?tab=plan"
                            onClick={() => {
                                setActiveTab('plan');
                                setMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-2 py-1 px-3 rounded-lg hover:bg-neutral-900"
                        >
                            <span>Today&apos;s Plan:</span>
                            <span suppressHydrationWarning className="bg-[#C2F800] text-black text-xs font-bold rounded-full w-6 h-6 inline-flex items-center justify-center">
                                {planCount}
                            </span>
                        </Link>
                        <Link
                            href="/my-plan?tab=saved"
                            onClick={() => {
                                setActiveTab('saved');
                                setMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-2 py-1 px-3 rounded-lg hover:bg-neutral-900"
                        >
                            <span>Saved:</span>
                            <span suppressHydrationWarning className="border border-gray-500 text-gray-300 text-xs font-bold rounded-full w-6 h-6 inline-flex items-center justify-center">
                                {savedCount}
                            </span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;