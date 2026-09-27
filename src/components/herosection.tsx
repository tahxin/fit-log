import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12 bg-[#1A1A1A] rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-12 lg:px-14 lg:py-14 w-full relative overflow-hidden">
                
                <div className="flex flex-col items-start w-full">
                    <p className="text-[#CCFF00] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4">
                        WORKOUT LIBRARY
                    </p>
                    
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-4 sm:mb-6">
                        TRAIN WITH INTENT.<br />LOG EVERY SET.
                    </h1>
                    
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg mb-6 sm:mb-8 leading-relaxed">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    
                    <a
                        href="#library"
                        className="btn rounded-full font-bold bg-[#C2F800] px-6 py-2.5 text-black hover:bg-[#d4ff33] transition-colors shadow-lg shadow-[#C2F800]/10"
                    >
                        BROWSE WORKOUTS
                    </a>
                </div>
                
                <div className="flex justify-center items-center w-full">
                    <Image 
                        src="/banner.png" 
                        alt="Hero Image" 
                        width={500} 
                        height={500}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain" 
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;