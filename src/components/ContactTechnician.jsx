// src/components/ContactTechnician.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ContactTechnician = () => {
  const { id } = useParams(); // Obtenemos el ID del técnico desde la URL
  const [technician, setTechnician] = useState(null);

  useEffect(() => {
    const technicians = JSON.parse(localStorage.getItem('technicians')) || [];
    const technicianData = technicians.find((tech) => tech.id === parseInt(id));
    setTechnician(technicianData);
  }, [id]);

  return (
    <div>
      {technician ? (
        <div>
          <h1>Contactar a {technician.name}</h1>
          <p>Especialidad: {technician.specialty}</p>
          <p>Teléfono: {technician.phone}</p>
          {/* Aquí puedes agregar un formulario de contacto o detalles adicionales */}
        </div>
      ) : (
        <p>Técnico no encontrado.</p>
      )}
    </div>
  );
};

export default ContactTechnician;