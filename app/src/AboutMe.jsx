import React from 'react';
import './AboutMe.css';
import HeadShot from './assets/f24-headshots-7-copy.jpeg';

export default function AboutMe() {
  return (
    <section className="aboutme">
      <h2>About Me</h2>
      <div className="aboutme-border">
        <div className="image-and-text">
            <div className="left-hand-side">
            <img className="headshot" src={HeadShot} alt="Abby Stevenson Headshot" />
            </div>
            <div className="right-hand-side">
            <p>
                Hello! I'm a second-year Computer Science student at Northeastern University, concentrating in Artificial Intelligence and minoring in Mathematics.
                I'm excited to be starting my first co-op at Toast in the coming months.
            </p>
            <p>
                I grew up in a small town just north of London, and since starting at Northeastern in Fall 2023, I’ve been based in Boston.
            </p>
            <p>
                Last semester I took Intro to Database Design, Computer Systems, Probability and Statistics and Theory of Computation. 
            </p>
            </div>
        </div>
      </div>
    </section>
  );
}
