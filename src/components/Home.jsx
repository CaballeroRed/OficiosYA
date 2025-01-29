// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Componente Home que muestra las categorías de especialidades
function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Especialidades disponibles</h2>
      
      {/* Tarjetas con las especialidades */}
      <div>
        {['Electricista', 'Sanitario', 'Cerrajero', 'Refrigeración'].map((specialty) => (
          <div key={specialty} style={cardStyle}>
            <h3>{specialty}</h3>
            {/* Al hacer click en la especialidad, llevamos al usuario a la página de técnicos */}
            <Link to={`/technicians/${specialty.toLowerCase()}`} style={buttonStyle}>Ver Técnicos</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Estilo básico para las tarjetas
const cardStyle = {
  display: 'inline-block',
  margin: '20px',
  padding: '20px',
  border: '2px solid #4CAF50',
  borderRadius: '8px',
  textAlign: 'center',
};

// Estilo para los botones de "Ver Técnicos"
const buttonStyle = {
  display: 'inline-block',
  marginTop: '10px',
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
};

export default Home;