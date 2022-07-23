import { Grid } from "@mantine/core";
import ProjectCard from "app/components/ProjectCard.tsx";
import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const ProjectSection = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(121, 168, 224, 0.18);
	h1 {
		text-align: "center";
	}
	/* .projectsContainer {
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
	} */
`;

const ProjectContainer = styled(Grid)``;

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
			<h1>Some of my work</h1>
			<ProjectContainer className="projectsContainer">
				{Object.keys(projectData).map((key, index) => {
					return (
						<Grid.Col
							span={4}
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<ProjectCard projectData={projectData[key]} />
						</Grid.Col>
					);
				})}
			</ProjectContainer>
		</ProjectSection>
	);
};

const projectData: any = {
	DIRBuilders: {
		name: "DIR Builders",
		demo: "https://dirbuilders.com/search-with-map/?keyword=Boilermaker+-+Blacksmith&location=Los+Angeles&page=1&mapsearch=1&mapcenter=%257B%2522lat%2522%253A33.89919266141664%252C%2522lng%2522%253A-117.62346345703125%257D&mapbounds=%257B%2522northeast%2522%253A%257B%2522lat%2522%253A34.40944979642645%252C%2522lng%2522%253A-116.83794099609375%257D%252C%2522southwest%2522%253A%257B%2522lat%2522%253A33.38586369505393%252C%2522lng%2522%253A-118.40898591796875%257D%257D",
		descr: "Redesigned and implemented improved search page for company website",
	},
	Nestegg: {
		name: "Nestegg",
		demo: "https://ecstatic-knuth-aa1bd0.netlify.app/",
		code: "https://github.com/Tchao770/Nestegg",
		descr: "Website built and designed by me for real estate agency",
	},
	TicTacToe: {
		name: "Tic Tac Toe",
		demo: "https://tchao.dev/Tic-Tac-Toe/",
		code: "https://github.com/Tchao770/Tic-Tac-Toe",
		descr: "A simple tic tac toe app that can be played between 2 people",
	},
	/*
	MathforTangerines: {
		name: "Math for Tangerines",
		demo: "https://tchao.dev/Math-4-Tangerines/",
		code: "https://github.com/Tchao770/Math-4-Tangerines",
		descr: "A web app that allows users to create and customize math problems",
	},
	*/
};
