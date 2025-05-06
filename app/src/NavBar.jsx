import React from 'react';
import './NavBar.css';

/* Component that produces the Navbar to be displayed at the top of each page */
 export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <div className = "Name">
                <h1>Abby Stevenson</h1>
            </div>
        </div>
        <div className="navbar-right">
            <div className="nav-links">
                <a href="#education">
                    <button className="nav-button">Education</button>
                </a>
                <a href="#projects">
                    <button className='nav-button'>Projects</button>
                </a>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="nav-button">Resume</button>
                </a>
                <a href="https://www.linkedin.com/in/abbyostevenson/" target="_blank" rel="noopener noreferrer">
                    <button className='nav-button'>LinkedIn</button>
                </a>
                <a href="https://github.com/abby-stevenson" target="_blank" rel="noopener noreferrer">
                    <button className='nav-button'>Github</button>
                </a>
            </div>
        </div>
    </nav>
    );
};