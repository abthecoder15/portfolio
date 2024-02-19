import React from 'react';
import './Header.css'; // Ensure the path to your CSS file is correct

const Header = () => {
    return (
        <header className="header-container">
            <div className="nav-links">
                <a href="#about" className="nav-link">About</a>
                <a href="#certificates" className="nav-link">Certificates</a>
                <a href="#tech-stack" className="nav-link">Tech Stack</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
        </header>
    );
};


export default Header;