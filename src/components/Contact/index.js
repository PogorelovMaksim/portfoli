import { faAt, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {
	const [letterClass, setLetterClass] = useState('text-animate')

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass('text-animate-hover')
		}, 3000)
	}, [])

	return (
		<>
			<div className="container contact-page">
				<div className="text-contact">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
							idx={15}
						/>
					</h1>
					<ul className='contacts-column'>
						<li>
							<a target="_blank" rel='noreferrer' href='mailto:pogorelovmaks1@gmail.com'>
								<FontAwesomeIcon icon={faAt} color="#FF0000" />

								<p>Pogorelovmaks1@gmail.com</p>
							</a>
						</li>
						<li>
							<a target="_blank" rel='noreferrer' href='https://t.me/easybreezyy'>
								<FontAwesomeIcon icon={faTelegram} color="#00BFFF" />
								<p>Telegram</p>
							</a>
						</li>
						<li>
							<a target="_blank" rel='noreferrer' href='mailto:pogorelovmaks1@gmail.com'>
								<FontAwesomeIcon icon={faWhatsapp} color="#00FF00" />
								<p>Whatsapp</p>
							</a>
						</li>
					</ul>

					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={['M', 'y', ' ', 'L', 'o', 'c', 'a', 't', 'i', 'o', 'n']}
							idx={15}
						/>
					</h1>
					<div className='contacts-location'>

						<a target="_blank" rel='noreferrer' href='https://www.google.com/maps/@47.4177702,40.0726797,14z?hl=en'>
							<FontAwesomeIcon icon={faLocationDot} color="#FF0000" />
							<p>Russia -Novocherkassk, Rostovskaya oblast', 346400  </p>
						</a>
						<h2>Ready to relocate.</h2>
					</div>
				</div>


			</div>

			<Loader type="pacman" />
		</>
	)
}

export default Contact
