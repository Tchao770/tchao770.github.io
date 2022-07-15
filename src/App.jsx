import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './containers/About';
import Header from './containers/Header';
import Projects from './containers/Projects';

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<About />
				<Projects />
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}