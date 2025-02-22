import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoNWhite from '../../assets/images/Logo-N-White.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane, faProjectDiagram, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoNWhite} alt='logo' />
    </Link>
     <nav>
        <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon ={faUserAlt} color="#e64f7d" />
        </NavLink>
        <NavLink exact='true' activeclassname="active" className="projects-link" to="/projects">
            <FontAwesomeIcon icon ={faProjectDiagram} color="#00ee63" />
        </NavLink>
        <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon ={faPaperPlane} color="#cbcb41" />
        </NavLink>
    </nav>
    <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/nikhil-ranjit/"
            target="_blank"
            rel="noreferrer"
          >
             <FontAwesomeIcon icon ={faLinkedin} color="#0b66c2" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/NickelR22"
            target="_blank"
            rel="noreferrer"
          >
             <FontAwesomeIcon icon ={faGithub} color="#FFFFFF" />
          </a>
        </li>
    </ul>
    </div>
)

export default Sidebar