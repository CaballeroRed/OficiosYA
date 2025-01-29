// src/components/ContactTechnician.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ContactTechnician() {
  const { id } = useParams(); // Obtener el ID del técnico desde la URL
  const [technician, setTechnician] = useState(null);

  // Cargar la información del técnico seleccionado desde el LocalStorage
  useEffect(() => {
    const technicians = JSON.parse(localStorage.getItem('technicians')) || [];
    const technicianFound = technicians.find((tech) => tech.id === parseInt(id));
    setTechnician(technicianFound);
  }, [id]);

  if (!technician) {
    return <p>¡Técnico no encontrado!</p>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Contactar a {technician.name}</h1>
      <p>Especialidad: {technician.specialty}</p>
      <p>Teléfono: {technician.phone}</p>

      <form>
        <textarea placeholder="Escribe tu mensaje..." rows="5" style={{ width: '100%' }}></textarea>
        <div>
          <button type="submit">Enviar Mensaje</button>
        </div>
      </form>
    </div>
  );
}

export default ContactTechnician;