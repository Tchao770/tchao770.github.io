import ProjectCard from "app/components/ProjectCard.tsx";
import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const ProjectContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		text-align: "center";
	}
	.projectsContainer {
		width: 80%;
		display: flex;
		justify-content: space-around;
	}
`;

export const Projects = () => {
	const location = useLocation();
	useEffect(() => {
		console.log(location);
		if (location.pathname === "/projects")
			document
				.getElementById("projects")
				?.scrollIntoView({ behavior: "smooth" });
	}, [location]);
	return (
		<ProjectContainer id="projects">
			<h1>Check out my work!</h1>
			<div className="projectsContainer">
				{Object.keys(projectData).map((key, index) => {
					return <ProjectCard projectData={projectData[key]} />;
				})}
			</div>
		</ProjectContainer>
	);
};

const projectData: any = {
	Nestegg: {
		name: "Nestegg",
		demo: "https://ecstatic-knuth-aa1bd0.netlify.app/",
		code: "https://github.com/Tchao770/Nestegg",
		descr: "demo built and designed by me for real estate agency",
	},
	"Math-for-Tangerines": {
		name: "Math for Tangerines",
		demo: "https://tchao.dev/Math-4-Tangerines/",
		code: "https://github.com/Tchao770/Math-4-Tangerines",
		descr: "A web app that allows users to create and customize math problems",
	},
	"Tic-Tac-Toe": {
		name: "Tic Tac Toe",
		demo: "https://tchao.dev/Tic-Tac-Toe/",
		code: "https://github.com/Tchao770/Tic-Tac-Toe",
		descr: "A Tic Tac Toe webpage!",
	},
	"CV-Creator": {
		name: "CV Creator",
		demo: "https://tchao.dev/CV-Creator/",
		code: "https://github.com/Tchao770/CV-Creator",
		descr: "Create your own CV with this simple CV creator",
	},
};
