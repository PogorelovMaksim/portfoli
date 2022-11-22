import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo_storm.png'
import LogoSubtitle from '../../assets/images/logo_subb.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faHome, faUser, faBars, faClose, } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram, faVk, } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
	const [showNav, setShowNav] = useState(false);
	return (
		<div className='nav-bar'>
			<Link className='logo'
				to='/'
				onClick={() => setShowNav(false)}>
				<img src={LogoS} alt="logo" />
				<img className='sub-logo' src={LogoSubtitle} alt="Breez" />
			</Link>
			<nav className={showNav ? 'mobile-show' : ''}>
				<NavLink exact="true" activeclassname="active"
					to="/"
					onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
				</NavLink>
				<NavLink exact="true" activeclassname="active" className='about-link'
					to="/about"
					onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
				</NavLink>
				<NavLink exact="true" activeclassname="active" className='projects-link'
					to="/projects"
					onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faEye} color="#4d4d4e" />
				</NavLink>
				<NavLink exact="true" activeclassname="active" className='contact-link'
					to="/contact"
					onClick={() => setShowNav(false)}>
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
				</NavLink>
				<FontAwesomeIcon
					onClick={() => setShowNav(false)}
					icon={faClose}
					color="#ffd700"
					size="3x"
					className='close-icon' />
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
			<FontAwesomeIcon
				onClick={() => setShowNav(true)}
				icon={faBars}
				color="#ffd700"
				size="3x"
				className='hamburger-icon' />
		</div>
	)
}

export default Sidebar

