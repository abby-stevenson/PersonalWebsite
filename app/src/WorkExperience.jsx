import React from 'react';
import './WorkExperience.css';
import ToastLogo from './assets/ToastLogo.png';

export default function WorkExperience() {
    return (
        <section className="work-experience" id="work-experience">
              <h2>Work Experience</h2>
              <div className = "work-list">
                <div className="work-card">
                    <div className = "work-header">
                        <img className="toast-logo" src={ToastLogo} alt="Toast" />
                        <div className = "work-title">
                            <h3>Software Engineering Co-op</h3>
                            <h5> July 2025 – December 2026</h5>
                        </div>
                    </div>
                    <div className = "work-terms">
                        <div className = "work-term">
                            <span className = "work-date">July – December 2025</span>
                            <ul>
                                <li>Upgraded UI components and layouts to deliver a smoother, more intuitive user experience.</li>
                                <li>Fixed user-reported bugs across the frontend, improving stability and overall user experience.</li>
                                <li>Wrote automated accessibility tests that identified WCAG violations and contributed to ongoing 
                                    accessibility compliance.</li>
                                <li>Collaborated with designers and engineers in biweekly sprint cycles to deliver features and resolve issues.</li>
                            </ul>
                        </div>
                        <div className = "work-term">
                            <span className = "work-date">July – December 2026</span>
                            <ul>
                                <li>Engineered a Google review inbox for multi-location restaurants to aid with reputation management.</li>
                                <li>Collaborated with designers and engineers in biweekly sprint cycles to deliver features and resolve 
                                    issues on both the Online Ordering and Reputation Management products.</li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
        </section>
    );
}
