import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Navbar = () => {
  const githubUrl = 'https://github.com/MasterJD';
  const linkedinUrl = 'https://linkedin.com/in/javier-donado';


  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Skills</Link>
            <Link className='desktopMenuListItem'>Projects</Link>
        </div>
        <span>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} className='socialButtons'/>
        </a>
          &nbsp;
          &nbsp;
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin size={32} className='socialButtons'/>
        </a>
        </span>
    </nav>
  )
}

export default Navbar