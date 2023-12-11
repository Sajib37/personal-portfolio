import React from 'react';
import NavLinks from '../NavLinks/NavLinks';

const Navbar = ({isOpen}) => {
    return (
        <section className=''>
            <section className='max-w-screen-xl h md:flex mx-auto items-center justify-between'>
                <h1 className='text-white'>SH</h1>
                <ul className='text-white h-14 flex justify-end gap-14 lg:gap-16 px-4 items-center'>
                    <NavLinks isOpen={isOpen}></NavLinks>
                </ul>
            </section>
        </section>
    );
};

export default Navbar;