// src/components/RegisterTechnician.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importamos el hook useNavigate

function RegisterTechnician() {
  // Estado para almacenar los valores del formulario del técnico
  const [technicianData, setTechnicianData] = useState({
    name: '',
    surname: '',
    idNumber: '',
    phone: '',
    specialty: ''  // Agregamos un campo de especialidad
  });

  // Usamos el hook useNavigate para redirigir al técnico después del registro
  const navigate = useNavigate();

  // Manejador de cambios para los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTechnicianData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validamos que todos los campos estén completos
    if (!technicianData.name || !technicianData.surname || !technicianData.idNumber || !technicianData.phone || !technicianData.specialty) {
      alert('Por favor completa todos los campos.');
      return;
    }
    
    // Guardamos los datos del técnico en LocalStorage
    localStorage.setItem('technicianData', JSON.stringify(technicianData));
    
    // Mostramos una alerta indicando que el registro fue exitoso
    alert('Técnico registrado con éxito');
    
    // Redirigimos a la página principal ("/") después de 1 segundo
    setTimeout(() => {
      navigate('/');
    }, 1000);  // Esperamos 1 segundo para que el usuario vea la alerta
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Formulario de Registro de Técnico</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={technicianData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="surname">Apellido:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={technicianData.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="idNumber">Cédula:</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={technicianData.idNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={technicianData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="specialty">Especialidad:</label>
          <select
            id="specialty"
            name="specialty"
            value={technicianData.specialty}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una especialidad</option>
            <option value="electricista">Electricista</option>
            <option value="sanitario">Sanitario</option>
            <option value="cerrajero">Cerrajero</option>
            <option value="refrigeracion">Técnico en Refrigeración</option>
          </select>
        </div>
        <button type="submit">Registrar Técnico</button>
      </form>
    </div>
  );
}

export default RegisterTechnician;