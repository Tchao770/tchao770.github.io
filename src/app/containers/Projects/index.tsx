import ProjectCard from "app/components/ProjectCard.tsx";
import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

export const Projects = () => {
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/projects")
			document
				.getElementById("projects")
				?.scrollIntoView({ behavior: "smooth" });
	}, [location]);
	return (
		<ProjectSection id="projects">
			<h1>My work</h1>
			<ProjectContainer>
				{Object.keys(projectData).map((key, index) => {
					return (
						<ProjectCard key={key} projectData={projectData[key]} />
					);
				})}
			</ProjectContainer>
		</ProjectSection>
	);
};

const ProjectSection = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(121, 168, 224, 0.18);
	h1 {
		text-align: "center";
		font-size: 2em;
		padding-bottom: 1rem;
		position: relative;
		&:before {
			position: absolute;
			bottom: 1px;
			content: "";
			background-color: #fdc435;
			width: 40%;
			height: 2px;
			margin: 0 auto;
			left: 0;
			right: 0;
			transition: 0.5s;
		}
		&:hover:before {
			width: 90%;
			background-color: #ffbf1e;
		}
	}
`;

const ProjectContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 90%;
	max-width: 1500px;
	@media only screen and (max-width: 800px) {
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		height: 100%;
	}
`;

const projectData: any = {
	DIRBuilders: {
		name: "DIR Builders",
		demo: "https://dirbuilders.com/search-with-map/?keyword=Boilermaker+-+Blacksmith&location=Los+Angeles&page=1&mapsearch=1&mapcenter=%257B%2522lat%2522%253A33.89919266141664%252C%2522lng%2522%253A-117.62346345703125%257D&mapbounds=%257B%2522northeast%2522%253A%257B%2522lat%2522%253A34.40944979642645%252C%2522lng%2522%253A-116.83794099609375%257D%252C%2522southwest%2522%253A%257B%2522lat%2522%253A33.38586369505393%252C%2522lng%2522%253A-118.40898591796875%257D%257D",
		descr: `
		An online directory web application of all registered DIR contractors in California 
		with filter-rich searching capabilities to find the right contractors. 
		I redesigned and implemented a new search page that utilizes the Google Maps API and Algolia's 
		Search API, providing users with a visual of the results.
		`,
		technologies: [
			"JavaScript",
			"jQuery",
			"BootStrap",
			"Algolia API",
			"CakePHP",
			"Google Maps API",
		],
	},
	Nestegg: {
		name: "Nestegg",
		demo: "https://ecstatic-knuth-aa1bd0.netlify.app/",
		code: "https://github.com/Tchao770/Nestegg",
		descr: `
		A real estate agency website to establish a digital presence, exposing the company
		to more ways of obtaining customers. I held regular sprints with my client, narrowing 
		desired features and built the website from the ground up with React, built with Webpack,
		and deployed via Netlify.
		`,
		technologies: ["React", "Webpack", "Sass", "Netlify"],
	},
	/*
	TicTacToe: {
		name: "Tic Tac Toe",
		demo: "https://tchao.dev/Tic-Tac-Toe/",
		code: "https://github.com/Tchao770/Tic-Tac-Toe",
		descr: "A simple tic tac toe app that can be played between 2 people",
	},
	MathforTangerines: {
		name: "Math for Tangerines",
		demo: "https://tchao.dev/Math-4-Tangerines/",
		code: "https://github.com/Tchao770/Math-4-Tangerines",
		descr: "A web app that allows users to create and customize math problems",
	},
	*/
};
