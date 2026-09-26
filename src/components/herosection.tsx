import React from 'react';
import Image from 'next/image';
import Button from './button';

const HeroSection = () => {
    return (
        <section className="m-6 bg-black">
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#1A1A1A] rounded-4xl p-8 md:px-16 md:py-12 w-full relative">
                
                <div className="flex-1 flex flex-col items-start mb-10 md:mb-0">
                    <p className="text-[#CCFF00] text-sm font-bold tracking-widest uppercase mb-4">
                        WORKOUT LIBRARY
                    </p>
                    
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
                        TRAIN WITH INTENT.LOG<br />EVERY SET.
                    </h1>
                    
                    <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    
                    <Button>
                        BROWSE WORKOUTS
                    </Button>
                </div>
                
                <div className="flex-1 flex justify-center md:justify-end items-center h-100">
                    <Image 
                        src="/banner.png" 
                        alt="Hero Image" 
                        width={400} 
                        height={400}
                        className="object-contain h-full" 
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;