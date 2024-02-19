import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setIsVisible(aboutSectionTop < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`about-section ${isVisible ? 'visible' : ''}`} id="about">
      <div className="about-container">
        <h2>About</h2>
        <p>
          With a background in Law, I'm on a journey to become a Software Engineer, driven by more than just lines of code. What really excites me is the challenge of delving into tech problems, like unraveling a complex puzzle. I love diving deep into the world of technology, discovering new solutions, and connecting the dots to create something meaningful.
        </p>
        <p>
          I have an insatiable curiosity that drives me to constantly seek knowledge. With a blend of technical skills and a curious mindset, I'm ready to make a difference in the world of software development by combining insights from various fields into innovative solutions.
        </p>
        {/* Add more details or sections as needed */}
      </div>
    </section>
  );
};

export default About;
