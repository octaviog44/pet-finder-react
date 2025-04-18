import React, { useState } from "react";

const ModificarDatos = () => {
  const [nombre, setNombre] = useState("TOBIAS");
  const [localidad, setLocalidad] = useState("LA PLATA, ARGENTINA");

  const handleGuardar = () => {
    console.log("Datos guardados:", { nombre, localidad });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Datos personales</h1>
      <label>
        NOMBRE
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>
        LOCALIDAD
        <input
          type="text"
          value={localidad}
          onChange={(e) => setLocalidad(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleGuardar}>Guardar</button>
    </div>
  );
};

export default ModificarDatos;
