import React from 'react';
import Image from 'next/image';
import Logo from '@/../public/logo.png';

const Navbar = () => {
    return (
        <section className="flex justify-between items-center p-4 font-oswald">
            <div>
                <Image src={Logo} alt="Logo" width={100} height={100} />
                <h2>FITLOG</h2>
            </div>
            <div>
                <button>Workouts</button>
                <button>My Plan</button>
            </div>
            <div>
                <button>Plan 0</button>
                <button>Saved 0</button>
            </div>
            
        </section>
    );
};

export default Navbar;