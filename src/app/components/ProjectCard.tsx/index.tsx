import tic from "assets/tictactoedemo.png";
import nestegg from "assets/nesteggpreview.png";
import styled from "styled-components";

const imgObj: any = {
	Nestegg: nestegg,
	"Tic Tac Toe": tic,
	"Math for Tangerines": tic,
	"CV Creator": tic,
};

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	height: 25rem;
	position: relative;
	width: 50%;
	border-radius: 15px;
	border: solid 1px black;
	.imageContainer {
		width: 100%;
		height: auto;
		object-fit: contain;
		height: 25rem;
		border-radius: 15px;
	}
	&:hover .overlay {
		bottom: 0;
		height: 100%;
	}
	.overlay {
		position: absolute;
		bottom: 100%;
		left: 0;
		right: 0;
		background-color: #2d34369f;
		overflow: hidden;
		width: 100%;
		height: 0;
		transition: 0.75s ease;
		border-radius: 15px;

		.infoContainer {
			color: white;
			font-size: 20px;
			display: flex;
			text-align: center;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			height: 100%;
			.buttonsContainer {
				display: inherit;
				justify-content: space-around;
				width: 70%;
				.projectButton {
					background-color: dodgerblue;
					color: white;
					transition: 0.75s ease;
					padding: 0.5rem 2rem;
					border-radius: 10px;
					&:hover {
						background-color: rgb(93, 172, 252);
					}
				}
			}
		}
	}
`;

export default function ProjectCard({ projectData }: any) {
	const { name, demo, code, descr } = projectData;

	return (
		<CardContainer>
			<img className="imageContainer" src={imgObj[name]} />
			<div className="overlay">
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
			</div>
		</CardContainer>
	);
}
