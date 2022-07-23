import tic from "assets/tic.png";
import nestegg from "assets/nestegg.png";
import dir from "assets/dir.png";
import styled from "styled-components";
import { Button, Card } from "@mantine/core";
import { Link } from "react-router-dom";

const imgObj: any = {
	Nestegg: nestegg,
	"DIR Builders": dir,
	"Tic Tac Toe": tic,
};

const CardContainer = styled(Card)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px,
		rgb(0 0 0 / 4%) 0px 7px 7px -5px;

	h2,
	p {
		text-align: center;
	}
	.imageContainer {
		width: 30rem;
		height: 30rem;
		object-fit: contain;
		user-select: none;
		-webkit-user-drag: none;
	}
	.buttonsContainer {
		display: flex;
		justify-content: space-evenly;
	}
`;

export default function ProjectCard({ projectData }: any) {
	const { name, demo, code, descr } = projectData;

	return (
		<CardContainer>
			<Card.Section>
				<img className="imageContainer" src={imgObj[name]} />
			</Card.Section>
			<div
				className="infoContainer"
				style={{ backgroundImage: imgObj[name] }}
			>
				<h2>{name}</h2>
				<p>{descr}</p>
				<div className="buttonsContainer">
					{code && (
						<Button onClick={() => window.open(code, "_blank")}>
							Code
						</Button>
					)}
					{demo && (
						<Button onClick={() => window.open(demo, "_blank")}>
							Visit
						</Button>
					)}
				</div>
			</div>
		</CardContainer>
	);
}
