import React from 'react';
import './Education.css';
import QLogo from './assets/QLogo.png';
import NULogo from './assets/NULogo.png';
import EducationCard from './EducationCard.jsx';

export default function Eductaion() {
    return (
        <section className="education" id="education">
              <h2>Education</h2>
              <div className = "education-list">
                <EducationCard className = "education-card"
                title = {"Candidate for Bachelors of Science"}
                years = {"2023 - 2027"}
                logo = {<img className="logo" src={NULogo} alt="Northeastern Logo" />}
                classes = {"Coming soon"}
                ec = {"Coming soon"}
                honours = {"Coming soon"}
                />
                <EducationCard className = "education-card"
                title = {"Secondary School"}
                years = {"2016 - 2023"}
                logo = {<img className="logo" src={QLogo} alt="Queenswood Logo" />}
                classes = {
                    <div>
                        <h3>A Levels</h3>
                        <div className = "subject-and-grade"> <p> Computer Science</p> <h5> A* </h5> </div>
                        <div className = "subject-and-grade"> <p> Mathematics</p> <h5> A* </h5> </div>
                        <div className = "subject-and-grade"> <p> Physics</p> <h5> A </h5> </div>
                        <h3>GCSEs</h3>
                        <div className = "subject-and-grade"> <p> Biology </p> <h5> 9 </h5> </div>
                        <div className = "subject-and-grade"> <p> Chemistry</p> <h5> 9 </h5> </div>
                        <div className = "subject-and-grade"> <p> Computer Science </p> <h5> 9 </h5> </div>
                        <div className = "subject-and-grade"> <p> Drama </p> <h5> 9 </h5> </div>
                        <div className = "subject-and-grade"> <p> English Language </p> <h5> 8 </h5> </div>
                        <div className = "subject-and-grade"> <p> English Literature </p> <h5> 8 </h5> </div>
                        <div className = "subject-and-grade"> <p> Geography </p> <h5> 9 </h5> </div>
                        <div className = "subject-and-grade"> <p> Mathematics </p> <h5> 9 </h5> </div>
                        <div className = "subject-and-grade"> <p> Physics</p> <h5> 9 </h5> </div>
                        <div className = "subject-and-grade"> <p> Spanish</p> <h5> 8 </h5> </div>
                    </div>
                }
                ec = {
                    <div>
                        <h3>Senior Prefect</h3>
                        <h5> 2022 - 2023</h5>
                        <p>Part of a 12 person team that bridged the gap between staff and students, helping to voice students thought and being a point of contact
                            for students</p>
                        <h3> Head of Academic Scholars Program</h3>
                        <h5> 2022 - 2023</h5>
                        <p>Lead the academic scholars program, organising and leading academically enriching sessions and helped coordinate the 
                        program for ~ 40 academic scholars ranging in ages from 11 to 18</p>
                        <h3> EPQ </h3>
                        <h5> 2022 - 2023</h5>
                        <p> Researched and wrote an extended paper on the topic "Should Computer Science now be a compulsory subject in schools and is the current
                        curriculum sufficient?"</p>
                        <h3> Founded a Mentor Program </h3>
                        <h5> 2022 - 2023 </h5>
                        <p> Founded a mentor program that spans across a variety of subjects with myself and my peers
                        running groups focused on our subjects of interest, I ran the computer science group</p>
                        <h3> English Conversation Tutoring</h3>
                        <h5> 2018 - 2023</h5>
                        <p>Tutored several students weekly online in English conversation skills. The students' ages range from 7 - 15</p>
                        <h3> Lambda Awards </h3>
                        <h5> 2013 - 2023 </h5>
                        <p> Completes various Lambda examinations up to and including Grade 7, in a variety of categories including 
                            Acting Solo, Acting Duo, Acting Combined, Devising Drama and Speaking Verse and Prose</p>
                        <h3>GCSE Tutoring</h3>
                        <h5>2021 - 2023</h5>
                        <p>Held weekly one on one tutoring sessions for GCSE students in a variety of STEM subjects including maths, biology, physics and
                        chemistry</p>
                        <h3> Ceramics Class </h3>
                        <h5> 2014 - 2023 </h5>
                        <p> Attended a ceramics class at my local art centre and developed my skills in various
                        areas of the discipline such as, throwing, slab building and coiling</p>
                        <h3> Computing Live Conference </h3>
                        <h5> 2020, 2023</h5>
                        <p> Attended a conference on two occasions held in Paris, attended talks given by different people working in
                        technology and computer science such as Rik Ferguson, Vice President of Security Research
                        at Trend Micro</p>
                        <h3> Ski Instructor Course</h3>
                        <h5> 2022 </h5>
                        <p> Completed the Level 1 Irish Association of Snow Sport Instructors Course at my local
                        snowdome</p>
                        <h3> Volunteered for Mudlarks Charity in their coffee shop</h3>
                        <h5> 2022 </h5>
                        <p>Served customers, waited tables, operated the till and cleaned the shop at the end of the day</p>
                        <h3> DoFE Bronze Award </h3>
                        <h5> 2021 </h5>
                        <p> Completed community service, skills and sport sections as well as an expedition</p>
                    </div>
                        
                }
                honours = {
                    <div> 
                        <div className = "honours"> <h3>Academic Scholar</h3> <p> Schoolwide </p> <h5> 2019 - 2022 </h5> </div>
                        <div className = "honours"> <h3>Technovation Semi-Finalist</h3> <p> International </p> <h5> 2022 </h5> </div>
                        <div className = "honours"> <h3>Computer Science Prize</h3> <p> Schoolwide </p> <h5> 2022, 2023 </h5> </div>
                        <div className = "honours"> <h3>Mathematics Prize</h3> <p> Schoolwide </p> <h5> 2023 </h5> </div>
                        <div className = "honours"> <h3>Bebras Computer Science Challenge Elite Distinction</h3> <p> National </p> <h5> 2021 </h5> </div>
                        <div className = "honours"> <h3>Bebras Computer Science Challenge Senior Distinction</h3> <p> National </p> <h5> 2020 </h5> </div>
                        <div className = "honours"> <h3>UKMT Challenge Intermediate Bronze</h3> <p> National </p> <h5> 2020 </h5> </div>
                    
                    </div>
                }
                />
              </div>
            </section>

    );
}