import React, { useState, useEffect } from 'react';
import { getAreas, deleteArea } from './api';
import CreateAreaForm from './CreateAreaForm';
import EditAreaForm from './EditAreaForm';
import './DataTable.css'
const DataTable = () => {
  const [areas, setAreas] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchAreas = () => {
    getAreas().then(response => {
      setAreas(response.data.Area || []);
    }).catch(error => {
      console.error("Error fetching data: ", error);
    });
  };

  useEffect(() => {
    fetchAreas();
  }, []);

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleDeleteClick = async (id) => {
    try {
      await deleteArea(id);
      fetchAreas();
    } catch (error) {
      console.error("Error deleting area: ", error);
    }
  };

  return (
    <div>
      <h1 class = "centre">CRUD </h1>
      <CreateAreaForm onAreaCreated={fetchAreas} />
      {editingId && <EditAreaForm id={editingId} onAreaUpdated={() => {
        fetchAreas();
        setEditingId(null);
      }} />}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Área</th>
            <th>Porcentaje Comisión</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {areas.map(area => (
            <tr key={area.id}>
              <td>{area.id}</td>
              <td>{area.nombre_area}</td>
              <td>{area.porcentaje_comision}</td>
              <td>
                <button onClick={() => handleEditClick(area.id)}>Editar</button>
                <button onClick={() => handleDeleteClick(area.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
