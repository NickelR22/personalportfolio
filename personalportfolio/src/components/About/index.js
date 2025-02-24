import './index.scss';
import SCU from '../../assets/images/SCU.png'
import Clubs from '../../assets/images/clubs.png'
import Skills from '../../assets/images/skills.png'
import BB from '../../assets/images/BB.png'
import Swim from '../../assets/images/swim.png'

const About = () => {
  const content = [
    { text: "I am currently a freshman at Santa Clara University majoring in Computer Science and Engineering. Graduated from The Harker School in 2024. I specialize in backend however I do have experience with working on the frontend as well.", imageUrl: SCU },
    { text: "Outside of my classes I am an active member of many clubs. I am a current member of the Formula E racing team Bronco Racing. As an electrical subteam member, I have designed the GUI system for the driver and created electrical schematics for the cockpit in order to ensure that it stays in accordance with the regulations. On top of that I am a member of SCU ACM. I have participated in many hackathons and have been named as a finalist.", imageUrl: Clubs },
    { text: "I am profecient in working with langues and technologies such as: Python, Git, JavaScript, CSS, C, C#, React, Linux, Java, Unity, Xcode, Flask, AWS Services, KiCad, and Lua. I am a fast learner and can learn any new skills very quickly. I also posses many behavioral skills such as communication, crisis management, attention to detail, and dedication. Check out the projects tab to see some of these skills in action.", imageUrl: Skills },
    { text: "I have previously worked as a swim instructor at a summer camp. I supervised kids in both the pool and lockerroom and was CPR certified during this time. It taught me to work in high stress situations and communicate with the other people on the team. I also helped with the orginization of pick-up after camp was over.", imageUrl: Swim },
    { text: "Outside of my academics, I enjoy playing music and sports. I began playing bassoon in hs where we preformed in Carnegie Hall and I still continue my passion for music in the SCU Wind Ensamble and Orchestra. I also play baseball as an outfielder in both highschool and college. Both music and sports have taught me to stay resilient as faliure is a major aspect of both of these.", imageUrl: BB },
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