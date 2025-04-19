import React, { useState } from "react";

const DatosPersonales = ({ onGuardar }) => {
  const [nombre, setNombre] = useState("");
  const [localidad, setLocalidad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar({ nombre, localidad });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Datos personales
      </h2>
      <label style={{ display: "block", marginBottom: "10px" }}>
        NOMBRE
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "10px" }}>
        LOCALIDAD
        <input
          type="text"
          value={localidad}
          onChange={(e) => setLocalidad(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </label>
      <button
        type="submit"
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Guardar
      </button>
    </form>
  );
};

export default DatosPersonales;
