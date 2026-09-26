import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterLogo from '@/../public/SVG.svg';

const Footer = () => {
    return (
        <footer className="w-full border-t border-neutral-800 bg-neutral-950/60 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image src={FooterLogo} alt="Logo" width={28} height={28} />
                    <span className="font-bold font-oswald tracking-wide text-white text-lg">FITLOG</span>
                </Link>
                <div>
                    <p className="text-xs sm:text-sm text-gray-400">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;