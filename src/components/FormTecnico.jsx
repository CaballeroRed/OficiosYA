// src/components/FormTécnico.jsx
import React, { useState } from 'react';
import './Form.css'; // Usamos los mismos estilos para mantener la consistencia

function FormTécnico() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    oficio: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registro como técnico realizado con éxito');
    console.log(formData); // Aquí enviarías los datos al backend
  };

  return (
    <div className="form-container">
      <h2>Registro de Técnico</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="oficio">Especialidad (oficio):</label>
          <select
            id="oficio"
            name="oficio"
            value={formData.oficio}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecciona un oficio</option>
            <option value="Sanitaria">Sanitaria</option>
            <option value="Electricidad">Electricidad</option>
            <option value="Aire Acondicionado">Aire Acondicionado</option>
            <option value="Mampostería">Mampostería</option>
          </select>
        </div>

        <button type="submit">Registrar Técnico</button>
      </form>
    </div>
  );
}

export default FormTécnico;