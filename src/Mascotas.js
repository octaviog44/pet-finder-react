import React, { useState } from "react";
import Reportar from "./Reportar"; // Importar el nuevo componente

const mascotasData = [
  {
    id: 1,
    nombre: "Bobby",
    ubicacion: "Nuñez, Buenos Aires",
    imagen: "/path/to/bobby.jpg",
  },
  {
    id: 2,
    nombre: "Robert",
    ubicacion: "Nuñez, Buenos Aires",
    imagen: "/path/to/robert.jpg",
  },
  // Agrega más mascotas según sea necesario
];

function Mascotas() {
  const [reportarMascota, setReportarMascota] = useState(null); // Estado para manejar la mascota a reportar

  const handleReportarClick = (nombre) => {
    setReportarMascota(nombre); // Establecer la mascota a reportar
  };

  const handleCloseReportar = () => {
    setReportarMascota(null); // Cerrar el formulario de reporte
  };

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      <h2>Mascotas perdidas cerca</h2>
      {mascotasData.map((mascota) => (
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
            src={mascota.imagen}
            alt={mascota.nombre}
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
          />
          <h3>{mascota.nombre}</h3>
          <p>{mascota.ubicacion}</p>
          <button
            onClick={() => handleReportarClick(mascota.nombre)} // Llamar a la función al hacer clic
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
      {reportarMascota && ( // Mostrar el formulario si hay una mascota a reportar
        <Reportar
          nombreMascota={reportarMascota}
          onClose={handleCloseReportar}
        />
      )}
    </div>
  );
}

export default Mascotas;
