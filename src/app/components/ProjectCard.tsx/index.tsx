import tic from "assets/tic.png";
import nestegg from "assets/nestegg.png";
import dir from "assets/dir.png";
import styled from "styled-components";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const imgObj: any = {
	Nestegg: nestegg,
	"DIR Builders": dir,
	"Tic Tac Toe": tic,
};

const CardContainer = styled.div`
	width: 25vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background-color: white;
	box-shadow: 0 1px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px,
		rgb(0 0 0 / 4%) 0px 7px 7px -5px;

	.buttonsContainer {
		display: flex;
		justify-content: space-evenly;
	}
	@media only screen and (max-width: 800px) {
		width: 100%;
		max-width: 500px;
		flex-direction: row;
	}
`;

const ImageContainer = styled.div`
	@media only screen and (max-width: 800px) {
		width: 40%;
	}
	img {
		width: 100%;
		height: auto;
		object-fit: contain;
		user-select: none;
		-webkit-user-drag: none;
	}
`;

const InfoContainer = styled.div`
	@media only screen and (max-width: 800px) {
		width: 60%;
	}
	h2 {
		font-size: calc(2vw + 12px);

		text-align: center;
	}
	p {
		text-align: center;
	}
`;

export default function ProjectCard({ projectData }: any) {
	const { name, demo, code, descr } = projectData;

	return (
		<CardContainer>
			<ImageContainer>
				<img src={imgObj[name]} />
			</ImageContainer>
			<InfoContainer>
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
			</InfoContainer>
		</CardContainer>
	);
}
