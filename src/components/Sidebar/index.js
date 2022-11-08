import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo_storm.png'
import LogoSubtitle from '../../assets/images/logo_subb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram, faVk, } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
	<div className='nav-bar'>
		<Link className='logo' to='/'>
			<img src={LogoS} alt="logo" />
			<img className='sub-logo' src={LogoSubtitle} alt="Breez" />
		</Link>
		<nav>
			<NavLink exact="true" activeclassname="active" to="/">
				<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
			</NavLink>
			<NavLink exact="true" activeclassname="active" className='about-link' to="/about">
				<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
			</NavLink>
			<NavLink exact="true" activeclassname="active" className='projects-link' to="/projects">
				<FontAwesomeIcon icon={faEye} color="#4d4d4e" />
			</NavLink>
			<NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
				<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
			</NavLink>
		</nav>
		<ul>
			<li>
				<a target="_blank" rel='noreferrer' href='https://github.com/PogorelovMaksim'>
					<FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
				</a>
			</li>
			<li>
				<a target="_blank" rel='noreferrer' href='https://t.me/easybreezyy'>
					<FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
				</a>
			</li>
			<li>
				<a target="_blank" rel='noreferrer' href='https://vk.com/id65253565'>
					<FontAwesomeIcon icon={faVk} color="#4d4d4e" />
				</a>
			</li>
		</ul>
	</div>
)

export default Sidebar

