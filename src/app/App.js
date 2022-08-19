import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Signup from '../components/pages/Signup';
// import Account from '../components/pages/Account';
import NavBar from '../components/navBar/NavBar';
import './App.css';

function App() {
	return (
	<div className="App">
		<NavBar/>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/signup' element={<Signup />} />
		</Routes>
	</div>
	);
}

export default App;