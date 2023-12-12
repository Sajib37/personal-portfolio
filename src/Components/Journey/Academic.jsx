import { FaCalendar } from "react-icons/fa";


const Academic = () => {
    return (
        <section>
            <h1 className="text-2xl md:text-3xl mb-4 font-bold">Academic Journey :</h1>
            <ol className="relative border-s mx-auto border-gray-200 dark:border-gray-700 max-w-xs md:max-w-2xl">                  
                <li className="mb-10 relative container ms-4">
                    <div className="absolute w-3 h-3 bg-[#FF6AC2] rounded-full top-1 -left-[23px] border border-[#FF6AC2] "></div>
                    <div className='leftEffect'></div>
                    <div className="relative w-full py-2 md:py-3 timeline-box bg-transparent border-2 border-[#FF6AC2]">
                        <span className="flex gap-2 items-center text-base"><FaCalendar /> 2020 - Current</span>
                        <h1 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Jagannath University (BSc)</h1>
                        <p>I am currently pursuing my studies in the Computer Science and Engineering department at Jagannath University. Here, I am actively engaged in learning modern technologies that contribute to my academic growth and prepare me for the dynamic landscape of the tech industry.</p>
                    </div>   
                </li>
                <li className="mb-10 ms-4 relative container">
                    <div className="absolute w-3 h-3 bg-[#FF6AC2] rounded-full top-1 -left-[23px] border border-[#FF6AC2] "></div>
                    <div className='leftEffect'></div>
                    <div className="relative w-full py-2 md:py-3 timeline-box bg-transparent border-2 border-[#FF6AC2]">
                        <span className="flex gap-2 items-center text-base"><FaCalendar /> 2017 - 2018</span>
                        <h1 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Chuadanga Govt. College (HSC)</h1>
                        <p>I earned my Higher Secondary Certificate (HSC) in the science group from Chuadanga Government College. This educational chapter not only deepened my understanding but also equipped me with crucial skills, preparing me for the academic and professional challenges that lie ahead.</p>
                    </div>   
                </li>
                <li className="mb-10 ms-4 relative container">
                    <div className="absolute w-3 h-3 bg-[#FF6AC2] rounded-full top-1 -left-[23px] border border-[#FF6AC2] "></div>
                    <div className='leftEffect'></div>
                    <div className="relative w-full py-2 md:py-3 timeline-box bg-transparent border-2 border-[#FF6AC2]">
                        <span className="flex gap-2 items-center text-base"><FaCalendar /> 2015 - 2016</span>
                        <h1 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Gobindahuda High School (SSC)</h1>
                        <p>I attained my Secondary School Certificate from Gobindahuda High School, in  
						science group. Throughout my school journey, I immersed myself 
						in a curriculum that offered a well-rounded education, providing 
						me with essential skills and knowledge for my future academic and professional pursuits.</p>
                    </div>   
                </li>
            </ol>
        </section>
    );
};

export default Academic;
