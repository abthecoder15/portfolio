import React from 'react';
import './Projects.css'; // Import your projects CSS file
import WhiteBoardImage from './whiteboard.png';
import PetAdoptionImage from './pet_adoption_centre.png';
import EpicCrossImage from './epic_cross_quest.png';
import SpotifyArtistImage from './spotify_artist.png';
import MoodSuggestionImage from './mood_suggestion.png';

const Projects = () => {
  const projects = [
    {
      title: 'Whiteboard App',
      description: 'An interactive whiteboard application built using Python-Tkinter library. This app allows users to draw, change pen colors, adjust line widths, and clear the canvas.',
      imageUrl: WhiteBoardImage,
      githubLink: 'https://github.com/abthecoder15/andreia_portfolio/tree/d03e727256539b74dad15b599bd170c67108c94c/whiteboard_app',
    },
    {
      title: 'Virtual Pet Adoption Centre',
      description: 'A web application created with Python and Flask, simulating a platform where users can adopt virtual pets. It includes features for user authentication, adoption processes, and interaction with adopted pets.',
      imageUrl: PetAdoptionImage,
      githubLink: 'https://github.com/abthecoder15/andreia_portfolio/tree/35bb58ad604a62f298a1c574a73caf53e50240b8/adoption_centre/user_authentication_system',
    },
    {
      title: 'EpicCross Quest Game',
      description: 'Python-based adventure, EpicCross Quest Game, invites players on an interactive journey where decisions impact the narrative. Crafted with Python and Pygame, explore a captivating world, make pivotal choices, and uncover diverse outcomes in this immersive road-crossing quest',
      imageUrl: EpicCrossImage,
      githubLink: 'https://github.com/abthecoder15/andreia_portfolio/tree/f3acd94c20ec19e34a4a3b9039ce138df2c794b9/Epic_Cross_game',
    },
    {
      title: 'Spotify Artist Search',
      description: 'A Python application leveraging the Spotify API to search for artists. It provides details about the searched artist, including albums, tracks, and release years.',
      imageUrl: SpotifyArtistImage,
      githubLink: 'https://github.com/abthecoder15/andreia_portfolio/tree/0a63554851a56156a415bd094a46de95793675eb/spotify',
    },
    {
      title: 'Mood Music Suggestion',
      description: 'Designed to recommend music based on the user mood. It analyzes emotions to curate playlists and suggest tracks from various genres or artists.',
      imageUrl: MoodSuggestionImage,
      githubLink: 'https://github.com/abthecoder15/andreia_portfolio/tree/d03e727256539b74dad15b599bd170c67108c94c/Mood%3AMusic%3AAPI',
    },
  ];

    return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;