
import React, { useState, useEffect } from "react";
import { obtenerMascotas } from "./api/mascotas";
import Reportar from "./Reportar.jsx";

function Mascotas() {
  const [reportarMascota, setReportarMascota] = useState(null);
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    // Obtener mascotas del backend
    const fetchMascotas = async () => {
      try {
        const data = await obtenerMascotas();
        setMascotas(data);
      } catch (error) {
        console.error("Error al obtener mascotas:", error);
      }
    };
    fetchMascotas();
  }, []);

  const handleReportarClick = (nombre) => {
    setReportarMascota(nombre);
  };

  const handleCloseReportar = () => {
    setReportarMascota(null);
  };

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      <h2>Mascotas perdidas cerca</h2>
      {mascotas.map((mascota) => (
        <div
          key={mascota.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <img
            src={mascota.foto || "/vacio.png"}
            alt={mascota.nombre}
            style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "5px" }}
          />
          <h3>{mascota.nombre}</h3>
          <p>{mascota.ubicacion}</p>
          <button
            onClick={() => handleReportarClick(mascota.nombre)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Reportar
          </button>
        </div>
      ))}
      {reportarMascota && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.4)",
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Reportar
            nombreMascota={reportarMascota}
            onClose={handleCloseReportar}
          />
        </div>
      )}
    </div>
  );
}

export default Mascotas;
