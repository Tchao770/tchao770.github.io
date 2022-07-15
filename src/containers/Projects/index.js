import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import projectData from "../../data/projects.json";
import "./styles.scss"

export default function Projects() {
	return (
		<div className="projectsContainer">
			<h1>Check out my work!</h1>
			{Object.keys(projectData).map((key, index) => {
				return (
					<ProjectCard
						projectData={projectData[key]}
						key={index}
					/>
				)
			})}
		</div>
	)
}
