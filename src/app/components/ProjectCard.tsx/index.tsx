import tic from "assets/tictactoedemo.png";
import nestegg from "assets/nesteggpreview.png";
import styled from "styled-components";
import { Card } from "@mantine/core";

const imgObj: any = {
	Nestegg: nestegg,
	"Tic Tac Toe": tic,
	"Math for Tangerines": tic,
	"CV Creator": tic,
};

const CardContainer = styled(Card)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 25rem;
	width: 10rem;
	box-shadow: 0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px,
		rgb(0 0 0 / 4%) 0px 7px 7px -5px;
	.imageContainer {
		width: 100%;
		height: auto;
		object-fit: contain;
		height: 20rem;
		border-radius: 15px;
	}
`;

export default function ProjectCard({ projectData }: any) {
	const { name, demo, code, descr } = projectData;

	return (
		<CardContainer>
			<img className="imageContainer" src={imgObj[name]} />
			<div className="infoContainer">
				<h2>{name}</h2>
				<p>{descr}</p>
				<div className="buttonsContainer">
					<a
						href={code}
						target="_blank"
						rel="noopener noreferrer"
						className="projectButton"
					>
						Code
					</a>
					<a
						href={demo}
						target="_blank"
						rel="noopener noreferrer"
						className="projectButton"
					>
						Demo
					</a>
				</div>
			</div>
		</CardContainer>
	);
}
