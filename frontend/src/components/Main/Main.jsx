import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Login from '../Login/Login.jsx';
import Home from '../Home/Home.jsx';
import Delivery from '../Delivery/Delivery.jsx'; 
import Vehiculos from '../Vehiculos/Vehiculos.jsx';
import Visitas from '../Visitas/Visitas.jsx';

import { isTokenValid } from '../../utils/auth.js';

const Main = () => {
    const token = localStorage.getItem('token');
    const tokenExistAndStillValid = isTokenValid(token);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/delivery" element={<Delivery />} /> 
                <Route path="/vehiculos" element={<Vehiculos />} /> 
                <Route path="/visitas" element={<Visitas />} /> 
                <Route path="*" element={<Navigate to="/" />} /> 
            </Routes>
        </Router>
    );
}

export default Main;


