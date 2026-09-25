import React from 'react';
import Image from 'next/image';
import FooterLogo from '@/../public/SVG.svg';

const Footer = () => {
    return (
        <section>
            <div>
                <Image src={FooterLogo} alt="Logo" width={28} height={28} />
            </div>
            <div>
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
            
        </section>
    );
};

export default Footer;