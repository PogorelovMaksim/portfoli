import { useEffect, useState } from 'react'
import {
	faAngular,
	faCss3,
	faGitAlt,
	faHtml5,
	faJsSquare,
	faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
	const [letterClass, setLetterClass] = useState('text-animate')

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover')
		}, 3000)
	}, [])

	return (
		<>
			<div className="container about-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
							idx={15}
						/>
					</h1>
					<p>
						My name is Maksim Pogorelov. I am beginer front-end developer.Got a master's degree, Platov South-Russian State Polytechnic University June 2022.
						Field of Study "Informatics and Computer Engineering".
					</p>
					<p align="LEFT">
						Currently i spend all my free time study web development and writing pet Projects. Looking for a job in IT company with a
						modern stack of technologists for the position of junior / trainee.
					</p>
					<div className='my-skills'>
						<h1>
							<AnimatedLetters
								letterClass={letterClass}
								strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
								idx={15}
							/>
						</h1>
						<p>
							HTML5, CSS3, JavaScript, React, Bootstrap, Sass, Git.
						</p>
					</div>
				</div>

				<div className="stage-cube-cont">
					<div className="cubespinner">
						<div className="face1">
							<FontAwesomeIcon icon={faAngular} color="#DD0031" />
						</div>
						<div className="face2">
							<FontAwesomeIcon icon={faHtml5} color="#F06529" />
						</div>
						<div className="face3">
							<FontAwesomeIcon icon={faCss3} color="#28A4D9" />
						</div>
						<div className="face4">
							<FontAwesomeIcon icon={faReact} color="#5ED4F4" />
						</div>
						<div className="face5">
							<FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
						</div>
						<div className="face6">
							<FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
						</div>
					</div>
				</div>
			</div>

			<Loader type="pacman" />
		</>
	)
}

export default About