import profile2 from '../../assets/images/profile2.png'
import "../../App.css"
const About = () => {
    return (
        <section className="max-w-screen-xl text-white mx-auto min-h-screen flex gap-4 items-center justify-center flex-col">
            
            <div>
                <h1 className="downMove mb-8 font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">About <span className="text-white">Me</span></h1>
            </div>
            
            <div className="wrapper">
                <div className="box flex items-center justify-center">
                    <img className='w-40' src={profile2} alt="" />
                </div>
            </div>

        </section>
    );
};

export default About;