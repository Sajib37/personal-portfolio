import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { MdOutlineMenu } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import { LuArrowUpCircle } from "react-icons/lu";

function App() {


  const [open, setOpen]=useState(false)

  const [isHomeVisible, setIsHomeVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const offset = window.scrollY + window.innerHeight;
      const isHomeSectionVisible = offset >= homeSection.offsetTop && offset <= homeSection.offsetTop + homeSection.offsetHeight;
      setIsHomeVisible(isHomeSectionVisible);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      <nav className='w-full h-14 hidden md:block bg-bg1 z-20 fixed top-0 left-0'>
        <Navbar isOpen={open} />
      </nav>

      {/* For sidebar */}
      <span onClick={handleOpen} className="text-white text-2xl  p-1 fixed md:hidden top-2 z-30 left-2">
        {
          open?<RxCross2 />:<MdOutlineMenu />
        }
      </span>
      <div className='fixed top-0 left-0 z-20 md:hidden'>        
        <Sidebar isOpen={open} handleOpen={handleOpen}></Sidebar>
      </div>

      
      
      <section id='home' className='min-h-screen md:pt-14 snap-start bg-bg1'>
        <h1 className='text-3xl text-[#FF6AC2]'>My name is khan</h1>
      </section>
      <section id='about' className='min-h-screen md:pt-14 snap-start bg-bg2'>
        <h1 className='text-3xl  text-[#FF6AC2]'>My name is khan</h1>
      </section>
      <section id='journey' className='min-h-screen md:pt-14 snap-start bg-bg1'>
        <h1 className='text-3xl  text-[#FF6AC2]'>My learning journey</h1>
      </section>
      <section id='skills' className='min-h-screen md:pt-14 snap-start bg-bg1'>
        skills
      </section>
      <section id='projects' className='min-h-screen md:pt-14 snap-start bg-bg2'>
        projects
      </section>
      <section id='contact' className='min-h-screen md:pt-14 snap-start bg-bg2'>
        contact
      </section>

      
      
      {isHomeVisible || (
        <span className='p-2 bg-red-500 text-white fixed bottom-2 right-2 text-3xl'>
          <a href='#home'><LuArrowUpCircle /></a>
        </span>
      )}

    </>
  );
}

export default App;
