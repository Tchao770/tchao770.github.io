import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { FancyLoadingOverlay } from "./components/FancyLoadingOverlay";
import { SocialMedia } from "./components/SocialMedia";
import { About } from "./containers/About";
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
			<Header />
			<Home />
			<About />
			<Projects />
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
