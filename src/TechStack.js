import React from 'react';
import './TechStack.css';
// Import logos for your tech stack
import PythonLogo from './python.png';
import JSLogo from './javascript.png';
import HTML from './html.png';
import CSS from './css.png';
import mysqlLogo from './mysql.png';
import JiraLogo from './jira.png';
import GitLogo from './git-logo.png';
import PygameLogo from './Pygame_logo.png';


const TechStack = () => {
  // Array of logos representing your tech stack
  const techStack = [
    HTML,
    CSS,
    JSLogo,
    PythonLogo,
    mysqlLogo,
    JiraLogo,
    GitLogo,
    PygameLogo,


    // ... other logos representing your tech stack
  ];

  return (
    <section id="tech-stack" className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-stack-container">
        {techStack.map((logo, index) => (
          <div key={index} className="tech-logo-container">
            <img src={logo} alt={`Tech Logo ${index}`} className="tech-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
