import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'


const Projects = () => {
	const [letterClass, setLetterClass] = useState('text-animate')

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover')
		}, 3000)
	}, [])
	return (
		<>
			<div className="container projects-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
							idx={15}
						/>
					</h1>
				</div>
			</div>

			<Loader type="pacman" />
		</>
	)
}


export default Projects