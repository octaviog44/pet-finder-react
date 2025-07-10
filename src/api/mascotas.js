import axios from "axios";

const API_URL = "http://localhost:3000/api/mascotas";

export const reportarMascota = async (mascota) => {
  const res = await axios.post(API_URL, mascota);
  return res.data;
};

export const obtenerMascotas = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const editarMascota = async (id, mascota) => {
  const res = await axios.put(`${API_URL}/${id}`, mascota);
  return res.data;
};

export const eliminarMascota = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
