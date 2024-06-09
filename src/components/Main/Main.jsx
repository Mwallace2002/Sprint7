import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Login from '../Login/Login.jsx';
import Home from '../Home/Home.jsx';
import Delivery from '../Delivery/Delivery.jsx'; 
import Vehiculos from '../Vehiculos/Vehiculos.jsx';
import Visitas from '../Visitas/Visitas.jsx';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/delivery" element={
          <PrivateRoute>
            <Delivery />
          </PrivateRoute>
        } />
        <Route path="/vehiculos" element={
          <PrivateRoute>
            <Vehiculos />
          </PrivateRoute>
        } />
        <Route path="/visitas" element={
          <PrivateRoute>
            <Visitas />
          </PrivateRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default Main;
