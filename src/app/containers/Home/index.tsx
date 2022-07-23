import { Button } from "@mantine/core";
import { Clouds } from "app/components/Clouds";
import { SunBoi } from "app/components/SunBoi";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";

const HomeContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: rgba(80,141,214, 0.18);
	height: 100vh;
	.TextContainer {
		width: 50rem;
		//background-color: coral;
		text-align: left;
	}

	.Heading {
		//background-color: mintcream;
		font-size: 5rem;
		margin-bottom: 1rem;
	}

	.ShortAboutMe {
		margin-bottom: 1rem;
	}

	.ViewProjectButton {
		background: #79a8e0;
		border-radius: 35px;
		color: white;
		border: none;
		cursor: pointer;
	}
`;

const CutePortait = styled.div``;

export const Home = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		console.log(location);
		if (location.pathname === "/" || location.pathname === "/home") {
			document
				.getElementById("home")
				?.scrollIntoView({ behavior: "smooth" });
		}
	}, [location]);

	return (
		<HomeContainer id="home">
			<div className="TextContainer">
				<h1 className="Heading">Hi, I'm Tommy!</h1>
				<div className="ShortAboutMe">
					I'm a fullstack engineer based in Los Angeles!
				</div>
				<Button
					variant="default"
					onClick={() => {
						navigate("/about");
					}}
				>
					About Me
				</Button>
				<Button
					variant="default"
					onClick={() => {
						navigate("/projects");
					}}
				>
					View Projects
				</Button>
			</div>
			<CutePortait>
				<SunBoi />
				<Clouds />
			</CutePortait>
		</HomeContainer>
	);
};
