import React from 'react';
import Academic from './Academic';
import Experience from './Experience';

const Journey = () => {
    return (
        <section className='max-w-screen-xl mx-auto py-8 pb-12 min-h-screen'>
            <h1 className="font-bold text-center text-transparent lg:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"><span className="text-white">My</span> Learning <span className="text-white">Journey</span></h1>
        
            <section className='text-white  justify-center flex flex-col lg:flex-row px-2 gap-8 lg:gap-16 mt-8 md:mt-12 lg:mt-14'>
                <Academic></Academic>
                <Experience></Experience>
            </section>
        </section>
    );
};

export default Journey;