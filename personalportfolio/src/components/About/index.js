import './index.scss';
import SCU from '../../assets/images/SCU.png'
import Clubs from '../../assets/images/clubs.png'
import research from '../../assets/images/research.png'
import BB from '../../assets/images/BB.png'

const About = () => {
  const content = [
{
text: "I am a Computer Engineering student at Santa Clara University interested in robotics, embedded systems, and autonomous systems. I enjoy building systems that combine sensing, control, and hardware to interact with the physical world. My interests include robotics research, embedded sensing, and safety-critical engineering systems.",
imageUrl: SCU
},

{
text: "My research focuses on robotics systems and sensing. I am currently working on soft robotics shape sensing, where we are developing methods to detect deformation in flexible robotic structures using embedded sensors and optical sensing techniques. I have also worked on UAV simulation and autonomy research, building physics-based drone simulations in MATLAB and Simulink to analyze failure scenarios and emergency landing behavior.",
imageUrl: research
},

{
text: "Outside of research, I am involved in several engineering organizations at SCU. I am the wiring harnessing and integration lead of Bronco Racing's Formula SAE Electric team where I work on the vehicle’s Ground Low Voltage electrical system, designing wiring harnesses and integrating PDU's and CAN bus communication between subsystems while ensuring compliance with FSAE safety regulations. I am also active in the SCU ACM community and regularly participate in hackathons where I build hardware and software projects with my teams.",
imageUrl: Clubs
},

{
text: "Outside of engineering, I enjoy music and sports. I began playing bassoon in high school and had the opportunity to perform at Carnegie Hall. I still play music through the SCU Wind Ensemble and Orchestra. I also played baseball as an outfielder throughout high school and college.",
imageUrl: BB
}
];

  return (
    <div className="container about-page">
      <div className="title-zone">
        <h1>About Me</h1>
      </div>

      {content.map((pair, index) => (
        <div key={index} className={`pair ${index % 2 === 1 ? 'reverse' : ''}`}>
          <div className="text">
            <p>{pair.text}</p>
          </div>
          <div className="image">
            <img src={pair.imageUrl} alt={` ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;