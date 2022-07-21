import { Button } from "@mantine/core";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

const HomeContainer = styled.div`
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

	.ViewProjectButton {
		background: #79a8e0;
		border-radius: 35px;
		color: white;
		border: none;
		cursor: pointer;
	}
`;

export const Home = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		console.log(location);
		if (location.pathname === "/" || location.pathname === "/home")
			document
				.getElementById("home")
				?.scrollIntoView({ behavior: "smooth" });
	}, [location]);

	return (
		<HomeContainer id="home">
			<div className="TextSection">
				<div className="BriefSection">Hi, I'm Tommy!</div>
				<div className="AboutMe">
					I'm a Web Developer that likes making web applications
				</div>

				<Button
					variant="default"
					onClick={() => {
						navigate("/projects");
					}}
				>
					View Projects
				</Button>
				<Button
					variant="default"
					onClick={() => {
						navigate("/about");
					}}
				>
					About Me
				</Button>
			</div>
		</HomeContainer>
	);
};
