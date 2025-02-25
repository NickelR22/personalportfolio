import React, { useState } from 'react';
import './index.scss';
import AWS from '../../assets/images/AWS.png'
import FSAE from '../../assets/images/FSAE.png'
import Dino from '../../assets/images/Dino.png'
import mastermind from '../../assets/images/mastermind.png'
import SS from '../../assets/images/SS.png'

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "FSAE (Formula E Student Competition)",
      description: "As a member of the electrical team, my job was to make the GUI for the driver which displays critical race data for the driver. I used PySimpleGUI to create it. Another task of min is creating the wiring diagram for the cockpit of the car and ensuring that it meets all technical standads (not shows for obvious reasons).",
      image: FSAE,
    },
    {
      title: "AWS Hackathon",
      description: "During a Hackathon hosted by SCUACM and Amazon, we placed third with a project that used AWS services like Rekognition and S3 to detect how many open parkingspots were in an image. I worked on the backend with the AWS services to detect the number of cars in the image and reteriving data from the S3 bucket.",
      image: AWS,
    },
    {
      title: "Simbas Surveillance",
      description: "This was a project created during SCUACM's annual Hack 4 Humanity. Our project detected if there were any humans in frame and reported it to main console so park rangers could find them. I worked on writing the person detection code using yolov8 and conecting the front and backend using Flask. https://simbassurveillance.vercel.app/",
      image: SS,
    },
    {
      title: "AI Game Player",
      description: " I used the NEAT algorithm to create a bot that plays the no internet chrome dinosaur game. I used pygame to reacreate the game.",
      image: Dino,
    },
    {
      title: "Mastermind",
      description: "I recreated the board game mastermind in unity where the computer would generate a code and the player would try to guess it. I implemented settings that control how many rows and colors there are as well as enabling/disabling duplicates. The code was published to iOS using Xcode.",
      image: mastermind,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const calculatePosition = (index) => {
    const offset = index - activeIndex;
    const angle = offset * 60;
    const radius = 1100;
    
    const translateX = Math.sin(angle * Math.PI / 180) * radius;
    const translateZ = (Math.cos(angle * Math.PI / 180) - 1) * radius;
    
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${angle}deg)`,
      opacity: Math.abs(offset) <= 1 ? 1 : 0,
    };
  };

  return (
    <div className="projects-carousel">
      <div className="carousel-container">
        {projects.map((project, index) => {
          const styles = calculatePosition(index);
          const isActive = index === activeIndex;
          
          return (
            <div
              key={index}
              className={`card ${isActive ? 'active' : 'hidden'}`}
              style={styles}
            >
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="image-container">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Projects;