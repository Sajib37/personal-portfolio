import React from 'react';
import '../../App.css'

const Skills = () => {
    return (
        <section className='max-w-screen-xl flex flex-col items-center gap-8 md:gap-14 lg:gap-20 justify-center mx-auto px-2 py-8 pb-12 min-h-screen text-white '>
            
            <h1 data-aos="fade-down" data-aos-duration="2000" data-aos-once='true' className="font-bold downMove mb-4 text-center text-transparent lg:text-5xl md:text-4xl text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"><span className="text-white">My</span> Skills</h1>

            <section  data-aos-once='true' className='flex w-full topMove  flex-col md:flex-row gap-10 md:gap-10 items-center justify-center lg:justify-around'>
                
                <div data-aos="fade-up" data-aos-duration="2000" className='skill relative skill-container  list-none  md:w-1/2 w-full px-3 border-2 border-[#FF6AC2] p-4 rounded-lg'>

                    <div className='upEffect absolute  rounded-lg top-0 left-0 '></div>

                    <div className='relative'>
                        <h1 className='text-xl md:text-3xl font-bold'>Language and Tools:</h1>

                        <li>
                            <div className='flex justify-between px-2 mb-2'>
                                <h3>HTML</h3>
                                <h3>90%</h3>
                            </div>
                            <span className='bar'> <span className='html'></span></span>
                        </li>
                        <li>
                            <div className='flex justify-between px-2 mb-2'>
                                <h3>CSS</h3>
                                <h3>70%</h3>
                            </div>
                            <span className='bar'> <span className='css'></span></span>
                        </li>
                        <li>
                        <div className='flex justify-between px-2 mb-2'>
                                <h3>Javascript</h3>
                                <h3>60%</h3>
                            </div>
                            <span className='bar'> <span className='javascript'></span></span>
                        </li>
                        <li>
                        <div className='flex justify-between px-2 mb-2'>
                                <h3>Tailwind</h3>
                                <h3>75%</h3>
                            </div>
                            <span className='bar'> <span className='tailwind'></span></span>
                        </li>
                    </div>

                </div>


                <div data-aos="fade-up" data-aos-duration="2000" className='skill  relative skill-container  list-none  md:w-1/2 w-full px-3 border-2 border-[#FF6AC2] p-4 rounded-lg'>
                    
                    <div className='upEffect absolute  rounded-lg top-0 left-0 '></div>
                    <div className='relative'>
                        <h1 className='text-xl md:text-3xl font-bold'>Framework and Tools:</h1>

                        <li>
                            <div className='flex justify-between px-2 mb-2'>
                                <h3>React</h3>
                                <h3>70%</h3>
                            </div>
                            <span className='bar'> <span className='react'></span></span>
                        </li>
                        <li>
                            <div className='flex justify-between px-2 mb-2'>
                                <h3>MongoDB</h3>
                                <h3>60%</h3>
                            </div>
                            <span className='bar'> <span className='mongodb'></span></span>
                        </li>
                        <li>
                        <div className='flex justify-between px-2 mb-2'>
                                <h3>Node JS</h3>
                                <h3>40%</h3>
                            </div>
                            <span className='bar'> <span className='node'></span></span>
                        </li>
                        <li>
                        <div className='flex justify-between px-2 mb-2'>
                                <h3>Express js</h3>
                                <h3>25%</h3>
                            </div>
                            <span className='bar'> <span className='express'></span></span>
                        </li>
                    </div>                    

                </div>
            </section>

        </section>
    );
};

export default Skills;