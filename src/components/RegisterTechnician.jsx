// src/components/RegisterTechnician.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importamos el hook useNavigate



const RegisterTechnician = () => {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [phone, setPhone] = useState('');
  
    // Función para manejar el registro del técnico
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Obtener los técnicos actuales del LocalStorage
      const technicians = JSON.parse(localStorage.getItem('technicians')) || [];
  
      // Crear un nuevo objeto para el técnico
      const newTechnician = {
        id: technicians.length + 1, // Asignamos un ID basado en el largo actual de la lista
        name,
        specialty,
        phone,
        rating: 0, // Nuevo técnico con rating inicial 0
      };
  
      // Agregar el nuevo técnico al array
      technicians.push(newTechnician);
  
      // Guardar el array actualizado de técnicos en el LocalStorage
      localStorage.setItem('technicians', JSON.stringify(technicians));
  
      // Limpiar los campos del formulario
      setName('');
      setSpecialty('');
      setPhone('');
  
      // Mostrar un mensaje de éxito (opcional)
      alert('Técnico registrado correctamente!');
    };
  
    return (
      <div>
        <h2>Registrar Técnico</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Especialidad:</label>
            <input
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit">Registrar Técnico</button>
        </form>
      </div>
    );
  };
  
  export default RegisterTechnician;