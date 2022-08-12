import profileImg from "assets/profile.jpg";
import birds from "assets/flock.svg";
import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { Content } from "app/components/PageContentWrapper";

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
			<Content direction="row">
				<TextSection>
					<h1 className="AboutMeHeader">About Me</h1>
					<div className="AboutText">
						I'm a full stack developer based in Los Angeles,
						passionate about learning new technologies, writing
						code, and building websites that are appealing and
						responsive.
					</div>
					<div className="AboutText">
						In my professional career, I've been able to build a
						website for an established real estate agency, redesign
						a start-up's online directory and accounting software
						developed for general contractors.
					</div>
					<div className="AboutText">
						My interest in engineering/creating began and continues
						with building LEGOs and furniture in my free time. I'm
						also a big time gamer and enjoy learning new recipes.
					</div>
					<div className="AboutText">
						Interested in creating products that delight and improve
						everyday life.
					</div>
				</TextSection>
				<ProfileImage>
					<img className="ProfileImg" src={profileImg} />
					<div className="overlay">
						<div className="text">It's a me, Tommy</div>
					</div>
				</ProfileImage>
			</Content>
			<Birds src={birds} />
		</AboutContainer>
	);
};

const ProfileImage = styled.div`
	position: relative;
	width: 100%;
	max-width: 500px;
	min-width: 300px;
	&:before {
		content: "";
		display: block;
		padding-top: 100%;
	}
	.ProfileImg {
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
	}
	.text {
		white-space: nowrap;
		color: rgba(255, 255, 255, 0);
		font-size: 20px;
		position: absolute;
		overflow: hidden;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: 0.5s ease;
	}

	&:hover .overlay {
		background-color: rgba(100, 155, 219, 0.18);
		.text {
			color: rgba(255, 255, 255, 1);
		}
	}
	@media only screen and (max-width: 800px) {
		max-width: 500px;
		.ProfileImg {
			width: 100%;
			height: 100%;
		}
	}
`;

const TextSection = styled.div`
	text-align: left;
	padding-right: 5em;
	.AboutMeHeader {
		text-align: center;
		position: relative;
		font-size: 2em;
		padding-bottom: 1rem;
		&:before {
			position: absolute;
			bottom: 1px;
			content: "";
			background-color: #fdc435;
			width: 20%;
			height: 2px;
			margin: 0 auto;
			left: 0;
			right: 0;
			transition: 0.5s;
		}
		&:hover:before {
			width: 30%;
			background-color: #ffbf1e;
		}
	}

	.AboutText {
		margin-top: 1em;
		margin-bottom: 1em;
		max-width: 30em;
	}
	@media only screen and (max-width: 800px) {
		padding-right: 0;
		padding-bottom: 2rem;
	}
`;

const AboutContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: rgba(100, 155, 219, 0.18);
	min-height: 100vh;

	.ViewProjectButton {
		background: #79a8e0;
		border-radius: 35px;
		color: white;
		border: none;
		cursor: pointer;
	}
`;

const Birds = styled.img`
	position: absolute;
	width: 20rem;
	top: 0;
	padding-top: 5rem;
	@media only screen and (max-width: 800px) {
		display: none;
	}
`;
