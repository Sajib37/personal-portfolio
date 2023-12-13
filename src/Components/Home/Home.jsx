import { TypeAnimation } from "react-type-animation";
import { FaDownload,FaLinkedin ,FaGithub,FaFacebook ,FaInstagram} from "react-icons/fa";

import './../../App.css';
import image from "../../assets/images/profile1.png"

const Home = () => {
    return (
        <section className="max-w-screen-xl py-8 min-h-screen mx-auto flex gap-8 flex-col lg:flex-row justify-between items-center">
            <div className="lg:space-y-6 md:space-y-5 space-y-3 text-white px-4 lg:w-1/2">
                <h1 className="lg:text-4xl text-2xl md:text-3xl text-white font-bold">Hello, It's me !</h1>
                <h1 className="rightMove lg:text-6xl md:text-5xl text-4xl text-white font-serif font-extrabold">SAJIB HASAN</h1>
                <span className=" text-white font-bold font-playfair text-2xl md:text-3xl lg:text-4xl">
                    I'm a 
                <TypeAnimation
                    sequence={[
                        ' MERN Stack Developer',
                        500,
                        ' mern Stack Developer',
                       500,
                    ]}
                    style={{ color: "#FF6AC2", fontWeight:'bold'}}
                    repeat={Infinity}
                    speed={10}
                    />
                </span>

                <p className="max-w-3xl text-base leftMove">
                As an aspiring junior MERN Stack Developer, I'm delving into the realms of HTML, CSS, and JavaScript with a keen focus on React.js. While currently dedicated to frontend development, my journey includes gaining familiarity with the MERN stack components, namely MongoDB, Express.js, and Node.js. Eager to build engaging user interfaces and expand my expertise in web development.
                </p>
                
                <div className=" flex gap-4 topMove">
                    <a target="_blank" className="social-icon rounded-full p-2 cursor-pointer" href="https://www.linkedin.com/in/sajib-hasan-309642282/"><FaLinkedin className="md:text-2xl text-xl " /></a>
                    <a target="_blank" className="social-icon rounded-full p-2 cursor-pointer" href="https://github.com/Sajib37"><FaGithub className="md:text-2xl text-xl " /></a>
                    <a target="_blank" className="social-icon rounded-full p-2 cursor-pointer" href="https://www.facebook.com/mirror36"><FaFacebook className="md:text-2xl text-xl " /></a>
                    <a target="_blank" className="social-icon rounded-full p-2 cursor-pointer" href="https://www.instagram.com/sajib_hasan37/"><FaInstagram className="md:text-2xl text-xl "/></a>
                </div>
                <button className="p-2 md:px-3 topMove rounded-full bg-[#FF6AC2] text-white transition-shadow hover:shadow-none font-semibold "style={{boxShadow:"0px 0px 10px 0px #FF6AC2"}} ><a target="_blank" className="flex items-center gap-1" href="resume.pdf" download>Download Resume <FaDownload /></a></button>
            </div>

            <img className="lg:w-96 md:w-80 w-64 mt-10 md:mt-4 homeImg" src={image} alt="" />
        </section>
    );
};

export default Home;