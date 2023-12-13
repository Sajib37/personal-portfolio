import React from 'react';
import { FaCalendar } from 'react-icons/fa';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Experience = () => {
    return (
        <section>
            <h1 className="text-xl md:text-3xl mb-4 font-bold">Experience :</h1>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mx-auto max-w-xs md:max-w-2xl">                  
                <li data-aos="fade-up" data-aos-duration="2000" data-aos-once='true' className="mb-10 container relative ms-4">
                    <div className="absolute w-3 h-3 bg-[#FF6AC2] rounded-full top-1 -left-[23px] border border-[#FF6AC2] "></div>
                    <div className='leftEffect'></div>

                    <div className="relative w-full py-1 md:py-2 timeline-box bg-transparent border-2 border-[#FF6AC2]">
                        <h1 className="text-lg md:text-xl font-semibold mb-2 ">Exploring the MERN Stack:</h1>
                        <p>Exploring the MERN stack, I'm actively learning MongoDB, Express.js, React.js, and Node.js. Committed to gaining hands-on experience in crafting dynamic and responsive web applications.</p>
                    </div>   
                </li>
                <li data-aos="fade-up" data-aos-duration="2000" data-aos-once='true' className="mb-10 ms-4 relative container">
                    <div className="absolute w-3 h-3 bg-[#FF6AC2] rounded-full top-1 -left-[23px] border border-[#FF6AC2] "></div>
                    <div className='leftEffect'></div>
                    <div className=" w-full relative py-1 md:py-2 timeline-box bg-transparent border-2 border-[#FF6AC2]">
                        <h1 className="text-lg md:text-xl font-semibold mb-2">Foundations in C , C++ and Java:</h1>
                        <p>With a foundation in C, C++, and Java, I'm building the groundwork for my programming journey. Though not highly experienced, I contribute to coding tasks and grasp core principles of software development.</p>
                    </div>   
                </li>
            </ol>
        </section>
    );
};

export default Experience;