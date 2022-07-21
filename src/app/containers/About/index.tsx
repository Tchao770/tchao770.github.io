import profileImg from "assets/profile.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const AboutContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: rgba(161, 183, 209, 0.18);
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
	}
	.ProfileImg {
		width: 500px;
		height: 500px;
		object-fit: cover;
		border-radius: 50%;
	}
`;

export const About = () => {
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/about")
			document
				.getElementById("about")
				?.scrollIntoView({ behavior: "smooth" });
	}, [location]);

	return (
		<AboutContainer id="about">
			<div className="TextSection">
				<div className="BriefSection">Hi, I'm Tommy!</div>
				<div className="AboutMe">
					I'm a Web Developer that likes making web applications
				</div>
			</div>
			<img className="ProfileImg" src={profileImg} />
		</AboutContainer>
	);
};
