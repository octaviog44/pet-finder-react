import React, { useState, useEffect } from "react";
import { obtenerMascotas, editarMascota, eliminarMascota } from "../api/mascotas";

const MascotasReportadas = ({ userEmail }) => {
  const [misMascotas, setMisMascotas] = useState([]);
  const [editando, setEditando] = useState(null);
  const [form, setForm] = useState({ nombre: "", ubicacion: "", foto: "", position: [0, 0] });

  useEffect(() => {
    const fetchMascotas = async () => {
      const todas = await obtenerMascotas();
      setMisMascotas(todas.filter(m => m.user_email === userEmail));
    };
    fetchMascotas();
  }, [userEmail]);

  const handleEditar = (mascota) => {
    setEditando(mascota.id);
    setForm({
      nombre: mascota.nombre,
      ubicacion: mascota.ubicacion,
      foto: mascota.foto,
      position: [mascota.position_lat, mascota.position_lng]
    });
  };

  const handleGuardar = async (id) => {
    await editarMascota(id, form);
    setEditando(null);
    // Refresca la lista
    const todas = await obtenerMascotas();
    setMisMascotas(todas.filter(m => m.user_email === userEmail));
  };

  const handleEliminar = async (id) => {
    await eliminarMascota(id);
    setMisMascotas(misMascotas.filter(m => m.id !== id));
  };

  return (
    <div className="container">
      <h2 className="titulo">Mascotas reportadas</h2>
      {misMascotas.length === 0 ? (
        <div className="sin-mascotas">
          <p className="mensaje-vacio">Aún no reportaste mascotas perdidas</p>
        </div>
      ) : (
        <div className="lista-mascotas">
          {misMascotas.map((mascota) =>
            editando === mascota.id ? (
              <div key={mascota.id} className="tarjeta-mascota">
                <input value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} />
                <input value={form.ubicacion} onChange={e => setForm(f => ({ ...f, ubicacion: e.target.value }))} />
                <input value={form.foto} onChange={e => setForm(f => ({ ...f, foto: e.target.value }))} />
                <button onClick={() => handleGuardar(mascota.id)}>Guardar</button>
                <button onClick={() => setEditando(null)}>Cancelar</button>
              </div>
            ) : (
              <div key={mascota.id} className="tarjeta-mascota">
                <img src={mascota.foto || "/vacio.png"} alt={mascota.nombre} className="foto" />
                <div className="info">
                  <h3 className="nombre">{mascota.nombre}</h3>
                  <p className="ubicacion">{mascota.ubicacion}</p>
                </div>
                <button className="boton-editar" onClick={() => handleEditar(mascota)}>Editar ✏️</button>
                <button className="boton-eliminar" onClick={() => handleEliminar(mascota.id)}>Eliminar 🗑️</button>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default MascotasReportadas;
