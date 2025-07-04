import React from 'react';
import './Projects.css';
import GenerateLogo from './assets/Generate-logo.png';
import ThreeStonesPic from './assets/3stones.png';
import AALogo from './assets/AALogo.png';
import SAAImage from './assets/SAAImage.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';


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
                        <h3>Checkout Flow for a Web Application</h3>
                        <h4>Java Script, CSS, HTML, React</h4>
                        <h5> December 2024 </h5>
                        <p> Implemented a checkout flow based on styled Figma design</p>
                        <p>Fetched items from an external API and built functionality for adding to cart and checking out</p>
                        <a href="https://github.com/abby-stevenson/Stocks" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
                            </a>
                    </div>
                    <div className = "project-two">
                        <h3>Stock Portfolio Management System </h3>
                        <h4>Java</h4>
                        <h5>June 2024</h5>
                        <p>Implemented key financial computations, including X-day moving averages, and crossover detection</p>
                        <p>Used well-structured design principles such as MVC architecture and design patterns to ensure
                        modularity, scalability, and maintainability</p>
                        <a href="https://github.com/abby-stevenson/CheckOutFlow" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
                            </a>
                    </div>
                </div>
                <div className="generate-border">
                    <div className = "project-and-picture">
                        <div className = "picture">
                            <img className="AA-pic" src={AALogo} alt="Picture of plane (logo for altitude analysts)"/>
                        </div>
                        <div className = "description">
                            <h3>Altitude Analysts</h3>
                            <h4>Python, MySQL, Streamlit</h4>
                            <h5>April 2025</h5>
                            <p>Altitude Analysts is a full-stack web application designed to streamline flight logistics for a 
                                range of stakeholders, including travel agents, passengers, airline managers, and airport 
                                administrators. </p>
                            <p>Collaborated with a team of five engineers to design and implement a robust database, 
                                write optimized SQL queries, and build RESTful API routes to manage users, flights, bookings, 
                                and administrative functions.</p>
                            <p>Developed a user-friendly front end using Streamlit to ensure intuitive navigation and responsive interaction.</p>
                            <div className="icon-list">
                                <a href="https://github.com/abby-stevenson/AltitudeAnalysts" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
                                </a>
                                <a href="https://www.youtube.com/watch?v=CppA8bC0s08" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" className="github-icon" />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className = "project-pair">
                    <div className = "project-one">
                        <h3>Minesweeper Game Implementation</h3>
                        <h4>Java </h4>
                        <h5> April 2024 </h5>
                        <p> Designed and developed a Minesweeper game in Java using object-oriented principles</p>
                        <p>Implemented game mechanics such as random mine placement, neighbor cell calculations, flagging
                        mechanics, and uncovering logic for cells with zero neighboring mines</p>
                        <a href="https://github.com/abby-stevenson/Minesweeper" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
                            </a>
                    </div>
                    <div className = "project-two">
                        <h3> Shell Project </h3>
                        <h4>C</h4>
                        <h5>February 2025</h5>
                        <p>Developed a custom Unix-style shell supporting input/output redirection, command sequencing, piping, 
                            standard shell commands, and several built-in commands.</p>
                        <p>Implemented a tokenizer to parse user input into structured command components, enabling reliable execution of complex command chains.</p>
                        <a href="https://github.com/abby-stevenson/ShellProject" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
                            </a>
                    </div>
                </div>
                 <div className="generate-border">
                    <div className = "project-and-picture">
                        <div className = "picture">
                            <img className="SAA-pic" src={SAAImage} alt="Picture of profile page"/>
                        </div>
                        <div className = "description">
                            <h3> Study Abroad Advisor</h3>
                            <h4>Java, TypeScript, Tailwind, MongoDB, React, Docker</h4>
                            <h5>June 2025</h5>
                            <p>Study Abroad Advisor is a remake of our universitiy's study abroad website. The main aim was to simplify the process
                                of planning a study abroad for students. </p>
                            <p>Collaborated with a team of 9 engineers to build a full-stack web app for planning study abroad programs, 
                                featuring course search, user accounts, and filtered course lists.</p>
                            <p>Developed backend logic and RESTful endpoints for user authentication and secure login, 
                                as well as account-based course favouriting</p>
                            <p>Built React Native screens and integrated them with backend services to support university browsing, 
                                a centralised homepage and home pages for each university</p>
                            <div className="icon-list">
                                <a href="https://github.com/abby-stevenson/SAA" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
                                </a>
                                <a href="https://youtu.be/Od14ni-uda4" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" className="github-icon" />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className = "project-pair">
                    <div className = "project-one">
                        <h3>Streaming Service Home Page</h3>
                        <h4>Java Script, CSS, HTML, React</h4>
                        <h5> August 2024 </h5>
                        <p> Implemented a streaming service based on styled Figma design</p>
                        <a href="https://github.com/abby-stevenson/StreamingServiceHomePage" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
                            </a>
                    </div>
                    <div className = "project-two">
                        <h3>Exquisite Corpse</h3>
                        <h4>Java Script, CSS, HTML</h4>
                        <h5> February 2024 </h5>
                        <p> Developed during a HackBeanpot hackathon, it is a collaborative web-based drawing application inspired by the surrealist game of the same name.</p>
                        <p> Separate players will draw a head, torso, and legs of a figure without seeing what the others are drawing. At the end, all three will be displayed together as an "exquisite corpse!"</p>
                        <div className='icon-list'>
                            <a href="https://github.com/lbrissette/exquisitecorpse" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="2x" className="github-icon" />
                            </a>
                            <a href="https://www.youtube.com/watch?v=9GSiDWcgxAM&t=1s" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" className="github-icon" />
                            </a>
                            <a href="https://devpost.com/software/exquisite-corpse-9hqt0y" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faCircleInfo} size="2x" className="github-icon" />
                            </a>
                        </div>
                    </div>
                </div>
              </div>
        </section>

    );
}      