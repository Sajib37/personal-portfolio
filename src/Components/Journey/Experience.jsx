import React from 'react';
import { FaCalendar } from 'react-icons/fa';

const Experience = () => {
    return (
        <section>
            <h1 className="text-2xl md:text-3xl mb-4 font-bold">Experience :</h1>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mx-auto max-w-xs md:max-w-2xl">                  
                <li className="mb-10 container relative ms-4">
                    <div className="absolute w-3 h-3 bg-[#FF6AC2] rounded-full top-1 -left-[23px] border border-[#FF6AC2] "></div>
                    <div className='leftEffect'></div>

                    <div className="relative w-full py-4 timeline-box bg-transparent border-2 border-[#FF6AC2]">
                        <h1 className="text-lg md:text-xl font-semibold mb-2 ">Exploring the MERN Stack:</h1>
                        <p>Venturing into the MERN stack, I am actively learning the intricacies of MongoDB, Express.js, React.js, and Node.js. While my journey is in its early stages, I am committed to gaining hands-on experience in crafting dynamic and responsive web applications.</p>
                    </div>   
                </li>
                <li className="mb-10 ms-4 relative container">
                    <div className="absolute w-3 h-3 bg-[#FF6AC2] rounded-full top-1 -left-[23px] border border-[#FF6AC2] "></div>
                    <div className='leftEffect'></div>
                    <div className=" w-full relative py-4 timeline-box bg-transparent border-2 border-[#FF6AC2]">
                        <h1 className="text-lg md:text-xl font-semibold mb-2">Foundations in C , C++ and Java:</h1>
                        <p>Possessing fundamental knowledge of C , C++ and Java, I am laying the groundwork for my programming journey. While I may not yet be experienced, my grasp of these languages allows me to contribute to coding tasks and understand the core principles of software development.</p>
                    </div>   
                </li>
            </ol>
        </section>
    );
};

export default Experience;