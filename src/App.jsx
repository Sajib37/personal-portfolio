import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import { MdOutlineMenu } from 'react-icons/md';
import { RxCross2 } from "react-icons/rx";
import { LuArrowUpCircle } from "react-icons/lu";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Journey from './Components/Journey/Journey';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

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
        <Navbar/>
      </nav>

      {/* For sidebar */}
      <span onClick={handleOpen} className="text-white text-3xl  p-1 fixed md:hidden top-2 z-30 left-2">
        {
          open?<RxCross2 />:<MdOutlineMenu />
        }
      </span>
      <span className='md:hidden fixed top-2 right-3'><h1 className='leftMove font-playfair font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>SH</h1></span>
      <div className='fixed top-0 left-0 z-20 md:hidden'>        
        <Sidebar isOpen={open} handleOpen={handleOpen}></Sidebar>
      </div>

      
      
      <section id='home' className='min-h-screen font-roboto pt-10 md:pt-14 snap-start bg-bg1'>
        <Home></Home>
      </section>

      <section id='about' className='min-h-screen font-roboto pt-10 md:pt-14 snap-start bg-bg2'>
        <About></About>
      </section>
      
      <section id='journey' className='min-h-screen font-roboto pt-10 md:pt-14 snap-start bg-bg1'>
        <Journey></Journey>
      </section>
      <section id='skills' className='min-h-screen font-roboto pt-10 md:pt-14 snap-start bg-bg2'>
        <Skills></Skills>
      </section>
      <section id='projects' className='min-h-screen font-roboto pt-10 md:pt-14 snap-start bg-bg1'>
        <Projects></Projects>
      </section>
      <section id='contact' className='min-h-screen font-roboto pt-10 md:pt-14  bg-bg2'>
        <Contact></Contact>
      </section>
      <section className='bg-bg1'>
        <Footer></Footer>
      </section>
      
      
      
      {isHomeVisible || (
        <span className='p-1 bg-transparent rounded-full text-pink-400 fixed bottom-6 right-4 text-4xl lg:text-5xl'>
          <a href='#home'><LuArrowUpCircle /></a>
        </span>
      )}

    </>
  );
}

export default App;
