import { FaCalendar } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Academic = () => {
    return (
        <section >
            <h1 className="text-xl md:text-3xl mb-4 font-bold">Academic Journey :</h1>
            <ol className="relative border-s mx-auto border-gray-200 dark:border-gray-700 max-w-xs md:max-w-2xl">                  
                <li data-aos="fade-up" data-aos-duration="2000" className="mb-10 relative container ms-4">
                    <div className="absolute w-3 h-3 bg-[#FF6AC2] rounded-full top-1 -left-[23px] border border-[#FF6AC2] "></div>
                    <div className='leftEffect'></div>
                    <div className="relative w-full py-1 md:py-3 timeline-box bg-transparent border-2 border-[#FF6AC2]">
                        <span className="flex gap-2 items-center text-base"><FaCalendar /> 2020 - Current</span>
                        <h1 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Jagannath University (BSc)</h1>
                        <p>I'm a Computer Science and Engineering student at Jagannath University, actively learning modern technologies to grow academically and prepare for the dynamic tech industry.</p>
                    </div>   
                </li>
                <li data-aos="fade-up" data-aos-duration="2000" className="mb-10 ms-4 relative container">
                    <div className="absolute w-3 h-3 bg-[#FF6AC2] rounded-full top-1 -left-[23px] border border-[#FF6AC2] "></div>
                    <div className='leftEffect'></div>
                    <div className="relative w-full py-1 md:py-3 timeline-box bg-transparent border-2 border-[#FF6AC2]">
                        <span className="flex gap-2 items-center text-base"><FaCalendar /> 2017 - 2018</span>
                        <h1 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Chuadanga Govt. College (HSC)</h1>
                        <p>I completed my Higher Secondary Certificate (HSC) in the science group at Chuadanga Government College, gaining in-depth knowledge and essential skills for future academic and professional challenges.</p>
                    </div>   
                </li>
                <li data-aos="fade-up" data-aos-duration="2000" className="mb-10 ms-4 relative container">
                    <div className="absolute w-3 h-3 bg-[#FF6AC2] rounded-full top-1 -left-[23px] border border-[#FF6AC2] "></div>
                    <div className='leftEffect'></div>
                    <div className="relative w-full py-1 md:py-3 timeline-box bg-transparent border-2 border-[#FF6AC2]">
                        <span className="flex gap-2 items-center text-base"><FaCalendar /> 2015 - 2016</span>
                        <h1 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Gobindahuda High School (SSC)</h1>
                        <p>I obtained my Secondary School Certificate from Gobindahuda High School in the science group. Immersed in a well-rounded curriculum, I gained essential skills and knowledge for future academic and professional pursuits.</p>
                    </div>   
                </li>
            </ol>
        </section>
    );
};

export default Academic;
