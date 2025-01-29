// src/components/Technicians.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Componente para mostrar los técnicos por especialidad
function Technicians() {
  const { specialty } = useParams(); // Captura el parámetro de especialidad en la URL
  const [technicians, setTechnicians] = useState([]);

  // Simulación de obtención de datos desde LocalStorage
  useEffect(() => {
    // Datos de técnicos para las pruebas
    const data = JSON.parse(localStorage.getItem('technicians')) || [
      { id: 1, name: 'Juan Pérez', specialty: 'electricista', rating: [5, 4, 5], phone: '123456789' },
      { id: 2, name: 'Carlos López', specialty: 'sanitario', rating: [4, 4, 4], phone: '987654321' },
      { id: 3, name: 'Ana Gómez', specialty: 'cerrajero', rating: [5, 5, 5], phone: '543216789' },
      { id: 4, name: 'Luis Rodríguez', specialty: 'refrigeración', rating: [3, 4, 3], phone: '654321987' },
    ];

    // Filtramos los técnicos según la especialidad
    setTechnicians(data.filter((tech) => tech.specialty === specialty));
  }, [specialty]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Técnicos de {specialty}</h2>
      <div>
        {technicians.map((tech) => (
          <div key={tech.id} style={cardStyle}>
            <h3>{tech.name}</h3>
            <p>Calificación: {calculateAverageRating(tech.rating)} ⭐</p>
            <p>Teléfono: {tech.phone}</p>
            {/* Enlace para ir al formulario de calificación */}
            <Link to={`/rate/${tech.id}`} style={buttonStyle}>Calificar Técnico</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Función para calcular el promedio de las calificaciones
const calculateAverageRating = (ratings) => {
  const sum = ratings.reduce((acc, rating) => acc + rating, 0);
  return (sum / ratings.length).toFixed(1); // Promedio de calificaciones
};

export default Technicians;