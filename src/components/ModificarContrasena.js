import React, { useState } from "react";

const ModificarContrasena = ({ onGuardar }) => {
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contrasena === confirmarContrasena) {
      onGuardar(contrasena);
      // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Contraseña</h2>
      <label style={{ display: "block", marginBottom: "10px" }}>
        CONTRASEÑA
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
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
        CONFIRMAR CONTRASEÑA
        <input
          type="password"
          value={confirmarContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
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

export default ModificarContrasena;
