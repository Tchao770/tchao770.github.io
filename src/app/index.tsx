import { Route, Routes } from "react-router";
import { FancyLoadingOverlay } from "./components/FancyLoadingOverlay";
import { About } from "./containers/About";
import { Header } from "./containers/Header";
import { Home } from "./containers/Home";
import { Projects } from "./containers/Projects";

export const App = () => {
	return (
		<>
			<FancyLoadingOverlay />
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
