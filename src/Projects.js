import React, { useState } from 'react';
import './Projects.css'; // Import your projects CSS file
import WhiteBoardImage from './whiteboard.png';
import PetAdoptionImage from './petadoption.png';
import EpicCrossImage from './epic_cross_quest.png';
import SpotifyArtistImage from './spotify_artist.png';
import MoodSuggestionImage from './mood_suggestion.png';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: 'Whiteboard App',
      description: 'An interactive whiteboard application built using Python-Tkinter library. This app allows users to draw, change pen colors, adjust line widths, and clear the canvas.',
      imageUrl: WhiteBoardImage,
      videoPath: 'https://drive.google.com/file/d/1sPzznmvarO9-NCbvXWIWquZLh-LqNTRF/view?usp=sharing',
    },
    {
      title: 'Virtual Pet Adoption Centre',
      description: 'A web application created with Python and Flask, simulating a platform where users can adopt virtual pets. It includes features for user authentication, adoption processes, and interaction with adopted pets.',
      imageUrl: PetAdoptionImage,
      videoPath: 'https://drive.google.com/file/d/1sPzznmvarO9-NCbvXWIWquZLh-LqNTRF/view?usp=sharing',
    },
    {
      title: 'EpicCross Quest Game',
      description: 'Python-based adventure, EpicCross Quest Game, invites players on an interactive journey where decisions impact the narrative. Crafted with Python and Pygame, explore a captivating world, make pivotal choices, and uncover diverse outcomes in this immersive road-crossing quest',
      imageUrl: EpicCrossImage,
      videoPath: 'https://drive.google.com/file/d/1sPzznmvarO9-NCbvXWIWquZLh-LqNTRF/view?usp=sharing',
    },
    {
      title: 'Spotify Artist Search',
      description: 'A Python application leveraging the Spotify API to search for artists. It provides details about the searched artist, including albums, tracks, and release years.',
      imageUrl: SpotifyArtistImage,
      videoPath: 'https://drive.google.com/file/d/1XOaMqkKRcdmInUTb7w3BoV-CD1Rvxflc/view?usp=sharing',
    },
    {
      title: 'Mood Music Suggestion',
      description: 'Designed to recommend music based on the user mood. It analyzes emotions to curate playlists and suggest tracks from various genres or artists.',
      imageUrl: MoodSuggestionImage,
      videoPath: 'https://drive.google.com/file/d/1YjqgJr4cSs8WIGVYx6IohKazAFtuiqer/view?usp=sharing',
    },
  ];

  const handleProjectClick = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const playDemo = (videoPath) => {
    // Implement logic to play demo video or launch demo application
    // For example, open a new tab/window with the videoPath URL
    window.open(videoPath, '_blank');
  };

  return (
    <section id="projects" className="projects">
      <h2>Personal Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${expandedProject === index ? 'expanded' : ''}`} onClick={() => handleProjectClick(index)}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            {!expandedProject && (
              <p>
                <button onClick={() => handleProjectClick(index)}>Learn More</button>
                {project.videoPath && (
                  <button onClick={() => playDemo(project.videoPath)}>Play Demo</button>
                )}
              </p>
            )}
            {expandedProject === index && (
              <>
                <p>{project.description}</p>
                {project.embedUrl && (
                  <div className="video-container">
                    <iframe
                      title={project.title}
                      src={project.embedUrl}
                      width="640"
                      height="360"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
