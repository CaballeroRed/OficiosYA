// src/components/Rating.jsx
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Componente para calificar a un técnico
function Rating() {
  const { techId } = useParams(); // Captura el id del técnico que se va a calificar
  const [rating, setRating] = useState(0); // Calificación (0 a 5 estrellas)
  const [comment, setComment] = useState(''); // Comentario
  const [isCommentValid, setIsCommentValid] = useState(true); // Validación del comentario
  const navigate = useNavigate();

  // Función para manejar la calificación por estrellas
  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  // Función para manejar los cambios en el comentario
  const handleCommentChange = (e) => {
    const newComment = e.target.value;
    setComment(newComment);

    // Validación del comentario (máximo 200 caracteres)
    if (newComment.length <= 200) {
      setIsCommentValid(true);
    } else {
      setIsCommentValid(false);
    }
  };

  // Función para enviar la calificación
  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert('Por favor, selecciona una calificación de 1 a 5 estrellas.');
      return;
    }

    if (comment.length === 0 || !isCommentValid) {
      alert('Por favor, ingresa un comentario válido (máximo 200 caracteres).');
      return;
    }

    // Obtener los datos de los técnicos desde LocalStorage
    const technicians = JSON.parse(localStorage.getItem('technicians'));
    const techIndex = technicians.findIndex((tech) => tech.id === parseInt(techId));

    // Actualizar la calificación del técnico con el nuevo valor
    technicians[techIndex].rating.push(rating); // Agregar la nueva calificación

    // Guardar los datos actualizados en LocalStorage
    localStorage.setItem('technicians', JSON.stringify(technicians));

    alert('¡Calificación enviada exitosamente!');

    // Redirigir al cliente a la página de técnicos
    navigate(`/technicians/${technicians[techIndex].specialty}`);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3>Calificar Técnico</h3>
      <div>
        {[1, 2, 3, 4, 5].map((starValue) => (
          <span
            key={starValue}
            className={`star ${starValue <= rating ? 'filled' : ''}`}
            onClick={() => handleStarClick(starValue)}
            style={{ cursor: 'pointer', fontSize: '30px', color: '#ddd' }}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        placeholder="Escribe tu comentario (máximo 200 caracteres)"
        value={comment}
        onChange={handleCommentChange}
        maxLength="200"
        style={{ width: '300px', height: '80px', padding: '10px', margin: '10px 0' }}
      />
      {!isCommentValid && <p style={{ color: 'red' }}>El comentario no debe superar los 200 caracteres.</p>}

      <button onClick={handleSubmit} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>Enviar Calificación</button>
    </div>
  );
}

export default Rating;