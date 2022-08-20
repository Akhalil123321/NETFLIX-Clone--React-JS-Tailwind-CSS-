import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
//when tyr to enter the account page while sinnig out
const ProtectedRoute = ({ children }) => {
    const {user} = UserAuth()

    if (!user) {
        return <Navigate to='/' />;
    } else {
        return children; // become account routes
    }
};

export default ProtectedRoute;
