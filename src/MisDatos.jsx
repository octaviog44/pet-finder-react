import React from "react";
import { Link } from "react-router-dom";

function MisDatos({ email, onClose }) {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        position: "relative",
      }}
    >
      <h2 style={{ fontSize: "24px", margin: "0 0 20px 0" }}>Mis datos</h2>
      <p style={{ fontSize: "18px", margin: "0 0 20px 0" }}>{email}</p>
      <Link to="/modificar-datos">
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px",
            width: "80%",
          }}
        >
          Modificar datos personales
        </button>
      </Link>
      <Link to="/modificar-contrasena">
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px",
            width: "80%",
          }}
        >
          Modificar contraseña
        </button>
      </Link>
      <button
        onClick={onClose}
        style={{
          backgroundColor: "gray",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "10px",
          width: "80%",
        }}
      >
        Cerrar
      </button>
    </div>
  );
}

export default MisDatos;
