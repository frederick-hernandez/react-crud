import axios from 'axios';

const API_URL = 'https://ferreteria-api.onrender.com/api/v2/areas/findall';

export const createArea = area => axios.post('https://ferreteria-api.onrender.com/api/v2/areas/create', area);
export const getItem = (id) => axios.get(`https://ferreteria-api.onrender.com/api/v2/areas/findbyid/${id}`,id);
export const updateArea = (id, area) => axios.put(`https://ferreteria-api.onrender.com/api/v2/areas/update/${id}`, area);
export const deleteArea = (id) => axios.delete(`https://ferreteria-api.onrender.com/api/v2/areas/delete/${id}`);

export const getAreas = () => axios.get(API_URL);


