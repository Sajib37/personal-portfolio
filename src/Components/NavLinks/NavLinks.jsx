import { useState } from "react";

const NavLinks = ({ isOpen }) => {
    
    const [activeLink , setActiveLink]=useState('home')
    const handleActiveLink = (link) => {
        setActiveLink(link)
    }
    return (
        <>
            <li><a onClick={()=>handleActiveLink('home')} className={`hover:text-[#FF6AC2] ${activeLink==='home'?'text-[#FF6AC2] underline underline-offset-4':''}`} href="#home">Home</a></li>
            <li><a onClick={()=>handleActiveLink('about')} className={`hover:text-[#FF6AC2] ${activeLink==='about'?'text-[#FF6AC2] underline underline-offset-4':''}`} href="#about">about</a></li>
            <li><a onClick={() => handleActiveLink('journey')} className={`hover:text-[#FF6AC2] ${activeLink === 'journey' ? 'text-[#FF6AC2] underline underline-offset-4' : ''}`} href="#journey">Academic Journey</a></li>
            <li><a onClick={()=>handleActiveLink('skills')} className={`hover:text-[#FF6AC2] ${activeLink==='skills'?'text-[#FF6AC2] underline underline-offset-4':''}`} href="#skills">skills</a></li>
            <li><a onClick={()=>handleActiveLink('projects')} className={`hover:text-[#FF6AC2] ${activeLink==='projects'?'text-[#FF6AC2] underline underline-offset-4':''}`} href="#projects">projects</a></li>
            <li><a onClick={()=>handleActiveLink('contact')} className={`hover:text-[#FF6AC2] ${activeLink==='contact'?'text-[#FF6AC2] underline underline-offset-4':''}`} href="#contact">contact</a></li>
        </>
    );
};

export default NavLinks;