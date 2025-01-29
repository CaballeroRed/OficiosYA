// src/components/Header.jsx
import React from 'react';

// Componente Header que muestra el título de la aplicación
function Header() {
  return (
    <header style={{ backgroundColor: '#4CAF50', color: 'white', padding: '20px', textAlign: 'center' }}>
      <h1>OficiosYA</h1>
      <p>Encuentra y califica a los mejores técnicos</p>
    </header>
  );
}

export default Header;