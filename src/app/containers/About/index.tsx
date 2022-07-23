import profileImg from "assets/profile.jpg";
import birds from "assets/flock.svg";
import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const AboutContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: rgba(100, 155, 219, 0.18);

	height: 100vh;
	.TextSection {
		text-align: left;
	}

	.AboutMeHeader {
		font-size: 25px;
		padding-bottom: 1rem;
	}

	.AboutWork {
		width: 20rem;
	}
	.AboutFreeTime {
		width: 20rem;
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
		transition: 0.5s ease-out;
		display: block;
	}
	.overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		border-radius: 50%;
		overflow: hidden;
		width: 100%;
		height: 100%;
		transition: 0.5s ease;
	}
	.container {
		position: relative;
		width: auto;
	}
	.container:hover .overlay {
		background-color: rgba(100, 155, 219, 0.18);
		.text {
			color: rgba(255, 255, 255, 1);
		}
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
`;

const Birds = styled.img`
	position: absolute;
	width: 20rem;
	top: 0;
	padding-top: 5rem;
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
				<div className="AboutMeHeader">About Me</div>
				<div className="AboutWork">
					My name is Tommy and I'm a full stack developer based in Los
					Angeles. I love learning new technologies, writing elegant
					code, and making both appealing and responsive websites.
				</div>
				<div className="AboutFreeTime">
					When I'm not building websites and technologies, my passion
					for working on something extends to my hobbies as well. On
					my free time I enjoy cooking, playing games, and building
					things such as LEGO or furniture.
				</div>
			</div>
			<div className="container">
				<img className="ProfileImg" src={profileImg} />
				<div className="overlay">
					<div className="text">It's a me, Tommy</div>
				</div>
			</div>
			<Birds src={birds} />
		</AboutContainer>
	);
};
