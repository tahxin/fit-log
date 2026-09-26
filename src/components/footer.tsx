import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterLogo from '@/../public/SVG.svg';

const Footer = () => {
    return (
        <section className="flex justify-between items-center p-4">
            <Link href="/" className="flex items-center gap-2">
                <Image src={FooterLogo} alt="Logo" width={28} height={28} />
                <p className="text-bold font-oswald">FITLOG</p>
            </Link>
            <div>
                <p className="text-sm text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
            
        </section>
    );
};

export default Footer;