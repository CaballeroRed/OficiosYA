// src/components/RegisterClient.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importamos el hook useNavigate

function RegisterClient() {
  // Estado para almacenar los valores del formulario
  const [clientData, setClientData] = useState({
    name: '',
    surname: '',
    idNumber: '',
    phone: '',
    city: ''
  });

  // Usamos el hook useNavigate para redirigir al cliente después del registro
  const navigate = useNavigate();

  // Manejador de cambios para los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validamos que todos los campos estén completos
    if (!clientData.name || !clientData.surname || !clientData.idNumber || !clientData.phone || !clientData.city) {
      alert('Por favor completa todos los campos.');
      return;
    }
    
    // Guardamos los datos del cliente en LocalStorage
    localStorage.setItem('clientData', JSON.stringify(clientData));
    
    // Mostramos una alerta indicando que el registro fue exitoso
    alert('Cliente registrado con éxito');
    
    // Redirigimos a la página principal ("/") después de 1 segundo
    setTimeout(() => {
      navigate('/');
    }, 1000);  // Esperamos 1 segundo para que el usuario vea la alerta
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Formulario de Registro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={clientData.name}
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
            value={clientData.surname}
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
            value={clientData.idNumber}
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
            value={clientData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">Ciudad:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={clientData.city}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrar Cliente</button>
      </form>
    </div>
  );
}

export default RegisterClient;