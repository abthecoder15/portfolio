import React from 'react';
import './App.css';
import './Home.css';
import coverImage from './cover.png'; // Import the image

const Home = () => {
  return (
    <div>
      <section id="home" className="home" style={{ backgroundColor: 'white' }}>
        <img src={coverImage} alt="Portfolio Home" style={{ width: '100%', height: 'auto' }} />
      </section>
    </div>
  );
};

export default Home;

