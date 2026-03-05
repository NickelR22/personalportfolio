import React, { useState } from 'react';
import './index.scss';
import AWS from '../../assets/images/AWS.png'
import FSAE from '../../assets/images/FSAE.png'
import Dino from '../../assets/images/Dino.png'
import mastermind from '../../assets/images/mastermind.png'
import skyline from '../../assets/images/skylineresults.png'
import H4H from '../../assets/images/H4H.png'
import SS from '../../assets/images/SS.png'


const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Shape Sensing Research",
      description: "Conducting research on shape sensing for soft robotics, exploring methods for estimating the configuration of flexible robotic structures without rigid joint encoders. The project investigates sensing approaches using conductive elastomers and optical sensing systems to reconstruct the shape of continuum robotic spines. The goal is to develop scalable sensing architectures for soft robots with applications in medical robotics and surgical manipulators, with plans to publish the work in a soft robotics journal.",
      image: SS,
    },
    {
      title: "FSAE (Formula E Student Competition)",
      description: "Wiring and Integration Lead for the Bronco Racing Formula SAE Electric team. I was responsible for designing and implementing the vehicle’s Ground Low Voltage (GLV) electrical system. Responsibilities include wiring harness design, CAN bus integration between vehicle subsystems, and fuse distribution architecture while ensuring compliance with FSAE EV safety regulations. The system provides reliable communication and power distribution for critical electronics in a high-performance electric race car.",
      image: FSAE,
    },
    {
      title: "Drone Delivery Research",
      description: "Built a physics-based UAV simulation environment in MATLAB and Simulink to study the safety and reliability of autonomous drone delivery systems. The simulator models 6-DoF flight dynamics and evaluates failure scenarios such as motor loss, wind disturbances, payload variation, and sensor drift using Monte Carlo testing. Across 6000+ simulations, the system achieved a 97.5% successful landing rate while avoiding all people and wildlife in the environment.",
      image: skyline,
    },
    {
      title: "Blindspot (Hack for Humanity)",
      description: "Built Blindspot, a wearable assistive vision system that helps visually impaired users interpret their surroundings using computer vision. The system captures images through an ESP32 camera, runs object detection through a lightweight YOLOv8 model, and converts detected objects into audio feedback using Elevenlabs for the user. The project integrates embedded hardware, mobile software, RTOS, and a real-time computer vision backend to enable low-latency scene understanding.",
      image: H4H,
    },
    {
      title: "AWS Hackathon",
      description: "During a Hackathon hosted by SCUACM and Amazon, we placed third with a project that used AWS services like Rekognition and S3 to detect how many open parkingspots were in an image. I worked on the backend with the AWS services to detect the number of cars in the image and reteriving data from the S3 bucket.",
      image: AWS,
    },
    {
      title: "AI Game Agent",
      description: " I used the NEAT algorithm to create a bot that plays the no internet chrome dinosaur game. I used pygame to recreate the game.",
      image: Dino,
    },
    {
      title: "Mastermind",
      description: "I recreated the board game Mastermind in Unity where the computer would generate a code and the player would try to guess it. I implemented settings that control how many rows and colors there are as well as enabling/disabling duplicates. The code was published to iOS using Xcode.",
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
  
    const xOffset = offset < 0 ? 15 : -35;
    
    return {
      transform: `translateX(${translateX + xOffset}px) translateZ(${translateZ}px) rotateY(${angle}deg)`,
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