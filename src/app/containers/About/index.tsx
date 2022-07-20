import { Button } from "@mantine/core";
import profileImg from "assets/profile.jpg";
import styled from "styled-components";

const AboutContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding-bottom: 2em;
	background: rgba(121, 168, 224, 0.18);
	height: 100vh;
	.TextSection {
		text-align: left;
	}

	.BriefSection {
		font-size: 20px;
	}

	.AboutMe {
	}

	.ViewProjectButton {
		background: #79a8e0;
		border-radius: 35px;
		color: white;
		border: none;
		cursor: pointer;
		font-size: 20px;
		margin-top: 1em;
		padding: 1rem 2rem 1rem 2rem;
		&:hover {
			background: black;
			transition-duration: 0.5s;
		}
	}
	.ProfileImg {
		width: 500px;
		height: 500px;
		object-fit: cover;
		border-radius: 50%;
	}
`;

export const About = () => {
	return (
		<AboutContainer>
			<div className="TextSection">
				<div className="BriefSection">Hi, I'm Tommy!</div>
				<div className="AboutMe">
					I'm a Web Developer that likes making web applications
				</div>
				<div className="ViewProjectButton">View Projects</div>
				<div className="ViewProjectButton">About Me</div>

				<Button>View Projects</Button>
			</div>
			<img className="ProfileImg" src={profileImg} />
		</AboutContainer>
	);
};
