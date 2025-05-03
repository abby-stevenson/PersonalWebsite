import React, { useState } from 'react';
import './EducationCard.css';


export default function EducationCard({title, years, logo, classes, ec, honours}) {
    const [isClassOpen, setIsClassOpen] = useState(false);
    const [isECOpen, setIsECOpen] = useState(false);
    const [isHonoursOpen, setIsHonoursOpen] = useState(false);


    const toggleClassSection = () => setIsClassOpen(!isClassOpen);
    const toggleECSection = () => setIsECOpen(!isECOpen);
    const toggleHonoursSection = () => setIsHonoursOpen(!isHonoursOpen);

    return (
        <div className = "education-card">
            <h3>{title}</h3>
            <h5>{years}</h5>
            {logo}
            <div className="collapsible-container">
                <div className="collapsible-header">
                    <h4>Classes</h4>
                    <button onClick={toggleClassSection} className="toggle-button">
                    {isClassOpen ? '−' : '+'}
                    </button>
                </div>

                {isClassOpen && (
                <div className="collapsible-content">
                    {classes}
                </div>
                )}
            </div>
            <div className="collapsible-container">
                <div className="collapsible-header">
                    <h4>Extra Curriculars</h4>
                    <button onClick={toggleECSection} className="toggle-button">
                    {isECOpen ? '−' : '+'}
                    </button>
                </div>

                {isECOpen && (
                <div className="collapsible-content">
                    {ec}
                </div>
                )}
            </div>
            <div className="collapsible-container">
                <div className="collapsible-header">
                    <h4>Honours</h4>
                    <button onClick={toggleHonoursSection} className="toggle-button">
                    {isHonoursOpen ? '−' : '+'}
                    </button>
                </div>

                {isHonoursOpen && (
                <div className="collapsible-content">
                    {honours}
                </div>
                )}
            </div>
         </div>
    
    );
}