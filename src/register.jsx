import React, { useState } from "react";
import axios from "axios";

function Register({ onRegisterSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        email,
        password,
      });
      setSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.");
      if (onRegisterSuccess) onRegisterSuccess();
    } catch (err) {
      setError(
        err.response?.data?.error || "Error al registrar usuario"
      );
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "80%",
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "80%",
          }}
        />
        <input
          type="password"
          placeholder="Repetir contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          Registrarse
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default Register;
