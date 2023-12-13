import matrimony from '../../assets/images/matrimony.jpg'
import autoHaven from '../../assets/images/autoHaven.jpg'
import surplusSustain from '../../assets/images/surplus-sustain.jpg'
import festiveFusion from '../../assets/images/festiveFusion.jpg'
import phtube from '../../assets/images/phtube.jpg'
import donation from '../../assets/images/donation.jpg'

import '../../App.css'
import { FaGithub } from 'react-icons/fa'
import { MdLiveTv } from "react-icons/md";

const Projects = () => {
    return (
        <section className="max-w-screen-xl pb-10 mx-auto flex flex-col justify-center items-center min-h-screen gap-8 md:gap-12">
            <h1 className="font-bold downMove mb-4 text-center text-transparent lg:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"><span className="text-white">My</span> Latest <span className="text-white">Projects</span></h1>

            <section className='w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2'>
                {/*matrimony  */}
                <div className='max-w-sm mx-auto relative project-container  h-64 rounded-lg'>
                    
                    <div className='projectEffect absolute z-20 opacity-70  rounded-lg top-0 left-0 '>
                        
                        <div className='inner-content hidden w-full h-64 overflow-hidden border-2 border-[#FF6AC2] rounded-lg gap-3 py-4'>
                            <h1 className='text-3xl font-bold text-center text-white'>Matrimony</h1>
                            <p className='px-2 text-white text-center'>A wedding website dedicated to helping people find and choose their life partners typically serves as an online platform for matrimonial services.</p>
                            <div className='flex justify-center items-center gap-4'> 
                                <a target='_blank' href="https://github.com/Sajib37/matrimony-client"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Code <FaGithub /></button></a>
                                <a target='_blank' href="https://matrimony-7ae39.web.app/"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Live <MdLiveTv /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-full rounded-lg' src={matrimony} alt="" />
                    </div>
                </div>

                {/* Auto Haven */}
                <div className='max-w-sm mx-auto relative project-container  h-64 rounded-lg'>
                    
                    <div className='projectEffect absolute z-20 opacity-80  rounded-lg top-0 left-0 '>
                        
                        <div className='inner-content hidden w-full h-64 overflow-hidden border-2 border-[#FF6AC2] rounded-lg gap-3 py-4'>
                            <h1 className='text-3xl font-bold text-center text-white'>Auto Haven</h1>
                            <p className='px-2 text-white text-center'>
                            User can Explore, compare, and choose their dream car effortlessly at Auto Haven, where a curated selection, intuitive tools, and exclusive deals. </p>
                            <div className='flex justify-center items-center gap-4'> 
                                <a target='_blank' href="https://github.com/Sajib37/auto-haven-client"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Code <FaGithub /></button></a>
                                <a target='_blank' href="https://auto-haven.web.app/"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Live <MdLiveTv /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-full rounded-lg' src={autoHaven} alt="" />
                    </div>
                </div>

                {/* Surplus sustain */}
                <div className='max-w-sm mx-auto relative project-container  h-64 rounded-lg'>
                    
                    <div className='projectEffect absolute z-20 opacity-80  rounded-lg top-0 left-0 '>
                        
                        <div className='inner-content hidden w-full h-64 overflow-hidden border-2 border-[#FF6AC2] rounded-lg gap-3 py-4'>
                            <h1 className='text-3xl font-bold text-center text-white'>Suplus Sustain</h1>
                            <p className='px-2 text-white text-center'>
                            Discover homemade goodness at Surplus Sustain. Share a meal or request one—because good food is best enjoyed together. </p>
                            <div className='flex justify-center items-center gap-4'> 
                                <a target='_blank' href="https://github.com/Sajib37/surplus-sustain-client"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Code <FaGithub /></button></a>
                                <a target='_blank' href="https://surplus-sustain.web.app/"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Live <MdLiveTv /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-full rounded-lg' src={surplusSustain} alt="" />
                    </div>
                </div>

                {/* Festive  Fusion */}
                <div className='max-w-sm mx-auto relative project-container  h-64 rounded-lg'>
                    
                    <div className='projectEffect absolute z-20 opacity-80  rounded-lg top-0 left-0 '>
                        
                        <div className='inner-content hidden w-full h-64 overflow-hidden border-2 border-[#FF6AC2] rounded-lg gap-3 py-4'>
                            <h1 className='text-3xl font-bold text-center text-white'>Festive Fusion</h1>
                            <p className='px-2 text-white text-center'>
                            Elegantly orchestrate your celebrations with ease on Festive Fusion. From weddings to birthdays, effortlessly manage every detail.</p>
                            <div className='flex justify-center items-center gap-4'> 
                                <a target='_blank' href="https://github.com/Sajib37/festive-fusion"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Code <FaGithub /></button></a>
                                <a target='_blank' href="https://festive-fusion-c4e64.web.app/"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Live <MdLiveTv /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-full rounded-lg' src={festiveFusion} alt="" />
                    </div>
                </div>

                {/* donation */}
                <div className='max-w-sm mx-auto relative project-container  h-64 rounded-lg'>
                    
                    <div className='projectEffect absolute z-20 opacity-80  rounded-lg top-0 left-0 '>
                        
                        <div className='inner-content hidden w-full h-64 overflow-hidden border-2 border-[#FF6AC2] rounded-lg gap-3 py-4'>
                            <h1 className='text-3xl font-bold text-center text-white'>Donation Campaign</h1>
                            <p className='px-2 text-white text-center'>
                            
                            this website Engage with compassion on a donation campaign platform's sleek frontend. Seamlessly contribute to various sectors such as health, education, food, and clothing.</p>
                            <div className='flex justify-center items-center gap-4'> 
                                <a target='_blank' href="https://github.com/Sajib37/donation-campaign"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Code <FaGithub /></button></a>
                                <a target='_blank' href="https://b8a8-donation-campaign-sajib37.vercel.app/"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Live <MdLiveTv /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-full rounded-lg' src={donation} alt="" />
                    </div>
                </div>

                {/* PHtube */}
                <div className='max-w-sm mx-auto relative project-container  h-64 rounded-lg'>
                    
                    <div className='projectEffect absolute z-20 opacity-80  rounded-lg top-0 left-0 '>
                        
                        <div className='inner-content hidden w-full h-64 overflow-hidden border-2 border-[#FF6AC2] rounded-lg gap-3 py-4'>
                            <h1 className='text-3xl font-bold text-center text-white'>PHtube</h1>
                            <p className='px-2 text-white text-center'>
                            Experience a sleek and engaging front-end interface on a live streaming platform. Effortlessly view video metrics, including total views, for an immersive viewing experience.</p>
                            <div className='flex justify-center items-center gap-4'> 
                                <a target='_blank' href="https://github.com/Sajib37/PHtube"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Code <FaGithub /></button></a>
                                <a target='_blank' href="https://gifted-month.surge.sh/"><button className=' gap-2 opacity-100 px-3 py-1 flex items-center rounded-lg bg-[#FF6AC2] text-white'>Live <MdLiveTv /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full h-full'>
                        <img className='w-full h-full rounded-lg' src={phtube} alt="" />
                    </div>
                </div>

            </section>
        </section>
    );
};

export default Projects;