import React from 'react';
import Navbar from './NavBar';
import AboutMe from './AboutMe';
import Education from './Education';


/* Sets up the main page and set up the routes to the other pages so that the use can interact with the 
buttons and it will take then to the appropriate page */
export default function App() {
  return (
      <div>
        <Navbar />
        <AboutMe />
        <Education />
      </div> 
    );
}