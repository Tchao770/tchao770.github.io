import { Button } from "@mantine/core";
import { Content } from "app/components/PageContentWrapper";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import sun from "assets/sun.svg";
import cloud from "assets/cloud.svg";
import styled from "styled-components";

export const Home = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname === "/" || location.pathname === "/home") {
			document
				.getElementById("home")
				?.scrollIntoView({ behavior: "smooth" });
		}
	}, [location]);

	return (
		<HomePage id="home">
			<Content direction="row">
				<TextContent>
					<h1 className="Heading">Hi, I'm Tommy!</h1>
					<div className="ShortAboutMe">
						I'm a fullstack engineer based in Los Angeles!
					</div>
					<div>
						<Button
							style={{ backgroundColor: "#508DD6" }}
							onClick={() => {
								navigate("/about");
							}}
						>
							About Me
						</Button>
						<Button
							style={{ backgroundColor: "#508DD6" }}
							onClick={() => {
								navigate("/projects");
							}}
						>
							View Projects
						</Button>
					</div>
				</TextContent>
				<SkyObjects>
					<Sun src={sun} />
					<Cloud src={cloud} />
				</SkyObjects>
			</Content>
		</HomePage>
	);
};

const HomePage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(80, 141, 214, 0.18);
	height: 100vh;
`;

const TextContent = styled.div`
	.Heading {
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
	@media only screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		.Heading {
			text-align: center;
		}
	}
`;

const SkyObjects = styled.div`
	position: relative;
	align-items: flex-end;
	display: flex;
	@media only screen and (max-width: 800px) {
		margin-top: 40px;
	}
`;

const Sun = styled.img`
	position: absolute;
	top: 0;
	overflow: visible;
	max-width: 200px;
`;
const Cloud = styled.img`
	width: 300px;
	filter: drop-shadow(3px 5px 1px rgb(0 0 0 / 0.4));
	animation: move 3s infinite;
	@keyframes move {
		0% {
			transform: translatex(0);
		}
		50% {
			transform: translatex(-10px);
		}
	}
`;
