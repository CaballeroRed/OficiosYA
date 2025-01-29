// src/components/Home.jsx
import React from 'react';
import './Home.css'; // Estilos de la página de inicio

function Home() {
  return (
    <div className="home">
      <h2 className="home-title">Bienvenido a OficiosYA</h2>
      <p className="home-description">¿Buscas un técnico o deseas ofrecer tus servicios? Regístrate como técnico o cliente.</p>

      <div className="buttons-container">
        <button className="button" onClick={() => window.location.href = '/registro-tecnico'}>
          Regístrate como Técnico
        </button>
        <button className="button" onClick={() => window.location.href = '/registro-cliente'}>
          Regístrate como Cliente
        </button>
      </div>
    </div>
  );
}

export default Home;