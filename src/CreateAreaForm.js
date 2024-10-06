import React, { useState } from 'react';
import { createArea, getAreas } from './api';

const CreateAreaForm = ({ onAreaCreated }) => {
  const [nombre_area, setNombreArea] = useState('');
  const [porcentaje_comision, setPorcentajeComision] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createArea({ nombre_area, porcentaje_comision });
      onAreaCreated(); // Callback para actualizar la lista de áreas
      setNombreArea('');
      setPorcentajeComision('');
    } catch (error) {
      console.error("Error creating area: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre Área:</label>
        <input 
          type="text" 
          value={nombre_area} 
          onChange={(e) => setNombreArea(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Porcentaje Comisión:</label>
        <input 
          type="number" 
          value={porcentaje_comision} 
          onChange={(e) => setPorcentajeComision(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Crear Área</button>
    </form>
  );
};

export default CreateAreaForm;
