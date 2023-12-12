import React from 'react';
import NavLinks from '../NavLinks/NavLinks';

const Navbar = () => {
    return (
        <section className=''>
            <section className='max-w-screen-xl h md:flex mx-auto items-center justify-between px-4 '>
                <h1 className="rightMove font-playfair font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">SAJIB</h1>
                <ul className='text-white font-roboto font-medium h-14 flex justify-end gap-10 lg:gap-16 items-center'>
                    <NavLinks></NavLinks>
                </ul>
            </section>
        </section>
    );
};

export default Navbar;