import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [showInProgress, setShowInProgress] = useState(false);

  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const toggleInProgress = () => {
    setShowInProgress(!showInProgress);
  };

  const certificatesList = [
    {
      title: 'MOOC - Agile & Scrum',
      organization: 'Code First Girls',
      status: 'Completed',
      date: 'February 2024',
      certificateLink: '',
    },
    {
      title: 'Git & GitHub Essentials',
      organization: 'Amigoscode',
      status: 'Completed',
      date: 'January 2024',
      certificateLink: 'https://drive.google.com/file/d/1c4PLpsLr-FN8bqb9akz4z8-2cmN8Ntdu/view?usp=sharing',
    },
    {
      title: 'CFGDegree - Software Engineering',
      organization: 'Code First Girls',
      status: 'Completed',
      date: 'December 2023',
      certificateLink: 'https://drive.google.com/file/d/1itRr1rttSV9yp5Vlg689fWVP2vz6-hO8/view?usp=sharing',
    },
    {
      title: 'Python & Apps',
      organization: 'Code First Girls',
      status: 'Completed',
      date: 'July 2023',
      certificateLink: 'https://drive.google.com/file/d/1RYLY7j-rXOEU9oeTJqnm1R9z2acft-af/view?usp=sharing',
    },
    {
      title: '5-Day Coding Challenge',
      organization: 'CodeInstitute',
      status: 'Completed',
      date: 'February 2022',
      certificateLink: ''
    },
    {
      title: 'MOOC - Intro to iOS Development',
      organization: 'Code First Girls',
      status: 'In progress',
      date: 'Ongoing',
      certificateLink: '',
    },
    {
      title: 'Kotlin for Beginners',
      organization: 'Amigoscode',
      status: 'In progress',
      date: 'Ongoing',
      certificateLink: '',
    },
    {
      title: '100 Days of Code: The Complete Python Pro Bootcamp',
      organization: 'Udemy',
      status: 'In progress',
      date: 'Ongoing',
      certificateLink: '',
    },
  ];

  const completed = certificatesList.filter(certificate => certificate.status === 'Completed');
  const inProgress = certificatesList.filter(certificate => certificate.status === 'In progress');

  // Function to render completed certificates
  const renderCompletedCertificates = () => (
    <div className="certificate-container">
      {completed.map((certificate, index) => (
        <div key={index} className="certificate-card">
          <h4>{certificate.title}</h4>
          <p>Issued by: {certificate.organization}</p>
          <p>Status: {certificate.status}</p>
          <p>Date: {certificate.date}</p>
          <a href={certificate.certificateLink} target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      ))}
    </div>
  );

  // Function to render in-progress certificates
  const renderInProgressCertificates = () => (
    <div className="certificate-container">
      {inProgress.map((certificate, index) => (
        <div key={index} className="certificate-card">
          <h4>{certificate.title}</h4>
          <p>Issued by: {certificate.organization}</p>
          <p>Status: {certificate.status}</p>
          <p>Date: {certificate.date}</p>
          <p>This certificate is currently in progress.</p>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h2>Certificates</h2>

      {/* Button for Completed Certificates */}
      <div className="button-container">
        <div className="square-button" onClick={toggleCompleted}>
          <p>Completed</p>
        </div>
        <div className="square-button" onClick={toggleInProgress}>
          <p>In Progress</p>
        </div>
      </div>

      {/* Render completed or in-progress certificates based on state */}
      {showCompleted && renderCompletedCertificates()}
      {showInProgress && renderInProgressCertificates()}
    </div>
  );
};

export default Certificates;
