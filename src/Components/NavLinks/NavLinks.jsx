import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../App.css'

const NavLinks = () => {
    
    const [activeLink , setActiveLink]=useState('home')
    const handleActiveLink = (link) => {
        setActiveLink(link)
    }
    const getAnimationDelay = (index) => {
        return `${0.2*index}s`
    }
    return (
        <>
            <li style={{animationDelay: getAnimationDelay(1)}} className="topMove"><a onClick={()=>handleActiveLink('home')} className={`hover:text-[#FF6AC2] ${activeLink==='home'?'text-[#FF6AC2] underline underline-offset-4':''}`} href="#home">Home</a></li>
            <li style={{animationDelay: getAnimationDelay(2)}} className="topMove"><a onClick={()=>handleActiveLink('about')} className={`hover:text-[#FF6AC2] ${activeLink==='about'?'text-[#FF6AC2] underline underline-offset-4':''}`} href="#about">About</a></li>
            <li style={{animationDelay: getAnimationDelay(3)}} className="topMove"><a onClick={() => handleActiveLink('journey')} className={`hover:text-[#FF6AC2] ${activeLink === 'journey' ? 'text-[#FF6AC2] underline underline-offset-4' : ''}`} href="#journey">Academic Journey</a></li>
            <li style={{animationDelay: getAnimationDelay(4)}} className="topMove"><a onClick={()=>handleActiveLink('skills')} className={`hover:text-[#FF6AC2] ${activeLink==='skills'?'text-[#FF6AC2] underline underline-offset-4':''}`} href="#skills">Skills</a></li>
            <li style={{animationDelay: getAnimationDelay(5)}} className="topMove"><a onClick={()=>handleActiveLink('projects')} className={`hover:text-[#FF6AC2] ${activeLink==='projects'?'text-[#FF6AC2] underline underline-offset-4':''}`} href="#projects">Projects</a></li>
            <li style={{animationDelay: getAnimationDelay(6)}} className="topMove"><a onClick={()=>handleActiveLink('contact')} className={`hover:text-[#FF6AC2] ${activeLink==='contact'?'text-[#FF6AC2] underline underline-offset-4':''}`} href="#contact">Contact</a></li>
        </>
    );
};

export default NavLinks;