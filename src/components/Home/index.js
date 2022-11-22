import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import LogoS from '../../assets/images/logo_storm.png';

const Home = () => {

	const [letterClass, setLetterClass] = useState('text-animate')
	const nameArray = [' ', 'M', 'a', 'k', 's', 'i', 'm', ',']
	const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover')
		}, 4000)
	}, [])

	return (
		<>
			<div className="container home-page">
				<div className="text-zone">
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>i</span>
						<span className={`${letterClass} _13`}>,</span>
						<br />
						<span className={`${letterClass} _14`}>I</span>
						<span className={`${letterClass} _15`}>'</span>
						<span className={`${letterClass} _15`}>m</span>
						<AnimatedLetters letterClass={letterClass}
							strArray={nameArray}
							idx={15}
						/>
						<br />
						<AnimatedLetters letterClass={letterClass}
							strArray={jobArray}
							idx={15}
						/>

					</h1>

					<h2>Welcome to my website</h2>
					<Link to="/contact" className="flat-button">
						CONTACT ME
					</Link>

				</div>

				<div className="logo-container" >
					<img className='solid-logo' src={LogoS} alt='logo' />

				</div>
			</div>

		</>
	)
}

export default Home