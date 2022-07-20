import { Route, Routes } from "react-router";
import { About } from "./containers/About";
import { Header } from "./containers/Header";
import { Projects } from "./containers/Projects";

export const App = () => {
	return (
		<>
			<Header />
			<About />
			<Projects />
			<Routes>
				<Route path="/login" element={<div />} />
			</Routes>
		</>
	);
};
