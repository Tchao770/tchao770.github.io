import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router";
import styled from "styled-components";
import { FancyLoadingOverlay } from "./components/FancyLoadingOverlay";
import { SocialMedia } from "./components/SocialMedia";
import { About } from "./containers/About";
import { Contact } from "./containers/Contact";
import { Header } from "./containers/Header";
import { Home } from "./containers/Home";
import { Projects } from "./containers/Projects";

export const App = () => {
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/about")
			document
				.getElementById("about")
				?.scrollIntoView({ behavior: "smooth" });
	}, []);
	//<FancyLoadingOverlay />
	return (
		<>
			<BlurOverlay id="blurred"/>
			<Header />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Routes>
				<Route path="/" />
				<Route path="/about" />
				<Route path="/projects" />
				<Route path="/skills" />
				<Route path="/contact" />
			</Routes>
		</>
	);
};

const BlurOverlay = styled.div`
	position: fixed;
	z-index: 9;
	height: 100vh;
	width: 100%;
	&.blurred {
		transition: all 0.6s ease !important;
		background-color: #7a7a7a7f;
		backdrop-filter: blur(5px);
	}
`;
const monochromeBlue = [
	"59, 128, 210",
	"80, 141, 214",
	"100, 155, 219",
	"121, 168, 224",
	"142, 181, 229",
	"162, 195, 234",
	"183, 208, 238",
	"183, 208, 238",
];