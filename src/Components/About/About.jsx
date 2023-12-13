import profile2 from '../../assets/images/profile2.png'
import "../../App.css"
const About = () => {
    return (
        <section className="max-w-screen-xl text-white mx-auto min-h-screen flex gap-6 items-center justify-center flex-col py-8 pb-12">
            
            <div data-aos="fade-down" data-aos-duration="2000" data-aos-once='true'>
                <h1 className=" font-bold text-transparent lg:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">About <span className="text-white">Me</span></h1>
            </div>
            
            <div className="wrapper">
                <div className="box flex items-center justify-center">
                    <img className='w-40' src={profile2} alt="" />
                </div>
            </div>
            <h1 data-aos="fade-down-right" data-aos-duration="2000" data-aos-once='true' className='md:text-3xl text-2xl font-bold text-white text-center max-w-sm md:max-w-xl'>Hey, I'm thrilled you've dropped in</h1>
            <div data-aos="fade-down-right" data-aos-duration="2000" data-aos-once='true' className='px-4 space-y-2 text-justify'>
                <p><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>Greetings,</span> I'm Sajib Hasan, a dedicated Computer Science and Engineering student at Jagannath University. I completed my HSC at Chuadanga Government College and SSC at Gobindahuda Secondary High School.</p>
                <p>Passionate about technology, I've honed my skills as a MERN Stack Developer, specializing in HTML, CSS, and JavaScript, with a focus on creating captivating and responsive React.js interfaces. My primary expertise lies in frontend development, where I strive for excellence in design and functionality.</p>
                <p>With a strong foundation in the MERN stack, encompassing MongoDB, Express.js, and Node.js, I take pride in seamlessly integrating frontend components with backend systems to develop robust and scalable web applications.</p>
            </div>
            <button className="p-3 flex items-center gap-1 rounded-full bg-[#FF6AC2] text-white transition-shadow hover:shadow-none font-semibold "style={{boxShadow:"0px 0px 5px 0px #FF6AC2"}} ><a href="#contact">Contact With me</a></button>
        </section>
    );
};

export default About;