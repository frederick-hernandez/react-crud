import React, { useState, useEffect } from 'react';
import { updateArea, getItem } from './api';

const EditAreaForm = ({ id, onAreaUpdated }) => {
  const [nombre_area, setNombreArea] = useState('');
  const [porcentaje_comision, setPorcentajeComision] = useState('');

  useEffect(() => {
    // Cargar los datos del área actual para editar
    getItem(id).then(response => {
      setNombreArea(response.data.nombre_area);
      setPorcentajeComision(response.data.porcentaje_comision);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateArea(id, { nombre_area, porcentaje_comision });
      onAreaUpdated(); // Callback para actualizar la lista de áreas
    } catch (error) {
      console.error("Error updating area: ", error);
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
      <button type="submit">Actualizar Área</button>
    </form>
  );
};

export default EditAreaForm;
