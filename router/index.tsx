import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Report from '../pages/Report';
import MyPets from '../pages/MyPets';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/report" element={<Report />} />
            <Route path="/my-pets" element={<MyPets />} />
        </Routes>
    );
};

export default Router; 