import { useLayoutEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserHistory } from "history";
import { HashRouter } from "react-router-dom";
import { App } from "./app";
import "./styles/index.css";

// prepare store
const history = createBrowserHistory();
const CustomRouter = ({ history, ...props }: any) => {
	const [state, setState] = useState({
		action: history.action,
		location: history.location,
	});

	useLayoutEffect(() => history.listen(setState), [history]);

	return (
		<HashRouter
			{...props}
			location={state.location}
			navigationType={state.action}
			navigator={history}
		/>
	);
};
const container = document.getElementById("root");

const root = createRoot(container);
root.render(
	<CustomRouter history={history}>
		<App />
	</CustomRouter>
);
