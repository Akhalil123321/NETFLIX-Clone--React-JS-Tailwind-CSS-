import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { AuthContextProvider } from '../components/context/AuthContext';
import Account from '../pages/Account';
import NavBar from '../components/navBar/NavBar';
import ProtectedRoute from '../components/productedRoute/ProtectedRoute';
import './App.css';

function App() {
	return (
	<div className="App">
		<AuthContextProvider>
			<NavBar/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
			</Routes>
		</AuthContextProvider>
	</div>
	);
}

export default App;