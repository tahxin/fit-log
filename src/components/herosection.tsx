import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#1A1A1A] rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:px-14 md:py-12 w-full relative overflow-hidden">
                
                <div className="flex-1 flex flex-col items-start mb-8 md:mb-0 w-full">
                    <p className="text-[#CCFF00] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4">
                        WORKOUT LIBRARY
                    </p>
                    
                    <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-4 sm:mb-6">
                        TRAIN WITH INTENT.<br />LOG EVERY SET.
                    </h1>
                    
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md mb-6 sm:mb-8 leading-relaxed">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    
                    <a
                        href="#library"
                        className="btn rounded-full font-bold bg-[#C2F800] px-6 py-2.5 text-black hover:bg-[#d4ff33] transition-colors shadow-lg shadow-[#C2F800]/10"
                    >
                        BROWSE WORKOUTS
                    </a>
                </div>
                
                <div className="flex-1 flex justify-center md:justify-end items-center w-full max-w-xs sm:max-w-sm md:max-w-md h-56 sm:h-72 md:h-96">
                    <Image 
                        src="/banner.png" 
                        alt="Hero Image" 
                        width={400} 
                        height={400}
                        className="object-contain max-h-full w-auto" 
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;