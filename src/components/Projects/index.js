import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';


const Projects = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const [portfolio, setPortfolio] = useState([]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);

		return () => {
			clearTimeout(timer);
		}
	});

	useEffect(() => {
		getPortfolio();
	}, []);

	const getPortfolio = async () => {
		const querySnapshot = await getDocs(collection(db, 'portfolio'));
		setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
	}


	const renderProjects = (projects) => {
		return (
			<div className="images-container">
				{
					projects.map((port, idx) => {
						return (
							<div className="image-box" key={idx}>
								<img
									src={port.image}
									className="portfolio-image"
									alt="portfolio" />
								<div className="content">
									<p className="title">{port.name}</p>
									<h4 className="description">{port.description}</h4>
									<button
										className="btn"
										onClick={() => window.open(port.url)}
									>View</button>
								</div>
							</div>
						)
					})
				}
			</div>
		);
	}

	return (
		<>
			<div className="container projects-page">
				<h1 className="page-title">
					<AnimatedLetters
						letterClass={letterClass}
						strArray={"My Projects".split("")}
						idx={15}
					/>
				</h1>
				<div>{renderProjects(portfolio)}</div>
			</div>
			<Loader type="pacman" />
		</>
	);
}

export default Projects;