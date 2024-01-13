// App.js
import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contacts';
import TechStack from './TechStack';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section id="home" className="section">
        {/* About content */}
        <Home />
      </section>
      <section id="about" className="section">
        {/* About content */}
        <About />
      </section>
      <section id="TechStack" className="section">
        <TechStack />
      </section>
      <section id="projects" className="section">
        {/* Projects content */}
        <Projects />
      </section>
      <section id="contact" className="section">
        {/* Contact content */}
        <Contact />
      </section>
    </div>
  );
};

export default App;