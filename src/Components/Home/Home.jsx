import { TypeAnimation } from "react-type-animation";
import { FaDownload,FaLinkedin ,FaGithub,FaFacebook ,FaInstagram} from "react-icons/fa";

import './../../App.css';
import image from "../../assets/images/profile1.png"

const Home = () => {
    return (
        <section className="max-w-screen-xl py-8 min-h-screen mx-auto flex gap-8 flex-col lg:flex-row justify-between items-center">
            <div className="md:space-y-6 space-y-4 text-white px-4 lg:w-1/2">
                <h1 className="md:text-4xl text-3xl text-white font-bold">Hello, It's me !</h1>
                <h1 className="rightMove lg:text-6xl md:text-5xl text-4xl text-white font-serif font-extrabold">SAJIB HASAN</h1>
                <span className=" text-white font-bold font-playfair text-2xl md:text-3xl lg:text-4xl">
                    I'm a 
                <TypeAnimation
                    sequence={[
                        ' Front-End Developer',
                        500,
                        ' MERN Stack Developer',
                       500,
                    ]}
                    style={{ color: "#FF6AC2", fontWeight:'bold'}}
                    repeat={Infinity}
                    speed={10}
                    />
                </span>

                <p className="max-w-3xl leftMove">
                I'm Experienced MERN Stack Developer with a focus on frontend excellence. Proficient in HTML, CSS, and JavaScript, specializing in React.js for building engaging and responsive user interfaces. While primarily dedicated to frontend development, I bring a comprehensive understanding of the MERN stack, including MongoDB, Express.js, and Node.js
                </p>
                
                <div className=" flex gap-4 topMove">
                    <a target="_blank" className="social-icon rounded-full p-2" href="https://www.linkedin.com/in/sajib-hasan-309642282/"><FaLinkedin className="text-2xl " /></a>
                    <a target="_blank" className="social-icon rounded-full p-2" href="https://github.com/Sajib37"><FaGithub className="text-2xl " /></a>
                    <a target="_blank" className="social-icon rounded-full p-2" href="https://www.facebook.com/mirror36"><FaFacebook className="text-2xl " /></a>
                    <a target="_blank" className="social-icon rounded-full p-2" href="https://www.instagram.com/sajib_hasan37/"><FaInstagram className="text-2xl "/></a>
                </div>

                <button className="p-3 topMove flex items-center gap-1 rounded-full bg-[#FF6AC2] text-white transition-shadow hover:shadow-none font-semibold "style={{boxShadow:"0px 0px 10px 0px #FF6AC2"}} >Download Resume <FaDownload /></button>
            </div>

            <img className="md:w-96 w-64 mt-10 md:mt-4 homeImg" src={image} alt="" />
        </section>
    );
};

export default Home;