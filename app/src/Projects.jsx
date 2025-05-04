import React from 'react';
import './Projects.css';
import GenerateLogo from './assets/Generate-logo.png';
import ThreeStonesPic from './assets/3stones.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
    return (
        <section className="projects" id="projects">
              <h2>Projects</h2>
              <div className = "project-list">
                <div className="generate-border">
                    <img className="generate-logo" src={GenerateLogo} alt="Generate Logo" />
                    <div className = "project-and-picture">
                        <div className = "description">
                            <h3>3 Stones (Real Estate Mobile App)</h3>
                            <h4>Golang, TypeScript, Tailwind, SQL, React Native</h4>
                            <h5>September – December 2024</h5>
                            <p>3 Stones is a mobile app to facilitate crowd funding real estate investing, allowing individuals to invest directly in projects 
                                and project managers to obtain capital. </p>
                            <p>Collaborated with 7 engineers on a full stack mobile application for Generate Product Development </p>
                            <p>Developed Golang endpoints and React Native screens to support portfolio investment features</p>
                            <a href="https://github.com/GenerateNU/3stones" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
                            </a>
                        </div>
                        <div className = "picture">
                            <img className="three-stones-pic" src={ThreeStonesPic} alt="Picture of Phone Screens showing app" />
                        </div>
                    </div>
                </div>
                <div className = "project-pair">
                    <div className = "project-one">

                    </div>
                    <div className = "project-two">
                        
                    </div>
                </div>
              </div>
        </section>

    );
}      