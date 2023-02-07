import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Navbar';
import Home from './Home';
import About from './About';
import Login from './Login';


function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
