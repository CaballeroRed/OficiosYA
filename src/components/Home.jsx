// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const storedTechnicians = JSON.parse(localStorage.getItem('technicians')) || [];
    setTechnicians(storedTechnicians);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Bienvenidos a OficiosYA</h1>
      <p>Encuentra al mejor técnico para tu servicio.</p>

      {/* Botones para registrar cliente o técnico */}
      <div>
        <Link to="/registro-cliente">
          <button>Registrar Cliente</button>
        </Link>
        <Link to="/registro-tecnico">
          <button>Registrar Técnico</button>
        </Link>
      </div>

      <h2>Técnicos disponibles</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {technicians.map((technician) => (
          <div
            key={technician.id}
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              margin: '10px',
              width: '200px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>{technician.name}</h3>
            <p>Especialidad: {technician.specialty}</p>
            <p>Teléfono: {technician.phone}</p>
            <p>
              Calificación: {'⭐'.repeat(technician.rating)} ({technician.rating}/5)
            </p>
            <Link to={`/contactar-tecnico/${technician.id}`}>
              <button>Contactar</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;