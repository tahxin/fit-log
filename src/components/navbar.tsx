import React from 'react';
import Image from 'next/image';
import Logo from '@/../public/logo.png';
import Link from 'next/link';

const Navbar = () => {
    return (
        <section className="flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
                <Image src={Logo} alt="Logo" width={28} height={28} />
                <h2 className="text-xl font-oswald">FITLOG</h2>
            </div>
            <div className="flex gap-4">
                <button className="rounded-full bg-[#1A2312] px-4 py-2 text-[#C2F800]">
                    Workouts
                </button>
                <button className="btn btn-ghost"><Link href="/my-plan">My Plan</Link></button>
            </div>
            <div className="flex gap-4">
                <button className="btn btn-ghost">Plan 0</button>
                <button className="btn btn-ghost">Saved 0</button>
            </div>
            
        </section>
    );
};

export default Navbar;