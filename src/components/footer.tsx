import React from 'react';
import Image from 'next/image';
import FooterLogo from '@/../public/SVG.svg';

const Footer = () => {
    return (
        <section className="flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
                <Image src={FooterLogo} alt="Logo" width={28} height={28} />
                <p className="text-bold font-oswald">FITLOG</p>
            </div>
            <div>
                <p className="text-sm text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
            
        </section>
    );
};

export default Footer;