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
                    <button className='nav-button'>Education</button>
                    <button className='nav-button'>Projects</button>
                    <button className='nav-button'>Extracurriculars</button>
            </div>
        </div>
    </nav>
    );
};