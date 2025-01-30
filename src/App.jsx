// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import RegisterClient from './components/RegisterClient';
import RegisterTechnician from './components/RegisterTechnician';
import ContactTechnician from './components/ContactTechnician'; // Componente para contactar al técnico

function App() {
  useEffect(() => {
    // Verifica si los datos de técnicos ya existen en LocalStorage
    const technicians = JSON.parse(localStorage.getItem('technicians'));

    // Si no hay datos, agregamos los datos de ejemplo
    if (!technicians) {
      const technicians = [
        { id: 1, name: 'Juan Pérez', specialty: 'electricista', phone: '123-456-7890', rating: 4 },
        { id: 2, name: 'Ana López', specialty: 'sanitario', phone: '987-654-3210', rating: 5 },
        { id: 3, name: 'Carlos García', specialty: 'cerrajero', phone: '555-555-5555', rating: 3 },
        { id: 4, name: 'María Fernández', specialty: 'refrigeracion', phone: '333-333-3333', rating: 4 },
        { id: 5, name: 'Pedro Sánchez', specialty: 'electricista', phone: '444-444-4444', rating: 2 },
        { id: 6, name: 'Laura Martínez', specialty: 'sanitario', phone: '222-222-2222', rating: 5 },
      ];

      // Guardamos estos datos en LocalStorage
      localStorage.setItem('technicians', JSON.stringify(technicians));
    }
  }, []); // Este useEffect se ejecutará solo una vez cuando la aplicación inicie

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro-cliente" element={<RegisterClient />} />
        <Route path="/registro-tecnico" element={<RegisterTechnician />} />
        <Route path="/contactar-tecnico/:id" element={<ContactTechnician />} />
      </Routes>
    </Router>
  );
}

export default App;