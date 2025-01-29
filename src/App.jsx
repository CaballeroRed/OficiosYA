// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Technicians from './components/Technicians';
import Rating from './components/Rating';
import RegisterClient from './components/RegisterClient';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technicians/:specialty" element={<Technicians />} />
        <Route path="/rate/:techId" element={<Rating />} />
        <Route path="/registro-cliente" element={<RegisterClient />}/>
      </Routes>
    </Router>
  );
}

export default App;