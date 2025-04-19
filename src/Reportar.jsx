import React, { useState } from "react";

function Reportar({ nombreMascota, onClose }) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la información
    console.log("Información reportada:", { nombre, telefono, ubicacion });
    onClose(); // Cerrar el formulario después de enviar
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        zIndex: 1000,
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        &times; {/* Cruz para cerrar */}
      </button>
      <h2>Reportar información de {nombreMascota}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "80%",
          }}
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "80%",
          }}
        />
        <input
          type="text"
          placeholder="¿Dónde lo viste?"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          required
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "80%",
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Enviar información
        </button>
      </form>
    </div>
  );
}

export default Reportar;
