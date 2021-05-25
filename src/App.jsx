import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Header from "./components/Header";
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
    return (
        <div>
            <Router>
                <Header />
                <About />
                <Skills />
                <Projects />
                <Footer />
            </Router>
        </div>
    )
}