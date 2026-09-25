import React from 'react';
import Image from 'next/image';
import Button from './button'; 
import BannerImage from '@/../public/banner.png';

const HeroSection = () => {
    return (
        <section className="p-4 md:p-8 lg:p-12 bg-black w-full">
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#1A1A1A] rounded-[32px] p-8 md:px-16 md:py-12 w-full max-w-7xl mx-auto relative">
                
                <div className="flex-1 flex flex-col items-start mb-10 md:mb-0">
                    <p className="text-[#CCFF00] text-sm font-bold tracking-widest uppercase mb-4">
                        WORKOUT LIBRARY
                    </p>
                    
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
                        TRAIN WITH INTENT.LOG<br />EVERY SET.
                    </h1>
                    
                    <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                    </p>
                    
                    <Button>
                        BROWSE WORKOUTS
                    </Button>
                </div>
                
                <div className="flex-1 flex justify-center md:justify-end items-center h-[400px]">
                    <Image 
                        src={BannerImage} 
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