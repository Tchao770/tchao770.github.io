import tic from "assets/tic.png";
import nestegg from "assets/nestegg.png";
import dir from "assets/dir.png";
import styled from "styled-components";
import { Button } from "@mantine/core";

const imgObj: any = {
	Nestegg: nestegg,
	"DIR Builders": dir,
	"Tic Tac Toe": tic,
};

export default function ProjectCard({ projectData }: any) {
	const { name, demo, code, descr, technologies } = projectData;

	const redirect = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<CardContainer>
			<img className="ProjectImg" src={imgObj[name]} />
			<div className="overlay">
				<div className="content">
					<h2>{name}</h2>
					<InfoContainer>
						<p>{descr}</p>
						<div className="buttonsContainer">
							{code && (
								<Button
									onClick={() => redirect(code)}
									style={{ backgroundColor: "#508DD6" }}
								>
									Code
								</Button>
							)}
							{demo && (
								<Button
									onClick={() => redirect(demo)}
									style={{ backgroundColor: "#508DD6" }}
								>
									Visit
								</Button>
							)}
						</div>
					</InfoContainer>
					<TechList>
						<ul>
							{technologies.map((tech: string) => {
								return <li key={tech}>{tech}</li>;
							})}
						</ul>
					</TechList>
				</div>
			</div>
		</CardContainer>
	);
}

const TechList = styled.div`
	display: flex;
	justify-content: center;
	ul {
		padding: 0;
		width: 75%;
		display: flex;
		list-style: none;
		justify-content: space-evenly;
		flex-wrap: wrap;
		li {
			font-size: 0.9em;
			padding: 1em;
			padding-bottom: 0em;
		}
	}
`;

const CardContainer = styled.div`
	width: 100%;
	max-width: 500px;
	min-width: 300px;
	padding: 2em;
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-radius: 15px;
	box-shadow: 0px 3px rgb(0 0 0 / 5%), rgb(0 0 0 / 5%) 0px 10px 15px -5px,
		rgb(0 0 0 / 4%) 0px 7px 7px -5px;

	&:before {
		content: "";
		display: block;
		padding-top: 100%;
	}
	h2 {
		font-size: calc(2vw + 12px);
		text-align: center;
	}
	.ProjectImg {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 15px;
		transition: 0.5s ease-out;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		line-height: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		border-radius: 15px;
		overflow: hidden;
		width: 100%;
		height: 100%;
		transition: 0.5s ease;
		&:active {
			background: rgba(134, 167, 207, 0.349);
			backdrop-filter: blur(10px);
			.content {
				opacity: 1;
			}
		}
	}
	.content {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: 0.75s ease;
		opacity: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	&:hover .overlay {
		background: rgba(134, 167, 207, 0.349);
		backdrop-filter: blur(10px);
		.content {
			opacity: 1;
		}
	}
	@media only screen and (max-width: 800px) {
		flex-direction: row;
		margin-bottom: 1em;
		max-height: 250px;
	}
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	p {
		width: 90%;
		text-align: left;
		margin: auto;
	}
	.buttonsContainer {
		display: flex;
		justify-content: space-evenly;
		width: 90%;
		padding-top: 1em;
		padding-bottom: 1em;
	}
	@media only screen and (max-width: 800px) {
		width: 95%;
	}
`;
